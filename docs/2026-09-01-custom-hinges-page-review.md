# Custom Hinges page — approval review

Status: approved and locked by the user on 2026-09-01. The preservation contract is `docs/custom-hinges-page-lock.json`. No Manufacturing, Quality, About or Contact route was created in this phase.

## Page purpose and composition

The page turns drawings, dimensions and application information into a structured custom-requirement RFQ. It reuses the locked header, footer, IBM Plex Sans typography, navy / white / gray / orange palette, buttons, section labels, ProductCard system and dark navy RFQ composition.

The published order is:

1. Breadcrumb and compact custom-manufacturing hero
2. When Standard Sizes Are Not Enough
3. Start With What You Have
4. Key Dimensions to Share
5. From Requirement to Production
6. Standard Product or Custom?
7. Product Families With Customization Support
8. Manufacturing Behind the Requirement
9. Dimensional Checks During Production
10. Help Us Understand Your Requirement
11. Custom Hinge FAQ
12. Send Us Your Hinge Requirement RFQ

The implementation is in `src/app/custom-hinges/page.tsx`, `src/app/custom-hinges/custom-hinges.css`, `src/components/custom-hinges/CustomHingesPageContent.tsx`, `src/components/custom-hinges/CustomRFQSection.tsx` and `src/data/custom-hinges.ts`.

## Catalog boundaries

- General custom product development and production: catalog page 18.
- Explicit product-family customization support: Round p8, Pin p9, Gasket p10, Grease Nipple p11, Adjustable p12, Square p13 and Flag p14–15.
- The Bearing, 20 Type and 12 / 14 / 16 Type families are not given a product-specific customization badge because their technical pages do not contain that explicit statement.
- Manufacturing capability: self-owned equipment, lathe processing, automatic punching and mass assembly from p3; standardized packaging from p3 / p16 / p17.
- Product checking tools used during production: p18. No tolerance, inspection percentage, test result, testing standard or laboratory claim is published.
- The original p5 drawing is displayed unchanged as an information example. It is explicitly labeled as a communication reference rather than a custom specification.
- The public page omits custom materials, coatings, load capacity, certification, tooling, CAD software, MOQ, lead time, sample or prototype capability and timing, capacity and tooling-fee claims.
- The workflow uses “Requirement / Specification Confirmation” and does not publish a review or production schedule.

## Image provenance

- Real catalog product photography remains bound through the existing ProductCard data.
- The real factory exterior is labeled `Actual company photo · catalog p3`.
- Engineering, manufacturing-process and dimensional-inspection images retain the shared `Illustrative scene` caption and are not described as employees, company equipment, a laboratory or a production line.
- No new AI image or placeholder was added.

## RFQ behavior

The form includes Name, Company, Business Email, Country / Region, Reference Product / Hinge Type, Required Size, Estimated Quantity, Application, Technical Requirements, Drawing or Reference Image and Message. The accepted preview formats are PDF, DXF, DWG, STEP, STP, IGES, IGS, JPG, JPEG and PNG up to 10 MB, matching `src/data/drawing-file.ts`.

The form remains an honest local preview: it validates entries and selected files but does not transmit or store the RFQ. Connecting a real inquiry destination remains a separate phase.

## Verification evidence

- `npm test`: 38 passed, 0 failed, including the approved-page hash lock and catalog-source hash check.
- `npm run typecheck`: completed with no TypeScript errors.
- `npm run build`: Next.js 16.3.3 production build completed; `/custom-hinges` was statically generated.
- Playwright production review: HTTP 200 at 1440, 1024, 768 and 390px; one H1; seven catalog-backed customization badges; the approved six workflow stages; no forbidden sample, prototype or timing language.
- Responsive checks: no page-level horizontal overflow or duplicate IDs at any audited width. The comparison table stays within its focusable horizontal-scroll wrapper at 768 and 390px.
- Images: all twelve page images completed with nonzero natural dimensions after a user-like scroll at all four widths; all use `object-fit: contain`, preserving the drawing and hinge details.
- Browser behavior: mobile menu opens with Custom Hinges marked as the current page; required-field validation is visible; no console or page errors were recorded.
- A cold 768px image-transform issue was traced to the optimizer selecting an 828px WebP candidate for the quality illustration. The component now declares its actual 620px responsive slot, and the audited browser selects the working 640px candidate.

The original approval screenshots remain under `output/playwright/custom-hinges/`; the final lock evidence is under `output/qa/custom-hinges-page-lock/`. The production preview remains available at `http://127.0.0.1:3100/custom-hinges`.
