# Resources Center implementation review

Status: approved, final-audited and locked on 2026-09-04.

## Architecture created

- `/resources` is the editorial hub.
- `/resources/[slug]` is one reusable static article route.
- `src/content/resources/` is the typed data layer. Article content does not live inside React page components.
- Content blocks support headings, paragraphs, lists, callouts, verified images, source-backed product tables and comparison tables.
- H2/H3 content blocks generate desktop and mobile tables of contents automatically.
- Listing pagination is implemented in the publishing data layer and stays hidden while only six guides exist.

## Categories

The registry defines Hinge Selection Guides, Application Guides, Technical Guides, Custom Manufacturing and Manufacturing & Quality. Only the first four appear because they contain public articles. The empty Manufacturing & Quality category remains available for future publishing without producing an empty public page.

## Seed articles and routes

1. `/resources/how-to-choose-weld-on-hinges`
2. `/resources/weld-on-hinge-sizes`
3. `/resources/weld-on-hinges-for-gates-trailer-doors-and-ramps`
4. `/resources/weld-on-hinges-for-electrical-control-cabinets`
5. `/resources/standard-vs-custom-weld-on-hinges`
6. `/resources/prepare-hinge-drawing-dimension-request`

Each article has unique metadata, source-safe product and application relationships, a generated reading time, explicit related resources, the company publisher, a bottom RFQ path and descriptive image metadata. The application illustrations remain neutrally disclosed; real products and original drawings remain the technical references.

## SEO and publishing

- Every public article generates canonical, Open Graph article metadata, `BlogPosting` data and `BreadcrumbList` data.
- `/sitemap.xml` automatically maps public resource records.
- `/feed.xml` publishes the same six public records without an external dependency.
- `draft: true` or `noindex: true` removes an item from the hub, categories, related guides, static route generation, RSS and sitemap.
- The global preview noindex and robots disallow remain intentionally active. `SITE_URL`, indexing and robots are controlled launch tasks in `docs/pre-launch-checklist.md`.

## Internal linking

- Header and mobile navigation include Resources after Quality.
- The footer includes Resources plus three compact category links.
- Products, Applications, Custom Hinges and Quality contain one subtle contextual guide link each.
- Product detail pages render up to three explicitly mapped Related Guides after Related Hinges.
- Article relations link only to declared products, applications and resources. Recommendations are not keyword-generated.

## Verification

- 73 automated tests passed.
- TypeScript passed.
- Next.js production build passed and generated the hub plus six static article pages.
- Browser checks passed across the hub and six article routes at 1440, 1024, 768 and 390px, covering 28 route-and-viewport combinations.
- The desktop navigation fits before the quote CTA; the mobile menu exposes an active Resources entry.
- Technical tables keep overflow inside their focusable scroll regions at 1024, 768 and 390px.
- All 31 checked internal destinations returned successful responses, required images loaded, and no browser console errors occurred.
- RSS returned six items; the sitemap registry returned the Resources hub plus six article URLs.
- One scoped template correction hides the duplicate desktop TOC in the reading column. Desktop now shows the sidebar TOC, while widths below 900px show the collapsible TOC.
- The final HTTPS origin is still a pre-launch configuration item. The local preview origin must be replaced through `SITE_URL`, then the deployed sitemap must be confirmed free of `localhost` and `127.0.0.1` URLs.

Detailed machine-readable evidence is in `output/qa/resources/verification.json` and `output/qa/resources/final-browser-audit.json`. Future publication steps are in `docs/resources-publishing-guide.md`.
