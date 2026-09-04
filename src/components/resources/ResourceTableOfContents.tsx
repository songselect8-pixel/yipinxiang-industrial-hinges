import type { ResourceTocItem } from "@/content/resources/types";

function TocLinks({ items }: { items: readonly ResourceTocItem[] }) {
  return <ol>{items.map((item) => <li className={item.level === 3 ? "is-subheading" : undefined} key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>)}</ol>;
}

export function ResourceTableOfContents({ items }: { items: readonly ResourceTocItem[] }) {
  return <>
    <nav className="resource-toc resource-toc-desktop" aria-label="Table of contents"><p className="micro-label">Table of Contents</p><TocLinks items={items} /></nav>
    <details className="resource-toc-mobile"><summary>Table of Contents <span aria-hidden="true">＋</span></summary><nav aria-label="Table of contents"><TocLinks items={items} /></nav></details>
  </>;
}
