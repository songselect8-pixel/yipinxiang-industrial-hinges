import type { CatalogVariant } from "./catalog-variants.ts";

// Select published records, not a calculated interval: not every combination
// between two catalog sizes is available. Never parse or normalize size strings.
export function getOverviewExamples(records: readonly CatalogVariant[]): readonly CatalogVariant[] {
  const first = records[0];
  if (!first) return [];

  // Numbered series have individual parameter tables with unconfirmed units.
  if (first.parameters || records.length === 1) return [first];

  // The flag family spans two catalog designs. Show one example of each,
  // preserving the page provenance instead of merging them into a size range.
  const designs = new Map<number, CatalogVariant>();
  for (const record of records) {
    if (!designs.has(record.page)) designs.set(record.page, record);
  }
  if (designs.size > 1) return [...designs.values()];

  return [first, records[records.length - 1]];
}
