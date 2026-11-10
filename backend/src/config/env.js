import "dotenv/config";

const configuredClientOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:3100")
  .split(",")
  .map((origin) => origin.trim().replace(/\/+$/, ""))
  .filter(Boolean);

export const env = {
  port: Number(process.env.PORT || 5000),
  clientOrigin: configuredClientOrigins[0] || "http://localhost:3100",
  clientOrigins: configuredClientOrigins,
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kahanighar",
  demoUserId: process.env.DEMO_USER_ID || "local-family",
  allowDemoAuth: process.env.ALLOW_DEMO_AUTH === "true",
  supabase: { url: process.env.SUPABASE_URL || "", anonKey: process.env.SUPABASE_ANON_KEY || "" },
  gnani: {
    apiKey: process.env.GNANI_API_KEY || "",
    baseUrl: (process.env.GNANI_BASE_URL || "https://api.vachana.ai").replace(/\/$/, ""),
    sttModel: process.env.GNANI_STT_MODEL || "prisma-v2.5",
    ttsModel: process.env.GNANI_TTS_MODEL || "timbre-v2.5",
  },
  groq: {
    // XAI_API_KEY is kept as a temporary fallback so existing local .env files
    // continue to work after the provider name is corrected to Groq.
    apiKey: process.env.GROQ_API_KEY || process.env.XAI_API_KEY || "",
    baseUrl: (process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1").replace(/\/$/, ""),
    model: process.env.GROQ_MODEL || "openai/gpt-oss-120b"
  }
};

export function requireEnv(name, value) {
  if (!value) throw Object.assign(new Error(`Missing required environment variable: ${name}`), { statusCode: 500, code: "CONFIGURATION_ERROR" });
}
