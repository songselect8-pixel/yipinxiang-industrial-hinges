# Resources Center Implementation Plan

> **For agentic workers:** Implement inline in this task because the user explicitly requested the completed system in the current project. Follow test-first steps and preserve every locked page.

**Goal:** Build the Resources hub, reusable article template, six source-safe seed guides, SEO publishing infrastructure and explicit internal links.

**Architecture:** Typed structured content under `src/content/resources` feeds server-rendered index and article routes. One publishability predicate controls listing, routes, sitemap and RSS. Shared page additions remain compact and use existing design tokens.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, existing Tailwind/global CSS system, Node test runner.

---

### Task 1: Publishing contract and source-safe data

**Files:**
- Create `tests/resources.test.ts`
- Create `src/content/resources/types.ts`
- Create `src/content/resources/categories.ts`
- Create `src/content/resources/publishing.ts`
- Create `src/content/resources/articles/*.ts`
- Create `src/content/resources/index.ts`

- [ ] Write tests for exactly six published seed articles, unique metadata, populated-category visibility, draft/noindex exclusion, valid product/application relationships, explicit related resources, reading time and generated TOC.
- [ ] Run the focused test and confirm it fails because the content module does not exist.
- [ ] Implement the typed contracts, selectors and six article data files.
- [ ] Run the focused test and confirm it passes.

### Task 2: Resources index and cards

**Files:**
- Create `src/components/resources/ResourceCard.tsx`
- Create `src/components/resources/ResourcesIndexContent.tsx`
- Create `src/app/resources/page.tsx`
- Create `src/app/resources/resources.css`

- [ ] Add failing source-contract assertions for page hierarchy, semantic card links and metadata.
- [ ] Implement the compact editorial hub with featured, latest, populated categories, topic links and RFQ CTA.
- [ ] Verify the focused tests.

### Task 3: Reusable article template

**Files:**
- Create `src/components/resources/ResourceRichText.tsx`
- Create `src/components/resources/ResourceTechnicalTable.tsx`
- Create `src/components/resources/ResourceArticleBody.tsx`
- Create `src/components/resources/ResourceTableOfContents.tsx`
- Create `src/components/resources/ResourceArticleTemplate.tsx`
- Create `src/app/resources/[slug]/page.tsx`
- Create `src/app/resources/[slug]/article.css`

- [ ] Add failing tests for dynamic route generation, metadata, 404 boundaries, Article and Breadcrumb schemas, article structure and related mappings.
- [ ] Implement the server-rendered reusable template and block renderers.
- [ ] Verify the focused tests.

### Task 4: Navigation and internal-link extensions

**Files:**
- Modify `src/data/site.ts`
- Modify `src/components/navigation/Header.tsx`
- Modify `src/components/navigation/Footer.tsx`
- Modify `src/app/products/page.tsx`
- Modify `src/components/applications/ApplicationsPageContent.tsx`
- Modify `src/components/custom-hinges/CustomHingesPageContent.tsx`
- Modify `src/components/quality/QualityPageContent.tsx`
- Modify `src/components/products/detail/ProductDetailTemplate.tsx`
- Create `src/components/resources/ProductRelatedGuides.tsx`

- [ ] Add failing tests for Resources navigation order, active state, footer links and explicit related-guide mappings.
- [ ] Add only compact links and the reusable product-guide block.
- [ ] Update affected lock hashes and record this authorized Resources extension.
- [ ] Verify all existing page tests remain green.

### Task 5: Sitemap, RSS and publishing instructions

**Files:**
- Modify `src/app/sitemap.ts`
- Create `src/app/feed.xml/route.ts`
- Create `docs/resources-publishing-guide.md`

- [ ] Add failing tests proving published Resources enter sitemap and RSS while draft/noindex content does not.
- [ ] Implement sitemap and dependency-free RSS generation from the public registry.
- [ ] Document the exact future publishing workflow.
- [ ] Verify XML output and tests.

### Task 6: Final lock and QA

**Files:**
- Create `docs/resources-system-lock.json`
- Modify `docs/design-system-lock.json`
- Modify `docs/design-system.md`
- Create `docs/2026-09-02-resources-center-review.md`
- Create `output/qa/resources/verification.json`

- [ ] Run the full test suite, TypeScript check and production build.
- [ ] Restart the production preview.
- [ ] Audit `/resources` and all six article routes at 1440, 1024, 768 and 390px.
- [ ] Verify navigation, TOC anchors, responsive tables, metadata, schema, links, sitemap, RSS and draft exclusion.
- [ ] Record the frozen Resources extension and stop.
