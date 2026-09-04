import type { ResourceCategory } from "./types.ts";

export const resourceCategories: readonly ResourceCategory[] = [
  {
    id: "selection-guides",
    name: "Hinge Selection Guides",
    description: "Practical steps for narrowing a hinge family from the application, structure and published dimensions.",
    order: 1,
  },
  {
    id: "application-guides",
    name: "Application Guides",
    description: "Catalog-supported application context for industrial doors, cabinets, gates, trailer doors and ramps.",
    order: 2,
  },
  {
    id: "technical-guides",
    name: "Technical Guides",
    description: "Clear explanations of catalog notation, dimensions, drawings and RFQ preparation.",
    order: 3,
  },
  {
    id: "custom-manufacturing",
    name: "Custom Manufacturing",
    description: "Information buyers can prepare when a standard catalog entry does not match the required structure.",
    order: 4,
  },
  {
    id: "manufacturing-quality",
    name: "Manufacturing & Quality",
    description: "Source-backed manufacturing, inspection and packaging guidance for future publication.",
    order: 5,
  },
] as const;
