import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsCounter } from "@/components/home/StatsCounter";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Construction Cost Estimating Services | Bid Count Estimation",
  description:
    "Professional construction cost estimating services nationwide. Accurate quantity takeoffs, bid preparation, and project budgeting. Get your free estimate in 24 hours.",
  alternates: {
    canonical: "https://bidcountestimation.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <StatsCounter />
      <WhyChooseUs />
      <ProcessSection />
      <CTABanner />
    </>
  );
}
