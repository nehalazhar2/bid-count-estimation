import { SectionHeader } from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Submit Your Plans",
    description:
      "Upload your drawings, specs, and project details through our secure portal or email. We accept all common file formats.",
  },
  {
    number: "02",
    title: "We Estimate",
    description:
      "Our certified estimators review your documents and produce a comprehensive, detailed cost estimate using industry-standard software.",
  },
  {
    number: "03",
    title: "Review Together",
    description:
      "We walk you through the estimate line by line, answer your questions, and make any adjustments needed before you bid.",
  },
  {
    number: "04",
    title: "Win More Bids",
    description:
      "Submit your bid with confidence knowing your numbers are accurate, competitive, and professionally prepared.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="From Plans to Winning Bids"
          description="Our streamlined process ensures you get accurate estimates on time, every time — without the headache."
          centered
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-white/10" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Step number */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center justify-center mb-5 mx-auto lg:mx-0">
                <span
                  className="text-[#C9A961] font-bold text-xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold text-white text-base mb-2 lg:text-left text-center">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed lg:text-left text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
