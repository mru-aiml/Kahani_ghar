import { generateGroqCompletion } from "./gnani.service.js";
import { storyStructureSchema } from "../validators/story.validator.js";
import { httpError } from "../utils/api.js";

const safety = "Keep this age-appropriate: no violence, fear, adult themes, brands, or real people outside the family. End warmly and happily.";
function parseStory(content) {
  try {
    const story = JSON.parse(content.replace(/^```json\s*|\s*```$/g, ""));
    // Strict structured outputs represent the optional field as null.
    story.scenes = story.scenes.map(({ choices, ...scene }) =>
      choices === null ? scene : { ...scene, choices }
    );
    return storyStructureSchema.parse(story);
  }
  catch { throw httpError(502, "LLM_INVALID_RESPONSE", "Groq did not return a valid story."); }
}

export async function createGeneratedStory(input) {
  const system = `You are KahaniGhar, a warm storyteller for Indian children. Write in ${input.language}; use native script where applicable. Personalize for ${input.child.nickname}, age ${input.child.ageBand}; interests: ${input.child.interests.join(", ") || "none"}. ${input.interactive ? "Include 2-3 optional decision points." : "No decision points."} Produce 5-8 short scenes. ${safety} Return ONLY JSON: {"title":string,"characters":string[],"moral":string,"scenes":[{"idx":number,"text":string,"choices"?:string[]}]}.`;
  return parseStory(await generateGroqCompletion([{ role: "system", content: system }, { role: "user", content: `Story idea: ${input.transcript}` }]));
}

export async function createBranch({ story, choice }) {
  const prior = story.structure.scenes.map((scene) => `Scene ${scene.idx}: ${scene.text}`).join("\n");
  const system = `You continue a children's story in ${story.language}. Return ONLY JSON matching {"title":string,"characters":string[],"moral":string,"scenes":[{"idx":number,"text":string,"choices"?:string[]}]}. Return 1-2 new scenes only and move to a warm ending. ${safety}`;
  const generated = parseStory(await generateGroqCompletion([{ role: "system", content: system }, { role: "user", content: `${prior}\n\nChild chooses: ${choice}` }]));
  generated.scenes = generated.scenes.map((scene, index) => ({ ...scene, idx: story.structure.scenes.length + index }));
  return generated;
}
