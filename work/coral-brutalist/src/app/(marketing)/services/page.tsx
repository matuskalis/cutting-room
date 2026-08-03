"use client"

import Link from "next/link"
import Image from "next/image"
import {
  HeartPulse,
  Truck,
  Database,
  Brain,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionReveal } from "@/components/ui/section-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { AnimatedLine } from "@/components/ui/animated-line"
import { SubpageHero } from "@/components/sections/subpage-hero"
import { Statement } from "@/components/sections/statement"
import { siteConfig } from "@/data/site"
import { atoAccelerateFramework } from "@/data/framework"

const serviceIcons = {
  HeartPulse,
  Truck,
  Database,
  Brain,
  Cloud,
} as const

const serviceCapabilities: Record<string, string[]> = {
  "health-data": [
    "Healthcare data integration",
    "Clinical analytics",
    "HIPAA-compliant solutions",
    "Patient outcome optimization",
  ],
  "logistics-analytics": [
    "Supply chain intelligence",
    "Predictive maintenance",
    "Readiness forecasting",
    "Resource optimization",
  ],
  "data-lakehouse": [
    "Unified data architecture",
    "Real-time and batch processing",
    "Data governance",
    "Scalable infrastructure",
  ],
  "ai-ml": [
    "Predictive modeling",
    "Natural language processing",
    "Computer vision",
    "Intelligent automation",
  ],
  "cloud-modernization": [
    "Multi-cloud strategy",
    "Migration services",
    "DevSecOps",
    "Cost optimization",
  ],
}

export default function ServicesPage() {
  return (
    <div>
      {/* 1. SubpageHero (coral) */}
      <SubpageHero
        title="Services."
        eyebrow="What We Do"
        description="Mission-critical data engineering, AI, and cloud solutions."
        labelBox={{
          title: "Core Offerings",
          items: siteConfig.services.map((s, i) => ({
            label: `${String(i + 1).padStart(2, "0")}. ${s.name}`,
          })),
        }}
      />

      {/* 2. Statement (dark) */}
      <Statement
        text="Every solution we deliver is built security-first, with veteran discipline and mission-critical focus — because in the environments we serve, failure is not an option."
      />

      {/* 3. Services Grid (dark) */}
      <section className="bg-[#202020] py-20 md:py-28 border-t border-[#4d4d4d]" data-header-theme="light">
        <Container>
          <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            <TextReveal
              text="Core Solutions."
              as="h2"
              splitBy="word"
              variant="mask"
              className="font-serif font-medium text-white mb-4"
            />
          </div>
          <AnimatedLine
            direction="horizontal"
            color="rgba(255,88,65,0.3)"
            duration={1.2}
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons]
              const capabilities = serviceCapabilities[service.slug]

              return (
                <SectionReveal key={service.slug} delay={index * 0.1}>
                  <Link href={`/services/${service.slug}`}>
                    <div className="group bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-8 h-full hover:border-[#ff5841]/30 transition-all duration-300">
                      <div className="mb-6 h-32 rounded-lg bg-white/5 border border-white/[0.05] flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="h-12 w-12 text-white/20 group-hover:text-[#ff5841] transition-colors" />
                        )}
                      </div>
                      <p className="mono-label text-white/30 mb-2">0{index + 1}</p>
                      <h3 className="font-sans text-xl font-medium text-white mb-3 group-hover:text-[#ff5841] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {capabilities && (
                        <div className="mt-4 mb-6">
                          <p className="mono-label text-white/30 mb-3">Key Capabilities</p>
                          <ul className="space-y-2">
                            {capabilities.map((capability) => (
                              <li
                                key={capability}
                                className="flex items-center gap-2 text-sm text-white/50"
                              >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ff5841]" />
                                {capability}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] text-[#ff5841]">
                        Explore
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </SectionReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 4. ATO Accelerate Framework (dark) */}
      <section className="bg-[#202020] py-20 md:py-28 border-t border-[#4d4d4d]" data-header-theme="light">
        <Container>
          <SectionReveal>
            <p className="mono-label text-[#ff5841] mb-4">Proprietary Methodology</p>
            <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <TextReveal
                text={atoAccelerateFramework.name}
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-sans font-medium text-white mb-4"
              />
            </div>
            <p className="text-white/50 max-w-2xl mb-16">
              {atoAccelerateFramework.tagline}
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {atoAccelerateFramework.phases.map((phase) => (
                <div key={phase.name} className="relative text-center bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-8">
                  <div className="mx-auto mb-6 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-[#ff5841] bg-[#202020]">
                    <span className="font-mono text-xl font-bold text-white">
                      {String(phase.number).padStart(2, "0")}/
                    </span>
                  </div>
                  <h3 className="font-sans text-xl font-medium text-white">
                    {phase.name}
                  </h3>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#ff5841]/60 mt-1 mb-3">
                    {phase.duration}
                  </p>
                  <p className="text-sm text-white/50">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 5. Technology Partners (light) */}
      <section className="bg-[#f5f5f5] py-20 md:py-28" data-header-theme="dark">
        <Container>
          <SectionReveal>
            <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <TextReveal
                text="Technology Partners."
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-sans font-medium text-[#202020] mb-4"
              />
            </div>
            <p className="text-[#666666] mb-12 max-w-2xl">
              We leverage best-in-class technologies to deliver enterprise-grade solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {siteConfig.techPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-20 items-center justify-center rounded-lg border border-[#202020]/5 bg-white px-4 hover:border-[#ff5841]/30 hover:shadow-sm transition-all"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={32}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 6. CTA (coral) */}
      <section className="bg-[#ff5841] py-20 md:py-28" data-header-theme="dark">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <TextReveal
                text="Ready to modernize your operations?"
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-sans font-medium text-[#202020] mb-6"
              />
            </div>
            <p className="text-lg text-[#202020]/70 mb-8">
              Let&apos;s discuss how our mission-critical solutions can
              transform your organization.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
              >
                Request Architecture Review
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202020]/30 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
