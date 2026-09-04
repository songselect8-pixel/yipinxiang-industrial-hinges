import { site } from "@/data/site";
import { CatalogLink } from "@/components/products/CatalogLink";
import { Arrow } from "@/components/ui/Arrow";
import { productHref } from "@/data/products";

export function Footer({ currentPage = "home", rfqHref }: { currentPage?: "home" | "products" | "applications" | "custom-hinges" | "manufacturing" | "quality" | "resources" | "about-us" | "contact"; rfqHref?: string }) {
  const homeHref = (destination: string) => {
    if (destination === "#rfq" && rfqHref) return rfqHref;
    if (destination.startsWith("/")) return destination;
    return currentPage === "home" ? destination : `/${destination}`;
  };
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top"><a className="brand" href={homeHref("#home")} aria-label="Yipinxiang home"><span className="brand-name">{site.brand}</span><span className="brand-descriptor">{site.descriptor}</span></a><p>Industrial weld-on hinges.<br />Standard profiles. Custom requirements.</p><a href={homeHref("#rfq")} className="text-link">Request a Quote <Arrow diagonal /></a></div>
        <div className="footer-grid">
          <div><h2>Product categories</h2><CatalogLink familyId="bearing" href={productHref("bearing")}>Bearing weld-on hinges</CatalogLink><CatalogLink familyId="pin" href={productHref("pin")}>Pin-type hinges</CatalogLink><CatalogLink familyId="grease-nipple" href={productHref("grease-nipple")}>Grease nipple hinges</CatalogLink><CatalogLink familyId="round" href={productHref("round")}>Round hinges</CatalogLink><a href="/products">All hinge types <Arrow /></a></div>
          <div><h2>Applications</h2><a href="/applications#industrial-steel-doors">Industrial steel doors</a><a href="/applications#gates-trailers-ramps">Gates & trailer doors</a><a href="/applications#electrical-control-cabinets">Electrical cabinets</a><a href="/applications#electrical-control-cabinets">Control & network cabinets</a></div>
          <div><h2>Our company</h2><a href="/about-us">About Yipinxiang</a><a href="/manufacturing">Manufacturing</a><a href="/custom-hinges">Custom hinges</a><a href="/quality">Quality control</a><a href={homeHref("#packaging")}>Packaging & shipment</a></div>
          <div><h2>Resources</h2><a href="/resources">All resources</a><a href="/resources#selection-guides">Hinge selection guides</a><a href="/resources#application-guides">Application guides</a><a href="/resources#technical-guides">Technical guides</a></div>
          <div className="footer-contact"><h2>Start a conversation</h2><p>Have a hinge requirement?<br />Tell us about your project.</p><a href={homeHref("#rfq")} className="footer-contact-link">Get in touch <Arrow diagonal /></a><span>For industrial and OEM inquiries.</span></div>
        </div>
        <div className="footer-bottom"><p>© 2026 {site.companyName}</p><a href={currentPage === "home" ? "#home" : currentPage === "products" ? "#products-top" : currentPage === "applications" ? "#applications-top" : currentPage === "custom-hinges" ? "#custom-hinges-top" : currentPage === "manufacturing" ? "#manufacturing-top" : currentPage === "quality" ? "#quality-top" : currentPage === "resources" ? "#resources-top" : currentPage === "contact" ? "#contact-top" : "#about-us-top"}>Back to top <span aria-hidden="true">↑</span></a></div>
      </div>
    </footer>
  );
}
