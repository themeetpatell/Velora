import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Velora's cookie policy — how we use cookies and tracking technologies.",
};

export default function CookiesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 section-pad">
        <div className="mb-12">
          <p className="label-tag mb-4">Legal</p>
          <h1 className="display-md text-white mb-4">Cookie Policy</h1>
          <p className="text-[#6B7280] text-sm">Last updated: March 2026 · Velora · Dubai, UAE</p>
        </div>
        <div className="space-y-10">
          {[
            { title: "What Are Cookies", content: "Cookies are small text files placed on your device when you visit our website. They help us provide a better experience and understand how visitors use our site." },
            { title: "Essential Cookies", content: "Required for the website to function. These cannot be disabled. They include session management, security tokens, and form submission handling." },
            { title: "Analytics Cookies", content: "We use Vercel Analytics to understand page visits, traffic sources, and user behaviour. This data is anonymised and never linked to individual identities." },
            { title: "Marketing Cookies", content: "We use Meta Pixel and Google Tag Manager to measure the effectiveness of our own marketing campaigns. These are only active if you consent via our cookie banner." },
            { title: "Managing Cookies", content: "You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect site functionality." },
            { title: "Contact", content: "Questions about our cookie use? Email privacy@velora.ae." },
          ].map((section, i) => (
            <div key={i} className="pb-10 border-b border-white/5 last:border-0">
              <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
