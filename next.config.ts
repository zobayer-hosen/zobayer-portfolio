import type { NextConfig } from "next";

// GitHub Pages serves a project site from a sub-path (e.g. /portfolio).
// The deploy workflow sets this from actions/configure-pages; locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: {
    // Lets client components render the same dates as the static HTML during hydration
    BUILD_DATE: new Date().toISOString(),
  },
};

export default nextConfig;
