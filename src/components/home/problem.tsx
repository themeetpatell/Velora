"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const failures = [
  {
    number: "01",
    title: "Generic Agencies, Generic Results",
    body: "Virtuzone, Creative Zone, Shuraa — all served by agencies that run real estate and F&B campaigns the same week. No vertical playbook. No compounding intelligence. Every lesson lost when the account manager leaves.",
    stat: "400+",
    statLabel: "business setup firms, zero vertical specialists",
  },
  {
    number: "02",
    title: "The Retainer Trap",
    body: "AED 15,000–45,000/month invoiced on Day 1, regardless of results. With a 6-week sales cycle, you're paying four months of fees before a single data point emerges on what's actually working.",
    stat: "AED 45K",
    statLabel: "paid before seeing a single result",
  },
  {
    number: "03",
    title: "Zero AI Infrastructure",
    body: "Using ChatGPT to write copy faster isn't an AI strategy. There's no intent-signal mapping, no multivariate creative testing, no full-funnel attribution from ad impression to signed contract.",
    stat: "0%",
    statLabel: "of UAE marketing spend is truly AI-native",
  },
];

export function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-pad relative">
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
            <p className="label-tag">The Problem</p>
          </div>
          <h2 className="display-lg text-white max-w-3xl break-words [overflow-wrap:anywhere]">
            Three failures costing you{" "}
            <span className="gradient-neon-text">every client</span>{" "}
            you should be closing.
          </h2>
        </motion.div>

        {/* Failures — editorial numbered layout */}
        <div>
          {failures.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="editorial-rule" />
              <div className="py-8 md:py-12 grid grid-cols-12 gap-4 md:gap-6 items-start group">
                {/* Number */}
                <div className="col-span-12 md:col-span-1">
                  <span className="text-sm md:text-[11px] font-bold tracking-[0.24em] md:tracking-[0.2em] text-[#9BC3D5]/80 md:text-[#00E5FF]/30 group-hover:text-[#9BC3D5] md:group-hover:text-[#00E5FF]/60 transition-colors duration-300">
                    {f.number}
                  </span>
                </div>

                {/* Title + body */}
                <div className="col-span-12 md:col-span-5 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 leading-tight break-words [overflow-wrap:anywhere]">
                    {f.title}
                  </h3>
                  <p className="text-[15px] md:text-sm text-[#6B7280] leading-relaxed">{f.body}</p>
                </div>

                {/* Spacer on mobile, stat on desktop */}
                <div className="hidden md:flex col-span-2" />

                {/* Stat block */}
                <div className="col-span-12 md:col-span-4 md:text-right mt-5 md:mt-0">
                  <p className="text-[2.15rem] sm:text-[2.35rem] md:text-4xl font-black text-white leading-none tracking-[-0.04em] mb-2">{f.stat}</p>
                  <p className="text-sm md:text-xs text-[#6B7280] leading-relaxed max-w-[24ch] md:max-w-xs md:ml-auto">{f.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="editorial-rule" />
        </div>

        {/* Consequence callout — full-width strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 md:mt-12 p-5 md:p-8 rounded-none border-l-2 border-[#00E5FF]/40 bg-[#00E5FF]/3 pl-5 md:pl-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-[#00E5FF] tracking-widest uppercase mb-3">The Consequence</p>
              <p className="text-white/80 max-w-2xl leading-relaxed">
                Business setup firms are spending{" "}
                <span className="text-white font-semibold">AED 20,000–60,000/month</span> on
                marketing and generating pipelines they cannot measure, attribute, or optimise.
                Velora replaces that entire stack.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-3xl md:text-4xl font-black text-white leading-none">AED 60K</p>
              <p className="text-xs text-[#6B7280] mt-1">wasted per month, on average</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
