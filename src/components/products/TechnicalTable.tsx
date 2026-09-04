"use client";

import Link from "next/link";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { Arrow } from "@/components/ui/Arrow";
import type { CatalogFamily, CatalogVariant } from "@/data/catalog";
import { catalogInquirySize } from "@/data/product-inquiry";

export function TechnicalTable({ family, records, inquiryHref }: { family: CatalogFamily; records: readonly CatalogVariant[]; inquiryHref?: (record: CatalogVariant) => string }) {
  const { selection, beginInquiry } = useInquiry();
  const parameterKeys = records[0]?.parameters ? Object.keys(records[0].parameters) : [];
  const isParameterTable = parameterKeys.length > 0;

  return (
    <div className={`technical-specification${isParameterTable ? " has-parameters" : ""}`}>
      <p className="specification-caption">{isParameterTable ? "Original catalog parameters. Units are not stated in the source; please confirm for your project." : "Sizes reproduced as catalogued. Weight is product mass, not load capacity."}</p>
      <p className="table-scroll-hint" aria-hidden="true">Scroll for all columns and size selection <Arrow /></p>
      <div className="technical-table-wrap" tabIndex={0} role="region" aria-label={`${family.shortName} specification table, scroll horizontally if needed`}>
      <table className={`technical-table${isParameterTable ? " parameter-table" : ""}`}>
        <caption className="sr-only">{family.shortName} — original catalog specifications</caption>
        <thead><tr>{isParameterTable ? <><th scope="col">Model</th>{parameterKeys.map((key) => <th scope="col" key={key}>{key}</th>)}</> : <><th scope="col">Catalog size</th><th scope="col">Weight (g)</th></>}<th scope="col"><span className="sr-only">Choose a size for your inquiry</span></th></tr></thead>
        <tbody>{records.map((record) => {
          const size = catalogInquirySize(record);
          const isSelected = selection.product === family.id && selection.size === size;
          return <tr key={record.id} className={isSelected ? "selected-row" : ""} data-source-record={record.id}>
            {isParameterTable ? <><th scope="row">{record.model}</th>{parameterKeys.map((key) => <td key={key}>{record.parameters?.[key]}</td>)}</> : <><th scope="row">{record.size}</th><td>{record.weightG}</td></>}
            <td className="table-action"><Link href={inquiryHref?.(record) ?? "#rfq"} aria-label={`Select ${record.model === "TBD" ? record.size : record.model} ${family.shortName} for RFQ`} onClick={() => { if (!inquiryHref) beginInquiry({ product: family.id, size, application: selection.application }); }}>{isSelected ? "Selected" : "Select size"}<Arrow /></Link></td>
          </tr>;
        })}</tbody>
      </table>
      </div>
    </div>
  );
}
