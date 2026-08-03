"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { atoAccelerateFramework } from "@/data/framework"

export function ATOAccelerate() {
  const { phases } = atoAccelerateFramework

  return (
    <section className="bg-[#202020] py-28 md:py-36 border-t border-[#4d4d4d]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-16">
            <p className="mono-label text-[#ff5841] mb-4">Proprietary Methodology</p>
            <h2
              className="font-serif font-medium text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {atoAccelerateFramework.name}
            </h2>
            <p className="text-[#b9b9b9]/60 max-w-2xl text-lg leading-relaxed">
              {atoAccelerateFramework.tagline}
            </p>
          </div>

          {/* Pipeline diagram */}
          <div className="grid md:grid-cols-4 mb-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                className="bg-[#1a1a1a] border border-[#4d4d4d] p-6 md:p-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Phase number + connector arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5841] font-mono text-sm font-bold text-[#202020]">
                      {String(phase.number).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-medium text-white">
                        {phase.name}
                      </h3>
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#ff5841]/60">
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  {index < phases.length - 1 && (
                    <ArrowRight className="hidden md:block h-5 w-5 text-white/10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10" />
                  )}
                </div>

                <p className="text-sm text-[#b9b9b9]/50 leading-relaxed mb-5">
                  {phase.description}
                </p>

                {/* Deliverables */}
                <div>
                  <p className="mono-label text-white/20 mb-3">Deliverables</p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-[#ff5841]/50 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-white/30 leading-relaxed">
                          {deliverable}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff5841] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#ff6e59] transition-colors"
            >
              Start Your ATO Acceleration
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30">
              Typical engagement: 6\u20138 weeks to authorization
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
