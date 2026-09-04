# Industrial hinge manufacturer website proposal

Date: 2026-08-31. Status: proposed, awaiting structure approval. This is a planning document, not an approved design or an implemented website.

The next authorized implementation stage, after approval of this proposal, is the homepage only. Product, application and company pages will not be built until the homepage design has been reviewed and approved separately.

## 1. Evidence and business structure

The actual source is [Products show 2026(1).pdf](<D:/SongSelect/网站搭建/铰链/Products show 2026(1).pdf>); the suggested `/reference/` path is not present. All 19 PDF pages and all 30 standalone photographs have been reviewed. The catalog contains 60 specification rows across 11 tables. These are catalog records, not a claim about stock or supplier SKU counts.

The complete, unchanged dimensional transcription and photo audit are in [source-audit.md](<D:/SongSelect/网站搭建/docs/research/source-audit.md>). The machine-readable research record is [catalog-data-draft.json](<D:/SongSelect/网站搭建/docs/research/catalog-data-draft.json>). It is internal research data, includes an unpublished contact draft, and must not be exposed as public website data.

The company name appears as Pinghu Yipinxiang Machinery Technology Co., Ltd, with different spacing on the cover. Use this as a configurable draft identity. A final brand name, logo, production domain and public business contact remain TBD. A simple text rendering of the company name can serve as the preview identifier; do not invent a logo or repurpose a certification body's mark.

Position the business as an industrial weld-on hinge manufacturer, factory-direct supplier and custom hinge manufacturer. The catalog supports a self-owned factory, design and production to customer needs, lathe processing, automatic punching, mass assembly, production checking tools and specified packaging methods. It does not establish capacity figures, equipment models, material grades, performance ratings, current certification validity or commercial terms.

The primary buyer journeys are:

1. Known hinge requirement: choose a type, check a catalog size, submit a prefilled RFQ.
2. Application requirement: find a supported application, identify the relevant family or series, request suitability confirmation.
3. Custom requirement: describe the application and dimensions, provide an available drawing, discuss production requirements.

No price catalog, cart, checkout, account registration, retail discounts or consumer reviews are proposed.

### Product taxonomy

| Catalog concept | Website treatment | Source |
| --- | --- | --- |
| Water-drop shaped weld-on hinge | Core family and primary positioning | p4 |
| Heavy hinge / heavy-duty weld-on hinge | Descriptive search language for the same core family; never a load rating | p4 |
| Electromechanical cabinet hinge | Catalog synonym and cabinet application context, not a duplicate inventory family | p4 |
| 20 type | One series page with 20-A and 20-B variants; published dimensions are identical, end treatments differ | p5 |
| 12 / 14 / 16 type | One series page with three original model rows | p6 |
| Bearing type | Family page with 18 listed size combinations | p7 |
| Round type | Family page with six listed sizes | p8 |
| Pin type | Family page with five listed sizes | p9 |
| Gasket type | Family page with seven listed sizes; do not infer the washer alloy | p10 |
| Grease nipple type | Family page with six listed sizes | p11 |
| Adjustable type | Family page with three listed sizes; adjustment travel is TBD | p12 |
| Square type | Family page with one published size, preserving the original notation | p13 |
| Flag type | One family page with two separate, matching photo/table groups, containing five and four rows | p14-15 |
| Customized hinges | Service page and RFQ route, not an invented collection of standard SKUs | p8-15, p18 |

The 20 standalone hinge photos cover pin, bearing, grease nipple, gasket, round and oil-hole configurations. The other 10 photos show machined accessories. Oil-hole configurations have no established matching specification table; the accessories have no catalog specifications. Keep them in the asset inventory and potential custom discussion, rather than creating unsupported product pages.

### Source boundaries that affect the design

