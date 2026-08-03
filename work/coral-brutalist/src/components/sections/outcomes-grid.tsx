"use client"

import { motion } from "framer-motion"
import {
  ClipboardCheck,
  GitBranch,
  Activity,
  Rocket,
  TrendingDown,
  ShieldAlert,
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { outcomes } from "@/data/homepage"

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  GitBranch,
  Activity,
  Rocket,
  TrendingDown,
  ShieldAlert,
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

export function OutcomesGrid() {
  return (
    <Section className="bg-[#2a2a2a]">
      <Container>
        <SectionHeader
          eyebrow="What We Deliver"
          title="Strategic Outcomes"
          description="Results-focused solutions engineered for organizations where precision and compliance are non-negotiable."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {outcomes.map((outcome) => {
            const IconComponent = iconMap[outcome.icon]
            return (
              <motion.div key={outcome.title} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-white">
                        {IconComponent && <IconComponent className="h-6 w-6" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-lg font-bold text-white mb-2">
                        {outcome.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-3">
                        {outcome.description}
                      </p>
                      <p className="text-xs text-accent font-medium">
                        {outcome.mechanism}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
