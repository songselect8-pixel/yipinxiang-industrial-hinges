"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { readProductInquiry } from "@/data/product-inquiry";

export type InquirySelection = { product: string; size: string; application: string };
type InquiryContextValue = {
  selection: InquirySelection;
  updateSelection: (change: Partial<InquirySelection>) => void;
  beginInquiry: (selection: InquirySelection) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children, fixedProductId }: { children: ReactNode; fixedProductId?: string }) {
  const [selection, setSelection] = useState<InquirySelection>({ product: fixedProductId ?? "", size: "", application: "" });

  useEffect(() => {
    if (!fixedProductId && window.location.pathname !== "/") return;
    const initial = readProductInquiry(new URLSearchParams(window.location.search), fixedProductId);
    if (initial) setSelection(initial);
  }, [fixedProductId]);

  function beginInquiry(next: InquirySelection) {
    setSelection(fixedProductId ? { ...next, product: fixedProductId } : next);
  }

  function updateSelection(change: Partial<InquirySelection>) {
    setSelection((previous) => ({ ...previous, ...change, ...(fixedProductId ? { product: fixedProductId } : {}) }));
  }

  return <InquiryContext.Provider value={{ selection, updateSelection, beginInquiry }}>{children}</InquiryContext.Provider>;
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) throw new Error("Inquiry components must be wrapped in InquiryProvider.");
  return context;
}