| Finding | Website consequence |
| --- | --- |
| 12-A, 14-A and 16-A have D values 11.80, 13.80 and 15.80 | Model labels never replace actual dimensions. |
| No explicit unit is printed on the p5/p6 dimensional tables or drawings | Preserve D, D-1, L, d, L-1, c and L-2 exactly; unit is TBD. Do not put these values into a cross-family mm filter until confirmed. |
| Several compound size strings have no dimension-order legend | Display the complete catalog size; do not relabel terms as width, diameter, thickness or length without support. |
| Square type is printed as `Φ20x25x140mm`, 354 g | Preserve the notation and flag its interpretation for confirmation; do not silently correct it. |
| Weight is labeled `weight (G)` | Treat it as catalog product mass, never allowable load. |
| There is one real factory exterior photo, but no process or inspection photos | Use the actual exterior photograph and concise supported process text. Do not imply that product photographs show production or testing. |
| There are no installed-application photographs | Reserve photographic application layouts, but use an explicitly agreed text-based preview until genuine application imagery is supplied. |
| The PDF contains license and quality-system certificate images | Hold badges and certification claims pending current originals, validity and publication confirmation. |
| Contact information is on the final PDF page | Keep the contact draft and original full PDF out of public assets until contact publication is confirmed. |

Unavailable information is `TBD` in internal data. The public interface omits unsupported claims or asks the buyer to provide requirements; it does not fill the website with TBD placeholders.

## 2. Design approaches

| Approach | Advantage | Trade-off | Recommendation |
| --- | --- | --- | --- |
| Product and specification first | Gives engineers a short route from real photographs to exact dimensions and an RFQ. Uses the strongest supplied assets. | Needs disciplined hierarchy so the homepage does not become a spreadsheet. | Recommended: bright, restrained industrial design with large imagery and readable tables. |
| Dark product showcase | Gives the metal products strong visual emphasis while retaining the requested content order. | Most source photographs have white backgrounds; large dark fields can make them feel boxed in and reduce the visual space for specifications. | A possible visual alternative, but not the default. |
| Factory and application story first | Can establish manufacturing context quickly. | The supplied project lacks shop-floor, inspection and installed-application photography. | Do not select as the main direction with the current asset set. |

The recommendation uses white and light gray for most content, navy for important section backgrounds and the footer, and orange for primary actions and active controls. The visual emphasis comes from real hinge photography, typography and grid alignment.

## 3. Proposed sitemap

These are intended final routes. They are not permission to build the remaining pages before homepage approval.

| Navigation / page | Route | Content and boundary |
| --- | --- | --- |
| Home | `/` | Manufacturer positioning, product discovery and RFQ conversion |
| Products | `/weld-on-hinges` | Main catalog hub; clear water-drop, series and structural groupings; data-backed filters |
| 20 Type Weld-On Hinges | `/20-type-weld-on-hinges` | 20-A and 20-B, end-style distinction, original parameter table and drawing |
| 12 / 14 / 16 Type Weld-On Hinges | `/12-14-16-type-weld-on-hinges` | Three catalog models and original drawing |
| Bearing Weld-On Hinges | `/bearing-weld-on-hinges` | 18 actual catalog combinations |
| Round Weld-On Hinges | `/round-weld-on-hinges` | Six catalog combinations |
| Pin Type Weld-On Hinges | `/pin-type-weld-on-hinges` | Five catalog combinations |
| Gasket Weld-On Hinges | `/gasket-weld-on-hinges` | Seven complete, unaltered size strings |
| Grease Nipple Weld-On Hinges | `/grease-nipple-weld-on-hinges` | Six complete, unaltered size strings |
| Adjustable Weld-On Hinges | `/adjustable-weld-on-hinges` | Three catalog combinations; no invented adjustment range |
| Square Weld-On Hinges | `/square-weld-on-hinges` | Catalog photograph and exact source notation |
| Flag Hinges | `/flag-hinges` | Two catalog designs, separate image/table groups; no invented A/B model names |
| Applications | `/applications` | Supported applications and their evidence scope |
| Custom Hinges | `/custom-weld-on-hinges` | Customer requirement intake and supported custom manufacturing facts |
| Manufacturing | `/manufacturing` | Factory exterior and supported manufacturing processes |
| Quality | `/quality` | Evidence-backed description of production checking; no fabricated tests or certificates |
| About Us | `/about-us` | Confirmed company identity and factory facts |
| Contact | `/contact` | Approved business contact and the RFQ form |
| Privacy | `/privacy` | Must reflect the actual form provider, data handling and approved company policy before launch |

