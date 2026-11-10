import { z } from "zod";

const languages = ["hi-IN", "en-IN", "hi-en", "mr-IN", "ta-IN", "te-IN"];
const scene = z.object({ idx: z.number().int().nonnegative(), text: z.string().min(1), choices: z.array(z.string().min(1)).min(2).max(3).optional() });
export const storyStructureSchema = z.object({
  title: z.string().min(1), characters: z.array(z.string().min(1)).min(1), moral: z.string().min(1), scenes: z.array(scene).min(1).max(8)
});
export const createStorySchema = z.object({
  transcript: z.string().min(1).max(5000),
  language: z.enum(languages),
  child: z.object({ nickname: z.string().min(1).max(50), ageBand: z.enum(["3-5", "6-8", "9-10"]), interests: z.array(z.string().max(30)).max(10).default([]) }),
  kind: z.enum(["memory", "folklore", "generated"]).default("memory"),
  interactive: z.boolean().default(true)
});
export const branchStorySchema = z.object({ choice: z.string().min(1).max(200) });
export const ttsSchema = z.object({
  storyId: z.string().min(1),
  sceneIndex: z.number().int().min(0).optional(),
  // Preferred stable identifier for persisted stories. Generated scene UUIDs
  // make TTS caching independent of scene ordering.
  sceneId: z.string().uuid().optional(),
  voice: z.string().min(1).max(100).default("Pranav"),
  language: z.enum(languages).optional(),
  // Present for browser-only demo stories, which are not persisted in MongoDB.
  text: z.string().min(1).max(2_000).optional()
});
