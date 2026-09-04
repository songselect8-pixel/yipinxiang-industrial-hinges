import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { practicalReviewPoints, qualityComparison, qualityFaqs, qualityPackaging } from "@/data/quality";

function PracticalReview() {
  return (
    <section className="section quality-practical" aria-labelledby="quality-practical-title">
      <div className="shell quality-practical-grid">
        <div>
          <Eyebrow>Visual & structural review</Eyebrow>
          <h2 id="quality-practical-title">Practical Review Points</h2>
          <p>The applicable points depend on the hinge family and the available product or customer reference.</p>
        </div>
        <div className="quality-practical-list">
          {practicalReviewPoints.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

function BeforePackaging() {
  return (
    <section className="section quality-packaging" aria-labelledby="quality-packaging-title">
      <div className="shell">
        <SectionHeading
          eyebrow="Before packaging"
          title={<span id="quality-packaging-title">Prepared for the Next Step</span>}
          description="After the relevant production and checking steps, the applicable packing requirement can be prepared. These real catalog examples belong to the named product series."
        />
        <div className="quality-packaging-grid">
          {qualityPackaging.map((item) => (
            <article key={item.id}>
              <figure data-asset-kind="catalog-packaging"><Image src={item.image} alt={item.imageAlt} width={2001} height={1336} quality={85} sizes="(max-width: 768px) calc(100vw - 40px), 50vw" /></figure>
              <div><span className="micro-label">{item.family} · catalog p{item.sourcePage}</span><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
        <p className="quality-packaging-boundary">Packaging differs by product family. Neither catalog example is presented as the method for every hinge.</p>
      </div>
    </section>
  );
}

function QualityComparison() {
  return (
    <section className="quality-comparison" aria-labelledby="quality-comparison-title">
      <div className="shell">
        <div className="quality-comparison-heading"><Eyebrow>Reference basis</Eyebrow><h2 id="quality-comparison-title">Standard Product or Custom Requirement?</h2></div>
        <div className="quality-comparison-grid">
          {qualityComparison.map((item, index) => <article key={item.label}><span>0{index + 1} · {item.label}</span><h3>{item.title}</h3><p>{item.description}</p><small>Reference source · p{item.sourcePages.join(" / ")}</small></article>)}
        </div>
      </div>
    </section>
  );
}

function QualityFaq() {
  return (
    <section className="section quality-faq" aria-labelledby="quality-faq-title">
      <div className="shell quality-faq-grid">
        <div><Eyebrow>Buyer questions</Eyebrow><h2 id="quality-faq-title">Quality Control FAQ</h2><p>Answers stay within the catalog’s published dimensions, checking statement and packaging examples.</p><Link href="#rfq" className="text-link">Discuss Your Requirement <Arrow /></Link></div>
        <div className="quality-faq-list">
          {qualityFaqs.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true" /></summary><p>{item.answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}

export function QualityPreparation() {
  return <><PracticalReview /><BeforePackaging /><QualityComparison /><QualityFaq /></>;
}