Potential application landing pages after the homepage is approved: `/applications/gates`, `/applications/trailer-doors-and-ramps`, `/applications/industrial-steel-doors`, `/applications/electrical-cabinets`, `/applications/control-cabinets` and `/applications/network-cabinets`. Initially keep these as sections on the applications hub. Publish separate pages only when each has useful, distinct and supported content and suitable photography. Do not create nearly identical SEO pages just to target different keywords.

Do not create duplicate product listings for heavy-duty and electromechanical cabinet synonyms. They belong in the main catalog and relevant application copy. Avoid individual size pages without confirmed model identities or enough unique content; a family page with exact selectable size rows is more useful at this stage.

The header contains Home, Products, Applications, Custom Hinges, Manufacturing, Quality, About Us, Contact, and a right-aligned Get a Quote button. The Products mega menu groups core weld-on structures, numbered series and other forms; its side panel links to the catalog hub and custom inquiry. It works by click and keyboard as well as pointer hover.

## 4. Homepage information architecture

The requested ten-section order is retained. Each section answers a distinct buyer question.

| Order | English heading / purpose | Content, imagery and interaction |
| --- | --- | --- |
| 01 | Industrial Weld-On Hinges / Built for Heavy-Duty Applications | Single H1, short manufacturer introduction, one dominant real product photograph, Get a Quote and Explore Hinges. No carousel or background video. |
| 02 | Find the Right Hinge Type | Six featured image cards: bearing, pin, grease nipple, round, adjustable and flag. Each has a concise description and View Products. Applications appear only where supported; unknown suitability is an invitation to discuss the requirement. All other types remain accessible through the mega menu and range table. |
| 03 | Start with Your Application | Six large blocks: gates; trailer doors and ramps; industrial steel doors; electrical/switch cabinets; control cabinets; network cabinets. Photographic treatment is planned, but no genuine application images are currently available. The first preview uses substantial editorial text panels, not fake application scenes or small icon cards. |
| 04 | A Manufacturer Behind Your Hinge Supply | Four factual advantages: self-owned factory, lathe processing, automatic punching, and custom product development. Supporting text stays within p3/p18. No years-in-business counter, capacity figures or customer logos. |
| 05 | Custom Hinges, Starting with Your Requirement | A short explanation of customer-specific design and production, a clearly bounded process sequence, and Discuss Your Hinge Requirement. Sample promises, free design services and available material/finish menus are omitted unless confirmed. |
| 06 | Manufacturing, from Machining to Assembly | Real factory exterior from p3, a compact process list covering lathe processing, automatic punching, mass assembly and standardized handling/packaging. Do not create a fictional six-photo production tour. |
| 07 | Quality Checks During Production | One factual paragraph about the catalog's production-checking tools. A catalog drawing can provide engineering context only if captioned as a reference drawing, not inspection evidence. No 100% inspection, tolerance, load-test or salt-spray claims. |
| 08 | Technical Product Range | Readable overview with hinge type, listed catalog sizes, structure and supported application scope. Link each family to its detailed page in the completed site. Keep available combinations discrete, preserve size strings and clearly identify catalog weights. |
| 09 | Packaging for Industrial Orders | Two genuine packaging photo groups: 20-type inner/outer cartons, and 12/14/16 inner boxes plus composite wooden case. Describe them as family-specific examples. No invented pack counts, pallet specifications, export-compliance badges or freight timings. |
| 10 | Need a Hinge for Your Application? | Tell us your required hinge type, dimensions, quantity and application. A prominent Request a Quote entry and the RFQ form, with no account requirement. |

### Hero copy and source image

Eyebrow: INDUSTRIAL HINGE MANUFACTURING

H1: Industrial Weld-On Hinges / Built for Heavy-Duty Applications

