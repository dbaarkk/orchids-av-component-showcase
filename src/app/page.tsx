import { Navbar } from "@/components/layout/Navbar";
import { LandingHero } from "@/components/landing/LandingHero";
import { ScrollytellingCards } from "@/components/landing/ScrollytellingCards";
import { WordHighlightSection } from "@/components/landing/WordHighlightSection";
import { WorkSection } from "@/components/landing/WorkSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollBanner } from "@/components/layout/ScrollBanner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-black selection:text-white">
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
