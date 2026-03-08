import { Navbar } from "@/components/layout/Navbar";
import { LandingHero } from "@/components/landing/LandingHero";
import { ScrollytellingCards } from "@/components/landing/ScrollytellingCards";
import { WordHighlightSection } from "@/components/landing/WordHighlightSection";
import { WorkSection } from "@/components/landing/WorkSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollBanner } from "@/components/layout/ScrollBanner";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aaryaveer Sharma",
    "url": "https://aaryaveersharma.in",
    "jobTitle": "Full Stack Website Developer",
    "description": "Specializing in bespoke web solutions — crafted for businesses and individuals who refuse to settle for ordinary.",
    "sameAs": [
      "https://instagram.com/sovereignsites",
      "https://sovereignsites.in"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aaryaveer Sharma Portfolio",
    "url": "https://aaryaveersharma.in",
    "author": {
      "@type": "Person",
      "name": "Aaryaveer Sharma"
    }
  };

  return (
    <main className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Navbar />
      <ScrollBanner />
      <LandingHero />
      <ScrollytellingCards />
      <WordHighlightSection />
      
      <WorkSection />
      <ProcessSection />

      <Footer />
    </main>
  );
}
