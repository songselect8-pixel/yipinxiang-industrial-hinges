import Image from "next/image";
import type { ResourceArticle } from "@/content/resources";
import { ResourceRichText } from "./ResourceRichText";
import { ResourceComparisonTable, ResourceProductTable } from "./ResourceTechnicalTable";

const evidenceLabels = {
  "product-photograph": "Real product photograph",
  "catalog-drawing": "Original catalog drawing",
  "company-photograph": "Actual company photograph",
  "supporting-illustration": "Supporting industrial illustration",
} as const;

export function ResourceArticleBody({ article }: { article: ResourceArticle }) {
  return <div className="resource-article-body">
    {article.content.map((block, index) => {
      if (block.type === "heading") return block.level === 2
        ? <h2 id={block.id} key={block.id}>{block.title}</h2>
        : <h3 id={block.id} key={block.id}>{block.title}</h3>;
      if (block.type === "paragraph") return <p key={index}><ResourceRichText content={block.content} /></p>;
      if (block.type === "list") {
        const List = block.ordered ? "ol" : "ul";
        return <List key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}><ResourceRichText content={item} /></li>)}</List>;
      }
      if (block.type === "callout") return <aside className="resource-callout" key={index}><span className="micro-label">{block.label}</span><p><ResourceRichText content={block.content} /></p></aside>;
      if (block.type === "image") return <figure className="resource-content-image" data-evidence={block.evidence} key={block.src}><div><Image src={block.src} alt={block.alt} width={block.width} height={block.height} sizes="(max-width: 899px) 100vw, 820px" /></div><figcaption><span>{evidenceLabels[block.evidence]}</span><span>{block.caption}</span></figcaption></figure>;
      if (block.type === "product-table") return <ResourceProductTable block={block} key={index} />;
      return <ResourceComparisonTable block={block} key={index} />;
    })}
  </div>;
}
