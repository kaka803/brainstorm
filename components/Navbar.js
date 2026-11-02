"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_SRC = "/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isServices = pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0A0E17] text-slate-300 text-xs py-2.5 px-4 relative z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-slate-300">
            <a
              href="tel:+923332556206"
              className="flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <i className="fa-solid fa-phone text-[#E85D04]"></i>
              <span>+92 333 2556206</span>
            </a>
            <span className="hidden sm:flex items-center gap-2 text-slate-400">
              <i className="fa-solid fa-location-dot text-[#E85D04]"></i>
              <span>Lahore, Pakistan</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5"></span>
              24/7 Operations Active
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              US & UK Shift Alignments
            </span>
            <Link
              href="/contact"
              className="hover:text-[#E85D04] text-xs text-slate-200 font-bold transition-colors ml-2"
            >
              Contact Desk →
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FLOATING / STICKY NAVIGATION */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
            : "bg-white/85 backdrop-blur-sm py-4 border-b border-slate-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO - IMAGE ONLY */}
            <Link href="/" className="flex items-center py-1 group" aria-label="Brainstorm Home">
              <img
                src={LOGO_SRC}
                alt="Brainstorm Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-xs">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isHome
                    ? "bg-white text-slate-900 shadow-xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isAbout
                    ? "bg-white text-slate-900 shadow-xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isServices
                    ? "bg-white text-slate-900 shadow-xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                Services
              </Link>
              <a
                href="/#benefits"
                className="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all"
              >
                Benefits
              </a>
              <a
                href="/#calculator"
                className="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all"
              >
                Pricing
              </a>
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isContact
                    ? "bg-white text-slate-900 shadow-xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* RIGHT ACTION BUTTONS */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="tel:+923332556206"
                className="px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all flex items-center gap-1.5"
              >
                <i className="fa-solid fa-phone text-[#E85D04]"></i>
                <span>Call Us</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Book Consultation</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#E85D04] sm:hidden"
              >
                Contact
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                <i
                  className={`fa-solid ${
                    mobileMenuOpen ? "fa-xmark" : "fa-bars"
                  } text-lg`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-xl shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-bold ${
                isHome ? "bg-orange-50 text-[#E85D04]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-bold ${
                isAbout ? "bg-orange-50 text-[#E85D04]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-bold ${
                isServices ? "bg-orange-50 text-[#E85D04]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Services
            </Link>
            <a
              href="/#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Benefits & Stats
            </a>
            <a
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Project Calculator
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-bold ${
                isContact ? "bg-orange-50 text-[#E85D04]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <a
                href="tel:+923332556206"
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-phone text-[#E85D04]"></i>
                <span>Direct: +92 333 2556206</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#E85D04] hover:bg-[#ff6b00] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Strategy Call</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
