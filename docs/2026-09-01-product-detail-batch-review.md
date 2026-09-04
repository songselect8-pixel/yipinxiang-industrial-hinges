# Product detail batch review — 2026-09-01

Status: implemented and verified against the locked Bearing Type master template.

## Published routes

- `/products/20-type-weld-on-hinges`
- `/products/12-14-16-type-weld-on-hinges`
- `/products/round-weld-on-hinges`
- `/products/pin-weld-on-hinges`
- `/products/gasket-weld-on-hinges`
- `/products/grease-nipple-weld-on-hinges`
- `/products/adjustable-weld-on-hinges`
- `/products/square-weld-on-hinges`
- `/products/flag-weld-on-hinges`

The existing `/products/bearing-weld-on-hinges` route remains the visual and component master. Its visible layout and copy are unchanged. Its related-product links now resolve to the newly published pages.

## Data and source controls

- All 10 product detail records are held in `src/data/product-details.ts`; the 60 exact technical records remain centralized in `src/data/catalog-variants.ts`.
- `docs/research/product-family-source-manifest.json` remains the machine-readable image/drawing/page authority.
- `docs/research/product-detail-publication-map.md` records the route-level source mapping.
- 20-A and 20-B remain separate rows with their source-defined end styles and identical published parameter values.
- 12-A, 14-A and 16-A remain variants on one family page.
- Flag p14 and p15 structures have matching images and independent tables; no commercial model names were invented.
- Only 20 Type and 12 / 14 / 16 Type display family-specific packaging. The Bearing master retains its approved, explicitly labelled other-series reference.
- Families without original drawings or supported application mappings omit those sections.

## Template extensions within the lock

- The existing specification section supports source-driven Flag variant groups while retaining the established technical-table styling.
- Pages without original drawings use the same table component at full section width.
- Numbered series show first and last published model in the approved quick-summary format.
- Single family-specific packaging records use the existing packaging component without an empty second column.
- Parameter tables keep horizontal overflow inside the focusable table wrapper and show the established scroll hint.

## QA evidence

- Automated product/source tests cover publication routes, metadata uniqueness, image provenance, application scope, customization scope, packaging boundaries, Flag grouping and related links.
- The production browser audit traverses 10 pages at 1440, 1024, 768 and 390 pixels.
- The audit checks HTTP status, one H1, metadata, canonical, breadcrumb data, hero image, source rows, drawing presence/absence, applications, customization, packaging, related links, RFQ selection, image loading, ALT attributes, duplicate IDs, local anchors, mobile navigation and page overflow.
- Full-page desktop and mobile screenshots and targeted section captures are under `output/qa/product-detail-batch/`.
- Final verification: 24/24 automated tests passed, TypeScript passed, the Next.js production build passed, and all 40 page/viewport browser checks passed with zero console errors, failed resources or page-overflow cases.
- The preview remains `noindex`; production indexing and sitemap publication remain separate from this design/data phase.
