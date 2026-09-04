import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: false,
  turbopack: { root: process.cwd() },
  images: {
    formats: ["image/webp"],
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
