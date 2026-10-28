"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "outbound-call-centre",
    scale: "standard",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "outbound-call-centre",
        scale: "standard",
        message: "",
      });
    }, 600);
  };

  const contactFaqs = [
    {
      q: "How quickly can we expect a response after submitting?",
      a: "Our executive consulting team in Lahore reviews every submission promptly and typically responds within 2 hours during active business shifts, and guaranteed within 12 hours worldwide."
    },
    {
      q: "Can we arrange a live video tour of the Lahore facility?",
      a: "Yes! We regularly host scheduled video walkthroughs of our operations floor, IT server room, and sound-isolated caller bays for prospective international clients."
    },
    {
      q: "Do you require a long-term commitment upfront?",
      a: "No. We believe in earning your trust. We typically launch with a 30-day pilot proof-of-concept phase before transitioning to ongoing month-to-month service agreements."
    },
    {
      q: "What international payment methods do you accept?",
      a: "We support direct international bank wire transfers (USD, GBP, EUR), corporate credit cards, and automated invoicing with transparent itemized billing."
    }
  ];

  return (
    <div className="bg-white text-slate-800 selection:bg-[#E85D04] selection:text-white">
      
      {/* HERO / HEADER SECTION */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-orange-50/50 via-white to-white overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E85D04]/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow"></div>
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-ping"></span>
              24/7 Global Liaison
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Let’s Connect & Scale Your Operations
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you need a dedicated outbound telemarketing squad, bespoke full-stack software development, or an AI automation audit, our senior leadership in Lahore is ready to assist you.
            </p>
          </div>

          {/* 4 CONTACT HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            {/* Card 1: Direct Phone */}
            <a
              href="tel:+923332556206"
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs card-lift hover:border-[#E85D04] group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl mb-4 group-hover:bg-[#E85D04] group-hover:text-white transition-all shadow-xs">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Direct Operations Line
              </div>
              <div className="text-base font-extrabold text-slate-900 group-hover:text-[#E85D04] transition-colors">
                +92 333 2556206
              </div>
              <div className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                24/7 English Voice Support
              </div>
            </a>

            {/* Card 2: Official Email */}
            <a
              href="mailto:brainstromcommunication@gmail.com"
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs card-lift hover:border-[#E85D04] group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl mb-4 group-hover:bg-[#E85D04] group-hover:text-white transition-all shadow-xs">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Official Business Email
              </div>
              <div className="text-sm font-extrabold text-slate-900 group-hover:text-[#E85D04] transition-colors truncate">
                brainstromcommunication@gmail.com
              </div>
              <div className="text-xs text-slate-500 mt-2">
                &lt; 2-Hour Response Time
              </div>
            </a>

            {/* Card 3: Physical Operations Campus */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs card-lift hover:border-[#E85D04] group">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E85D04] border border-orange-200 flex items-center justify-center text-xl mb-4 group-hover:bg-[#E85D04] group-hover:text-white transition-all shadow-xs">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Technology & BPO Center
              </div>
              <div className="text-base font-extrabold text-slate-900">
                Lahore, Pakistan
              </div>
              <div className="text-xs text-slate-500 mt-2">
                US (EST/PST) & UK (GMT) Shifts
              </div>
            </div>

            {/* Card 4: Strategy Meeting */}
            <a
              href="#contact-form"
              className="p-6 rounded-3xl bg-gradient-to-br from-[#E85D04] to-orange-600 text-white shadow-xl shadow-orange-500/20 card-lift group block border border-orange-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-white border border-white/30 flex items-center justify-center text-xl mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <div className="text-xs font-bold text-orange-100 uppercase tracking-wider mb-1">
                Free Consultation
              </div>
              <div className="text-base font-extrabold text-white">
                Schedule Strategy Call
              </div>
              <div className="text-xs text-orange-100 mt-2 flex items-center gap-1">
                <span>Tailored Pilot Scoping</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* FORM & FACILITY DETAILS SECTION */}
      <section id="contact-form" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: INTERACTIVE FORM */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
              <div className="mb-8">
                <span className="pill-badge pill-badge-orange mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
                  Direct Inquiry Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tell Us About Your Goals
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and an operations director will reach out with a detailed proposal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-orange-500/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-orange-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone / WhatsApp (With Country Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-orange-500/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Global Inc."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-orange-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Service Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-orange-500/10 transition-all bg-white"
                    >
                      {servicesData.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Expected Scale / Timeline
                    </label>
                    <select
                      value={formData.scale}
                      onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-orange-500/10 transition-all bg-white"
                    >
                      <option value="pilot">Pilot Trial (1-3 Dedicated Seats / MVP)</option>
                      <option value="standard">Standard Squad (5-10 Dedicated Seats)</option>
                      <option value="enterprise">Enterprise Floor (15-50+ Dedicated Seats)</option>
                      <option value="custom">Custom Full-Stack Engineering Project</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Overview & Specific Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your target market, scripts, tech stack, or specific pain points you need resolved..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-orange-500/10 transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 hover:from-orange-600 hover:to-[#E85D04] text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner animate-spin"></i>
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane text-xs"></i>
                      <span>Submit Project Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  <i className="fa-solid fa-shield-halved text-emerald-500 mr-1.5"></i>
                  Protected by standard Non-Disclosure Agreement (NDA). Your data will never be shared.
                </p>
              </form>
            </div>

            {/* RIGHT COLUMN: LAHORE CAMPUS & CREDIBILITY */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Campus Feature Box */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E85D04]/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-orange-400 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Lahore Operations Facility
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Engineered for High-Security Enterprise Standards
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our Lahore technology center operates 24/7/365 to deliver continuous uptime and uncompromised client data confidentiality.
                  </p>

                  <div className="space-y-3 pt-2 text-xs text-slate-300">
                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                      <i className="fa-solid fa-bolt text-orange-400 text-sm mt-0.5"></i>
                      <div>
                        <div className="font-bold text-white">Dual Diesel Generators & Solar Grid</div>
                        <div className="text-slate-400 text-[11px]">Zero downtime during power outages with seamless ATS switching.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                      <i className="fa-solid fa-network-wired text-orange-400 text-sm mt-0.5"></i>
                      <div>
                        <div className="font-bold text-white">Redundant Tier-1 Fiber Optic Loops</div>
                        <div className="text-slate-400 text-[11px]">Multi-carrier SIP trunks ensuring low latency voice and data pipes.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                      <i className="fa-solid fa-id-card-clip text-orange-400 text-sm mt-0.5"></i>
                      <div>
                        <div className="font-bold text-white">Biometric Access & Clean-Desk Policy</div>
                        <div className="text-slate-400 text-[11px]">Strict NDA enforcement, separated client VLANs, and locked bays.</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Active Telemarketing Seats:</span>
                    <span className="font-bold text-orange-400">250+ Capacity</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp / Quick Consultation Box */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold border border-emerald-200">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Need Instant Answers?</h4>
                    <p className="text-xs text-slate-500">Connect with an Operations Manager</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Call or chat directly with our offshore coordinator in Lahore for immediate scoping, custom quotations, or urgent telemarketing ramp-ups.
                </p>
                <a
                  href="tel:+923332556206"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <i className="fa-solid fa-phone text-orange-400"></i>
                  <span>Call +92 333 2556206</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="pill-badge pill-badge-orange">
              <span className="w-2 h-2 rounded-full bg-[#E85D04]"></span>
              Client Support & Onboarding
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Contact & Engagement FAQs
            </h2>
            <p className="text-slate-500 text-sm">
              Answers to the most common questions before launching your offshore campaign.
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => {
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

      {/* SUCCESS CONFIRMATION MODAL */}
      {isSubmitted && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsSubmitted(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl shadow-inner">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Inquiry Dispatched!</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you for reaching out to Brainstorm Communications. An executive operations lead at our Lahore center is reviewing your project requirements and will reply within 2 business hours.
            </p>
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-slate-700 text-left space-y-1">
              <div><strong className="text-slate-900">Urgent Assistance:</strong> +92 333 2556206</div>
              <div><strong className="text-slate-900">Direct Desk:</strong> brainstromcommunication@gmail.com</div>
            </div>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E85D04] to-orange-600 text-white font-bold text-sm hover:from-orange-600 hover:to-[#E85D04] shadow-md shadow-orange-500/25 transition-all cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