Supporting copy: Factory-direct weld-on hinges for steel doors, gates, ramps, trailer doors and industrial cabinets. Find a catalog size or send your drawing for a custom requirement.

Primary CTA: Get a Quote. Secondary CTA: Explore Hinges.

The headline describes the industrial category. It does not establish a rated load. Detailed product suitability remains dependent on the selected model and application.

Preferred hero photograph: `铰链/产品图片/1销子款水滴型铰链/12.jpg`, 5252 x 3505. It clearly shows an assembled hinge, separated pin and water-drop profile. Use the original product geometry, surface appearance and proportions. The photograph is a family reference, not proof of a particular dimension or material.

Suggested ALT text: Water-drop weld-on hinges with an exposed pin and separated hinge body.

### Application evidence rules

Page 4 supports water-drop hinges for indoor/outdoor carbon-steel doors and switch, control, network, GGD, AE and other industrial cabinets. Page 6 explicitly associates the 12 / 14 / 16 series with ramps, gates and trailer doors. Keep these scopes in the data model and in application recommendations.

The carbon-steel-door application does not establish the hinge's own material grade. Outdoor-door use does not establish corrosion, weatherproofing or ingress-protection ratings. General mechanical equipment and fabricated steel structures are buyer contexts from the brief, but they are not established model suitability claims in the catalog; invite a custom inquiry instead.

### Custom manufacturing sequence

The requested complete process is Requirement → Drawing / Specification → Sample / Engineering Confirmation → Manufacturing → Inspection → Packaging → Shipment.

The catalog supports customer requirements, design/production, production checks, packaging and shipment coordination. It does not describe a formal sample or engineering-approval procedure. Keep that procedure as TBD in internal data. Until confirmed, the public preview uses Your Requirement → Drawing / Specification Discussion → Manufacturing → Production Checks → Packaging → Shipment and frames it as project coordination, not a certified factory SOP. Do not promise sample availability, price or turnaround time.

### Footer

Use four clean columns: Product Categories, Applications, Company, and Contact / RFQ. Contact entries are populated only from approved configuration. No personal email, phone, exact address, social account or certificate is copied into public content by default. All RFQ actions have a working on-page target in the homepage preview.

## 5. Visual design system

| Element | Proposed system |
| --- | --- |
| Primary | #0D2238 industrial navy for headlines, navigation, technical table headers and selected dark sections |
| Secondary | #5F6973 steel gray for supporting text and labels |
| Background | #F5F7F8, alternating with #FFFFFF to separate sections without decorative effects |
| Accent | #F59E0B for primary CTA fills, active filter states and restrained technical emphasis |
| Typeface | IBM Plex Sans, self-hosted in regular, medium and semibold; no decorative display font |
| Technical typography | Tabular numerals and aligned decimal strings; original case for D/d and original dimension symbols |
| Headings | Desktop H1 approximately 60/64px, H2 38/44px, H3 22/28px; at 390px H1 approximately 38/42px and H2 28/34px |
| Body / labels | Body 16/26px, technical table text 14-16px, compact labels 12-13px; do not shrink specifications to fit |
| Container | Maximum 1280px; 12-column desktop grid; generous margins and consistent alignment |
| Spacing | Approximately 88-104px between desktop sections and 52-64px on mobile, adjusted to content |
| Geometry | Rectangular image fields, thin dividers, 0-4px corner radii, minimal or no card shadows |
| Controls | Approximately 48px button/input height, clear labels, visible keyboard focus and sufficient touch area |
| Motion | Small hover/focus transitions only; respect reduced-motion preferences; no parallax, automatic sliders or animation library |

Use navy text on orange primary buttons. The calculated contrast is approximately 7.50:1; white text on the same orange is only approximately 2.15:1. The specified steel-gray text is approximately 5.59:1 on white and 5.20:1 on the pale background. These are design calculations, not a completed accessibility audit.

