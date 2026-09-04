# Quality Control Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build only `/quality` as a source-backed industrial quality-control page within the locked website design system.

**Architecture:** Add a route-specific server page, a separate quality data layer, focused presentation components and route-scoped CSS. Extend Header, Footer and navigation data only for Quality route awareness while preserving every locked visual class and earlier route output.

**Tech Stack:** Next.js 16.3.3 App Router, React 19, TypeScript, existing global CSS design tokens, Node test runner, Playwright CLI.

---

This workspace is not a Git repository, so commit steps are omitted. Project instructions prohibit subagent delegation unless the user requests it; execute this plan inline.

### Task 1: Add Quality page contract tests

**Files:**
- Create: `tests/quality.test.ts`
- Modify: `tests/manufacturing.test.ts`
- Modify: `tests/custom-hinges.test.ts`

- [ ] Write route, metadata and one-H1 assertions for `/quality`.
- [ ] Assert page-18 in-process checking data, page-3 organization data, pages 5/7/12 representative product bindings and pages 16/17 family-specific packaging.
- [ ] Assert exact catalog strings such as `ф16*100mm`, `D: 20.00` and `Φ20x25x140mm` are derived without normalization.
- [ ] Require exactly one approved Quality illustration reference with a visible illustration disclosure, original product/drawing/packaging paths, and no company-evidence wording around generated imagery.
- [ ] Reject certifications, invented tests, numerical QC claims, tolerances, inspection percentages/frequencies, SPC and laboratory claims.
- [ ] Update earlier phase-scope tests so only About and Contact remain unbuilt.
- [ ] Run `node --experimental-strip-types --test tests/quality.test.ts tests/manufacturing.test.ts tests/custom-hinges.test.ts` and verify RED because `/quality` does not exist.

### Task 2: Add the source-backed quality data layer

**Files:**
- Create: `src/data/quality.ts`

- [ ] Define the five-part quality approach, dimensional-reference points, in-process points, consistency concepts and practical review points with explicit source pages.
- [ ] Bind Bearing, 20 Type and Adjustable examples through existing audited catalog/product records and expose only exact representative records.
- [ ] Reuse the existing pages 16/17 packaging records without widening their family scope.
- [ ] Define the Standard Product/Custom Requirement comparison and safe FAQ answers.
- [ ] Re-run the focused test and confirm failures are limited to route/components/navigation.

### Task 3: Extend route-aware navigation

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/components/navigation/Header.tsx`
- Modify: `src/components/navigation/Footer.tsx`

- [ ] Point Quality navigation and footer links to `/quality`.
- [ ] Add `quality` to Header/Footer current-page types, active-state logic and the Quality back-to-top target.
- [ ] Preserve all existing visual classes, defaults, navigation order and About/Contact homepage anchors.

### Task 4: Implement route, metadata and page components

**Files:**
- Create: `src/app/quality/page.tsx`
- Create: `src/app/quality/quality.css`
- Create: `src/components/quality/QualityPageContent.tsx`
- Create: `src/components/quality/QualityTechnicalEvidence.tsx`
- Create: `src/components/quality/QualityProductExamples.tsx`
- Create: `src/components/quality/QualityPreparation.tsx`
- Create: `src/components/quality/QualityRFQSection.tsx`

- [ ] Add unique metadata, canonical `/quality`, Open Graph data and BreadcrumbList structured data.
- [ ] Build the compact hero with one H1 and the single approved dimensional-inspection illustration.
- [ ] Build the approach, dimensional, technical-drawing, in-process and consistency sections using conservative source-backed copy.
- [ ] Render original 20 Type and Bearing drawings without editing their values.
- [ ] Render the three representative product examples with real source-bound media, exact representative published values and links to full details.
- [ ] Add the custom-requirement bridge, practical review ledger, family-specific packaging evidence, comparison and native FAQ.
- [ ] Reuse the dark navy RFQ composition with drawing upload, `Send Your Requirement` and a secondary `/custom-hinges` link.
- [ ] Scope every new selector under `.quality-page`, reuse locked tokens and ensure tables/images remain contained at 390px.

### Task 5: Verify GREEN and preserve locks

**Files:**
- Modify: `docs/design-system.md`
- Modify: `docs/design-system-lock.json`
- Modify: any existing lock JSON whose shared Header/Footer/site hash is intentionally changed

- [ ] Run the focused tests and verify GREEN.
- [ ] Run `npm test`, `npm run typecheck` and `npm run build`; require zero failures and `/quality` in the static route list.
- [ ] Refresh only deliberate shared-file hashes in existing lock manifests and verify every other locked file against its recorded hash.
- [ ] Record the Quality extension as awaiting user approval; do not add it to locked scopes yet.

### Task 6: Browser QA and review record

**Files:**
- Create: `output/qa/quality/browser-audit.js`
- Create: `output/qa/quality/verification.json`
- Create: `docs/2026-09-02-quality-page-review.md`

- [ ] Start the production preview on port 3100 after the successful build.
- [ ] Audit 1440, 1024, 768 and 390px for HTTP 200, one H1, active navigation, image loading, illustration disclosure, original drawings/packaging, no page overflow, contained technical content, FAQ behavior, form spacing, console errors and page errors.
- [ ] Capture full-page and key-section screenshots at each required width.
- [ ] Fix only Quality-page defects and rerun every affected automated/browser check.
- [ ] Record source boundaries and QA evidence, leave the preview running, and stop without creating About or Contact.
