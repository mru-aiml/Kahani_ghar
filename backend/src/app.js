import express from "express";
import cors from "cors";
import path from "node:path";
import { env } from "./config/env.js";
import { attachUser } from "./middleware/auth.js";
import { errorHandler, notFound } from "./middleware/error.js";
import storyRoutes from "./routes/story.routes.js";
import speechRoutes from "./routes/speech.routes.js";

export const app = express();
const allowedOrigins = env.clientOrigins?.length ? env.clientOrigins : [env.clientOrigin];

const corsOptions = {
  origin(origin, callback) {
    // Allow same-origin/server-side requests with no Origin header, and exact
    // configured browser origins. Configured origins are already normalized to
    // remove trailing slashes.
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-user-id"],
  credentials: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: "1mb" }));
app.use("/uploads", express.static(path.resolve("uploads")));
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use(attachUser);
app.use("/api/stories", storyRoutes);
app.use("/api", speechRoutes);
app.use(notFound);
app.use(errorHandler);
