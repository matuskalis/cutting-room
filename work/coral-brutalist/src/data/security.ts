import type { ComplianceFramework, SecurityCapability } from "@/types"

export const complianceFrameworks: ComplianceFramework[] = [
  {
    name: "FedRAMP",
    description: "Control-aligned architectures supporting FedRAMP Moderate authorization workflows",
    icon: "Shield",
  },
  {
    name: "HIPAA",
    description: "Architectures designed for environments subject to HIPAA Security Rule requirements",
    icon: "Heart",
  },
  {
    name: "NIST 800-53",
    description: "Security and privacy controls mapped to NIST 800-53 Rev. 5 control families",
    icon: "FileCheck",
  },
  {
    name: "DoD IL4/IL5",
    description: "Architectures designed for environments requiring DoD Impact Level 4/5 protections",
    icon: "Shield",
  },
  {
    name: "SOC 2",
    description: "Controls aligned with SOC 2 Type II trust service criteria for security and availability",
    icon: "FileCheck",
  },
  {
    name: "CMMC",
    description: "Architectures aligned to CMMC Level 2 practice requirements for controlled unclassified information",
    icon: "Lock",
  },
]

export const securityCapabilities: SecurityCapability[] = [
  {
    category: "Architecture",
    items: [
      "Zero-Trust Network Design",
      "End-to-End Encryption",
      "Multi-Factor Authentication",
      "Secrets Management",
    ],
  },
  {
    category: "Governance",
    items: [
      "Comprehensive Audit Logging",
      "Quarterly Access Reviews",
      "Data Classification Standards",
      "Incident Response Procedures",
    ],
  },
  {
    category: "Operations",
    items: [
      "Continuous Monitoring",
      "Vulnerability Management",
      "Penetration Testing",
      "Security Awareness Training",
    ],
  },
]

export const technologyCapabilities = {
  cloudPlatforms: [
    { name: "AWS", capabilities: "Deep experience delivering enterprise solutions on AWS" },
    { name: "Microsoft Azure", capabilities: "Extensive Azure implementation and migration expertise" },
    { name: "Oracle Cloud (OCI)", capabilities: "OCI architecture and deployment experience" },
    { name: "Google Cloud Platform", capabilities: "GCP infrastructure and data platform delivery" },
  ],
  dataPlatforms: [
    { name: "Snowflake", capabilities: "Production Snowflake deployments for regulated environments" },
    { name: "Databricks", capabilities: "Databricks lakehouse architecture implementation" },
  ],
  analyticsBI: [
    { name: "Power BI", capabilities: "Executive dashboards and enterprise reporting" },
    { name: "Tableau", capabilities: "Advanced analytics visualization" },
    { name: "Qlik", capabilities: "Self-service BI implementations" },
  ],
  devOps: [
    { name: "Terraform", capabilities: "Infrastructure-as-code for cloud environments" },
    { name: "Kubernetes", capabilities: "Container orchestration and microservices" },
    { name: "Docker", capabilities: "Containerization and deployment automation" },
  ],
}
