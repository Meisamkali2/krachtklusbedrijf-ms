import type { MetadataRoute } from "next";
import { projects } from "./components/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.krachtklusbedrijf-ms.nl";

  const services = [
    "schilderwerk",
    "renovatie",
    "badkamer-renovatie",
    "vloeren",
    "isolatie",
    "zolder-renovatie",
  ];

  const cities = [
    "elst",
    "arnhem",
    "nijmegen",
    "bemmel",
    "huissen",
    "lent",
    "oosterbeek",
  ];

  const staticPages = [
    "",
    "projecten",
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projecten/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      url: page ? `${baseUrl}/${page}` : baseUrl,
      changeFrequency: "weekly" as const,
      priority: page ? 0.9 : 1,
    })),

    ...servicePages,
    ...cityPages,
    ...projectPages,
  ];
}
