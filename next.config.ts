import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes the site to `out/` (Cloudflare Pages).
  output: "export",
  images: {
    // The default image optimizer needs a server. Images must be optimized
    // before being committed (see README).
    unoptimized: true,
  },
};

export default nextConfig;
