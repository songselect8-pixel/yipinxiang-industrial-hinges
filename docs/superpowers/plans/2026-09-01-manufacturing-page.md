# Manufacturing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build only `/manufacturing` as a source-backed industrial manufacturing capability page within the locked website design system.

**Architecture:** Add a route-specific server page, a separate manufacturing data layer, focused presentation components and route-scoped CSS. Extend the existing Header, Footer and navigation data only for Manufacturing route awareness, preserving all visual classes and earlier defaults.

**Tech Stack:** Next.js 16.3.3 App Router, React 19, TypeScript, existing global CSS design tokens, Node test runner, Playwright CLI.

---

This workspace is not a Git repository, so commit steps are omitted. The project instruction also prohibits subagent delegation unless the user requests it; execute this plan inline with `executing-plans`.

### Task 1: Add the Manufacturing contract tests

**Files:**
- Create: `tests/manufacturing.test.ts`

- [ ] **Step 1: Write a failing source and route contract test**

The test imports the planned `manufacturingCapabilities`, `manufacturingOrganization`, `manufacturingSummary`, `manufacturingFaqs` and packaging records. It asserts page 3 for factory capabilities, page 18 for factory/checking/logistics/custom support, pages 16 and 17 for the two packaging records, one H1, canonical `/manufacturing`, BreadcrumbList data and the required section headings.

- [ ] **Step 2: Add authenticity and prohibited-claim assertions**

Read the planned page, component and data files as text. Require `/images/factory-exterior.jpg` with `data-asset-kind="company-photo"`, require the manufacturing, engineering and quality `SupportingVisual` assets, and reject company-evidence labels on illustrations plus factory-size, employee-count, machine-count, capacity, CNC-brand, lead-time, tolerance, ISO, ERP/MES, AQL and shipping-time claims.

- [ ] **Step 3: Add navigation and phase-scope assertions**

Require `currentPage="manufacturing"`, `/manufacturing` in shared navigation, existing Header/Footer defaults and the absence of `src/app/quality/page.tsx`, `src/app/about/page.tsx` and `src/app/contact/page.tsx`.

- [ ] **Step 4: Run the test and verify RED**

Run: `node --experimental-strip-types --test tests/manufacturing.test.ts`

Expected: FAIL because the Manufacturing route, data and components do not exist.

### Task 2: Add the source-backed data layer

**Files:**
- Create: `src/data/manufacturing.ts`

- [ ] **Step 1: Define capability records**

Create exact records for Sufficient materials, Self-owned equipment, Standing stock, Lathe processing, Automatic punching, Standardized turnover, Mass assembly and Standardized packaging with `sourcePages: [3]`.

- [ ] **Step 2: Define evidence and packaging records**

Add company evidence and custom-support facts from page 18, checking facts from page 18, the 20 Type packaging record from page 16, and the 12 / 14 / 16 Type record from page 17. Keep packaging scope explicit in every visible description.

- [ ] **Step 3: Define logistics, summary and FAQ records**

Use only Shanghai Port, Ningbo Port, highway transportation and professional shipment handling from page 18. Keep FAQ answers free of capacity, MOQ, lead-time, tolerance and certification claims.

- [ ] **Step 4: Run the focused test**

Run: `node --experimental-strip-types --test tests/manufacturing.test.ts`

Expected: tests still fail only because route/components are not yet implemented.

### Task 3: Extend route-aware shared navigation

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/components/navigation/Header.tsx`
- Modify: `src/components/navigation/Footer.tsx`
- Modify: `docs/design-system.md`
- Modify: `docs/design-system-lock.json`
- Modify: `docs/product-detail-template-lock.json`

- [ ] **Step 1: Point Manufacturing navigation to `/manufacturing`**

Change the Manufacturing navigation item from the homepage anchor to the route. Preserve all other labels and ordering.

- [ ] **Step 2: Add `manufacturing` to Header/Footer current-page types and active-state logic**

Use the existing `nav-home` and `aria-current="page"` behavior. Add `#manufacturing-top` to the footer’s Back to top branch. Do not change visual markup or classes.

- [ ] **Step 3: Record backward compatibility**

Document the functional route extension and refresh the affected shared-file hashes in the existing lock manifests after final verification.

### Task 4: Implement the route and metadata

