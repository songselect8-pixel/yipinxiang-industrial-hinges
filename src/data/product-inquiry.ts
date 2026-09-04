import { getFamily, getVariants, type CatalogVariant } from "./catalog.ts";
import { getProduct } from "./products.ts";

export function catalogInquirySize(record: CatalogVariant): string {
  if (record.size !== "TBD") return record.size;
  const parameters = Object.entries(record.parameters ?? {}).map(([key, value]) => `${key} ${value}`).join(", ");
  return `${record.model} — ${parameters} (unit to confirm)`;
}

export function productInquiryHref(productId: string, variantId?: string): string {
  if (!getFamily(productId)) return "/#rfq";
  const params = new URLSearchParams({ product: productId });
  if (variantId && getVariants(productId).some((record) => record.id === variantId)) params.set("variant", variantId);
  const product = getProduct(productId);
  const path = product?.detailPagePublished ? product.detailPath : "/";
  return `${path}?${params.toString()}#rfq`;
}

export function readProductInquiry(params: URLSearchParams, fixedProductId?: string) {
  const product = fixedProductId ?? params.get("product") ?? "";
  if (!getFamily(product)) return null;
  const sameProduct = !params.has("product") || params.get("product") === product;
  const record = sameProduct ? getVariants(product).find((item) => item.id === params.get("variant")) : undefined;
  return { product, size: record ? catalogInquirySize(record) : "", application: "" };
}
