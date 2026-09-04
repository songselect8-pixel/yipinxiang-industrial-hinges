"use client";

import Link from "next/link";
import Image from "next/image";
import { getFamily, getVariants } from "@/data/catalog";
import type { ProductFamily } from "@/data/products";
import { productInquiryHref } from "@/data/product-inquiry";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Arrow } from "@/components/ui/Arrow";
import { TechnicalTable } from "./TechnicalTable";
import { CatalogDialog } from "./CatalogDialog";

export function ProductPreview({ product, onDismiss }: { product: ProductFamily | null; onDismiss: () => void }) {
  const family = product ? getFamily(product.id)! : null;
  const imageIsDrawing = product?.images[0].kind === "catalog-composite";
  return <CatalogDialog open={Boolean(product)} onDismiss={onDismiss} titleId="product-preview-title" className="product-preview-dialog">
    {product && family && <>
      <div className="product-preview-heading"><Eyebrow>Technical product preview</Eyebrow><h2 id="product-preview-title">{product.name}</h2></div>
      <div className="product-preview-intro">
        <figure className="product-preview-image">{imageIsDrawing && product.drawing ? <Link href={product.drawing.src} target="_blank" rel="noreferrer" aria-label="Open the original catalog drawing at full size in a new tab"><Image src={product.images[0].src} alt={product.images[0].alt} width={800} height={800} quality={85} loading="eager" sizes="(max-width: 599px) 90vw, 320px" /></Link> : <Image src={product.images[0].src} alt={product.images[0].alt} width={800} height={800} quality={85} loading="eager" sizes="(max-width: 599px) 90vw, 320px" />}{imageIsDrawing && product.drawing && <figcaption>Original catalog photograph & reference drawing<br />Select the drawing to view at full size.</figcaption>}</figure>
        <div className="product-preview-copy"><p>{product.shortDescription}</p>
          <p className="product-preview-source">Catalog {product.technicalSpecifications.sourcePages.map((page) => `p${page}`).join(" / ")} · {product.dimensions.length} published {product.id.includes("type") ? "models" : product.dimensions.length === 1 ? "size" : "sizes"}</p>
          {product.applications.length > 0 && <div className="product-preview-applications"><h3>Catalog applications</h3><p>{product.applications.map((item) => item.name).join(" · ")}</p>{product.applications[0].scope === "profile" && <small>Water-drop family context from p4; confirm the hinge for your installation.</small>}</div>}
          {product.customization && <p className="product-preview-custom">{product.customization.description}</p>}
          <Link href={productInquiryHref(product.id)} className="button button-primary">Request a Quote <Arrow /></Link>
        </div>
      </div>
      <div className="product-preview-specs"><h3>Technical specifications</h3>
        {product.technicalSpecifications.sourcePages.map((page) => <div className="product-preview-table-group" key={page}>
          {product.id === "flag" && <div className="flag-group-heading"><Image src={product.images.find((item) => item.sourcePage === page)!.src} alt={`Flag hinge design from catalog page ${page}`} width={100} height={100} /><div><h4>Catalog design · page {page}</h4><p>Separate design and original size notation</p></div></div>}
          <TechnicalTable family={family} records={getVariants(product.id).filter((record) => record.page === page)} inquiryHref={(record) => productInquiryHref(product.id, record.id)} />
        </div>)}
        {product.technicalSpecifications.notes.map((note) => <p className="specification-note" key={note}>{note}</p>)}
      </div>
    </>}
  </CatalogDialog>;
}
