"use client"

import { motion } from "framer-motion"
import { Shield, Heart, FileCheck, Lock } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { complianceFrameworks, securityCapabilities } from "@/data/security"

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Heart,
  FileCheck,
  Lock,
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
}

export function SecurityCompliance() {
  return (
    <Section className="bg-navy">
      <Container>
        <SectionHeader
          eyebrow="Security & Compliance"
          title="Built for Regulated Environments"
          description="Deep expertise in federal and healthcare compliance requirements, with security embedded at every layer."
          dividerVariant="gold"
          className="[&_h2]:text-white [&_p]:text-white/80 [&_.text-accent]:text-accent"
        />

        {/* Compliance Frameworks Grid */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {complianceFrameworks.map((framework) => {
            const IconComponent = iconMap[framework.icon || "Shield"]
            return (
              <motion.div key={framework.name} variants={fadeInUp}>
                <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white">{framework.name}</p>
                    <p className="text-xs text-white/80 truncate">{framework.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Security Capabilities */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {securityCapabilities.map((capability) => (
            <motion.div key={capability.category} variants={fadeInUp}>
              <div className="rounded-lg border border-white/20 bg-white/5 p-6">
                <h3 className="font-sans text-lg font-bold text-white mb-4">
                  {capability.category}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
