import type { MetadataRoute } from "next";
import { helpSections } from "@/data/helpContent";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://help.vibecircles.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionUrls = helpSections.map((section) => ({
    url: `${BASE_URL}/${section.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/search`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    ...sectionUrls,
  ];
}
