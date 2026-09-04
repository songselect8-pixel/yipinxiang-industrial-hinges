import Image from "next/image";
import { ApplicationInquiryLink } from "./ApplicationInquiryLink";
import { Arrow } from "@/components/ui/Arrow";
import { getProduct, productHref } from "@/data/products";
import type { ApplicationGroup } from "@/data/applications";

export function ApplicationDetailSection({ group, reversed = false }: { group: ApplicationGroup; reversed?: boolean }) {
  return (
    <section id={group.id} className={`section application-detail${reversed ? " application-detail-reversed" : ""}`} aria-labelledby={`${group.id}-title`}>
      <div className="shell application-detail-layout">
        <figure className={`application-detail-media application-detail-media-${group.detailMedia.presentation}`}>
          <div className="application-detail-image-frame">
            <Image src={group.detailMedia.image} alt={group.detailMedia.alt} width={1200} height={900} sizes="(max-width: 899px) 100vw, 42vw" />
          </div>
          <figcaption><span>{group.detailMedia.label}</span><span>{group.sourceLabel}</span></figcaption>
        </figure>

        <div className="application-detail-copy">
          <div className="application-detail-kicker"><span>{group.index}</span><p className="micro-label">Application guide</p></div>
          <h2 id={`${group.id}-title`}>{group.title}</h2>
          <p className="application-environment">{group.environment}</p>

          <div className="application-detail-columns">
            <div>
              <h3>What the buyer should consider</h3>
              <ul>{group.considerations.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h3>Relevant hinge characteristics</h3>
              <ul>{group.characteristics.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>

          <div className="application-terms" aria-label={`Catalog-supported terms for ${group.title}`}>
            <span className="micro-label">Catalog terminology</span>
            <p>{group.supportedTerms.join(" · ")}</p>
          </div>

          <div className="application-product-paths">
            <span className="micro-label">Relevant hinge families</span>
            <nav aria-label={`Relevant hinge families for ${group.title}`}>
              {group.productIds.map((id) => {
                const product = getProduct(id)!;
                return <a href={productHref(id)} key={id}>{product.name}<Arrow /></a>;
              })}
            </nav>
          </div>

          <div className="application-detail-actions">
            <a href={group.filterHref} className="button button-outline">Explore available hinge types <Arrow /></a>
            <ApplicationInquiryLink product={group.inquiryProductId} application={group.shortTitle}>Ask for selection help</ApplicationInquiryLink>
          </div>
        </div>
      </div>
    </section>
  );
}
