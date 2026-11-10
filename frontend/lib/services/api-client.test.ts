import { describe, it, expect } from "vitest";
import { normalizeApiBaseUrl } from "./api-client";

describe("normalizeApiBaseUrl", () => {
  it("adds /api when the configured URL omits it", () => {
    expect(normalizeApiBaseUrl("https://kahani-ghar.onrender.com")).toBe(
      "https://kahani-ghar.onrender.com/api"
    );
  });

  it("does not duplicate /api when it is already present", () => {
    expect(normalizeApiBaseUrl("https://kahani-ghar.onrender.com/api")).toBe(
      "https://kahani-ghar.onrender.com/api"
    );
    expect(normalizeApiBaseUrl("https://kahani-ghar.onrender.com/api/")).toBe(
      "https://kahani-ghar.onrender.com/api"
    );
  });

  it("falls back to /api for empty or missing configuration", () => {
    expect(normalizeApiBaseUrl(undefined)).toBe("/api");
    expect(normalizeApiBaseUrl("")).toBe("/api");
    expect(normalizeApiBaseUrl("   ")).toBe("/api");
  });

  it("constructs the exact production stories URL", () => {
    const baseUrl = normalizeApiBaseUrl("https://kahani-ghar.onrender.com");
    expect(`${baseUrl}/stories`).toBe(
      "https://kahani-ghar.onrender.com/api/stories"
    );
  });
});