At 1440px, the homepage has an approximately 80px outer margin and a hero split around five text columns and seven image columns. The product image is dominant and unframed by ornamental graphics. At 1024px, use approximately 32px gutters and compact navigation. At 768px, stack the hero and use two product columns. At 390px, use approximately 20px gutters, one product column, full readable text, and a single-column form. Do not crop off essential pins, fittings or bearings.

Navy sections should provide rhythm rather than dominate the page: a compact manufacturing/quality area or final inquiry panel and the footer are enough. Use orange as an action color, not a decorative wash.

## 6. Reusable product page structure

Use one flexible family-detail template, with variant tables driven by data. A two-value round-hinge size table must not be forced into the same schema as the seven-column 20-type table.

1. Breadcrumb: Home → Weld-On Hinges → current family.
2. One H1 with the actual family name.
3. Gallery paired with a concise technical introduction; label family photographs rather than implying exact variant matches.
4. Key features restricted to supported geometry, structure, published variants and customization statements.
5. Applications with source scope; omit unsupported model-specific recommendations.
6. Technical specifications and available sizes presented as one authoritative selection section rather than duplicate tables. Preserve raw values and column names. Provide Add to RFQ for each valid row.
7. Technical drawing where supplied. The shared p5/p7 drawing is a catalog reference, not a full drawing for every bearing size. For other families, drawing data is TBD and the interface offers Request a Drawing instead of a fabricated diagram.
8. Customization discussion, asking for requirements without inventing available alloys, finishes, dimensional limits or tolerances.
9. Packaging: show only the documented method for the matching series; otherwise request packaging requirements.
10. Related families selected by known structure or catalog relationship, not unsupported equivalence or load substitution.
11. A short FAQ based on real data, such as catalog sizes, source drawings and how to submit a requirement. Do not invent answers about MOQ, delivery time, sample charges, warranty or rated load.
12. Reusable RFQ form prefilled with the selected family and exact catalog size or model.

The two flag designs retain their own photographs and their own tables within one flag-family page. Catalog provenance IDs are internal only; do not present them as manufacturer's part numbers.

### Table behavior

Use semantic tables with a caption, scoped headers, clear units where confirmed, alternating row backgrounds and tabular numerals. At small widths, keep a table-only horizontal scroll region with a visible scroll cue; it must never cause the entire page to overflow. Freeze the model/size column when helpful. An optional selected-size summary can display the same data in a vertical definition list, without omitting columns or changing values.

A user changing the selected size must see the same exact value in the table, the selected-size summary and the RFQ. No automatic conversion from metric to rounded inch values is proposed.

## 7. Data, components and filtering

The implementation will use Next.js, TypeScript and Tailwind CSS. Most page content and specification tables should render on the server; client components are limited to navigation disclosures, filters, galleries and the inquiry form. No CMS, cart library, animation framework or external product API is required for the current scope.

| Layer | Responsibility |
| --- | --- |
| Source research | Raw catalog strings, page/row provenance, original assets and internal TBD fields; never exposed wholesale |
| Product data | Public-safe family records, exact variants, supported applications, approved media, source-backed descriptions and publication status |
| Site configuration | Brand display, approved business contact, domain and inquiry delivery configuration; draft and public values separated |
| Components | Header, MegaMenu, Hero, ProductCard, ProductGrid, ApplicationCard, TechnicalTable, FactorySection, RFQForm and Footer |
| Page composition | Home sections and the reusable family-detail template; no duplicated product layouts |
| Inquiry delivery | A server-side adapter chosen when the approved receiving address and delivery provider are known |

Each technical record retains the source file, PDF page, original row, original dimension strings, unit status and original supplier model if present. Numeric comparison fields can be derived separately when the meaning is supported, but never overwrite the raw strings. Fields such as material, loadCapacity, MOQ, leadTime, equipmentModels, productionCapacity, certifications, exportCountries, customerNames, warranty and testResults remain TBD when absent.

