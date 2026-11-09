import mongoose from "mongoose";
import { app } from "./app.js";
import { env } from "./config/env.js";

mongoose.connect(env.mongoUri).then(() => {
  app.listen(env.port, () => console.log(`KahaniGhar backend listening on http://localhost:${env.port}`));
}).catch((error) => { console.error("MongoDB connection failed:", error.message); process.exit(1); });
