"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BcWordmark } from "@/components/brand/BcLogo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = isHome
    ? scrolled
      ? "bg-[#0B1F3D]/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-[#0B1F3D] shadow-lg";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Bid Count Estimation home">
            <BcWordmark dark className="hover:opacity-90 transition-opacity" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors tracking-wide",
                  pathname === link.href
                    ? "text-[#C9A961]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-semibold tracking-wide border-none"
              )}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0B1F3D]/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[#C9A961] bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-2">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-[#C9A961] hover:bg-[#D9BD7C] text-[#0B1F3D] font-semibold border-none justify-center"
                )}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
