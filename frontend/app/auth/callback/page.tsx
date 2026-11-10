import { Suspense } from "react";
import AuthCallbackClient from "./AuthCallbackClient";

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-4 py-24 text-center"><h1 className="font-heading text-2xl text-kg-cream">Completing sign-in...</h1></div>}>
      <AuthCallbackClient />
    </Suspense>
  );
}
