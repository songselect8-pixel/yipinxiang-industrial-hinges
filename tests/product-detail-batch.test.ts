import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { getVariants } from "../src/data/catalog.ts";
import { getProduct, productHref, products } from "../src/data/products.ts";

const expectedProductIds = [
  "bearing",
  "pin",
  "grease-nipple",
  "round",
  "adjustable",
  "flag",
  "gasket",
  "20-type",
  "12-14-16-type",
  "square",
] as const;

type DetailRecord = {
  productId: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  gallery: readonly { src: string; sourcePage: number | null }[];
  drawing: { src: string; sourcePage: number | null } | null;
  applicationGroups: readonly { sourcePages: readonly number[] }[];
  customRequirement: { sourcePages: readonly number[] };
  packaging: { examples: readonly { productId: string }[] } | null;
  specificationGroups: readonly {
    title: string;
    sourcePage: number;
    image: { src: string; sourcePage: number | null };
    recordIds: readonly string[];
  }[];
};

async function loadDetails() {
  const module = await import("../src/data/product-details.ts") as unknown as {
    productDetails?: readonly DetailRecord[];
    getProductDetail?: (id: string) => DetailRecord | undefined;
    getProductDetailBySlug?: (slug: string) => DetailRecord | undefined;
  };
  assert.ok(module.productDetails, "the batch must export one structured detail record per product family");
  assert.ok(module.getProductDetail);
  assert.ok(module.getProductDetailBySlug);
  return { details: module.productDetails, getProductDetail: module.getProductDetail, getProductDetailBySlug: module.getProductDetailBySlug };
}

test("all ten product families publish one canonical detail route through the locked template", async () => {
  const { details, getProductDetail, getProductDetailBySlug } = await loadDetails();
  assert.deepEqual(details.map((detail) => detail.productId), expectedProductIds);
  assert.ok(existsSync(resolve("src/app/products/[slug]/page.tsx")));

  for (const product of products) {
    assert.equal(product.detailPagePublished, true, product.id);
    assert.equal(productHref(product.id), product.detailPath, product.id);
    assert.equal(getProductDetail(product.id)?.productId, product.id);
    assert.equal(getProductDetailBySlug(product.slug)?.productId, product.id);
  }
});

test("detail metadata, titles and galleries are family-specific and source-mapped", async () => {
  const { details } = await loadDetails();
  const manifest = JSON.parse(readFileSync(resolve("docs/research/product-family-source-manifest.json"), "utf8"));
  assert.equal(new Set(details.map((detail) => detail.title)).size, details.length);
  assert.equal(new Set(details.map((detail) => detail.seoTitle)).size, details.length);
  assert.equal(new Set(details.map((detail) => detail.seoDescription)).size, details.length);
  for (const detail of details) assert.ok(detail.seoTitle.includes(detail.title), `${detail.productId}: SEO title keeps the approved product name`);

  for (const detail of details) {
    const product = getProduct(detail.productId)!;
    const source = manifest.families.find((family: { id: string }) => family.id === detail.productId);
    assert.ok(source, detail.productId);
    assert.ok(detail.gallery.length > 0, `${detail.productId}: gallery`);
    const approvedPaths = new Set([
      ...source.activeImages.map((image: { publicPath: string }) => image.publicPath),
      ...source.approvedAdditionalSourceImages.flatMap((image: { publicPath?: string }) => image.publicPath ? [image.publicPath] : []),
      ...(source.drawing ? [source.drawing.publicPath] : []),
    ]);
    for (const image of detail.gallery) {
      assert.ok(approvedPaths.has(image.src), `${detail.productId}: ${image.src}`);
      assert.ok(existsSync(resolve("public", image.src.slice(1))), image.src);
    }
    assert.equal(detail.drawing?.src ?? null, product.drawing?.src ?? null, `${detail.productId}: drawing`);
  }
});

test("application and customization copy stays within catalog-supported family scope", async () => {
  const { details } = await loadDetails();
  const waterDrop = new Set(["bearing", "pin", "gasket", "grease-nipple", "20-type"]);
  const explicitCustomization = new Set(["round", "pin", "gasket", "grease-nipple", "adjustable", "square", "flag"]);

  for (const detail of details) {
    const applicationPages = [...new Set(detail.applicationGroups.flatMap((group) => group.sourcePages))];
    if (waterDrop.has(detail.productId)) assert.deepEqual(applicationPages, [4], detail.productId);
    else if (detail.productId === "12-14-16-type") assert.deepEqual(applicationPages, [6]);
    else assert.deepEqual(applicationPages, [], detail.productId);

    if (explicitCustomization.has(detail.productId)) {
      assert.deepEqual(detail.customRequirement.sourcePages, getProduct(detail.productId)!.technicalSpecifications.sourcePages, detail.productId);
    } else {
      assert.deepEqual(detail.customRequirement.sourcePages, [18], detail.productId);
    }
  }
});

test("family packaging is never copied onto an unrelated product page", async () => {
  const { getProductDetail } = await loadDetails();
  assert.deepEqual(getProductDetail("20-type")!.packaging!.examples.map((example) => example.productId), ["20-type"]);
  assert.deepEqual(getProductDetail("12-14-16-type")!.packaging!.examples.map((example) => example.productId), ["12-14-16-type"]);
  assert.deepEqual(getProductDetail("bearing")!.packaging!.examples.map((example) => example.productId), ["20-type", "12-14-16-type"]);
  for (const id of ["round", "pin", "gasket", "grease-nipple", "adjustable", "square", "flag"]) {
    assert.equal(getProductDetail(id)!.packaging, null, id);
  }
});

test("the two unnamed flag structures keep their matching image and independent source table", async () => {
  const { getProductDetail } = await loadDetails();
  const groups = getProductDetail("flag")!.specificationGroups;
  assert.deepEqual(groups.map((group) => group.sourcePage), [14, 15]);
  assert.deepEqual(groups.map((group) => group.image.src), ["/images/hinge-flag.jpg", "/images/hinge-flag-leaf.jpg"]);
  assert.ok(groups[0].title.includes("Cylindrical"));
  assert.ok(groups[1].title.includes("Rectangular"));
  for (const group of groups) {
    assert.deepEqual(group.recordIds, getVariants("flag").filter((record) => record.page === group.sourcePage).map((record) => record.id));
    assert.equal(group.image.sourcePage, group.sourcePage);
  }
});

test("every detail page has three valid and varied related product links", async () => {
  await loadDetails();
  const combinations = new Set<string>();
  for (const product of products) {
    assert.equal(product.relatedProducts.length, 3, product.id);
    assert.equal(new Set(product.relatedProducts).size, 3, product.id);
    assert.ok(product.relatedProducts.every((id) => id !== product.id && getProduct(id)?.detailPagePublished), product.id);
    combinations.add(product.relatedProducts.join("|"));
  }
  assert.equal(combinations.size, products.length);
});

test("the locked template renders source-driven variant groups and complete numbered-series summaries", () => {
  const template = readFileSync(resolve("src/components/products/detail/ProductDetailTemplate.tsx"), "utf8");
  const styles = readFileSync(resolve("src/app/products/bearing-weld-on-hinges/product-detail.css"), "utf8");
  assert.match(template, /detail\.specificationGroups/);
  assert.match(template, /detail-variant-groups/);
  assert.match(template, /without-drawing/);
  assert.match(template, /First listed model/);
  assert.match(template, /is-single/);
  assert.match(styles, /\.detail-table-column \.has-parameters \.table-scroll-hint/);
});
