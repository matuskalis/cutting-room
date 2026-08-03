import { MetadataRoute } from "next"
import { siteConfig } from "@/data/site"
import { caseStudies } from "@/data/case-studies"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://northboundsystems.example"

  const staticPages = [
    "",
    "/about",
    "/solutions",
    "/solutions/security",
    "/solutions/data",
    "/solutions/contracting",
    "/services",
    "/case-studies",
    "/procurement",
    "/proof",
    "/resources",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/technology",
    "/accessibility",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const servicePages = siteConfig.services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...caseStudyPages]
}
