# About Us page implementation plan

1. Create `tests/about-us.test.ts` covering catalog source maps, approved company name, route structure, image authenticity, prohibited claims, internal links and Contact-route absence.
2. Create `src/data/about.ts` as the page-specific source layer, deriving product and application records from audited data where possible.
3. Create route-scoped About components for the hero/profile/product range, manufacturing/standard-custom/applications, company evidence/navigation and final CTA.
4. Create `src/app/about-us/page.tsx` with unique metadata, canonical URL and breadcrumb JSON-LD; add `about-us.css` without changing global visual tokens.
5. Extend Header, Footer and site navigation with `/about-us` awareness while preserving existing defaults and locked visual classes.
6. Revalidate every tracked file in all existing lock manifests; refresh only deliberately changed Header/Footer/site hashes in `docs/design-system-lock.json`.
7. Run focused tests, full tests, TypeScript, production build and Playwright at 1440, 1024, 768 and 390px.
8. Record approval evidence and stop before creating `/contact`.
