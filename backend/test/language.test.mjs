import test from "node:test";
import assert from "node:assert/strict";
import { languageInstruction } from "../src/services/story-generator.service.js";

test("English prompt requires English", () => {
  const instruction = languageInstruction("en-IN");
  assert.match(instruction, /complete story in English/);
  assert.match(instruction, /Do not use Hindi/);
});

test("Hindi prompt requires Hindi", () => {
  const instruction = languageInstruction("hi-IN");
  assert.match(instruction, /complete story in Hindi/);
  assert.match(instruction, /Devanagari/);
});

test("Hinglish prompt requires mixed language", () => {
  const instruction = languageInstruction("hi-en");
  assert.match(instruction, /Hinglish/);
  assert.match(instruction, /Roman script/);
});

test("Marathi prompt requires Marathi", () => {
  const instruction = languageInstruction("mr-IN");
  assert.match(instruction, /complete story in Marathi/);
  assert.match(instruction, /Devanagari/);
});
