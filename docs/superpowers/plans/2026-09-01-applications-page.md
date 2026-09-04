# Applications Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. This workspace is not a Git repository, so verification checkpoints replace commit steps.

**Goal:** Build the source-backed `/applications` page and stop before any other inner page.

**Architecture:** Keep the route as a metadata-capable Server Component, put application/source mappings in a dedicated immutable data module, and isolate inquiry-prefill behavior in one Client Component. Extend locked shared components only through backward-compatible props and route-state handling that leave existing page visuals unchanged.

**Tech Stack:** Next.js 16.3.3 App Router, React 19, TypeScript 5.9, existing global CSS design system, Node test runner, Playwright CLI.

---

### Task 1: Applications contract test

**Files:**
- Create: `tests/applications.test.ts`

- [ ] **Step 1: Write the failing source and page contract test**

Create tests that import `applicationGroups` and assert exact source mappings: page 4 maps only to `bearing`, `pin`, `gasket`, `grease-nipple`, and `20-type`; page 6 maps only to `12-14-16-type`. Read the route source and assert the compact H1, metadata/canonical, breadcrumb JSON-LD, four overview blocks, six selection inputs, drawing-enabled RFQ, descriptive application assets, and no prohibited terms.

- [ ] **Step 2: Run the isolated test and verify RED**

Run: `node --experimental-strip-types --test tests/applications.test.ts`

Expected: FAIL because `src/data/applications.ts` and `src/app/applications/page.tsx` do not exist.

### Task 2: Source-backed application data

**Files:**
- Create: `src/data/applications.ts`
- Test: `tests/applications.test.ts`

- [ ] **Step 1: Implement the minimal typed data model**

Define immutable overview entries and three detail groups. Every mapped group must include `sourcePage`, `productIds`, exact supported terms, buyer considerations, and an inquiry product id. Use `/images/illustrations/application-control-cabinet.png`, `/images/illustrations/application-trailer-gate.png`, `/images/hinge-bearing.jpg`, and `/images/hinge-gasket.jpg`; label illustrations and product references explicitly.

- [ ] **Step 2: Run the isolated test**

Run: `node --experimental-strip-types --test tests/applications.test.ts`

Expected: The data assertions pass while route assertions remain red.

### Task 3: Route-aware shared navigation and RFQ labels

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/components/navigation/Header.tsx`
- Modify: `src/components/navigation/Footer.tsx`
- Modify: `src/components/inquiry/RFQForm.tsx`
- Test: `tests/applications.test.ts`

- [ ] **Step 1: Add backward-compatible route state**

Allow `currentPage="applications"`, treat root-relative navigation paths as complete paths, point the Applications nav item to `/applications`, and add section-specific footer links. Preserve existing class names, DOM hierarchy, default labels, and all default homepage/product behavior.

- [ ] **Step 2: Add optional RFQ copy props**

Extend `RFQFormOptions` with optional `contextLabel`, `productLabel`, and `submitLabel`. Default each prop to the exact existing text so locked pages render unchanged. The Applications page will pass `Applications page`, `Preferred hinge type`, and `Request a Recommendation`.

- [ ] **Step 3: Run the full unit suite**

Run: `npm test`

Expected: Existing tests remain green; Applications route assertions still fail until Task 4.

### Task 4: Applications route and page composition

**Files:**
- Create: `src/app/applications/page.tsx`
- Create: `src/components/applications/ApplicationsPageContent.tsx`
- Create: `src/app/applications/applications.css`
- Test: `tests/applications.test.ts`

- [ ] **Step 1: Add the Server Component route**

Export unique metadata with canonical `/applications`, Open Graph data using the approved cabinet visual, and breadcrumb JSON-LD. Render `InquiryProvider`, `Header currentPage="applications"`, `<main id="main-content">`, the client content component, `RFQSection` with drawing and application labels, and `Footer currentPage="applications"`.

- [ ] **Step 2: Compose the client content**

Render the compact hero, four overview cards, three source-backed detail sections, six-step selection guide, application-to-product navigation, and the intermediate dark navy selection CTA. Use `beginInquiry` only for selection-help actions and use direct product routes for source-supported recommendations.

- [ ] **Step 3: Add page-specific responsive CSS**

Reuse existing variables, `.shell`, `.section`, `.button`, `.text-link`, `.eyebrow`, RFQ, header, and footer rules. Add only Applications composition rules. Avoid global selectors, shadows, gradients, rounded cards, and new type scales. Add 1199px, 899px, 767px, and 599px adjustments with single-column behavior at 390px.

- [ ] **Step 4: Verify GREEN**

Run: `node --experimental-strip-types --test tests/applications.test.ts`

Expected: PASS.

### Task 5: Compile and regression verification

**Files:**
- Modify only files needed to resolve observed failures.

- [ ] **Step 1: Run the full unit suite**

Run: `npm test`

Expected: all tests pass with zero failures.

- [ ] **Step 2: Run TypeScript**

Run: `npm run typecheck`

Expected: exit code 0 and no diagnostics.

- [ ] **Step 3: Run the production build**

Run: `npm run build`

Expected: exit code 0 and `/applications` listed as a static route.

### Task 6: Four-width browser QA

**Files:**
- Create: `output/qa/applications-page/browser-audit.js`
- Create: `output/qa/applications-page/verification.json`
- Create: `output/qa/applications-page/*-applications-page.png`
- Modify page/CSS files only for observed defects.

- [ ] **Step 1: Confirm Playwright prerequisites**

Run: `Get-Command npx` and the installed Playwright wrapper help command.

Expected: `npx` and the wrapper are available.

- [ ] **Step 2: Run the production server and browser audit**

At 1440, 1024, 768, and 390px, verify HTTP 200, one H1, title/description/canonical/breadcrumb, no console errors, no request failures, no page-level horizontal overflow, visible application links, usable mobile navigation, and expected RFQ labels. Capture full-page screenshots and targeted card/RFQ screenshots.

- [ ] **Step 3: Inspect screenshots and fix only observed issues**

Check application card crops, custom CTA stacking, detail-section order, product-link wrapping, RFQ field spacing, footer readability, and mobile overflow. Repeat the affected browser checks after every fix.

### Task 7: Lock record and review note

**Files:**
- Modify: `docs/design-system.md`
- Modify: `docs/design-system-lock.json`
- Modify: `docs/product-detail-template-lock.json`
- Create: `docs/2026-09-01-applications-page-review.md`

- [ ] **Step 1: Record the functional extensions**

Document that route awareness and optional RFQ labels are backward-compatible extensions, not visual changes. Recompute hashes only for baseline files intentionally changed and preserve every untouched baseline entry.

- [ ] **Step 2: Re-run all verification**

Run: `npm test`, `npm run typecheck`, `npm run build`, the four-width browser audit, and a lock-hash checker.

Expected: zero test/build/browser failures; current baseline hashes match all lock entries.

- [ ] **Step 3: Stop**

Do not create Custom Hinges, Manufacturing, Quality, About, or Contact routes.
