"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Brain, LineChart, Database, Target, Zap, BarChart3,
  Globe, MessageSquare, ArrowUpRight, Check, X
} from "lucide-react";

const solutionAccent = "#9BC3D5";

const channels = [
  { name: "Meta Ads", description: "Facebook & Instagram campaigns targeting business intent signals", icon: Globe },
  { name: "Google Search", description: "High-intent keyword capture when prospects are actively searching", icon: Target },
  { name: "TikTok", description: "Short-form content reaching entrepreneurial audiences in the UAE", icon: Zap },
  { name: "LinkedIn", description: "B2B targeting for corporate relocations and enterprise setup", icon: BarChart3 },
  { name: "WhatsApp Business", description: "Direct nurture sequences in the UAE's preferred communication channel", icon: MessageSquare },
];

const comparison = [
  { feature: "Vertical specialisation", velora: true, agency: false, inhouse: false },
  { feature: "Pay-per-result pricing", velora: true, agency: false, inhouse: false },
  { feature: "AI campaign engine", velora: true, agency: false, inhouse: false },
  { feature: "Full-funnel attribution", velora: true, agency: false, inhouse: false },
  { feature: "CRM integration", velora: true, agency: false, inhouse: true },
  { feature: "60-second lead delivery", velora: true, agency: false, inhouse: false },
  { feature: "Cross-client intelligence", velora: true, agency: false, inhouse: false },
  { feature: "Real-time client dashboard", velora: true, agency: false, inhouse: true },
  { feature: "Dedicated account manager", velora: true, agency: true, inhouse: true },
  { feature: "Monthly retainer required", velora: false, agency: true, inhouse: false },
];

const layers = [
  {
    icon: Brain,
    num: "01",
    title: "AI Campaign Engine",
    subtitle: "Proprietary. Vertical-specific. Always learning.",
    body: "Every campaign we run is powered by a proprietary intent-signal model trained exclusively on business setup and PRO services buyer behaviour. We map signals from Google Trends, Meta Pixel data, search query patterns, and cross-client conversion data to predict which audiences are entering their 30–90 day decision window — before your competitors even know they exist.",
    bullets: [
      "Multivariate creative testing at scale across 5 channels",
      "Real-time bid adjustment based on lead quality signals",
      "Niche-specific landing pages A/B tested continuously",
      "Client 10 benefits from insights from Clients 1–9",
    ],
    metric: { value: "3.2×", label: "average ROAS vs. generalist agency" },
  },
  {
    icon: LineChart,
    num: "02",
    title: "Full-Funnel Attribution",
    subtitle: "From ad impression to signed contract. Every step.",
    body: "Most agencies measure clicks. We measure contracts. Our attribution model tracks every touchpoint from first ad impression through landing page, lead capture, CRM entry, sales follow-up, and contract signature. Every lead enters your CRM pre-scored within 60 seconds. Every closed deal feeds back into the campaign model — making future targeting more precise.",
    bullets: [
      "Lead scoring on 12+ intent and fit signals in real time",
      "Automated 14-day WhatsApp + email nurture for non-immediate leads",
      "Sales handoff protocol: only above-threshold leads reach your team",
      "Contract close data feeds back into campaign optimisation",
    ],
    metric: { value: "60s", label: "lead scored & in your CRM" },
  },
  {
    icon: Database,
    num: "03",
    title: "CRM & Automation System",
    subtitle: "Operational follow-up built into the acquisition engine.",
    body: "Lead generation breaks when marketing and sales are disconnected. Velora routes leads into your CRM in under 60 seconds, scores them automatically, triggers WhatsApp and email follow-up, and keeps attribution tied back to signed clients so your team can see what is actually producing revenue.",
    bullets: [
      "CRM delivery in under 60 seconds",
      "Automatic lead scoring and routing",
      "WhatsApp + email automation for follow-up",
      "Revenue attribution back to channel and campaign",
    ],
    metric: { value: "24/7", label: "operational lead handling" },
  },
];

type Layer = (typeof layers)[number];

