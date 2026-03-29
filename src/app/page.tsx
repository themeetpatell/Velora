import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Ticker } from "@/components/home/ticker";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { HowItWorks } from "@/components/home/how-it-works";
import { Moats } from "@/components/home/moats";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Velora — UAE's First Performance Marketing Platform for Business Setup Firms",
  description:
    "Velora delivers qualified, attributed leads to UAE & GCC business setup and PRO services firms. Pay per result. No retainers. No guessing. AI-native. Full-funnel.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Problem />
      <Solution />
      <HowItWorks />
      <Moats />
      <CtaSection />
    </>
  );
}
