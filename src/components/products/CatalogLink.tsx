"use client";

import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";

export function CatalogLink({ familyId, className, children, onNavigate, ariaLabel, href, onClick }: {
  familyId: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  ariaLabel?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    onClick?.(event);
    if (!href) {
      const panel = document.getElementById(`range-${familyId}`);
      if (panel instanceof HTMLDetailsElement) panel.open = true;
    }
    onNavigate?.();
  }

  return <Link href={href ?? `#range-${familyId}`} className={className} onClick={navigate} aria-label={ariaLabel}>{children}</Link>;
}
