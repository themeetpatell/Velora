import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | Resources`,
    description: "Business setup marketing insights from Velora.",
  };
}

export default async function ResourcePostPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 section-pad">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Resources
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 label-tag">
              Market Intelligence
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
              <Clock size={12} />
              8 min read
            </span>
            <span className="text-xs text-[#6B7280]">Mar 15, 2026</span>
          </div>
          <h1 className="display-md text-white mb-6 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
            A data-driven look at business setup marketing trends, conversion benchmarks,
            and what&apos;s working across UAE and GCC free zones.
          </p>
          <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
            <div className="w-8 h-8 rounded-full gradient-neon flex items-center justify-center">
              <span className="text-[#050505] font-black text-xs">V</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Velora Research Team</p>
              <p className="text-xs text-[#6B7280]">velora.ae</p>
            </div>
          </div>
        </header>

        {/* Article body placeholder */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-[#6B7280] leading-relaxed">
            <div className="p-6 rounded-xl glass-neon">
              <p className="text-sm font-medium text-[#00E5FF] mb-2">Note</p>
              <p className="text-sm text-white/70">
                Full article content is managed via Supabase CMS. This is a preview of the article structure.
                Connect your Supabase database to populate dynamic content here.
              </p>
            </div>

            <p>
              Every week, Velora analyses campaign performance across our client portfolio —
              representing 15+ active business setup and PRO services firms in the UAE and GCC.
              This index provides the market intelligence that no generalist agency can produce.
            </p>

            <h2 className="text-xl font-bold text-white">Key Findings</h2>
            <ul className="space-y-2">
              {["Free zone inquiry traffic grew 18% QoQ", "WhatsApp campaigns outperform email 3:1 on open rates", "Google Search remains highest-intent channel at 34% close rate", "TikTok emerging as top-of-funnel discovery channel for under-35 entrepreneurs"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-white">Methodology</h2>
            <p>
              Data sourced from anonymised campaign metrics across Velora client portfolio.
              All figures represent aggregate averages. Individual client data is never disclosed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl glass-neon text-center">
          <p className="label-tag mb-3">Want insights like this for your firm?</p>
          <h3 className="text-xl font-bold text-white mb-4">
            Book a free lead audit and see what your pipeline could look like.
          </h3>
          <Link href="/contact" className="btn-neon inline-flex w-full sm:w-auto justify-center">
            Get a Free Lead Audit
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
