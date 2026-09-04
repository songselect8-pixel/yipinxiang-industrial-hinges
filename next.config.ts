import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";
const isPagesBuild = process.env.STATIC_EXPORT === "true";
const responsiveDeviceSizes = [390, 640, 768, 1024, 1280, 1440, 1920];
const responsiveImageSizes = [64, 96, 128, 256, 384];

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
        deviceSizes: responsiveDeviceSizes,
        imageSizes: responsiveImageSizes,
        qualities: [75, 85, 90],
      }
    : {
        formats: ["image/webp"],
        deviceSizes: responsiveDeviceSizes,
        imageSizes: responsiveImageSizes,
        qualities: [75, 85, 90],
      },
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
};

export default nextConfig;
