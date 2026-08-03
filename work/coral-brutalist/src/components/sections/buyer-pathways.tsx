"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Database,
  Briefcase,
  ArrowUpRight,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { buyerPathways } from "@/data/solutions"

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Database,
  Briefcase,
}

export function BuyerPathways() {
  return (
    <section className="bg-[#202020] py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Start Here"
          title="Find Your Entry Point"
          description="Select your role to see how Northbound Systems addresses your specific challenges."
          dark={true}
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {buyerPathways.map((pathway, index) => {
            const IconComponent = iconMap[pathway.icon]
            return (
              <motion.div
                key={pathway.id}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="bg-[#2a2a2a] rounded-lg border border-white/5 p-8 h-full flex flex-col group hover:border-[#ff5841]/20 transition-colors">
                  <div className="flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-white/60 mb-6">
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </div>
                    <p className="mono-label text-[#ff5841] mb-2">0{index + 1}</p>
                    <h3 className="font-sans text-xl font-bold text-white mb-4">
                      {pathway.persona}
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {pathway.painPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-white/50"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5841] flex-shrink-0 mt-1.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={pathway.ctaHref}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#ff5841] hover:text-[#ff6e59] transition-colors"
                  >
                    {pathway.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
