import { useEffect } from "react";
import { AgentModules } from "../components/landing/AgentModules";
import { AuditOfferSection } from "../components/landing/AuditOfferSection";
import { AuroraBackdrop } from "../components/landing/AuroraBackdrop";
import { CasesSection } from "../components/landing/CasesSection";
import { CtaSection } from "../components/landing/CtaSection";
import { DocumentTitle } from "../components/landing/DocumentTitle";
import { EconomicsSection } from "../components/landing/EconomicsSection";
import { HeroMainCard, HeroSideCard } from "../components/landing/HeroBento";
import { LandingFooter } from "../components/landing/LandingFooter";
import { LandingHeader } from "../components/landing/LandingHeader";
import { ProcessBand } from "../components/landing/ProcessBand";
import { ResultSection } from "../components/landing/ResultSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { TechnicalDepthSection } from "../components/landing/TechnicalDepthSection";

export default function LandingPage() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    queueMicrotask(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
  }, []);

  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-x-hidden bg-[color:var(--color-surface)] text-[color:var(--color-ink)]"
    >
      <DocumentTitle />
      <AuroraBackdrop />
      <LandingHeader />

      <main className="app-chrome relative z-10 flex-1 bg-[color:var(--color-surface)] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-min md:grid-cols-12">
          <HeroMainCard />
          <HeroSideCard />
          <AgentModules />
          <TechnicalDepthSection />
          <ProcessBand />
          <ResultSection />
          <EconomicsSection />
          <AuditOfferSection />
          <TestimonialsSection />
          <CasesSection />
          <CtaSection />
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
