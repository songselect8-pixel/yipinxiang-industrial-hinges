import { catalogVariants } from "./catalog-variants.ts";

export { catalogVariants };
export type { CatalogVariant } from "./catalog-variants.ts";

export type CatalogFamily = {
  id: string;
  name: string;
  shortName: string;
  profile: string;
  description: string;
  image: string;
  imageAlt: string;
  application: string | "TBD";
  page: number;
};

export const families: readonly CatalogFamily[] = [
  {
    id: "bearing",
    name: "Bearing Weld-On Hinges",
    shortName: "Bearing type",
    profile: "Water-drop profile",
    description: "A water-drop profile with a bearing assembly. Explore the catalog’s listed size combinations.",
    image: "/images/hinge-bearing.jpg",
    imageAlt: "Water-drop bearing hinges, showing the bearing assembly and separated hinge pin",
    application: "Steel doors & industrial cabinets · family-level catalog use",
    page: 7,
  },
  {
    id: "pin",
    name: "Pin Type Weld-On Hinges",
    shortName: "Pin type",
    profile: "Water-drop profile",
    description: "A separable pin construction in a water-drop profile, with five catalog size combinations.",
    image: "/images/hinge-pin.jpg",
    imageAlt: "Assembled and separated pin-type water-drop weld-on hinges",
    application: "Steel doors & industrial cabinets · family-level catalog use",
    page: 9,
  },
  {
    id: "grease-nipple",
    name: "Grease Nipple Weld-On Hinges",
    shortName: "Grease nipple type",
    profile: "Lubrication fitting",
    description: "Weld-on hinges with an integrated grease fitting. Six sizes are listed in the catalog.",
    image: "/images/hinge-grease-nipple.jpg",
    imageAlt: "Two weld-on hinges with visible grease nipple fittings",
    application: "Steel doors & industrial cabinets · family-level catalog use",
    page: 11,
  },
  {
    id: "round",
    name: "Round Weld-On Hinges",
    shortName: "Round type",
    profile: "Cylindrical profile",
    description: "A round weld-on profile with six listed sizes. Custom requirements can also be discussed.",
    image: "/images/hinge-round.jpg",
    imageAlt: "Round weld-on hinge with its pin and hinge body separated",
    application: "TBD",
    page: 8,
  },
  {
    id: "adjustable",
    name: "Adjustable Weld-On Hinges",
    shortName: "Adjustable type",
    profile: "Adjustable construction",
    description: "An adjustable hinge configuration with three catalog sizes. Confirm the adjustment requirement with us.",
    image: "/images/hinge-adjustable.jpg",
    imageAlt: "Adjustable weld-on hinge with a visible adjustment screw, from the product catalog",
    application: "TBD",
    page: 12,
  },
  {
    id: "flag",
    name: "Flag Hinges",
    shortName: "Flag type",
    profile: "Two catalog designs",
    description: "Two distinct flag hinge designs, each with its own photograph and catalog size table.",
    image: "/images/hinge-flag.jpg",
    imageAlt: "Flag hinge with weld-on leaves and separated pin, catalog page 14 design",
    application: "TBD",
    page: 14,
  },
  {
    id: "gasket",
    name: "Gasket Type Weld-On Hinges",
    shortName: "Gasket type",
    profile: "Gasket construction",
    description: "A water-drop hinge with a visible gasket or washer between the hinge bodies.",
    image: "/images/hinge-gasket.jpg",
    imageAlt: "Gasket-type water-drop hinge with the washer and pin visible",
    application: "Steel doors & industrial cabinets · family-level catalog use",
    page: 10,
  },
  {
    id: "20-type",
    name: "20 Type Weld-On Hinges",
    shortName: "20 type",
    profile: "Chamfered or square ends",
    description: "20-A has chamfered ends; 20-B has right-angle ends. Both share the same published dimensions.",
    image: "/images/drawing-20-type.png",
    imageAlt: "Original 20-A and 20-B catalog photograph and dimensional reference drawings",
    application: "Steel doors & industrial cabinets · family-level catalog use",
    page: 5,
  },
  {
    id: "12-14-16-type",
    name: "12 / 14 / 16 Type Weld-On Hinges",
    shortName: "12 / 14 / 16 type",
    profile: "Three catalog models",
    description: "The 12-A, 14-A and 16-A catalog series, with original dimensional values and a reference drawing.",
    image: "/images/drawing-12-14-16-type.png",
    imageAlt: "Original catalog photograph and dimensional drawing for the 12, 14 and 16 type series",
    application: "Gates, trailer doors & ramps · catalog p6",
    page: 6,
  },
  {
    id: "square",
    name: "Square Weld-On Hinges",
    shortName: "Square type",
    profile: "Square profile",
    description: "The square-profile hinge shown in the catalog. Original size notation is retained for confirmation.",
    image: "/images/hinge-square.jpg",
    imageAlt: "Square-profile weld-on hinges with a visible pin and bearing assembly",
    application: "TBD",
    page: 13,
  },
];

export const featuredFamilies = families.slice(0, 6);

export function getVariants(familyId: string) {
  return catalogVariants.filter((variant) => variant.familyId === familyId);
}

export function getFamily(familyId: string) {
  return families.find((family) => family.id === familyId);
}

// These values are deliberately not rendered as claims or options in the UI.
export const unconfirmedProductFacts = {
  materials: "TBD",
  loadCapacity: "TBD",
  certifications: "TBD",
  moq: "TBD",
  leadTime: "TBD",
  manufacturingEquipmentModels: "TBD",
  productionCapacity: "TBD",
  exportCountries: "TBD",
  customers: "TBD",
  warranty: "TBD",
  testResults: "TBD",
  sampleProcedure: "TBD",
} as const;