function SolutionLayer({
  layer,
  index,
  inView,
}: {
  layer: Layer;
  index: number;
  inView: boolean;
}) {
  const Icon = layer.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-6 items-start"
    >
      <div className="col-span-12 md:col-span-1">
        <span className="text-sm md:text-[11px] font-bold tracking-[0.24em] md:tracking-[0.2em]" style={{ color: solutionAccent }}>
          {layer.num}
        </span>
      </div>

      <div className="col-span-12 md:col-span-3 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-4 min-w-0">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center border shrink-0"
            style={{ borderColor: `${solutionAccent}44`, backgroundColor: `${solutionAccent}12` }}
          >
            <Icon size={20} style={{ color: solutionAccent }} />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white leading-tight break-words [overflow-wrap:anywhere]">{layer.title}</h3>
        </div>
      </div>

      <div className="col-span-12 md:col-span-5 min-w-0">
        <p className="text-sm font-medium mb-4" style={{ color: solutionAccent }}>
          {layer.subtitle}
        </p>
        <p className="text-[15px] text-white/68 leading-relaxed mb-6">{layer.body}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {layer.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <Check size={14} className="mt-1 shrink-0" style={{ color: solutionAccent }} />
              <p className="text-sm text-white/72 leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-3 md:text-right mt-5 md:mt-0">
        <p className="text-[3rem] sm:text-[3.4rem] md:text-6xl font-black leading-none tracking-[-0.04em]" style={{ color: solutionAccent }}>
          {layer.metric.value}
        </p>
        <p className="text-[11px] md:text-xs uppercase tracking-[0.16em] md:tracking-[0.18em] text-white/38 mt-2 md:mt-3">
          {layer.metric.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function SolutionsPage() {
  const heroRef = useRef(null);
  const layersRef = useRef(null);
  const compRef = useRef(null);
  const channelsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const layersInView = useInView(layersRef, { once: true, margin: "-80px" });
  const compInView = useInView(compRef, { once: true, margin: "-100px" });
  const channelsInView = useInView(channelsRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[240px] md:h-[400px] rounded-full bg-[#00E5FF]/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="label-tag mb-6">Solutions</p>
            <h1 className="display-xl text-white mb-8">
              Three layers.{" "}
              <span className="gradient-neon-text">One outcome.</span>
              <br />
              Clients you can close.
            </h1>
            <p className="text-base md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-8 md:mb-10">
              Velora&apos;s platform is built exclusively for business setup and PRO services firms.
              Every tool, every model, every insight — calibrated for your buyer journey and nobody else&apos;s.
            </p>
            <Link href="/contact" className="btn-neon text-base px-8 py-4 w-full sm:w-auto justify-center">
              Get a Free Lead Audit
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Three Layers Deep Dive */}
      <section ref={layersRef} className="section-pad bg-[#080808]/80 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
          style={{ backgroundImage: `linear-gradient(to right, transparent, ${solutionAccent}55, transparent)` }}
        />
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[420px] md:w-[760px] h-[180px] md:h-[260px] rounded-full blur-[130px] opacity-35 pointer-events-none"
          style={{ backgroundColor: "#7EA8B81A" }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={layersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px shrink-0" style={{ background: `linear-gradient(to right, ${solutionAccent}99, transparent)` }} />
              <p className="label-tag" style={{ color: solutionAccent }}>How The System Works</p>
            </div>
            <h2 className="display-lg text-white max-w-4xl">
              Three layers that work together,
              {" "}
              <span style={{ color: solutionAccent }}>without looking like a stack of widgets.</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {layers.map((layer, index) => (
              <div key={layer.num}>
                <div className="editorial-rule" />
                <SolutionLayer layer={layer} index={index} inView={layersInView} />
              </div>
            ))}
            <div className="editorial-rule" />
          </div>
        </div>
      </section>

      {/* Channels */}
      <section ref={channelsRef} className="section-pad relative">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={channelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="label-tag mb-4">Channels</p>
            <h2 className="display-md text-white max-w-2xl">
              Every channel where your{" "}
              <span className="gradient-neon-text">buyer is searching.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={channelsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-6 rounded-2xl border border-white/6 bg-[#0A0A0A] hover-card group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#00E5FF]/15 transition-colors">
                    <Icon size={18} className="text-[#00E5FF]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{channel.name}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{channel.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={compRef} className="section-pad bg-[#080808]/80 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] md:w-[600px] h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="label-tag mb-4">Comparison</p>
            <h2 className="display-md text-white max-w-2xl">
              Velora vs. the{" "}
              <span className="gradient-neon-text">alternatives.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="overflow-x-auto rounded-2xl border border-white/6"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/6">
                  <th className="text-left p-6 text-sm font-medium text-[#6B7280]">Feature</th>
                  <th className="p-6 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-[#00E5FF] font-bold text-sm">Velora</span>
                      <span className="text-xs text-[#6B7280]">Performance Platform</span>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-white/60 font-medium text-sm">Agency</span>
                      <span className="text-xs text-[#6B7280]">Generalist</span>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-white/60 font-medium text-sm">In-House</span>
                      <span className="text-xs text-[#6B7280]">Internal Team</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/4 hover:bg-white/2 transition-colors">
                    <td className="p-6 text-sm text-white/70">{row.feature}</td>
                    <td className="p-6 text-center">
                      {row.velora ? (
                        <Check size={16} className="text-[#00E5FF] mx-auto" />
                      ) : (
                        <X size={16} className="text-red-500/60 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.agency ? (
                        <Check size={16} className="text-white/30 mx-auto" />
                      ) : (
                        <X size={16} className="text-red-500/40 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.inhouse ? (
                        <Check size={16} className="text-white/30 mx-auto" />
                      ) : (
                        <X size={16} className="text-red-500/40 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[320px] md:w-[600px] h-[200px] md:h-[300px] rounded-full bg-[#00E5FF]/5 blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="label-tag mb-4">Get Started</p>
          <h2 className="display-md text-white mb-6 max-w-xl mx-auto">
            Ready to see what{" "}
            <span className="gradient-neon-text">performance looks like?</span>
          </h2>
          <p className="text-[#6B7280] mb-10 max-w-lg mx-auto">
            Book a free 30-minute lead audit. No commitment. Just math.
          </p>
          <Link href="/contact" className="btn-neon text-base px-10 py-4 w-full sm:w-auto justify-center">
            Get a Free Lead Audit
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
