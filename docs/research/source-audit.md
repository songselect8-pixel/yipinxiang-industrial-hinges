# Industrial hinge catalog and asset audit

Status: research and proposal only, 2026-08-31. No Next.js application, website component, dependency installation or public deployment has been created.

Source: [Products show 2026(1).pdf](<D:/SongSelect/网站搭建/铰链/Products show 2026(1).pdf>). The requested `/reference/` path does not exist; the explicitly supplied local PDF was used. The supplied source files were not modified.

Reviewed all 19 PDF pages visually and with text extraction, all 30 standalone photographs, and the embedded factory, certificate, drawing and packaging images. There are 60 specification rows across 11 tables and 10 technical family groups. These counts describe catalog records, not stock, supplier SKUs or confirmed orderable items.

The full research data is in [catalog-data-draft.json](<D:/SongSelect/网站搭建/docs/research/catalog-data-draft.json>). It includes private contact draft fields and must not be served or imported wholesale into a browser bundle.

## Business and taxonomy

The catalog identifies Pinghu Yipinxiang Machinery Technology Co., Ltd, with a spacing variation on the cover. Public branding and contact fields remain configurable and unapproved. There is no standalone logo file.

Water-drop shaped welding hinge, heavy hinge and electromechanical cabinet hinge are presented as synonyms on page 4. They should not become three duplicate inventory families. Twenty type and 12 / 14 / 16 type are catalog series; bearing, pin and gasket describe structure. Round, square and flag describe other product forms. Custom manufacturing is a service supported by page 18.

## Complete technical transcription

All numbers below are retained as catalog strings. Decimal precision, diameter glyphs and multiplication characters are preserved. `weight (G)` is product mass, not load capacity. Catalog record IDs are internal provenance IDs, never supplier part numbers.

The page-5 and page-6 tables and drawings do not explicitly print a unit: their units remain `TBD` until confirmed. All page-7 through page-15 size strings explicitly contain `mm`. Do not substitute nominal series labels for dimensions, interpolate missing combinations or revise an unusual value.

### PDF page 5: 20 Type Weld-On Hinges

| Model | D | D-1 | L | d | L-1 | c | L-2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20-A | 20.00 | 24.80 | 140 | 10.85 | 60 | 20.00 | 7 |
| 20-B | 20.00 | 24.80 | 140 | 10.85 | 60 | 20.00 | 7 |

Unit: `TBD`. 20-A: chamfered at both ends. 20-B: right angle at both ends. Both share the same published dimensions.

### PDF page 6: 12 / 14 / 16 Type Weld-On Hinges

| Model | D | D-1 | L | d | L-1 |
| --- | --- | --- | --- | --- | --- |
| 12-A | 11.80 | 14.10 | 80 | 6.80 | 30 |
| 14-A | 13.80 | 15.60 | 100 | 7.85 | 32 |
| 16-A | 15.80 | 18.20 | 120 | 8.85 | 44 |

Unit: `TBD`. 12-A / 14-A / 16-A are model names. The D values are 11.80 / 13.80 / 15.80, not 12 / 14 / 16.

### PDF page 7: Bearing Type Weld-On Hinges

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `ф16*100mm` | 142 |
| `ф16*120mm` | 158 |
| `ф18*100mm` | 180 |
| `ф18*120mm` | 230 |
| `ф20*100mm` | 242 |
| `ф20*120mm` | 288 |
| `ф20*140mm` | 330 |
| `ф20*160mm` | 391 |
| `ф22*120mm` | 354 |
| `ф22*140mm` | 416 |
| `ф25*140mm` | 525 |
| `ф25*160mm` | 597 |
| `ф28*140mm` | 694 |
| `ф28*160mm` | 798 |
| `ф30*140mm` | 754 |
| `ф30*160mm` | 869 |
| `ф32*160mm` | 917 |
| `ф32*180mm` | 1180 |

### PDF page 8: Round Weld-On Hinges

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `Φ10*47mm` | 26 |
| `Φ12*60mm` | 50 |
| `Φ13*51mm` | 50 |
| `Φ16*60mm` | 83 |
| `Φ20*74mm` | 160 |
| `Φ24*106mm` | 336 |

