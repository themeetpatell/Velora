"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";

const categories = ["All", "Lead Generation", "Market Intelligence", "UAE Business Setup", "Performance Marketing", "AI Strategy"];

const posts = [
  {
    category: "Market Intelligence",
    title: "The Business Setup Marketing Index — Q1 2026",
    excerpt: "Which free zones generated the most inbound inquiry traffic in Q1 2026? We analysed campaigns across 12 business setup firms to find out.",
    readTime: "8 min read",
    date: "Mar 15, 2026",
    featured: true,
    slug: "business-setup-marketing-index-q1-2026",
  },
  {
    category: "Lead Generation",
    title: "Why 78% of Business Setup Leads Never Make It to Your Sales Team",
    excerpt: "The gap between lead capture and sales handoff is where most firms bleed revenue. Here's the data on what's going wrong — and how to fix it.",
    readTime: "6 min read",
    date: "Mar 8, 2026",
    featured: false,
    slug: "business-setup-lead-loss-analysis",
  },
  {
    category: "UAE Business Setup",
    title: "DMCC vs ADGM vs IFZA: Which Free Zone Converts Best in 2026?",
    excerpt: "We ran parallel campaigns targeting all three free zones. The conversion rate differences are significant — and not what you'd expect.",
    readTime: "10 min read",
    date: "Feb 28, 2026",
    featured: false,
    slug: "free-zone-conversion-comparison-2026",
  },
  {
    category: "Performance Marketing",
    title: "The Retainer Trap: Why Fixed-Fee Agency Models Fail Business Setup Firms",
    excerpt: "A data-backed look at why performance pricing outperforms retainers for high-LTV, short-window B2C services.",
    readTime: "7 min read",
    date: "Feb 20, 2026",
    featured: false,
    slug: "retainer-trap-performance-pricing",
  },
  {
    category: "AI Strategy",
    title: "Intent Signal Mapping: How We Identify Business Setup Buyers 30 Days Before They Search",
    excerpt: "The proprietary methodology behind Velora's AI campaign engine — and why vertical-specific intent modelling outperforms generic targeting.",
    readTime: "12 min read",
    date: "Feb 12, 2026",
    featured: false,
    slug: "intent-signal-mapping-methodology",
  },
  {
    category: "Market Intelligence",
    title: "Saudi Arabia's Business Formation Boom: What UAE Setup Firms Should Know",
    excerpt: "Vision 2030 is producing a business formation wave 3-4 years behind UAE. The marketing playbook is identical. The competition is far lower.",
    readTime: "9 min read",
    date: "Feb 5, 2026",
    featured: false,
    slug: "saudi-arabia-business-formation-boom",
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[280px] md:w-[500px] h-[220px] md:h-[400px] rounded-full bg-[#00E5FF]/4 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12 md:mb-16"
          >
            <p className="label-tag mb-6">Resources</p>
            <h1 className="display-xl text-white mb-6">
              The institution for{" "}
              <span className="gradient-neon-text">UAE marketing intelligence.</span>
            </h1>
            <p className="text-base md:text-xl text-[#6B7280] leading-relaxed">
              Weekly reports, market data, and performance insights exclusively for the
              business setup and PRO services sector. Built by the team running campaigns
              across 15+ firms in real time.
            </p>
          </motion.div>

          {/* Featured post */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Link href={`/resources/${featured.slug}`} className="group block">
                <div className="relative rounded-2xl border border-[#00E5FF]/20 bg-gradient-to-br from-[#00E5FF]/5 to-transparent p-6 md:p-10 hover-card overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 label-tag">
                        {featured.category}
                      </span>
                      <span className="text-xs text-[#6B7280]">Featured</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors max-w-2xl leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-[#6B7280] leading-relaxed max-w-2xl mb-8">{featured.excerpt}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                          <Clock size={12} />
                          {featured.readTime}
                        </span>
                        <span className="text-xs text-[#6B7280]">{featured.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#00E5FF] text-sm font-medium">
                        Read report
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Posts grid */}
      <section ref={gridRef} className="section-pad bg-[#080808]/80 relative pt-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF]"
                    : "border border-white/10 text-[#6B7280] hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={`/resources/${post.slug}`} className="group block h-full">
                  <div className="h-full bg-[#0A0A0A] border border-white/6 rounded-2xl p-6 hover-card flex flex-col">
                    <div className="mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#00E5FF]/8 border border-[#00E5FF]/15 label-tag text-[0.65rem]">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                        <span className="text-xs text-[#6B7280]">{post.date}</span>
                      </div>
                      <BookOpen size={14} className="text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[320px] md:w-[600px] h-[200px] md:h-[300px] rounded-full bg-[#00E5FF]/5 blur-[80px]" />
        </div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <p className="label-tag mb-4">Weekly Index</p>
          <h2 className="display-md text-white mb-4">
            Get the{" "}
            <span className="gradient-neon-text">Business Setup Marketing Index</span>{" "}
            every week.
          </h2>
          <p className="text-[#6B7280] mb-8 leading-relaxed">
            Which free zones are generating the most inquiry traffic. Which ad formats are
            converting best. What the market-wide cost-per-lead trend looks like. Delivered
            every Monday.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@company.ae"
              className="flex-1 px-4 py-3 rounded-lg bg-[#0F0F0F] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00E5FF]/40 transition-colors"
            />
            <button type="submit" className="btn-neon px-6 py-3 shrink-0">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#6B7280] mt-4">Free forever. No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
