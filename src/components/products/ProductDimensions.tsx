import { getProductExamples, type ProductDimension } from "@/data/products";

export function ProductDimensions({ dimensions, showPage = false }: { dimensions: readonly ProductDimension[]; showPage?: boolean }) {
  return <span className="product-dimensions">
    {getProductExamples(dimensions).map((item) => <span key={item.id} className="product-dimension" data-catalog-record={item.id}>
      {item.parameters ? <><span>{item.model} · D {item.parameters.D} · L {item.parameters.L}</span><small>{item.unit ?? "Unit not printed"}</small></> : <span>{item.size}{showPage && <small> p{item.sourcePage}</small>}</span>}
    </span>)}
  </span>;
}
