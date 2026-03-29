"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { RoiCalculator } from "@/components/roi-calculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Qualified Lead System",
    tag: "Core offering",
    price: "AED 600–1,200",
    period: "per qualified lead",
    fee: "+ AED 3,000–5,000/mo platform fee",
    description:
      "The core commercial model for business setup firms that want predictable qualified lead volume, clean pipeline quality, and attribution from ad to revenue.",
    features: [
      "Paid acquisition across Meta and Google",
      "Landing pages and conversion-rate optimisation",
      "Lead scoring and CRM integration",
      "WhatsApp + email automation",
      "Attribution dashboard from ad to signed client",
      "Minimum volume commitment",
      "6-month contract",
    ],
    cta: "Get a Free Lead Audit",
    highlight: true,
  },
  {
    name: "60-Day Paid Proof",
    tag: "Pilot model",
    price: "Benchmark-driven",
    period: "validation engagement",
    fee: "designed to prove CPL and close-rate fit",
    description:
      "A structured pilot to validate funnel performance, qualification criteria, CRM handoff, and sales response quality before scaling volume under the core system.",
    features: [
      "Qualification criteria locked up front",
      "CRM audit and attribution setup",
      "Channel launch and conversion pages",
      "Weekly optimisation and reporting cadence",
      "Target CPL below AED 950",
      "Target close rate above 18%",
      "Go / no-go decision for scale",
    ],
    cta: "Apply for Pilot",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What counts as a 'qualified lead'?",
    a: "A qualified lead must meet all of: valid contact details, UAE/GCC geographic fit, expressed interest in business setup or PRO services within the relevant package tier, and a quality score above your agreed threshold. Leads that don't meet these criteria are not billed.",
  },
  {
    q: "When do I pay — before or after leads are delivered?",
    a: "The platform fee is billed monthly in advance. Lead fees are billed bi-weekly in arrears based on leads delivered and confirmed qualified. You only pay for what you receive.",
  },
  {
    q: "What if I'm not happy with lead quality?",
    a: "Every lead comes with a quality score and audit trail. If a lead is demonstrably outside the agreed qualification criteria, we credit it. We also build close-rate data into your campaign — if close rates drop, we optimise before you feel the cost.",
  },
  {
    q: "How long until we see leads?",
    a: "Campaign architecture is built in 5 business days. First leads typically arrive within 7–10 days of campaign launch. Volume scales as the AI model calibrates to your specific audience.",
  },
  {
    q: "Do I need to provide ad spend separately?",
    a: "Ad spend is managed by Velora but paid directly by the client to the platforms (Meta, Google, etc.). This keeps your billing transparent and you retain full ownership of your ad accounts. Our platform fee covers management, technology, and the account manager.",
  },
  {
    q: "Can I pause or cancel?",
    a: "After the 6-month minimum engagement, the contract rolls monthly. You can cancel with 30 days written notice. During the 6-month term, you can pause for up to 4 weeks for business reasons.",
  },
  {
    q: "Do you work with competitors of my firm?",
    a: "We have a geographic and package-tier exclusivity policy. We will not run performance campaigns for a direct competitor in your primary market while you are an active client.",
  },
];

export default function PricingPage() {
  const heroRef = useRef(null);
  const calcRef = useRef(null);
  const faqRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const calcInView = useInView(calcRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[240px] md:h-[400px] rounded-full bg-[#00E5FF]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="label-tag mb-6">Pricing</p>
            <h1 className="display-xl text-white mb-6">
              No retainers.{" "}
              <span className="gradient-neon-text">Fixed economics.</span>
              <br />
              Just results.
            </h1>
            <p className="text-base md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              The UAE&apos;s first performance-priced marketing platform for business setup firms.
              Your CFO will love the math.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className={`relative rounded-2xl p-6 md:p-8 border flex flex-col ${
                  plan.highlight
                    ? "border-[#00E5FF]/30 bg-[#0A0A0A] glow-neon"
                    : "border-white/6 bg-[#0A0A0A]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-8">
                    <span className="px-3 py-1 rounded-full gradient-neon text-[#050505] text-xs font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <p className="label-tag mb-2">{plan.tag}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-black gradient-neon-text">{plan.price}</span>
                  </div>
                  <p className="text-sm text-[#6B7280] mb-1">{plan.period}</p>
                  <p className="text-xs text-[#6B7280]">{plan.fee}</p>
                </div>

                <p className="text-sm text-[#6B7280] leading-relaxed mb-8">{plan.description}</p>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={14} className="text-[#00E5FF] mt-0.5 shrink-0" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={plan.highlight ? "btn-neon justify-center w-full" : "btn-ghost justify-center w-full"}
                >
                  {plan.cta}
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Fit note */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 max-w-4xl mx-auto p-5 md:p-6 rounded-2xl glass-neon"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/20 border border-[#00E5FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[#00E5FF] text-xs font-black">Fit</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Who this pricing is for</p>
                <p className="text-sm text-[#6B7280]">
                  Best fit for firms doing 30–200+ setups per month, with an active sales team,
                  existing Meta and Google spend, and willingness to operate inside Zoho, HubSpot,
                  or a clean CRM upgrade path.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" ref={calcRef} className="section-pad bg-[#080808]/80 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={calcInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="label-tag mb-4">ROI Calculator</p>
            <h2 className="display-md text-white max-w-2xl mx-auto">
              Enter your numbers.{" "}
              <span className="gradient-neon-text">Watch the math work.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={calcInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <RoiCalculator />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="section-pad relative">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="label-tag mb-4">FAQ</p>
            <h2 className="display-md text-white">
              Every question{" "}
              <span className="gradient-neon-text">answered.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={i}
                  className="border border-white/6 rounded-xl bg-[#0A0A0A] px-4 md:px-6"
                >
                  <AccordionTrigger className="text-white text-sm font-medium text-left py-5 hover:text-[#00E5FF] transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B7280] text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#080808]/80 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[320px] md:w-[600px] h-[200px] md:h-[300px] rounded-full bg-[#00E5FF]/5 blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="display-md text-white mb-6 max-w-xl mx-auto">
            The math works.{" "}
            <span className="gradient-neon-text">Let us prove it.</span>
          </h2>
          <p className="text-[#6B7280] mb-10 max-w-md mx-auto">
            Book your free lead audit. No commitment required. We&apos;ll show you what
            your pipeline could look like in 30 days.
          </p>
          <Link href="/contact" className="btn-neon text-base px-10 py-4 w-full sm:w-auto justify-center">
            Book a Free Lead Audit
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
