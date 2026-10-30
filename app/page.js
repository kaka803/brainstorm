"use client";

import { useState } from "react";
import Link from "next/link";
import { coreServices, marketingAndOperationsServices } from "@/lib/servicesData";

// Global Logo URL - Updated to /logo.png across the entire website
const LOGO_SRC = "/logo.png";

export default function Home() {
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

  // Dynamic Calculator calculations with realistic custom scoping logic
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
      notice = "⚠️ Non-Fixed Pricing Notice: Web & software applications cannot have fixed prices as they strictly depend on custom workflows, integrations, security requirements, and deadline urgency. Exact budget and milestones are locked in during our 1-on-1 project scoping meeting.";
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
      notice = "AI pricing varies with token volumes, LLM orchestration, and CRM integrations. Final milestones are determined after evaluating your technical requirements in a scoping call.";
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
    <div className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E85D04] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
                <span>Offshore Telemarketing Squads • Software Engineering • AI</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                We Build Dedicated <span className="gradient-text-orange">Outbound Call Squads</span> & Custom Software
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Brainstorm Communications empowers US, UK, and global enterprises with high-converting offshore telemarketing squads, custom full-stack web platforms, and automated AI dialers—managed directly from our 24/7 technology campus in <strong className="text-slate-900">Lahore, Pakistan</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <span>Explore Our Capabilities</span>
                  <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-800 hover:text-[#E85D04] font-semibold text-base border border-slate-300 hover:border-[#E85D04] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fa-solid fa-paper-plane text-[#E85D04]"></i>
                  <span>Book Consultation</span>
                </Link>
              </div>

              {/* Trust Features Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-[#E85D04]"></i>
                  <span>250+ Dedicated Caller Seats</span>
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-[#E85D04]"></i>
                  <span>US & UK Timezone Aligned</span>
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-[#E85D04]"></i>
                  <span>Strict NDAs & 100% QA</span>
                </span>
              </div>
            </div>

            {/* Right Column: Creative Operations & Growth Analytics Hub (Replaces static logo) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Floating Glow Ambient Background */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#E85D04]/25 via-amber-500/20 to-orange-600/15 rounded-[2.5rem] blur-2xl opacity-70 animate-pulse-glow"></div>

                {/* Floating Top-Right Badge */}
                <div className="hidden sm:flex absolute -top-5 -right-3 z-30 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-2xl border border-slate-200/90 shadow-xl items-center gap-2.5 animate-float-slow">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold border border-emerald-200">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Conversion Rate</div>
                    <div className="text-xs font-black text-slate-900">+42.8% Spike</div>
                  </div>
                </div>

                {/* Floating Bottom-Left Badge */}
                <div className="hidden sm:flex absolute -bottom-5 -left-3 z-30 bg-slate-900/95 backdrop-blur-md py-2.5 px-4 rounded-2xl border border-slate-800 shadow-xl items-center gap-3 text-white">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E85D04] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E85D04]"></span>
                  </span>
                  <div>
                    <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">Live Call Center Floor</div>
                    <div className="text-xs font-bold text-white">148 Active Callers in Lahore</div>
                  </div>
                </div>

                {/* Main Dashboard Card */}
                <div className="relative rounded-[2rem] bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 space-y-5 overflow-hidden">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center space-x-2.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Live Operations Hub
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-orange-50 text-[#E85D04] border border-orange-200">
                      EST. 2006 • 24/7 ACTIVE
                    </span>
                  </div>

                  {/* Top 3 Live Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="text-[11px] font-medium text-slate-500">Connect Rate</div>
                      <div className="text-lg font-black text-slate-900 mt-0.5">94.2%</div>
                      <div className="text-[10px] text-emerald-600 font-bold mt-0.5">↑ 14.8% SLA</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="text-[11px] font-medium text-slate-500">Weekly Leads</div>
                      <div className="text-lg font-black text-[#E85D04] mt-0.5">1,280+</div>
                      <div className="text-[10px] text-[#E85D04] font-bold mt-0.5">100% QA Verified</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="text-[11px] font-medium text-slate-500">Code Uptime</div>
                      <div className="text-lg font-black text-slate-900 mt-0.5">99.98%</div>
                      <div className="text-[10px] text-blue-600 font-bold mt-0.5">Zero Downtime</div>
                    </div>
                  </div>

                  {/* Interactive Growth & Pipeline Vector Graph */}
                  <div className="p-4 rounded-2xl bg-gradient-to-b from-orange-50/50 to-white border border-orange-100/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                          Campaign Pipeline & Lead Velocity
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Verified Appointments & Revenue Impact
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black text-[#E85D04] bg-orange-100/70 px-2.5 py-0.5 rounded-full">
                          $3.8M Pipeline
                        </span>
                      </div>
                    </div>

                    {/* SVG Graphic with Gradient Wave Area */}
                    <div className="relative pt-2">
                      <svg
                        viewBox="0 0 400 130"
                        className="w-full h-28 overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#E85D04" stopOpacity="0.38" />
                            <stop offset="70%" stopColor="#FF7B00" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#FF7B00" />
                            <stop offset="50%" stopColor="#E85D04" />
                            <stop offset="100%" stopColor="#C2410C" />
                          </linearGradient>
                        </defs>

                        {/* Grid guidelines */}
                        <line x1="0" y1="25" x2="400" y2="25" stroke="#E2E8F0" strokeDasharray="3 3" />
                        <line x1="0" y1="65" x2="400" y2="65" stroke="#E2E8F0" strokeDasharray="3 3" />
                        <line x1="0" y1="105" x2="400" y2="105" stroke="#E2E8F0" strokeDasharray="3 3" />

                        {/* Filled Gradient Area */}
                        <path
                          d="M0,95 Q60,85 100,60 T200,45 T300,20 T400,10 L400,125 L0,125 Z"
                          fill="url(#heroGradient)"
                        />

                        {/* Glowing Line */}
                        <path
                          d="M0,95 Q60,85 100,60 T200,45 T300,20 T400,10"
                          fill="none"
                          stroke="url(#lineStroke)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />

                        {/* Peak Data Points with glow */}
                        <circle cx="100" cy="60" r="4.5" fill="#FFFFFF" stroke="#E85D04" strokeWidth="3" />
                        <circle cx="200" cy="45" r="4.5" fill="#FFFFFF" stroke="#E85D04" strokeWidth="3" />
                        <circle cx="300" cy="20" r="5" fill="#FFFFFF" stroke="#E85D04" strokeWidth="3.5" />
                        <circle cx="395" cy="10" r="6" fill="#E85D04" stroke="#FFFFFF" strokeWidth="2.5" />
                      </svg>

                      {/* X-Axis Labels */}
                      <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1">
                        <span>Wk 1</span>
                        <span>Wk 2 (Pilot)</span>
                        <span>Wk 3 (Scaling)</span>
                        <span className="font-bold text-[#E85D04]">Wk 4 (Peak ROI)</span>
                      </div>
                    </div>
                  </div>

                  {/* Real-Time Live Feed Stream */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Real-Time Operation Feed</span>
                      <span className="text-[10px] text-emerald-600 font-bold">Auto-Syncing</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2 truncate pr-2">
                        <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                        <span className="font-semibold text-slate-800 truncate">
                          Squad Beta • US B2B Discovery Call Qualified
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        +1 Booked
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2 truncate pr-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="font-semibold text-slate-800 truncate">
                          Software Hub • CRM Telephony Dialer API v2.4
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                        Live 99.9%
                      </span>
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
          
          {/* Main Category Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="pill-badge pill-badge-orange mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Flagship Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Services
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Bespoke full-stack software development, autonomous AI workflows, and dedicated offshore outbound calling squads managed directly from Lahore.
            </p>
          </div>

          {/* 3 CORE FLAGSHIP SERVICES (Custom Software, AI Automation, Outbound Contact Center) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.slug}
                className="sample-card rounded-3xl p-8 bg-white border border-slate-200/90 shadow-sm hover:border-[#E85D04] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar with Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E85D04] group-hover:bg-[#E85D04] group-hover:text-white transition-all shadow-xs">
                      <i className={`${service.icon} text-2xl`}></i>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#E85D04] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E85D04] mb-3">
                    {service.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E85D04] transition-colors">
                    {service.title}
                  </h3>

                  {/* Prompt-specified Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-8 text-xs text-slate-600">
                    {service.bullets.slice(0, 4).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <i className="fa-solid fa-circle-check text-[#E85D04] text-[11px] mt-0.5 shrink-0"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customized Prompt Button */}
                <div className="pt-5 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01]"
                  >
                    <span>{service.buttonText}</span>
                    <i className="fa-solid fa-arrow-right text-[11px] transition-transform group-hover:translate-x-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEPARATE CATEGORY: MARKETING & OPERATIONS */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-badge pill-badge-orange mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                Specialized Support Category
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Marketing & Operations
              </h3>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Supporting growth infrastructure including Google Maps 3-pack dominance, local SEO, custom scripting, and 100% audio quality assurance audits.
              </p>
            </div>

            {/* Marketing & Operations Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketingAndOperationsServices.map((service) => (
                <div
                  key={service.slug}
                  className="sample-card rounded-3xl p-7 bg-white border border-slate-200/90 shadow-xs hover:border-[#E85D04] hover:shadow-lg transition-all flex flex-col justify-between group"
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

                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-1.5 mb-6 text-xs text-slate-500">
                      {service.bullets.slice(0, 3).map((bullet, bIdx) => (
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

        </div>
      </section>

      {/* PROCESS SECTION (Replaces Portfolio) */}
      <section id="process" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
              The Brainstorm Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Operational Process
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              A battle-tested offshore framework designed to eliminate onboarding friction, ensure script compliance, and drive measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-xs card-lift hover:border-orange-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl shadow-xs group-hover:bg-[#E85D04] group-hover:text-white transition-all">
                    <i className="fa-solid fa-magnifying-glass-chart"></i>
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#E85D04] transition-colors font-mono">
                    01
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                  Discovery & Scope Audit
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  In-depth analysis of your target market, campaign goals, telephony requirements, and technical specifications.
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Persona & Audience Mapping</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Tech Architecture Review</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>KPI Benchmarks Agreement</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] font-bold text-[#E85D04]">
                Phase 1: Days 1 - 2
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-xs card-lift hover:border-orange-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl shadow-xs group-hover:bg-[#E85D04] group-hover:text-white transition-all">
                    <i className="fa-solid fa-pen-ruler"></i>
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#E85D04] transition-colors font-mono">
                    02
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                  Scripting & Tech Staging
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Custom telemarketing script copywriting, agent phonetic coaching, VoIP dialer configuration, and staging portals.
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Objection Matrix Design</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Dialer & CRM Webhooks</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Agent Voice Calibration</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] font-bold text-[#E85D04]">
                Phase 2: Days 3 - 5
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-xs card-lift hover:border-orange-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl shadow-xs group-hover:bg-[#E85D04] group-hover:text-white transition-all">
                    <i className="fa-solid fa-rocket"></i>
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#E85D04] transition-colors font-mono">
                    03
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                  Pilot Squad & Live QA
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Controlled 30-day go-live with assigned floor supervisors, 100% call audio scoring, and daily conversion feedback.
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Dedicated Squad Deployment</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Daily Call Scorecards</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Live Audio Whisper Coaching</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] font-bold text-[#E85D04]">
                Phase 3: Day 7 Go-Live
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-xs card-lift hover:border-orange-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl shadow-xs group-hover:bg-[#E85D04] group-hover:text-white transition-all">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#E85D04] transition-colors font-mono">
                    04
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#E85D04] transition-colors">
                  Scale & Performance ROI
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Scaling agent seat capacity, continuous script A/B testing, and weekly executive ROI dashboards.
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Capacity Scaling to 50+ Seats</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>Weekly Executive ROI Sync</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#E85D04] text-[10px]"></i>
                    <span>AI Lead Scoring Integration</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] font-bold text-[#E85D04]">
                Phase 4: Ongoing Velocity
              </div>
            </div>

          </div>

          {/* Process Guarantee Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-orange-50/60 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E85D04] text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-xs">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">30-Day Pilot Guarantee</h4>
                <p className="text-xs text-slate-600">Test our dedicated offshore squads with zero long-term lock-in.</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-[#E85D04] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all whitespace-nowrap"
            >
              Initiate Discovery Call
            </Link>
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
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      1. Select Required Service
                    </label>
                    {estimate.isCustomQuote && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-[#E85D04] border border-orange-200">
                        Meeting Scoped
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalculatorService("bpo")}
                      className={`calc-btn p-3 rounded-xl border font-semibold text-xs text-left flex items-center gap-2 cursor-pointer transition-all ${
                        calculatorService === "bpo"
                          ? "border-[#E85D04] bg-orange-50 text-slate-900 shadow-xs"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <i className="fa-solid fa-headset text-[#E85D04]"></i> Outbound Call Squad
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalculatorService("web")}
                      className={`calc-btn p-3 rounded-xl border font-semibold text-xs text-left flex items-center gap-2 cursor-pointer transition-all ${
                        calculatorService === "web"
                          ? "border-[#E85D04] bg-orange-50 text-slate-900 shadow-xs"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <i className="fa-solid fa-code text-[#E85D04]"></i> Software & Web App
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalculatorService("ai")}
                      className={`calc-btn p-3 rounded-xl border font-semibold text-xs text-left flex items-center gap-2 cursor-pointer transition-all ${
                        calculatorService === "ai"
                          ? "border-[#E85D04] bg-orange-50 text-slate-900 shadow-xs"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <i className="fa-solid fa-robot text-[#E85D04]"></i> AI Automation
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalculatorService("seo")}
                      className={`calc-btn p-3 rounded-xl border font-semibold text-xs text-left flex items-center gap-2 cursor-pointer transition-all ${
                        calculatorService === "seo"
                          ? "border-[#E85D04] bg-orange-50 text-slate-900 shadow-xs"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <i className="fa-solid fa-chart-line text-[#E85D04]"></i> GMB SEO Management
                    </button>
                  </div>
                </div>

                {/* Scope Notice Banner when Software or AI is selected */}
                {estimate.isCustomQuote && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50/60 border border-orange-200/90 text-xs text-slate-700 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#E85D04] flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <div className="leading-relaxed">
                      <strong className="text-slate-900 block font-bold mb-0.5">
                        Tailored Engineering & Deadline Scoping
                      </strong>
                      Custom software & applications cannot have a generic fixed price. Budget and milestone delivery schedules depend strictly on your feature set, database schema, third-party APIs, and launch deadline, which are determined in your discovery meeting.
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      2. {estimate.scaleTitle}
                    </label>
                    <span className="text-[#E85D04] font-mono font-bold text-xs sm:text-sm">
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

                  <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                    <span className="text-left font-medium">{estimate.scaleMarks[0]}</span>
                    <span className="text-center font-medium">{estimate.scaleMarks[1]}</span>
                    <span className="text-right font-medium">{estimate.scaleMarks[2]}</span>
                  </div>
                </div>
              </div>

              {/* Output Card */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      {estimate.isCustomQuote ? "Investment Model" : "Estimated Investment"}
                    </span>
                    {estimate.isCustomQuote ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#E85D04] border border-[#E85D04]/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <i className="fa-solid fa-clock-rotate-left text-[9px]"></i> Meeting Scoped
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider">
                        Monthly Retainer
                      </span>
                    )}
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono my-2 tracking-tight">
                    {estimate.costRange}
                  </div>

                  <div className="text-xs text-orange-400 font-medium mb-4 flex items-center gap-1.5">
                    <i className="fa-solid fa-calendar-days"></i> {estimate.timeText}
                  </div>

                  {/* Scoping notice card */}
                  <div className="p-3.5 my-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 font-bold text-orange-400 mb-1 text-[11px] uppercase tracking-wider">
                      <i className="fa-solid fa-circle-info"></i>
                      <span>{estimate.isCustomQuote ? "Variable Scope Notice" : "Retainer Details"}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {estimate.notice}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables & Specifications:
                    </span>
                    <ul className="text-xs text-slate-300 space-y-2">
                      {estimate.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-[#E85D04] mt-0.5"></i>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const serviceMap = {
                      bpo: "Outbound Call Centre & Telemarketing",
                      web: "Custom Software Development",
                      ai: "AI Automation & CRM Integration",
                      seo: "Google Business Profile SEO",
                    };
                    setFormData((prev) => ({
                      ...prev,
                      service: serviceMap[calculatorService] || prev.service,
                      message: estimate.isCustomQuote
                        ? `Hi Brainstorm, I'd like to book a scoping call for ${estimate.scaleLabel}. Please share available meeting slots.`
                        : prev.message,
                    }));
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full mt-6 py-3.5 rounded-xl bg-[#E85D04] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm text-center block shadow-lg shadow-orange-500/30 transition-all cursor-pointer uppercase tracking-wider"
                >
                  {estimate.isCustomQuote ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fa-solid fa-calendar-check"></i> Book Project Scoping Meeting
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fa-solid fa-paper-plane"></i> Request Official Quote
                    </span>
                  )}
                </button>
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
                    <a href="tel:+923332556206" className="text-slate-600 hover:text-[#E85D04] text-xs mt-1 block transition-colors">+92 333 2556206</a>
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
