import type { MetadataRoute } from "next";

const siteUrl = "https://www.1grateshirt.store";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}