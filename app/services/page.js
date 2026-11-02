import Link from "next/link";
import { coreServices, marketingAndOperationsServices } from "@/lib/servicesData";

export const metadata = {
  title: "Services & Capabilities | Brainstorm Communications",
  description: "Explore our Custom Software Development, AI & Business Automation, Outbound Contact Center, and Marketing & Operations solutions in Lahore, Pakistan.",
};

export default function ServicesDirectoryPage() {
  return (
    <div className="bg-[#F8F9FA] text-slate-900 selection:bg-[#E85D04] selection:text-white">
      
      {/* ========================================================
          1. HERO SECTION (CURVED POD DESIGN MATCHING HOMEPAGE)
          ======================================================== */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden bg-[#080D18] text-white shadow-2xl border border-slate-800/80 min-h-[540px] sm:min-h-[600px] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16">
          
          {/* Ambient Background & Grid Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D18]/90 via-[#0B1324]/85 to-[#080D18] z-0 pointer-events-none"></div>
          <div
            className="absolute inset-0 opacity-[0.16] bg-cover bg-center z-0 mix-blend-luminosity filter contrast-125"
            style={{ backgroundImage: `url('/images/about/expertise.jpg')` }}
          ></div>
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#E85D04]/25 via-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none z-0 animate-pulse-glow"></div>
          <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

          {/* Sub-Header Row Inside Hero: Left Badge & Quick Status */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            
            {/* Top-Left Frosted Badge */}
            <div className="glass-pill px-4 py-2.5 rounded-2xl max-w-xs border border-white/15 backdrop-blur-md shadow-lg animate-hero-badge">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] animate-ping"></span>
                <span>Capabilities Directory</span>
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                END-TO-END CAPABILITIES
              </div>
              <p className="text-[11px] text-slate-300/90 leading-tight mt-0.5">
                Custom software, outbound telemarketing squads & AI integrations
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="hidden md:flex items-center gap-4 glass-pill px-5 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-slate-200 animate-hero-badge">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>250+ Dedicated Caller Seats</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-code text-[#E85D04]"></i>
                <span>Full-Stack Agile Sprints</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-orange-400"></i>
                <span>US & UK Timezone Aligned</span>
              </span>
            </div>
          </div>

          {/* Bottom Hero Row: Punchy Editorial Headline & Floating Glass Card */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12 sm:mt-16">
            
            {/* Left Column: Big Headline */}
            <div className="lg:col-span-8 space-y-5">
              <span className="pill-badge-dark">
                <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                Dedicated Offshore Excellence
              </span>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] animate-hero-title">
                Engineering & Dedicated Teams for Scalable Global Growth
              </h1>
              
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal animate-hero-desc">
                From dedicated outbound telemarketing squads and 24/7 BPO desks to custom full-stack software and autonomous AI dialers, discover our battle-tested solutions tailored for global scale.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3 animate-hero-cta">
                <a
                  href="#flagship-services"
                  className="px-7 py-3.5 rounded-full bg-[#E85D04] hover:bg-[#ff6b00] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Core Pillars</span>
                  <i className="fa-solid fa-arrow-down text-xs"></i>
                </a>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full glass-pill hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <span>Book Scoping Consultation</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>

                <a
                  href="tel:+923332556206"
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs transition-all flex items-center gap-2 border border-white/10"
                >
                  <i className="fa-solid fa-phone text-orange-400"></i>
                  <span>+92 333 2556206</span>
                </a>
              </div>
            </div>

            {/* Right Column: Floating Frosted Card */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end animate-hero-card">
              <div className="glass-hero-card rounded-3xl p-5 border border-white/20 w-full max-w-sm shadow-2xl backdrop-blur-xl space-y-3.5 card-lift-dark">
                <div className="relative h-32 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                  <img
                    src="/images/about/global.jpg"
                    alt="Offshore Technology Lab"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-[10px] text-emerald-300 font-bold backdrop-blur-sm">
                    ● Rapid 7-Day Ramp
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#E85D04]">
                    Offshore Lab & BPO
                  </div>
                  <h4 className="text-sm font-extrabold text-white mt-1">
                    Turnkey Sizing & Flexible Retainers
                  </h4>
                  <p className="text-xs text-slate-300/90 mt-1 leading-relaxed">
                    From a 3-agent starter squad to enterprise full-stack development teams, tailored to US/UK timezones.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                  <a
                    href="#flagship-services"
                    className="flex-1 py-2 text-center text-xs font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                  >
                    View Pillars
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 py-2 text-center text-xs font-black text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md"
                  >
                    Book Scoping
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FLAGSHIP CORE SERVICES */}
      <section id="flagship-services" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill-badge pill-badge-orange mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Primary Flagships
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              03 Core Service Pillars
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Custom web apps, autonomous AI workflows, and dedicated outbound sales squads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:border-[#E85D04] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-2xl group-hover:bg-[#E85D04] group-hover:text-white transition-all shadow-xs">
                      <i className={service.icon}></i>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#E85D04] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E85D04] mb-3">
                    {service.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E85D04] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-8 text-xs text-slate-600">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <i className="fa-solid fa-circle-check text-[#E85D04] text-[11px] mt-0.5 shrink-0"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{service.buttonText}</span>
                    <i className="fa-solid fa-arrow-right text-[11px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEPARATE CATEGORY: MARKETING & OPERATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill-badge pill-badge-orange mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Supporting Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Marketing & Operations
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Google Maps 3-pack dominance, local SEO campaigns, customized script copywriting, and 100% audio quality QA audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingAndOperationsServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:border-[#E85D04] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl shadow-xs group-hover:bg-[#E85D04] group-hover:text-white transition-all">
                      <i className={service.icon}></i>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-slate-500">
                    {service.bullets.slice(0, 4).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#E85D04] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>{service.buttonText}</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
