import { resourcePublisher } from "../publishing.ts";
import { resourceLink, type ResourceArticle } from "../types.ts";

export const weldOnHingeSizes = {
  slug: "weld-on-hinge-sizes",
  order: 2,
  title: "Weld-On Hinge Sizes: Understanding Diameter and Length",
  description: "Learn how to read weld-on hinge diameter, length, compound size strings, model names and drawing parameters without changing catalog notation.",
  category: "technical-guides",
  publishedAt: "2026-09-02",
  updatedAt: null,
  author: resourcePublisher.name,
  featuredImage: "/images/drawing-bearing-reference.png",
  featuredImageAlt: "Original bearing hinge catalog reference drawing with dimension symbols and section views",
  featuredImageWidth: 825,
  featuredImageHeight: 864,
  keywords: ["weld-on hinge sizes", "hinge diameter and length", "industrial hinge dimensions", "hinge catalog notation"],
  relatedProducts: ["bearing", "pin", "gasket", "grease-nipple", "20-type", "12-14-16-type", "round", "adjustable", "square", "flag"],
  relatedApplications: [],
  relatedArticles: ["how-to-choose-weld-on-hinges", "prepare-hinge-drawing-dimension-request", "standard-vs-custom-weld-on-hinges"],
  draft: false,
  noindex: false,
  featured: false,
  introduction: "A hinge size is more than a single number. The catalog uses several formats, so buyers should preserve the exact family, model, symbols, values and units that belong to each record.",
  content: [
    { type: "heading", level: 2, id: "size-is-family-specific", title: "Read size within the correct product family" },
    { type: "paragraph", content: ["Industrial weld-on hinges often share a compact cylindrical or water-drop appearance, but their size records are family-specific. A diameter and length copied from one family cannot be assigned to another family simply because the products look alike. Begin with the family name, source page and product photograph or drawing. Then read the values attached to that record."] },
    { type: "paragraph", content: ["The catalog contains simple diameter-by-length entries, compound size strings and numbered models with parameter tables. Bearing, pin, round and several other families list their available entries differently. The 20 type family separates 20-A and 20-B structures, while the 12 / 14 / 16 type family uses 12-A, 14-A and 16-A model names. Each format must be retained in the data rather than converted into a new common format."] },
    { type: "callout", label: "Source rule", content: ["Copy a published size as a complete record: family, model when present, notation, unit when present, weight when present and source page."] },

    { type: "heading", level: 2, id: "diameter-and-length", title: "Understand diameter and length fields" },
    { type: "paragraph", content: ["For entries shown in a diameter-by-length format, the first and second values describe different directions and should remain in that order. A supplier still needs to confirm how the buyer’s own drawing labels those directions. If a worn existing part is being measured, show the measurement position in a photograph or sketch. A bare pair of numbers can be ambiguous when it is separated from the family and view."] },
    { type: "paragraph", content: ["Some catalog records include a published weight in grams. That value belongs to the listed product entry. It should not be used to infer suitability for a door, gate, cabinet or other structure. Application selection requires the relevant hinge construction and installation information. The catalog does not publish a performance figure that would replace that review."] },
    { type: "product-table", productIds: ["bearing", "pin", "gasket", "grease-nipple", "round", "adjustable", "square", "flag"], title: "Family-specific size examples", description: "The table shows exact catalog examples so the different notation styles can be compared. Examples do not imply intermediate available sizes.", display: "catalog-examples" },

    { type: "heading", level: 2, id: "models-are-not-diameters", title: "Do not treat model names as measured diameters" },
    { type: "paragraph", content: ["The 12-A, 14-A and 16-A names are model designations. In the catalog drawing table, their D values are 11.80, 13.80 and 15.80 respectively. Replacing those printed D values with 12, 14 and 16 would change the technical data. The model name and the D parameter must therefore occupy separate fields in a request or database."] },
    { type: "paragraph", content: ["The same care applies to the 20-A and 20-B labels. They distinguish the two end structures: chamfered ends for 20-A and right-angle ends for 20-B. The label is not a substitute for the accompanying dimensional parameters. A request should state both the model and the values being referenced."] },
    { type: "image", src: "/images/drawing-12-14-16-type.png", alt: "Original catalog image and technical drawing for the 12-A, 14-A and 16-A hinge models", width: 546, height: 958, caption: "Original catalog reference. Model designations and printed D values are kept separate.", evidence: "catalog-drawing" },

    { type: "heading", level: 2, id: "units-decimals-symbols", title: "Preserve units, decimals and drawing symbols" },
    { type: "paragraph", content: ["Do not silently add a unit where the source table does not print one. The 20 type and 12 / 14 / 16 type dimensional tables are presented without a printed unit. Their values can be described as published catalog values and confirmed during the inquiry. Other entries explicitly use millimetres; those units can be shown as published."] },
    { type: "paragraph", content: ["Decimal places are also part of the source record. Keep 11.80 as 11.80 rather than 11.8, and do not round it to 12. Drawing symbols such as D, D-1, L, d, L-1, c and L-2 identify specific positions in the original reference. If a buyer uses a different symbol system, provide a marked-up drawing that maps the buyer’s symbols to the intended locations instead of rewriting the original drawing."] },
    { type: "comparison-table", caption: "Catalog notation checks", columns: ["Item", "Keep", "Avoid"], rows: [
      ["Model", "12-A, 14-A, 16-A, 20-A or 20-B as printed", "Converting the model into a measured value"],
      ["Decimal value", "All printed decimal places", "Rounding or simplifying"],
      ["Unit", "The source unit when printed", "Adding an unconfirmed unit"],
      ["Compound string", "The complete string in original order", "Splitting or reordering without a drawing"],
      ["Weight", "Published mass for the listed entry", "Using mass as an application decision"],
    ] },

    { type: "heading", level: 2, id: "submit-size-request", title: "Submit a size request that can be checked" },
    { type: "paragraph", content: ["A clear request identifies the catalog family and then lists the needed values line by line. Include a drawing or sketch when a compound size string is involved. If you are matching an existing component, state whether each value comes from the catalog, a new design drawing or a physical measurement. That distinction makes discrepancies easier to find."] },
    { type: "list", ordered: true, items: [
      ["Name the product family and catalog model, if present."],
      ["Copy the full published size or parameter set exactly."],
      ["Attach the original or buyer-supplied drawing with measurement positions marked."],
      ["Describe the application and estimated quantity for inquiry context."],
      ["Leave unconfirmed fields open and request specification confirmation."],
    ] },
    { type: "paragraph", content: ["For a broader selection workflow, read ", resourceLink("how to choose a weld-on hinge", "/resources/how-to-choose-weld-on-hinges"), ". If the required dimensions do not match a standard entry, compare the ", resourceLink("standard and custom request paths", "/resources/standard-vs-custom-weld-on-hinges"), " before sending the RFQ."] },
  ],
  keyTakeaways: [
    "A size record belongs to one product family and source page; do not merge values across families.",
    "Model names and measured drawing parameters are separate fields.",
    "Retain printed decimal places, symbols, compound notation and units exactly as sourced.",
    "Published product weight is mass for the listed entry, not an application-selection figure.",
  ],
} satisfies ResourceArticle;
