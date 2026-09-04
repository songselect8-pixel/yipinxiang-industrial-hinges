# Products center — ready for approval

Local production preview: `http://127.0.0.1:3000/products`.

This phase adds the main Products page, reusable product cards, working filtering and a structured product data layer. No individual product detail pages have been created. The homepage remains the approved, locked design reference.

## Implemented

- Compact industrial hero, breadcrumb and the shared header/navigation/footer.
- Ten real catalog families, presented with genuine supplied product photographs or original catalog photo/drawing composites. No new imagery, placeholders or generated product scenes.
- Filters for hinge family, exact catalog size/model, documented structure and documented application. Desktop uses a compact horizontal finder; mobile uses an accessible, dismissible filter drawer.
- Exact size and structure filters intersect within the same variant. Unsupported combinations show a useful empty state instead of invented products.
- Source-backed size examples on cards and in the technical comparison. The comparison retains a visible hinge-family column while scrolling on tablet/mobile.
- Technical previews accessible through View Details and direct query links. All 60 source records are available, with separate images/tables for the two flag designs. Numbered-series drawings can be opened at full size.
- Product and size selections carry into the existing homepage RFQ preview. The selected source strings, decimal precision and unprinted-unit caveats are preserved.
- Custom requirement and final RFQ sections using the established buttons, labels, navy CTA style and typography.
- Unique title/description, canonical support, Open Graph metadata and visible/structured breadcrumbs for `/products`.

## Source boundaries

The supplied PDF's SHA-256 matches the previously audited source: `35f4881a70cf94c4a4e98e58755a668f5bcaad5b020c10140e05879813aedc33`.

Water-drop is a shared profile rather than a duplicate product family. The 20-A / 20-B structures and two flag designs remain variants. Compound dimensions are not parsed into inferred diameter/length facets. The numbered series have no printed units. Product weights are labelled as mass, not load ratings.

The public Products model uses null/empty values for unavailable information. Family customization is recorded only where explicitly stated; packaging remains scoped to the two catalog series with documented methods. No material, load, tolerance, certification, MOQ or lead-time claim was added. The private source audit, personal contacts and full PDF remain unpublished.

## Verification

`npm test`: 9 passing tests. `npm run typecheck`: pass. `npm run build`: pass. The production build includes `/` and `/products`; reserved detail paths are not published.

| Viewport | Cards | Page overflow | Missing images | Specification records checked |
| --- | ---: | --- | ---: | ---: |
| 1440px | 10 | None | 0 | 60 |
| 1024px | 10 | None | 0 | 60 |
| 768px | 10 | None | 0 | 60 |
| 390px | 10 | None | 0 | 60 |

Browser checks covered filter combinations, zero results, clearing/removing filters, URL reload/back behavior, mobile draft cancellation, focus restoration, keyboard dismissal, technical-table scrolling, both flag designs, source-preserving RFQ selections and navigation to actual built destinations. All eight linked homepage anchors resolve. No browser console/runtime errors or failed HTTP responses were observed in the production QA run.

The homepage's 27 tracked component styles and design tokens remain unchanged at all four widths. The shared changes are routing, optional card content/loading, and catalog-validated inquiry prefill; global homepage CSS and original technical records are unchanged.

There are 44 final screenshots in `output/qa/products-center/`, including four complete pages, four initial viewport views, technical previews, filter drawers, conversion sections and comparison tables. `verification.json` records production results; `homepage-baseline.json` and `homepage-regression.json` record preservation evidence. Files containing `initial` are exploratory captures, not the approval version.

## Approval boundary

The Products page is ready for the user's review. Its future `/products/<slug>` routes are prepared in the data layer; View Details currently opens the real technical preview on `/products`, avoiding unfinished links. Individual detail pages remain the next phase.

The RFQ form still sends and stores nothing. Preview indexing remains disabled. Publishing the site, confirming public identity/contact details and connecting live inquiry delivery are separate work.
