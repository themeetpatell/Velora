"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fitSignals = [
  {
    index: "01",
    title: "Built for business setup & PRO firms",
    description:
      "Velora is designed specifically for UAE firms selling company setup, licensing, visa, and PRO services. The messaging, lead scoring, and reporting are shaped around that sales motion.",
    tag: "ICP",
  },
  {
    index: "02",
    title: "Best for firms doing 30–200+ setups a month",
    description:
      "The system works best when there is enough deal volume to measure lead quality, sales response speed, cost per qualified lead, and close rate with confidence.",
    tag: "Volume",
  },
  {
    index: "03",
    title: "Made for founders and sales leaders",
    description:
      "We work with founders, commercial heads, and sales heads who own revenue. The conversation is about qualified lead cost, pipeline quality, and signed clients, not vanity metrics.",
    tag: "Buyer",
  },
  {
    index: "04",
    title: "Requires CRM readiness",
    description:
      "Zoho, HubSpot, or a clean upgrade path from spreadsheets is essential. Velora only works when leads are scored, routed, and tracked to revenue.",
    tag: "Ops Readiness",
  },
  {
    index: "05",
    title: "Not for branding-only mandates",
    description:
      "If you want social media management, awareness campaigns, or reporting without revenue linkage, Velora is the wrong fit. This is a customer acquisition system.",
    tag: "Disqualifier",
  },
];

export function Moats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-pad bg-[#080808]/80 relative overflow-hidden">
      {/* Top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6 min-w-0">
            <div className="editorial-rule-neon w-12 shrink-0" />
            <p className="label-tag">Best Fit</p>
          </div>
          <h2 className="display-lg text-white max-w-3xl break-words [overflow-wrap:anywhere]">
            Who Velora is{" "}
            <span className="gradient-neon-text">built for</span>
            {" "}and when we say no.
          </h2>
        </motion.div>

        {/* Editorial list */}
        <div>
          {fitSignals.map((signal, i) => (
            <motion.div
              key={signal.index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="editorial-rule" />
              <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 group cursor-default min-w-0">
                {/* Number */}
                <div className="md:w-16 shrink-0">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#00E5FF]/30 group-hover:text-[#00E5FF]/60 transition-colors duration-300">
                    {signal.index}
                  </span>
                </div>

                {/* Title */}
                <div className="md:w-72 shrink-0 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-300 break-words [overflow-wrap:anywhere]">
                    {signal.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1 md:px-8 min-w-0">
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {signal.description}
                  </p>
                </div>

                {/* Tag */}
                <div className="md:w-36 md:text-right shrink-0 pt-1 md:pt-0">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#00E5FF]/40 group-hover:text-[#00E5FF]/70 transition-colors duration-300">
                    {signal.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="editorial-rule" />
        </div>
      </div>
    </section>
  );
}
