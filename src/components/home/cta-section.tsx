"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] md:w-[800px] h-[260px] md:h-[400px] rounded-full bg-[#00E5FF]/4 blur-[100px]" />
      </div>

      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="label-tag mb-6">Get Started</p>
          <h2 className="display-lg text-white mb-6">
            Your next client is{" "}
            <span className="gradient-neon-text">already searching.</span>
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl mx-auto">
            Book a free 30-minute lead audit. We&apos;ll analyse your current acquisition funnel,
            identify the gaps, and show you exactly what a performance-priced engagement looks like
            for your firm.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            <Link href="/contact" className="btn-neon text-base px-10 py-4 w-full sm:w-auto justify-center">
              Get a Free Lead Audit
              <ArrowUpRight size={16} />
            </Link>
            <a
              href="https://wa.me/971500000000?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Velora"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base px-10 py-4 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              WhatsApp Us Now
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "No retainers",
              "No long-term lock-in",
              "Pay per qualified lead",
              "Live in 5 business days",
            ].map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                <span className="text-sm text-[#6B7280]">{signal}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
