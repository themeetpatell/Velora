"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, LineChart, Database } from "lucide-react";

const solutionAccent = "#9BC3D5";

const layers = [
  {
    icon: Brain,
    number: "01",
    title: "AI Campaign Engine",
    description:
      "Proprietary intent-signal mapping, multivariate creative generation, and real-time bid optimisation across Meta, Google, TikTok, and LinkedIn — all calibrated specifically for the business setup buyer journey.",
    features: [
      "Intent-signal mapping across 50+ data sources",
      "Multivariate creative testing at scale",
      "Real-time bid optimisation per channel",
      "Business setup buyer journey modelling",
    ],
    metric: "3.2×",
    metricLabel: "average ROAS improvement",
  },
  {
    icon: LineChart,
    number: "02",
    title: "Full-Funnel Attribution",
    description:
      "End-to-end tracking from first ad impression through landing page, lead capture, CRM entry, sales follow-up, and contract signature. Every lead scored. Every channel attributed. Every close rate fed back in.",
    features: [
      "Ad impression → contract signature tracking",
      "60-second lead scoring & CRM delivery",
      "Close rate feedback loop",
      "Real-time client dashboard",
    ],
    metric: "60s",
    metricLabel: "lead scored & in your CRM",
  },
  {
    icon: Database,
    number: "03",
    title: "CRM & Automation System",
    description:
      "Once a lead lands, Velora handles the operational layer: CRM routing, instant sales alerts, WhatsApp and email follow-up, and attribution back to revenue. No spreadsheet chaos. No lag between spend and action.",
    features: [
      "Lead enters CRM in under 60 seconds",
      "Automatic scoring and sales routing",
      "WhatsApp + email automation sequences",
      "Attribution from channel to signed client",
    ],
    metric: "24/7",
    metricLabel: "lead handling and follow-up",
  },
];

export function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-pad relative overflow-hidden bg-[#080808]/80">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent to-transparent"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${solutionAccent}55, transparent)` }}
      />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[720px] h-[240px] rounded-full blur-[120px] opacity-40 pointer-events-none" style={{ backgroundColor: "#7EA8B81A" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6 min-w-0">
            <div className="w-12 h-px shrink-0" style={{ background: `linear-gradient(to right, ${solutionAccent}99, transparent)` }} />
            <p className="label-tag" style={{ color: solutionAccent }}>The Solution</p>
          </div>
          <h2 className="display-lg text-white max-w-4xl break-words [overflow-wrap:anywhere]">
            Three layers working as{" "}
            <span style={{ color: solutionAccent }}>one operating system.</span>
          </h2>
        </motion.div>

        <div>
          {layers.map((layer, index) => {
            const Icon = layer.icon;

            return (
              <motion.div
                key={layer.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 + index * 0.12, duration: 0.65 }}
              >
                <div className="editorial-rule" />
                <div className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-6 items-start min-w-0">
                  <div className="col-span-12 md:col-span-1">
                    <span className="text-sm md:text-[11px] font-bold tracking-[0.24em] md:tracking-[0.2em]" style={{ color: solutionAccent }}>
                      {layer.number}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-3 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3 min-w-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0" style={{ borderColor: `${solutionAccent}44`, backgroundColor: `${solutionAccent}12` }}>
                        <Icon size={18} style={{ color: solutionAccent }} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight break-words [overflow-wrap:anywhere]">
                        {layer.title}
                      </h3>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-5 min-w-0">
                    <p className="text-[15px] leading-relaxed mb-5 md:mb-6 text-white/68">
                      {layer.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {layer.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: solutionAccent }} />
                          <p className="text-sm text-white/72 leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-3 md:text-right mt-5 md:mt-0">
                    <p className="text-[3rem] sm:text-[3.4rem] md:text-6xl font-black leading-none tracking-[-0.04em]" style={{ color: solutionAccent }}>
                      {layer.metric}
                    </p>
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.16em] md:tracking-[0.18em] text-white/38 mt-2 md:mt-3">
                      {layer.metricLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="editorial-rule" />
        </div>
      </div>
    </section>
  );
}
