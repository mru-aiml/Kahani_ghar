import { Router } from "express";
import multer from "multer";
import { transcribe, tts } from "../controllers/speech.controller.js";
const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 }, fileFilter: (_req, file, cb) => cb(null, file.mimetype.startsWith("audio/")) });
router.post("/stt", upload.single("audio_file"), transcribe);
router.post("/tts", tts);
export default router;
