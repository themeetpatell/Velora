import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://velora.ae";
  const now = new Date();

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/solutions`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/pricing`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/resources`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/cookies`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
