import { RFQForm, type RFQFormOptions } from "@/components/inquiry/RFQForm";
import { Arrow } from "@/components/ui/Arrow";
import { Eyebrow } from "@/components/ui/SectionHeading";

const manufacturingFormOptions = {
  allowDrawing: true,
  contextLabel: "Manufacturing page",
  productLabel: "Hinge type",
  customRequirementLabel: "Manufacturing requirements",
  uploadLabel: "Drawing or reference image",
  messageLabel: "Application details",
  submitLabel: "Request a Quote",
} satisfies RFQFormOptions;

export function ManufacturingRFQSection() {
  return (
    <section id="rfq" className="section rfq-section manufacturing-rfq" aria-labelledby="rfq-title">
      <div className="shell rfq-layout">
        <div className="rfq-copy">
          <Eyebrow light>Manufacturing inquiry</Eyebrow>
          <h2 id="rfq-title">Have a Hinge Requirement?</h2>
          <p>Send the hinge type, dimensions, estimated quantity and application for discussion.</p>
          <div className="rfq-checklist"><span className="micro-label">A useful inquiry includes</span><ol><li><span>01</span>Hinge type or a reference product</li><li><span>02</span>Required dimensions and application</li><li><span>03</span>Estimated quantity and available drawing</li></ol></div>
          <a href="#rfq-drawing" className="manufacturing-rfq-drawing-link">Send Your Drawing <Arrow diagonal /></a>
          <div className="rfq-side-note"><p>Standard hinge or custom requirement.</p><span>Manufacturing details remain subject to review.</span></div>
        </div>
        <RFQForm {...manufacturingFormOptions} />
      </div>
    </section>
  );
}
