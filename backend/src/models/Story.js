import mongoose from "mongoose";

const sceneSchema = new mongoose.Schema({
  idx: { type: Number, required: true },
  text: { type: String, required: true },
  choices: { type: [String], default: undefined },
  audioPath: String
}, { _id: false });

const storySchema = new mongoose.Schema({
  ownerId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  language: { type: String, required: true },
  kind: { type: String, required: true },
  ageBand: { type: String, required: true },
  child: {
    nickname: { type: String, required: true },
    interests: { type: [String], default: [] }
  },
  narrator: { type: String, default: "Family" },
  structure: {
    title: String,
    characters: { type: [String], default: [] },
    moral: String,
    scenes: { type: [sceneSchema], default: [] }
  },
  branchCount: { type: Number, default: 0 }
}, { timestamps: true });

storySchema.index({ ownerId: 1, createdAt: -1 });
export const Story = mongoose.model("Story", storySchema);
