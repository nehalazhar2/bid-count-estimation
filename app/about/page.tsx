import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Users, Award, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/home/CTABanner";
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us — Construction Estimation Company Serving All 50 States",
  description:
    "Learn about Bid Count Estimation — our story, mission, and the experienced team behind our nationwide construction cost estimating services. 15+ years of industry expertise.",
  alternates: {
    canonical: "https://bidcountestimation.com/about",
  },
  openGraph: {
    title: "About Bid Count Estimation | Construction Estimation Company USA",
    description:
      "15+ years of construction estimating expertise. Learn about our team, mission, and commitment to helping contractors win more bids.",
  },
};

const values = [
  {
    icon: Target,
    title: "Precision First",
    description:
      "Every estimate is produced with meticulous attention to detail. We check our numbers twice — because your margin depends on it.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description:
      "We treat every client's project as if it were our own. Your success is our success, and we're with you from first takeoff to final bid.",
  },
  {
    icon: Award,
    title: "Continuous Excellence",
    description:
      "Our team stays current with material costs, labor trends, and software advancements — so your estimates always reflect real-world conditions.",
  },
];

const differentiators = [
  {
    number: "15+",
    label: "Years of Experience",
    description: "Deep knowledge across commercial, residential, industrial, and civil sectors.",
  },
  {
    number: "500+",
    label: "Projects Estimated",
    description: "From small renovations to multi-million dollar commercial developments.",
  },
  {
    number: "50",
    label: "States Served",
    description: "Nationwide expertise with local market pricing for every region.",
  },
  {
    number: "98%",
    label: "Accuracy Rate",
    description: "Our estimates routinely come within 2% of final construction costs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1F3D] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Professional team working in a modern office"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <FadeUp className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#C9A961] text-sm font-semibold tracking-[0.15em] uppercase mb-4 border border-[#C9A961]/30 px-4 py-1.5 rounded-full">
            About Us
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built by Estimators, for Contractors
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We founded Bid Count Estimation with one goal: give every contractor access to
            professional-grade cost estimating, regardless of team size.
          </p>
        </FadeUp>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SlideIn direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                    alt="Modern commercial building — a project type we estimate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <ScaleIn delay={0.35}>
                  <div className="absolute -bottom-6 -left-6 bg-[#C9A961] rounded-2xl p-5 shadow-2xl">
                    <div
                      className="text-3xl font-bold text-[#0B1F3D]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      2009
                    </div>
                    <div className="text-xs text-[#0B1F3D]/70 tracking-wide uppercase mt-1">
                      Founded
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.1}>
              <SectionHeader
                eyebrow="Our Story"
                title="15 Years of Estimating Excellence"
                description="Bid Count Estimation was founded by a team of seasoned construction professionals who saw a critical gap in the industry."
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Small and mid-size contractors were consistently losing bids — not because
                  they lacked skill, but because they couldn&apos;t afford full-time estimating
                  staff. Large GCs with dedicated estimating departments were winning work that
                  smaller contractors could do just as well, or better.
                </p>
                <p>
                  We built Bid Count Estimation to level the playing field. By offering
                  professional-grade estimating services at accessible price points, we&apos;ve
                  helped hundreds of contractors across the country compete on equal footing —
                  and win.
                </p>
                <p>
                  Today, our team of certified estimators handles projects of all sizes and
                  types, from residential renovations to multi-million dollar commercial and
                  industrial developments. No project is too small, and no deadline is too tight.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Our Values"
              title="What Drives Our Work"
              centered
            />
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1F3D] flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-[#C9A961]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-[#0B1F3D] mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-[#0B1F3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="By the Numbers"
              title="Why Contractors Trust Us"
              centered
              light
            />
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <StaggerItem key={d.label}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors h-full">
                  <div
                    className="text-4xl font-bold text-[#C9A961] mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {d.number}
                  </div>
                  <div className="text-white font-semibold text-sm mb-2">{d.label}</div>
                  <p className="text-white/50 text-xs leading-relaxed">{d.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-white">
        <FadeUp className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="Our Team"
              title="Certified Estimators With Field Experience"
              description="Every estimator on our team has hands-on construction experience. We don't just know the numbers — we understand the work behind them."
              centered
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Work With Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeUp>
      </section>

      <CTABanner />
    </>
  );
}
