import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel (and `next start`) expect the standard `.next` output directory in
  // production. Keep the custom directory only for local development to avoid
  // stale Next dev state on Windows.
  distDir: process.env.NODE_ENV === "production" ? ".next" : ".next-frontend-3100",
  /* config options here */
  // LAN dev origins are intentionally NOT hardcoded. Add your machine's LAN IP
  // (or set NEXT_ALLOWED_DEV_ORIGINS=ip1,ip2) when testing from another device.
  allowedDevOrigins: process.env.NEXT_ALLOWED_DEV_ORIGINS
    ? process.env.NEXT_ALLOWED_DEV_ORIGINS.split(",").map((s) => s.trim()).filter(Boolean)
    : [],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
