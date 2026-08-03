// FICTIONAL COMPANY. Northbound Systems does not exist; every name, metric,
// certification and contact detail below is invented to populate this design concept.
export const siteConfig = {
  name: "Northbound Systems",
  tagline: "ATO-First. Audit-Ready. Veteran-Led.",
  description:
    "SDVOSB-certified federal technology firm delivering control-aligned data platforms, compliance-mapped architectures, and AI solutions for federal health and defense missions.",
  mission:
    "To deliver advanced data engineering, AI, and cloud solutions that support national readiness, public health resilience, and digital modernization — all led by a veteran-driven team committed to excellence in service and outcomes.",
  vision:
    "Empowering mission-critical decisions with trusted AI and data solutions - delivered by veterans, for the nation.",
  certifications: ["SDVOSB"], // Service-Disabled Veteran-Owned Small Business
  contact: {
    phone: "+1 (555) 0100",
    email: "contact@northboundsystems.example",
    address: "Arlington, VA, USA",
    hours: "Mon-Fri, 08:00-19:00",
  },
  services: [
    {
      name: "Health Data Modernization",
      slug: "health-data",
      description: "Healthcare data integration and analytics solutions for improved patient outcomes and operational efficiency.",
      icon: "HeartPulse",
    },
    {
      name: "Logistics & Readiness Analytics",
      slug: "logistics-analytics",
      description: "Operations optimization and supply chain intelligence for enhanced military and organizational readiness.",
      icon: "Truck",
    },
    {
      name: "Data Lakehouse Engineering",
      slug: "data-lakehouse",
      description: "Unified data architecture combining the best of data lakes and warehouses for comprehensive analytics.",
      icon: "Database",
    },
    {
      name: "AI & Machine Learning",
      slug: "ai-ml",
      description: "Predictive models and intelligent automation to drive data-informed decision making.",
      icon: "Brain",
    },
    {
      name: "Cloud & Infrastructure Modernization",
      slug: "cloud-modernization",
      description: "Multi-cloud platform optimization for scalable, secure, and efficient operations.",
      icon: "Cloud",
    },
  ],
  techPartners: [
    { name: "Oracle Cloud (OCI)", logo: "/logos/oracle.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Microsoft Azure", logo: "/logos/azure.svg" },
    { name: "Snowflake", logo: "/logos/snowflake.svg" },
    { name: "Databricks", logo: "/logos/databricks.svg" },
    { name: "Power BI", logo: "/logos/powerbi.svg" },
    { name: "Tableau", logo: "/logos/tableau.svg" },
    { name: "Qlik", logo: "/logos/qlik.svg" },
    { name: "Terraform", logo: "/logos/terraform.svg" },
    { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  ],
  foundation: {
    name: "Trailhead Fund",
    description:
      "501(c)(3) nonprofit supporting veterans, first responders, and their families through scholarships, emergency assistance, and career training programs.",
    url: "https://trailheadfund.example",
  },
  social: {
    linkedin: "#", // Placeholder - update with real URL
    twitter: "#",
  },
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Solutions", href: "/solutions" },
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Procurement", href: "/procurement" },
      { name: "Resources", href: "/resources" },
      { name: "Contact", href: "/contact" },
    ],
    primary: [
      { name: "Capabilities", href: "/services" },
      { name: "Past Performance", href: "/case-studies" },
      { name: "Procurement", href: "/procurement" },
      { name: "Contact", href: "/contact" },
    ],
    secondary: [
      { name: "About", href: "/about" },
      { name: "Solutions", href: "/solutions" },
      { name: "Resources", href: "/resources" },
      { name: "Compliance Library", href: "/proof" },
    ],
    footer: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
} as const

export type SiteConfig = typeof siteConfig
