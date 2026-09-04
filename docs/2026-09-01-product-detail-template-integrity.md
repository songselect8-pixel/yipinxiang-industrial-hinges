# Product-detail template and data-integrity check

Status: **passed and locked**, 2026-09-01. The user approved the Bearing Type page as the master product-detail template. This pass did not generate any additional detail routes and did not change the approved visual design.

## Template result

The reusable `ProductDetailTemplate` keeps the approved order: Breadcrumb, Product Hero, Quick Technical Summary, Product Overview, Available Sizes & Weights, Technical Drawing, Applications, Custom Requirements, Manufacturing & Quality, Packaging, Related Hinges, FAQ and RFQ.

The approved composition remains in `src/components/products/detail/ProductDetailTemplate.tsx` and `src/app/products/bearing-weld-on-hinges/product-detail.css`. Interactive gallery and drawing enlargement remain isolated in `ProductGallery.tsx` and `ImageEnlarger.tsx`. Existing Header, ProductCard, TechnicalTable, RFQSection, RFQForm and Footer components remain shared.

Two data boundaries were made explicit without changing rendered markup:

- Application section headings are family data, so a gate/trailer family is not forced to use the Bearing page's door/cabinet heading.
- Packaging intro, scope warning and examples are family data. Unsupported family packaging can remain null; the Bearing page continues to label the two photographs as examples from other catalog series.

The master contract is version `1.0-locked` in `src/data/product-details.ts`. The baseline files, hashes and section order are recorded in `docs/product-detail-template-lock.json`.

## Family source map

| Family | Technical source | Approved active image evidence | Original drawing | Product-specific packaging |
| --- | --- | --- | --- | --- |
| 20 Type | p5, 2 models | p5 IM79 catalog composite | p5 IM79 | p16 only |
| 12 / 14 / 16 Type | p6, 3 models | p6 IM85 catalog composite | p6 IM85 | p17 only |
| Bearing Type | p7, 18 rows | Bearing source folder `01.jpg` and `02.jpg` | p7 IM79, visibly identified as the image also printed on p5 | none published |
| Round Type | p8, 6 rows | Round source folder, checked against p8 IM96 | none published | none published |
| Pin Type | p9, 5 rows | Pin source folder, checked against p9 IM109 | none published | none published |
| Gasket Type | p10, 7 rows | Gasket source folder, checked against p10 IM112 | none published | none published |
| Grease Nipple Type | p11, 6 rows | Grease-nipple source folder, checked against p11 IM115 | none published | none published |
| Adjustable Type | p12, 3 rows | Exact p12 IM118 catalog image | none published | none published |
| Square Type | p13, 1 row | Exact p13 IM121 catalog image | none published | none published |
| Flag Type | p14, 5 rows and p15, 4 rows | Exact p14 IM124 and p15 IM127 images, kept as separate designs | none published | none published |

The machine-readable map is `docs/research/product-family-source-manifest.json`. It records the source PDF identity, catalog page, embedded-image object, active public image, original project-file path where applicable, SHA-256 values, application scope, family customization scope, drawing scope and packaging scope.

Oil-hole water-drop photographs, round oil-hole photographs and unrelated machined-accessory photographs remain excluded because no matching technical table is established. They must not be attached to a visually similar family.

## Technical integrity result

- Source PDF: 19 pages, SHA-256 `35f4881a70cf94c4a4e98e58755a668f5bcaad5b020c10140e05879813aedc33`.
- All 60 technical records still match the independent catalog transcription.
- All dimension strings, symbols, decimal precision, weights and unprinted p5/p6 units remain unchanged.
- The two Flag Type page groups remain separate; no size row crosses between p14 and p15 images.
- The p5/p7 shared drawing and p6 drawing are lossless pixel exports from the original PDF images. No drawing was redrawn or annotated.
- Family-specific packaging remains limited to 20 Type p16 and 12 / 14 / 16 Type p17.
- No product field was added for load capacity, material grade, tolerance, certification, MOQ, lead time or finish.

## Verification result

- `npm test`: 17/17 passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; only `/products/bearing-weld-on-hinges` exists as a product-detail route.
- Source verification: 52/52 PDF/image/provenance checks passed.
- Browser QA: 1440, 1024, 768 and 390px passed with one H1, all 18 Bearing rows, all approved sections, loaded images, no horizontal overflow, no console errors and no failed requests.
- Gallery enlargement, exact size-to-RFQ selection and FAQ interaction passed at 390px.
- The approved main DOM hash is unchanged. Before/after full-page screenshots are pixel-identical at 1440px and 390px.
- All nine ungenerated product-detail routes still return 404, confirming that this pass did not create additional pages.

Evidence is stored in `output/qa/product-template-integrity/`, including `source-verification.json`, `after.json`, `visual-regression.json` and the four final responsive screenshots.
