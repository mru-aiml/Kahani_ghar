import mongoose from "mongoose";

const recordingSchema = new mongoose.Schema({
  ownerId: { type: String, required: true, index: true },
  filename: { type: String, required: true },
  mimeType: String,
  size: Number,
  transcript: String,
  language: String
}, { timestamps: true });

export const Recording = mongoose.model("Recording", recordingSchema);
