// API client for backend integration
// Provides consistent response parsing, typed error handling, and request utilities

import type { ApiErrorResponse } from "@/lib/api/schemas";
import { getBrowserSupabase } from "@/lib/auth/browser";

export class ApiError extends Error {
  constructor(
    public readonly code: string,
    public readonly status: number,
    public readonly retryable: boolean,
    public readonly details?: Record<string, unknown>
  ) {
    super(code);
    this.name = "ApiError";
  }
}

export interface ApiClientOptions {
  baseUrl?: string;
  timeout?: number;
  onUnauthorized?: () => void;
  onForbidden?: () => void;
}

const DEFAULT_TIMEOUT = 30_000;

/**
 * Normalize the configured API base URL.
 *
 * Vercel deployments have been configured with the Render origin only
 * (for example `https://kahani-ghar.onrender.com`), which caused requests such
 * as `/stories` to miss the backend's `/api` prefix. Accept both forms and
 * always return a base URL ending in `/api`, without creating `/api/api`.
 */
export function normalizeApiBaseUrl(raw: string | undefined): string {
  const value = (raw ?? "").trim();
  if (!value) return "/api";

  const withoutTrailingSlash = value.replace(/\/+$/, "");
  if (!withoutTrailingSlash || withoutTrailingSlash === "/") return "/api";
  if (withoutTrailingSlash.endsWith("/api")) return withoutTrailingSlash;
  return `${withoutTrailingSlash}/api`;
}

const DEFAULT_BASE_URL = normalizeApiBaseUrl(process.env.NEXT_PUBLIC_API_URL);

export function createApiClient(options: ApiClientOptions = {}) {
  const baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
  const timeout = options.timeout ?? DEFAULT_TIMEOUT;

  async function request<T>(
    path: string,
    init: RequestInit & { timeout?: number } = {}
  ): Promise<T> {
    const { timeout: requestTimeout = timeout, ...fetchInit } = init;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), requestTimeout);

    try {
      // Google sign-in is optional while backend demo authentication is enabled.
      // A missing Supabase configuration must not block local API testing.
      let accessToken: string | undefined;
      try {
        const { data: { session } } = await getBrowserSupabase().auth.getSession();
        accessToken = session?.access_token;
      } catch {
        // The backend will use DEMO_USER_ID only when ALLOW_DEMO_AUTH=true.
      }
      const isFormData = fetchInit.body instanceof FormData;
      const response = await fetch(`${baseUrl}${path}`, {
        ...fetchInit,
        signal: controller.signal,
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
          ...fetchInit.headers,
        },
      });

      clearTimeout(timeoutId);

      // Parse JSON response only when the server actually returned JSON.
      // HTML, plain-text, or empty responses are converted into a safe
      // diagnostic error instead of crashing JSON.parse.
      let data: unknown = null;
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        try {
          data = await response.json();
        } catch {
          data = null;
        }
      } else {
        const text = await response.text();
        const diagnostic = text.trim().slice(0, 200);
        if (response.ok) {
          throw new ApiError(
            "INVALID_RESPONSE",
            response.status,
            false,
            { body: diagnostic }
          );
        }
        if (diagnostic) {
          // Preserve a short diagnostic for non-JSON error responses.
          (response as Response & { __diagnostic?: string }).__diagnostic = diagnostic;
        }
      }

      if (!response.ok) {
        const errorResponse = data as ApiErrorResponse | null;
        const diagnostic = (response as Response & { __diagnostic?: string }).__diagnostic;
        const error = new ApiError(
          errorResponse?.error?.code ?? `HTTP_${response.status}`,
          response.status,
          response.status === 429 || response.status >= 500,
          errorResponse?.error?.details ?? (diagnostic ? { body: diagnostic } : undefined)
        );
        error.message = errorResponse?.error?.message ?? (diagnostic ? `Unexpected response: ${diagnostic}` : response.statusText);

        // Handle auth errors
        if (response.status === 401) {
          options.onUnauthorized?.();
        } else if (response.status === 403) {
          options.onForbidden?.();
        }

        throw error;
      }

      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof ApiError) throw error;
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new ApiError("TIMEOUT", 0, true, { message: "Request timeout" });
      }
      throw new ApiError("NETWORK_ERROR", 0, true, { message: String(error) });
    }
  }

  return {
    get: <T>(path: string, options?: { timeout?: number }) =>
      request<T>(path, { method: "GET", ...options }),

    post: <T>(path: string, body: unknown, options?: { timeout?: number }) =>
      request<T>(path, {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      }),

    postForm: <T>(path: string, formData: FormData, options?: { timeout?: number }) =>
      request<T>(path, {
        method: "POST",
        body: formData,
        headers: {}, // Let browser set Content-Type with boundary
        ...options,
      }),

    delete: <T>(path: string, options?: { timeout?: number }) =>
      request<T>(path, { method: "DELETE", ...options }),
  };
}

export const apiClient = createApiClient();
