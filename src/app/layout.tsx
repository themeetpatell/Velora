import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SiteBackdrop } from "@/components/site-backdrop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velora.ae"),
  title: {
    default: "Velora — UAE's First Performance Marketing Platform for Business Setup Firms",
    template: "%s | Velora",
  },
  description:
    "Velora delivers qualified, attributed leads to UAE & GCC business setup and PRO services firms. Pay per result. No retainers. No guessing.",
  keywords: [
    "business setup marketing UAE",
    "performance marketing Dubai",
    "lead generation business formation GCC",
    "AI marketing platform UAE",
    "PRO services marketing",
    "pay per lead Dubai",
    "business setup leads",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Velora",
    title: "Velora — Performance Marketing for UAE Business Setup Firms",
    description:
      "The UAE's first AI-native, performance-only marketing platform exclusively serving business setup and PRO services firms.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora — Performance Marketing for UAE Business Setup Firms",
    description: "Pay per qualified lead. Not per month.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="relative antialiased bg-[#050505] text-white overflow-x-hidden" style={{ fontFamily: 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif' }}>
        <SiteBackdrop />
        <div className="relative z-10">
          <Nav />
          <main className="w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
