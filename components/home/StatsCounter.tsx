"use client";

import { FadeIn, CountUp } from "@/components/motion";

const stats = [
  { numericValue: 500, suffix: "+", label: "Projects Completed" },
  { numericValue: 98, suffix: "%", label: "Estimate Accuracy" },
  { raw: "24hr", label: "Average Turnaround" },
  { numericValue: 50, suffix: "", label: "States Served" },
];

export function StatsCounter() {
  return (
    <FadeIn>
      <section className="bg-[#0B1F3D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center px-4">
                <div
                  className="text-4xl lg:text-5xl font-bold text-[#C9A961] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {"numericValue" in stat ? (
                    <CountUp
                      to={stat.numericValue!}
                      suffix={stat.suffix}
                      duration={1.6 + i * 0.15}
                    />
                  ) : (
                    stat.raw
                  )}
                </div>
                <div className="text-white/60 text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
