import type { ProcurementAsset } from '@/types'

export const procurementAssets: ProcurementAsset[] = [
  {
    title: 'Capabilities Statement (PDF)',
    description: 'Two-page federal-formatted overview of services, certifications, NAICS codes, and past performance.',
    type: 'pdf',
    href: '/procurement',
    icon: 'FileText',
  },
  {
    title: 'Past Performance Summaries',
    description: 'Detailed engagement summaries with environments, constraints, and measurable outcomes available under NDA.',
    type: 'contact',
    href: '/contact',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Teaming Inquiry',
    description: 'Structured teaming discussions for prime contractors seeking SDVOSB partners with data and AI expertise.',
    type: 'contact',
    href: '/contact',
    icon: 'Users',
  },
]

export const contractingDetails = {
  cageCode: 'Available on Request',
  uei: 'Available on Request',
  samStatus: 'Active',
  naicsCodes: [
    { code: '541511', description: 'Custom Computer Programming Services' },
    { code: '541512', description: 'Computer Systems Design Services' },
    { code: '541519', description: 'Other Computer Related Services' },
    { code: '518210', description: 'Data Processing & Hosting Services' },
  ],
  setAsides: ['SDVOSB'],
  certifications: ['SBA SDVOSB', 'Maryland VSBE', 'SAM.gov Registered'],
}

export const pastPerformanceSummaries = [
  {
    title: 'Federal Health Data Platform',
    environment: 'Federal health agency requiring HIPAA-aligned data infrastructure',
    scope: 'End-to-end data platform modernization with lakehouse architecture, real-time pipelines, and compliance monitoring',
    outcome: 'Reduced batch processing latency from overnight to near-real-time; unified cross-facility analytics under HIPAA governance',
    technologies: ['Snowflake', 'Databricks', 'Power BI', 'AWS', 'Apache Airflow'],
    caseStudyId: 'federal-health-agency',
  },
  {
    title: 'Defense Supply Chain Analytics',
    environment: 'DoD logistics organization requiring IL4/IL5-aligned analytics',
    scope: 'AI-powered supply chain visibility platform with predictive maintenance and real-time inventory tracking',
    outcome: 'Shifted maintenance from reactive to predictive; consolidated inventory visibility from days to near-real-time',
    technologies: ['Azure', 'Databricks', 'Tableau', 'Python', 'Kubernetes'],
    caseStudyId: 'defense-logistics',
  },
  {
    title: 'Research Cloud Migration',
    environment: 'Government research institution requiring multi-cloud hybrid architecture',
    scope: 'Comprehensive migration to OCI/AWS with infrastructure-as-code, automated security controls, and self-service compute',
    outcome: 'Reduced provisioning from weeks to hours; enabled burst computing for large-scale data analysis',
    technologies: ['Oracle Cloud (OCI)', 'AWS', 'Terraform', 'Kubernetes', 'Qlik'],
    caseStudyId: 'research-institution',
  },
  {
    title: 'Civilian Data Consolidation',
    environment: 'Civilian federal agency with 14 regional data systems',
    scope: 'Enterprise data consolidation using lakehouse architecture with automated MDM, governed semantic layer, and self-service analytics',
    outcome: 'Eliminated 2,000+ monthly hours of manual reconciliation; reduced duplicate records from 23% to under 1%',
    technologies: ['Snowflake', 'Oracle Cloud (OCI)', 'Power BI', 'Terraform', 'Apache Airflow'],
    caseStudyId: 'civilian-data-consolidation',
  },
  {
    title: 'Veteran Healthcare Analytics',
    environment: 'Healthcare organization serving veteran populations',
    scope: 'HIPAA-aligned analytics platform with ML risk stratification, unified clinical data integration, and automated compliance monitoring',
    outcome: 'Identified at-risk veterans 30 days earlier; unified 3 clinical data sources into single analytical layer',
    technologies: ['Databricks', 'AWS', 'Python', 'Power BI', 'Kubernetes'],
    caseStudyId: 'va-healthcare-analytics',
  },
]
