import type { Metadata } from "next";
import { Mail, Phone, Clock, Globe } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Construction Estimate Quote",
  description:
    "Contact Bid Count Estimation for a free construction cost estimate quote. Available nationwide. Fast response, no obligation. Submit your project details today.",
  alternates: {
    canonical: "https://bidcountestimation.com/contact",
  },
  openGraph: {
    title: "Contact Bid Count Estimation | Free Construction Estimate Quote",
    description:
      "Get a free construction cost estimate. Submit your project details and we'll respond within 1 business day.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Bid Count Estimation",
  description: "Get a free construction cost estimate quote",
  url: "https://bidcountestimation.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Bid Count Estimation",
    telephone: "+1-800-243-2686",
    email: "info@bidcountestimation.com",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="bg-[#0B1F3D] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#C9A961] text-sm font-semibold tracking-[0.15em] uppercase mb-4 border border-[#C9A961]/30 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Request a Free Estimate
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a detailed, accurate estimate
            with no commitment required. Most requests answered within 1 business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2
                className="text-2xl font-bold text-[#0B1F3D] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Tell Us About Your Project
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill in the details below and we&apos;ll get back to you with a quote or
                follow-up questions within 1 business day.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#0B1F3D] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-4 text-[#C9A961]">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <a
                    href="mailto:info@bidcountestimation.com"
                    className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-white mb-0.5">Email Us</div>
                      <div className="text-white/60 group-hover:text-white/90 transition-colors">
                        info@bidcountestimation.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+18002432686"
                    className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-white mb-0.5">Call Us</div>
                      <div className="text-white/60 group-hover:text-white/90 transition-colors">
                        (800) 243-2686
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-white mb-0.5">Business Hours</div>
                      <div className="text-white/60">
                        Mon – Fri: 7:00 AM – 6:00 PM EST
                        <br />
                        Sat: 9:00 AM – 2:00 PM EST
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-white mb-0.5">Service Area</div>
                      <div className="text-white/60">All 50 United States</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-[#0B1F3D] text-base mb-4">What to Expect</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  {[
                    "Submit your project details and drawings",
                    "We review your request and confirm scope",
                    "Receive your detailed estimate within 24–48 hours",
                    "Review together — revisions included",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C9A961]/10 text-[#C9A961] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-[#C9A961]/10 rounded-2xl border border-[#C9A961]/20 p-5 text-sm text-[#0B1F3D]">
                <p className="font-semibold mb-1">🎯 Free First Estimate</p>
                <p className="text-gray-600 leading-relaxed">
                  New clients receive their first project estimate at no charge.
                  No credit card, no contract required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
