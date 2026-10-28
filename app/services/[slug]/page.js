import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Brainstorm Communications`,
    description: service.shortDesc,
  };
}

async function ServiceContent({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get other services for the bottom switcher
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-white text-slate-800 selection:bg-[#E85D04] selection:text-white">
      
      {/* ======================================================== */}
      {/* HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-orange-50/50 via-white to-white overflow-hidden border-b border-slate-100">
        
        {/* Ambient Decorative Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E85D04]/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow"></div>
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#E85D04] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-[#E85D04] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#E85D04] font-bold">{service.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="pill-badge pill-badge-orange">
                  <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
                  {service.badge}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Service {service.number}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-lg font-medium text-slate-700 leading-snug">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {service.shortDesc} Built and managed directly from our dedicated Lahore operations center with seamless international time zone alignment.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <i className="fa-solid fa-headset text-xs"></i>
                  <span>Request Custom Proposal</span>
                </Link>

                <Link
                  href="/#calculator"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-300 hover:border-[#E85D04] bg-white hover:bg-orange-50/50 text-slate-700 hover:text-[#E85D04] font-semibold text-sm shadow-xs transition-all"
                >
                  <i className="fa-solid fa-calculator text-xs text-[#E85D04]"></i>
                  <span>Calculate Cost & Scope</span>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6">
                {service.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#E85D04] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Card Column: Visual Tech Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 text-white border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E85D04]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E85D04]/30 transition duration-700"></div>

                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E85D04] to-orange-600 text-white flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30">
                    <i className={service.icon}></i>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider block mb-1">
                      Operational Infrastructure
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Full Turnkey Execution
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2">
                        <i className="fa-solid fa-location-dot text-orange-400"></i> Deployment Hub:
                      </span>
                      <span className="font-bold text-white">Lahore, Pakistan</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2">
                        <i className="fa-solid fa-clock text-orange-400"></i> Shift Alignments:
                      </span>
                      <span className="font-bold text-white">US (EST/PST) & UK (GMT)</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="flex items-center gap-2">
                        <i className="fa-solid fa-shield-halved text-emerald-400"></i> Legal & Data:
                      </span>
                      <span className="font-bold text-emerald-400">Enforceable NDAs Signed</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-2 font-bold">
                      Key Technology & Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-mono font-medium border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: WHAT WE DELIVER (Enterprise Deliverables) */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Complete Scope of Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Deliverables & Capabilities
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Every detail is engineered and rigorously audited by our team to guarantee quantifiable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs card-lift hover:border-orange-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-sm font-black mb-5 shadow-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {item}
                  </h3>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <i className="fa-solid fa-circle-check text-[#E85D04]"></i>
                  <span>Full QA Verification Included</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: ENGAGEMENT & PRICING MODELS */}
      {/* ======================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Flexible Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transparent Engagement Models
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Choose the operational model that matches your current business velocity and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.engagementModels.map((model, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 transition-all card-lift flex flex-col justify-between ${
                  idx === 0
                    ? "bg-white border-2 border-[#E85D04] shadow-lg shadow-orange-500/10"
                    : "bg-white border border-slate-200/90 shadow-sm"
                }`}
              >
                <div>
                  {idx === 0 && (
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-[#E85D04] mb-4">
                      Most Popular Model
                    </span>
                  )}
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                    {model.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {model.bestFor}
                  </p>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {model.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <i className="fa-solid fa-check text-[#E85D04] text-xs"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100">
                  <Link
                    href={`/contact?service=${service.slug}&model=${idx}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider block text-center transition-all ${
                      idx === 0
                        ? "bg-[#E85D04] hover:bg-orange-600 text-white shadow-md shadow-orange-500/25"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    Select This Engagement Model
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS FOR THIS SERVICE */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Direct Answers
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Service FAQs
            </h2>
            <p className="text-slate-500 text-sm">
              Common questions from clients regarding {service.shortTitle}.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white p-6 shadow-xs space-y-2"
              >
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-[#E85D04]"></i>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: EXPLORE OTHER SERVICES SWITCHER */}
      {/* ======================================================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="pill-badge pill-badge-orange mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                Cross-Functional Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore Other Brainstorm Services
              </h2>
            </div>
            <Link
              href="/#services"
              className="text-sm font-bold text-[#E85D04] hover:text-orange-600 transition-colors flex items-center gap-1.5"
            >
              <span>View All Capabilities</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs card-lift hover:border-[#E85D04] group flex flex-col justify-between block"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl mb-4 group-hover:bg-[#E85D04] group-hover:text-white transition-all shadow-xs">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.shortDesc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E85D04]">
                  <span>View Details</span>
                  <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform"></i>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: SERVICE CTA BANNER */}
      {/* ======================================================== */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E85D04]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="pill-badge bg-white/10 text-orange-400 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
            Launch Within 7 Days
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Deploy {service.shortTitle} with Brainstorm?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get in touch directly with our operations directors in Lahore. We will review your targets and deliver a custom roadmap.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
              <span>Book Strategy Scoping Call</span>
            </Link>

            <a
              href="tel:+924235880000"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all flex items-center gap-2"
            >
              <i className="fa-solid fa-phone text-orange-400 text-xs"></i>
              <span>+92 42 35880000</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function ServiceDetailPage({ params }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#E85D04] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ServiceContent params={params} />
    </Suspense>
  );
}

