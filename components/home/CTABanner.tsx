"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeUp } from "@/components/motion";

export function CTABanner() {
  return (
    <section className="py-20 bg-[#C9A961] overflow-hidden">
      <FadeUp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3D] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Win More Bids?
          </h2>
          <p className="text-[#0B1F3D]/70 text-lg max-w-2xl mx-auto mb-8">
            Get your first estimate free. No commitment, no contracts — just accurate numbers
            delivered fast so you can focus on what you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0B1F3D] hover:bg-[#13315C] text-white font-bold px-8 py-4 rounded-lg transition-colors text-base shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18002432686"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0B1F3D]/30 hover:border-[#0B1F3D] text-[#0B1F3D] font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              (800) 243-2686
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
