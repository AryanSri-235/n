import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AuditOfferSection from "@/components/AuditOfferSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-canvas text-text-primary selection:bg-coral-subtle selection:text-coral-primary">
      <Header />
      <main className="flex-1 w-full pt-20">
        <HeroSection />
        <CaseStudiesSection />
        <CapabilitiesSection />
        <AuditOfferSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
