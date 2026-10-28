import Link from "next/link";

const LOGO_SRC = "/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src={LOGO_SRC}
                alt="Brainstorm Communications Footer Logo"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1.5 shadow-sm"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Brainstorm Communications Call Centre and Software House. Combining engineering capability, telemarketing expertise,
              and custom enterprise scripting in Lahore, Pakistan since 2006.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h5 className="text-white font-bold mb-4 text-xs tracking-wider uppercase">Capabilities</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/custom-software" className="hover:text-[#E85D04] transition-colors">
                  Custom Software & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services/outbound-call-centre" className="hover:text-[#E85D04] transition-colors">
                  Outbound Call Centre
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-[#E85D04] transition-colors">
                  AI Voice & CRM Automation
                </Link>
              </li>
              <li>
                <Link href="/services/gmb-seo" className="hover:text-[#E85D04] transition-colors">
                  Google Business Profile SEO
                </Link>
              </li>
              <li>
                <Link href="/services/turnkey-hybrid" className="hover:text-[#E85D04] transition-colors">
                  Turnkey Hybrid Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-xs tracking-wider uppercase">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#E85D04] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E85D04] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#E85D04] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <a href="/#process" className="hover:text-[#E85D04] transition-colors">
                  Our 4-Step Process
                </a>
              </li>
              <li>
                <a href="/#calculator" className="hover:text-[#E85D04] transition-colors">
                  Pricing Estimator
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E85D04] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Center */}
          <div>
            <h5 className="text-white font-bold mb-4 text-xs tracking-wider uppercase">Contact Center</h5>
            <div className="text-xs space-y-2.5 text-slate-400">
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-[#E85D04] mt-0.5"></i>
                <span>Lahore, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-[#E85D04]"></i>
                <a href="tel:+924235880000" className="hover:text-white transition-colors">
                  +92 42 35880000
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-[#E85D04]"></i>
                <a href="mailto:info@brainstormcommunications.org" className="hover:text-white transition-colors">
                  info@brainstormcommunications.org
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-[#E85D04]"></i>
                <span>www.brainstormcommunications.org</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>&copy; 2006 - 2026 Brainstorm Communications. All rights reserved.</div>
          <div className="flex space-x-6 items-center">
            <a
              href="http://www.brainstormcommunications.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E85D04] transition-colors"
            >
              Official Website
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#E85D04] transition-colors"
            >
              <i className="fa-brands fa-linkedin text-base"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
