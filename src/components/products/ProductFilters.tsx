"use client";

import { filterKeys, filterOptions, type ProductFilters as Filters } from "@/data/product-filters";

const labels = { family: "Hinge type", size: "Catalog size / model", structure: "Structure", application: "Application" };
const defaults = { family: "All hinge types", size: "All listed sizes / models", structure: "All structures", application: "All catalog applications" };

export function ProductFilters({ value, onChange, idPrefix }: { value: Filters; onChange: (filters: Filters) => void; idPrefix: string }) {
  return <div className="product-filter-fields">
    {filterKeys.map((key) => <div className="field" key={key}>
      <label htmlFor={`${idPrefix}-${key}`}>{labels[key]}</label>
      <select id={`${idPrefix}-${key}`} value={value[key]} onChange={(event) => onChange({ ...value, [key]: event.target.value })}>
        <option value="">{defaults[key]}</option>
        {filterOptions[key].map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>)}
  </div>;
}
