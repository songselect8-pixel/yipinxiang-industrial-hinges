# Homepage image update

Scope: implement the user's explicit image-placement update within the approved homepage. Retain the navy/white/gray/orange design, homepage-only routing and preview-only inquiry behavior. No additional design approval, new image generation or subagents are required.

## Asset and authenticity decisions

All six supplied files exist as PNGs under `铰链/`, despite the requested example filenames using JPG extensions. Copy the originals without conversion or retouching. Treat all six as supporting illustrations; they are not evidence of company equipment, personnel, inspection facilities or customer installations. Include visible illustrative captions and descriptive alternative text.

Keep the real hero and Product Range imagery unchanged. Preserve the factory exterior, original technical drawing and both catalog packaging photographs. Do not derive product specifications, equipment ownership, certification or inspection promises from the new scenes.

## Implementation

- [x] Add a typed illustration data file, a reusable captioned image component and source-provenance records.
- [x] Replace the text-heavy Applications grid with two large image cards. Keep the full cabinet hinges and trailer hinge visible. Preserve application-to-RFQ selection and a compact text option for other supported cabinet applications.
- [x] Pair the real factory exterior with the manufacturing-process illustration. Separate their evidence roles through explicit captions; retain the catalog-backed manufacturing facts.
- [x] Replace the quality section's product photograph with the inspection illustration. Use a two-column layout, conservative introductory copy and three quality-control points.
- [x] Retain the navy custom section and original drawing. Add a distinct engineering-review image and workflow row, without placing text over the drawing or claiming the pictured person is an employee.
- [x] Keep the actual packaging photographs first. Add a larger supporting packaging illustration alongside a short packing-requirements explanation.
- [x] Update the affected styles and documentation without changing the hero, Product Range, catalog dimensions, navigation or RFQ delivery boundary.

## QA inventory

| Requirement | Check and evidence |
| --- | --- |
| All six supplied visuals are used | Loaded browser image sources, correct sections and visible illustrative captions |
| Real evidence is preserved | SHA-256 comparisons for existing public assets, hero/Product Range components and catalog files; source-fidelity tests |
| No misleading authenticity claim | Review every new caption, alt and nearby paragraph; no “our technician/equipment/customer installation” claims |
| Image details remain visible | Inspect the five affected sections at 1440, 1024, 768 and 390px; preserve the complete source image aspect ratio |
| Existing design is retained | Compare the unchanged hero/product layout; inspect grids, whitespace, typography and restrained orange accents |
| Updated application cards work | Click each card, verify application and product family in RFQ, verify that old size selections are cleared |
| Responsive layout remains sound | Check document width, image loading, alt text and readable captions at all four widths |
| Catalog behavior remains sound | Open the wide 20-type table on mobile and confirm contained scrolling |
| Homepage remains a working preview | TypeScript check, catalog tests, production build, no browser errors; valid RFQ never claims delivery |

Exploratory checks: use the cabinet image after a size was already selected; navigate directly to the quality section before lazy images are cached; inspect the complete lower hinges and packing film/case details at 390px.

Save screenshots and verification under `output/qa/image-update/`. Keep the local production preview running for review when complete.
