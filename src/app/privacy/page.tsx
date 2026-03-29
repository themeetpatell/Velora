import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Velora's privacy policy — how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, including when you submit a lead audit request, subscribe to our newsletter, or contact us. This includes your name, email address, phone number, company name, and any information you voluntarily share.

We also automatically collect certain information when you use our website, including IP address, browser type, pages visited, and time spent on pages. This information is collected via cookies and similar tracking technologies.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your lead audit requests and communications
• Send you our weekly Business Setup Marketing Index (if subscribed)
• Improve our website and services
• Comply with legal obligations
• Send marketing communications (with your consent)

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: "3. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. Lead audit inquiry data is retained for 24 months. Newsletter subscriber data is retained until you unsubscribe.`,
  },
  {
    title: "4. Cookies",
    content: `We use essential cookies to operate our website and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.`,
  },
  {
    title: "5. Your Rights",
    content: `You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing, and request data portability. To exercise these rights, contact us at privacy@velora.ae.`,
  },
  {
    title: "6. Security",
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our platform uses industry-standard encryption and access controls.`,
  },
  {
    title: "7. Contact Us",
    content: `If you have questions about this Privacy Policy or how we handle your data, contact us at privacy@velora.ae or write to: Velora, Dubai, United Arab Emirates.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 section-pad">
        <div className="mb-12">
          <p className="label-tag mb-4">Legal</p>
          <h1 className="display-md text-white mb-4">Privacy Policy</h1>
          <p className="text-[#6B7280] text-sm">
            Last updated: March 2026 · Velora · Dubai, UAE
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="pb-10 border-b border-white/5 last:border-0">
              <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
              <div className="text-[#6B7280] text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
