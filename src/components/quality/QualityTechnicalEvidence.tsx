import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { consistencyAreas, dimensionalReferences, inProcessChecks, technicalDrawingReferences } from "@/data/quality";

function DimensionalInspection() {
  return (
    <section id="dimensional-checks" className="section quality-dimensions" aria-labelledby="quality-dimensions-title">
      <div className="shell quality-dimensions-grid">
        <div className="quality-dimensions-copy">
          <Eyebrow>Dimensional inspection</Eyebrow>
          <h2 id="quality-dimensions-title">Dimensional Checks Against Requirements</h2>
          <p>Published dimensions and confirmed customer requirements can provide the basis for checking dimensional consistency. The relevant reference depends on the hinge family.</p>
          <a href="/products" className="text-link">Find a Product Family <Arrow /></a>
          <a href="/resources#technical-guides" className="text-link quality-resource-link">Read Technical Guides <Arrow /></a>
        </div>
        <div className="quality-dimension-ledger" aria-label="Dimensional reference points">
          {dimensionalReferences.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
              <small>p{item.sourcePages.join(" / ")}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecificationReferences() {
  return (
    <section className="section quality-drawings" aria-labelledby="quality-drawings-title">
      <div className="shell">
        <SectionHeading
          eyebrow="Technical drawings & specifications"
          title={<span id="quality-drawings-title">Specifications Provide the Reference</span>}
          description="Original catalog drawings and published dimensions organize the reference for product verification. The images and values below remain unchanged from their source records."
        >
          <a href="/products#selection-overview" className="text-link section-heading-link">Explore Product Specifications <Arrow diagonal /></a>
        </SectionHeading>
        <div className="quality-drawing-grid">
          {technicalDrawingReferences.map((item) => {
            const portrait = item.productId === "12-14-16-type";
            return (
              <article key={item.productId}>
                <a href={item.href} className={`quality-drawing-frame${portrait ? " is-portrait" : ""}`} aria-label={`View ${item.name} specifications`}>
                  <Image
                    src={item.drawing.src}
                    alt={item.drawing.alt}
                    width={portrait ? 546 : 825}
                    height={portrait ? 958 : 864}
                    quality={85}
                    sizes="(max-width: 768px) calc(100vw - 40px), 50vw"
                  />
                </a>
                <div className="quality-drawing-copy"><span className="micro-label">Original catalog reference · p{item.drawing.sourcePage}</span><h3>{item.name}</h3><p>{item.description}</p><a href={item.href} className="text-link">View full specifications <Arrow /></a></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InProcessInspection() {
  return (
    <section className="section quality-in-process" aria-labelledby="quality-in-process-title">
      <div className="shell quality-in-process-grid">
        <div className="quality-in-process-heading">
          <Eyebrow>Production-stage checking</Eyebrow>
          <h2 id="quality-in-process-title">Checks During Production</h2>
          <p>The catalog describes tools developed so checking can take place during production to support product quality.</p>
          <span className="quality-source-note">Company statement · catalog p18</span>
        </div>
        <div className="quality-in-process-list">
          {inProcessChecks.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductionConsistency() {
  return (
    <section className="section quality-consistency" aria-labelledby="quality-consistency-title">
      <div className="shell">
        <SectionHeading
          eyebrow="Production consistency"
          title={<span id="quality-consistency-title">Consistency Across Production</span>}
          description="The source material lists process-organization and checking concepts that can support consistent handling through production and packaging preparation."
        />
        <div className="quality-consistency-grid">
          {consistencyAreas.map((item, index) => (
            <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p><small>Catalog p{item.sourcePages.join(" / ")}</small></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualityTechnicalEvidence() {
  return <><DimensionalInspection /><SpecificationReferences /><InProcessInspection /><ProductionConsistency /></>;
}
