"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle, ExternalLink, X } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "ROI Calculator", href: "/pricing#calculator" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505]/80">
      {/* Top CTA strip */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/5 via-[#00E5FF]/10 to-[#00E5FF]/5" />
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="text-left md:text-left">
            <p className="label-tag mb-3">Ready to scale?</p>
            <h2 className="display-md text-white max-w-lg">
              Stop paying for campaigns.{" "}
              <span className="gradient-neon-text">Start paying for clients.</span>
            </h2>
          </div>
          <Link href="/contact" className="btn-neon shrink-0 text-base px-8 py-4 w-full md:w-auto justify-center">
            Get a Free Lead Audit
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="relative">
                <div className="w-7 h-7 rounded-sm gradient-neon flex items-center justify-center">
                  <span className="text-[#050505] font-black text-sm">V</span>
                </div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                velora<span className="text-[#00E5FF]">.</span>
              </span>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs mb-8">
              The UAE & GCC&apos;s first AI-native, performance-only marketing platform
              exclusively serving business setup and PRO services firms.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#6B7280] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://linkedin.com/company/velora-ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#6B7280] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all"
                aria-label="LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="https://x.com/velorae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#6B7280] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all"
                aria-label="X (Twitter)"
              >
                <X size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#6B7280] text-xs text-left">
            © {new Date().getFullYear()} Velora. All rights reserved. Dubai, UAE.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <p className="text-[#6B7280] text-xs">
              Responding within 4 business hours
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
