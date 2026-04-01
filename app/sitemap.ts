import type { MetadataRoute } from "next";
import { helpSections } from "@/data/helpContent";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://help-center.vibecircles.co.za").replace(/\/$/, "");
const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const ORIGIN = `${SITE}${BASE_PATH}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionUrls = helpSections.map((section) => ({
    url: `${ORIGIN}/${section.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const legalUrls = (["privacy", "terms", "cookies", "popia"] as const).map((path) => ({
    url: `${ORIGIN}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.35,
  }));

  return [
    { url: ORIGIN, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${ORIGIN}/search`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    { url: `${ORIGIN}/roadmap`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    ...legalUrls,
    ...sectionUrls,
  ];
}
