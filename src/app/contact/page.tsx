"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MessageCircle, MapPin, Clock, CheckCircle } from "lucide-react";

const budgetOptions = [
  "AED 10,000–20,000/month",
  "AED 20,000–40,000/month",
  "AED 40,000–60,000/month",
  "AED 60,000+/month",
  "Not sure yet",
];

const leadsOptions = ["0–20 leads/month", "20–50 leads/month", "50–100 leads/month", "100+ leads/month"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    leadsTarget: "",
    hasAgency: "",
    message: "",
  });

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Supabase submission would go here
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden pt-10 pb-6 md:pt-16 md:pb-10">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[280px] md:w-[500px] h-[280px] md:h-[500px] rounded-full bg-[#00E5FF]/4 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-8 md:mb-12"
          >
            <p className="label-tag mb-4 md:mb-6">Contact</p>
            <h1 className="display-xl text-white mb-5 md:mb-6">
              Book your{" "}
              <span className="gradient-neon-text">free lead audit.</span>
            </h1>
            <p className="text-base md:text-xl text-[#6B7280] leading-relaxed">
              A 30-minute session where we analyse your current acquisition funnel, identify the
              gaps, and show you exactly what performance-priced marketing looks like for your firm.
              No pitch. Just math.
            </p>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 md:mb-6"
          >
            {[
              { icon: Clock, label: "Respond within 4 business hours", detail: "Mon–Fri, 10am–7pm GST" },
              { icon: MapPin, label: "Based in Dubai, UAE", detail: "Serving UAE and GCC" },
              { icon: MessageCircle, label: "WhatsApp available", detail: "+971 50 495 4698" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0A] border border-white/6">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-xs text-[#6B7280]">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section ref={formRef} className="section-pad bg-[#080808]/80 relative pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 md:p-16 rounded-2xl bg-[#0A0A0A] border border-[#00E5FF]/20">
                  <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-6">
                    <CheckCircle size={28} className="text-[#00E5FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Audit request received.</h3>
                  <p className="text-[#6B7280] max-w-sm leading-relaxed">
                    We&apos;ll review your details and come back to you within 4 business hours with
                    available slots for your free lead audit.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#0A0A0A] border border-white/6 rounded-2xl p-5 md:p-8 space-y-6"
                >
                  <div>
                    <p className="label-tag mb-2">Free Lead Audit Request</p>
                    <h3 className="text-xl font-bold text-white">Tell us about your firm.</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">Your name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ahmed Al Rashidi"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/8 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">Company name *</label>
                      <input
                        required
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your Business Setup Firm"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/8 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">Email address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.ae"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/8 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">WhatsApp number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/8 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">Monthly marketing budget</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/8 text-white text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0A0A0A]">Select budget range</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0A0A0A]">{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">Lead volume target</label>
                      <select
                        value={form.leadsTarget}
                        onChange={(e) => setForm({ ...form, leadsTarget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/8 text-white text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0A0A0A]">Select target</option>
                        {leadsOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0A0A0A]">{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#6B7280] mb-3">Do you currently work with a marketing agency?</label>
                    <div className="flex flex-wrap gap-3">
                      {["Yes", "No", "In-house team"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, hasAgency: opt })}
                          className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                            form.hasAgency === opt
                              ? "border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF]"
                              : "border-white/8 text-[#6B7280] hover:border-white/20"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#6B7280] mb-2">Anything else you&apos;d like us to know?</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Current challenges, goals, specific questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/8 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-neon w-full justify-center py-4 text-base disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Request Free Lead Audit"}
                    {!loading && <ArrowUpRight size={16} />}
                  </button>

                  <p className="text-xs text-[#6B7280] text-center">
                    We respond within 4 business hours. No spam. No unsolicited calls.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-6"
            >
              {/* WhatsApp */}
              <div className="p-6 rounded-2xl border border-[#25D366]/20 bg-[#25D366]/5">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={20} className="text-[#25D366]" />
                  <p className="font-bold text-white">Prefer WhatsApp?</p>
                </div>
                <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
                  Message us directly. We respond to all WhatsApp messages within 2 hours
                  during business hours.
                </p>
                <a
                  href="https://wa.me/971500000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20lead%20audit%20for%20my%20business%20setup%20firm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/15 transition-colors"
                >
                  <MessageCircle size={14} />
                  Open WhatsApp
                </a>
              </div>

              {/* What happens next */}
              <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/6">
                <p className="font-bold text-white mb-4">What happens after you submit?</p>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We review your submission within 4 business hours" },
                    { step: "2", text: "We send you 2–3 available audit slots" },
                    { step: "3", text: "30-minute video call — we analyse your funnel" },
                    { step: "4", text: "You receive a written audit report within 48 hours" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-bold text-[#00E5FF]">{item.step}</span>
                      </div>
                      <p className="text-sm text-[#6B7280]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="p-6 rounded-2xl glass-neon">
                <p className="text-sm font-bold text-[#00E5FF] mb-2">Our commitment</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  The audit is genuinely free. No hidden pitch at the end. If Velora isn&apos;t right
                  for your firm, we&apos;ll tell you — and point you to what is.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
