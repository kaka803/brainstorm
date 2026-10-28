"use client";

import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("outbound");
  const [activeFaq, setActiveFaq] = useState(null);

  const capabilities = {
    outbound: {
      title: "Enterprise Outbound Telemarketing",
      tagline: "High-conversion calling campaigns powered by trained voice talent & QA",
      details: [
        "Dedicated outbound calling squads customized to your industry script",
        "Rigorous accent-neutral coaching & daily QA audio audits",
        "Predictive auto-dialers, real-time KPI dashboards, and live agent call recordings",
        "Targeted B2B appointment setting, lead verification & customer renewals"
      ],
      icon: "fa-solid fa-headset",
      stat: "50M+ Calls Handled",
      statLabel: "Across US, UK & Canada"
    },
    software: {
      title: "Bespoke Software & Web Architecture",
      tagline: "Modern full-stack engineering built for reliability, speed, and conversion",
      details: [
        "Full-stack React, Next.js, Node.js, and Python cloud backends",
        "Custom CRM workflows, lead capture APIs & automation webhooks",
        "Scalable database architectures designed with enterprise security",
        "Continuous CI/CD integration, responsive design & high performance scoring"
      ],
      icon: "fa-solid fa-code",
      stat: "150+ Systems",
      statLabel: "Engineered & Deployed"
    },
    ai: {
      title: "AI Voice & Process Automation",
      tagline: "Combining artificial intelligence with human oversight for maximum velocity",
      details: [
        "Conversational AI assistants for automated customer lead qualification",
        "Automated speech sentiment analytics and call sentiment scoring",
        "CRM synchronization and automated customer follow-up pipelines",
        "Custom LLM prompts tuned for enterprise compliance and brand safety"
      ],
      icon: "fa-solid fa-brain",
      stat: "3.5x Faster",
      statLabel: "Lead Response Time"
    },
    infrastructure: {
      title: "Mission-Critical BPO Infrastructure",
      tagline: "Lahore technology campus engineered for zero downtime and data confidentiality",
      details: [
        "Dual redundant high-bandwidth tier-1 optical fiber lines",
        "24/7 uninterrupted power generator backups & sound-isolated floors",
        "Strict SOC2-aligned physical security, biometric entry & NDA protocols",
        "Round-the-clock technical network administrators on standby"
      ],
      icon: "fa-solid fa-shield-halved",
      stat: "99.98% Uptime",
      statLabel: "Operational Redundancy"
    }
  };

  const milestones = [
    {
      year: "2006",
      title: "Foundation & Telemarketing",
      desc: "Founded in Lahore with a clear vision to provide North American & European businesses with elite offshore outbound telemarketing squads.",
      icon: "fa-solid fa-location-dot",
      isPrimary: true,
    },
    {
      year: "2012",
      title: "Software Engineering Lab",
      desc: "Expanded into full-scale web development, custom portals, cloud databases, and bespoke enterprise CRM integrations.",
      icon: "fa-solid fa-laptop-code",
      isPrimary: false,
    },
    {
      year: "2017",
      title: "Enterprise VoIP Backbone",
      desc: "Deployed carrier-grade multi-redundant SIP trunks, automatic dialer algorithms, and live call analytics systems.",
      icon: "fa-solid fa-network-wired",
      isPrimary: false,
    },
    {
      year: "2020",
      title: "AI & Smart Automation",
      desc: "Integrated natural language processing, predictive call disposition scoring, and seamless automated CRM webhooks.",
      icon: "fa-solid fa-microchip",
      isPrimary: false,
    },
    {
      year: "2023",
      title: "250+ Dedicated Seats",
      desc: "Scaled facility capacity to over 250 outbound telemarketing and engineering seats operating 24 hours a day.",
      icon: "fa-solid fa-users-gear",
      isPrimary: false,
    },
    {
      year: "2026 - Present",
      title: "Global Enterprise Scale",
      desc: "Delivering end-to-end digital transformation, customer acquisition, and technology consulting worldwide.",
      icon: "fa-solid fa-globe",
      isPrimary: false,
    },
  ];

  const values = [
    {
      title: "Absolute Transparency",
      desc: "No hidden charges, no vague metrics. Real-time call logs, Git commits, and milestone audits available 24/7.",
      icon: "fa-solid fa-chart-pie",
      color: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-[#E85D04]",
    },
    {
      title: "Engineered Precision",
      desc: "We treat both telemarketing scripting and code architecture as exact sciences where iteration drives measurable ROI.",
      icon: "fa-solid fa-bullseye",
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-[#E85D04]",
    },
    {
      title: "Uncompromising Security",
      desc: "Rigorous NDAs, biometric data-floor access, and encrypted communications safeguarding your enterprise proprietary data.",
      icon: "fa-solid fa-lock",
      color: "from-slate-800/10 to-slate-900/10",
      iconColor: "text-slate-900",
    },
    {
      title: "Continuous Talent Growth",
      desc: "Our Lahore facility hosts weekly voice coaching, technical sprints, and QA certifications to ensure top-tier performance.",
      icon: "fa-solid fa-graduation-cap",
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600",
    },
  ];

  const faqs = [
    {
      q: "Where is Brainstorm Communications based and how do you operate?",
      a: "Our primary operations and technology campus is based in Lahore, Pakistan. We serve international clients across the United States, Canada, the United Kingdom, and the Middle East with 24/7 shift alignments to match your specific time zone.",
    },
    {
      q: "How do you ensure data confidentiality and security for global clients?",
      a: "All staff sign enforceable non-disclosure agreements (NDAs). Our facilities feature biometric restricted access, clean-desk policies, segregated network VLANs, and end-to-end encrypted CRM data pipes.",
    },
    {
      q: "Can we start with a small pilot squad before scaling up?",
      a: "Yes! Many of our long-term enterprise partners started with a 3-agent pilot squad or a single software MVP. Once KPIs and conversion benchmarks are verified, scaling up to 20+ agents or a dedicated full-stack team is seamless.",
    },
    {
      q: "What makes Brainstorm different from generic BPO call centers?",
      a: "Unlike typical call centers that only offer voice agents, we combine proprietary software engineering with telemarketing expertise. This allows us to build custom dialers, automate CRM follow-ups, and eliminate technical bottlenecks directly under one roof.",
    },
  ];

  return (
    <div className="bg-white text-slate-800 selection:bg-[#E85D04] selection:text-white">
      
      {/* ======================================================== */}
      {/* SECTION 1: HERO SECTION (Reference Layout with Primary Orange Theme) */}
      {/* ======================================================== */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white">
        
        {/* Soft Ambient Background Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E85D04]/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow"></div>
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: ABOUT OUR FIRM CONTENT */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Pill Badge */}
              <div>
                <span className="pill-badge pill-badge-orange">
                  <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
                  About Us
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                About our firm
              </h1>

              {/* Subtitle Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                At our firm, we pride ourselves on delivering tailored solutions that empower businesses to thrive. With years of experience across various industries, our dedicated team is committed to driving growth and operational excellence.
              </p>

              {/* Call to Action Buttons (Orange Primary Theme) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Get Started</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>

                <a
                  href="#milestones"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 hover:border-[#E85D04] bg-white hover:bg-orange-50/50 text-slate-700 hover:text-[#E85D04] font-semibold text-sm shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Free trial</span>
                </a>
              </div>

              {/* Metrics Stats Row (Just like in the reference) */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#E85D04] tracking-tight">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-snug">
                    Complete customer satisfaction
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-snug">
                    Innovation and valuable insight
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    $10m
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-snug">
                    Highly efficient financial strategies
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: HERO IMAGE CARD (3D Abstract Atrium - No Person) */}
            <div className="lg:col-span-6 lg:pl-6">
              <div className="relative group">
                
                {/* Floating Decorative Blur */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-orange-600/20 rounded-[2.8rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

                {/* Main Card Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xl transition-all duration-500 group-hover:shadow-orange-500/15">
                  <img
                    src="/images/about/hero.jpg"
                    alt="Brainstorm architectural 3D tech installation in corporate atrium"
                    className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>

                  {/* Corner Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E85D04] to-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                          <i className="fa-solid fa-shapes"></i>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                            Brainstorm Innovation
                          </p>
                          <p className="text-xs text-slate-600">
                            Custom Software & Global Telemarketing
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-orange-50 text-[#E85D04] border border-orange-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] animate-pulse"></span>
                        Est. 2006
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: EXPERTISE & CROSS-INDUSTRY IMPACT (Row 2 in Reference) */}
      {/* ======================================================== */}
      <section id="expertise" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: EXPERTISE 3D DATA HUB IMAGE (No Person) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative group">
                
                {/* Ambient glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/25 via-amber-500/15 to-orange-600/20 rounded-[2.8rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

                {/* Image Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xl transition-all duration-500 group-hover:shadow-orange-500/15">
                  <img
                    src="/images/about/expertise.jpg"
                    alt="Brainstorm high-tech 3D data hub and futuristic glass geometric corridors"
                    className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Floating Metric Card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 border border-slate-700/60 shadow-xl text-white flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-[#E85D04]/20 text-[#E85D04] border border-[#E85D04]/30 flex items-center justify-center text-lg">
                          <i className="fa-solid fa-server"></i>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-300">Carrier-Grade Telephony</div>
                          <div className="text-sm font-bold text-white">99.98% Network Uptime</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        Active
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: UNLOCK OUR EXPERTISE (Primary Orange Checkmarks) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              
              {/* Pill Badge */}
              <div>
                <span className="pill-badge pill-badge-orange">
                  <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
                Unlock our expertise to drive success across industries.
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Leverage our deep industry knowledge and innovative strategies to accelerate your business growth. Our tailored solutions ensure success across diverse sectors by addressing your unique challenges and opportunities.
              </p>

              {/* Checklist Grid (2 Columns with Primary Orange Checkmark Badges) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4 pt-2">
                
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center text-[10px] shrink-0 shadow-sm shadow-orange-500/30">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Measurable proven results</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center text-[10px] shrink-0 shadow-sm shadow-orange-500/30">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Innovative real solutions</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center text-[10px] shrink-0 shadow-sm shadow-orange-500/30">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Customized business strategies</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center text-[10px] shrink-0 shadow-sm shadow-orange-500/30">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Reliable expert guidance</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center text-[10px] shrink-0 shadow-sm shadow-orange-500/30">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Multi-industry expertise</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center text-[10px] shrink-0 shadow-sm shadow-orange-500/30">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Support for long-term</span>
                </div>

              </div>

              {/* Dynamic Capability Tabs with Orange Accents */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(capabilities).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        activeTab === key
                          ? "bg-[#E85D04] text-white shadow-md shadow-orange-500/25"
                          : "bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-[#E85D04]"
                      }`}
                    >
                      <i className={`${capabilities[key].icon} mr-1.5`}></i>
                      {key === "outbound" && "Telemarketing"}
                      {key === "software" && "Software Lab"}
                      {key === "ai" && "AI Automation"}
                      {key === "infrastructure" && "Infrastructure"}
                    </button>
                  ))}
                </div>

                {/* Active Tab Panel */}
                <div className="bg-orange-50/30 rounded-2xl p-5 border border-orange-100 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {capabilities[activeTab].title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {capabilities[activeTab].tagline}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-extrabold text-[#E85D04]">
                        {capabilities[activeTab].stat}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">
                        {capabilities[activeTab].statLabel}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    {capabilities[activeTab].details.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <i className="fa-solid fa-circle-check text-[#E85D04] text-[11px] mt-0.5"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: MILESTONES & ACHIEVEMENTS (Row 3 in Reference) */}
      {/* ======================================================== */}
      <section id="milestones" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="space-y-4 mb-14">
            
            {/* Pill Badge */}
            <div>
              <span className="pill-badge pill-badge-orange">
                <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-pulse"></span>
                Milestones
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Our journey: key milestones and achievements
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Discover the significant milestones that have shaped our firm. Each achievement reflects our commitment to excellence and growth since 2006.
                </p>
              </div>
            </div>

          </div>

          {/* Milestone Cards Grid (Primary Card in Brand Orange Gradient) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl p-7 transition-all duration-300 card-lift flex flex-col justify-between group ${
                  item.isPrimary
                    ? "bg-gradient-to-br from-[#E85D04] to-orange-600 text-white shadow-xl shadow-orange-500/25 border border-orange-500"
                    : "bg-white text-slate-800 border border-slate-200/80 shadow-xs hover:border-orange-300 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg mb-6 shadow-sm transition-transform group-hover:scale-105 ${
                      item.isPrimary
                        ? "bg-white/20 text-white border border-white/25"
                        : "bg-orange-50 text-[#E85D04] border border-orange-200 group-hover:bg-[#E85D04] group-hover:text-white"
                    }`}
                  >
                    <i className={item.icon}></i>
                  </div>

                  {/* Year Tag & Title */}
                  <h3
                    className={`text-lg font-bold tracking-tight mb-3 ${
                      item.isPrimary ? "text-white" : "text-slate-900 group-hover:text-[#E85D04] transition-colors"
                    }`}
                  >
                    {item.title} ({item.year})
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      item.isPrimary ? "text-orange-100" : "text-slate-500"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Footer Accent */}
                <div
                  className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-semibold ${
                    item.isPrimary ? "border-white/20" : "border-slate-100"
                  }`}
                >
                  <span className={item.isPrimary ? "text-orange-100" : "text-slate-400"}>
                    Milestone 0{index + 1}
                  </span>
                  <span className={item.isPrimary ? "text-white font-bold" : "text-[#E85D04] font-bold"}>
                    {item.year}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: GLOBAL REACH & LAHORE OPERATIONS HUB */}
      {/* ======================================================== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="pill-badge pill-badge-orange">
                  <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
                  Global Connectivity
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Operating from Lahore, Delivering Impact Globally.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Brainstorm Communications leverages Pakistan’s premier technology talent pool to provide seamless 24/7 coverage. We connect multinational firms with dedicated voice agents and software developers at a fraction of on-shore overheads without compromising on caliber.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
                  <div className="text-2xl font-black text-slate-900">24/7/365</div>
                  <div className="text-xs text-slate-500 mt-1">Multi-Shift US/UK Time Alignment</div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
                  <div className="text-2xl font-black text-[#E85D04]">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Dedicated Offshore Talent</div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
                  <div className="text-2xl font-black text-[#E85D04]">&lt; 30s</div>
                  <div className="text-xs text-slate-500 mt-1">Average Response & Dial Latency</div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/40 border border-orange-100">
                  <div className="text-2xl font-black text-emerald-600">60%+</div>
                  <div className="text-xs text-slate-500 mt-1">Operational Cost Efficiency</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E85D04] hover:text-orange-600 transition-colors group"
                >
                  <span>Request a Tour of Our Operations Center</span>
                  <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>

            {/* Right Image: Holographic Global Network (No Person) */}
            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/25 to-amber-500/20 rounded-[2.8rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                  <img
                    src="/images/about/global.jpg"
                    alt="Brainstorm glowing 3D holographic global communications network"
                    className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700/60 text-white flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                        <span className="text-xs font-semibold text-slate-200">
                          Lahore Operations Hub • Global Carrier Interconnect
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                        24/7 Live
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: CORE VALUES & ETHICS */}
      {/* ======================================================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Values That Drive Every Conversation & Codebase
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              The fundamental principles that guide our offshore teams, technical decisions, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs card-lift flex flex-col justify-between hover:border-orange-200"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} ${v.iconColor} flex items-center justify-center text-xl mb-5 shadow-xs`}>
                    <i className={v.icon}></i>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <i className="fa-solid fa-check text-[#E85D04]"></i>
                  <span>Standard Operating Protocol</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Clarity & Transparency
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm">
              Everything you need to know about partnering with Brainstorm Communications.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen ? "border-orange-300 shadow-sm" : "border-slate-200/90"
                  } overflow-hidden bg-white shadow-xs`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-orange-50/40 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-orange-100 text-[#E85D04]" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-orange-100 bg-orange-50/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: CALL TO ACTION BANNER */}
      {/* ======================================================== */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Decorative Orange Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E85D04]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-orange-400 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-pulse"></span>
            Scale With Certainty
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Accelerate Your Outbound & Engineering Capacity?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a direct 1-on-1 strategy call with our operations leads in Lahore. We will audit your current workflow, scope your requirements, and provide a transparent pilot plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <i className="fa-solid fa-headset text-sm"></i>
              <span>Book Strategy Consultation</span>
            </a>

            <a
              href="tel:+924235880000"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <i className="fa-solid fa-phone text-xs text-orange-400"></i>
              <span>+92 42 35880000</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-emerald-400"></i>
              Strict NDAs & SOC-Aligned
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-bolt text-orange-400"></i>
              Rapid 7-Day Squad Onboarding
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-[#E85D04]"></i>
              24/7 Redundant Operations
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
