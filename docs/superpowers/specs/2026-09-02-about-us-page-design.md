# About Us page design contract

## Scope

Build only `/about-us`. Keep `/contact` absent. Reuse the locked site design and do not modify the composition or visual styling of approved pages.

## Evidence boundary

- Catalog p1: company-name source; the user supplied the approved public spelling `Pinghu Yipinxiang Machinery Technology Co., Ltd.`
- Catalog p3: sufficient materials, self-owned equipment, standing stock, lathe processing, automatic punching, standardized turnover, mass assembly and standardized packaging; real factory exterior photograph.
- Catalog p4 and p6: supported industrial-door, cabinet, gate, trailer-door and ramp application language.
- Catalog p5–p15: real product families, photographs, drawings and published technical data already held in the audited product layer.
- Catalog p18: self-owned factory; support from design through production and sales; requirement-based development and production; many years of manufacturing experience; production-stage checking tools; proximity to Shanghai and Ningbo ports; highway access; shipment personnel.

Do not publish a founding year, employee count, factory area, revenue, export volume, destinations, customer count, capacity, patent, certification, award, global office, delivery-speed or freight-cost claim.

## Composition

1. Breadcrumb and restrained hero with one H1 and the real factory photograph.
2. Concise company profile.
3. Six source-mapped families using the locked `ProductCard` component.
4. Compact manufacturing foundation with the actual factory image as company evidence and one disclosed process illustration.
5. Standard-products and custom-requirements comparison.
6. Two approved disclosed application illustrations and the catalog-supported application list.
7. Compact production-checking summary.
8. Six factual B2B reasons without statistics.
9. Text-led port, highway and shipment-access section without a map.
10. Five-step practical working approach without a timeline promise.
11. Compact internal-navigation band.
12. Approved dark navy final CTA linking to the existing RFQ and Products routes.

## Authenticity

`/images/factory-exterior.jpg` is the only image labeled as the company factory and is marked as actual catalog evidence. Existing process and application scenes retain neutral labels and the visible `Illustrative scene` disclosure through `SupportingVisual`. Product cards use their source-mapped catalog images.

## Responsive behavior

At 1440 and 1024px, retain strong two-column hero/evidence layouts. At 768px, stack wide evidence sections and keep two-column product/application structures where space allows. At 390px, use a single column, full-width buttons, contained images, readable product cards and compact footer spacing with no horizontal overflow.
