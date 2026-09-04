import Link from "next/link";
import { getProduct, getProductExamples, productHref, type ProductDimension } from "@/data/products";
import type { ResourceComparisonTableBlock, ResourceProductTableBlock } from "@/content/resources/types";
import { Arrow } from "@/components/ui/Arrow";

function formatPublishedEntry(record: ProductDimension) {
  if (record.size) return `${record.size}${record.unit ? ` ${record.unit}` : ""}`;
  const parameters = record.parameters
    ? Object.entries(record.parameters).map(([name, value]) => `${name} ${value}`).join(" · ")
    : "";
  return [record.model, parameters].filter(Boolean).join(" — ");
}

export function ResourceProductTable({ block }: { block: ResourceProductTableBlock }) {
  const rows = block.productIds.flatMap((id) => {
    const product = getProduct(id);
    if (!product) return [];
    const records = block.display === "complete-records" ? product.dimensions : getProductExamples(product.dimensions);
    return records.map((record) => ({ product, record }));
  });

  return <section className="resource-technical-block" aria-labelledby={`${block.productIds.join("-")}-table-title`}>
    <div className="resource-table-heading"><h3 id={`${block.productIds.join("-")}-table-title`}>{block.title}</h3><p>{block.description}</p></div>
    <p className="table-scroll-hint">Technical table <span>Scroll horizontally →</span></p>
    <div className="technical-table-wrap" tabIndex={0} role="region" aria-label={block.title}>
      <table className="technical-table resource-product-table">
        <thead><tr><th scope="col">Product family</th><th scope="col">Structure</th><th scope="col">Published entry</th><th scope="col">Published weight</th><th scope="col">Source</th></tr></thead>
        <tbody>{rows.map(({ product, record }) => <tr key={`${product.id}-${record.id}`}><th scope="row"><Link href={productHref(product.id)}>{product.name}<Arrow /></Link></th><td>{record.structure}</td><td>{formatPublishedEntry(record)}</td><td>{record.weightG ? `${record.weightG} g` : "Not printed"}</td><td>Catalog p{record.sourcePage}</td></tr>)}</tbody>
      </table>
    </div>
  </section>;
}

export function ResourceComparisonTable({ block }: { block: ResourceComparisonTableBlock }) {
  return <figure className="resource-comparison-block">
    <figcaption>{block.caption}</figcaption>
    <p className="table-scroll-hint">Comparison table <span>Scroll horizontally →</span></p>
    <div className="technical-table-wrap" tabIndex={0} role="region" aria-label={block.caption}>
      <table className="technical-table resource-comparison-table">
        <thead><tr>{block.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
        <tbody>{block.rows.map((row, rowIndex) => <tr key={`${rowIndex}-${row[0]}`}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={`${cellIndex}-${cell}`}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
    {block.note && <p className="resource-table-note">{block.note}</p>}
  </figure>;
}
