// Type definitions for Northbound Systems

export interface Service {
  name: string
  slug: string
  description: string
  icon: string
}

export interface TechPartner {
  name: string
  logo: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}

export interface NavItem {
  name: string
  href: string
}

// Case Study - NOTE: Legacy interface, migrate to CaseStudyNew
export interface CaseStudy {
  id: string
  title: string
  client: string // Anonymized for government work
  industry: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  isMockData: boolean // Flag to indicate mock data
}

// Blog Post
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  coverImage?: string
}

// Contact Form
export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  interest?: string // Which service they're interested in
}

// Homepage Data Types
export interface TrustItem {
  label: string
  icon: string
  value?: string
}

export interface StrategicPillar {
  title: string
  description: string
  icon: string
}

export interface Outcome {
  title: string
  description: string
  mechanism: string
  icon: string
}

export interface ProofMetric {
  value: string
  label: string
  context?: string
}

export interface CTAContent {
  headline: string
  bullets: string[]
  qualifier: string
  primaryCTA: string
  alternativeContact: string
}

// Case Study - Mode-based discriminated union
export interface BaseCaseStudy {
  id: string
  industry: string
  technologies: string[]
  featured?: boolean
}

export interface RealCaseStudy extends BaseCaseStudy {
  mode: 'real'
  title: string
  clientType: string
  challenge: string
  approach: string
  measurableOutcome: { metric: string; context?: string }[]
  stack: string[]
}

export interface PatternCaseStudy extends BaseCaseStudy {
  mode: 'pattern'
  patternTitle: string
  engagementType: string
  problemSpace: string
  approachPattern: string
  deliveredSystem: string[]
  typicalOutcomes: string[]
  applicableTo: string[]
  environment?: string
  constraints?: string[]
  timeline?: string
  measurableOutcomes?: { metric: string; value: string }[]
}

export type CaseStudyNew = RealCaseStudy | PatternCaseStudy

// Leadership - Ready for real data
export interface LeadershipMember {
  position: string
  militaryBranch?: string
  veteranStatus: boolean
  roleDescription: string
  name?: string
  photo?: string
  bio?: string
  linkedIn?: string
}

// Security & Compliance
export interface ComplianceFramework {
  name: string
  description: string
  icon?: string
}

export interface SecurityCapability {
  category: string
  items: string[]
}

// Founder/CEO Profile
export interface CEOProfile {
  name: string
  title: string
  image: string
  militaryBackground: string
  shortBio: string
  credentials: string[]
  quote: string
}

// Founder Quote
export interface FounderQuote {
  text: string
  author: string
  title: string
  subtitle: string
}

// Proof tile for homepage evidence section
export interface ProofTile {
  id: string
  title: string
  description: string
  icon: string
  cta: string
  ctaHref: string
  documentId?: string
  version?: string
  classification?: 'CUI' | 'UNCLASSIFIED' | 'FOUO'
  previewLabel?: string
  pageCount?: number
}

// Buyer pathway persona card
export interface BuyerPathway {
  id: string
  persona: string
  painPoints: string[]
  ctaLabel: string
  ctaHref: string
  icon: string
}

// Solution page data
export interface SolutionPageData {
  slug: string
  persona: string
  headline: string
  subheadline: string
  painPoints: { title: string; description: string }[]
  howWeHelp: { title: string; description: string }[]
  relatedCaseStudies: string[]
  ctaLabel: string
}

// Procurement asset
export interface ProcurementAsset {
  title: string
  description: string
  type: 'pdf' | 'page' | 'contact'
  href: string
  icon: string
}

// Evidence resource for proof library
export interface EvidenceResource {
  id: string
  title: string
  description: string
  category: string
  status: 'available' | 'coming-soon'
  href?: string
  icon: string
}

// Founder narrative for risk-reduction framing
export interface FounderNarrative {
  headline: string
  points: { title: string; description: string; metric?: string }[]
}
