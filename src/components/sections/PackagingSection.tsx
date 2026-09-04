import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SupportingVisual } from "@/components/ui/SupportingVisual";
import { Arrow } from "@/components/ui/Arrow";

export function PackagingSection() {
  return (
    <section id="packaging" className="section packaging-section" aria-labelledby="packaging-title">
      <div className="shell">
        <SectionHeading eyebrow="Packaging & shipment" title={<span id="packaging-title">Prepared for the next step.</span>} description="Documented packaging methods for our numbered hinge series. Other packing requirements can be discussed with your inquiry." />
        <div className="packaging-grid">
          <article className="packaging-card"><div className="packaging-photo"><Image src="/images/packaging-20-type.jpg" alt="Actual 20-type hinge packaging: film-lined inner cartons, packed outer carton and strapping" width={2001} height={1336} quality={85} sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="packaging-copy"><span className="micro-label">20 type series</span><h3>Inner cartons. Protected outer packing.</h3><p>Kraft-paper inner cartons with plastic-film lining, packed in a corrugated outer carton and secured with tape and strapping.</p></div></article>
          <article className="packaging-card"><div className="packaging-photo"><Image src="/images/packaging-12-14-16-type.jpg" alt="Actual 12, 14 and 16 type hinge packaging: film-lined folded boxes packed in a strapped composite wooden case" width={2001} height={1336} quality={85} sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="packaging-copy"><span className="micro-label">12 / 14 / 16 type series</span><h3>Inner boxes. Composite wooden case.</h3><p>Folded inner boxes with plastic-film lining, packed in a composite wooden case secured with two horizontal and one vertical packing belts.</p></div></article>
        </div>
        <p className="packaging-note">The actual catalog photographs above show packaging specific to these hinge series. Please include any packing or shipping requirements in your RFQ.</p>
        <div className="packaging-context-row">
          <div className="packaging-context-copy">
            <p className="eyebrow"><span aria-hidden="true" />Packaging & shipping</p>
            <h3>Specify the packing with the product.</h3>
            <p>Inner cartons, film protection and outer packing form part of the documented methods. Tell us your hinge series, order quantity and packing requirements.</p>
            <Link href="#rfq" className="text-link">Discuss your packing requirements <Arrow /></Link>
          </div>
          <SupportingVisual asset="packaging" sizes="(max-width: 599px) 100vw, (min-width: 1200px) 600px, 55vw" />
        </div>
      </div>
    </section>
  );
}
