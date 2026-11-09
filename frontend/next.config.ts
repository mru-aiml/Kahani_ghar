import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep this frontend's build output separate from stale Next dev state.
  distDir: ".next-frontend-3100",
  /* config options here */
  allowedDevOrigins: ["192.168.1.6"],
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