### PDF page 9: Pin Type Weld-On Hinges

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `Φ16*75mm` | 107 |
| `Φ18*75mm` | 142 |
| `Φ20*110mm` | 269 |
| `Φ20*120mm` | 285 |
| `Φ20*140mm` | 320 |

### PDF page 10: Gasket Type Weld-On Hinges

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `Φ12x14x100mm` | 77 |
| `Φ14x16x140mm` | 132 |
| `Φ16x18x160mm` | 251 |
| `Φ18x20x180mm` | 356 |
| `Φ20x25x200mm` | 476 |
| `Φ22x27x220mm` | 633 |
| `Φ25x30x250mm` | 929 |

Keep the complete size string until the dimension-order legend is confirmed; do not assign inferred axis names.

### PDF page 11: Grease Nipple Weld-On Hinges

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `Φ10x12x60mm` | 34 |
| `Φ14x16x100mm` | 101 |
| `Φ16x18x120mm` | 164 |
| `Φ18x20x140mm` | 230 |
| `Φ20x25x180mm` | 421 |
| `Φ22x27x160mm` | 470 |

Keep the complete size string until the dimension-order legend is confirmed; do not assign inferred axis names.

### PDF page 12: Adjustable Weld-On Hinges

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `Φ20x25x140mm` | 354 |
| `Φ22x27x140mm` | 416 |
| `Φ25x30x140mm` | 525 |

Keep the complete size string until the dimension-order legend is confirmed; do not assign inferred axis names.

### PDF page 13: Square Weld-On Hinges

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `Φ20x25x140mm` | 354 |

Keep the complete size string until the dimension-order legend is confirmed; do not assign inferred axis names.

The diameter symbol on this square type is printed in the catalog. It is preserved, not corrected.

### PDF page 14: Flag Hinges - catalog page 14

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `Φ14*80*3mm` | 113 |
| `Φ16*100*3mm` | 178 |
| `Φ18*110*3.5mm` | 218 |
| `Φ20*120*5mm` | 340 |
| `Φ25*120*5mm` | 453 |

Keep the complete size string until the dimension-order legend is confirmed; do not assign inferred axis names.

This is one of two flag-hinge designs. The source does not assign an A/B series name; retain the page-based grouping and matching image.

### PDF page 15: Flag Hinges - catalog page 15

| Catalog size, verbatim | Catalog weight (g) |
| --- | ---: |
| `80*45*2.8mm` | 135 |
| `100*55*2.8mm` | 185 |
| `120*60*2.8mm` | 241 |
| `140*60*2.8mm` | 288 |

Keep the complete size string until the dimension-order legend is confirmed; do not assign inferred axis names.

This is one of two flag-hinge designs. The source does not assign an A/B series name; retain the page-based grouping and matching image.

## Supported applications

| Application | Source | Scope of evidence |
| --- | --- | --- |
| Industrial steel doors | p4: indoor and outdoor carbon steel doors | Water-drop family; no load or weatherproofing guarantee |
| Switch / electrical cabinets | p4: switch cabinet; GGD cabinet; AE cabinet | Water-drop family; enclosure suitability is not an IP rating |
| Control cabinets | p4: control cabinet | Water-drop family |
| Network cabinets | p4: network cabinet | Water-drop family |
| Industrial cabinets | p4: other industrial cabinet | Water-drop family |
| Gates | p6: gates | 12 / 14 / 16 type series |
| Trailer doors | p6: trailer doors | 12 / 14 / 16 type series |
| Ramps | p6: ramps | 12 / 14 / 16 type series |

Applications are catalog-level selection context, not load approvals. Do not map every application to every variant. General mechanical equipment and fabricated steel structures remain inquiry contexts rather than published product-suitability claims.

## Manufacturing and quality claims

