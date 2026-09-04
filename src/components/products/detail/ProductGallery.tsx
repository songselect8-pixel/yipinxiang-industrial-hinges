"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { ProductMedia } from "@/data/product-details";
import { Arrow } from "@/components/ui/Arrow";
import { ImageEnlarger } from "./ImageEnlarger";

export function ProductGallery({ images, profileLabel }: { images: readonly ProductMedia[]; profileLabel: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const image = images[activeIndex];
  const galleryId = useId();
  if (!image) return null;

  return <div className="detail-gallery" aria-label="Product gallery">
    <figure id={galleryId}>
      <ImageEnlarger media={image} className={`detail-gallery-main${image.kind === "catalog-composite" ? " is-drawing" : ""}`}>
        <span className="detail-image-label micro-label">{image.kind === "photograph" ? profileLabel : "Original catalog reference"}</span>
        <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 100vw, 50vw" quality={85} loading="eager" unoptimized={image.kind === "catalog-composite"} />
        <span className="detail-image-expand">Enlarge <Arrow diagonal /></span>
      </ImageEnlarger>
      <figcaption>{image.caption}</figcaption>
    </figure>
    <div className="detail-gallery-thumbnails" aria-label="Choose a product image">{images.map((item, index) => <button key={item.src} type="button" aria-pressed={index === activeIndex} aria-controls={galleryId} onClick={() => setActiveIndex(index)}>
      <span><Image src={item.src} alt="" width={item.width} height={item.height} sizes="72px" quality={85} /></span><span>{item.label}</span>
    </button>)}</div>
  </div>;
}
