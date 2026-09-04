import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";
const isPagesBuild = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isPagesBuild
    ? {
        output: "export" as const,
        basePath: pagesBasePath,
        trailingSlash: true,
      }
    : {}),
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: false,
  turbopack: { root: process.cwd() },
  images: isPagesBuild
    ? {
        loader: "custom",
        loaderFile: "./src/lib/static-image-loader.ts",
        qualities: [75, 85, 90],
      }
    : {
        formats: ["image/webp"],
        qualities: [75, 85, 90],
      },
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
};

export default nextConfig;
