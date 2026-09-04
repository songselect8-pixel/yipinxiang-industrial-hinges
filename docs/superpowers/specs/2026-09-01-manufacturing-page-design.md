# Manufacturing page design specification

Status: approved through the user-authored Manufacturing page brief on 2026-09-01. This document records that approved direction; it does not open a new design cycle.

## Purpose and scope

Build only `/manufacturing`. The page answers whether the supplier has credible, source-supported capability to manufacture industrial hinges. It must not create `/quality`, `/about` or `/contact`, and it must not restyle the locked Homepage, Products center, product-detail template, Applications page or Custom Hinges page.

The visual system remains the established industrial navy, steel gray, paper, white and restrained orange palette with IBM Plex Sans, square controls, fine dividers, technical labels, generous but controlled spacing and the existing dark navy RFQ composition.

## Evidence hierarchy

1. The actual catalog factory exterior is the Manufacturing hero visual and the primary company evidence.
2. Catalog pages 3 and 18 support factory, equipment, processing, assembly, checking, custom-development and shipment claims.
3. Catalog pages 16 and 17 and their original photographs support series-specific packaging examples.
4. The supplied manufacturing, engineering and quality scenes are supporting illustrations only. Every instance retains an “Illustrative scene” caption and neutral wording.
5. Product photos and drawings are not needed to fill decorative gaps. No new image is generated.

## Composition

The approved evidence-led approach is used instead of a timeline-led or gallery-led alternative. A strict production timeline is rejected because the catalog lists capabilities without establishing a complete chronological process. A factory gallery is rejected because only one verified company photograph is available.

The page order is:

1. Breadcrumb and compact Manufacturing hero with the actual factory exterior.
2. “From Material to Finished Hinge” capability overview presented as a capability ledger, not a claimed sequence.
3. Lathe Processing with the manufacturing-process illustration and an explicit illustrative caption.
4. Automatic Punching as a technical, text-led section without invented machinery details.
5. “Organized for Consistent Production” covering Standing Stock, Standardized Turnover and Mass Assembly.
6. “Built Around Confirmed Requirements” linking to the locked Custom Hinges page with the engineering illustration.
7. “Checks During Production” using conservative checking copy, the quality illustration and a link to the existing homepage quality section until `/quality` is built.
8. “A Real Manufacturing Base” reusing the actual factory photograph with a source label and four catalog-supported facts.
9. “Standardized Packaging for Shipment” using the two original series-specific packaging photographs as primary evidence.
10. “Positioned for Export Shipment” as a compact logistics band using only the page-18 location and shipment statements.
11. Manufacturing capability summary table.
12. Source-safe Manufacturing FAQ.
13. The approved dark navy RFQ composition with drawing upload enabled.

## Data and component boundaries

`src/data/manufacturing.ts` owns published capability text, source-page references, packaging scope, logistics facts, summary rows and FAQ answers. Components render that data and do not contain unsourced company claims.

`src/components/manufacturing/ManufacturingPageContent.tsx` owns the hero and section order. `ManufacturingCapabilities.tsx` owns the capability, machining, punching and organization sections. `ManufacturingEvidence.tsx` owns custom support, quality, factory, packaging, logistics, summary and FAQ. `ManufacturingRFQSection.tsx` composes the existing RFQ form without changing its shared defaults.

`src/app/manufacturing/manufacturing.css` is route-scoped through a `.manufacturing-page` prefix and reuses global tokens. It must not add competing global styles.

## Source boundaries

- Page 3: Sufficient materials, Self-owned equipment, Standing stock, Lathe processing, Automatic punching, Standardized turnover, Mass assembly and Standardized packaging.
- Page 18: Self-owned factory; design-to-production support; ability to develop and produce products according to clients’ needs; testing tools during production; location adjacent to Shanghai Port and Ningbo Port; highway transportation; professionals responsible for shipment.
- Page 16: 20 Type packaging only—kraft-paper inner cartons, plastic-film lining, corrugated outer carton, transparent sealing tape and packing tape.
- Page 17: 12 / 14 / 16 Type packaging only—folded inner boxes, plastic-film lining, composite wooden case and two horizontal plus one vertical packing belts.

No public copy may introduce factory size, employee count, production-line count, machine quantity, CNC brand, capacity, lead time, automation percentage, robot welding, tolerance capability, ISO claims, ERP/MES claims, inspection frequency, AQL, freight time, destinations or export volume.

## Responsive and accessibility behavior

The hero stacks copy before the actual factory image on narrow screens. Capability rows become one column at 390px. Illustrations use `object-fit: contain`, and real packaging composites remain fully visible. The capability table sits inside a labeled, focusable horizontal-scroll wrapper. Heading order remains one H1 followed by H2/H3. All links and FAQ summaries remain keyboard accessible, and the existing RFQ validation and focus behavior are retained.

## Verification

Contract tests verify the route, metadata, source-page data, image provenance, prohibited claims, navigation compatibility, section headings, RFQ options and the absence of later company routes. Production browser QA covers 1440, 1024, 768 and 390px, including image loading, overflow, heading count, active navigation, technical table containment and console errors.
