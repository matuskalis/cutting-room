import Link from "next/link"
import type { Metadata } from "next"
import {
  Cloud,
  Database,
  BarChart3,
  Server,
  Cpu,
  BookOpen,
  Shield,
  Zap,
  RefreshCw,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Technology & Innovation",
  description:
    "Explore our technology partnerships and innovation approach. We leverage cutting-edge platforms from Oracle, AWS, Azure, Snowflake, and more to deliver enterprise-grade solutions.",
}

const platformCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    platforms: [
      {
        name: "Oracle Cloud Infrastructure (OCI)",
        description:
          "Enterprise-grade cloud services with autonomous database, AI, and integrated security.",
      },
      {
        name: "Amazon Web Services (AWS)",
        description:
          "Scalable computing, storage, and machine learning services for any workload.",
      },
      {
        name: "Microsoft Azure",
        description:
          "Hybrid cloud solutions with seamless integration to Microsoft ecosystem.",
      },
    ],
  },
  {
    title: "Data Platforms",
    icon: Database,
    platforms: [
      {
        name: "Snowflake",
        description:
          "Cloud-native data warehouse with instant elasticity and secure data sharing.",
      },
      {
        name: "Databricks",
        description:
          "Unified analytics platform combining data engineering, science, and ML.",
      },
    ],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    platforms: [
      {
        name: "Power BI",
        description:
          "Interactive visualizations and business intelligence capabilities.",
      },
      {
        name: "Tableau",
        description:
          "Visual analytics platform for enterprise-wide data exploration.",
      },
      {
        name: "Qlik",
        description:
          "Associative analytics engine for deeper data insights.",
      },
      {
        name: "Oracle Analytics Cloud",
        description:
          "Complete analytics platform with AI-powered insights.",
      },
    ],
  },
  {
    title: "Infrastructure",
    icon: Server,
    platforms: [
      {
        name: "Terraform",
        description:
          "Infrastructure as code for consistent, repeatable deployments.",
      },
      {
        name: "Kubernetes",
        description:
          "Container orchestration for scalable, resilient applications.",
      },
      {
        name: "Oracle Integration Cloud",
        description:
          "Enterprise integration platform for connecting applications and data.",
      },
    ],
  },
]

const innovationApproach = [
  {
    icon: Cpu,
    title: "R&D Philosophy",
    description:
      "We invest in exploring emerging technologies to stay ahead of industry trends and deliver cutting-edge solutions that provide competitive advantages.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Our team maintains active certifications and participates in ongoing training to ensure expertise in the latest platforms and methodologies.",
  },
  {
    icon: Shield,
    title: "Security-First Development",
    description:
      "Every solution is built with security embedded from the ground up, following DevSecOps practices and compliance frameworks.",
  },
  {
    icon: RefreshCw,
    title: "Agile Methodology",
    description:
      "Iterative development with continuous feedback loops ensures we deliver value quickly while adapting to evolving requirements.",
  },
]

const expertiseAreas = [
  "Cloud architecture and migration across AWS, Azure, and OCI",
  "Data lakehouse design and implementation",
  "Real-time analytics and BI dashboard development",
  "Container orchestration and microservices",
  "Infrastructure-as-code and DevSecOps practices",
  "AI/ML pipeline development and deployment",
  "Federal compliance integration (FedRAMP, HIPAA)",
  "Enterprise data governance and security",
]

export default function TechnologyPage() {
  return (
    <div>
      {/* ─── CORAL HERO ─── */}
      <section className="relative bg-[#ff5841] pt-32 pb-16 md:pb-20 overflow-hidden">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 items-end">
            <div className="lg:col-span-3">
              <p className="mono-label text-[#202020]/60 mb-4">Enterprise Stack</p>
              <h1
                className="font-sans font-bold tracking-tight text-[#202020] leading-[0.95]"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
              >
                Technology.
              </h1>
              <p className="mt-6 text-lg text-[#202020]/70 max-w-xl leading-relaxed">
                We leverage industry-leading platforms and cutting-edge technologies
                to deliver scalable, secure, and mission-ready solutions.
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-2 bg-[#202020] p-8">
              <p className="mono-label text-[#ff5841] mb-3">Platforms</p>
              <ul className="space-y-2">
                {platformCategories.map((cat, i) => (
                  <li key={cat.title} className="font-mono text-xs uppercase tracking-[0.1em] text-white/60">
                    {String(i + 1).padStart(2, "0")}. {cat.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── KEY PLATFORMS (dark) ─── */}
      <section className="bg-[#202020] py-20 md:py-28">
        <Container>
          <p className="mono-label text-[#ff5841] mb-4">Capabilities</p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-12">
            Key Platforms
          </h2>

          <div className="space-y-12">
            {platformCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff5841]/10">
                    <category.icon className="h-5 w-5 text-[#ff5841]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-6 hover:border-[#ff5841]/30 transition-all"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 mb-4">
                        <Zap className="h-6 w-6 text-[#ff5841]" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {platform.name}
                      </h4>
                      <p className="text-sm text-white/50">
                        {platform.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── INNOVATION APPROACH (light) ─── */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <Container>
          <p className="mono-label text-[#202020]/60 mb-4">Methodology</p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#202020] mb-4">
            Our Innovation Approach
          </h2>
          <p className="text-[#666666] max-w-2xl mb-12">
            How we stay at the forefront of technology to deliver exceptional results.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {innovationApproach.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-[#202020]/5 p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#ff5841]/10 mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-[#ff5841]" />
                </div>
                <h3 className="text-lg font-semibold text-[#202020] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CERTIFICATIONS / EXPERTISE (dark) ─── */}
      <section className="bg-[#202020] py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="mono-label text-[#ff5841] mb-4">Expertise</p>
              <h2 className="font-sans font-bold text-3xl text-white md:text-4xl mb-6">
                Platform Expertise
              </h2>

              <p className="text-white/50 text-lg mb-6">
                Our team brings deep hands-on experience across all major cloud,
                data, and analytics platforms, delivering production systems in
                the most demanding enterprise environments.
              </p>

              <p className="text-white/40 mb-8">
                We maintain partnerships with leading technology vendors and
                invest continuously in training to stay current with the latest
                innovations and best practices.
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {expertiseAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff5841] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-8 md:p-10">
              <div className="text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5841]/10 mx-auto mb-6">
                  <Award className="h-10 w-10 text-[#ff5841]" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-white mb-2">
                  Partner Excellence
                </h3>
                <p className="text-white/50 mb-6">
                  Deep experience across all major platforms
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {siteConfig.techPartners.slice(0, 5).map((partner) => (
                    <span
                      key={partner.name}
                      className="inline-flex items-center rounded-full border border-white/10 bg-[#202020] px-3 py-1 text-xs font-medium text-white/50"
                    >
                      {partner.name}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-white/30 mt-6">
                  + {siteConfig.techPartners.length - 5} more technology partners
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA (coral) ─── */}
      <section className="bg-[#ff5841] py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mono-label text-[#202020]/60 mb-4">Get Started</p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#202020] mb-4">
              Explore Our Technology Solutions
            </h2>
            <p className="text-[#202020]/70 text-lg mb-8">
              Discover how our technology expertise can transform your
              organization&apos;s capabilities and drive mission success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
              >
                Request Architecture Review
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202020]/30 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/10 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
