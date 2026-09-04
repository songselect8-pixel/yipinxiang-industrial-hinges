import { getFamily, getVariants, type CatalogVariant } from "./catalog.ts";
import { packagingRecords } from "./manufacturing.ts";
import { getProduct, type ProductImage } from "./products.ts";

export type QualitySourceRecord = {
  title: string;
  description: string;
  sourcePages: readonly number[];
};

export type QualityProductExample = {
  productId: string;
  name: string;
  structure: string;
  sourcePage: number;
  image: string;
  imageAlt: string;
  drawing: ProductImage | null;
  href: string;
  reference: {
    labels: readonly string[];
    values: readonly string[];
    note: string;
  };
};

export const qualityApproach = [
  { title: "Dimensional Checking", description: "Published dimensions or confirmed requirement dimensions can provide a reference for checking.", sourcePages: [5, 7, 12, 18] },
  { title: "Specification Verification", description: "The applicable product record and drawing help identify which dimensions belong to a hinge family.", sourcePages: [5, 7, 12] },
  { title: "In-Process Inspection", description: "The catalog describes tools developed to support checks during production.", sourcePages: [18] },
  { title: "Production Consistency", description: "Standardized turnover, mass assembly and in-process checking support organized production handling.", sourcePages: [3, 18] },
  { title: "Packaging Preparation", description: "The catalog lists standardized packaging and documents separate packing examples for named product series.", sourcePages: [3, 16, 17] },
] as const satisfies readonly QualitySourceRecord[];

export const dimensionalReferences = [
  { title: "Overall Length", description: "Use the printed length value or the complete size string where the family publishes one.", sourcePages: [5, 7, 12] },
  { title: "Diameter / Profile Size", description: "Use the exact D, diameter or compound profile notation published for the selected family.", sourcePages: [5, 7, 12] },
  { title: "Pin-Related Dimensions", description: "Review pin-related symbols only where they appear in the original family reference.", sourcePages: [5] },
  { title: "Key Drawing Dimensions", description: "Keep the original symbols and decimal precision when referring to a catalog drawing.", sourcePages: [5, 7] },
  { title: "Product Structure", description: "Confirm the named configuration, such as the separate 20-A and 20-B end forms.", sourcePages: [5] },
] as const satisfies readonly QualitySourceRecord[];

export const inProcessChecks = [
  { title: "Check Key Dimensions", description: "Compare the relevant published or confirmed dimensions for the named product family.", sourcePages: [5, 7, 12, 18] },
  { title: "Compare Product Structure", description: "Use the selected configuration and available reference image or drawing during review.", sourcePages: [5, 7, 12, 18] },
  { title: "Identify Visible Inconsistencies", description: "Production-stage checking can support review of visible differences against the available requirement.", sourcePages: [18] },
  { title: "Confirm Available Requirements", description: "A drawing, dimensions and reference product can clarify what needs to be checked for a requirement.", sourcePages: [18] },
] as const satisfies readonly QualitySourceRecord[];

export const consistencyAreas = [
  { title: "Standardized Turnover", description: "Listed as part of the factory’s production organization.", sourcePages: [3] },
  { title: "Mass Assembly", description: "Listed as a production and assembly capability.", sourcePages: [3] },
  { title: "In-Process Checking", description: "The catalog describes tools developed to support checks during production.", sourcePages: [18] },
  { title: "Standardized Packaging", description: "Listed at company level, with two product-series examples documented separately.", sourcePages: [3, 16, 17] },
] as const satisfies readonly QualitySourceRecord[];

export const practicalReviewPoints = [
  { title: "Product Structure", description: "Compare the named hinge configuration with the available product reference.", sourcePages: [5, 7, 12, 18] },
  { title: "Visible Surface Condition", description: "Use practical visual review to note visible differences for requirement discussion.", sourcePages: [18] },
  { title: "Assembly Condition", description: "Review the assembled structure where it is relevant to the hinge configuration.", sourcePages: [7, 12, 18] },
  { title: "Key Dimensions", description: "Use the dimensions that are printed for the family or confirmed for the requirement.", sourcePages: [5, 7, 12, 18] },
  { title: "Packaging Readiness", description: "Confirm the applicable packing requirement before the products move to packing preparation.", sourcePages: [3, 16, 17] },
] as const satisfies readonly QualitySourceRecord[];

function requireFamily(id: string) {
  const family = getFamily(id);
  if (!family) throw new Error(`Missing audited family: ${id}`);
  return family;
}

function requireProduct(id: string) {
  const product = getProduct(id);
  if (!product) throw new Error(`Missing audited product: ${id}`);
  return product;
}

function requireVariant(id: string, index = 0): CatalogVariant {
  const variant = getVariants(id)[index];
  if (!variant) throw new Error(`Missing audited catalog record: ${id}`);
  return variant;
}

const bearingFamily = requireFamily("bearing");
const bearingProduct = requireProduct("bearing");
const bearingReference = requireVariant("bearing");
const type20Family = requireFamily("20-type");
const type20Product = requireProduct("20-type");
const type20Reference = requireVariant("20-type");
const adjustableFamily = requireFamily("adjustable");
const adjustableProduct = requireProduct("adjustable");
const adjustableReference = requireVariant("adjustable");

