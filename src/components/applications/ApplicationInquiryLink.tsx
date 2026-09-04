"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { Arrow } from "@/components/ui/Arrow";

export function ApplicationInquiryLink({
  product,
  application,
  children,
  className = "text-link",
  diagonal = false,
}: {
  product: string;
  application: string;
  children: ReactNode;
  className?: string;
  diagonal?: boolean;
}) {
  const { beginInquiry } = useInquiry();

  return (
    <Link
      href="#rfq"
      className={className}
      onClick={() => beginInquiry({ product, size: "", application })}
    >
      {children} <Arrow diagonal={diagonal} />
    </Link>
  );
}
