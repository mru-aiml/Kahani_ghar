import mongoose from "mongoose";
import { app } from "./app.js";
import { env } from "./config/env.js";

// Narration does not need MongoDB when the frontend supplies the scene text
// (which is how mock/demo stories work). Start the HTTP server independently
// so a temporary Atlas/DNS outage does not make every API endpoint appear down.
app.listen(env.port, () => console.log(`KahaniGhar backend listening on http://localhost:${env.port}`));

mongoose.connect(env.mongoUri).then(() => {
  console.log("MongoDB connected");
}).catch((error) => {
  console.error("MongoDB connection failed; story persistence is unavailable:", error.message);
});
