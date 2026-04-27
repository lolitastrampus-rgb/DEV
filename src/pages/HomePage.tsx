import { AuroraBackdrop } from "../components/landing/AuroraBackdrop";
import { CasesSection } from "../components/landing/CasesSection";
import { CtaSection } from "../components/landing/CtaSection";
import { HeroMainCard, HeroSideCard } from "../components/landing/HeroBento";
import { LandingHeader } from "../components/landing/LandingHeader";
import { ModulesSection } from "../components/landing/ModulesSection";
import { NutritionSection } from "../components/landing/NutritionSection";
import { ProcessBand } from "../components/landing/ProcessBand";
import { ResultSection } from "../components/landing/ResultSection";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackdrop />
      <LandingHeader />

      <div className="app-chrome relative z-10 px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-min md:grid-cols-12">
          <HeroMainCard />
          <HeroSideCard />
          <ModulesSection />
          <ResultSection />
          <NutritionSection />
          <CasesSection />
          <ProcessBand />
          <CtaSection />
        </div>
      </div>
    </div>
  );
}
