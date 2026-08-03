"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const certifications = [
  {
    label: "SBA SDVOSB Certified",
    badge: "/logos/certification-badge.svg",
  },
  {
    label: "Maryland VSBE",
    badge: "/logos/certification-badge.svg",
  },
]

const capabilities = [
  "Supporting FedRAMP Moderate authorization workflows",
  "Architectures for HIPAA Security Rule environments",
  "Continuous compliance monitoring with pre-mapped controls",
]

export function TrustStrip({ className }: { className?: string }) {
  return (
    <section className={cn("bg-[#202020] py-6 border-b border-white/5", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Certification Badges */}
          <div className="flex items-center gap-6">
            {certifications.map((cert) => (
              <div key={cert.label} className="flex items-center gap-3">
                <div className="h-10 w-10 relative bg-white/10 rounded p-1">
                  <Image
                    src={cert.badge}
                    alt={cert.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-white/60 hidden sm:block uppercase tracking-wide">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block h-6 w-px bg-white/10" />

          {/* Capability Claims */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="text-xs text-white/60 flex items-center gap-2"
              >
                <span className="h-1 w-1 rounded-full bg-[#ff5841]" />
                {capability}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
