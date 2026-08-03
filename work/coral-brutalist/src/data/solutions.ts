import type { BuyerPathway, SolutionPageData } from '@/types'

export const buyerPathways: BuyerPathway[] = [
  {
    id: 'security',
    persona: 'Security & Compliance Officers',
    painPoints: [
      'ATO timelines stretching past 12 months',
      'Incomplete or outdated control documentation',
      'Audit findings from inherited systems',
    ],
    ctaLabel: 'See Security Solutions',
    ctaHref: '/solutions/security',
    icon: 'ShieldCheck',
  },
  {
    id: 'data',
    persona: 'Data & Engineering Leads',
    painPoints: [
      'Legacy systems blocking modernization',
      'No unified data lineage or quality framework',
      'Inability to support AI/ML workloads on current infrastructure',
    ],
    ctaLabel: 'See Data Solutions',
    ctaHref: '/solutions/data',
    icon: 'Database',
  },
  {
    id: 'contracting',
    persona: 'Contracting & Program Executives',
    painPoints: [
      'Need SDVOSB partners with proven federal experience',
      'Past performance documentation gaps',
      'Unclear path from RFI to task order execution',
    ],
    ctaLabel: 'See Procurement Path',
    ctaHref: '/solutions/contracting',
    icon: 'Briefcase',
  },
]

export const solutionPages: SolutionPageData[] = [
  {
    slug: 'security',
    persona: 'Security & Compliance Officers',
    headline: 'ATO-First Architecture for Federal Environments',
    subheadline: 'Control-aligned platforms designed to accelerate Authority to Operate timelines while maintaining continuous compliance monitoring.',
    painPoints: [
      {
        title: 'ATO timelines exceeding 12 months',
        description: 'Complex environments with incomplete documentation and unmapped controls create authorization bottlenecks that delay mission delivery.',
      },
      {
        title: 'Inherited compliance debt',
        description: 'Legacy systems carrying unresolved audit findings and outdated security documentation require expensive remediation cycles.',
      },
      {
        title: 'Manual compliance monitoring',
        description: 'Point-in-time assessments miss configuration drift and leave gaps between audits that create risk exposure.',
      },
    ],
    howWeHelp: [
      {
        title: 'Pre-Mapped Control Documentation',
        description: 'Every architecture includes traceable control mappings across FedRAMP, HIPAA, NIST 800-53, and CMMC from day one.',
      },
      {
        title: 'Continuous Compliance Monitoring',
        description: 'Automated configuration scanning and drift detection replace manual quarterly reviews with real-time assurance.',
      },
      {
        title: 'ATO Acceleration Methodology',
        description: 'Parallel documentation, reusable control libraries, and pre-authorized architecture patterns reduce authorization timelines.',
      },
    ],
    relatedCaseStudies: ['federal-health-agency', 'research-institution'],
    ctaLabel: 'Request Architecture Review',
  },
  {
    slug: 'data',
    persona: 'Data & Engineering Leads',
    headline: 'Audit-Ready Data Platforms That Scale',
    subheadline: 'Modern lakehouse architectures with built-in lineage, governance, and compliance controls for federal and healthcare environments.',
    painPoints: [
      {
        title: 'Siloed legacy data systems',
        description: 'Disconnected databases and aging ETL pipelines prevent unified analytics and create data quality blind spots.',
      },
      {
        title: 'No data lineage or governance',
        description: 'Inability to trace data origins, transformations, and access patterns makes compliance reporting manual and error-prone.',
      },
      {
        title: 'Infrastructure blocking AI readiness',
        description: 'Current platforms lack the compute, storage, and pipeline architecture needed to support ML model training and inference.',
      },
    ],
    howWeHelp: [
      {
        title: 'Medallion Lakehouse Architecture',
        description: 'Structured data layers with automated quality gates, lineage tracking, and role-based access built into every tier.',
      },
      {
        title: 'Automated Data Governance',
        description: 'Metadata management, classification, and audit logging that satisfy compliance requirements without manual overhead.',
      },
      {
        title: 'AI-Ready Infrastructure',
        description: 'Pipeline architecture designed from day one to support ML workloads, feature stores, and model serving at federal scale.',
      },
    ],
    relatedCaseStudies: ['federal-health-agency', 'defense-logistics'],
    ctaLabel: 'Request Architecture Review',
  },
  {
    slug: 'contracting',
    persona: 'Contracting & Program Executives',
    headline: 'Streamlined Procurement for Federal Buyers',
    subheadline: 'SDVOSB-certified with proven past performance, active SAM.gov registration, and clear engagement pathways from RFI to delivery.',
    painPoints: [
      {
        title: 'Finding qualified SDVOSB partners',
        description: 'Set-aside requirements demand vendors with genuine federal experience, not just certification—finding both is time-consuming.',
      },
      {
        title: 'Past performance verification',
        description: 'Evaluating vendor claims requires reference checks, documentation review, and relevance assessment across multiple contract types.',
      },
      {
        title: 'Complex engagement pathways',
        description: 'Navigating from initial interest to contract execution across different vehicles and mechanisms creates procurement friction.',
      },
    ],
    howWeHelp: [
      {
        title: 'Verified Federal Credentials',
        description: 'Active SAM.gov registration, SDVOSB certification, relevant NAICS codes, and documented past performance summaries available on request.',
      },
      {
        title: 'Flexible Engagement Models',
        description: 'Direct contracts, teaming arrangements, and subcontracting options structured for your preferred procurement vehicle.',
      },
      {
        title: 'Rapid Response Capability',
        description: 'Pre-positioned technical staff with active clearance eligibility and documented domain expertise for fast task order execution.',
      },
    ],
    relatedCaseStudies: ['federal-health-agency', 'defense-logistics', 'research-institution'],
    ctaLabel: 'Request Architecture Review',
  },
]

export function getSolutionBySlug(slug: string): SolutionPageData | undefined {
  return solutionPages.find((page) => page.slug === slug)
}

export function getAllSolutionSlugs(): string[] {
  return solutionPages.map((page) => page.slug)
}
