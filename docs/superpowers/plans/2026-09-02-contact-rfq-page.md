# Contact / RFQ Page Implementation Plan

> **For agentic workers:** Execute inline in the current task. Subagent delegation is intentionally disabled by the project instructions.

**Goal:** Build the complete `/contact` technical inquiry page while preserving every locked page and exposing a truthful, configurable submission boundary.

**Architecture:** Keep the route as a Server Component for metadata and configurable contact values. Isolate interactive form state in a dedicated Client Component, keep validation and file rules in a pure data module, and derive product choices from the existing catalog family array.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, route-scoped CSS, Node test runner, Playwright browser QA.

---

### Task 1: Establish the source and validation contract

**Files:**
- Create: `tests/contact.test.ts`
- Create: `src/data/contact.ts`
- Create: `src/data/contact-rfq.ts`

- [x] Add failing tests for catalog-confirmed contact values, family-derived product options, required contact fields, email validation, useful-requirement validation and drawing/image file rules.
- [x] Run `node --experimental-strip-types --test tests/contact.test.ts` and confirm failure because the Contact modules and route do not exist.
- [x] Implement the two data modules without UI or network behavior.
- [x] Re-run the focused test and confirm the data/validation tests pass while route tests remain red.

### Task 2: Implement the dedicated RFQ form

**Files:**
- Create: `src/components/contact/ContactRFQForm.tsx`

- [x] Render grouped contact, product, custom-path, technical and file fields with native labels, fieldsets and accessible errors.
- [x] Use the existing catalog-derived options; do not duplicate family names.
- [x] Preserve values on validation and delivery failure.
- [x] Return an explicit not-configured status when `submissionEndpoint` is null.
- [x] POST `FormData` only when `submissionEndpoint` is configured, and report success only for a successful HTTP response.

### Task 3: Compose the Contact page

**Files:**
- Create: `src/components/contact/ContactPageContent.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/contact/contact.css`

- [x] Build the approved ten-section hierarchy with no map, address or decorative hero image.
- [x] Add the exact clickable company contact details and the conservative inquiry note.
- [x] Add selection support, buyer checklist, standard/custom paths, application entry points, FAQ and compact final CTA.
- [x] Add unique metadata, canonical `/contact`, one H1 and breadcrumb structured data.
- [x] Keep every new selector under `.contact-page` and reuse existing global tokens and button/form classes.

### Task 4: Extend shared navigation functionally

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/components/navigation/Header.tsx`
- Modify: `src/components/navigation/Footer.tsx`
- Modify: `tests/about-us.test.ts`
- Modify: `tests/custom-hinges.test.ts`
- Modify: `tests/manufacturing.test.ts`
- Modify: `tests/quality.test.ts`
- Modify: `docs/design-system-lock.json`
- Modify: `docs/design-system.md`

- [x] Point the Contact navigation entry to `/contact`.
- [x] Add `contact` as a current-page value and preserve all existing default link behavior.
- [x] Use `#contact-top` for the Contact back-to-top link and `#contact-rfq` for its local quote target.
- [x] Remove only obsolete phase assertions that Contact must remain absent.
- [x] Recompute the three shared navigation hashes in the design-system lock and record the compatibility extension.

### Task 5: Verify and review

**Files:**
- Create: `docs/2026-09-02-contact-page-review.md`
- Create: `output/qa/contact/browser-audit.js`
- Create: `output/qa/contact/verification.json`

- [x] Run the focused Contact tests, full test suite, TypeScript check and production build.
- [x] Start the production preview and inspect 1440, 1024, 768 and 390px.
- [x] Verify the RFQ validation summary, invalid email, useful-requirement rule, file type/size rejection, not-configured delivery notice, data preservation, clickable contact links, mobile menu state and absence of overflow.
- [x] Confirm no address, map, WhatsApp, shipping-time, lead-time, MOQ or fake success copy is rendered.
- [x] Record the review outcome and stop without locking or redesigning another page.

No commit steps are included because this workspace is not a Git repository.

