import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { HeroForm } from "@/components/home/HeroForm";

const highlights = [
  "98% Estimate Accuracy",
  "24-48 Hour Turnaround",
  "All Trades Covered",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site with workers and cranes at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3D]/95 via-[#0B1F3D]/80 to-[#0B1F3D]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block text-[#C9A961] text-sm font-semibold tracking-[0.15em] uppercase mb-6 border border-[#C9A961]/30 px-4 py-1.5 rounded-full">
              Nationwide Construction Estimating
            </span>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Win More Bids with{" "}
              <span className="text-[#C9A961] italic">Precision</span>{" "}
              Estimates
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Accurate construction cost estimates, quantity takeoffs, and bid packages
              delivered in 24–48 hours — helping contractors compete and win across all
              50 states.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#C9A961] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all hover:bg-white/5"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Right — quick quote form */}
          <div className="w-full">
            <div className="bg-[#0B1F3D]/70 backdrop-blur-md border border-white/10 rounded-2xl p-7 shadow-2xl">
              <div className="mb-5">
                <h2
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Get a Free Estimate
                </h2>
                <p className="text-white/50 text-sm">
                  Submit your project details — we respond within 1 business day.
                </p>
              </div>
              <HeroForm />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
