import { Service } from "@/types"

export interface EngagementStep {
  title: string
  description: string
}

export interface SecurityCompliance {
  description: string
  certifications: string[]
}

export interface ServiceDetail extends Service {
  tagline: string
  deliverables: string[]
  engagementSteps: EngagementStep[]
  securityCompliance: SecurityCompliance
  technologies: string[]
  outcomes: string[]
  relatedCaseStudies: string[]
}

export const services: ServiceDetail[] = [
  {
    name: "Health Data Modernization",
    slug: "health-data",
    icon: "HeartPulse",
    description:
      "Healthcare data integration and analytics solutions for improved patient outcomes and operational efficiency.",
    tagline: "Transform healthcare data into actionable clinical insights",
    deliverables: [
      "Real-time health data pipelines and streaming analytics",
      "HIPAA-compliant data processing and storage infrastructure",
      "Electronic Health Record (EHR) integration and interoperability solutions",
      "Clinical decision support systems and dashboards",
      "Population health analytics and reporting platforms",
      "Healthcare data governance and quality management frameworks",
    ],
    engagementSteps: [
      {
        title: "Discovery & Assessment",
        description:
          "We conduct a comprehensive assessment of your current healthcare data ecosystem, identifying gaps, compliance requirements, and opportunities for improvement.",
      },
      {
        title: "Architecture & Implementation",
        description:
          "Our team designs and implements a modern, HIPAA-compliant data architecture tailored to your organization's needs, with robust security controls.",
      },
      {
        title: "Optimization & Support",
        description:
          "We provide ongoing optimization, monitoring, and support to ensure your health data platform continues to deliver value and maintain compliance.",
      },
    ],
    securityCompliance: {
      description:
        "Our health data solutions implement control-aligned architectures designed for environments subject to HIPAA Security Rule requirements, with comprehensive access controls and audit logging to protect sensitive patient information while enabling data-driven care delivery.",
      certifications: [
        "HIPAA",
        "HITECH",
        "FedRAMP",
        "SOC 2 Type II",
        "NIST 800-53",
      ],
    },
    technologies: [
      "Snowflake",
      "Databricks",
      "AWS",
      "Azure",
      "Power BI",
      "Apache Airflow",
      "Kafka",
      "FHIR",
      "HL7",
      "Terraform",
    ],
    outcomes: [
      "Reduced data processing time by up to 60%, enabling faster clinical decisions",
      "Real-time analytics and insights across all healthcare facilities",
      "Improved patient outcome tracking and population health management",
      "Enhanced HIPAA compliance posture and audit readiness",
      "Unified data access for healthcare professionals organization-wide",
    ],
    relatedCaseStudies: ["federal-health-agency"],
  },
  {
    name: "Logistics & Readiness Analytics",
    slug: "logistics-analytics",
    icon: "Truck",
    description:
      "Operations optimization and supply chain intelligence for enhanced military and organizational readiness.",
    tagline: "Achieve mission readiness through predictive supply chain intelligence",
    deliverables: [
      "Real-time supply chain visibility and tracking dashboards",
      "Predictive maintenance and equipment readiness forecasting models",
      "Inventory optimization and demand forecasting systems",
      "Logistics command dashboards with automated alerting",
      "Automated compliance and audit reporting solutions",
      "Legacy logistics system integration and modernization",
    ],
    engagementSteps: [
      {
        title: "Discovery & Assessment",
        description:
          "We analyze your current logistics operations, data sources, and pain points to identify opportunities for visibility improvements and predictive capabilities.",
      },
      {
        title: "Architecture & Implementation",
        description:
          "Our team builds integrated analytics platforms that connect disparate systems and deliver actionable intelligence to decision-makers at all levels.",
      },
      {
        title: "Optimization & Support",
        description:
          "We continuously refine predictive models and dashboards based on operational feedback, ensuring sustained improvements in readiness metrics.",
      },
    ],
    securityCompliance: {
      description:
        "Our logistics solutions implement architectures designed for DoD IL4/IL5 environment requirements with control mappings aligned to CMMC Level 2 practices, ensuring robust access controls and audit capabilities for sensitive operational data.",
      certifications: [
        "FedRAMP High",
        "DoD IL4/IL5",
        "NIST 800-171",
        "CMMC",
        "SOC 2 Type II",
      ],
    },
    technologies: [
      "Azure",
      "Databricks",
      "Tableau",
      "Python",
      "Kubernetes",
      "Apache Spark",
      "Kafka",
      "PostgreSQL",
      "Power BI",
      "Terraform",
    ],
    outcomes: [
      "Up to 45% improvement in supply chain visibility across operations",
      "30% reduction in equipment downtime through predictive maintenance",
      "Real-time tracking and status of inventory items organization-wide",
      "Automated compliance reporting saving hundreds of hours monthly",
      "Improved mission readiness scores across all operational units",
    ],
    relatedCaseStudies: ["defense-logistics"],
  },
  {
    name: "Data Lakehouse Engineering",
    slug: "data-lakehouse",
    icon: "Database",
    description:
      "Unified data architecture combining the best of data lakes and warehouses for comprehensive analytics.",
    tagline: "Unify your data ecosystem with modern lakehouse architecture",
    deliverables: [
      "Snowflake and Databricks implementation and optimization",
      "Enterprise data lake architecture design and deployment",
      "Automated ETL/ELT pipeline development and orchestration",
      "Data quality frameworks with automated monitoring",
      "Multi-cloud data platform architecture and integration",
      "Data catalog and metadata management solutions",
    ],
    engagementSteps: [
      {
        title: "Discovery & Assessment",
        description:
          "We evaluate your current data landscape, identify silos and redundancies, and design a target architecture that unifies your data assets.",
      },
      {
        title: "Architecture & Implementation",
        description:
          "Our team implements a modern lakehouse architecture using best-of-breed technologies, with robust data governance and quality controls.",
      },
      {
        title: "Optimization & Support",
        description:
          "We provide ongoing performance tuning, cost optimization, and support to ensure your data platform scales with your organization's needs.",
      },
    ],
    securityCompliance: {
      description:
        "Our data lakehouse solutions implement comprehensive security controls including encryption, access management, and audit logging with control mappings supporting FedRAMP Moderate authorization workflows and SOC 2 Type II trust service criteria.",
      certifications: [
        "FedRAMP",
        "SOC 2 Type II",
        "NIST 800-53",
        "ISO 27001",
        "GDPR",
      ],
    },
    technologies: [
      "Snowflake",
      "Databricks",
      "Delta Lake",
      "Apache Spark",
      "dbt",
      "Airflow",
      "AWS",
      "Azure",
      "Terraform",
      "Great Expectations",
    ],
    outcomes: [
      "Unified data access across all organizational data sources and systems",
      "Reduced data duplication and storage costs through efficient architecture",
      "Faster time-to-insight with optimized query performance",
      "Scalable architecture that grows with your organization's data needs",
      "Enhanced data governance, lineage tracking, and compliance capabilities",
    ],
    relatedCaseStudies: ["federal-health-agency", "research-institution"],
  },
  {
    name: "AI & Machine Learning",
    slug: "ai-ml",
    icon: "Brain",
    description:
      "Predictive models and intelligent automation to drive data-informed decision making.",
    tagline: "Harness AI to transform data into mission-critical intelligence",
    deliverables: [
      "Custom predictive modeling and forecasting solutions",
      "Natural language processing and text analytics systems",
      "Computer vision and image recognition applications",
      "Anomaly detection and fraud prevention models",
      "MLOps infrastructure and model lifecycle management",
      "AI-powered process automation workflows",
    ],
    engagementSteps: [
      {
        title: "Discovery & Assessment",
        description:
          "We identify high-value AI/ML use cases, assess data readiness, and develop a roadmap for implementing machine learning capabilities.",
      },
      {
        title: "Architecture & Implementation",
        description:
          "Our team develops, trains, and deploys custom ML models using best practices for explainability, fairness, and operational reliability.",
      },
      {
        title: "Optimization & Support",
        description:
          "We establish MLOps practices for continuous model monitoring, retraining, and improvement to ensure sustained performance.",
      },
    ],
    securityCompliance: {
      description:
        "Our AI/ML solutions are built with responsible AI principles including explainability and fairness, with architectures supporting NIST AI Risk Management Framework practices and control mappings aligned to FedRAMP and NIST 800-53 requirements.",
      certifications: [
        "FedRAMP",
        "NIST AI RMF",
        "SOC 2 Type II",
        "DoD AI Ethics",
        "NIST 800-53",
      ],
    },
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "MLflow",
      "Databricks ML",
      "AWS SageMaker",
      "Azure ML",
      "Kubernetes",
      "Ray",
    ],
    outcomes: [
      "Data-informed decision making powered by predictive analytics",
      "Reduced manual effort through intelligent process automation",
      "Early detection of issues and anomalies through ML-based monitoring",
      "Scalable AI solutions that continuously improve with new data",
      "Transparent and explainable AI suitable for mission-critical applications",
    ],
    relatedCaseStudies: ["defense-logistics"],
  },
  {
    name: "Cloud & Infrastructure Modernization",
    slug: "cloud-modernization",
    icon: "Cloud",
    description:
      "Multi-cloud platform optimization for scalable, secure, and efficient operations.",
    tagline: "Modernize your infrastructure for agility, security, and scale",
    deliverables: [
      "Multi-cloud architecture design and migration execution",
      "Infrastructure-as-code with Terraform and CloudFormation",
      "Kubernetes container orchestration and platform engineering",
      "Cloud security architecture and compliance automation",
      "Cost optimization and FinOps implementation",
      "Hybrid cloud integration and connectivity solutions",
    ],
    engagementSteps: [
      {
        title: "Discovery & Assessment",
        description:
          "We assess your current infrastructure, identify modernization opportunities, and develop a migration strategy aligned with your operational requirements.",
      },
      {
        title: "Architecture & Implementation",
        description:
          "Our team executes the migration using infrastructure-as-code practices, ensuring consistent, secure, and repeatable deployments.",
      },
      {
        title: "Optimization & Support",
        description:
          "We provide ongoing optimization, cost management, and operational support to maximize the value of your cloud investment.",
      },
    ],
    securityCompliance: {
      description:
        "Our cloud solutions implement defense-in-depth security controls with automated compliance monitoring, supporting FedRAMP High authorization workflows and architectures designed for DoD IL4/IL5 environment requirements.",
      certifications: [
        "FedRAMP High",
        "DoD IL4/IL5",
        "SOC 2 Type II",
        "NIST 800-53",
        "CIS Benchmarks",
      ],
    },
    technologies: [
      "AWS",
      "Azure",
      "Oracle Cloud (OCI)",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Ansible",
      "CloudFormation",
      "Qlik",
    ],
    outcomes: [
      "Reduced infrastructure costs through cloud optimization and FinOps",
      "Improved scalability to meet changing operational demands",
      "Enhanced security posture with automated compliance controls",
      "Faster deployment cycles through infrastructure-as-code automation",
      "Increased operational resilience and disaster recovery capabilities",
    ],
    relatedCaseStudies: ["research-institution"],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
