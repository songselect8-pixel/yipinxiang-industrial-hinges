import { RFQForm, type RFQFormOptions } from "@/components/inquiry/RFQForm";
import { Eyebrow } from "@/components/ui/SectionHeading";

const customFormOptions = {
  allowDrawing: true,
  contextLabel: "Custom hinge requirement",
  productLabel: "Reference product / hinge type",
  customRequirementLabel: "Technical requirements",
  uploadLabel: "Drawing or reference image",
  messageLabel: "Message",
  submitLabel: "Submit Custom Requirement",
} satisfies RFQFormOptions;

export function CustomRFQSection() {
  return (
    <section id="rfq" className="section rfq-section custom-rfq-section" aria-labelledby="rfq-title">
      <div className="shell rfq-layout">
        <div className="rfq-copy">
          <Eyebrow light>Custom requirement RFQ</Eyebrow>
          <h2 id="rfq-title">Send Us Your Hinge Requirement</h2>
          <p>Share the application, required dimensions, reference hinge and any drawing or photograph you have available.</p>
          <div className="rfq-checklist"><span className="micro-label">A useful custom inquiry includes</span><ol><li><span>01</span>Drawing, photograph or hinge reference</li><li><span>02</span>Required dimensions and structure</li><li><span>03</span>Application and estimated quantity</li></ol></div>
          <div className="rfq-side-note"><p>Start with the information you have.</p><span>The requested configuration remains subject to review.</span></div>
        </div>
        <RFQForm {...customFormOptions} />
      </div>
    </section>
  );
}
