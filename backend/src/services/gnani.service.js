import { env, requireEnv } from "../config/env.js";
import { httpError } from "../utils/api.js";

function gnaniHeaders() {
  requireEnv("GNANI_API_KEY", env.gnani.apiKey);
  return { "X-API-Key-ID": env.gnani.apiKey };
}

async function checkedFetch(url, options, label) {
  let response;
  try { response = await fetch(url, options); } catch { throw httpError(502, "GNANI_NETWORK_ERROR", `${label} could not be reached.`); }
  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error(`${label} error`, response.status, details);
    throw httpError(response.status >= 500 ? 502 : response.status, "GNANI_REQUEST_FAILED", `${label} request failed.`);
  }
  return response;
}

export async function transcribeAudio(file, options = {}) {
  const form = new FormData();
  form.append("audio_file", new Blob([file.buffer], { type: file.mimetype }), file.originalname);
  form.append("model", options.model || env.gnani.sttModel);
  form.append("language_code", options.languageCode || "hi-IN");
  const response = await checkedFetch(`${env.gnani.baseUrl}/stt/v3`, { method: "POST", headers: gnaniHeaders(), body: form }, "Gnani STT");
  const body = await response.json();
  return { transcript: body.transcript || "", requestId: body.request_id || "", model: body.model || env.gnani.sttModel, detectedLanguageCode: body.detected_language_code };
}

export async function synthesizeSpeech({ text, voice, language }) {
  const response = await checkedFetch(`${env.gnani.baseUrl}/api/v1/tts/inference`, {
    method: "POST", headers: { ...gnaniHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice, language, model: env.gnani.ttsModel, audio_config: { sample_rate: 44100, num_channels: 1, sample_width: 2, encoding: "linear_pcm", container: "wav" } })
  }, "Gnani TTS");
  return Buffer.from(await response.arrayBuffer());
}

export async function generateGroqCompletion(messages) {
  requireEnv("GROQ_API_KEY", env.groq.apiKey);
  // GPT-OSS supports Groq's strict structured-output mode. Requiring the
  // complete story shape avoids JSON-mode validation errors and malformed
  // model responses reaching the story parser.
  const storySchema = {
    type: "object",
    additionalProperties: false,
    required: ["title", "characters", "moral", "scenes"],
    properties: {
      title: { type: "string" },
      characters: { type: "array", items: { type: "string" } },
      moral: { type: "string" },
      scenes: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["idx", "text", "choices"],
          properties: {
            idx: { type: "integer" },
            text: { type: "string" },
            choices: { anyOf: [{ type: "array", items: { type: "string" } }, { type: "null" }] }
          }
        }
      }
    }
  };
  const response = await checkedFetch(`${env.groq.baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${env.groq.apiKey}` },
    body: JSON.stringify({
      model: env.groq.model,
      messages,
      temperature: 0.7,
      reasoning_effort: "low",
      response_format: { type: "json_schema", json_schema: { name: "children_story", strict: true, schema: storySchema } }
    })
  }, "Groq");
  const body = await response.json();
  const content = body.choices?.[0]?.message?.content;
  if (!content) throw httpError(502, "LLM_INVALID_RESPONSE", "Groq returned no story content.");
  return content;
}
