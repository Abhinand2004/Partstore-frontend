import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />

      {/* Featured Brands or Categories Section */}
      <section className="bg-gray-50 py-20 lg:py-28" aria-labelledby="brands-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <h2 id="brands-heading" className="text-3xl font-bold tracking-tight text-[#364153] text-center mb-12 lg:mb-16">
            Top Quality Brands
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center opacity-50" role="list">
            {/* Placeholders for brand icons */}
            <div className="h-12 w-24 bg-gray-200 rounded animate-pulse" role="listitem" aria-label="Brand placeholder 1"></div>
            <div className="h-12 w-24 bg-gray-200 rounded animate-pulse" role="listitem" aria-label="Brand placeholder 2"></div>
            <div className="h-12 w-24 bg-gray-200 rounded animate-pulse" role="listitem" aria-label="Brand placeholder 3"></div>
            <div className="h-12 w-24 bg-gray-200 rounded animate-pulse" role="listitem" aria-label="Brand placeholder 4"></div>
            <div className="h-12 w-24 bg-gray-200 rounded hidden lg:block animate-pulse" role="listitem" aria-label="Brand placeholder 5"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
