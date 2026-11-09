import express from "express";
import cors from "cors";
import path from "node:path";
import { env } from "./config/env.js";
import { attachUser } from "./middleware/auth.js";
import { errorHandler, notFound } from "./middleware/error.js";
import storyRoutes from "./routes/story.routes.js";
import speechRoutes from "./routes/speech.routes.js";

export const app = express();
app.use(cors({ origin: env.clientOrigin, methods: ["GET", "POST", "DELETE"], allowedHeaders: ["Content-Type", "Authorization", "x-user-id"] }));
app.use(express.json({ limit: "1mb" }));
app.use("/uploads", express.static(path.resolve("uploads")));
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use(attachUser);
app.use("/api/stories", storyRoutes);
app.use("/api", speechRoutes);
app.use(notFound);
app.use(errorHandler);
