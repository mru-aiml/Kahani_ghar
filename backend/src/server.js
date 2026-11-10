import crypto from "node:crypto";
import mongoose from "mongoose";
import { app } from "./app.js";
import { env } from "./config/env.js";
import { Story } from "./models/Story.js";

// Narration does not need MongoDB when the frontend supplies the scene text
// (which is how mock/demo stories work). Start the HTTP server independently
// so a temporary Atlas/DNS outage does not make every API endpoint appear down.
app.listen(env.port, () => console.log(`KahaniGhar backend listening on http://localhost:${env.port}`));

mongoose.connect(env.mongoUri).then(async () => {
  console.log("MongoDB connected");
  try {
    const legacyStories = await Story.find({ "structure.scenes.id": { $exists: false } });
    for (const story of legacyStories) {
      let changed = false;
      if (Array.isArray(story.structure?.scenes)) {
        for (const scene of story.structure.scenes) {
          if (!scene.id) {
            scene.id = crypto.randomUUID();
            changed = true;
          }
        }
      }
      if (changed) await story.save();
    }
    if (legacyStories.length > 0) {
      console.log(`Backfilled scene IDs for ${legacyStories.length} legacy stories`);
    }
  } catch (error) {
    console.error("Scene ID backfill failed:", error.message);
  }
}).catch((error) => {
  console.error("MongoDB connection failed; story persistence is unavailable:", error.message);
});
