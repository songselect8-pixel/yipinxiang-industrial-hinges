import { getProduct } from "./products.ts";

export const customProductIds = ["round", "pin", "gasket", "grease-nipple", "adjustable", "square", "flag"] as const;
export type CustomProductId = (typeof customProductIds)[number];

export const customProductSourcePages: Readonly<Record<CustomProductId, readonly number[]>> = {
  round: [8],
  pin: [9],
  gasket: [10],
  "grease-nipple": [11],
  adjustable: [12],
  square: [13],
  flag: [14, 15],
};

// Fail at module load if a future product-data edit separates a family from its
// reviewed customization source. This page must not infer support by appearance.
export const customProducts = customProductIds.map((id) => {
  const product = getProduct(id);
  if (!product?.customization) throw new Error(`Missing explicit customization source for ${id}`);
  const expected = customProductSourcePages[id];
  if (product.customization.sourcePages.join(",") !== expected.join(",")) throw new Error(`Customization source mismatch for ${id}`);
  return product;
});

export const customScenarios = [
  { title: "Different hinge dimensions", description: "A required size is not listed in the published catalog table." },
  { title: "Different profile or structure", description: "The installation calls for another hinge form or configuration." },
  { title: "Application mounting geometry", description: "Available mounting space or the door-edge arrangement changes the requirement." },
  { title: "Existing customer drawing", description: "A drawing already defines the dimensions or structure to be reviewed." },
  { title: "Existing hinge reference", description: "A product photograph or physical configuration provides a starting reference." },
  { title: "Special dimensional requirement", description: "One or more relevant dimensions need review before quotation." },
] as const;

export const requirementInputs = [
  { title: "Technical Drawing", description: "Send the drawing you have, including available dimensions and reference symbols." },
  { title: "Required Dimensions", description: "List the overall size and any dimensions that affect installation or fit." },
  { title: "Reference Product / Photo", description: "Use a catalog family, existing hinge or clear photograph as a visual reference." },
  { title: "Application Information", description: "Explain where the hinge will be installed and the surrounding door or frame structure." },
  { title: "Estimated Quantity", description: "Include the expected quantity so the requirement can be reviewed for quotation." },
] as const;

export const dimensionInputs = [
  { title: "Overall Length", description: "Share the complete hinge length required for the installation." },
  { title: "Diameter / Profile Size", description: "Identify the body diameter or the relevant profile dimension." },
  { title: "Pin Diameter", description: "Include the pin dimension when it is part of the required configuration." },
  { title: "Hinge Structure", description: "Show how the hinge bodies, pin and any relevant structural parts are arranged." },
  { title: "Mounting Geometry", description: "Provide door, frame and available mounting-space information where possible." },
  { title: "Relevant Special Dimensions", description: "Mark any additional dimension that is important to fit or installation." },
] as const;

export const customWorkflow = [
  { title: "Requirement Review", description: "Send the drawing, dimensions, application and estimated quantity for review.", sourcePages: [18] },
  { title: "Drawing / Information Review", description: "Review the supplied drawing, dimensions, application and available reference information.", sourcePages: [18] },
  { title: "Requirement / Specification Confirmation", description: "Confirm the requirement and specification information before production is discussed.", sourcePages: [18] },
  { title: "Manufacturing", description: "Production proceeds from the requirement that has been confirmed.", sourcePages: [18] },
  { title: "Inspection", description: "Use the confirmed dimensions and checking requirements during production.", sourcePages: [18] },
  { title: "Packaging & Shipment", description: "Prepare the applicable packaging and shipment arrangement for the order.", sourcePages: [3, 16, 17, 18] },
] as const;

export const customComparison = [
  { criterion: "Dimensions", standard: "Published catalog dimensions", custom: "Required dimensions sent for review" },
  { criterion: "Structure", standard: "Existing catalog structure", custom: "Different structure or configuration discussed" },
  { criterion: "Starting information", standard: "Known family and catalog size", custom: "Drawing, dimensions, photograph or application" },
  { criterion: "Selection approach", standard: "Compare published family records", custom: "Review the supplied requirement before quotation" },
  { criterion: "Quotation information", standard: "Type, size, quantity and application", custom: "Dimensions, structure, quantity, application and available files" },
] as const;

export const manufacturingCapabilities = [
  { title: "Self-owned equipment", sourcePages: [3] },
  { title: "Lathe processing", sourcePages: [3] },
  { title: "Automatic punching", sourcePages: [3] },
  { title: "Mass assembly", sourcePages: [3] },
  { title: "Standardized packaging", sourcePages: [3, 16, 17] },
] as const;

export const qualityPoints = [
  { title: "Dimensional checking", description: "Use confirmed dimensions as a reference for product checking." },
  { title: "In-process inspection", description: "Product checking tools are used during production." },
  { title: "Production consistency", description: "Clear, confirmed specifications provide a common production reference." },
] as const;

export const customRfqChecklist = [
  "Application",
  "Reference hinge type, if known",
  "Required dimensions",
  "Technical drawing, if available",
  "Reference image, if available",
  "Estimated quantity",
  "Important structural requirement",
] as const;

export const customFaqs = [
  { question: "Can I send my own hinge drawing?", answer: "Yes. Send the drawing and available dimensions for review. The requested configuration still needs confirmation before quotation.", sourcePages: [18] },
  { question: "What information should I include with my inquiry?", answer: "Include the application, required dimensions, hinge structure or reference, estimated quantity and any drawing or photograph you have.", sourcePages: [18] },
  { question: "What if I do not know the exact hinge model?", answer: "Send the dimensions, application and a reference image where available. The information can be reviewed against the published range before a configuration is discussed.", sourcePages: [18] },
  { question: "Can I request a different size from the catalog?", answer: "The catalog identifies customization support for the families shown on this page. Send the required dimensions for review; an unlisted configuration is not confirmed until it has been assessed.", sourcePages: [8, 9, 10, 11, 12, 13, 14, 15] },
  { question: "Can I send a reference hinge photo?", answer: "Yes. A clear JPG or PNG can provide a visual reference alongside the required dimensions and application information in this website preview.", sourcePages: [18] },
] as const;
