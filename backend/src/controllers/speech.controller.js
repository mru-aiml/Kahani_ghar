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
  const story = await ownedStory(input.storyId, req.user.id);
  const scene = story.structure.scenes[input.sceneIndex];
  if (!scene) throw httpError(404, "NOT_FOUND", "Scene not found.");
  await fs.mkdir(audioDirectory, { recursive: true });
  const key = crypto.createHash("sha256").update(`${story.id}:${input.sceneIndex}:${input.voice}:${input.language || story.language}:${scene.text}`).digest("hex");
  const filename = `${key}.wav`;
  const filepath = path.join(audioDirectory, filename);
  let cached = true;
  try { await fs.access(filepath); } catch { await fs.writeFile(filepath, await synthesizeSpeech({ text: scene.text, voice: input.voice, language: input.language || story.language })); cached = false; }
  return success(res, { audioUrl: `${req.protocol}://${req.get("host")}/uploads/audio/${filename}`, cached, format: "wav", sampleRate: 44100 });
}
