"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, TrendingDown, DollarSign, Shield } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"

const caseStudyData = {
  eyebrow: "Federal Health Agency — Pattern Case Study",
  headline: "ATO in 6 Weeks. 40% Faster Authorization.",
  narrative: "A federal health agency needed to modernize a legacy data platform while maintaining HIPAA compliance and achieving Authority to Operate under aggressive timelines. Northbound Systems delivered a compliance-mapped lakehouse architecture with pre-built control documentation, enabling parallel authorization and engineering workstreams.",
  metrics: [
    { value: "6", unit: "Weeks", label: "To ATO Authorization", icon: "Clock", context: "HIPAA-aligned federal health platform" },
    { value: "40%", unit: "", label: "Reduction in Authorization Timeline", icon: "TrendingDown", context: "vs. prior agency ATO cycle" },
    { value: "$2.3M", unit: "", label: "Annual Compliance Cost Savings", icon: "DollarSign", context: "Automated evidence collection + monitoring" },
    { value: "Zero", unit: "", label: "Compliance Findings at Audit", icon: "Shield", context: "Independent 3PAO assessment" },
  ],
  technologies: ["Snowflake", "Databricks", "AWS", "Apache Airflow"],
  caseStudyId: "federal-health-agency",
}

const iconMap: Record<string, React.ElementType> = {
  Clock,
  TrendingDown,
  DollarSign,
  Shield,
}

export function FlagshipCaseStudy() {
  return (
    <section className="bg-[#202020] py-28 md:py-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mono-label text-[#ff5841] mb-6">{caseStudyData.eyebrow}</p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Big metric + narrative */}
            <div>
              <h2
                className="font-serif font-medium text-white leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {caseStudyData.headline}
              </h2>
              <p className="text-[#b9b9b9]/60 leading-relaxed mb-8 max-w-lg">
                {caseStudyData.narrative}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudyData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40 font-mono uppercase tracking-[0.1em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/case-studies/${caseStudyData.caseStudyId}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#ff5841] hover:text-[#ff6e59] transition-colors"
              >
                Read Full Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: Metrics grid */}
            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-lg overflow-hidden">
              {caseStudyData.metrics.map((metric, index) => {
                const IconComponent = iconMap[metric.icon]
                return (
                  <motion.div
                    key={metric.label}
                    className="bg-[#2a2a2a] p-6 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {IconComponent && (
                        <IconComponent className="h-4 w-4 text-[#ff5841]" />
                      )}
                      <span className="mono-label text-white/30">{metric.label}</span>
                    </div>
                    <div className="mt-auto">
                      <span
                        className="font-serif font-medium text-[#ff5841]"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                      >
                        {metric.value}
                      </span>
                      {metric.unit && (
                        <span className="block text-sm text-white/40 mt-1">{metric.unit}</span>
                      )}
                      {metric.context && (
                        <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-white/25 mt-2">
                          {metric.context}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
