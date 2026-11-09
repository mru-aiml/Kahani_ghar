"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/create", label: "Create" },
  { href: "/library", label: "My Storybook" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, loading, signInWithGoogle, signOut } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setAuthError(null);
    try { await signInWithGoogle(); } catch (error) { setAuthError(error instanceof Error ? error.message : "Google sign-in failed."); }
  };
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-kg-night/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl text-kg-amber">
          <span className="inline-block h-7 w-7 rounded-full bg-kg-amber/20 text-center leading-7">📖</span>
          KahaniGhar
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-kg-cream/80 hover:text-kg-amber">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {!loading && (user ? (
            <button onClick={() => void signOut()} className="hidden rounded-full border border-white/20 px-3 py-1.5 text-sm text-kg-cream hover:border-kg-amber md:block">Sign out</button>
          ) : (
            <button onClick={() => void handleSignIn()} className="hidden rounded-full bg-kg-cream px-3 py-1.5 text-sm text-kg-night hover:bg-kg-amber md:block">Continue with Google</button>
          ))}
          <button className="md:hidden rounded-lg p-2 text-kg-cream" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-kg-night px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-kg-cream/80 hover:text-kg-amber"
            >
              {l.label}
            </Link>
          ))}
          {!loading && (user ? <button onClick={() => void signOut()} className="mt-2 text-sm text-kg-cream/80">Sign out</button> : <button onClick={() => void handleSignIn()} className="mt-2 text-sm text-kg-amber">Continue with Google</button>)}
          {authError && <p className="mt-2 text-xs text-kg-danger">{authError}</p>}
        </nav>
      )}
    </header>
  );
}
