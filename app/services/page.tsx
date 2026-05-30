import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Construction Estimating Services — Cost Estimating, Takeoffs & Bid Packages",
  description:
    "Explore Bid Count Estimation's full range of services: construction cost estimating, quantity takeoffs, bid preparation packages, and project budgeting for contractors nationwide.",
  alternates: {
    canonical: "https://bidcountestimation.com/services",
  },
  openGraph: {
    title: "Construction Estimating Services | Bid Count Estimation",
    description:
      "Comprehensive construction cost estimating, quantity takeoffs, bid preparation, and project budgeting services for contractors across all 50 states.",
  },
};

const services = [
  {
    id: "cost-estimating",
    title: "Construction Cost Estimating",
    subtitle: "Accurate line-item cost breakdowns for any project",
    description:
      "Our construction cost estimating service delivers detailed, trade-by-trade breakdowns that give you the confidence to bid competitively. We analyze every aspect of your project — from site work to finishes — using current labor and material rates for your specific market.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    imageAlt: "Estimator reviewing construction plans at a desk",
    includes: [
      "Complete CSI division breakdown",
      "Current regional material pricing",
      "Labor cost analysis by trade",
      "Equipment and overhead allocation",
      "Subcontractor bid leveling",
      "Contingency and escalation factors",
    ],
    deliverables: "Detailed Excel/PDF estimate report",
    turnaround: "24–48 hours standard",
  },
  {
    id: "quantity-takeoffs",
    title: "Quantity Takeoffs",
    subtitle: "Precise material and labor quantities from your drawings",
    description:
      "Accurate quantity takeoffs are the foundation of every winning bid. Our estimators perform meticulous digital takeoffs from architectural, structural, MEP, and civil drawings using industry-leading software to ensure every material and labor unit is captured.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    imageAlt: "Construction measurement and planning on site",
    includes: [
      "Digital plan measurement (all formats)",
      "Concrete, masonry, and structural steel",
      "MEP rough-in and finish quantities",
      "Earthwork and site material calculations",
      "Finish material counts and schedules",
      "Detailed quantity summary report",
    ],
    deliverables: "Annotated takeoff sheets + summary report",
    turnaround: "12–36 hours standard",
  },
  {
    id: "bid-preparation",
    title: "Bid Preparation & Packages",
    subtitle: "Professional bid packages that win contracts",
    description:
      "A great estimate only wins bids if it's presented professionally. Our bid preparation service transforms your estimates into polished, complete bid packages formatted to owner and GC requirements — making it easy to submit and easy to win.",
    image:
      "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=900&q=80",
    imageAlt: "Professional construction bid documents and blueprints",
    includes: [
      "Bid form preparation and formatting",
      "Scope letter and clarifications",
      "Subcontractor proposal compilation",
      "Insurance and bonding coordination",
      "Value engineering alternatives",
      "Bid submission checklist",
    ],
    deliverables: "Complete bid package (PDF/digital)",
    turnaround: "48–72 hours standard",
  },
  {
    id: "project-budgeting",
    title: "Project Budgeting & Consulting",
    subtitle: "Plan smarter before breaking ground",
    description:
      "Pre-construction budgeting sets the stage for project success. Our consulting team works with owners, developers, and GCs to establish realistic budgets, identify value engineering opportunities, and develop phased cost plans that align with project goals.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80",
    imageAlt: "Construction project budget planning and analysis",
    includes: [
      "Conceptual and schematic budget development",
      "Design-phase cost monitoring",
      "Value engineering recommendations",
      "Life-cycle cost analysis",
      "Market condition analysis",
      "Budget reconciliation and reporting",
    ],
    deliverables: "Budget report + recommendations memo",
    turnaround: "3–5 business days",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Construction Estimating Services",
  description: "Professional construction cost estimating services by Bid Count Estimation",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: {
        "@type": "Organization",
        name: "Bid Count Estimation",
        url: "https://bidcountestimation.com",
      },
      areaServed: "US",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Page hero */}
      <section className="relative bg-[#0B1F3D] pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Construction blueprints and technical drawings"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#C9A961] text-sm font-semibold tracking-[0.15em] uppercase mb-4 border border-[#C9A961]/30 px-4 py-1.5 rounded-full">
            Our Services
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Construction Estimating Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From detailed cost estimates to complete bid packages — we provide every service
            a contractor needs to compete and win more work.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div>
                  <span className="inline-block text-[#C9A961] text-xs font-semibold tracking-[0.15em] uppercase mb-3 bg-[#C9A961]/10 px-3 py-1 rounded-full">
                    {service.subtitle}
                  </span>
                  <h2
                    className="text-3xl font-bold text-[#0B1F3D] mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0B1F3D] uppercase tracking-wide mb-3">
                      What&apos;s Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#C9A961] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 bg-gray-50 rounded-xl p-4">
                    <div>
                      <span className="font-semibold text-[#0B1F3D]">Deliverable: </span>
                      {service.deliverables}
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1F3D]">Turnaround: </span>
                      {service.turnaround}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Get a Quote for This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
