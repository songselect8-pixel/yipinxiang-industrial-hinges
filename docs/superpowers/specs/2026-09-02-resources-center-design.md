# Resources / Article Center Design

Status: approved by the user’s 2026-09-02 frozen-baseline extension request.

## Scope

Add a Resources publishing system before the final development freeze. Preserve every approved page’s visual identity and composition. Shared navigation, footer and selected page links receive only compact functional extensions.

## Architecture decision

Use a typed, structured TypeScript content layer instead of MDX. The current project has no MDX pipeline; adding one would require new build dependencies and configuration solely for six seed articles. Typed content blocks fit the existing source-backed TypeScript data model, let technical tables read directly from verified product data, and keep draft, noindex, related-content and sitemap rules testable without a CMS.

Content lives under `src/content/resources/`:

- `types.ts`: article, category, rich-text and content-block contracts.
- `categories.ts`: five extensible topic categories.
- `articles/*.ts`: one focused data file per seed article.
- `index.ts`: the public registry and selectors.
- `publishing.ts`: publishability, reading-time, table-of-contents, pagination, related-content and sitemap helpers.

Articles are data. React components render the typed blocks and never contain article prose.

## Publishing rules

An article is public only when `draft === false` and `noindex === false`. The same publishability predicate controls the index, static route generation, sitemap and RSS. Draft and noindex entries return 404 from public article routes.

The initial publication date is the implementation date, 2026-09-02. The verified company is the publisher; no individual author persona or credentials are added.

## Page system

`/resources` uses the locked industrial design language and contains a compact hero, one featured guide, the six published cards, only populated category entries, product/application topic links and the established dark navy RFQ CTA.

`/resources/[slug]` is one reusable server-rendered template with:

- breadcrumb, category, H1, introduction and dates;
- automatically calculated reading time;
- automatic H2/H3 table of contents;
- 720–820px reading column with a desktop sticky TOC and mobile `<details>` TOC;
- typed article blocks, approved images and verified-data technical tables;
- key takeaways, explicit related products, applications and resources;
- restrained selection-support CTA and company publisher note.

## Internal linking

Each article explicitly maps its products, applications and related article slugs. Product pages show only guides whose `relatedProducts` include that product. Existing Products, Applications, Custom Hinges and Quality routes receive one compact Resources link where it can be added without changing section hierarchy. The footer receives one Resources column with three populated category links.

## SEO and syndication

Every article generates unique metadata, canonical and Open Graph values, BreadcrumbList and BlogPosting JSON-LD. Sitemap entries and `/feed.xml` are generated from the same published registry. Newly added public articles enter both automatically; draft/noindex content enters neither.

The global pre-launch `noindex` and robots restrictions remain unchanged until deployment approval. Sitemap infrastructure may contain the approved URLs without lifting those preview restrictions.

## Seed categories

- Hinge Selection Guides: article 1.
- Application Guides: articles 3 and 4.
- Technical Guides: articles 2 and 6.
- Custom Manufacturing: article 5.
- Manufacturing & Quality: reserved in the architecture and hidden until a real article exists.

## Source safety

Article claims are limited to the catalog-backed product families, exact published dimensions, documented applications, confirmed customization statements and approved company/manufacturing content. No load ratings, material grades, certifications, tolerances, formulas, MOQ, lead time or unsupported suitability conclusions are introduced.

## Validation

Automated tests cover publication filtering, categories, relationships, table-of-contents generation, metadata, sitemap/RSS exclusion and unsupported-claim boundaries. Browser QA covers all Resources routes at 1440, 1024, 768 and 390px, navigation fit, article/table overflow, anchors, schema parsing, broken links and runtime errors.
