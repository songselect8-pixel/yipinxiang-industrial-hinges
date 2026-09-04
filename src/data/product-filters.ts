import { products, productApplications, type ProductDimension, type ProductFamily } from "./products.ts";

export type ProductFilters = { family: string; size: string; structure: string; application: string };
export type ProductMatch = { product: ProductFamily; dimensions: readonly ProductDimension[] };
export const emptyProductFilters: ProductFilters = { family: "", size: "", structure: "", application: "" };
export const filterKeys = ["family", "size", "structure", "application"] as const;

export const filterOptions = {
  family: products.map((product) => ({ value: product.id, label: product.name })),
  // Preserve literal glyphs, separators and decimals. A model is not a diameter.
  size: [...new Set(products.flatMap((product) => product.dimensions.map((item) => item.size ?? item.model)).filter((item): item is string => item !== null))].map((value) => ({ value, label: value })),
  structure: [...new Set(products.flatMap((product) => product.dimensions.map((item) => item.structure)))].map((value) => ({ value, label: value })),
  application: productApplications.map((item) => ({ value: item.id, label: item.name })),
};

export function filterProducts(filters: ProductFilters, source: readonly ProductFamily[] = products): ProductMatch[] {
  return source.flatMap((product) => {
    if (filters.family && product.id !== filters.family) return [];
    if (filters.application && !product.applications.some((item) => item.id === filters.application)) return [];
    // Size and structure must match the SAME record, not separate variants.
    const dimensions = product.dimensions.filter((dimension) =>
      (!filters.size || (dimension.size ?? dimension.model) === filters.size) &&
      (!filters.structure || dimension.structure === filters.structure));
    return dimensions.length ? [{ product, dimensions }] : [];
  });
}

export function readProductFilters(params: URLSearchParams): ProductFilters {
  return Object.fromEntries(filterKeys.map((key) => {
    const value = params.get(key) ?? "";
    return [key, filterOptions[key].some((option) => option.value === value) ? value : ""];
  })) as ProductFilters;
}

export function productFilterCount(filters: ProductFilters) {
  return filterKeys.filter((key) => Boolean(filters[key])).length;
}
