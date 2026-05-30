import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { BcWordmark } from "@/components/brand/BcLogo";

const services = [
  { label: "Construction Cost Estimating", href: "/services#cost-estimating" },
  { label: "Quantity Takeoffs", href: "/services#quantity-takeoffs" },
  { label: "Bid Preparation", href: "/services#bid-preparation" },
  { label: "Project Budgeting", href: "/services#project-budgeting" },
];

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1F3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Bid Count Estimation home">
              <BcWordmark dark />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Precision cost estimating for construction professionals nationwide.
              We help contractors win more bids with accurate, fast estimates.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="mailto:info@bidcountestimation.com" className="flex items-center gap-2 hover:text-[#C9A961] transition-colors">
                <Mail className="w-4 h-4 text-[#C9A961]" />
                info@bidcountestimation.com
              </a>
              <a href="tel:+18002432686" className="flex items-center gap-2 hover:text-[#C9A961] transition-colors">
                <Phone className="w-4 h-4 text-[#C9A961]" />
                (800) 243-2686
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A961] shrink-0" />
                Nationwide Service — All 50 States
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A961] transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A961] transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="bg-[#13315C] rounded-xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Ready to Win More Bids?</h3>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Get an accurate estimate in as little as 24 hours. No obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Bid Count Estimation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
