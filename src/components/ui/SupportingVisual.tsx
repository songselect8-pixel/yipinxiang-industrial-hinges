import Image from "next/image";
import { illustrations, type IllustrationKey } from "@/data/illustrations";

type SupportingVisualProps = {
  asset: IllustrationKey;
  className?: string;
  sizes?: string;
  dark?: boolean;
};

export function SupportingVisual({ asset, className = "", sizes = "(max-width: 768px) 100vw, 50vw", dark = false }: SupportingVisualProps) {
  const visual = illustrations[asset];

  return (
    <figure className={`supporting-visual${dark ? " supporting-visual-dark" : ""} ${className}`} data-asset-kind={visual.kind} data-illustration={asset}>
      <Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} quality={85} sizes={sizes} className="supporting-image" />
      <figcaption><span>{visual.label}</span><span>Illustrative scene</span></figcaption>
    </figure>
  );
}
