# Manufacturing page review record

Status: **approved and locked on 2026-09-02**  
Route: `/manufacturing`  
Scope: Manufacturing page only. Dedicated Quality, About and Contact pages remain unbuilt.

The final cleanup renamed the capability overview to **Manufacturing Capabilities from Processing to Assembly**. Its supporting sentence explicitly defines the blocks as capability areas rather than a chronological process. The manufacturing, engineering and inspection illustration captions remain neutral and visibly marked **Illustrative scene**. The final lock is `docs/manufacturing-page-lock.json`.

## Source boundary

The only source for company-specific manufacturing claims is `铰链/Products show 2026(1).pdf`, SHA-256 `35f4881a70cf94c4a4e98e58755a668f5bcaad5b020c10140e05879813aedc33`.

| Public subject | Catalog page | Boundary retained |
| --- | ---: | --- |
| Sufficient materials, self-owned equipment, standing stock, lathe processing, automatic punching, standardized turnover, mass assembly and standardized packaging | 3 | Presented as catalog-listed capabilities, without capacity, machine model, equipment count or process-rate claims |
| 20 Type packaging | 16 | Series-specific inner cartons, plastic film, corrugated outer packing, sealing tape and packing tape |
| 12 / 14 / 16 Type packaging | 17 | Series-specific folded inner boxes, plastic film, composite wooden case and published packing-belt arrangement |
| Self-owned factory, requirement-based development and production, in-process testing tools and shipment handling | 18 | No factory size, tolerance, inspection percentage, timeline, country or certification claim added |

## Image authenticity

- `/images/factory-exterior.jpg` is used twice as actual company evidence: the hero and the dedicated factory section.
- `/images/packaging-20-type.jpg` and `/images/packaging-12-14-16-type.jpg` remain the only packaging evidence.
- The manufacturing, engineering and quality-control scenes are rendered through `SupportingVisual` and visibly captioned **Illustrative scene**.
- No process illustration is labeled as the company workshop, equipment, production line, technician or quality engineer.

## Responsive and behavioral verification

Production-mode browser QA was completed at 1440, 1024, 768 and 390px. All four routes returned HTTP 200 with one H1, all seven images loaded, no page-level horizontal overflow, no console or page errors, and the Manufacturing navigation state active. At 390px, the capability summary is contained in a 350px focusable horizontal-scroll region for its unchanged 610px table; the mobile navigation identifies Manufacturing as the current page. Empty-form submission exposes the existing accessible error summary without navigation.

The original full-page screenshots remain in `output/qa/manufacturing/`. The final heading audit at 1440, 1024, 768 and 390px is stored in `output/qa/manufacturing-page-lock/verification.json` with its screenshots and browser script. The local RFQ remains a preview: it does not send, upload or store inquiry data.