| Claim that can be used | Source | Boundary |
| --- | --- | --- |
| Self-owned factory | p18 | Catalog statement; supported by factory exterior on p3 |
| Self-owned equipment | p3 | No equipment count, model or brand |
| Lathe processing | p3 | Do not rename CNC machining without confirmation |
| Automatic punching | p3 | No tonnage, line count or throughput |
| Mass assembly | p3 | No production capacity figure |
| Standardized turnover and packaging | p3, p16, p17 | Family-specific packaging methods only |
| Custom product development and production | p18 | No list of materials, finishes, achievable tolerances or sample lead times |
| Testing tools used during production | p18 | No method, instrument, inspection percentage or test result |
| Shipment coordination | p18 | No destination-country list, promised transit time or Incoterm |

A visible certificate image is not confirmation of a current certification. The certificate includes a quality-management standard reference, but present validity, scope and publication approval are TBD. Do not create an ISO badge or certified-manufacturer headline from this image.

## Packaging

| Catalog group | Inner packaging | Outer packaging | Source |
| --- | --- | --- | --- |
| 20 type | Kraft-paper box with plastic-film lining. Source says `460g`; do not infer g/m². | Source says `4mm` corrugated paper, transparent sealing tape and packing tape. | p16 |
| 12 / 14 / 16 type | Folded inner box (source: airplane box) with plastic-film lining. | Composite wooden case, two horizontal and one vertical packing belts. | p17 |

The word 20 in the packaging section refers to the catalog series context; do not derive a 20-carton pack count. No unit counts, carton dimensions, pallet specification, fumigation compliance, universal packaging method or freight lead time are documented.

## Photo inventory

