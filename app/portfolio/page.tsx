import type { Metadata } from "next";
import Image from "next/image";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { CTABanner } from "@/components/home/CTABanner";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Portfolio — Construction Estimating Projects Across All 50 States",
  description:
    "Browse Bid Count Estimation's project portfolio: commercial, residential, industrial, and infrastructure projects ranging from $100K to $25M+. See our work nationwide.",
  alternates: {
    canonical: "https://bidcountestimation.com/portfolio",
  },
  openGraph: {
    title: "Construction Estimating Portfolio | Bid Count Estimation",
    description:
      "Browse our portfolio of construction estimating projects — commercial, residential, industrial, and infrastructure across all 50 states.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1F3D] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction projects portfolio background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <FadeUp className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#C9A961] text-sm font-semibold tracking-[0.15em] uppercase mb-4 border border-[#C9A961]/30 px-4 py-1.5 rounded-full">
            Portfolio
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Projects We&apos;ve Estimated
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From small commercial renovations to multi-million dollar developments,
            we&apos;ve helped contractors across the country compete and win.
          </p>
        </FadeUp>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
