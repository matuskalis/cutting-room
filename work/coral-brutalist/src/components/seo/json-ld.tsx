import { siteConfig } from "@/data/site"

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: "https://northboundsystems.example",
    logo: "https://northboundsystems.example/logo.png",
    sameAs: ["https://www.linkedin.com/company/northboundai"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "sales",
      email: siteConfig.contact.email,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: "SDVOSB Certified - AI, Cloud & Data Modernization Services",
    url: "https://northboundsystems.example",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Arlington",
      addressRegion: "MD",
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 08:00-19:00",
    priceRange: "$$$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceJsonLdProps {
  name: string
  description: string
  url: string
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: "https://northboundsystems.example",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Professional Services",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  publishedAt: string
  modifiedAt?: string
  author: string
  url: string
  image?: string
}

export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  modifiedAt,
  author,
  url,
  image,
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: image || "https://northboundsystems.example/og-image.png",
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: "https://northboundsystems.example/logo.png",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQJsonLdProps {
  items: FAQItem[]
}

export function FAQJsonLd({ items }: FAQJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
