import { InquiryProvider } from "@/components/inquiry/InquiryProvider";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Applications } from "@/components/sections/Applications";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CustomManufacturing } from "@/components/sections/CustomManufacturing";
import { FactorySection } from "@/components/sections/FactorySection";
import { QualitySection } from "@/components/sections/QualitySection";
import { TechnicalRange } from "@/components/sections/TechnicalRange";
import { PackagingSection } from "@/components/sections/PackagingSection";
import { RFQSection } from "@/components/sections/RFQSection";

export default function Home() {
  return (
    <div id="home">
      <InquiryProvider>
        <Header />
        <main id="main-content">
          <Hero />
          <ProductGrid />
          <Applications />
          <WhyChooseUs />
          <CustomManufacturing />
          <FactorySection />
          <QualitySection />
          <TechnicalRange />
          <PackagingSection />
          <RFQSection />
        </main>
        <Footer />
      </InquiryProvider>
    </div>
  );
}
