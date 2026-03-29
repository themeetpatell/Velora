"use client";

const items = [
  "40,000+ Business Licenses Issued in Dubai (2025)",
  "AED 900 Average Cost Per Qualified Lead",
  "22% Average Client Close Rate",
  "60 Seconds — Lead Scored & In Your CRM",
  "UAE Digital Ad Market: $3.3B and Growing",
  "Performance or Nothing — That&apos;s the Velora Promise",
  "No Retainers. No Vanity Metrics. Just Results.",
  "GCC Business Setup Sector: $180M+ Annual Marketing Spend",
];

export function Ticker() {
  return (
    <div className="relative border-y border-white/5 bg-[#080808]/80 overflow-hidden py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-ticker whitespace-nowrap" style={{ width: "max-content" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8">
            <span
              className="text-xs font-medium text-[#6B7280] tracking-wide uppercase"
              dangerouslySetInnerHTML={{ __html: item }}
            />
            <span className="text-[#00E5FF] text-lg leading-none">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
