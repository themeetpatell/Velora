"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Onboarding & Qualification Lock",
    metric: "Week 1",
    metricLabel: "commercial setup",
    description:
      "We align the offer, audit your CRM, define what counts as a qualified lead, and agree the exact criteria your sales team will accept before any traffic goes live.",
  },
  {
    step: "02",
    title: "System Setup & Go Live",
    metric: "Week 2",
    metricLabel: "launch window",
    description:
      "We launch paid acquisition, build conversion pages, connect CRM and WhatsApp, and set up tracking so every lead and every dirham can be tied back to revenue.",
  },
  {
    step: "03",
    title: "Real-Time Lead Handling",
    metric: "<60 sec",
    metricLabel: "CRM routing",
    description:
      "Leads enter your CRM in under 60 seconds, are automatically scored, and trigger instant alerts plus WhatsApp and email follow-up based on qualification and response status.",
  },
  {
    step: "04",
    title: "Weekly Optimisation & Reporting",
    metric: "Weekly",
    metricLabel: "improvement loop",
    description:
      "Every week we review CPL, creative performance, audience quality, close rate, and attributed revenue so budget moves toward what is actually producing signed clients.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6 min-w-0">
            <div className="editorial-rule-neon w-12 shrink-0" />
            <p className="label-tag">Process</p>
          </div>
          <h2 className="display-lg text-white max-w-2xl break-words [overflow-wrap:anywhere]">
            From onboarding to live lead flow<br />
            <span className="gradient-neon-text">in two weeks.</span>
          </h2>
        </motion.div>

        {/* Steps — editorial numbered rows */}
        <div>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
            >
              {/* Rule */}
              <div className="editorial-rule" />

              <div className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-6 items-start group">
                {/* Step number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#00E5FF]/40 group-hover:text-[#00E5FF]/70 transition-colors duration-300">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-10 md:col-span-4 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-300 leading-tight break-words [overflow-wrap:anywhere]">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-5 md:col-start-6">
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Metric */}
                <div className="col-span-12 md:col-span-2 md:text-right mt-1 md:mt-0">
                  <span className="text-xl md:text-2xl font-black text-[#00E5FF] block leading-none">
                    {step.metric}
                  </span>
                  <span className="text-[10px] text-[#6B7280] tracking-wider uppercase mt-1 block">
                    {step.metricLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Final rule */}
          <div className="editorial-rule" />
        </div>
      </div>
    </section>
  );
}
