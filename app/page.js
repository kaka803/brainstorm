"use client";

import { useState } from "react";

// Global Logo URL - Updated to /logo.png across the entire website
const LOGO_SRC = "/logo.png";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorService, setCalculatorService] = useState("bpo");
  const [calculatorScale, setCalculatorScale] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Outbound Call Centre & Telemarketing",
    message: "",
  });

  // Dynamic Calculator calculations matching original logic
  const getEstimateData = () => {
    let scaleLabel = "Standard Scale";
    if (calculatorScale === 1) scaleLabel = "Starter Scale";
    if (calculatorScale === 3) scaleLabel = "Enterprise Scale";

    let costRange = "$2,500 - $5,000 / mo";
    let timeText = "6-12 Dedicated Callers";
    let bullets = [
      "Lahore Outbound Call Centre Operations",
      "Custom Scripting & Telemarketing Training",
      "Daily Performance Reports & Quality QA",
    ];

    if (calculatorService === "bpo") {
      if (calculatorScale === 1) {
        costRange = "$1,200 - $2,200 / mo";
        timeText = "3-5 Agents Squad";
      } else if (calculatorScale === 2) {
        costRange = "$2,500 - $5,000 / mo";
        timeText = "6-12 Dedicated Callers";
      } else {
        costRange = "$6,000 - $12,000+ / mo";
        timeText = "15+ Dedicated Outbound Squad";
      }
      bullets = [
        "Lahore Outbound Call Centre Operations",
        "Custom Scripting & Telemarketing Training",
        "Daily Performance Reports & Quality QA",
      ];
    } else if (calculatorService === "web") {
      if (calculatorScale === 1) {
        costRange = "$800 - $1,500";
        timeText = "1-2 Weeks Delivery";
      } else if (calculatorScale === 2) {
        costRange = "$1,800 - $3,500";
        timeText = "2-4 Weeks Delivery";
      } else {
        costRange = "$4,000 - $8,500+";
        timeText = "4-8 Weeks Delivery";
      }
      bullets = [
        "Custom React / Node.js Architecture",
        "Database API Portal & Integrations",
        "Responsive Design & QA Audit",
      ];
    } else if (calculatorService === "ai") {
      if (calculatorScale === 1) {
        costRange = "$600 - $1,200";
        timeText = "1 Week Implementation";
      } else if (calculatorScale === 2) {
        costRange = "$1,500 - $3,000";
        timeText = "2-3 Weeks Implementation";
      } else {
        costRange = "$3,500 - $7,000+";
        timeText = "3-5 Weeks Implementation";
      }
      bullets = [
        "LLM AI Voice & Text Workflows",
        "Auto CRM Webhooks & Dialer Sync",
        "Custom Conversational Logic",
      ];
    } else if (calculatorService === "seo") {
      if (calculatorScale === 1) {
        costRange = "$400 - $800 / mo";
        timeText = "Single Location";
      } else if (calculatorScale === 2) {
        costRange = "$900 - $1,800 / mo";
        timeText = "Multi-Branch Growth";
      } else {
        costRange = "$2,000 - $4,000+ / mo";
        timeText = "Regional Map Dominance";
      }
      bullets = [
        "Google Business Profile Optimization",
        "Local Citation & Geotagged Campaigns",
        "Google Map Pack Rank Building",
      ];
    }

    return { scaleLabel, costRange, timeText, bullets };
  };

  const estimate = getEstimateData();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Outbound Call Centre & Telemarketing",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-phone text-[#E85D04]"></i> +92 42 35880000
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-envelope text-[#E85D04]"></i> info@brainstormcommunications.org
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
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
              className="hover:text-[#E85D04] text-slate-400"
            >
              <i className="fa-brands fa-linkedin text-sm"></i>
            </a>
            <a href="#contact" className="hover:text-[#E85D04] text-xs text-slate-300 font-semibold">
              Contact Support
            </a>
          </div>
        </div>
      </div>

      {/* NAVIGATION HEADER WITH DIRECT USER LOGO IMAGE */}
      <nav className="sticky top-0 z-40 glass-nav-light transition-all duration-300 shadow-sm" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* BRAND LOGO */}
            <a href="#" className="flex items-center space-x-3 group py-2">
              <img
                src={LOGO_SRC}
                alt="Brainstorm Communications Logo"
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
              <a href="#" className="text-[#E85D04] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#E85D04] transition-colors">About Us</a>
              <a href="#services" className="hover:text-[#E85D04] transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[#E85D04] transition-colors">Portfolio</a>
              <a href="#calculator" className="hover:text-[#E85D04] transition-colors">Pricing & Scope</a>
              <a href="#contact" className="hover:text-[#E85D04] transition-colors">Contact Us</a>
            </div>

            {/* RIGHT CTA BUTTON */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 text-white font-semibold text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-headset text-xs"></i>
                <span>Get Consultation</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-[#E85D04] p-2 rounded-lg bg-slate-100 border border-slate-200"
              >
                <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAV DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-lg">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#E85D04] font-bold">
              Home
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#E85D04] font-medium">
              About Us
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#E85D04] font-medium">
              Services
            </a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#E85D04] font-medium">
              Portfolio
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#E85D04] font-medium">
              Pricing & Scope
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 hover:text-[#E85D04] font-medium">
              Contact Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full mt-2 py-3 rounded-xl bg-[#E85D04] text-white font-bold shadow-md"
            >
              Get Consultation
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E85D04] text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-microchip"></i>
                <span>Software House & Outbound Call Centre</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Innovative <span className="gradient-text-orange">Software Solutions</span> & Outbound Contact Center
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Brainstorm Communications combines technology capability and telemarketing expertise. Based in
                Lahore, Pakistan, we deliver full-stack enterprise software, custom AI automation, and dedicated
                outbound call squads engineered for business growth since 2006.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E85D04] hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <span>Our Capabilities</span>
                  <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-800 hover:text-[#E85D04] font-semibold text-base border border-slate-300 hover:border-[#E85D04] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fa-solid fa-paper-plane text-[#E85D04]"></i>
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            {/* Right Showcase Card with User's Logo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="sample-card rounded-2xl p-6 shadow-xl space-y-6 bg-white">
                  {/* Hero Image Banner with /logo.png */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center justify-center text-center shadow-inner">
                    <img
                      src={LOGO_SRC}
                      alt="Brainstorm Communications Main Logo"
                      className="h-28 w-auto object-contain mb-4 filter drop-shadow-md"
                    />
                    <span className="text-xs font-mono text-slate-500 font-bold tracking-widest uppercase">
                      Software House & BPO Center
                    </span>
                  </div>

                  {/* Highlights Widget */}
                  <div className="space-y-3 font-mono text-xs text-slate-700">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="flex items-center gap-2 text-slate-900 font-semibold">
                        <i className="fa-solid fa-headset text-[#E85D04]"></i> Dedicated Call Squads:
                      </span>
                      <span className="text-[#E85D04] font-bold">100+ Active Seats</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="flex items-center gap-2 text-slate-900 font-semibold">
                        <i className="fa-solid fa-laptop-code text-[#E85D04]"></i> Development Tech:
                      </span>
                      <span className="text-slate-900 font-bold">React / Node / AI / Python</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="flex items-center gap-2 text-slate-900 font-semibold">
                        <i className="fa-solid fa-shield-halved text-[#E85D04]"></i> Quality QA Audit:
                      </span>
                      <span className="text-emerald-600 font-bold">100% Monitored</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER BAR */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-800">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">2006</div>
              <div className="text-xs text-[#E85D04] uppercase tracking-wider font-semibold mt-1">
                Year Founded
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                18+ <span className="text-[#E85D04]">Years</span>
              </div>
              <div className="text-xs text-[#E85D04] uppercase tracking-wider font-semibold mt-1">
                Industry Leadership
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">11-50</div>
              <div className="text-xs text-[#E85D04] uppercase tracking-wider font-semibold mt-1">
                Core Employees
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">500+</div>
              <div className="text-xs text-[#E85D04] uppercase tracking-wider font-semibold mt-1">
                Successful Campaigns
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E85D04] text-xs font-bold uppercase">
                About Brainstorm Communications
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Combining Software Engineering Capability & Telemarketing Expertise
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Brainstorm Communications Call Centre combines capability and expertise in order to provide you
                with the right solution, taking into full consideration industry, proposition, timing, and
                target market.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Brainstorm Communications engages in the full process of project planning and set up, ensuring a
                full understanding of your requirement giving you the full benefit of our many years of
                experience within the call centre and software development industry.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Our dedicated outbound call centre and software development hub is located in{" "}
                <strong className="text-slate-900">Lahore, Pakistan</strong>. Our ability to deliver effective outbound
                call centre solutions is based on a solid foundation of{" "}
                <span className="text-[#E85D04] font-semibold">
                  Expertise, Technology, Recruitment, Training, and Custom Scripting
                </span>.
              </p>
            </div>

            {/* Right Card Box with Logo */}
            <div className="lg:col-span-6">
              <div className="sample-card rounded-2xl p-8 bg-slate-50 border border-slate-200 space-y-6">
                <div className="flex items-center space-x-4 pb-6 border-b border-slate-200">
                  <img
                    src={LOGO_SRC}
                    alt="Brainstorm Logo"
                    className="h-14 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Brainstorm Communications</h3>
                    <p className="text-xs text-slate-500">Outsourcing & Offshoring Consulting • Lahore, PK</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-semibold">Official Website:</span>
                    <a
                      href="http://www.brainstormcommunications.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E85D04] hover:underline font-mono"
                    >
                      www.brainstormcommunications.org
                    </a>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-semibold">Industry Focus:</span>
                    <span className="text-slate-900 font-medium">
                      Software Engineering & Outbound Telemarketing
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-semibold">Company Size:</span>
                    <span className="text-slate-900 font-medium">11-50 Employees</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-semibold">Specialties:</span>
                    <span className="text-slate-900 font-medium">
                      Telemarketing, Outbound Call Centre, Software Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#E85D04] uppercase tracking-widest block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Software House & Outbound Call Centre Services
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              High-performance software platforms and dedicated outbound call center squads tailored to your
              target market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="sample-card rounded-2xl p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] group-hover:bg-[#E85D04] group-hover:text-white transition-all mb-6">
                  <i className="fa-solid fa-code text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E85D04] transition-colors">
                  1. Custom Software & Web Apps
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Full-stack enterprise applications, custom CRM platforms, REST APIs, and modern web apps
                  engineered for performance and scalability.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-[#E85D04] font-semibold">
                React • Node.js • Cloud Systems
              </div>
            </div>

            {/* Service 2 */}
            <div className="sample-card rounded-2xl p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] group-hover:bg-[#E85D04] group-hover:text-white transition-all mb-6">
                  <i className="fa-solid fa-headset text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E85D04] transition-colors">
                  2. Outbound Call Centre
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Lahore-based outbound call centre offering telesales, B2B lead generation, appointment
                  setting, and targeted customer acquisition.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-[#E85D04] font-semibold">
                Recruitment • Scripting • Dialers
              </div>
            </div>

            {/* Service 3 */}
            <div className="sample-card rounded-2xl p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] group-hover:bg-[#E85D04] group-hover:text-white transition-all mb-6">
                  <i className="fa-solid fa-robot text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E85D04] transition-colors">
                  3. AI Automation & CRM Integration
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  AI voice assistants, intelligent chatbots, CRM webhooks, and automated call routing to
                  maximize sales team efficiency.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-[#E85D04] font-semibold">
                AI Agents • CRM Sync • Auto Workflows
              </div>
            </div>

            {/* Service 4 */}
            <div className="sample-card rounded-2xl p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] group-hover:bg-[#E85D04] group-hover:text-white transition-all mb-6">
                  <i className="fa-solid fa-store text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E85D04] transition-colors">
                  4. Google Business Profile & GMB SEO
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Local SEO optimization, Google Map Pack dominance, citation building, and review management
                  to scale local leads.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-[#E85D04] font-semibold">
                Map Pack Ranking • Citations • SEO
              </div>
            </div>

            {/* Service 5 */}
            <div className="sample-card rounded-2xl p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] group-hover:bg-[#E85D04] group-hover:text-white transition-all mb-6">
                  <i className="fa-solid fa-file-signature text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E85D04] transition-colors">
                  5. Scripting, Training & Quality QA
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Complete campaign onboarding with tailored script copywriting, agent dialect training, and
                  continuous QA performance monitoring.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-[#E85D04] font-semibold">
                Scripting • Training • QA Audits
              </div>
            </div>

            {/* Service 6 / Brand Feature Card */}
            <div className="sample-card rounded-2xl p-8 border-l-4 border-l-[#E85D04] flex flex-col justify-between bg-white">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <img
                    src={LOGO_SRC}
                    alt="Brainstorm Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-[10px] font-mono text-slate-500 font-bold">EST. 2006</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Turnkey Hybrid Packages</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Combine custom software development with dedicated outbound telemarketing teams managed
                  directly from Lahore.
                </p>
              </div>
              <a
                href="#contact"
                className="w-full py-3 rounded-xl bg-[#E85D04] text-white text-center font-bold text-xs uppercase tracking-wider block hover:bg-orange-600 transition-colors shadow-sm"
              >
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#E85D04] uppercase tracking-widest block mb-2">
              Our Work
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Proven Results & Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="sample-card rounded-2xl overflow-hidden group">
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#E85D04]">CASE STUDY 01</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-[#E85D04] font-bold">
                  TELEMARKETING
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                  B2B Outbound Lead Generation
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  Deployed a dedicated 15-seat caller squad with tailored script writing, boosting qualified
                  appointment rates by 40%.
                </p>
                <div className="text-xs font-mono text-emerald-600 font-bold">+40% Qualified Lead Increase</div>
              </div>
            </div>

            <div className="sample-card rounded-2xl overflow-hidden group">
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#E85D04]">CASE STUDY 02</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-[#E85D04] font-bold">
                  SOFTWARE HOUSE
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                  Call Center CRM & Dialer Portal
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  Engineered a custom web portal featuring real-time lead distribution, call logging, and live
                  PostgreSQL reporting dashboard.
                </p>
                <div className="text-xs font-mono text-emerald-600 font-bold">99.9% Uptime Maintained</div>
              </div>
            </div>

            <div className="sample-card rounded-2xl overflow-hidden group">
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#E85D04]">CASE STUDY 03</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-[#E85D04] font-bold">
                  LOCAL SEO
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                  Google Business Map Pack Campaign
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  Optimized regional GMB listings and local business citations, securing top positions across
                  competitive search keywords.
                </p>
                <div className="text-xs font-mono text-emerald-600 font-bold">Top 3 Map Pack Ranking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING ESTIMATOR */}
      <section id="calculator" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#E85D04] uppercase tracking-widest block mb-2">
              Instant Quote
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Project Scope & Pricing Estimator</h2>
            <p className="text-slate-600 mt-2 text-sm">
              Select your service and required scope to generate real-time estimates.
            </p>
          </div>

          <div className="sample-card rounded-2xl p-6 sm:p-10 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    1. Select Required Service
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalculatorService("bpo")}
                      className={`calc-btn p-3 rounded-xl border text-slate-900 font-semibold text-xs text-left flex items-center gap-2 cursor-pointer ${
                        calculatorService === "bpo"
                          ? "border-[#E85D04] bg-orange-50"
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      <i className="fa-solid fa-headset text-[#E85D04]"></i> Outbound Call Squad
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalculatorService("web")}
                      className={`calc-btn p-3 rounded-xl border font-semibold text-xs text-left flex items-center gap-2 cursor-pointer ${
                        calculatorService === "web"
                          ? "border-[#E85D04] bg-orange-50 text-slate-900"
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      <i className="fa-solid fa-code text-[#E85D04]"></i> Software & Web App
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalculatorService("ai")}
                      className={`calc-btn p-3 rounded-xl border font-semibold text-xs text-left flex items-center gap-2 cursor-pointer ${
                        calculatorService === "ai"
                          ? "border-[#E85D04] bg-orange-50 text-slate-900"
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      <i className="fa-solid fa-robot text-[#E85D04]"></i> AI Automation
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalculatorService("seo")}
                      className={`calc-btn p-3 rounded-xl border font-semibold text-xs text-left flex items-center gap-2 cursor-pointer ${
                        calculatorService === "seo"
                          ? "border-[#E85D04] bg-orange-50 text-slate-900"
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      <i className="fa-solid fa-chart-line text-[#E85D04]"></i> GMB SEO Management
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Project Scale / Team Seats
                    </label>
                    <span className="text-[#E85D04] font-mono font-bold text-sm">
                      {estimate.scaleLabel}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="3"
                    value={calculatorScale}
                    onChange={(e) => setCalculatorScale(parseInt(e.target.value))}
                    className="w-full accent-[#E85D04] bg-slate-200 rounded-lg cursor-pointer h-2"
                  />

                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>Starter</span>
                    <span>Standard</span>
                    <span>Enterprise</span>
                  </div>
                </div>
              </div>

              {/* Output Card */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-1 uppercase">
                    Estimated Investment
                  </span>
                  <div className="text-3xl font-extrabold text-white font-mono my-2">
                    {estimate.costRange}
                  </div>
                  <div className="text-xs text-[#E85D04] font-medium mb-4">
                    <i className="fa-solid fa-clock mr-1"></i> {estimate.timeText}
                  </div>

                  <ul className="text-xs text-slate-300 space-y-2 pt-4 border-t border-slate-800">
                    {estimate.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <i className="fa-solid fa-check text-emerald-400 mt-0.5"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="w-full mt-6 py-3.5 rounded-xl bg-[#E85D04] hover:bg-orange-600 text-white font-bold text-sm text-center block shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
                >
                  Request Official Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#E85D04] uppercase tracking-widest block mb-2">
                  Get In Touch
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Contact Brainstorm Communications
                </h2>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                  Brainstorm Communications engages in full project planning and setup. Reach out to discuss
                  your software development or outbound call center requirements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Headquarters & Call Center</h4>
                    <p className="text-slate-600 text-xs mt-1">Lahore, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] flex-shrink-0">
                    <i className="fa-solid fa-phone text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Direct Phone</h4>
                    <p className="text-slate-600 text-xs mt-1">+92 42 35880000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] flex-shrink-0">
                    <i className="fa-solid fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Email Address</h4>
                    <p className="text-slate-600 text-xs mt-1">info@brainstormcommunications.org</p>
                  </div>
                </div>
              </div>

              {/* Contact Logo Box with /logo.png */}
              <div className="p-4 rounded-xl sample-card bg-slate-50 flex items-center space-x-4">
                <img
                  src={LOGO_SRC}
                  alt="Brainstorm Logo"
                  className="h-12 w-auto object-contain"
                />
                <div className="text-xs text-slate-700">
                  <div className="font-bold text-slate-900">Brainstorm Communications</div>
                  <div className="text-slate-500">Software House & Call Centre • Founded 2006</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="sample-card rounded-2xl p-8 bg-white shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us A Message</h3>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-[#E85D04] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-[#E85D04] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-[#E85D04] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-[#E85D04] outline-none"
                      >
                        <option value="Outbound Call Centre & Telemarketing">
                          Outbound Call Centre & Telemarketing
                        </option>
                        <option value="Custom Software Development">
                          Custom Software Development
                        </option>
                        <option value="AI Automation & CRM Integration">
                          AI Automation & CRM Integration
                        </option>
                        <option value="Google Business Profile SEO">
                          Google Business Profile SEO
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your software project or call center campaign requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:border-[#E85D04] outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E85D04] hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER WITH /logo.png */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <a href="#" className="inline-block">
                <img
                  src={LOGO_SRC}
                  alt="Brainstorm Communications Footer Logo"
                  className="h-12 w-auto object-contain bg-white rounded-lg p-1.5"
                />
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                Brainstorm Communications Call Centre and Software House. Combining technology, expertise,
                recruitment, and custom scripting in Lahore, Pakistan since 2006.
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4 text-xs tracking-wider uppercase">Services</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-[#E85D04] transition-colors">Custom Software Apps</a></li>
                <li><a href="#services" className="hover:text-[#E85D04] transition-colors">Outbound Call Squads</a></li>
                <li><a href="#services" className="hover:text-[#E85D04] transition-colors">AI Voice & CRM Automation</a></li>
                <li><a href="#services" className="hover:text-[#E85D04] transition-colors">GMB SEO & Local Search</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4 text-xs tracking-wider uppercase">Quick Links</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#about" className="hover:text-[#E85D04] transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-[#E85D04] transition-colors">Portfolio</a></li>
                <li><a href="#calculator" className="hover:text-[#E85D04] transition-colors">Pricing Estimator</a></li>
                <li><a href="#contact" className="hover:text-[#E85D04] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4 text-xs tracking-wider uppercase">Contact Center</h5>
              <div className="text-xs space-y-2 text-slate-400">
                <p>
                  <i className="fa-solid fa-location-dot text-[#E85D04] mr-2"></i> Lahore, Pakistan
                </p>
                <p>
                  <i className="fa-solid fa-envelope text-[#E85D04] mr-2"></i> info@brainstormcommunications.org
                </p>
                <p>
                  <i className="fa-solid fa-globe text-[#E85D04] mr-2"></i> www.brainstormcommunications.org
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>&copy; 2006 - 2026 Brainstorm Communications. All rights reserved.</div>
            <div className="flex space-x-6">
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
                className="hover:text-[#E85D04] transition-colors"
              >
                <i className="fa-brands fa-linkedin text-base"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* SUCCESS MODAL BOX */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
            <p className="text-sm text-slate-600">
              Thank you for contacting Brainstorm Communications. Our team in Lahore will review your inquiry and get
              back to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 rounded-xl bg-[#E85D04] text-white font-bold text-sm hover:bg-orange-600 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
