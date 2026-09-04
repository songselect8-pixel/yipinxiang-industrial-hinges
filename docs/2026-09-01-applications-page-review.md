# Applications page — approved and locked

Local production preview: `http://127.0.0.1:3100/applications`.

This phase builds only `/applications`. The Homepage, Products center, product-detail master template and product data structure remain locked. No Custom Hinges, Manufacturing, Quality, About or Contact route was created.

## Implemented

- A compact application-led hero using real pin-type hinge photography.
- Four application entry points: two approved illustrative industrial scenes and two product-led cards using real catalog product photography.
- Three engineering-oriented guides for electrical/control cabinets, gates/trailer doors/ramps and indoor/outdoor carbon steel doors.
- Source-safe application-to-product navigation. Direct family links appear only where the catalog relationship is established; uncertain selection paths use neutral catalog exploration or inquiry language.
- A six-input RFQ preparation guide covering application, reference image or type, dimensions, structure, quantity and drawing availability.
- A compact light selection-support banner followed by the approved dark navy RFQ composition with application-focused labels, optional drawing upload and “Request a Recommendation.”
- Unique metadata, canonical support, visible breadcrumb, BreadcrumbList JSON-LD, descriptive image alternatives and internal product links.

## Source boundaries

Catalog page 4 establishes indoor/outdoor carbon steel doors and the switch, control, network, GGD, AE and other industrial-cabinet terminology for the water-drop family. The Applications page keeps the page-4 product relationship limited to the existing Bearing, Pin, Gasket, Grease Nipple and 20 Type records.

Catalog page 6 establishes ramps, gates and trailer doors for the 12 / 14 / 16 Type family. That application group links directly only to the corresponding family and uses the original page-6 technical drawing.

The cabinet and trailer scenes are labeled “Illustrative application view.” They are not described as company facilities, employees, production lines or customer installations. Product photographs and the original technical drawing remain the evidence for actual products. No load, material, tolerance, rating, certification, MOQ or lead-time claim was added.

## Locked-system compatibility

The route reuses the existing colors, local IBM Plex Sans type system, shell, buttons, section labels, technical dividers, header, footer and RFQ composition. Shared changes are limited to backward-compatible route awareness and optional RFQ label text. Existing page defaults remain unchanged. The approved final pass renames the navigation section to “Explore Hinges by Application,” neutralizes recommendation wording, and converts the earlier selection-support CTA into a compact paper banner. The final RFQ remains the primary dark navy conversion section.

The image optimizer uses WebP for the local production preview because the installed Windows AVIF encoder stalled on source imagery during responsive QA. This changes the transport format only; source files, crops and visual output are unchanged.

## Verification

- `npm test`: 31 tests pass, including seven Applications source, SEO, authenticity, conversion-hierarchy and compatibility tests.
- `npm run typecheck`: passes.
- `npm run build`: passes; `/applications` is statically generated with the existing product routes.
- Browser QA at 1440, 1024, 768 and 390px: HTTP 200, no page-level horizontal overflow, no missing image alternatives, no duplicate IDs, no broken fragment targets, no console errors and no failed requests.
- Eleven unique internal destinations from the page return HTTP 200. RFQ prefill, mobile navigation, application links and the drawing-upload field were exercised.
- All tracked hashes match `docs/design-system-lock.json`, `docs/product-detail-template-lock.json` and `docs/applications-page-lock.json`.

The 32 final review screenshots, four-width measurements and executable browser audit are in `output/qa/applications-page/`.

## Lock boundary

`/applications` is approved and locked. Its machine-readable baseline is `docs/applications-page-lock.json`. Future inner pages may reuse its application-guide patterns, but must not redesign this page. The RFQ remains a local preview and does not transmit or store inquiries.
