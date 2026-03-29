"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    title: "Vertical-only focus",
    description:
      "We only serve business setup and PRO firms. That keeps the campaigns, qualification logic, and reporting tuned to one buyer journey instead of diluted across unrelated industries.",
  },
  {
    title: "CRM-native execution",
    description:
      "Lead generation is only useful when sales can act on it. Velora routes leads into your CRM, scores them, and tracks what becomes revenue.",
  },
  {
    title: "Performance pricing",
    description:
      "Our incentives are tied to qualified lead delivery, not vanity metrics or activity reports. Lead qualification criteria are agreed before launch.",
  },
  {
    title: "Operational transparency",
    description:
      "Clients get visibility from ad spend to lead quality to close rate. No black-box reporting. No ambiguity about what is working.",
  },
];

const fitSignals = [
  "UAE-based business setup or PRO firm",
  "Typically 30–200+ setups per month",
  "Founder, commercial head, or sales head involved",
  "Already investing in Meta and Google",
  "Zoho, HubSpot, or willingness to upgrade from spreadsheets",
];

const leadership = [
  {
    name: "Naman",
    role: "Onboarding and delivery execution",
    description:
      "Leads client setup, delivery quality, and the day-to-day execution required to make the system work.",
  },
  {
    name: "Ramshad",
    role: "Legal and financial control",
    description:
      "Keeps the business disciplined on contracts, compliance, and financial decision-making.",
  },
  {
    name: "Shafeekh",
    role: "Strategic direction",
    description:
      "Provides long-range direction, positioning, and the commercial decisions behind scale.",
  },
  {
    name: "Meet",
    role: "Systems, Technology, and GTM",
    description:
      "Crafts strategy behind acquisition, attribution, GTM and commercial structure.",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-20">
      <section ref={heroRef} className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[360px] md:w-[600px] h-[320px] md:h-[500px] rounded-full bg-[#00E5FF]/4 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="label-tag mb-6">About Velora</p>
              <h1 className="display-xl text-white mb-8">
                Built for revenue teams,{" "}
                <span className="gradient-neon-text">not vanity metrics.</span>
              </h1>
              <p className="text-base md:text-xl text-[#6B7280] leading-relaxed mb-8">
                Velora exists for UAE business setup and PRO firms that want customer acquisition
                to be measurable, attributable, and operationally usable by sales. We do not sell
                awareness for its own sake. We build qualified lead flow.
              </p>
              <Link href="/contact" className="btn-neon text-base px-8 py-4 w-full sm:w-auto justify-center">
                Work With Us
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { value: "AED 600–1,200", label: "target cost per qualified lead" },
                { value: "<60s", label: "lead routed into CRM" },
                { value: "30–200+", label: "monthly setup volume sweet spot" },
                { value: "6 months", label: "minimum contract term" },
              ].map((stat) => (
                <div key={stat.label} className="p-5 md:p-6 rounded-2xl bg-[#0A0A0A] border border-white/6">
                  <p className="text-2xl md:text-3xl font-black gradient-neon-text mb-2 break-words">{stat.value}</p>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={storyRef} className="section-pad bg-[#080808]/80 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <p className="label-tag mb-4">Why Velora Exists</p>
              <h2 className="display-md text-white">Marketing should be operational.</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="lg:col-span-3 space-y-6 text-[#6B7280] leading-relaxed"
            >
              <p>
                Business setup firms do not need another generic agency. They need a system that
                can acquire qualified leads, route them into sales quickly, and show what turns
                into revenue.
              </p>
              <p>
                Velora was built around that exact requirement: paid acquisition, landing pages,
                qualification logic, CRM integration, WhatsApp and email automation, and reporting
                that follows the lead all the way through the pipeline.
              </p>
              <p>
                The point is simple. Customer acquisition should be calculable and defensible. If
                a founder or sales head cannot see cost per qualified lead, close rate, and revenue
                attribution, the system is incomplete.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="section-pad relative">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="label-tag mb-4">Operating Principles</p>
            <h2 className="display-md text-white max-w-xl">
              How clients judge us{" "}
              <span className="gradient-neon-text">should be obvious.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/6 hover-card"
              >
                <div className="neon-line mb-6" />
                <h3 className="text-lg font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="section-pad bg-[#080808]/80 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="label-tag mb-4">The Team</p>
            <h2 className="display-md text-white max-w-3xl">
              The operators behind{" "}
              <span className="gradient-neon-text">Velora.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-1 p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/6"
            >
              <p className="label-tag mb-5">How We&apos;re Set Up</p>
              <div className="space-y-4 text-sm text-white/75 leading-relaxed">
                <p>
                  Velora is built around delivery, systems, and commercial accountability.
                </p>
                <p>
                  That matters because this is not a content studio or a branding shop. It is a
                  customer acquisition system for business setup firms.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00E5FF] mb-3">
                  Best Fit Clients
                </p>
                <div className="space-y-3">
                  {fitSignals.map((item) => (
                    <p key={item} className="text-sm text-[#6B7280] leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2 p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/6"
            >
              <p className="label-tag mb-5">Leadership</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leadership.map((person) => (
                  <div key={person.name} className="p-5 rounded-xl border border-white/6 bg-[#050505]">
                    <p className="text-lg font-bold text-white mb-2">{person.name}</p>
                    <p className="text-sm text-[#00E5FF] mb-3">{person.role}</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{person.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6B7280] leading-relaxed mt-6">
                The team combines systems thinking, delivery execution, legal and financial control,
                and strategic direction. The goal is simple: make acquisition measurable and usable
                for sales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
