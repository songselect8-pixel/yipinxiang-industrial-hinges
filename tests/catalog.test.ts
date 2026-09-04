import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { catalogVariants, families, getVariants } from "../src/data/catalog.ts";

const audit = JSON.parse(readFileSync(resolve("docs/research/catalog-data-draft.json"), "utf8"));

test("all 60 technical records preserve the independently audited source strings", () => {
  assert.equal(catalogVariants.length, 60);
  assert.equal(new Set(catalogVariants.map((item) => item.id)).size, 60);
  for (const record of catalogVariants) {
    const source = audit.specifications.find((item: { recordId: string }) => item.recordId === record.id);
    assert.ok(source, `Source row exists: ${record.id}`);
    assert.equal(record.familyId, source.familyId);
    assert.equal(record.model, source.catalogModel);
    assert.equal(record.size, source.sizeRaw);
    assert.equal(record.weightG, source.weightG);
    assert.equal(record.unit, source.unit);
    assert.equal(record.page, source.sourcePage);
    assert.deepEqual(record.parameters, source.dimensionSymbols === "TBD" ? null : source.dimensionSymbols);
  }
});

test("family references resolve to real imagery and actual variants", () => {
  assert.equal(families.length, 10);
  assert.equal(new Set(families.map((family) => family.id)).size, 10);
  for (const family of families) {
    assert.ok(getVariants(family.id).length > 0);
    assert.ok(existsSync(resolve("public", family.image.slice(1))), family.image);
  }
});

test("public technical data contains no private contacts or invented commercial facts", () => {
  const publicData = JSON.stringify({ families, catalogVariants });
  const contact = audit.companyDraft.privateContactDraft;
  for (const value of [contact.email, contact.phone, contact.name]) {
    assert.equal(publicData.includes(value), false);
  }
  assert.equal(getVariants("20-type").every((item) => item.unit === "TBD"), true);
  assert.equal(getVariants("square")[0].size, "Φ20x25x140mm");
  assert.deepEqual(getVariants("flag").map((item) => item.page), [14, 14, 14, 14, 14, 15, 15, 15, 15]);
});
