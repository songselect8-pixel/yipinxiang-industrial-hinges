import type { Metadata } from "next";
import { InquiryProvider } from "@/components/inquiry/InquiryProvider";
import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";
import { QualityPageContent } from "@/components/quality/QualityPageContent";
import { QualityRFQSection } from "@/components/quality/QualityRFQSection";
import { site } from "@/data/site";
import "./quality.css";

const title = `Industrial Hinge Quality Control | In-Process Inspection | ${site.brand}`;
const description = "Review source-backed weld-on hinge quality control: dimensional references, original drawings, production-stage checks, product-specific specifications and series-specific packaging.";
const baseUrl = process.env.SITE_URL || "http://127.0.0.1:3000";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quality" },
  openGraph: {
    title,
    description,
    url: "/quality",
    type: "website",
    locale: "en_US",
    siteName: site.brand,
    images: [{
      url: "/images/illustrations/quality-control.png",
      width: 1448,
      height: 1086,
      alt: "Illustration of dimensional inspection with a hinge and calipers",
    }],
  },
};

export default function QualityPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", baseUrl).href },
      { "@type": "ListItem", position: 2, name: "Quality Control", item: new URL("/quality", baseUrl).href },
    ],
  };

  return (
    <div id="quality-top" className="quality-page">
      <InquiryProvider>
        <Header currentPage="quality" rfqHref="#rfq" />
        <main id="main-content">
          <QualityPageContent />
          <QualityRFQSection />
        </main>
        <Footer currentPage="quality" rfqHref="#rfq" />
      </InquiryProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    </div>
  );
}