**Files:**
- Create: `src/app/manufacturing/page.tsx`
- Create: `src/app/manufacturing/manufacturing.css`

- [ ] **Step 1: Add static metadata**

Use a unique industrial-hinge-manufacturing title and a conservative source-backed description. Set canonical and Open Graph URL to `/manufacturing`; use the real factory exterior as the Open Graph image.

- [ ] **Step 2: Add the server page**

Wrap the page in `InquiryProvider`, render the existing Header and Footer with `currentPage="manufacturing"`, keep one `main#main-content`, render the page content and Manufacturing RFQ, and add BreadcrumbList structured data.

- [ ] **Step 3: Keep CSS route-scoped**

Prefix new selectors with `.manufacturing-page`, reuse existing variables and breakpoints, and avoid changing global spacing or component styles.

### Task 5: Implement capability and evidence components

**Files:**
- Create: `src/components/manufacturing/ManufacturingPageContent.tsx`
- Create: `src/components/manufacturing/ManufacturingCapabilities.tsx`
- Create: `src/components/manufacturing/ManufacturingEvidence.tsx`

- [ ] **Step 1: Build the compact hero**

Use the actual factory exterior in a `figure[data-asset-kind="company-photo"]`, a visible “Actual company photo · catalog p3” caption, one H1, and links to `#capabilities` and `#rfq`.

- [ ] **Step 2: Build the capability ledger and focused processing sections**

Render capability records as technical rows rather than chronology. Use the manufacturing illustration only in Lathe Processing and keep “Illustrative scene” visible. Make Automatic Punching text-led.

- [ ] **Step 3: Build organization and custom-support sections**

Render Standing Stock, Standardized Turnover and Mass Assembly as three horizontal blocks. Link the compact engineering section to `/custom-hinges` and retain the illustration label.

- [ ] **Step 4: Build checking, factory and packaging evidence**

Use the quality illustration with a neutral caption and link to `/#quality`. Present the actual factory image separately from illustration content. Use only the two real catalog packaging composites and their family-specific descriptions.

- [ ] **Step 5: Build logistics, summary and FAQ**

Render logistics as a compact support band. Put the summary in a focusable table wrapper. Use native `details/summary` for keyboard-accessible FAQ disclosure.

### Task 6: Implement the Manufacturing RFQ

**Files:**
- Create: `src/components/manufacturing/ManufacturingRFQSection.tsx`

- [ ] **Step 1: Reuse the RFQ form and dark navy layout**

Use the existing `rfq-section`, `rfq-layout`, `rfq-copy` and `RFQForm` classes. Enable drawing upload, use the context label “Manufacturing page”, and keep the current preview disclosure.

- [ ] **Step 2: Add manufacturing-specific inquiry copy**

Ask for hinge type, dimensions, estimated quantity, application and an available drawing. Do not promise response or production timing.

- [ ] **Step 3: Run the focused test and verify GREEN**

Run: `node --experimental-strip-types --test tests/manufacturing.test.ts`

Expected: all Manufacturing tests pass.

### Task 7: Verify and visually refine

**Files:**
- Create: `output/qa/manufacturing/browser-audit.js`
- Create: `output/qa/manufacturing/verification.json`
- Create: `docs/2026-09-01-manufacturing-page-review.md`

- [ ] **Step 1: Run automated verification**

Run `npm test`, `npm run typecheck` and `npm run build`. Require zero failures and `/manufacturing` in the static route list.

- [ ] **Step 2: Revalidate every existing lock manifest**

Hash every entry in `docs/design-system-lock.json`, `docs/product-detail-template-lock.json`, `docs/applications-page-lock.json` and `docs/custom-hinges-page-lock.json`. Update only hashes for deliberately extended shared files and confirm every other locked file remains unchanged.

- [ ] **Step 3: Run Playwright at four widths**

Audit 1440, 1024, 768 and 390px for HTTP 200, one H1, active navigation, image loading, real/illustrative captions, no horizontal overflow, table containment, mobile menu, form validation, console errors and page errors. Capture full-page and key-section screenshots.

- [ ] **Step 4: Fix only Manufacturing-page defects and rerun verification**

Do not restyle locked shared components. Repeat the failing browser or command check after each correction.

- [ ] **Step 5: Record approval evidence and stop**

Write the review document and verification JSON, leave the production preview running, and do not create Quality, About or Contact routes.
