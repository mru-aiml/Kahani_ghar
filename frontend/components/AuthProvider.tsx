"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import { getBrowserSupabase } from "@/lib/auth/browser";

type AuthState = { user: User | null; loading: boolean; signInWithGoogle: () => Promise<void>; signOut: () => Promise<void> };
const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let subscription: { unsubscribe: () => void } | undefined;
    try {
      const supabase = getBrowserSupabase();
      supabase.auth.getUser().then(({ data }) => { if (mounted) setUser(data.user); }).finally(() => { if (mounted) setLoading(false); });
      subscription = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => setUser(session?.user ?? null)).data.subscription;
    } catch {
      setLoading(false);
    }
    return () => { mounted = false; subscription?.unsubscribe(); };
  }, []);

  async function signInWithGoogle() {
    const { error } = await getBrowserSupabase().auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) throw error;
  }

  async function signOut() {
    const { error } = await getBrowserSupabase().auth.signOut();
    if (error) throw error;
  }

  return <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