| ID | Source file | Resolution | Use and limitation |
| --- | --- | --- | --- |
| 01 | `铰链/产品图片/1销子款水滴型铰链/12.jpg` | 5252 x 3505 | Pin type: Preferred hero; high-resolution product assembly on white. |
| 02 | `铰链/产品图片/1销子款水滴型铰链/2.jpg` | 800 x 800 | Pin type: Category/gallery image; assembled and separated parts. |
| 03 | `铰链/产品图片/1销子款水滴型铰链/DSC_2005.jpg` | 800 x 800 | Pin type: Alternate gallery view; assembled and separated parts. |
| 04 | `铰链/产品图片/2轴承款水滴型铰链/01.jpg` | 800 x 800 | Bearing type: Clear visible bearing/assembly reference for category card. |
| 05 | `铰链/产品图片/2轴承款水滴型铰链/02.jpg` | 800 x 800 | Bearing type: Paired assembled and separated hinge image. |
| 06 | `铰链/产品图片/2轴承款水滴型铰链/106.jpg` | 800 x 800 | Bearing type: Three product examples; do not infer their sizes from the photo. |
| 07 | `铰链/产品图片/2轴承款水滴型铰链/20.jpg` | 5065 x 3380 | Bearing folder: High-resolution alternate hero; exact pictured variant remains TBD. |
| 08 | `铰链/产品图片/3带油嘴的水滴型焊接铰链/2023080107.jpg` | 800 x 800 | Grease nipple: Two hinge assemblies with visible fittings. |
| 09 | `铰链/产品图片/3带油嘴的水滴型焊接铰链/2023080116.jpg` | 800 x 800 | Grease nipple: Separated hinge showing fitting and pin. |
| 10 | `铰链/产品图片/3带油嘴的水滴型焊接铰链/油嘴1.jpg` | 800 x 800 | Grease nipple: Single assembly; category detail image. |
| 11 | `铰链/产品图片/3带油嘴的水滴型焊接铰链/油嘴3.jpg` | 800 x 800 | Grease nipple: Vertical assembly and separated component. |
| 12 | `铰链/产品图片/4铜垫片水滴型焊接铰链/2023080941.jpg` | 800 x 800 | Gasket type: Separated components; material grade remains TBD. |
| 13 | `铰链/产品图片/4铜垫片水滴型焊接铰链/铜垫片.jpg` | 800 x 800 | Gasket type: Close-up of gasket/washer structure; do not infer brass/copper alloy. |
| 14 | `铰链/产品图片/5圆形焊接铰链/圆形铰链2.jpg` | 800 x 800 | Round type: Single assembled round hinge. |
| 15 | `铰链/产品图片/5圆形焊接铰链/圆形铰链5.jpg` | 800 x 800 | Round type: Several round hinge examples; photo is not a dimensional source. |
| 16 | `铰链/产品图片/5圆形焊接铰链/圆形铰链7.jpg` | 800 x 800 | Round type: Separated round hinge; matches the page-8 product presentation. |
| 17 | `铰链/产品图片/6带油孔水滴型焊接铰链/_DSC1576.JPG` | 3872 x 2592 | Water-drop oil-hole: Photo-only configuration; no matching specification table established. |
| 18 | `铰链/产品图片/6带油孔水滴型焊接铰链/_DSC1577.JPG` | 3872 x 2592 | Water-drop oil-hole: Separated oil-hole hinge; exact sizes TBD. |
| 19 | `铰链/产品图片/7带油孔圆形焊接铰链/_DSC1364.jpg` | 750 x 750 | Round oil-hole: Photo-only round hinge configuration; do not conflate with grease nipple. |
| 20 | `铰链/产品图片/7带油孔圆形焊接铰链/_DSC1371.jpg` | 750 x 750 | Round oil-hole: Separated round oil-hole hinge and washer. |
| 21 | `铰链/产品图片/8五金配件/内螺纹 塑料嵌件.jpg` | 800 x 800 | Machined accessory: Filename: internally threaded plastic insert; no specification data. |
| 22 | `铰链/产品图片/8五金配件/半空芯铆钉.jpg` | 800 x 800 | Machined accessory: Filename: semi-hollow rivet; no specification data. |
| 23 | `铰链/产品图片/8五金配件/大倒角法兰螺母.jpg` | 800 x 800 | Machined accessory: Filename: chamfered flange nut; no specification data. |
| 24 | `铰链/产品图片/8五金配件/大法兰边 薄壁拉丝管.jpg` | 800 x 800 | Machined accessory: Filename: flanged thin-wall tube; no specification data. |
| 25 | `铰链/产品图片/8五金配件/带台阶 锁紧螺母.jpg` | 519 x 519 | Machined accessory: Filename: stepped locking nut; 519px source. |
| 26 | `铰链/产品图片/8五金配件/球头销子.jpg` | 800 x 800 | Machined accessory: Ball-ended pin detail; dimensions/material TBD. |
| 27 | `铰链/产品图片/8五金配件/球头销子2.jpg` | 800 x 800 | Machined accessory: Several ball-ended pins; dimensions/material TBD. |
| 28 | `铰链/产品图片/8五金配件/竹节销.jpg` | 800 x 800 | Machined accessory: Stepped pins; no specifications in the catalog. |
| 29 | `铰链/产品图片/8五金配件/竹节销2.jpg` | 800 x 800 | Machined accessory: Stepped pin detail; no specifications in the catalog. |
| 30 | `铰链/产品图片/8五金配件/通孔管 法兰管.jpg` | 800 x 800 | Machined accessory: Filename: through-hole/flange tube; no specification data. |

Four hinge photographs are high-resolution landscape sources: IDs 01, 07, 17 and 18. Other hinge photographs are 750 or 800 pixels square. Do not enlarge these small sources into full-width hero photography. No photo establishes material grade, finish specification, dimensions or load capacity.

## Embedded source assets

