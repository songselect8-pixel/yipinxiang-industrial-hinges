import { resourcePublisher } from "../publishing.ts";
import { resourceLink, type ResourceArticle } from "../types.ts";

export const chooseWeldOnHinges = {
  slug: "how-to-choose-weld-on-hinges",
  order: 1,
  title: "How to Choose a Weld-On Hinge for an Industrial Application",
  description: "A practical, catalog-based process for comparing weld-on hinge families by application, structure, published dimensions and drawing requirements.",
  category: "selection-guides",
  publishedAt: "2026-09-02",
  updatedAt: null,
  author: resourcePublisher.name,
  featuredImage: "/images/hinge-pin-hero.jpg",
  featuredImageAlt: "Close view of real pin-type industrial weld-on hinges on a neutral metal surface",
  featuredImageWidth: 5252,
  featuredImageHeight: 3505,
  keywords: ["choose weld-on hinge", "industrial hinge selection", "weld-on hinge dimensions", "hinge drawing request"],
  relatedProducts: ["bearing", "pin", "gasket", "grease-nipple", "20-type", "12-14-16-type", "round", "adjustable", "square", "flag"],
  relatedApplications: ["steel-doors", "control-cabinets", "gates", "trailer-doors", "ramps"],
  relatedArticles: ["weld-on-hinge-sizes", "weld-on-hinges-for-gates-trailer-doors-and-ramps", "weld-on-hinges-for-electrical-control-cabinets"],
  draft: false,
  noindex: false,
  featured: true,
  introduction: "Industrial hinge selection starts with the structure you are building, then moves to the exact catalog profile and dimensions. This guide organizes that conversation without assuming that a visually similar hinge will fit the same requirement.",
  content: [
    { type: "heading", level: 2, id: "start-with-application", title: "Start with the application and installation" },
    { type: "paragraph", content: ["First describe where the hinge will be welded and how the joined parts are arranged. The catalog associates the water-drop shaped hinge group with indoor and outdoor carbon steel doors, switch cabinets, control cabinets, network cabinets and other industrial cabinets. It separately associates the 12 / 14 / 16 type series with gates, trailer doors and ramps. These relationships provide a useful starting point, but the final choice still depends on the buyer’s required geometry and dimensions."] },
    { type: "paragraph", content: ["Record the application in plain technical language: for example, a control cabinet door, a fabricated gate or a trailer door. Note the mounting position, the number of hinges being considered and any space restriction around the weld area. If an existing hinge is being replaced, photographs of both the installed hinge and the surrounding steelwork can help explain the arrangement. A photograph should support a dimensioned request; it should not replace one."] },
    { type: "callout", label: "Selection principle", content: ["Treat the application relationship as a way to narrow the catalog, then confirm the actual profile, model and published dimensions before requesting a quote."] },

    { type: "heading", level: 2, id: "compare-structures", title: "Compare the available hinge structures" },
    { type: "paragraph", content: ["The catalog contains several families that can look similar at first glance. The water-drop shaped group includes bearing, pin, gasket and grease-nipple constructions, as well as the 20 type series. Other catalog families include round, adjustable, square and flag hinges. The 12-A, 14-A and 16-A entries form a separate numbered series. These names describe catalog families or visible constructions; they should not be substituted for dimensions."] },
    { type: "list", items: [
      ["Use the family name to identify the general construction shown in the catalog."],
      ["Use the model or exact size notation to identify a published entry within that family."],
      ["Use the original drawing symbols and values when confirming the required geometry."],
      ["Ask for review when a desired structure does not correspond to a published catalog entry."],
    ] },
    { type: "paragraph", content: ["For example, the 20 type family contains 20-A with chamfered ends and 20-B with right-angle ends. That distinction is visible and explicitly stated in the catalog. By contrast, a difference that appears only in a photograph should not be converted into a new product claim. The safest RFQ identifies the catalog family and then supplies the exact required values."] },
    { type: "product-table", productIds: ["bearing", "pin", "gasket", "grease-nipple", "20-type", "12-14-16-type", "round", "adjustable", "square", "flag"], title: "Catalog families to compare", description: "Review the structure and exact published examples for each product family. The examples are not presented as a continuous range.", display: "catalog-examples" },

    { type: "heading", level: 2, id: "confirm-dimensions", title: "Confirm diameter, length and catalog notation" },
    { type: "paragraph", content: ["Diameter and length are central to a hinge request, but the catalog does not use one identical format for every family. Some entries show a simple size string and published weight. Numbered series use model names and drawing parameters. Compound size strings must remain in their original order. Do not convert a model name such as 12-A into a nominal diameter, and do not replace the catalog’s 11.80 D value with the model number."] },
    { type: "paragraph", content: ["When reviewing the ", resourceLink("published size guide", "/resources/weld-on-hinge-sizes"), ", copy the notation exactly. Include the unit only when it is shown or otherwise confirmed. The 20 type and 12 / 14 / 16 type dimensional tables do not print a unit, so their values should be repeated as catalog values rather than silently labeled. Published product weight is product mass for that catalog entry; it is not a basis for deciding whether a hinge suits an application."] },
    { type: "list", ordered: true, items: [
      ["Choose the relevant catalog family and model, if a model is printed."],
      ["Copy each required dimension with its original symbol and decimal places."],
      ["Mark any buyer-supplied dimension separately from catalog data."],
      ["Request technical confirmation when the requirement cannot be matched directly."],
    ] },

    { type: "heading", level: 2, id: "prepare-rfq", title: "Prepare an RFQ that can be reviewed accurately" },
    { type: "paragraph", content: ["A useful RFQ connects commercial context with technical evidence. Include the company name, destination country or region, required quantity, application and product family. Then add the dimensions, drawing and any reference photographs. If the requirement is based on a catalog entry, name that entry. If it is based on an existing part, show how each measurement was taken."] },
    { type: "paragraph", content: ["Avoid asking the supplier to identify a hinge from a cropped photograph alone. Similar profiles can belong to different families, and the catalog records must not be merged. A dimensioned sketch with a front view and side view is often clearer than a long written description. Use arrows and labels consistently, and state which values are fixed requirements and which remain open for review. The guide on ", resourceLink("preparing a drawing or dimension request", "/resources/prepare-hinge-drawing-dimension-request"), " provides a checklist."] },
    { type: "comparison-table", caption: "Information to include in a hinge selection request", columns: ["Information", "Why it matters", "Safe way to provide it"], rows: [
      ["Application", "Narrow the catalog context", "Name the door, gate, ramp, cabinet or enclosure"],
      ["Family / model", "Identify the source record", "Use the exact catalog name or model"],
      ["Dimensions", "Compare geometry", "Copy symbols and values without rounding"],
      ["Drawing / photos", "Clarify the installation", "Label buyer dimensions and show surrounding structure"],
      ["Quantity", "Prepare the commercial request", "State the estimated requirement for review"],
    ], note: "Missing product facts should remain open for confirmation instead of being inferred from appearance." },

    { type: "heading", level: 2, id: "when-custom-review", title: "Know when to request custom review" },
    { type: "paragraph", content: ["A standard catalog entry is the clearest starting point when its structure and dimensions match the requirement. Custom review becomes relevant when the required length, profile or construction is different. The catalog explicitly states customization support for the round, pin, gasket, grease-nipple, adjustable, square and flag families. That statement supports a requirements discussion; it does not define every possible change or promise a particular production route."] },
    { type: "paragraph", content: ["Send the desired dimensions or technical drawing for requirement and specification confirmation. The review can determine whether a listed entry is appropriate or whether the request needs separate discussion. Keep unknown points visible rather than filling them with assumptions. This approach protects the link between the buyer’s requirement, the catalog family, the technical record and the resulting RFQ."] },
  ],
  keyTakeaways: [
    "Start with the source-supported application relationship, then verify the exact catalog family and geometry.",
    "Keep model names, dimension symbols, decimal values and units exactly as published.",
    "Use drawings and labeled photographs to explain the installation; do not select from appearance alone.",
    "Request separate technical review when a standard catalog entry does not match the required structure or dimensions.",
  ],
} satisfies ResourceArticle;
