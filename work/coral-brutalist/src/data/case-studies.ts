// Case Studies Data - Mode-based structure
// 'real' mode: Actual client engagements (add when available)
// 'pattern' mode: Representative engagement patterns

import type { CaseStudyNew, RealCaseStudy, PatternCaseStudy } from "@/types"

export const caseStudies: CaseStudyNew[] = [
  {
    mode: 'pattern',
    id: "federal-health-agency",
    patternTitle: "Health Data Platform Modernization",
    engagementType: "Data Platform Modernization",
    industry: "Healthcare / Government",
    problemSpace: "Legacy data systems preventing real-time health analytics and decision-making across multiple facilities. Siloed data sources made it impossible to gain unified insights, while aging infrastructure created security vulnerabilities and compliance risks.",
    approachPattern: "Modern data lakehouse architecture implementation using Snowflake and Databricks, with real-time data pipelines and Power BI dashboards. Robust data governance frameworks and automated ETL processes ensure data quality and regulatory compliance.",
    deliveredSystem: [
      "Medallion lakehouse architecture with automated data lineage tracking",
      "Role-based access control with comprehensive audit logging",
      "Executive dashboards with real-time alerting workflows",
      "Automated data quality monitoring and anomaly detection",
    ],
    typicalOutcomes: [
      "Reduced batch processing latency from overnight to near-real-time operational windows",
      "Enabled cross-facility analytics under HIPAA-aligned data governance",
      "Unified patient outcome tracking across disparate clinical systems",
      "Automated compliance reporting reducing manual effort by significant margins",
    ],
    applicableTo: ["Federal health agencies", "Healthcare systems", "Hospital networks", "Public health organizations"],
    environment: 'Federal health agency requiring HIPAA-aligned data infrastructure across multiple facilities',
    constraints: ['HIPAA Security Rule compliance', 'FedRAMP Moderate boundary requirements', 'Legacy system interoperability', 'Cross-facility data governance'],
    timeline: '8-month implementation',
    measurableOutcomes: [
      { metric: 'Batch Processing Latency', value: 'Overnight → Near-real-time' },
      { metric: 'Cross-Facility Analytics', value: 'Unified under HIPAA governance' },
      { metric: 'Compliance Reporting', value: 'Automated, reducing manual effort by 60%+' },
      { metric: 'Data Quality Monitoring', value: 'Automated anomaly detection deployed' },
    ],
    technologies: ["Snowflake", "Databricks", "Power BI", "AWS", "Apache Airflow"],
    featured: true,
  },
  {
    mode: 'pattern',
    id: "defense-logistics",
    patternTitle: "Supply Chain Analytics Transformation",
    engagementType: "AI-Powered Analytics",
    industry: "Defense / Logistics",
    problemSpace: "Critical supply chain visibility gaps affecting military readiness. Manual tracking processes led to delays in equipment delivery and maintenance scheduling, impacting operational capabilities.",
    approachPattern: "AI-powered supply chain analytics platform with predictive maintenance capabilities and real-time inventory tracking. Integration of disparate logistics systems into a unified command dashboard with automated alerting.",
    deliveredSystem: [
      "Unified logistics data lake consolidating multiple legacy systems",
      "Predictive maintenance models with configurable alert thresholds",
      "Real-time inventory tracking dashboard with drill-down capabilities",
      "Automated anomaly detection for supply chain disruptions",
    ],
    typicalOutcomes: [
      "Shifted from reactive maintenance to predictive alerting workflows",
      "Consolidated inventory visibility from days to near-real-time",
      "Enabled proactive parts ordering based on usage pattern analysis",
      "Improved mission readiness through equipment availability forecasting",
    ],
    applicableTo: ["Defense logistics organizations", "Military supply chains", "Government procurement offices", "Defense contractors"],
    environment: 'DoD logistics organization requiring IL4/IL5-aligned analytics platform',
    constraints: ['DoD IL4/IL5 environment requirements', 'CMMC Level 2 alignment', 'Integration with legacy logistics systems', 'Classified data handling protocols'],
    timeline: '6-month implementation',
    measurableOutcomes: [
      { metric: 'Maintenance Approach', value: 'Reactive → Predictive alerting' },
      { metric: 'Inventory Visibility', value: 'Days → Near-real-time' },
      { metric: 'Parts Ordering', value: 'Proactive based on usage analysis' },
      { metric: 'Equipment Readiness', value: 'Availability forecasting deployed' },
    ],
    technologies: ["Azure", "Databricks", "Tableau", "Python", "Kubernetes"],
    featured: true,
  },
  {
    mode: 'pattern',
    id: "research-institution",
    patternTitle: "Cloud Migration & Infrastructure Modernization",
    engagementType: "Cloud Modernization",
    industry: "Research / Government",
    problemSpace: "On-premises infrastructure limiting research capabilities and collaboration. High operational costs, security concerns, and inability to scale computing resources for large-scale data analysis projects.",
    approachPattern: "Comprehensive multi-cloud migration strategy with Oracle Cloud and AWS. Infrastructure-as-code practices, automated security controls, and hybrid cloud architecture to support sensitive research workloads.",
    deliveredSystem: [
      "Hybrid cloud architecture with secure connectivity to on-premises systems",
      "Infrastructure-as-code templates for repeatable deployments",
      "Automated security scanning and compliance monitoring",
      "Self-service compute provisioning for research teams",
    ],
    typicalOutcomes: [
      "Reduced infrastructure provisioning time from weeks to hours",
      "Enabled burst computing for large-scale data analysis workloads",
      "Established secure collaboration channels with partner institutions",
      "Implemented cost allocation and showback for resource optimization",
    ],
    applicableTo: ["Government research institutions", "National laboratories", "Federal R&D agencies", "Academic research centers"],
    environment: 'Government research institution requiring secure multi-cloud hybrid architecture',
    constraints: ['NIST 800-53 control requirements', 'Sensitive research data handling', 'Hybrid cloud connectivity', 'Multi-institutional collaboration needs'],
    timeline: '10-month migration',
    measurableOutcomes: [
      { metric: 'Infrastructure Provisioning', value: 'Weeks → Hours' },
      { metric: 'Compute Scaling', value: 'Burst computing enabled' },
      { metric: 'Collaboration', value: 'Secure cross-institution channels' },
      { metric: 'Cost Visibility', value: 'Allocation and showback implemented' },
    ],
    technologies: ["Oracle Cloud (OCI)", "AWS", "Terraform", "Kubernetes", "Qlik"],
    featured: false,
  },
  {
    mode: 'pattern',
    id: "civilian-data-consolidation",
    patternTitle: "Enterprise Data Consolidation & Governance",
    engagementType: "Data Platform Consolidation",
    industry: "Civilian / Government",
    problemSpace: "A civilian federal agency operated 14 disparate data systems across regional offices with no unified reporting capability. Duplicate records, inconsistent taxonomies, and manual reconciliation consumed over 2,000 staff hours monthly while preventing leadership from accessing timely operational metrics.",
    approachPattern: "Phased data consolidation using medallion lakehouse architecture with automated data quality rules, master data management, and a governed semantic layer enabling self-service analytics for 200+ end users.",
    deliveredSystem: [
      "Centralized data lakehouse consolidating 14 legacy systems",
      "Automated MDM pipeline with fuzzy matching and deduplication",
      "Governed semantic layer with role-based access and audit trails",
      "Executive dashboard suite with drill-through to source records",
    ],
    typicalOutcomes: [
      "Eliminated 2,000+ monthly hours of manual data reconciliation",
      "Reduced duplicate records from 23% to under 1%",
      "Enabled same-day operational reporting (previously 2-week lag)",
      "Achieved FedRAMP Moderate authorization for consolidated platform",
    ],
    applicableTo: ["Civilian federal agencies", "Multi-office organizations", "State government departments", "Large-scale data consolidation programs"],
    environment: 'Civilian federal agency with 14 regional data systems requiring FedRAMP Moderate consolidation',
    constraints: ['FedRAMP Moderate authorization required', 'Zero-downtime migration from legacy systems', 'PII handling under Privacy Act', 'Multi-region data residency requirements'],
    timeline: '12-month phased implementation',
    measurableOutcomes: [
      { metric: 'Manual Reconciliation', value: '2,000+ hours/month → Automated' },
      { metric: 'Duplicate Records', value: '23% → Under 1%' },
      { metric: 'Reporting Latency', value: '2 weeks → Same day' },
      { metric: 'Authorization', value: 'FedRAMP Moderate ATO achieved' },
    ],
    technologies: ["Snowflake", "Oracle Cloud (OCI)", "Power BI", "Terraform", "Apache Airflow"],
    featured: true,
  },
  {
    mode: 'pattern',
    id: "va-healthcare-analytics",
    patternTitle: "Healthcare Analytics Platform for Veteran Services",
    engagementType: "AI-Powered Analytics",
    industry: "Healthcare / Veterans",
    problemSpace: "A healthcare organization serving veteran populations lacked predictive capabilities for identifying at-risk patients, resulting in reactive care delivery and preventable adverse outcomes. Clinical data was siloed across EHR systems, claims databases, and community care networks with no unified analytical layer.",
    approachPattern: "HIPAA-aligned analytics platform with ML-powered risk stratification models, unified clinical data integration, and real-time alerting workflows for care coordination teams. Embedded compliance controls with continuous monitoring for HIPAA Security Rule and NIST 800-53.",
    deliveredSystem: [
      "Unified clinical data lake integrating EHR, claims, and community care data",
      "ML risk stratification model identifying high-risk veterans 30 days in advance",
      "Real-time care coordination dashboard with automated alert routing",
      "Compliance monitoring pipeline with automated HIPAA evidence collection",
    ],
    typicalOutcomes: [
      "Identified at-risk veterans 30 days earlier than previous manual screening",
      "Reduced preventable readmissions through proactive care coordination",
      "Unified 3 clinical data sources into single analytical layer",
      "Achieved HIPAA Security Rule compliance with automated evidence collection",
    ],
    applicableTo: ["VA healthcare systems", "Military treatment facilities", "Federal health agencies", "Veteran service organizations"],
    environment: 'Healthcare organization serving veteran populations requiring HIPAA-aligned predictive analytics',
    constraints: ['HIPAA Security Rule compliance', 'PHI de-identification requirements', 'EHR interoperability (HL7 FHIR)', 'Clinical workflow integration'],
    timeline: '9-month implementation',
    measurableOutcomes: [
      { metric: 'Early Risk Detection', value: '30-day advance identification' },
      { metric: 'Data Unification', value: '3 siloed sources → 1 platform' },
      { metric: 'Readmission Prevention', value: 'Proactive coordination deployed' },
      { metric: 'Compliance', value: 'Automated HIPAA evidence collection' },
    ],
    technologies: ["Databricks", "AWS", "Python", "Power BI", "Kubernetes"],
    featured: false,
  },
]

// Helper functions
export function getCaseStudyById(id: string): CaseStudyNew | undefined {
  return caseStudies.find((study) => study.id === id)
}

export function getCaseStudiesByIndustry(industry: string): CaseStudyNew[] {
  return caseStudies.filter((study) =>
    study.industry.toLowerCase().includes(industry.toLowerCase())
  )
}

export function getFeaturedCaseStudies(): CaseStudyNew[] {
  return caseStudies.filter((study) => study.featured)
}

// Type guards
export function isRealCaseStudy(study: CaseStudyNew): study is RealCaseStudy {
  return study.mode === 'real'
}

export function isPatternCaseStudy(study: CaseStudyNew): study is PatternCaseStudy {
  return study.mode === 'pattern'
}

export const industries = [
  "All",
  "Healthcare",
  "Defense",
  "Government",
  "Research",
  "Logistics",
]
