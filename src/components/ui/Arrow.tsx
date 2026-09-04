import type { SVGProps } from "react";

export function Arrow({ diagonal = false, ...props }: SVGProps<SVGSVGElement> & { diagonal?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  );
}

export function Chevron(props: SVGProps<SVGSVGElement>) {
  return <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}><path d="m5 8 5 5 5-5" /></svg>;
}

export function Plus(props: SVGProps<SVGSVGElement>) {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}><path d="M4 10h12M10 4v12" /></svg>;
}
