type StaticImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function staticImageLoader({ src, width, quality }: StaticImageLoaderProps) {
  if (/^https?:\/\//i.test(src)) return src;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pathname = src.startsWith("/") ? src : `/${src}`;
  const separator = pathname.includes("?") ? "&" : "?";

  return `${basePath}${pathname}${separator}w=${width}&q=${quality ?? 75}`;
}
