import type { MetadataRoute } from "next";
import { getPublishedResources } from "@/content/resources";

export const dynamic = "force-static";

const baseUrl = (process.env.SITE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");

// The full site remains behind the pre-launch robots gate. Approved Resources
// URLs are prepared here so publishing a future guide updates the sitemap automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedResources().map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(`${article.updatedAt ?? article.publishedAt}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: article.featured ? 0.8 : 0.7,
  }));
  return [
    { url: `${baseUrl}/resources`, lastModified: new Date("2026-09-02T00:00:00Z"), changeFrequency: "weekly", priority: 0.8 },
    ...articles,
  ];
}
