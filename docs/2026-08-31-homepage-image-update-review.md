# Homepage image update review

The six supplied industrial visuals are integrated into the approved homepage. The navy, white, gray and orange visual system, hero, product photography and catalog specifications are preserved. No additional content pages, image generation, deployment or live inquiry service were added.

## Image placement and authenticity

The files were supplied as PNGs, rather than the example JPG filenames. They are copied unchanged from `铰链/` to `public/images/illustrations/`.

| Supplied file | Homepage treatment |
| --- | --- |
| `manufacturing-capability.png` | Paired with the actual factory exterior. Separate captions identify the real company photo and the illustrative process scene. |
| `quality-control.png` | Replaces the former product reference in Quality Control. Copy covers dimensional inspection, in-process checks and consistent production without invented tolerances, standards or results. |
| `custom-engineering.png` | Adds a drawing-review image and six-step workflow within the existing navy custom section. The original catalog drawing remains above it. |
| `application-control-cabinet.png` | Large Electrical & Control Cabinets image card. Both door hinges remain visible. The inquiry starts with a custom requirement, without guessing a specific catalog model. |
| `application-trailer-gate.png` | Large Trailers, Gates & Heavy-Duty Doors image card. It carries the source-supported 12 / 14 / 16 family into the inquiry; final suitability requires confirmation. |
| `packaging-shipping.png` | Large supporting packaging visual below the two actual catalog packaging photographs and their series-specific descriptions. |

All six scenes are conservatively classified as illustrations, because some may be AI-generated. Every scene has a visible “Illustrative scene” caption and descriptive alternative text. None is presented as proof of company staff, equipment, facilities or customer installations. The product data and illustration data remain separate.

## Responsive visual review

Reviewed all five affected sections at 1440, 1024, 768 and 390px. The six new images retain their complete 4:3 source frame using `object-fit: contain`. The mobile views preserve the upper and lower cabinet hinges, trailer hinge connection, caliper and workpiece, engineering drawing, foreground hinge parts, packing film and wooden case.

Applications and the two factory images remain side by side on desktop and tablet, then stack on mobile. Quality uses copy on the left and inspection imagery on the right at desktop/laptop widths, then stacks at tablet/mobile widths. The original custom section remains navy, with its drawing and the new engineering scene in distinct rows. Actual packaging evidence remains first.

The final production screenshots are in `output/qa/image-update/`:

- `{width}-applications.png`
- `{width}-custom-hinges.png`
- `{width}-manufacturing.png`
- `{width}-quality.png`
- `{width}-packaging.png`
- `{width}-homepage.png`

There are also desktop and mobile hero viewport captures. These preserve the original product-led entry view.

## Verification results

| Check | Result |
| --- | --- |
| Production build | Passed |
| TypeScript | Passed |
| Catalog tests | 3 passed; all 60 technical records retain the audited source strings |
| Preserved-file audit | All 17 original image assets plus 5 hero/product/data files match their pre-update SHA-256 hashes |
| Supplied-image copies | All 6 public files are byte-identical to their source PNGs |
| Image loading | All 17 default visible homepage images load at every reviewed width |
| New image geometry | All 24 image/viewport combinations retain 4:3 proportions and visible illustration captions |
| Page width | 1440/1440, 1024/1024, 768/768 and 390/390 viewport/document widths; no horizontal page overflow |
| Inquiry regressions | 8 checks at each width pass: validation, both image-card prefills, stale-size clearing, other cabinet application, preview status, table containment and anchor destinations |
| Navigation | Keyboard menu/Escape behavior and Quality anchor clearance pass at all four widths |
| Production browser | No console errors or warnings, runtime errors, failed requests or HTTP errors during the final checks |
| Semantics | One H1, nonempty image alternatives and valid homepage anchor destinations |

Full measurements and browser results are recorded in `output/qa/image-update/verification.json`. Source provenance is recorded in `docs/research/homepage-asset-manifest.json`.

Development screenshots triggered Next.js LCP advisories when scrolling directly to below-fold illustrations. These images deliberately remain lazy-loaded; they are not above the fold on the homepage. The fresh production review produced no console messages.

The local production preview runs at `http://127.0.0.1:3000`. RFQ behavior is unchanged: the form validates and prefills entries, but sends and stores nothing. A valid preview says “Request prepared, not sent.”
