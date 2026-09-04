import { getResourcesForProduct, getResourceCategory, getResourceReadingTime } from "@/content/resources";
import { Arrow } from "@/components/ui/Arrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductRelatedGuides({ productId }: { productId: string }) {
  const guides = getResourcesForProduct(productId, 3);
  if (guides.length === 0) return null;
  return <section className="section detail-related-guides" aria-labelledby="detail-related-guides-title"><div className="shell">
    <SectionHeading eyebrow="Selection and technical guidance" title={<span id="detail-related-guides-title">Related Guides.</span>}><a href="/resources" className="text-link section-heading-link">All resources <Arrow /></a></SectionHeading>
    <div className="detail-guide-grid">{guides.map((guide, index) => <article key={guide.slug}><span className="micro-label">0{index + 1} / {getResourceCategory(guide.category)?.name}</span><h3><a href={`/resources/${guide.slug}`}>{guide.title}</a></h3><p>{guide.description}</p><div><span>{getResourceReadingTime(guide)} min read</span><a className="text-link" href={`/resources/${guide.slug}`}>Read Guide <Arrow /></a></div></article>)}</div>
  </div></section>;
}
