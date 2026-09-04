"use client";

import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { Arrow } from "@/components/ui/Arrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SupportingVisual } from "@/components/ui/SupportingVisual";

const applications = [
  {
    name: "Electrical & Control Cabinets",
    description: "Weld-on hinge selection for electrical, control and industrial cabinets. Discuss your enclosure and installation requirements.",
    family: "custom",
    image: "cabinets",
  },
  {
    name: "Trailers, Gates & Heavy-Duty Doors",
    description: "Explore the 12 / 14 / 16 type series for gates, trailer doors and ramps. Confirm the hinge size for your application.",
    family: "12-14-16-type",
    image: "trailers",
  },
] as const;

// Catalog page 4 supports these applications at water-drop-family level.
// Leave model selection open until the buyer's installation is confirmed.
const additionalApplications = ["Steel Doors", "Switch Cabinets", "Network Cabinets"] as const;

export function Applications() {
  const { beginInquiry } = useInquiry();
  return (
    <section id="applications" className="section applications-section" aria-labelledby="applications-title">
      <div className="shell">
        <SectionHeading eyebrow="Industrial applications" title={<span id="applications-title">Built for Industrial Applications</span>} description="Start with your application. We’ll discuss the hinge type, dimensions and installation requirements your project calls for.">
          <a href="#rfq" className="text-link section-heading-link">Discuss your application <Arrow diagonal /></a>
        </SectionHeading>
        <div className="application-image-grid">
          {applications.map((application) => (
            <a href="#rfq" className="application-image-card" key={application.name} aria-label={`Discuss ${application.name}`} onClick={() => beginInquiry({ product: application.family, size: "", application: application.name })}>
              <SupportingVisual asset={application.image} sizes="(max-width: 599px) 100vw, 50vw" />
              <div className="application-image-copy">
                <h3>{application.name}</h3>
                <p>{application.description}</p>
                <span className="text-link">Discuss this application <Arrow /></span>
              </div>
            </a>
          ))}
        </div>
        <div className="application-selection-note">
          <p>Illustrative application views. Final suitability depends on the selected model, dimensions and installation requirements.</p>
          <nav className="application-text-links" aria-label="Additional industrial applications">
            {additionalApplications.map((application) => <a key={application} href="#rfq" className="text-link" aria-label={`Discuss ${application}`} onClick={() => beginInquiry({ product: "custom", size: "", application })}>{application}</a>)}
          </nav>
        </div>
      </div>
    </section>
  );
}