if (!type20Reference.parameters) throw new Error("20 Type reference parameters are missing");

export const qualityProductExamples: readonly QualityProductExample[] = [
  {
    productId: "bearing",
    name: "Bearing Type Weld-On Hinges",
    structure: bearingProduct.structure,
    sourcePage: bearingReference.page,
    image: bearingFamily.image,
    imageAlt: bearingFamily.imageAlt,
    drawing: bearingProduct.drawing,
    href: bearingProduct.detailPath,
    reference: {
      labels: ["Size", "Weight (G)"],
      values: [bearingReference.size, bearingReference.weightG],
      note: "Representative published record. View all 18 catalog records on the product page.",
    },
  },
  {
    productId: "20-type",
    name: "20 Type Weld-On Hinges",
    structure: type20Product.structure,
    sourcePage: type20Reference.page,
    image: type20Family.image,
    imageAlt: type20Family.imageAlt,
    drawing: type20Product.drawing,
    href: type20Product.detailPath,
    reference: {
      labels: ["Type", "D", "D-1", "L", "d", "L-1", "c", "L-2"],
      values: [
        type20Reference.model,
        type20Reference.parameters.D,
        type20Reference.parameters["D-1"],
        type20Reference.parameters.L,
        type20Reference.parameters.d,
        type20Reference.parameters["L-1"],
        type20Reference.parameters.c,
        type20Reference.parameters["L-2"],
      ],
      note: "Values are shown exactly as printed. The original table does not print a unit.",
    },
  },
  {
    productId: "adjustable",
    name: "Adjustable Weld-On Hinges",
    structure: adjustableProduct.structure,
    sourcePage: adjustableReference.page,
    image: adjustableFamily.image,
    imageAlt: adjustableFamily.imageAlt,
    drawing: adjustableProduct.drawing,
    href: adjustableProduct.detailPath,
    reference: {
      labels: ["Size", "Weight (G)"],
      values: [adjustableReference.size, adjustableReference.weightG],
      note: "Representative published record. View the three catalog sizes on the product page.",
    },
  },
];

const numberedSeriesProduct = requireProduct("12-14-16-type");

export const technicalDrawingReferences = [
  {
    productId: type20Product.id,
    name: type20Product.name,
    href: type20Product.detailPath,
    drawing: type20Product.drawing!,
    description: "The original catalog composite organizes the 20-A and 20-B photographs with D, D-1, L, d, L-1, c and L-2 reference symbols.",
  },
  {
    productId: numberedSeriesProduct.id,
    name: numberedSeriesProduct.name,
    href: numberedSeriesProduct.detailPath,
    drawing: numberedSeriesProduct.drawing!,
    description: "The original 12 / 14 / 16 Type reference keeps the published models and dimensional symbols together.",
  },
] as const;

export const qualityPackaging = packagingRecords;

export const qualityComparison = [
  {
    label: "Standard Product",
    title: "Reference published catalog dimensions",
    description: "Start with the named hinge family, catalog record and original dimensional reference where one is available.",
    sourcePages: [5, 7, 12],
  },
  {
    label: "Custom Requirement",
    title: "Reference confirmed customer dimensions / drawing",
    description: "Provide the required dimensions, drawing, reference product or image, application and quantity for requirement discussion.",
    sourcePages: [18],
  },
] as const;

export const qualityFaqs = [
  {
    question: "How are hinge dimensions checked?",
    answer: "The catalog describes tools developed to support checks during production. Published catalog dimensions or confirmed requirement dimensions can provide the relevant reference for the selected hinge family.",
    sourcePages: [5, 7, 12, 18],
  },
  {
    question: "Do you use product drawings during production?",
    answer: "Original catalog drawings organize reference symbols for the families where drawings are published. Confirm which drawing and dimensions apply to your selected product or requirement.",
    sourcePages: [5, 7],
  },
  {
    question: "How are custom dimensions communicated?",
    answer: "Send the required dimensions, technical drawing and a reference product or image. Add the application and quantity so the requirement can be reviewed and confirmed before production is discussed.",
    sourcePages: [18],
  },
  {
    question: "Are different hinge types checked differently?",
    answer: "Different product families publish different size formats, structures and reference symbols. The applicable checking reference therefore depends on the named hinge family and confirmed requirement.",
    sourcePages: [5, 7, 12, 18],
  },
  {
    question: "Can I send my own technical drawing?",
    answer: "Yes. A drawing can communicate dimensions and the requested structure for discussion. The local RFQ preview can select a file, but it does not upload or send the file.",
    sourcePages: [18],
  },
  {
    question: "How are products prepared before shipment?",
    answer: "The catalog lists standardized packaging and documents separate methods for the 20 Type and 12 / 14 / 16 Type series. Confirm the applicable packing requirement with the product family.",
    sourcePages: [3, 16, 17],
  },
] as const;
