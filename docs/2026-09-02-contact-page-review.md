# Contact / RFQ Page Review

Status: **APPROVED AND LOCKED**  
Route: `/contact`  
Reviewed: 2026-09-02

## Implemented scope

The page uses the locked header, footer, typography, colors, buttons, labels, technical dividers, form controls and dark navy conversion language. It adds a compact technical hero, catalog-confirmed direct contact block, grouped RFQ form, selection support, buyer checklist, standard/custom paths, application entry points, conservative response wording, inquiry FAQ and compact final CTA.

No previously approved page composition or route-specific stylesheet was redesigned.

## Source and factual review

- Contact: Eric Huang.
- Company: Pinghu Yipinxiang Machinery Technology Co., Ltd.
- Email: `hjhuman0205@gmail.com`.
- Phone: `+86 18767359360`.
- Source: supplied catalog page 19.
- No physical address, map, additional channel, business hours, office, branch or response-time promise was added.
- Product selector options are derived from `families` in `src/data/catalog.ts`; only the two inquiry choices are appended.

## RFQ behavior

- Required identity: Name, Company, Business Email and Country / Region.
- At least one useful product or requirement detail is required.
- Email format and advertised file extensions/sizes are validated.
- Field errors are connected to controls and summarized in an alert that receives focus after submission.
- Values and selected valid files remain available after validation or delivery failure.
- With no `NEXT_PUBLIC_RFQ_ENDPOINT`, the page states **Request checked, not sent.** and makes no POST request.
- Endpoint setup is documented in `docs/contact-rfq-configuration.md`.

## Responsive and runtime QA

The production preview at `http://127.0.0.1:3100/contact` was checked at 1440, 1024, 768 and 390 CSS pixels.

- One H1 at every width.
- No visible or document-level horizontal overflow.
- Five fieldsets and 18 labeled controls.
- Native drawing and reference-image controls remain keyboard accessible.
- Contact links resolve to the confirmed `mailto:` and `tel:` values.
- Mobile navigation marks Contact as the current page and keeps its quote action anchored to the local RFQ.
- Empty form, invalid email and unconfigured-delivery states were exercised; values remained present.
- No POST request, console error or page error occurred in the unconfigured preview.
- No iframe or map is rendered.

Artifacts are under `output/qa/contact/`, including the browser audit, verification record and four-width review images. The approved file hashes and preservation rules are recorded in `docs/contact-page-lock.json`. Production delivery remains a blocking item in `docs/pre-launch-checklist.md`.
