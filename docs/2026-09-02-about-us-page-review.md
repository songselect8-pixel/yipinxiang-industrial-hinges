# About Us Page Review

Status: **APPROVED AND LOCKED** by the user on 2026-09-02. The preservation contract is `docs/about-us-page-lock.json`. This phase stops at `/about-us`; no Contact page has been created.

## Scope and design-system preservation

The page extends the approved homepage design system without changing its visual identity. It reuses the locked header, navigation, typography, navy / white / gray / orange palette, buttons, labels, spacing, product cards, compact technical language, dark navy RFQ treatment and footer. New layout rules are scoped to the About route.

The page structure is:

1. Breadcrumb and compact company hero
2. Company profile
3. Focused industrial hinge range
4. Manufacturing capability and company evidence
5. Standard products and custom requirements
6. Supported industrial applications
7. Conservative quality-control summary
8. Practical B2B buyer reasons
9. Port and highway access
10. Requirement-led working approach
11. Compact internal navigation
12. Primary dark navy RFQ CTA

## Catalog evidence and factual boundaries

The approved company name is presented as **Pinghu Yipinxiang Machinery Technology Co., Ltd.** The page limits company claims to catalog evidence:

- Page 3: sufficient materials, self-owned equipment, standing stock, lathe processing, automatic punching, standardized turnover, mass assembly and standardized packaging.
- Pages 4 and 6: supported application groups for industrial steel doors, cabinets, enclosures, gates, trailer doors and ramps.
- Pages 5–15: audited product families, original product photography, listed dimensions and technical references.
- Page 18: self-owned factory, design / production / sales support, requirement-based development and production, production-stage checking, highway access, proximity to Shanghai Port and Ningbo Port, and shipment handling.

The page does not publish or imply a founding year, employee count, factory area, revenue, export volume, export-country coverage, customer count, production capacity, patents, certifications, awards, global offices, MOQ, lead time, load rating, tolerance, inspection percentage or test result.

## Image authenticity

The real factory exterior appears as the primary company evidence and is visibly labeled as an actual company photograph from catalog page 3. Six product cards use the audited catalog/source product imagery.

Three supplied supporting industrial visuals are used for manufacturing context and application context. Each carries the visible disclosure **Illustrative scene** and neutral wording. None is described as the company’s workshop, equipment, employee, technician, customer installation or inspection laboratory.

## SEO and navigation

The route has one H1, unique title and description, canonical support, Open Graph metadata, breadcrumb structured data and minimal Organization structured data. About Us is active in desktop and mobile navigation. All internal links resolve to existing approved routes or the homepage RFQ anchor. Contact remains a navigation-to-RFQ item; `/contact` was not created.

## Verification

- `npm test`: 56 passed, 0 failed.
- `npm run typecheck`: passed.
- `npm run build`: passed; `/about-us` is statically generated and `/contact` is absent.
- Lock audit: all 6 existing lock manifests and 85 tracked entries match their recorded SHA-256 values.
- Playwright QA passed at 1440, 1024, 768 and 390px: HTTP 200, one H1, every required section present, no horizontal overflow, no escaped images, all 11 images loaded, no broken internal links, correct About Us navigation state, and no page or site console errors.
- The browser audit found 2 actual-company-photo uses, 3 supporting illustrations with 3 visible disclosures, 6 product cards and 2 application cards.
- Existing approval-stage evidence remains in `output/playwright/about-us/`. Per the user’s instruction, the lock step did not add another screenshot or validation run.

The final factual review required no public layout or copy change. The manufacturing illustration already uses the neutral caption **Manufacturing process** and the visible **Illustrative scene** disclosure. No generated image is labeled as the company’s workshop, production line or equipment. Logistics language remains limited to the catalog-supported Shanghai Port and Ningbo Port proximity, highway transportation and shipment-handling statements; no shipping-time, delivery-speed or export-volume claim is present.

The About Us page is approved and locked.

Local review URL: `http://127.0.0.1:3100/about-us`
