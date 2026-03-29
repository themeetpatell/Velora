"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const stats = [
  { value: "30–200+", label: "setups per month in our ideal client range" },
  { value: "AED 600–1.2K", label: "target cost per qualified lead" },
  { value: "22%", label: "benchmark close rate" },
  { value: "<60s", label: "lead routed into your CRM" },
];

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-[#00E5FF]/5 blur-[120px]" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-[#00E5FF]/3 blur-[80px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-24 md:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="mb-5 md:mb-8">
            <span className="inline-flex w-fit max-w-full items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.14em] md:tracking-[0.18em] uppercase text-[#00E5FF] leading-tight whitespace-normal">
                UAE Business Setup &amp; PRO Firms
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.45rem] sm:text-[4rem] md:display-xl text-white mb-5 md:mb-6 max-w-[11ch] sm:max-w-[12ch] md:max-w-5xl leading-[0.98] sm:leading-[0.94] tracking-[-0.05em] md:tracking-[-0.055em] font-black"
          >
            <span className="block sm:inline">Qualified leads</span>{" "}
            <span className="block sm:inline">
              at a{" "}
              <span className="relative inline-block gradient-neon-text">
                fixed cost.
                <motion.span
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#00E5FF] to-transparent hidden md:block"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </span>{" "}
            <span className="block sm:inline">Built for revenue teams.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-[1.02rem] md:text-xl text-[#6B7280] max-w-[34rem] leading-[1.55] mb-8 md:mb-10"
          >
            Velora is the customer acquisition system for UAE business setup and PRO firms.
            We run paid acquisition, landing pages, lead scoring, CRM integration, WhatsApp
            and email automation, and attribution from ad to signed client.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-10 md:mb-20 w-full sm:w-auto">
            <Link href="/contact" className="btn-neon text-base px-8 py-4 w-full sm:w-auto justify-center">
              Get a Free Lead Audit
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/#how-it-works" className="btn-ghost text-base px-8 py-4 w-full sm:w-auto justify-center">
              <Play size={14} />
              See How It Works
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 max-w-4xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="bg-[#0A0A0A] px-5 md:px-6 py-5 md:py-6 group hover:bg-[#0F0F0F] transition-colors min-h-[132px] md:min-h-[156px] flex flex-col justify-between"
              >
                <p className="text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-black tracking-[-0.05em] leading-[0.9] gradient-neon-text mb-3 break-words">
                  {stat.value}
                </p>
                <p className="text-sm md:text-xs text-[#6B7280] leading-relaxed max-w-[18ch]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[#6B7280] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#00E5FF]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
