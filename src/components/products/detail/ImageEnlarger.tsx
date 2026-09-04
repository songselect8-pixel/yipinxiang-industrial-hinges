"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";
import type { ProductMedia } from "@/data/product-details";
import { CatalogDialog } from "../CatalogDialog";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function ImageEnlarger({ media, className, children }: { media: ProductMedia; className: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const titleId = useId();

  return <>
    <button type="button" className={className} aria-label={`Enlarge ${media.label.toLowerCase()}`} aria-haspopup="dialog" onClick={() => { setActualSize(false); setOpen(true); }}>{children}</button>
    <CatalogDialog open={open} onDismiss={() => setOpen(false)} titleId={titleId} className="product-image-dialog">
      <div className="image-dialog-heading"><Eyebrow>{media.kind === "photograph" ? "Product photography" : "Original catalog drawing"}</Eyebrow><h2 id={titleId}>{media.label}</h2></div>
      <div className="image-dialog-toolbar"><p>{media.caption}</p><div aria-label="Image magnification"><button type="button" aria-pressed={!actualSize} onClick={() => setActualSize(false)}>Fit</button><button type="button" aria-pressed={actualSize} onClick={() => setActualSize(true)}>100%</button></div></div>
      <div className={`image-dialog-canvas${actualSize ? " is-actual-size" : ""}`} tabIndex={0} role="region" aria-label="Enlarged image, scroll to inspect at 100 percent">
        <Image src={media.src} alt={media.alt} width={media.width} height={media.height} unoptimized={!process.env.NEXT_PUBLIC_BASE_PATH} style={actualSize ? { width: media.width, height: media.height } : undefined} />
      </div>
      <p className="image-dialog-help">{actualSize ? "Original image size. Scroll within the image to inspect all details." : "Full image shown. Choose 100% to inspect the original image."}</p>
    </CatalogDialog>
  </>;
}
