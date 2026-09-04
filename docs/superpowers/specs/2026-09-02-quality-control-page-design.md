# Quality Control page design specification

Status: approved through the user-authored Quality Control page brief on 2026-09-02. This document records that approved direction and does not open a new design cycle.

## Purpose and scope

Build only `/quality`. The page answers how the manufacturer supports product consistency during production through source-backed dimensional checking, specification reference, in-process checking, organized handling and preparation for packaging. It must not create `/about` or `/contact`, and it must not restyle the locked Homepage, Products center, product-detail template, Applications page, Custom Hinges page or Manufacturing page.

The visual system remains the approved industrial navy, steel gray, paper, white and restrained orange palette with IBM Plex Sans, square controls, fine dividers, technical labels, compact tables and the existing dark navy RFQ composition.

## Evidence hierarchy

1. Catalog page 18 is the company-specific basis for testing tools and checks during production.
2. Original product records and drawings from pages 5, 7 and 12 show the published references used for representative hinge families.
3. Catalog page 3 supports Standardized turnover, Mass assembly and Standardized packaging as production-organization concepts.
4. Original packaging photographs and text from pages 16 and 17 document two family-specific packaging examples.
5. The supplied dimensional-inspection scene is supporting illustration only. Its single page use retains “Illustrative scene” and never presents the person, environment or measuring equipment as company evidence.

## Composition

The page uses an evidence-led technical narrative rather than a certification wall or laboratory gallery. No certification marks, invented test methods or fake quality statistics are introduced.

The page order is:

1. Breadcrumb and compact Quality hero with the dimensional-inspection illustration, one H1 and links to the RFQ and Products routes.
2. “Checks Are Part of the Process” as a five-part quality approach ledger.
3. “Dimensional Checks Against Requirements” explaining relevant published or confirmed references without tolerances.
4. “Specifications Provide the Reference” using original 20 Type and Bearing Type catalog drawings without redrawing or changing values.
5. “Checks During Production” using the page-18 testing-tool statement conservatively and without frequency claims.
6. “Consistency Across Production” connecting Standardized turnover, Mass assembly, In-process checking and Standardized packaging without claiming SPC.
7. “Different Hinges. Different Details to Check.” with real source-bound records for Bearing Type, 20 Type and Adjustable Type.
8. “Custom Requirements Start With Confirmed Dimensions” as a compact bridge to `/custom-hinges`.
9. A restrained practical review ledger for Product structure, Visible surface condition, Assembly condition, Key dimensions and Packaging readiness.
10. “Prepared for the Next Step” using the real 20 Type and 12 / 14 / 16 Type packaging evidence, each tied to its catalog family.
11. A compact Standard Product versus Custom Requirement comparison.
12. Source-safe FAQ.
13. The approved dark navy RFQ composition with drawing upload enabled and a secondary `/custom-hinges` link.

## Data and component boundaries

`src/data/quality.ts` owns quality concepts, source-page references, representative product bindings, packaging scope, comparison copy and FAQ answers. Representative product records are derived from the audited `catalog`, `products` and `catalog-variants` data instead of copying or normalizing technical values.

`src/components/quality/QualityPageContent.tsx` owns the hero and page order. Focused components under `src/components/quality/` own technical references, product examples, packaging/FAQ and RFQ composition. `src/app/quality/quality.css` is route-scoped through `.quality-page` and reuses global tokens.

Shared Header, Footer and navigation data gain only Quality route awareness. Existing markup, class names and all other route behavior remain unchanged.

## Source boundaries

- Page 3: Standardized turnover, Mass assembly and Standardized packaging.
- Page 5: 20-A and 20-B, the exact published D, D-1, L, d, L-1, c and L-2 values, and the original catalog composite.
- Page 7: Bearing Type size and weight records and the original catalog reference drawing.
- Page 12: Adjustable Type size and weight records and product-customization support.
- Page 16: 20 Type packaging only—kraft-paper inner cartons, plastic-film lining, corrugated outer carton, transparent sealing tape and packing tape.
- Page 17: 12 / 14 / 16 Type packaging only—folded inner boxes, plastic-film lining, composite wooden case and two horizontal plus one vertical packing belts.
- Page 18: testing tools developed so checks can occur during production; custom product development and production according to client needs.

No public copy may introduce ISO, IATF, CE, UL, RoHS, REACH, AQL, 100% inspection, CMM, salt spray, hardness, tensile, load or fatigue testing, inspection frequency, tolerance capability, defect/pass rates, laboratory accreditation, statistical process control, test-equipment brands or numerical QC targets.

## Responsive and accessibility behavior

The hero stacks copy before the illustration on narrow screens and keeps the full caliper/workpiece scene visible with `object-fit: contain`. Drawings stay uncropped and link to their source product details. Representative product records use compact responsive tables inside their cards; any wide reference table uses a labeled focusable overflow wrapper. Packaging composites remain fully visible. Heading order remains one H1 followed by H2/H3. Native `details/summary` provides FAQ disclosure, links retain visible focus styles, and the existing RFQ validation/focus behavior remains intact.

## Verification

Contract tests verify the route, metadata, source-page data, exact representative catalog values, correct image/drawing-family binding, one illustration use, prohibited claims, navigation compatibility, section headings, RFQ options and the absence of About and Contact routes. Production browser QA covers 1440, 1024, 768 and 390px, including image loading, illustration disclosure, original drawing/packaging evidence, overflow containment, heading count, active navigation, mobile menu, form spacing and console errors.
