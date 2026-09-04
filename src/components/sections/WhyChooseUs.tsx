import { Eyebrow } from "@/components/ui/SectionHeading";

const strengths = [
  { title: "Factory-direct supply", text: "A self-owned factory bringing design, production and sales together." },
  { title: "Defined product choices", text: "Catalog profiles and original dimensions to help you specify your requirement." },
  { title: "Custom development", text: "Product development and manufacturing according to customer needs." },
  { title: "Production checks", text: "Testing tools used during production to support product quality." },
];

export function WhyChooseUs() {
  return (
    <section className="section strengths-section" aria-labelledby="strengths-title">
      <div className="shell">
        <div className="strengths-heading"><Eyebrow>A manufacturer behind your supply</Eyebrow><h2 id="strengths-title">Built around your requirements.</h2></div>
        <div className="strengths-grid">{strengths.map((strength, index) => <article key={strength.title}><span className="strength-number">0{index + 1}</span><h3>{strength.title}</h3><p>{strength.text}</p></article>)}</div>
      </div>
    </section>
  );
}
