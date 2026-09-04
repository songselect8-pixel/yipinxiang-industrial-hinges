import { responsiveImageManifest } from "./responsive-image-manifest.ts";

type StaticImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function staticImageLoader({ src, width, quality }: StaticImageLoaderProps) {
  if (/^(?:https?:)?\/\//i.test(src) || /^(?:data|blob):/i.test(src)) return src;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const rawPathname = src.split(/[?#]/, 1)[0];
  const pathname = rawPathname.startsWith("/") ? rawPathname : `/${rawPathname}`;
  const entry = responsiveImageManifest[pathname];

  if (!entry) return `${basePath}${pathname}`;

  const selectedWidth = entry.widths.find((candidate) => candidate >= width)
    ?? entry.widths[entry.widths.length - 1];
  const variant = entry.variants[selectedWidth];

  void quality;
  return `${basePath}${variant}`;
}
