import type { ReactNode } from "react";
import { AuroraBackdrop } from "../landing/AuroraBackdrop";
import { LandingFooter } from "../landing/LandingFooter";
import { LandingHeader } from "../landing/LandingHeader";

type Props = {
  children: ReactNode;
};

/** Общая оболочка для внутренних страниц: те же фон, шапка и футер, что и на лендинге. */
export function SiteChrome({ children }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
      <AuroraBackdrop />
      <LandingHeader />
      {children}
      <LandingFooter />
    </div>
  );
}
