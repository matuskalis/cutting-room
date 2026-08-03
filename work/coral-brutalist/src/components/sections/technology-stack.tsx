"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { technologyCapabilities } from "@/data/security"
import { siteConfig } from "@/data/site"

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

interface TechCategoryProps {
  title: string
  items: { name: string; capabilities: string }[]
}

function TechCategory({ title, items }: TechCategoryProps) {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      <h3 className="font-sans text-lg font-bold text-white">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-lg border border-white/10 bg-[#2a2a2a] p-4 hover:shadow-sm transition-shadow"
          >
            <p className="font-medium text-white mb-1">{item.name}</p>
            <p className="text-sm text-white/50">{item.capabilities}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function TechnologyStack() {
  return (
    <Section className="bg-[#2a2a2a]">
      <Container>
        <SectionHeader
          eyebrow="Technology Expertise"
          title="Platform Capabilities"
          description="Deep expertise across leading cloud platforms, data technologies, and DevOps tools."
        />

        {/* Technology Categories Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <TechCategory title="Cloud Platforms" items={technologyCapabilities.cloudPlatforms} />
          <TechCategory title="Data Platforms" items={technologyCapabilities.dataPlatforms} />
          <TechCategory title="Analytics & BI" items={technologyCapabilities.analyticsBI} />
          <TechCategory title="DevOps & Infrastructure" items={technologyCapabilities.devOps} />
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-12 border-t border-white/10"
        >
          <p className="text-center text-sm text-white/50 mb-6">
            Technology Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {siteConfig.techPartners.slice(0, 6).map((partner) => (
              <div key={partner.name} className="opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={28}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
