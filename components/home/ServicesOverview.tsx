import Link from "next/link";
import { Calculator, Ruler, FileText, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const services = [
  {
    icon: Calculator,
    title: "Construction Cost Estimating",
    description:
      "Detailed, line-item cost estimates for any project type. We analyze plans and specs to deliver accurate material, labor, and equipment costs.",
    href: "/services#cost-estimating",
  },
  {
    icon: Ruler,
    title: "Quantity Takeoffs",
    description:
      "Precise material and labor quantity calculations from architectural and structural drawings, ensuring nothing is missed in your bid.",
    href: "/services#quantity-takeoffs",
  },
  {
    icon: FileText,
    title: "Bid Preparation & Packages",
    description:
      "Complete bid packages ready for submission — formatted, professional, and designed to make your proposal stand out.",
    href: "/services#bid-preparation",
  },
  {
    icon: TrendingUp,
    title: "Project Budgeting & Consulting",
    description:
      "Pre-construction budget planning and value engineering to maximize your project's profitability before ground is broken.",
    href: "/services#project-budgeting",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Estimation Services"
          description="From initial takeoffs to complete bid packages, we handle every aspect of construction estimating so you can focus on winning work."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#C9A961]/30 bg-white hover:bg-[#0B1F3D] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A961]/10 group-hover:bg-[#C9A961]/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-[#C9A961]" />
                </div>
                <h3 className="font-bold text-[#0B1F3D] group-hover:text-white text-base mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#C9A961] text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
