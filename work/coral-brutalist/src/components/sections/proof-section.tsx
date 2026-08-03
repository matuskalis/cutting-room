"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { ceoProfile } from "@/data/homepage"
import { founderNarrative } from "@/data/proof"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

export function ProofSection() {
  return (
    <Section className="bg-[#202020]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-5 items-start"
          >
            {/* Photo Column */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={ceoProfile.image}
                    alt={ceoProfile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-xs font-medium">U.S. Army Veteran</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-sans text-xl font-bold text-white">
                  {ceoProfile.name}
                </h3>
                <p className="text-sm text-white/50">{ceoProfile.title}</p>
                <p className="text-xs text-accent mt-1">{ceoProfile.militaryBackground}</p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors mt-3"
                >
                  View full profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Content Column -- Risk Reduction */}
            <div className="lg:col-span-3">
              <motion.div variants={fadeInUp}>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                  Leadership
                </p>
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-8">
                  {founderNarrative.headline}
                </h2>
              </motion.div>

              <div className="space-y-4">
                {founderNarrative.points.map((point, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="border-l-4 border-l-accent">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-white">
                              {point.title}
                            </h4>
                            {point.metric && (
                              <span className="text-sm font-semibold text-accent flex items-center gap-1">
                                <TrendingUp className="h-3.5 w-3.5" />
                                {point.metric}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
