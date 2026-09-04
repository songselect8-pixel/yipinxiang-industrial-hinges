import type { Metadata } from "next";
import { ManufacturingPageContent } from "@/components/manufacturing/ManufacturingPageContent";
import { ManufacturingRFQSection } from "@/components/manufacturing/ManufacturingRFQSection";
import { InquiryProvider } from "@/components/inquiry/InquiryProvider";
import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";
import { site } from "@/data/site";
import "./manufacturing.css";

const title = `Industrial Hinge Manufacturing | Factory Capability | ${site.brand}`;
const description = "Review catalog-supported industrial hinge manufacturing capabilities including lathe processing, automatic punching, mass assembly, production checks, custom support and standardized packaging.";
const baseUrl = process.env.SITE_URL || "http://127.0.0.1:3000";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/manufacturing" },
  openGraph: {
    title,
    description,
    url: "/manufacturing",
    type: "website",
    locale: "en_US",
    siteName: site.brand,
    images: [{
      url: "/images/factory-exterior.jpg",
      width: 2591,
      height: 1943,
      alt: "Actual exterior of the Yipinxiang factory shown in the company catalog",
    }],
  },
};

export default function ManufacturingPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", baseUrl).href },
      { "@type": "ListItem", position: 2, name: "Manufacturing", item: new URL("/manufacturing", baseUrl).href },
    ],
  };

  return (
    <div id="manufacturing-top" className="manufacturing-page">
      <InquiryProvider>
        <Header currentPage="manufacturing" rfqHref="#rfq" />
        <main id="main-content">
          <ManufacturingPageContent />
          <ManufacturingRFQSection />
        </main>
        <Footer currentPage="manufacturing" rfqHref="#rfq" />
      </InquiryProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    </div>
  );
}
