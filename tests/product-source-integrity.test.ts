import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { getProduct, products } from "../src/data/products.ts";

type SourceImage = {
  publicPath: string;
  publicSha256: string;
  catalogAssociationPage: number;
  originKind: "project-file" | "pdf-image";
  originLocator: string;
  originSha256: string;
  derivation: "exact-bytes" | "lossless-pixel-export";
};

type ProductSource = {
  id: string;
  technicalPages: number[];
  applicationPages: number[];
  productSpecificCustomizationPages: number[];
  activeImages: SourceImage[];
  drawing: null | { publicPath: string; sourcePage: number; publicSha256: string };
  packaging: null | { publicPath: string; sourcePage: number; publicSha256: string };
  approvedAdditionalSourceImages: { sourcePath: string; publicPath?: string; sha256: string }[];
};

type SourceManifest = {
  version: number;
  status: string;
  sourcePdf: { path: string; pages: number; sha256: string };
  families: ProductSource[];
  excludedUnmatchedAssets: { sourceFolder: string; reason: string }[];
};

const manifest = JSON.parse(readFileSync(resolve("docs/research/product-family-source-manifest.json"), "utf8")) as SourceManifest;
const sha256 = (path: string) => createHash("sha256").update(readFileSync(path)).digest("hex");
const publicFile = (path: string) => resolve("public", path.replace(/^\//, ""));

test("the locked source map is tied to the reviewed 19-page catalog", () => {
  assert.equal(manifest.version, 1);
  assert.equal(manifest.status, "LOCKED_SOURCE_MAP");
  assert.equal(manifest.sourcePdf.pages, 19);
  const pdf = resolve(manifest.sourcePdf.path);
  assert.ok(existsSync(pdf));
  assert.equal(sha256(pdf), manifest.sourcePdf.sha256);
  assert.equal(manifest.sourcePdf.sha256, "35f4881a70cf94c4a4e98e58755a668f5bcaad5b020c10140e05879813aedc33");
});

test("every product family keeps its active images, technical rows and source scope together", () => {
  assert.equal(manifest.families.length, products.length);
  assert.deepEqual(new Set(manifest.families.map((family) => family.id)), new Set(products.map((product) => product.id)));

  for (const source of manifest.families) {
    const product = getProduct(source.id)!;
    assert.ok(product, source.id);
    assert.deepEqual([...new Set(product.dimensions.map((row) => row.sourcePage))], source.technicalPages, `${source.id}: technical pages`);
    assert.deepEqual(product.images.map((image) => image.src), source.activeImages.map((image) => image.publicPath), `${source.id}: active images`);
    assert.deepEqual([...new Set(product.applications.map((application) => application.sourcePage))], source.applicationPages, `${source.id}: application scope`);
    assert.deepEqual(product.customization?.sourcePages ?? [], source.productSpecificCustomizationPages, `${source.id}: customization scope`);

    for (const image of source.activeImages) {
      const publicPath = publicFile(image.publicPath);
      assert.ok(existsSync(publicPath), image.publicPath);
      assert.equal(sha256(publicPath), image.publicSha256, image.publicPath);
      assert.ok(source.technicalPages.includes(image.catalogAssociationPage), `${source.id}: image-to-family page association`);
      if (image.originKind === "project-file") {
        const origin = resolve(image.originLocator);
        assert.ok(existsSync(origin), image.originLocator);
        assert.equal(sha256(origin), image.originSha256, image.originLocator);
        if (image.derivation === "exact-bytes") assert.equal(image.publicSha256, image.originSha256, image.publicPath);
      } else {
        assert.match(image.originLocator, new RegExp(`PDF page ${image.catalogAssociationPage} / IM\\d+`));
      }
    }

    if (source.drawing) {
      assert.equal(product.drawing?.src, source.drawing.publicPath, `${source.id}: drawing path`);
      assert.equal(product.drawing?.sourcePage, source.drawing.sourcePage, `${source.id}: drawing page`);
      assert.equal(sha256(publicFile(source.drawing.publicPath)), source.drawing.publicSha256, `${source.id}: drawing hash`);
    } else {
      assert.equal(product.drawing, null, `${source.id}: no drawing may be invented`);
    }

    if (source.packaging) {
      assert.equal(product.packaging?.image, source.packaging.publicPath, `${source.id}: packaging path`);
      assert.equal(product.packaging?.sourcePage, source.packaging.sourcePage, `${source.id}: packaging page`);
      assert.equal(sha256(publicFile(source.packaging.publicPath)), source.packaging.publicSha256, `${source.id}: packaging hash`);
    } else {
      assert.equal(product.packaging, null, `${source.id}: no family-specific packaging may be invented`);
    }

    for (const image of source.approvedAdditionalSourceImages) {
      const origin = resolve(image.sourcePath);
      assert.ok(existsSync(origin), image.sourcePath);
      assert.equal(sha256(origin), image.sha256, image.sourcePath);
      if (image.publicPath) assert.equal(sha256(publicFile(image.publicPath)), image.sha256, image.publicPath);
    }
  }
});

test("unmatched oil-hole and accessory photographs stay outside the product-family data", () => {
  const productMedia = JSON.stringify(products.flatMap((product) => [...product.images, product.drawing]));
  assert.equal(productMedia.includes("hinge-oil-hole"), false);
  assert.equal(manifest.excludedUnmatchedAssets.length, 3);
  for (const excluded of manifest.excludedUnmatchedAssets) {
    assert.ok(excluded.reason.includes("Do not bind") || excluded.reason.includes("excluded"));
    assert.equal(manifest.families.some((family) => family.activeImages.some((image) => image.originLocator.startsWith(excluded.sourceFolder))), false);
  }
});
