"use client"

import { motion } from "framer-motion"
import {
  Target,
  Eye,
  Database,
  ShieldCheck,
  Zap,
  Handshake,
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { strategicPillars, enhancedMission, enhancedVision } from "@/data/homepage"

const iconMap: Record<string, React.ElementType> = {
  Database,
  ShieldCheck,
  Eye,
  Zap,
  Handshake,
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

export function StrategyLayer() {
  return (
    <Section className="bg-[#202020]">
      <Container>
        {/* Mission & Vision */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#2a2a2a] rounded-lg border border-white/10 p-8 md:p-10 border-l-4 border-l-accent shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-sans text-2xl font-bold text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-white leading-relaxed">
              {enhancedMission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#2a2a2a] rounded-lg border border-white/10 p-8 md:p-10 border-l-4 border-l-accent shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-sans text-2xl font-bold text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-white leading-relaxed">
              {enhancedVision}
            </p>
          </motion.div>
        </div>

        {/* Strategic Pillars */}
        <SectionHeader
          eyebrow="Our Approach"
          title="Strategic Pillars"
          description="Five foundational principles that guide every engagement and ensure mission success."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {strategicPillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon]
            return (
              <motion.div key={pillar.title} variants={fadeInUp}>
                <Card variant="subtle" className="h-full text-center p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    {IconComponent && (
                      <IconComponent className="h-7 w-7 text-accent" />
                    )}
                  </div>
                  <h3 className="font-sans text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
