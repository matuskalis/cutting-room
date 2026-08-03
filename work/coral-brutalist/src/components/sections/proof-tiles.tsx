"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Network,
  GitBranch,
  Rocket,
  FileText,
  ArrowUpRight,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { proofTiles } from "@/data/proof"

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Network,
  GitBranch,
  Rocket,
  FileText,
}

function getTileClasses(isLarge: boolean) {
  if (isLarge) return "sm:col-span-2 sm:row-span-2"
  return ""
}

export function ProofTiles() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Evidence of Capability"
          title="Proof of Work"
          description="Control documentation, reference architectures, and compliance artifacts demonstrating our approach to federal delivery."
          dark={false}
        />

        <motion.div
          className="grid gap-px bg-[#202020]/5 border border-[#202020]/5 rounded-lg overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            animate: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {proofTiles.map((tile, index) => {
            const IconComponent = iconMap[tile.icon]
            const isLarge = index === 0
            return (
              <motion.div
                key={tile.id}
                className={getTileClasses(isLarge)}
                variants={{
                  initial: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
                  animate: {
                    clipPath: "inset(0 0 0 0)",
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Link href={tile.ctaHref} className="block h-full group">
                  <div className="bg-white p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] text-[#202020]/30">
                        {IconComponent && <IconComponent className="h-5 w-5" />}
                      </div>
                      <span className="mono-label text-[#202020]/30">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-sans text-lg font-bold text-[#202020] mb-3 group-hover:text-[#ff5841] transition-colors">
                      {tile.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4 flex-1">
                      {tile.description}
                    </p>
                    <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] text-[#ff5841]">
                      {tile.cta}
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
