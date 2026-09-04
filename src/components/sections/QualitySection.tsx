import { Arrow } from "@/components/ui/Arrow";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { SupportingVisual } from "@/components/ui/SupportingVisual";

export function QualitySection() {
  return (
    <section id="quality" className="section quality-section" aria-labelledby="quality-title">
      <div className="shell quality-layout">
        <div className="quality-copy">
          <Eyebrow>Quality in production</Eyebrow>
          <h2 id="quality-title">Quality control.</h2>
          <p>Dimensional checks and in-process inspection help maintain consistency throughout production. Discuss the checking requirements for your order.</p>
          <div className="quality-lines">
            <div><h3>Dimensional Inspection</h3><p>Confirm the dimensions and inspection criteria for your hinge.</p></div>
            <div><h3>In-Process Checks</h3><p>Product checking tools are used during production.</p></div>
            <div><h3>Consistent Production</h3><p>Clear specifications provide a reference for production checks.</p></div>
          </div>
          <a href="#rfq" className="text-link">Share your quality requirements <Arrow diagonal /></a>
        </div>
        <SupportingVisual asset="quality" className="quality-inspection-visual" />
      </div>
    </section>
  );
}
