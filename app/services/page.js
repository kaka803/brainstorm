import Link from "next/link";
import { coreServices, marketingAndOperationsServices } from "@/lib/servicesData";

export const metadata = {
  title: "Services & Capabilities | Brainstorm Communications",
  description: "Explore our Custom Software Development, AI & Business Automation, Outbound Contact Center, and Marketing & Operations solutions in Lahore, Pakistan.",
};

export default function ServicesDirectoryPage() {
  return (
    <div className="bg-white text-slate-800 selection:bg-[#E85D04] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-orange-50/50 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E85D04]/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="pill-badge pill-badge-orange">
            <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
            End-to-End Capabilities
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Our Core Services & Specializations
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Combining software engineering rigor with enterprise telemarketing expertise. Click on any capability below to explore deliverables, tech stack, and engagement models.
          </p>
        </div>
      </section>

      {/* FLAGSHIP CORE SERVICES (Custom Software, AI Automation, Outbound Contact Center) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
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
