import { Story } from "../models/Story.js";
import { createStorySchema, branchStorySchema } from "../validators/story.validator.js";
import { createGeneratedStory, createBranch } from "../services/story-generator.service.js";
import { success, httpError } from "../utils/api.js";
import { serializeStory } from "../utils/story.js";

export async function createStory(req, res) {
  const input = createStorySchema.parse(req.body);
  const structure = await createGeneratedStory(input);
  const story = await Story.create({ ownerId: req.user.id, title: structure.title, language: input.language, kind: input.kind, ageBand: input.child.ageBand, child: { nickname: input.child.nickname, interests: input.child.interests }, structure });
  return success(res, serializeStory(story), 201);
}

export async function listStories(req, res) {
  const { query = "", language, kind, limit = "20", offset = "0" } = req.query;
  const filter = { ownerId: req.user.id };
  if (language && language !== "all") filter.language = language;
  if (kind && kind !== "all") filter.kind = kind;
  if (query) filter.$or = [{ title: { $regex: query, $options: "i" } }, { "child.nickname": { $regex: query, $options: "i" } }];
  const safeLimit = Math.min(Math.max(Number(limit) || 20, 1), 50);
  const safeOffset = Math.max(Number(offset) || 0, 0);
  const [stories, total] = await Promise.all([Story.find(filter).sort({ createdAt: -1 }).skip(safeOffset).limit(safeLimit), Story.countDocuments(filter)]);
  return success(res, { stories: stories.map(serializeStory), total, hasMore: safeOffset + stories.length < total });
}

export async function ownedStory(id, ownerId) {
  const story = await Story.findOne({ _id: id, ownerId });
  if (!story) throw httpError(404, "NOT_FOUND", "Story not found.");
  return story;
}

export async function getStory(req, res) { return success(res, serializeStory(await ownedStory(req.params.id, req.user.id))); }
export async function deleteStory(req, res) { const story = await ownedStory(req.params.id, req.user.id); await story.deleteOne(); return success(res, { deleted: true, id: req.params.id }); }
export async function branchStory(req, res) {
  const { choice } = branchStorySchema.parse(req.body);
  const story = await ownedStory(req.params.id, req.user.id);
  if (story.branchCount >= 3) throw httpError(400, "BRANCH_LIMIT_REACHED", "This story has reached its three-choice limit.");
  const generated = await createBranch({ story, choice });
  const existingSceneCount = story.structure.scenes.length;
  story.structure.scenes.push(...generated.scenes);
  story.structure.moral = generated.moral || story.structure.moral;
  story.branchCount += 1;
  await story.save();
  // Return the persisted scenes so their generated UUIDs are sent to the
  // frontend. Returning the LLM payload would discard the database IDs.
  return success(res, { scenes: story.structure.scenes.slice(existingSceneCount) });
}
