import Image from "next/image";
import { Zap, Target, Globe, Shield } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: Target,
    title: "Unmatched Accuracy",
    description:
      "Our certified estimators use industry-leading software and proven methodologies to deliver estimates with 98%+ accuracy across all project types and trade divisions.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Standard estimates delivered in 24–48 hours. Rush projects available. We know bid deadlines don't wait, and neither do we.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description:
      "We serve contractors, developers, and owners in all 50 states. Whether you're bidding local or expanding to new markets, we've got you covered.",
  },
  {
    icon: Shield,
    title: "All Trades Covered",
    description:
      "From civil and structural to MEP, finishes, and specialty work — we provide comprehensive estimates across every trade and CSI division.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80"
                alt="Construction estimator reviewing blueprints and plans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0B1F3D] text-white rounded-2xl p-5 shadow-2xl">
              <div
                className="text-3xl font-bold text-[#C9A961]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                15+
              </div>
              <div className="text-xs text-white/60 tracking-wide uppercase mt-1">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="Why Bid Count"
              title="The Estimation Partner You Can Rely On"
              description="We're not just number-crunchers — we're strategic partners who understand construction, deadlines, and what it takes to win competitive bids."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A961]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#C9A961]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3D] text-sm mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
