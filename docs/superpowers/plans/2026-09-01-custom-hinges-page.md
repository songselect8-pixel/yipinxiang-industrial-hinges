# Custom Hinges page implementation plan

1. Add contract tests for `/custom-hinges`, the exact seven explicitly customizable families, approved assets, neutral source-safe copy, RFQ labels, metadata, route boundaries and unchanged shared defaults.
2. Add `src/data/custom-hinges.ts` for page scenarios, requirement inputs, dimension guidance, workflow, comparison, manufacturing/checking evidence, RFQ checklist and FAQ source pages.
3. Build page-specific components for the hero/content, product-family grid and custom RFQ. Reuse `Header`, `Footer`, `ProductCard`, `SupportingVisual`, `SectionHeading`, `Arrow`, `InquiryProvider` and `RFQForm`.
4. Add `/custom-hinges` metadata, canonical support and BreadcrumbList JSON-LD. Extend navigation state and optional form labels without changing existing defaults or styles.
5. Add one route stylesheet using the locked colors, type scale, square controls, fine dividers, paper/white sections and final navy RFQ hierarchy.
6. Run the isolated tests, full suite, TypeScript and production build.
7. Audit production output at 1440, 1024, 768 and 390px for image integrity, product-card layout, technical drawing containment, workflow, comparison overflow, upload prominence, navigation, RFQ spacing and page overflow.
8. Record QA evidence and revalidate all existing lock manifests. Do not create Manufacturing, Quality, About or Contact pages.
