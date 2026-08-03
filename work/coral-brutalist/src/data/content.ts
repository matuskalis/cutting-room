/**
 * Centralized content management for Northbound Systems website
 * All UI copy lives here for easy editing and consistency
 */

export const content = {
  // Badge labels used across the site
  badges: {
    sdvosb: "SDVOSB Certified",
    sdvosbFull: "Service-Disabled Veteran-Owned Small Business",
    fedRamp: "Control-aligned architectures supporting FedRAMP Moderate authorization workflows",
    hipaa: "Architectures designed for environments subject to HIPAA Security Rule requirements",
    auditReady: "Continuous compliance monitoring with pre-mapped control documentation",
    samRegistered: "SAM.gov Registered",
    cmmc: "Architectures aligned to CMMC Level 2 practice requirements",
    dodIl: "Architectures designed for DoD IL4/IL5 environment requirements",
  },

  // Government identifiers for procurement
  identifiers: {
    cageCode: "Available on Request",
    uei: "Available on Request",
    naicsCodes: ["541512", "541511", "541519", "518210"],
    setAsides: ["SDVOSB"],
  },

  // About page specific copy
  about: {
    heroHeadline: "Veteran-Driven Innovation",
    heroSubheadline: "Founded by service-disabled veterans, we bring military precision, strategic thinking, and unwavering commitment to every mission we undertake.",

    // Trailhead Fund section
    trailheadFund: {
      headline: "Standing Watch — Beyond the Mission",
      description: `At Northbound Systems, we believe service doesn't end when the uniform comes off. That's why Marin Vance founded Trailhead Fund: a 501(c)(3) nonprofit committed to honoring and empowering those who have sacrificed for our safety and freedom.

Trailhead Fund exists to uplift veterans, first responders, and their families through scholarships, emergency assistance, career training, and resilience programs.

It's more than charity. It's a promise: No hero walks alone.`,
      ctaText: "Visit Trailhead Fund",
    },

    // Our Story section (trimmed to ~80 words)
    ourStory: {
      headline: "Our Story",
      content: "Northbound Systems was born from a simple conviction: the same discipline, integrity, and mission-first mindset that define military service can transform how organizations harness data. Founded by service-disabled veterans, we've built a team that combines deep technical expertise with an unwavering commitment to excellence. Every engagement reflects our core belief—your mission is our mission.",
    },

    // SDVOSB section (trimmed to ~140 words)
    sdvosb: {
      headline: "Proudly SDVOSB Certified",
      content: "As a Service-Disabled Veteran-Owned Small Business, Northbound Systems embodies the values of service, sacrifice, and commitment. Our certification reflects not just a designation, but a promise: we bring the same dedication to your mission that we brought to serving our nation. Partnering with us means working with a team that understands accountability, precision, and the importance of delivering results. We're registered on SAM.gov and ready to support federal, state, and commercial clients through direct contracts or strategic teaming arrangements.",
    },
  },

  // Contact page specific copy
  contact: {
    heroHeadline: "Ready to Transform Your Mission?",
    heroSubheadline: "Connect with our veteran-led team to discuss how we can accelerate your data operations and deliver mission-critical results.",
    whatToExpect: [
      "Response within 24 business hours",
      "Initial discovery call to understand your needs",
      "Tailored recommendations for your mission",
      "No-obligation consultation",
    ],
  },

  // Capabilities page specific copy
  capabilities: {
    heroHeadline: "SDVOSB Capabilities Statement",
    heroSubheadline: "Request our capabilities statement for procurement and teaming purposes.",
  },

  // Solutions page copy
  solutions: {
    heroHeadline: "Solutions by Role",
    heroSubheadline: "Find the right entry point for your organization's data, compliance, and procurement needs.",
  },

  // Procurement page copy
  procurement: {
    heroHeadline: "Federal Procurement Hub",
    heroSubheadline: "Everything federal buyers need to evaluate, procure, and partner with Northbound Systems.",
  },

  // Proof library copy
  proof: {
    heroHeadline: "Proof of Work",
    heroSubheadline: "Reference architectures, governance models, and compliance documentation demonstrating our approach.",
  },

  // Common CTAs
  ctas: {
    getStarted: "Get Started",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    viewCaseStudies: "View Case Studies",
    downloadCapabilities: "Download Capabilities Statement",
  },
} as const

// Type exports for type-safe access
export type Content = typeof content
export type BadgeKey = keyof typeof content.badges
export type IdentifierKey = keyof typeof content.identifiers
