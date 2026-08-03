import type { ProofTile, FounderNarrative } from '@/types'

export const proofTiles: ProofTile[] = [
  {
    id: 'ssp-control-mappings',
    title: 'SSP-Ready Control Mappings',
    description: 'Pre-mapped control documentation spanning FedRAMP Moderate, HIPAA Security Rule, NIST 800-53 Rev 5, and CMMC Level 2 with traceable implementation evidence and inheritance matrices.',
    icon: 'ShieldCheck',
    cta: 'Request Access',
    ctaHref: '/contact',
    documentId: 'VT-SSP-001',
    version: '2.1',
    classification: 'CUI',
    previewLabel: 'SSP Excerpt — Control Family AC, AU, SC',
    pageCount: 48,
  },
  {
    id: 'ato-boundary-diagrams',
    title: 'ATO Boundary Architecture Diagrams',
    description: 'Reference architectures showing authorization boundaries, data flow controls, encryption layers, and network segmentation for federal cloud environments (AWS GovCloud, Azure Gov, OCI Gov).',
    icon: 'Network',
    cta: 'Request Access',
    ctaHref: '/contact',
    documentId: 'VT-ABD-002',
    version: '1.4',
    classification: 'CUI',
    previewLabel: 'Authorization Boundary — AWS GovCloud Reference',
    pageCount: 12,
  },
  {
    id: 'fedramp-inheritance',
    title: 'FedRAMP Moderate Control Inheritance Matrix',
    description: 'Complete control inheritance documentation mapping CSP-inherited, hybrid, and customer-responsible controls across FedRAMP Moderate baseline with implementation status tracking.',
    icon: 'GitBranch',
    cta: 'Request Access',
    ctaHref: '/contact',
    documentId: 'VT-CIM-003',
    version: '3.0',
    classification: 'CUI',
    previewLabel: 'Control Traceability Matrix — 325 Controls Mapped',
    pageCount: 86,
  },
  {
    id: 'nist-templates',
    title: 'NIST 800-53 Pre-Mapped Assessment Templates',
    description: 'Assessment-ready templates with pre-populated control implementations, evidence collection guides, and continuous monitoring procedures aligned to NIST 800-53 Rev 5 control families.',
    icon: 'FileText',
    cta: 'Request Access',
    ctaHref: '/contact',
    documentId: 'VT-SAR-004',
    version: '1.2',
    classification: 'CUI',
    previewLabel: 'POA&M Sample — Risk Register Template',
    pageCount: 34,
  },
  {
    id: 'capabilities-statement',
    title: 'Capabilities Statement',
    description: 'Federal-formatted capabilities overview including NAICS codes, past performance summaries, certifications, and contract vehicle details.',
    icon: 'FileText',
    cta: 'Download',
    ctaHref: '/procurement',
    documentId: 'VT-CAP-005',
    version: '4.0',
    classification: 'UNCLASSIFIED',
    previewLabel: 'Two-Page Federal Capabilities Overview',
    pageCount: 2,
  },
]

export const complianceFrameworksList = [
  'FedRAMP Moderate',
  'HIPAA Security Rule',
  'NIST 800-53 Rev 5',
  'CMMC Level 2',
  'DoD IL4/IL5',
  'SOC 2 Type II',
]

export const founderNarrative: FounderNarrative = {
  headline: 'Why This Reduces Your Delivery Risk',
  points: [
    {
      title: 'Program Rescue Experience',
      description: 'Took over a statewide benefits-eligibility program in distress and brought it to full compliance ahead of its statutory deadline.',
      metric: 'On deadline, from red',
    },
    {
      title: 'Zero Downtime Systems',
      description: 'Delivered mission-critical healthcare infrastructure with zero unscheduled downtime across the full operational lifecycle.',
      metric: '0 unscheduled outages',
    },
    {
      title: 'Veteran-Led Accountability',
      description: 'Combat-tested leadership translating military discipline into structured delivery methodology, clear milestones, and transparent reporting.',
    },
    {
      title: 'Venture-Scale Execution',
      description: 'Founded and scaled Relaypoint to $12.4M in venture funding, demonstrating ability to build, ship, and operate at scale.',
      metric: '$12.4M deployed',
    },
  ],
}