| Requested filter | Enablement rule |
| --- | --- |
| Hinge type | Enable for catalog-backed families and series; retain clear parent/structure grouping |
| Diameter / size | Exact catalog-size selection is available. Numeric diameter parsing is limited to the clear diameter-symbol/two-part records on p7-9. Do not substitute nominal 12/14/16 labels for D. |
| Length | Enable numeric filtering for the unambiguous two-part p7-9 size notation. Hold cross-family length filtering for compound strings and the unit-unclear p5/p6 tables. |
| Structure | Enable source-supported bearing, pin, gasket, grease nipple, adjustable, square and flag distinctions |
| Application | Match only the supported family/series scopes from p4 and p6; explain that unknown mappings are not evidence of unsuitability |
| Customization | Use the explicit customization statements on p8-15 and the general capability on p18; do not turn unavailable material/finish options into filters |

Filter combinations operate on existing records, never a Cartesian product of dimensions. Show result counts, selected filters, Clear Filters and a helpful no-results state with a custom inquiry CTA. Do not auto-recommend a technically different hinge as a substitute. If a filter would offer no meaningful choice, omit it.

## 8. RFQ experience and delivery boundary

The form contains Name, Company, Business Email, Country / Region, Product Type, Required Size, Estimated Quantity, Application and Message. Keep the first five required; make it easy to provide the remaining technical context without rejecting buyers who do not yet know a dimension or quantity. Offer Not sure / Custom requirement as a product-type option, not a fake SKU. Do not block legitimate buyers solely because they use a common email provider.

Selecting a catalog row prefills Product Type and Required Size with the exact source values. Quantity has no default and is not compared against an invented MOQ. Use persistent visible labels, clear inline error messages, a keyboard-accessible error summary and a meaningful submitting state.

Optional drawing upload is deferred until private storage and secure server handling are configured. Do not upload drawings into a public directory. The final implementation needs file-type and size checks, safe filenames, request limits and a defined retention policy. Technical upload limits are site configuration, not manufacturer promises.

CTA: Submit RFQ.

The homepage design preview must clearly say that inquiry delivery is not configured and that no message is sent. It can demonstrate field validation, but must not simulate a successful delivery. Live submission requires a confirmed receiving business address and a server-side delivery/persistence adapter. A success state appears only after the server has accepted the request; delivery failure retains the entered information and offers retry. Do not expose provider credentials to the browser or send test inquiries to the catalog contact without explicit authorization.

Measure conversion only when appropriate analytics and data handling are agreed: product-to-RFQ clicks, form starts and actual accepted submissions. Do not count button clicks as delivered or qualified inquiries. No marketing opt-in is selected by default.

## 9. SEO architecture

Use one H1 per page, a logical H2/H3 hierarchy, semantic navigation/main/footer regions, descriptive image ALT text and crawlable HTML specification content. Family pages should answer a specific product intent and link to their supported applications, custom manufacturing and inquiry form. Do not claim search volume research or guaranteed rankings.

Proposed homepage title: Industrial Weld-On Hinge Manufacturer | Yipinxiang. The brand suffix is a draft configuration value and is published only when confirmed.

Proposed homepage description: Explore weld-on hinge types and catalog sizes for steel doors, gates and industrial cabinets. Discuss custom hinge requirements and request a quote.

