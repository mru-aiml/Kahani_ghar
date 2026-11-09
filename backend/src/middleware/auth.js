import { createClient } from "@supabase/supabase-js";
import { env } from "../config/env.js";

export async function attachUser(req, _res, next) {
  const token = req.header("authorization")?.replace(/^Bearer\s+/i, "");
  if (token && env.supabase.url && env.supabase.anonKey) {
    const supabase = createClient(env.supabase.url, env.supabase.anonKey, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (!error && user) { req.user = { id: user.id, email: user.email }; return next(); }
  }
  if (env.allowDemoAuth) { req.user = { id: req.header("x-user-id") || env.demoUserId }; return next(); }
  return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Please sign in with Google.", retryable: false } });
}
