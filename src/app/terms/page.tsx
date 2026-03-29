import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Velora's terms of service — the legal agreement governing use of our platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Velora's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "2. Services Description",
    content: `Velora provides AI-native performance marketing services exclusively to business setup and PRO services firms in the UAE and GCC. Services include lead generation, campaign management, attribution, and reporting as described in individual service agreements.`,
  },
  {
    title: "3. Client Obligations",
    content: `Clients agree to:

• Provide accurate information during onboarding
• Maintain a sales team capable of following up on delivered leads within agreed timeframes
• Grant Velora access to necessary platforms (Meta Ads, Google Ads, CRM) for campaign management
• Pay invoices within 14 days of issuance
• Not share campaign data, methodologies, or pricing with competitors`,
  },
  {
    title: "4. Performance Lead Definitions",
    content: `A 'qualified lead' is defined in individual service agreements and must meet all agreed criteria including geographic fit, contact validity, and intent score threshold. Leads not meeting criteria will not be billed. Lead quality disputes must be raised within 5 business days of delivery.`,
  },
  {
    title: "5. Intellectual Property",
    content: `Velora retains ownership of its AI models, attribution methodologies, campaign architectures, creative frameworks, and data intelligence assets. Client-specific campaign assets built during an engagement remain the property of the client.`,
  },
  {
    title: "6. Confidentiality",
    content: `Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. Velora will not disclose client-specific performance data to third parties. Clients will not disclose Velora's methodologies, pricing, or platform details.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `Velora's liability is limited to the fees paid in the three months preceding any claim. Velora is not liable for indirect, consequential, or incidental damages. Results achieved by clients using Velora-delivered leads depend on the client's own sales capability.`,
  },
  {
    title: "8. Governing Law",
    content: `These terms are governed by the laws of the United Arab Emirates and the Emirate of Dubai. Disputes shall be subject to the exclusive jurisdiction of the Dubai Courts.`,
  },
];

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 section-pad">
        <div className="mb-12">
          <p className="label-tag mb-4">Legal</p>
          <h1 className="display-md text-white mb-4">Terms of Service</h1>
          <p className="text-[#6B7280] text-sm">
            Last updated: March 2026 · Velora · Dubai, UAE
          </p>
        </div>
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="pb-10 border-b border-white/5 last:border-0">
              <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
