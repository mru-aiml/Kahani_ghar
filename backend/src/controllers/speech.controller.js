import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { Recording } from "../models/Recording.js";
import { transcribeAudio, synthesizeSpeech } from "../services/gnani.service.js";
import { ttsSchema } from "../validators/story.validator.js";
import { success, httpError } from "../utils/api.js";
import { ownedStory } from "./story.controller.js";

const audioDirectory = path.resolve("uploads", "audio");
export async function transcribe(req, res) {
  if (!req.file) throw httpError(400, "VALIDATION_ERROR", "audio_file is required.");
  const result = await transcribeAudio(req.file, { languageCode: req.body.language_code, model: req.body.model });
  const recording = await Recording.create({ ownerId: req.user.id, filename: req.file.originalname, mimeType: req.file.mimetype, size: req.file.size, transcript: result.transcript, language: result.detectedLanguageCode });
  return success(res, { ...result, recordingId: String(recording._id) });
}
export async function tts(req, res) {
  const input = ttsSchema.parse(req.body);
  // API-created stories are resolved from MongoDB. Local demo stories have a
  // browser-generated id, so their scene text is sent explicitly instead.
  const story = input.text ? null : await ownedStory(input.storyId, req.user.id);
  const sceneText = input.text || story?.structure.scenes[input.sceneIndex]?.text;
  if (!sceneText) throw httpError(404, "NOT_FOUND", "Scene not found.");
  await fs.mkdir(audioDirectory, { recursive: true });
  const key = crypto.createHash("sha256").update(`${input.storyId}:${input.sceneIndex}:${input.voice}:${input.language || story?.language}:${sceneText}`).digest("hex");
  const filename = `${key}.wav`;
  const filepath = path.join(audioDirectory, filename);
  let cached = true;
  try { await fs.access(filepath); } catch { await fs.writeFile(filepath, await synthesizeSpeech({ text: sceneText, voice: input.voice, language: input.language || story?.language })); cached = false; }
  return success(res, { audioUrl: `${req.protocol}://${req.get("host")}/uploads/audio/${filename}`, cached, format: "wav", sampleRate: 44100 });
}