Use Next.js metadata support for route titles/descriptions, canonical URLs and Open Graph metadata, with sitemap and robots file generation from the approved route map. The production base URL remains configurable and must not be replaced with an invented company domain. These facilities follow the [official Next.js metadata documentation](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

Only completed, public, canonical pages belong in the production sitemap. The homepage-only preview is not indexed. Do not expose unpublished routes or mark draft content as a complete product catalog. A public preview's robots settings are not an access-control mechanism; actual privacy requires appropriate hosting access control.

Filter state should use client state or URL fragments while the catalog and family pages retain clean canonical routes. This avoids creating crawlable URLs for every possible combination; see [Google's faceted-navigation guidance](https://developers.google.com/crawling/docs/faceted-navigation).

Add BreadcrumbList to the relevant pages and Organization using only approved public identity fields. Omit unknown logo, phone, address and social-profile values. Start without Product rich-result markup: the supplied information has no verified offer or review data. Never fabricate prices, stock status, ratings, reviews or SKU identifiers to satisfy a validator. Google's [product-snippet requirements](https://developers.google.com/search/docs/appearance/structured-data/product-snippet) require qualifying offer or review information for that search treatment. Semantic Product markup can be reconsidered for sufficiently documented individual products later; rich-result eligibility must not be promised.

Keep FAQ content useful for buyers without promising FAQ rich results. Do not add language alternates for translations that do not exist. Publish the original PDF as a download only after personal-contact and certificate publication have been approved.

## 10. Homepage-first implementation and QA

### Current stage: proposal

Deliver the source audit, product structure, sitemap, homepage architecture, design system, reusable product template and delivery boundaries. No application coding, scaffolding, package installation or deployment is part of this stage.

### After structure approval: homepage only

Build the Next.js homepage and its reusable components with the approved source photographs, the ten-section content order, accessible navigation, the compact technical overview and an honestly labeled RFQ preview. Prepare data/component boundaries so later pages reuse them, but do not create the remaining pages yet.

All prototype navigation must work without pretending those pages already exist: Products goes to the product section, Applications to its section, Custom Hinges to customization, Manufacturing and About Us to their appropriate factory/company anchors, Quality to its section, and Contact/Get a Quote to the form. A category's View Products action reveals or scrolls to its family in the homepage technical overview. Use real section IDs; no dead links or bare placeholder hashes. The final route map replaces those preview anchors only after the target pages exist.

Run the site locally and review at 1440, 1024, 768 and 390 pixels. Capture the actual homepage at all four widths. Check type hierarchy, alignment, image cropping, product-card density, header/mega-menu behavior, table scrolling, CTA emphasis and form layout. Fix visual defects before requesting homepage design approval.

| Check | Acceptance criterion |
| --- | --- |
| TypeScript and build | Production build and type checks pass; no claimed pass without running them |
| Runtime | No console errors, hydration errors, broken local links, missing images or failed required assets |
| Responsive layout | No document-level horizontal overflow at any target width; technical tables scroll only within their own region |
| Navigation | Keyboard and touch work; Escape closes overlays, focus is restored, and sticky UI does not cover anchors or fields |
| Forms | Required-field errors are understandable; user input survives a failed action; no false delivery success |
| Accessibility | Readable contrast, visible focus, semantic labels/table headers, appropriate ALT text and reduced-motion support |
| Source fidelity | Displayed dimensions match the catalog; no extra material, certification, load, capacity, MOQ or lead-time claims |
| Professional visual review | Real metal product imagery is dominant; spacing and hierarchy are consistent; missing photo areas use the approved fallback without fake scenes |

This QA is planned, not completed. No website screenshots, runtime checks or performance results exist yet because implementation has not begun.

### After separate homepage approval: remaining pages

Build the catalog hub, family-detail template, documented product pages, application hub and company pages; configure real RFQ delivery when approved contact/provider details are available; verify the entire route map and structured data. The final production launch requires confirmed public identity, contact, privacy/data handling, production domain and working inquiry delivery.

## 11. What needs confirmation, without blocking the layout proposal

For the homepage's final visual treatment: approved logo/name; genuine application photographs; shop-floor and inspection photographs if those sections are to become photographic rather than concise evidence-led text. Until then, the preview uses a text identity, real product images and the real factory exterior.

For technical publication: units for p5/p6, compound dimension legends, the square-type notation, commercial names for the two flag designs, and original engineering drawings where available. The existing raw data can still be presented verbatim with its limitations.

For factual claims and launch: current certification originals if the business wishes to publish them; any confirmed materials/finishes, ratings, tolerances, MOQ, lead times and sample procedure; public contact details; domain; RFQ delivery provider and approved data-handling policy. No missing detail will be filled by assumption.

Approval requested: adopt the product-and-specification-first direction, the proposed sitemap and the ten-section homepage, including the truthful preview fallbacks for missing application/process photography. After that approval, implement and visually review the homepage only, then stop for its separate design approval.
