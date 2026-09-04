# Applications Page Design

**Status:** Approved through the user’s 2026-09-01 Applications page brief.

## Scope

Build only `/applications`. Preserve the locked homepage, Products center, product-detail template, product data, and global visual identity. The page is a technical B2B application guide that helps buyers move from an installation context to a source-supported hinge family or to an RFQ when selection is uncertain.

## Source boundaries

- Catalog page 4 supports water-drop shaped weld-on hinges for indoor and outdoor carbon steel doors, switch cabinets, control cabinets, network cabinets, GGD cabinets, AE cabinets, and other industrial cabinets.
- Catalog page 6 supports the 12 / 14 / 16 Type series for ramps, gates, and trailer doors.
- Cabinet and steel-door links may point to the five families already scoped to catalog page 4 in `src/data/products.ts`: Bearing, Pin, Gasket, Grease Nipple, and 20 Type.
- Gates, trailer doors, and ramps may point directly to the 12 / 14 / 16 Type family.
- No content may add load capacity, ratings, certifications, tolerances, material grades, or other unpublished properties.

## Page composition

1. Compact hero with breadcrumb, one H1, two CTAs, and a restrained product-led visual.
2. Four-card application overview. The two approved illustrative scenes remain labeled as illustrations; steel-door and industrial-cabinet cards use real product photography and are labeled as product references.
3. Three concise detail sections for cabinet structures, gates/trailers/ramps, and carbon-steel doors. Each section states the environment, selection considerations, source-backed product navigation, and an RFQ action.
4. “What Should You Tell Us?” six-step RFQ preparation guide.
5. Compact application-to-product navigation that exposes only the two catalog-supported mappings and a neutral all-products path.
6. Dark navy selection-support CTA.
7. Existing dark navy RFQ composition with drawing upload, application-focused field labels, and “Request a Recommendation” as the submit label.
8. Existing footer.

## Architecture

`src/data/applications.ts` owns source pages, application copy, images, and family mappings. A client content component owns only inquiry-prefill actions. The route remains a Server Component so it can export static metadata and breadcrumb JSON-LD. Page-specific CSS composes existing tokens without changing the locked global spacing, typography, colors, buttons, cards, or form styles.

The shared Header, Footer, and RFQ form receive small backward-compatible route/label extensions. Their default homepage and product-page output remains unchanged.

## Responsive behavior

- 1440px: compact split hero, two-column primary visual cards, compact supporting cards, alternating application detail layouts.
- 1024px and 768px: maintain two-column overview where readable, reduce text columns, and keep the product navigation compact.
- 390px: single-column cards and details; image frames show the hinge area without clipping; RFQ fields stack with existing spacing; no page-level horizontal overflow.

## Verification

Add a source-integrity test before implementation. Verify the route, one-H1 rule, metadata/canonical/breadcrumb, exact application terms, supported family mappings, illustration labels, product links, RFQ fields, drawing upload, and absence of prohibited claims. Run the full unit suite, TypeScript, production build, and a Playwright browser audit at 1440, 1024, 768, and 390px.
