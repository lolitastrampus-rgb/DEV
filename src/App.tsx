import { AgentModules } from "./components/landing/AgentModules";
import { AuroraBackdrop } from "./components/landing/AuroraBackdrop";
import { CasesSection } from "./components/landing/CasesSection";
import { CtaSection } from "./components/landing/CtaSection";
import { DocumentTitle } from "./components/landing/DocumentTitle";
import { HeroMainCard, HeroSideCard } from "./components/landing/HeroBento";
import { LandingFooter } from "./components/landing/LandingFooter";
import { LandingHeader } from "./components/landing/LandingHeader";
import { ProcessBand } from "./components/landing/ProcessBand";
import { ResultSection } from "./components/landing/ResultSection";
import { TestimonialsSection } from "./components/landing/TestimonialsSection";

export default function App() {
  return (
    <div className="dark bg-[#000000] text-[#FFFFFF] relative flex min-h-screen flex-col overflow-x-hidden">
      <DocumentTitle />
      <AuroraBackdrop />
      <LandingHeader />

      <main className="app-chrome relative z-10 flex-1 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-min md:grid-cols-12">
          <HeroMainCard />
          <HeroSideCard />
          <AgentModules />
          <ProcessBand />
          <ResultSection />
          <TestimonialsSection />
          <CasesSection />
          <CtaSection />
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
