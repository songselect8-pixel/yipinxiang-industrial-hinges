# Quality Control Page Review

Status: **APPROVED AND LOCKED** by the user on 2026-09-02. The preservation contract is `docs/quality-page-lock.json`. This phase stops here; no About or Contact page has been created.

## Scope and design-system preservation

The page reuses the locked header, navigation, typography, navy / white / gray / orange palette, buttons, section labels, spacing, cards, dark navy RFQ treatment, RFQ form and footer. All new layout styles are scoped under the Quality route. The only shared functional changes are Quality route awareness in the header, footer and navigation data, plus the approved Manufacturing page’s existing Quality link now resolving to `/quality`.

The page structure is:

1. Breadcrumb and compact Quality hero
2. Quality-control approach
3. Dimensional checks against requirements
4. Original technical drawings as specification references
5. In-process checks
6. Consistency across production
7. Source-bound product examples
8. Custom-requirement bridge
9. Practical review points
10. Packaging preparation evidence
11. Standard-product and custom-requirement comparison
12. Product-safe FAQ
13. Primary dark navy RFQ

## Catalog evidence and wording boundaries

The company-level quality statement is a conservative paraphrase of catalog page 18: testing tools are developed so checks can be conducted during production to help enhance product quality. It does not introduce a frequency, inspection percentage, numerical tolerance, pass rate or test result.

The supporting production-organization language is limited to the catalog-listed concepts on page 3: standardized turnover, mass assembly and standardized packaging. Original technical references and representative values remain tied to their source families:

- Page 5, 20 Type: representative 20-A / 20-B values include `D 20.00`, `D-1 24.80`, `L 140`, `d 10.85`, `L-1 60`, `c 20.00` and `L-2 7`, with no unit added where the catalog does not print one.
- Page 7, Bearing Type: representative catalog entry `ф16*100mm`, weight `142`, preserved exactly as printed.
- Page 12, Adjustable Type: representative catalog entry `Φ20x25x140mm`, weight `354`, preserved exactly as printed.
- Pages 16 and 17: real catalog packaging photographs and family-specific descriptions remain separate for 20 Type and 12 / 14 / 16 Type.

No ISO, IATF, CE, UL, RoHS, REACH, AQL, 100% inspection, CMM, salt-spray, hardness, tensile, load, fatigue, laboratory, tolerance, defect-rate, pass-rate or inspection-frequency claim is present.

## Image authenticity

The dimensional-inspection visual appears once as supporting imagery and carries the visible caption **Illustrative scene**. It is not described as the company’s inspector, workshop, equipment or laboratory. Original product photographs, unmodified catalog drawings and real catalog packaging photographs provide the technical evidence.

## Verification

- `npm test`: 49 passed, 0 failed.
- `npm run typecheck`: passed.
- `npm run build`: passed; `/quality` is statically generated.
- All five existing lock manifests match every tracked file after the deliberate route-only extensions.
- Playwright QA passed at 1440, 1024, 768 and 390px: HTTP 200, one H1, all required headings present, no horizontal overflow, all eight images loaded and contained, one disclosed illustration, exact representative source values present, no empty internal links, and no console or page errors.
- At 390px, the Quality navigation state is correct, FAQ interaction works, and RFQ validation shows without navigation or transmission.
- Technical drawings and product images use contained rendering so their original annotations and hinge details remain visible at every checked width.

The original approval evidence remains in `output/playwright/quality/`. The final factual-review lock evidence is stored in `output/qa/quality-page-lock/`, including four full-page screenshots, the browser audit and `verification.json`.

The final factual review tightened two wording boundaries without changing the layout or visual hierarchy. “Visible Surface Condition” now reads “Use practical visual review to note visible differences for requirement discussion,” avoiding any suggestion of an undocumented formal acceptance standard. Public references to the page 18 source now say that the catalog describes tools developed to support checks during production; the page does not advertise a testing method, testing capability or laboratory.

The RFQ remains a local preview and does not send, upload or store inquiry data. The Quality page is approved and locked.
