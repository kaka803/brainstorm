"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_SRC = "/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isServices = pathname.startsWith("/services");

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 relative z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
            <a href="tel:+924235880000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <i className="fa-solid fa-phone text-[#E85D04]"></i> +92 42 35880000
            </a>
            <a href="mailto:info@brainstormcommunications.org" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <i className="fa-solid fa-envelope text-[#E85D04]"></i> info@brainstormcommunications.org
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <i className="fa-solid fa-location-dot text-[#E85D04]"></i> Lahore, Pakistan
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5"></span>
              24/7 Operations Active
            </span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#E85D04] text-slate-400 transition-colors"
            >
              <i className="fa-brands fa-linkedin text-sm"></i>
            </a>
            <Link href="/contact" className="hover:text-[#E85D04] text-xs text-slate-300 font-semibold transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <nav className="sticky top-0 z-40 glass-nav-light transition-all duration-300 shadow-sm" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* BRAND LOGO */}
            <Link href="/" className="flex items-center space-x-3 group py-2">
              <img
                src={LOGO_SRC}
                alt="Brainstorm Communications Logo"
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
              <Link
                href="/"
                className={`transition-colors flex items-center gap-1.5 ${
                  isHome ? "text-[#E85D04] font-bold" : "hover:text-[#E85D04]"
                }`}
              >
                {isHome && <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]"></span>}
                Home
              </Link>
              
              <Link
                href="/about"
                className={`transition-colors flex items-center gap-1.5 ${
                  isAbout ? "text-[#E85D04] font-bold" : "hover:text-[#E85D04]"
                }`}
              >
                {isAbout && <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]"></span>}
                About Us
              </Link>

              <Link
                href="/services"
                className={`transition-colors flex items-center gap-1.5 ${
                  isServices ? "text-[#E85D04] font-bold" : "hover:text-[#E85D04]"
                }`}
              >
                {isServices && <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]"></span>}
                Services
              </Link>

              <a href="/#process" className="hover:text-[#E85D04] transition-colors">
                Our Process
              </a>

              <a href="/#calculator" className="hover:text-[#E85D04] transition-colors">
                Pricing & Scope
              </a>

              <Link
                href="/contact"
                className={`transition-colors flex items-center gap-1.5 ${
                  isContact ? "text-[#E85D04] font-bold" : "hover:text-[#E85D04]"
                }`}
              >
                {isContact && <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]"></span>}
                Contact Us
              </Link>
            </div>

            {/* RIGHT CTA BUTTON */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 text-white font-semibold text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-headset text-xs"></i>
                <span>Get Consultation</span>
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                aria-label="Toggle navigation menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-[#E85D04] p-2 rounded-lg bg-slate-100 border border-slate-200 transition-colors"
              >
                <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAV DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-bold ${
                isHome ? "text-[#E85D04]" : "text-slate-700 hover:text-[#E85D04]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-bold ${
                isAbout ? "text-[#E85D04]" : "text-slate-700 hover:text-[#E85D04]"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-bold ${
                isServices ? "text-[#E85D04]" : "text-slate-700 hover:text-[#E85D04]"
              }`}
            >
              Services
            </Link>
            <a
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-[#E85D04] font-medium"
            >
              Our Process
            </a>
            <a
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-[#E85D04] font-medium"
            >
              Pricing & Scope
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-bold ${
                isContact ? "text-[#E85D04]" : "text-slate-700 hover:text-[#E85D04]"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 text-white font-bold shadow-md shadow-orange-500/20"
            >
              Get Consultation
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
