"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import { coreServices, marketingAndOperationsServices } from "@/lib/servicesData";

const LOGO_SRC = "/logo.png";

export default function Home() {
  const [calculatorService, setCalculatorService] = useState("bpo");
  const [calculatorScale, setCalculatorScale] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Outbound Call Centre & Telemarketing",
    message: "",
  });

  // Combine and format services for the creative carousel
  const allServicesList = [
    ...coreServices.map((s, idx) => ({
      ...s,
      num: String(idx + 1).padStart(2, "0"),
      img: idx === 0 ? "/images/about/expertise.jpg" : idx === 1 ? "/images/about/hero.jpg" : idx === 2 ? "/images/about/global.jpg" : "/images/about/expertise.jpg",
    })),
    ...marketingAndOperationsServices.map((s, idx) => ({
      ...s,
      num: String(coreServices.length + idx + 1).padStart(2, "0"),
      img: idx % 2 === 0 ? "/images/about/global.jpg" : "/images/about/hero.jpg",
    })),
  ];

  const filteredServices =
    activeCategory === "all"
      ? allServicesList
      : activeCategory === "core"
      ? allServicesList.filter((s) => s.category.includes("Core") || s.slug === "custom-software")
      : activeCategory === "call"
      ? allServicesList.filter((s) => s.slug.includes("call") || s.slug.includes("bpo"))
      : activeCategory === "ai"
      ? allServicesList.filter((s) => s.slug.includes("ai"))
      : allServicesList.filter((s) => !["custom-software", "call-centre", "ai-automation", "bpo-support"].includes(s.slug));

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1 >= filteredServices.length ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 < 0 ? filteredServices.length - 1 : prev - 1));
  };

  // Dynamic Calculator calculations
  const getEstimateData = () => {
    let scaleTitle = "Squad Capacity & Call Center Seats";
    let scaleLabel = "Growth Squad (6-12 Seats)";
    let scaleMarks = ["3-5 Agents", "6-12 Agents", "15+ Squad"];
    let costRange = "$2,500 - $5,000 / mo";
    let timeText = "6-12 Dedicated Callers";
    let isCustomQuote = false;
    let notice = "";
    let bullets = [
      "Lahore Outbound Call Centre Operations",
      "Custom Scripting & Telemarketing Training",
      "Daily Performance Reports & Quality QA",
    ];

    if (calculatorService === "bpo") {
      scaleTitle = "Squad Capacity & Call Center Seats";
      scaleMarks = ["3-5 Agents", "6-12 Agents", "15+ Squad"];
      if (calculatorScale === 1) {
        scaleLabel = "Starter Squad (3-5 Seats)";
        costRange = "$1,200 - $2,200 / mo";
        timeText = "3-5 Dedicated Agents Squad";
      } else if (calculatorScale === 2) {
        scaleLabel = "Growth Squad (6-12 Seats)";
        costRange = "$2,500 - $5,000 / mo";
        timeText = "6-12 Dedicated Callers";
      } else {
        scaleLabel = "Enterprise Squad (15+ Seats)";
        costRange = "$6,000 - $12,000+ / mo";
        timeText = "15+ Dedicated Outbound Squad";
      }
      bullets = [
        "Lahore Outbound Call Centre Operations",
        "Custom Scripting & Telemarketing Training",
        "Daily Performance Reports & Quality QA",
      ];
      notice = "BPO squad rates are indicative monthly retainers. Final seat costs and shift hours are confirmed during your kickoff meeting.";
    } else if (calculatorService === "web") {
      isCustomQuote = true;
      scaleTitle = "Feature Scope & Architectural Complexity";
      scaleMarks = ["MVP / Core App", "Full SaaS / Portal", "Enterprise Platform"];
      if (calculatorScale === 1) {
        scaleLabel = "MVP / Core Web App";
        costRange = "Custom Scope (MVP Tier)";
        timeText = "Sprint Deadlines Set in Meeting";
        bullets = [
          "Custom Next.js / React Architecture",
          "Essential Database & Secure Authentication",
          "Interactive UI/UX & Responsive QA Audit",
        ];
      } else if (calculatorScale === 2) {
        scaleLabel = "Full SaaS / Commercial Platform";
        costRange = "Custom Scope (Growth Tier)";
        timeText = "Phased Milestones & Sprint Delivery";
        bullets = [
          "Full-Stack Web App, Role-Based Access & Billing",
          "Third-Party API Integrations, Webhooks & CRM Sync",
          "Automated Testing, CI/CD Pipeline & Staging Deploy",
        ];
      } else {
        scaleLabel = "Enterprise High-Load Ecosystem";
        costRange = "Custom Scope (Enterprise)";
        timeText = "Multi-Sprint Roadmap & Milestones";
        bullets = [
          "Scalable Microservices / High-Concurrency Backend",
          "Custom Internal Tooling, Dashboards & Data Pipelines",
          "Dedicated Solutions Architect & Technical SLA",
        ];
      }
      notice = "⚠️ Non-Fixed Pricing Notice: Web & software applications depend strictly on custom workflows, integrations, and security requirements. Exact budget and milestones are locked in during our project scoping meeting.";
    } else if (calculatorService === "ai") {
      isCustomQuote = true;
      scaleTitle = "AI Workflow Complexity & Integrations";
      scaleMarks = ["Single Agent Flow", "Multi-Agent System", "Enterprise AI Core"];
      if (calculatorScale === 1) {
        scaleLabel = "Single Agent Flow";
        costRange = "Custom Scope (Starter Flow)";
        timeText = "Timeline Set Post-Scoping";
        bullets = [
          "Custom LLM Voice/Chat Prompt Engineering",
          "CRM Webhook & Lead Capture Automation",
          "Standard Conversational Fallback Logic",
        ];
      } else if (calculatorScale === 2) {
        scaleLabel = "Multi-Agent System";
        costRange = "Custom Scope (Automated Suite)";
        timeText = "Phased Implementation Milestones";
        bullets = [
          "Autonomous Multi-Agent Task Routing",
          "Direct Two-Way Database & Dialer Synchronization",
          "Real-Time Sentiment Analysis & Call Summaries",
        ];
      } else {
        scaleLabel = "Enterprise AI Core";
        costRange = "Custom Scope (Enterprise AI)";
        timeText = "Custom Roadmap & Deployment";
        bullets = [
          "Fine-Tuned Specialized Language/Voice Models",
          "High-Throughput Enterprise API Architecture",
          "Full Compliance, Data Privacy & SLA Monitoring",
        ];
      }
      notice = "AI pricing varies with token volumes, LLM orchestration, and CRM integrations. Final milestones are determined after evaluating your technical requirements.";
    } else if (calculatorService === "seo") {
      scaleTitle = "Location Footprint & Campaign Target";
      scaleMarks = ["Single Location", "Multi-Branch (2-5)", "Regional Domination"];
      if (calculatorScale === 1) {
        scaleLabel = "Single Location GMB";
        costRange = "$400 - $800 / mo";
        timeText = "Single Location Profile";
      } else if (calculatorScale === 2) {
        scaleLabel = "Multi-Branch (2-5 Locations)";
        costRange = "$900 - $1,800 / mo";
        timeText = "Multi-Branch Growth Campaign";
      } else {
        scaleLabel = "Regional Domination";
        costRange = "$2,000 - $4,000+ / mo";
        timeText = "Regional Map Pack Dominance";
      }
      bullets = [
        "Google Business Profile Optimization & Audit",
        "Local Citation & Geotagged Visual Campaigns",
        "Google Map Pack Rank Building & Review Management",
      ];
      notice = "Local SEO plans are recurring monthly retainers customized for target keyword density and city competition.";
    }

    return { scaleTitle, scaleLabel, scaleMarks, costRange, timeText, bullets, isCustomQuote, notice };
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
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 overflow-x-hidden">
      
      {/* ========================================================
          1. HERO SECTION (REFERENCE IMAGE CURVED POD DESIGN)
          ======================================================== */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden bg-[#080D18] text-white shadow-2xl border border-slate-800/80 min-h-[580px] sm:min-h-[660px] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16">
          
          {/* Ambient Background & Grid Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D18]/90 via-[#0B1324]/80 to-[#080D18] z-0 pointer-events-none"></div>
          <div
            className="absolute inset-0 opacity-[0.18] bg-cover bg-center z-0 mix-blend-luminosity filter contrast-125"
            style={{ backgroundImage: `url('/images/about/hero.jpg')` }}
          ></div>
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#E85D04]/25 via-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none z-0 animate-pulse-glow"></div>
          <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

          {/* Sub-Header Row Inside Hero: Left Badge & Quick Nav */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            
            {/* Top-Left Frosted Badge (Matches reference: "Insight SINCE 1948...") */}
            <div className="glass-pill px-4 py-2.5 rounded-2xl max-w-xs border border-white/15 backdrop-blur-md shadow-lg animate-hero-badge">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] animate-ping"></span>
                <span>Insight</span>
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                SINCE 2006
              </div>
              <p className="text-[11px] text-slate-300/90 leading-tight mt-0.5">
                20+ Years of outsourcing excellence & custom software from Lahore
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="hidden md:flex items-center gap-4 glass-pill px-5 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-slate-200 animate-hero-badge">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>250+ Dedicated Agent Seats</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-[#E85D04]"></i>
                <span>US & UK Timezone Aligned</span>
              </span>
            </div>
          </div>

          {/* Bottom Hero Row: Punchy Editorial Headline & Floating Glass Card */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12 sm:mt-16">
            
            {/* Left Column: Big Headline (Matches reference style) */}
            <div className="lg:col-span-8 space-y-5">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] animate-hero-title">
                Engineering & Outsourcing for a Better Everyday
              </h1>
              
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal animate-hero-desc">
                High-conversion offshore telemarketing squads, bespoke full-stack web platforms, and autonomous AI automation engineered directly from Lahore, Pakistan.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3 animate-hero-cta">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#E85D04] hover:bg-[#ff6b00] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Launch Your Campaign</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>

                <a
                  href="#services"
                  className="px-6 py-3.5 rounded-full glass-pill hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore Services</span>
                  <i className="fa-solid fa-arrow-down text-xs"></i>
                </a>

                <a
                  href="tel:+923332556206"
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs transition-all flex items-center gap-2 border border-white/10"
                >
                  <i className="fa-solid fa-phone text-orange-400"></i>
                  <span>+92 333 2556206</span>
                </a>
              </div>
            </div>

            {/* Right Column: Floating Frosted Card (Matches reference card on the right) */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end animate-hero-card">
              <div className="glass-hero-card rounded-3xl p-5 border border-white/20 w-full max-w-sm shadow-2xl backdrop-blur-xl space-y-3.5 card-lift-dark">
                <div className="relative h-32 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                  <img
                    src="/images/about/expertise.jpg"
                    alt="Operations Floor"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-[10px] text-emerald-300 font-bold backdrop-blur-sm">
                    ● Live Operations
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#E85D04]">
                    Tech Squads & BPO
                  </div>
                  <h4 className="text-sm font-extrabold text-white mt-1">
                    Dedicated Offshore Excellence
                  </h4>
                  <p className="text-xs text-slate-300/90 mt-1 leading-relaxed">
                    Custom software engineering & outbound telemarketing scaled for enterprise reliability.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                  <Link
                    href="/about"
                    className="flex-1 py-2 text-center text-xs font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 py-2 text-center text-xs font-black text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md"
                  >
                    Get It Now
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          2. "WHO WE ARE?" SECTION (MATCHES REFERENCE EDITORIAL DESIGN)
          ======================================================== */}
      <section id="about" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          {/* Pill Badge */}
          <div className="reveal">
            <span className="pill-badge">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Who we are?
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Big Typography with Muted Subtext */}
            <div className="lg:col-span-8 space-y-6 reveal delay-100">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Brainstorm Communications is an outsourcing & software house from Lahore, Pakistan.{" "}
                <span className="text-slate-400 font-medium">
                  Since 2006, we have made enterprise-grade web applications, high-converting outbound call centre campaigns, and automated AI systems for North America, the UK, and global markets.
                </span>
              </h2>

              {/* Consultation Link Strip */}
              <div className="pt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Free Consultation
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-extrabold text-[#E85D04] hover:text-orange-700 flex items-center gap-1.5 transition-colors group"
                  >
                    <span>Learn More</span>
                    <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>

                <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                  <span>Strict NDAs & SOC-Aligned Data Security</span>
                </div>
              </div>
            </div>

            {/* Right Photo Preview & Squad Card Collage */}
            <div className="lg:col-span-4 space-y-3.5 reveal-right delay-200">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 group">
                  <img
                    src="/images/about/global.jpg"
                    alt="Offshore Lab"
                    className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 group">
                  <img
                    src="/images/about/hero.jpg"
                    alt="Call Center Floor"
                    className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Operations Card Box */}
              <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between card-lift">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-lg font-bold">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      BPO Squad Ramp-Up
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Fast 7-Day Dedicated Onboarding
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#E85D04] text-white flex items-center justify-center transition-colors shadow-xs"
                >
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          3. "WHAT WE OFFER" / CREATIVE SERVICES CAROUSEL (REFERENCE STYLE)
          ======================================================== */}
      <section id="services" className="py-20 md:py-28 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header: Pill, Title Left, Subtext Right */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="space-y-3 max-w-xl">
              <span className="pill-badge">
                <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                Service
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                What We Offer
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed md:text-right">
              We produce high-impact software solutions and dedicated call center squads, combining technical craftsmanship and modern telemarketing infrastructure.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {[
              { id: "all", label: "All Capabilities" },
              { id: "core", label: "Full-Stack Software" },
              { id: "call", label: "Outbound Call Center" },
              { id: "ai", label: "AI & Automation" },
              { id: "growth", label: "Growth & Operations" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCarouselIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Creative Services Cards Grid / Slider */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.slice(carouselIndex, carouselIndex + 3).concat(
              // Wrap around if near end
              filteredServices.length > 3 && carouselIndex + 3 > filteredServices.length
                ? filteredServices.slice(0, (carouselIndex + 3) % filteredServices.length)
                : []
            ).slice(0, 3).map((srv, idx) => (
              <div
                key={`${srv.slug}-${idx}`}
                className="group rounded-[2rem] bg-slate-50/70 border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#E85D04]/60 transition-all duration-500 flex flex-col justify-between card-lift"
              >
                {/* Image Banner Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-sm">
                    {srv.category}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-3 right-3 text-xs font-mono font-bold text-white/80 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                    {srv.num}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#E85D04] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {srv.shortDesc || srv.tagline}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                      {srv.bullets.slice(0, 2).map((b, bi) => (
                        <div key={bi} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <i className="fa-solid fa-circle-check text-[#E85D04] text-[10px]"></i>
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="text-xs font-extrabold text-slate-900 group-hover:text-[#E85D04] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Learn More</span>
                      <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </Link>

                    <Link
                      href={`/services/${srv.slug}`}
                      className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#E85D04] group-hover:text-white text-slate-600 flex items-center justify-center transition-colors text-xs"
                      aria-label={srv.title}
                    >
                      <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Arrow Controls (Matches Reference Image: ← → buttons at bottom right) */}
          <div className="flex items-center justify-end gap-3 mt-8 pt-4">
            <span className="text-xs text-slate-400 font-semibold mr-2">
              Viewing {carouselIndex + 1} - {Math.min(carouselIndex + 3, filteredServices.length)} of {filteredServices.length}
            </span>
            <button
              onClick={handlePrevSlide}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous services"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
            </button>
            <button
              onClick={handleNextSlide}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Next services"
            >
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>

        </div>
      </section>


      {/* ========================================================
          4. "BENEFITS OF BRAINSTORM" / BENTO GRID & ANIMATED STATS
          (MATCHES REFERENCE IMAGE DARK BENTO CONTAINER)
          ======================================================== */}
      <section id="benefits" className="py-20 md:py-28 px-3 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-[2.2rem] sm:rounded-[3rem] bg-[#090D17] text-white p-7 sm:p-12 md:p-16 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E85D04]/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Section Header Inside Dark Pod */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 relative z-10">
            <div className="space-y-3 max-w-xl">
              <span className="pill-badge-dark">
                <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Benefits of Brainstorm
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed md:text-right">
              Built on decades of execution, we deliver consistent quality and reliable squads through our specialized technical and offshore expertise in Lahore.
            </p>
          </div>

          {/* BENTO GRID (MATCHES REFERENCE IMAGE ARCHITECTURE) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
            
            {/* Card 1: 18+ Years Heritage with Animated Counter & Matrix Graphic */}
            <div className="md:col-span-5 p-8 rounded-3xl bg-white/[0.04] border border-white/10 card-lift-dark flex flex-col justify-between">
              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  <AnimatedCounter target={18} suffix="+" duration={2200} />
                </div>
                <div className="text-base font-extrabold text-slate-200 mt-2">
                  Years of Offshore Heritage
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  A long-standing legacy of trust and agile telemarketing & engineering execution since 2006.
                </p>
              </div>

              {/* Animated Matrix Bars (Matches reference image graphic at bottom of 75+ card) */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-end gap-1.5 h-14">
                {[35, 55, 30, 80, 95, 60, 40, 75, 100, 50, 65, 85, 45, 60, 90, 75, 55, 80, 95, 40].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                    className="flex-1 bg-gradient-to-t from-orange-500/20 via-orange-500/60 to-[#E85D04] rounded-full animate-pulse-glow"
                  ></div>
                ))}
              </div>
            </div>

            {/* Column 2: Stack of Quality & Partnership Cards */}
            <div className="md:col-span-3 flex flex-col gap-6">
              
              {/* Quality First Card */}
              <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 card-lift-dark space-y-3 flex-1 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-base">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Quality First
                  </div>
                  <div className="text-2xl font-black text-emerald-400 mt-0.5">
                    <AnimatedCounter target={99.8} decimals={1} suffix="%" duration={2000} />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Consistent quality fabrics and strict SLAs for everyday enterprise needs.
                  </p>
                </div>
              </div>

              {/* People & Partnership Card */}
              <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 card-lift-dark space-y-3 flex-1 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-[#E85D04] border border-orange-500/30 flex items-center justify-center text-base">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    People & Partnership
                  </div>
                  <div className="text-2xl font-black text-[#E85D04] mt-0.5">
                    <AnimatedCounter target={24} suffix="/7" duration={1800} />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Working together for stronger conversions and lasting partnerships.
                  </p>
                </div>
              </div>

            </div>

            {/* Column 3: GLOBAL Scaling Card with Stats */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 card-lift-dark flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E85D04]">
                  Worldwide Reach
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                  GLOBAL
                </div>
                <div className="text-xs font-bold text-slate-300">
                  Offshore Operations & Scaling
                </div>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Powering outbound campaigns, software engineering, and back-office pipelines that reach partners worldwide.
                </p>
              </div>

              {/* Counters Strip at Bottom */}
              <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-black text-white">
                    <AnimatedCounter target={500} suffix="+" duration={2400} />
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">Projects</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="text-lg sm:text-xl font-black text-white">
                    <AnimatedCounter target={10} suffix="M+" duration={2500} />
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">Calls Logged</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-white">
                    <AnimatedCounter target={99.4} decimals={1} suffix="%" duration={2000} />
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">Retention</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          5. 4-PHASE DELIVERY PROCESS ROADMAP
          ======================================================== */}
      <section id="process" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="pill-badge">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Scoping to Live Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              A transparent, 4-stage operational roadmap ensuring seamless offshore onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Scoping",
                desc: "We analyze your target market, scripts, or technical architecture to establish precise KPIs and timelines.",
                icon: "fa-solid fa-magnifying-glass-chart",
              },
              {
                step: "02",
                title: "Rapid Squad Onboarding",
                desc: "Dedicated agents and developers undergo rigorous phonetics, technical onboarding, and compliance drills.",
                icon: "fa-solid fa-users-gear",
              },
              {
                step: "03",
                title: "Live Multi-Channel Run",
                desc: "We launch outbound campaigns or initiate development sprints with daily transparent Slack & CRM tracking.",
                icon: "fa-solid fa-rocket",
              },
              {
                step: "04",
                title: "Scale & Continuous QA",
                desc: "Weekly audits, conversion coaching, and CI/CD reviews ensure continuous performance optimization.",
                icon: "fa-solid fa-chart-line",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs hover:border-[#E85D04] transition-all card-lift space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-lg font-bold">
                    <i className={p.icon}></i>
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-300">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          6. PROJECT SCOPING & ESTIMATE CALCULATOR
          ======================================================== */}
      <section id="calculator" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="pill-badge">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Project Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Campaign Scoping
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select your required service and adjust the operational scale for an immediate scoping estimate.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
            
            {/* Service Toggle Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "bpo", label: "Call Centre (BPO)", icon: "fa-solid fa-headset" },
                { id: "web", label: "Custom Software", icon: "fa-solid fa-code" },
                { id: "ai", label: "AI Automation", icon: "fa-solid fa-robot" },
                { id: "seo", label: "Local SEO (GMB)", icon: "fa-solid fa-location-dot" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setCalculatorService(s.id)}
                  className={`py-3 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    calculatorService === s.id
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <i className={s.icon}></i>
                  <span>{s.label}</span>
                </button>
              ))}
            </div>

            {/* Scale Slider */}
            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">{estimate.scaleTitle}</span>
                <span className="font-black text-[#E85D04] px-3 py-1 rounded-full bg-orange-50 border border-orange-200">
                  {estimate.scaleLabel}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={calculatorScale}
                onChange={(e) => setCalculatorScale(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E85D04]"
              />

              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                {estimate.scaleMarks.map((m, mi) => (
                  <span key={mi}>{m}</span>
                ))}
              </div>
            </div>

            {/* Estimate Summary Box */}
            <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                  Indicative Monthly Retainer / Scope Tier
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  {estimate.costRange}
                </div>
                <div className="text-xs text-slate-600 mt-1 flex items-center gap-2">
                  <i className="fa-solid fa-users text-[#E85D04]"></i>
                  <span>{estimate.timeText}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E85D04] to-orange-600 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange-500/20 whitespace-nowrap"
              >
                Confirm Exact Budget →
              </Link>
            </div>

            {/* Bullets & Disclaimer */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Included in this tier:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {estimate.bullets.map((b, bi) => (
                  <div key={bi} className="flex items-start gap-2 text-xs text-slate-600">
                    <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {estimate.notice && (
                <p className="text-[11px] text-slate-500 italic mt-4 pt-3 border-t border-slate-200">
                  {estimate.notice}
                </p>
              )}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          7. CONTACT SECTION & MODAL (PREMIUM CURVED POD DESIGN)
          ======================================================== */}
      <section id="contact" className="py-20 md:py-28 px-3 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-[2.2rem] sm:rounded-[3rem] bg-[#080D18] text-white p-7 sm:p-12 md:p-16 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#E85D04]/20 via-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none z-0 animate-pulse-glow"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="pill-badge-dark">
                <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                Direct Liaison & Consultation
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Let’s Connect & Scale Your Operations
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Whether you need a dedicated outbound telemarketing squad, bespoke full-stack software development, or an AI automation audit, our senior leadership in Lahore is ready to assist you.
              </p>

              {/* 3 Highlight Cards */}
              <div className="space-y-3.5 pt-2">
                
                {/* Card 1: Phone Hotline */}
                <a
                  href="tel:+923332556206"
                  className="flex items-start gap-4 p-4.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E85D04]/60 hover:bg-white/[0.07] transition-all card-lift-dark block group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-500/20 text-[#E85D04] border border-orange-500/30 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Direct Operations Line
                    </div>
                    <div className="text-base font-extrabold text-white group-hover:text-[#E85D04] transition-colors mt-0.5">
                      +92 333 2556206
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>24/7 English Voice Support</span>
                    </div>
                  </div>
                </a>

                {/* Card 2: Operations Center */}
                <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white/[0.04] border border-white/10 card-lift-dark">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/20 text-[#E85D04] border border-orange-500/30 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Technology & BPO Center
                    </div>
                    <div className="text-base font-extrabold text-white mt-0.5">
                      Lahore, Punjab, Pakistan
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      US (EST/PST) & UK (GMT) Operational Shifts
                    </div>
                  </div>
                </div>

                {/* Card 3: SLA & Security */}
                <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white/[0.04] border border-white/10 card-lift-dark">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Onboarding Speed & Compliance
                    </div>
                    <div className="text-sm font-extrabold text-white mt-0.5">
                      Rapid 7-Day Dedicated Ramp-Up
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Strict Mutual NDAs & SOC-Aligned Data Privacy
                    </div>
                  </div>
                </div>

              </div>

              {/* Brand Logo Box - Image Only */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner">
                <img
                  src={LOGO_SRC}
                  alt="Brainstorm Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-9 bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Send Us A Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the scoping form below. Our operations directors will reply within 2 business hours.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#E85D04] focus:bg-white/[0.09] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#E85D04] focus:bg-white/[0.09] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Phone / WhatsApp (With Country Code)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#E85D04] focus:bg-white/[0.09] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:border-[#E85D04] outline-none cursor-pointer"
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
                        <option value="BPO & Back-Office Support">
                          BPO & Back-Office Support
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Project Goals or Campaign Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your requirements, targets, target time zones, and ideal kickoff timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#E85D04] focus:bg-white/[0.09] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Scoping Request</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <i className="fa-solid fa-lock text-emerald-400"></i>
                      <span>100% Confidential • Protected by NDA</span>
                    </span>
                    <span>&lt; 2-Hour SLA Response</span>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONFIRMATION MODAL */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Scoping Inquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you for contacting Brainstorm Communications. An executive operations lead at our Lahore center will review your targets and connect within 2 business hours.
            </p>
            <div className="p-3 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-slate-700">
              <strong>Urgent Contact:</strong> +92 333 2556206
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
