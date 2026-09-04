# Product detail publication map

Internal implementation reference. The catalog page, image, drawing, specification and packaging columns must remain associated with the same family. The machine-readable authority is `product-family-source-manifest.json`; exact rows remain in `src/data/catalog-variants.ts`.

| Product family | Public route | Technical source | Product image(s) | Original technical drawing | Published specifications | Published packaging |
| --- | --- | ---: | --- | --- | --- | --- |
| Bearing Type | `/products/bearing-weld-on-hinges` | p7 | `hinge-bearing.jpg`; `hinge-bearing-detail.jpg` | `drawing-bearing-reference.png`, p7; same catalog reference also appears on p5 | 18 exact size / weight records | None for this family; the page labels p16/p17 photographs as other-series examples |
| 20 Type | `/products/20-type-weld-on-hinges` | p5 | `drawing-20-type.png`, original product/drawing composite | Same original p5 composite | 20-A and 20-B; exact D / D-1 / L / d / L-1 / c / L-2 values; unit not printed | p16, 20 Type only |
| 12 / 14 / 16 Type | `/products/12-14-16-type-weld-on-hinges` | p6 | `drawing-12-14-16-type.png`, original product/drawing composite | Same original p6 composite | 12-A, 14-A and 16-A; exact D / D-1 / L / d / L-1 values; unit not printed | p17, 12 / 14 / 16 Type only |
| Round Type | `/products/round-weld-on-hinges` | p8 | `hinge-round.jpg` | None published | 6 exact size / weight records | None published for this family |
| Pin Type | `/products/pin-weld-on-hinges` | p9 | `hinge-pin-hero.jpg`; `hinge-pin.jpg` | None published | 5 exact size / weight records | None published for this family |
| Gasket Type | `/products/gasket-weld-on-hinges` | p10 | `hinge-gasket.jpg` | None published | 7 exact size / weight records | None published for this family |
| Grease Nipple Type | `/products/grease-nipple-weld-on-hinges` | p11 | `hinge-grease-nipple.jpg` | None published | 6 exact size / weight records | None published for this family |
| Adjustable Type | `/products/adjustable-weld-on-hinges` | p12 | `hinge-adjustable.jpg` | None published | 3 exact size / weight records; no adjustment range published | None published for this family |
| Square Type | `/products/square-weld-on-hinges` | p13 | `hinge-square.jpg` | None published | 1 exact size / weight record; printed Φ retained | None published for this family |
| Flag Type | `/products/flag-weld-on-hinges` | p14 and p15 | `hinge-flag.jpg` remains with p14; `hinge-flag-leaf.jpg` remains with p15 | None published | p14 design: 5 records; p15 design: 4 records; displayed as separate tables | None published for this family |

## Scope rules

- Water-drop family application context from p4 is used only for Bearing, 20 Type, Pin, Gasket and Grease Nipple pages.
- Gates, trailer doors and ramps from p6 are used only for the 12 / 14 / 16 Type page.
- Round, Adjustable, Square and Flag pages omit a family-specific Applications section because the catalog does not establish one.
- Explicit family customization statements come from p8–p15. Bearing, 20 Type and 12 / 14 / 16 use only the general custom-development invitation from p18.
- No source drawing is created for a family whose manifest drawing is `null`.
- No p16 or p17 packaging method is assigned to any unrelated family.
- Unmatched oil-hole and accessory photographs remain excluded from the published product data.
