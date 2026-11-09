"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBrowserSupabase } from "@/lib/auth/browser";
import type { AuthError } from "@supabase/supabase-js";

export default function AuthCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = params.get("code");
    if (!code) { setError("Google did not return an authorization code."); return; }
    getBrowserSupabase().auth.exchangeCodeForSession(code)
      .then(({ error: exchangeError }: { error: AuthError | null }) => exchangeError ? setError(exchangeError.message) : router.replace("/"))
      .catch(() => setError("Could not complete Google sign-in."));
  }, [params, router]);

  return <div className="mx-auto max-w-md px-4 py-24 text-center"><h1 className="font-heading text-2xl text-kg-cream">Signing you in…</h1>{error && <p className="mt-4 text-kg-danger">{error}</p>}</div>;
}
