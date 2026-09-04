"use client";

import Image from "next/image";
import { useEffect } from "react";
import { families, getVariants } from "@/data/catalog";
import { getOverviewExamples } from "@/data/catalog-overview";
import { TechnicalTable } from "@/components/products/TechnicalTable";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Arrow, Plus } from "@/components/ui/Arrow";

export function TechnicalRange() {
  useEffect(() => {
    function openHashPanel() {
      const id = window.location.hash.slice(1);
      if (!id.startsWith("range-")) return;
      const element = document.getElementById(id);
      if (element instanceof HTMLDetailsElement) element.open = true;
    }
    openHashPanel();
    window.addEventListener("hashchange", openHashPanel);
    return () => window.removeEventListener("hashchange", openHashPanel);
  }, []);

  return (
    <section id="technical-range" className="section range-section" aria-labelledby="range-title">
      <div className="shell">
        <SectionHeading eyebrow="The specification comes first" title={<span id="range-title">A closer look at the details.</span>} description="Representative dimensions, exactly as cataloged. Open a hinge type for all listed sizes and inquiry selection.">
          <span className="range-edition">PRODUCT CATALOG <strong>2026</strong></span>
        </SectionHeading>
        <div className="range-column-labels" aria-hidden="true"><span>HINGE TYPE</span><span>CONSTRUCTION</span><span>CATALOG EXAMPLES</span><span /></div>
        <div className="range-list">
          {families.map((family) => {
            const records = getVariants(family.id);
            const examples = getOverviewExamples(records);
            return <details id={`range-${family.id}`} key={family.id} className="range-item">
              <summary>
                <h3>{family.shortName}</h3>
                <span className="range-profile"><span>{family.profile}</span><span className="range-count">{records.length} {family.id.includes("type") ? "catalog models" : records.length === 1 ? "listed size" : "listed sizes"}</span></span>
                <span className="range-examples">
                  {examples.map((example) => example.parameters ? <span key={example.id} className="range-parameter-example" data-catalog-record={example.id}>
                    <span className="range-example-model">{example.model}</span>
                    <span className="range-example-values"><span>D {example.parameters.D}</span><span>L {example.parameters.L}</span></span>
                    <span className="range-unit-note">{example.unit === "TBD" ? "Unit not printed" : example.unit}</span>
                  </span> : <span key={example.id} className="range-size-example" data-catalog-record={example.id}><span>{example.size}</span>{family.id === "flag" && <small>p{example.page}</small>}</span>)}
                </span>
                <Plus className="range-toggle" />
              </summary>
              <div className="range-panel">
                <div className="range-panel-intro"><p>{family.description}</p>{family.application !== "TBD" && <p className="range-application"><span>Catalog application</span>{family.application}</p>}</div>
                {family.id === "flag" ? <>
                  {[14, 15].map((page) => <div className="flag-table-group" key={page}><div className="flag-group-heading"><Image src={page === 14 ? "/images/hinge-flag.jpg" : "/images/hinge-flag-leaf.jpg"} alt={`Flag hinge design from catalog page ${page}`} width={100} height={100} /><div><h4>Catalog design · page {page}</h4><p>Separate design and original size notation</p></div></div><TechnicalTable family={family} records={records.filter((record) => record.page === page)} /></div>)}
                </> : <TechnicalTable family={family} records={records} />}
                {family.id === "square" && <p className="specification-note">The Φ symbol and size notation above are retained from the source catalog. Please confirm their interpretation for your application.</p>}
                {family.id === "20-type" && <p className="specification-note">20-A: chamfered at both ends. 20-B: right-angle ends. No unit is printed in the original dimensional table.</p>}
                {family.id === "12-14-16-type" && <p className="specification-note">12, 14 and 16 are model designations. The original D dimensions remain 11.80, 13.80 and 15.80 respectively.</p>}
                {!["20-type", "12-14-16-type", "bearing", "round", "pin"].includes(family.id) && <p className="specification-note">Compound size strings are shown exactly as published. The dimension order should be confirmed against your requirement.</p>}
              </div>
            </details>;
          })}
        </div>
        <div className="range-footer"><p>Need a dimension or configuration beyond the listed range?</p><a href="#rfq" className="text-link">Send your requirement <Arrow /></a></div>
      </div>
    </section>
  );
}
