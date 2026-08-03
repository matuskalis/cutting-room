"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/data/site"

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.05 },
  },
}

export function LogoMarquee({ className }: { className?: string }) {
  return (
    <Section className={cn("bg-[#2a2a2a] py-12", className)}>
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-white/50 mb-8">
          Technology Partners
        </p>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {siteConfig.techPartners.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              className="flex items-center justify-center"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 invert"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
