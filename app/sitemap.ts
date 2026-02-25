import type { MetadataRoute } from "next";
import { getAllSignals } from "@/lib/signals";

export default function sitemap(): MetadataRoute.Sitemap {
  const signals = getAllSignals();

  const signalPages = signals.map((s) => ({
    url: `https://autonomi.ca/signals/${s.slug}`,
    lastModified: new Date(s.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://autonomi.ca",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://autonomi.ca/signals",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://autonomi.ca/learn",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://autonomi.ca/generate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://autonomi.ca/validate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://autonomi.ca/estimate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://autonomi.ca/inspect",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...signalPages,
  ];
}
