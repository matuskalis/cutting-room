import type { TrustItem, StrategicPillar, Outcome, CTAContent, CEOProfile, FounderQuote } from '@/types'

export const trustStripItems: TrustItem[] = [
  { label: 'SDVOSB Certified', icon: 'Shield' },
  { label: 'Audit-Ready Architecture', icon: 'ShieldCheck' },
  { label: 'FedRAMP-Aligned Controls', icon: 'Lock' },
  { label: 'HIPAA-Aligned Security', icon: 'Heart' },
]

export const heroContent = {
  headline: 'ATO-Ready Data Platforms in Weeks, Not Quarters.',
  subheadline: 'Compliance-mapped architectures from day one. SDVOSB-certified. Veteran-led.',
  primaryCTA: 'Book Your ATO Readiness Review',
  secondaryCTA: 'View Proven Delivery',
}

export const heroMetrics = [
  { value: '5', label: 'ATO Authorizations Supported', context: 'Across federal health, defense, and civilian agencies' },
  { value: '$12.4M', label: 'Venture Funding Raised (Relaypoint)', context: 'Real-time communications platform — pre-Northbound venture' },
  { value: '0', label: 'Compliance Findings', context: 'Across 3 independent federal audits' },
]

export const strategicPillars: StrategicPillar[] = [
  {
    title: 'Veteran-Led Innovation',
    description: 'Government technology solutions rooted in real-world mission understanding and accountability.',
    icon: 'Shield',
  },
  {
    title: 'Data Modernization with Purpose',
    description: 'Transforming legacy systems into agile, AI-ready platforms across public health, logistics, and operations.',
    icon: 'Database',
  },
  {
    title: 'Agile & Trusted Delivery',
    description: 'High-touch engagement, high-speed execution, and low-risk implementation across OCI, AWS, Azure, and more.',
    icon: 'Zap',
  },
  {
    title: 'Strategic Positioning for Public Sector AI',
    description: 'Guiding federal, state, and local agencies in aligning funding, governance, and infrastructure to enable AI use cases.',
    icon: 'Brain',
  },
  {
    title: 'Embedded Compliance & Security',
    description: 'Solutions that meet the highest security and regulatory standards from day one.',
    icon: 'Lock',
  },
]

export const outcomes: Outcome[] = [
  {
    title: 'Audit-Ready Architecture',
    description: 'Pre-mapped compliance controls with continuous monitoring alignment for FedRAMP, HIPAA, and CMMC.',
    mechanism: 'Compliance-aligned controls, continuous monitoring',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Trusted Data Foundations',
    description: 'Complete visibility into data origins, transformations, and quality across your entire pipeline.',
    mechanism: 'Metadata management, automated lineage tracking',
    icon: 'GitBranch',
  },
  {
    title: 'Operational Visibility',
    description: 'Dashboards surfacing mission-critical metrics for informed decision-making.',
    mechanism: 'Real-time analytics, embedded dashboards',
    icon: 'Activity',
  },
  {
    title: 'Accelerated Modernization',
    description: 'Faster deployments through proven patterns and reusable components.',
    mechanism: 'Modular architecture, deployment accelerators',
    icon: 'Rocket',
  },
  {
    title: 'Compliance Acceleration',
    description: 'Pre-mapped control documentation and continuous monitoring reduce ATO timelines and audit preparation effort.',
    mechanism: 'Control mapping, automated evidence collection',
    icon: 'TrendingDown',
  },
  {
    title: 'Risk-Mitigated Delivery',
    description: 'Structured methodology with clear milestones, transparent reporting, and veteran-led accountability.',
    mechanism: 'Program management, milestone tracking',
    icon: 'ShieldAlert',
  },
]

export const founderQuote: FounderQuote = {
  text: "I've spent my career building teams and systems that perform when it matters most—using technology, leadership, and trust to improve outcomes for those who serve and the communities they protect.",
  author: 'Marin Vance',
  title: 'Founder & CEO, Northbound Systems',
  subtitle: 'U.S. Army Veteran | Former Attack Helicopter Pilot',
}

export const ceoProfile: CEOProfile = {
  name: 'Marin Vance',
  title: 'Founder & CEO',
  image: '/images/founder-placeholder.svg',
  militaryBackground: 'Service-Disabled U.S. Army Veteran | Former Attack Helicopter Pilot',
  shortBio: 'Marin Vance is the Founder and CEO of Northbound Systems, advancing AI and technology modernization in support of DoD missions, Federal operations, and veteran healthcare outcomes where reliability and trust matter most.',
  credentials: [
    'Founded Relaypoint, a fictional real-time telemetry startup ($12.4M raised)',
    'Delivered a statewide benefits-eligibility platform with zero unscheduled downtime',
    'Co-founded a cloud modernization practice serving public-sector clients',
    'Former principal at a global technology consultancy',
  ],
  quote: "Combat leadership teaches you quickly what matters and what doesn't—and that perspective still guides how I build teams, lead missions, and serve veterans through our work.",
}

export const enhancedCTA: CTAContent = {
  headline: 'Book Your 30-Min ATO Readiness Gap Review',
  bullets: [
    'Confidential review of your current data and compliance architecture',
    'Gap analysis against target authorization framework (FedRAMP, HIPAA, CMMC)',
    'Written gap assessment delivered within 48 hours',
  ],
  qualifier: "You'll receive a written gap assessment within 48 hours — no obligation, no pitch deck.",
  primaryCTA: 'Book Your ATO Readiness Review',
  alternativeContact: 'contact@northboundsystems.example',
}

export const enhancedMission = 'To deliver advanced data engineering, AI, and cloud solutions that support national readiness, public health resilience, and digital modernization—all led by a veteran-driven team committed to excellence in service and outcomes.'

export const enhancedVision = 'Empowering mission-critical decisions with trusted AI and data solutions—delivered by veterans, for the nation.'

export const systemStatus = [
  { label: 'ATO Pipeline', status: 'ACTIVE', value: '3 Engagements' },
  { label: 'Compliance Posture', status: 'ACTIVE', value: 'FedRAMP / HIPAA / CMMC' },
  { label: 'Security Clearance', status: 'ACTIVE', value: 'TS/SCI Eligible' },
  { label: 'SAM.gov Registration', status: 'ACTIVE', value: 'Current' },
  { label: 'SDVOSB Certification', status: 'VERIFIED', value: 'Active' },
]

export const byTheNumbers = [
  { value: "5", label: "ATO Authorizations", context: "Federal health, defense & civilian" },
  { value: "$12.4M", label: "Venture Capital Raised", context: "Relaypoint real-time platform" },
  { value: "0", label: "Compliance Findings", context: "Across 3 independent audits" },
  { value: "100%", label: "Veteran-Led", context: "Founded & operated by veterans" },
]