| Asset | Source and native resolution | Intended use |
| --- | --- | --- |
| Factory exterior | p3, image IM59, 2591 x 1943 | One credible manufacturer photograph. No claim about floor space or number of factories. |
| Business-license image | p3, IM53, 765 x 564, includes decorative frame | Internal verification only; no legal details copied to public site automatically. |
| Quality-system certificate image | p3, IM55, 402 x 540, includes frame | Hold pending current original and approval. Do not use the issuer mark as the company logo. |
| 20-type / bearing drawing composite | p5 and repeated p7, IM79, 825 x 864 | Reference drawing only. Do not claim each p7 size has its own dimensional drawing. |
| 12 / 14 / 16 drawing composite | p6, IM85, 546 x 958 | Reference drawing with original D / D-1 / L / d / L-1 symbols. |
| Adjustable hinge photo | p12, IM118, 800 x 800 | Actual catalog product image; no separate photo supplied. |
| Square hinge photo | p13, IM121, 800 x 800 | Actual catalog product image. |
| Flag design, page 14 | p14, IM124, 750 x 750 | Keep paired with its five-row table. |
| Flag design, page 15 | p15, IM127, 800 x 800 | Keep paired with its four-row table. |
| 20-type packaging composite | p16, IM130, 2001 x 1336 | Real packaging photography; scope to 20 type. |
| 12 / 14 / 16 packaging composite | p17, IM133, 2001 x 1336 | Real packaging photography; scope to these series. |

No original CAD, SVG/DXF drawing, standalone brand logo, installed-application photograph, shop-floor photograph or inspection photograph exists in the supplied project. Decorative maps, shapes and presentation headers in the PDF are not factory or customer evidence.

## Fields and assets requiring confirmation

| Issue | Treatment |
| --- | --- |
| units-p5-p6 | No explicit unit in the dimensional tables or drawings. Do not silently label these values mm. Status: TBD. |
| nominal-size | 12/14/16 are model designations. Actual D values are 11.80, 13.80 and 15.80; preserve them. Status: Resolved by exact transcription. |
| compound-size-semantics | Compound size strings have no per-axis legend. Retain the complete strings; no generic cross-family axis mapping. Status: TBD. |
| square-phi | Square type is printed as Φ20x25x140mm, 354 g. Do not remove Φ, change the value, or substitute a bearing row. Status: TBD. |
| two-flag-designs | Two visually different flag designs are both titled flag types. Keep the tables and images separate within one family. Status: TBD. |
| not-a-load-rating | weight (G) is product mass, never load capacity. Status: Resolved by labeling catalog weight. |
| no-size-interpolation | Only listed combinations exist in this data. Do not form all diameter/length combinations or adjust nonmonotonic values. Status: Resolved by discrete records. |
| certificate-use | A business-license image and a quality-system registration certificate image are present. Current authenticity, validity and publication approval are unconfirmed. Status: TBD. |
| custom-samples | Customization and design/production are supported; formal sample or engineering approval procedure is not described. Status: TBD. |
| application-assets | Text supports several applications; no real installation/application photographs were supplied. Status: TBD. |
| production-qc-assets | One factory exterior photo; no shop-floor, machining, punching, assembly or inspection photos. No testing method, inspection frequency, tolerance or result is documented. Status: TBD. |
| packaging-scope | Packaging is specified for the 20 type and 12/14/16 types only. The text does not establish units per carton, all-family packaging or export compliance. 460g must not be expanded to g/m² without confirmation. Status: TBD. |
| identity-and-contact | English company-name spacing varies. Logo file, publication-ready company name, domain and business contact have not been confirmed. Status: TBD. |
| unsupported-applications | General mechanical equipment and fabricated steel structures are buyer targets from the brief, but product-specific suitability is not established in the catalog. Status: TBD. |

All unavailable materials, material grades, tolerances, ratings, MOQ, lead time, equipment models, capacity, export-country lists, customer names, warranty and test results are represented as `TBD` internally. Public-facing copy must omit them or invite an engineering discussion; it must not render a wall of TBD cells.

Keep the original full PDF private until public contact details and certificate use are confirmed: its last page contains personal contact information. Do not make it a public Download Catalog asset by default.

## Audit validation

- Every page-5 through page-15 table was rendered and visually checked.
- Automated extraction counts matched the expected 2 / 3 / 18 / 6 / 5 / 7 / 6 / 3 / 1 / 5 / 4 rows.
- Raw strings and decimal precision were preserved.
- All 30 standalone photographs were inventoried and visually reviewed.
- Source files were read only and remain unmodified.
- No manufacturing claim was sourced from external websites.
