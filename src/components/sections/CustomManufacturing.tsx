import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { SupportingVisual } from "@/components/ui/SupportingVisual";

const stages = ["Your requirement", "Drawing & specification", "Specification confirmation", "Manufacturing", "Production checks", "Packaging"];

export function CustomManufacturing() {
  return (
    <section id="custom-hinges" className="custom-section section" aria-labelledby="custom-title">
      <div className="shell">
        <div className="custom-layout">
          <div className="custom-copy">
            <Eyebrow light>Custom hinge manufacturing</Eyebrow>
            <h2 id="custom-title">Your drawing. <br />Our starting point.</h2>
            <p>Not every requirement fits a standard profile. Share your drawing, dimensions or application, and let’s discuss a hinge built around your needs.</p>
            <div className="custom-request-list"><span>Application & installation</span><span>Dimensions & configuration</span><span>Quantity & packaging requirements</span></div>
            <a href="#rfq" className="button button-primary">Discuss Your Hinge Requirement <Arrow /></a>
          </div>
          <figure className="drawing-figure">
            <div className="drawing-heading"><span>ENGINEERING REFERENCE</span><span>20 TYPE</span></div>
            <Image src="/images/drawing-20-type.png" alt="Original 20-type hinge catalog drawing with D, D-1, L, d, L-1, c and L-2 reference symbols" width={825} height={864} quality={90} sizes="(max-width: 768px) 90vw, 42vw" />
            <figcaption>Original catalog drawing · project dimensions to be confirmed</figcaption>
          </figure>
        </div>
        <div className="custom-review-row">
          <SupportingVisual asset="engineering" dark />
          <div className="custom-process">
            <p className="micro-label">From requirement to packaging</p>
            <h3>Define the details before production.</h3>
            <p className="custom-process-intro">Use your drawing to communicate hinge dimensions, installation details and checking requirements.</p>
            <ol>{stages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, "0")}</span><p>{stage}</p></li>)}</ol>
          </div>
        </div>
      </div>
    </section>
  );
}
