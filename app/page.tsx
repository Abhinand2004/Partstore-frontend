import dynamic from "next/dynamic";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";

const HowItWorksSection = dynamic(() => import("@/components/how-it-works-section"));
const CategoriesSection = dynamic(() => import("@/components/categories-section"));
const BrandsSection = dynamic(() => import("@/components/brands-section"));
const CTASection = dynamic(() => import("@/components/cta-section"));
const WhatsAppFloatingButton = dynamic(() => import("@/components/whatsapp-floating-button"));

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CategoriesSection />
      <BrandsSection />
      <CTASection />
      <WhatsAppFloatingButton />
    </div>
  );
}
