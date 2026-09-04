"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { getFamily } from "@/data/catalog";
import { products, getProductBySlug, productHref, type ProductFamily } from "@/data/products";
import { emptyProductFilters, filterKeys, filterOptions, filterProducts, productFilterCount, readProductFilters, type ProductFilters as Filters } from "@/data/product-filters";
import { productInquiryHref } from "@/data/product-inquiry";
import { Arrow, Plus } from "@/components/ui/Arrow";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { ProductCard } from "./ProductCard";
import { ProductDimensions } from "./ProductDimensions";
import { ProductFilters } from "./ProductFilters";
import { ProductPreview } from "./ProductPreview";
import { CatalogDialog } from "./CatalogDialog";

export function ProductFinder() {
  const [filters, setFilters] = useState<Filters>(emptyProductFilters);
  const [draft, setDraft] = useState<Filters>(emptyProductFilters);
  const [filterOpen, setFilterOpen] = useState(false);
  const [preview, setPreview] = useState<ProductFamily | null>(null);
  const matches = filterProducts(filters);
  const count = productFilterCount(filters);
  const recordCount = matches.reduce((sum, match) => sum + match.dimensions.length, 0);

  useEffect(() => {
    function readLocation() {
      const params = new URLSearchParams(window.location.search);
      const next = readProductFilters(params);
      setFilters(next); setDraft(next);
      setPreview(getProductBySlug(params.get("view") ?? "") ?? null);
    }
    readLocation();
    window.addEventListener("popstate", readLocation);
    return () => window.removeEventListener("popstate", readLocation);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const closeAtDesktop = () => { if (media.matches) setFilterOpen(false); };
    media.addEventListener("change", closeAtDesktop);
    return () => media.removeEventListener("change", closeAtDesktop);
  }, []);

  function updateUrl(next: Filters, selected: ProductFamily | null) {
    const url = new URL(window.location.href);
    for (const key of filterKeys) { if (next[key]) url.searchParams.set(key, next[key]); else url.searchParams.delete(key); }
    if (selected) url.searchParams.set("view", selected.slug); else url.searchParams.delete("view");
    window.history.replaceState(window.history.state, "", url);
  }

  function changeFilters(next: Filters) { setFilters(next); setDraft(next); updateUrl(next, preview); }
  function viewProduct(event: MouseEvent<HTMLAnchorElement>, product: ProductFamily) {
    if (product.detailPagePublished || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); setPreview(product); updateUrl(filters, product);
  }
  function closePreview() { setPreview(null); updateUrl(filters, null); }

  return <>
    <section id="product-range" className="section product-finder-section" aria-labelledby="product-finder-title">
      <div className="shell">
        <SectionHeading eyebrow="The product range" title={<span id="product-finder-title">Find your hinge.</span>}>
          <Link href="#selection-overview" className="text-link section-heading-link"><span className="compare-link-full">Compare hinge types</span><span className="compare-link-short">Compare</span><Arrow /></Link>
        </SectionHeading>
        <div className="desktop-product-filters"><ProductFilters value={filters} onChange={changeFilters} idPrefix="desktop-filter" /></div>
        <div className="product-results-bar">
          <p role="status" aria-live="polite" aria-atomic="true"><strong>{matches.length}</strong> of {products.length} hinge families{count > 0 && <span> · {recordCount} matching catalog {recordCount === 1 ? "record" : "records"}</span>}</p>
          <button type="button" className="button button-outline mobile-filter-trigger" onClick={() => { setDraft(filters); setFilterOpen(true); }} aria-haspopup="dialog">Filters{count > 0 && ` (${count})`} <Plus /></button>
          {count > 0 && <button type="button" className="text-link filter-reset" onClick={() => changeFilters(emptyProductFilters)}>Clear filters <Plus /></button>}
          {count === 0 && <span className="filter-source-note">Sizes exactly as catalogued</span>}
        </div>
        {count > 0 && <div className="active-product-filters" aria-label="Active filters">{filterKeys.filter((key) => filters[key]).map((key) => <button key={key} type="button" onClick={() => changeFilters({ ...filters, [key]: "" })} aria-label={`Remove ${filterOptions[key].find((item) => item.value === filters[key])?.label} filter`}>{filterOptions[key].find((item) => item.value === filters[key])?.label}<Plus /></button>)}</div>}
        {matches.length ? <div className="product-grid catalog-product-grid">{matches.map(({ product, dimensions }, resultIndex) => {
          const family = getFamily(product.id)!;
          const exampleDimensions = count ? dimensions : product.dimensions;
          const applications = product.applications;
          return <ProductCard key={product.id} family={family} index={products.indexOf(product)} eager={resultIndex < 3} href={productHref(product.id)} onViewDetails={(event) => viewProduct(event, product)} actionLabel="View Details" quoteHref={productInquiryHref(product.id, filters.size && dimensions.length === 1 ? dimensions[0].id : undefined)} countLabel={`${product.dimensions.length} ${product.id.includes("type") ? "catalog models" : product.dimensions.length === 1 ? "catalog size" : "catalog sizes"}`}>
            <div className="product-card-specs"><span className="micro-label">{count ? "Matching catalog examples" : "Catalog examples"}</span><ProductDimensions dimensions={exampleDimensions} showPage={product.id === "flag"} /></div>
            {applications.length > 0 && <div className="product-card-application"><span>Catalog use</span><p>{applications[0].scope === "profile" ? "Steel doors & industrial cabinets" : "Gates, trailer doors & ramps"}</p></div>}
          </ProductCard>;
        })}</div> : <div className="product-empty-state"><h3>No catalog match for this combination.</h3><p>Try removing a filter, or send the required size and structure for review.</p><div><button className="button button-outline" type="button" onClick={() => changeFilters(emptyProductFilters)}>Clear filters <Arrow /></button><Link className="text-link" href="/#rfq">Discuss a custom requirement <Arrow /></Link></div></div>}
        <p className="catalog-source-footnote">Only listed combinations are shown. Applications describe catalog family or series use; confirm suitability for your installation.</p>
      </div>
    </section>
    <section id="selection-overview" className="section product-comparison-section" aria-labelledby="selection-overview-title">
      <div className="shell">
        <SectionHeading eyebrow="The specification comes first" title={<span id="selection-overview-title">Compare the construction.</span>} description="Representative published dimensions. Open the specifications to see every listed size." />
        <p className="comparison-scroll-hint">Scroll horizontally to see all columns <Arrow /></p>
        <div className="technical-table-wrap" tabIndex={0} role="region" aria-label="Hinge family comparison, scroll horizontally if needed">
          <table className="technical-table product-comparison-table"><caption className="sr-only">Industrial hinge families, construction and original catalog dimensions</caption>
            <colgroup><col className="comparison-family-column" /><col className="comparison-structure-column" /><col className="comparison-size-column" /><col className="comparison-details-column" /></colgroup>
            <thead><tr><th scope="col">Hinge type</th><th scope="col">Structure</th><th scope="col">Catalog examples</th><th scope="col">Technical details</th></tr></thead>
            <tbody>{products.map((product) => <tr key={product.id}><th scope="row">{getFamily(product.id)!.shortName}</th><td>{product.structure}</td><td><ProductDimensions dimensions={product.dimensions} showPage={product.id === "flag"} /></td><td className="table-action"><Link href={productHref(product.id)} onClick={(event) => viewProduct(event, product)} aria-label={`View specifications for ${product.name}`}>View Details <Arrow /></Link></td></tr>)}</tbody>
          </table>
        </div>
        <p className="catalog-source-footnote">Examples are individual catalog entries, not continuous size ranges. Numbered series retain the catalog’s original symbols and unprinted units.</p>
      </div>
    </section>
    <ProductPreview product={preview} onDismiss={closePreview} />
    <CatalogDialog open={filterOpen} onDismiss={() => setFilterOpen(false)} titleId="mobile-filter-title" className="product-filter-dialog">
      <Eyebrow>Product finder</Eyebrow><h2 id="mobile-filter-title">Filter the range.</h2>
      <p className="filter-drawer-intro">Choose from the types, sizes and applications listed in the catalog.</p>
      <ProductFilters value={draft} onChange={setDraft} idPrefix="mobile-filter" />
      <div className="filter-drawer-actions"><button type="button" className="text-link" onClick={() => setDraft(emptyProductFilters)}>Clear filters</button><button type="button" className="button button-primary" onClick={() => { changeFilters(draft); setFilterOpen(false); }}>Show {filterProducts(draft).length} {filterProducts(draft).length === 1 ? "family" : "families"}<Arrow /></button></div>
    </CatalogDialog>
  </>;
}
