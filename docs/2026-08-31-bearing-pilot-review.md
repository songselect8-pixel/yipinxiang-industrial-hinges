# Bearing Type pilot detail page

Scope: one detail page only, `/products/bearing-weld-on-hinges`. Homepage and Products designs are approved and locked. The user approved this pilot on 2026-09-01; it is now the locked master product-detail template. No other detail routes were created during the final integrity check.

## Source verification

Before implementation, PDF page 7 was re-extracted and visually reviewed. All 18 size/weight pairs match the user's numeric values. The original Cyrillic `ф`, `*`, `mm` and integer weight strings are retained without normalization. The table labels weight as product mass, not load capacity.

Source PDF SHA-256: `35f4881a70cf94c4a4e98e58755a668f5bcaad5b020c10140e05879813aedc33`.

The original page-7 IM79 drawing composite matches the existing page-5 image pixel for pixel. The pilot asset is a byte-identical PNG copy with SHA-256 `d96721e065a0c0f28580e20ac8525fd10ad740798a63c0a24b53be8cb5a56ae8`. The visible note identifies it as a shared reference, not 18 separate dimensioned drawings. No AI image, redrawn geometry or inferred dimensional values are used.

The two gallery photographs are the supplied bearing-folder `01.jpg` and `02.jpg` assets. Manufacturing evidence uses the actual catalog factory exterior. No generated personnel, machine or installation imagery is used on the pilot.

Application context comes from the page-4 water-drop introduction: industrial steel doors and named cabinet types. Gate, trailer and ramp claims from the page-6 numbered series have not been assigned to Bearing Type. Company-level custom development and product checking are supported by page 18; no custom material, coating, tolerance or capacity is promised.

Bearing-specific packaging is unpublished and remains null in the product model. The actual page-16 and page-17 packaging images are explicitly labelled as examples from **other** catalog series. Their source descriptions are not assigned to the bearing family.

## Implementation boundaries

- Reusable detail template, photo gallery, native image enlargement dialog, original technical table, existing related ProductCards and approved navy RFQ composition.
- Only Bearing Type receives a built detail route. Other families retain the Products previews. Existing preview bookmarks still work.
- Each technical row preserves its exact size when selected for RFQ. URL selections cannot switch the fixed pilot form to another product family.
- RFQ has the requested custom-requirement and optional drawing fields. Client-side selection accepts PDF/CAD/JPG/PNG up to 10 MB. These are preview UI limits, not manufacturer specifications. No entries or files are transmitted or persistently stored.
- Unique title, description, canonical support, Open Graph and three-level breadcrumb structured data. Preview noindex, private source files and unconfirmed contact restrictions remain in place.

## Validation

Source evidence: `output/qa/bearing-pilot/source-verification.json`.

Browser checks: `output/qa/bearing-pilot/browser-checks.mjs`.

Final production and responsive validation is recorded in `output/qa/bearing-pilot/production-verification.json`. All four review widths — 1440, 1024, 768 and 390px — pass the full table, gallery, drawing zoom, keyboard containment and focus return, size-to-inquiry selection, FAQ, required fields, drawing errors/removal, and mobile navigation checks. No console errors, failed resource requests, viewport overflow or RFQ/file transmissions were observed.

The backward-tab check exposed a native-dialog focus escape. Explicit first/last-control wrapping in the shared dialog fixes it without changing the approved visual styling; the existing product previews and filter drawer were checked as well.

All 24 unique page links and their fragment targets resolve. The other nine product detail routes remain unbuilt. The locked Home/Products layout measures match at all eight page/viewport combinations, and all eight tracked immutable source files retain their hashes. The production build, TypeScript check and 13 catalog/pilot tests pass.

Approval gate satisfied: the user approved and locked this template. Before additional routes are generated, each family must use `docs/research/product-family-source-manifest.json` to keep its photographs, catalog page, technical records, drawings and packaging scope together.
