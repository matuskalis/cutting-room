"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Hash,
  Building2,
  Award,
  ArrowRight,
  CheckCircle,
  Shield,
  ExternalLink,
  Download,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SubpageHero } from "@/components/sections/subpage-hero"
import { Statement } from "@/components/sections/statement"
import { TextReveal } from "@/components/ui/text-reveal"
import { SectionReveal } from "@/components/ui/section-reveal"
import { AnimatedLine } from "@/components/ui/animated-line"
import { contractingDetails, pastPerformanceSummaries } from "@/data/procurement"

export default function ProcurementPage() {
  return (
    <div>
      {/* 1. SubpageHero (coral) */}
      <SubpageHero
        title="Procurement."
        eyebrow="Federal Contracting"
        description="Everything federal buyers need to evaluate, procure, and partner with Northbound Systems. SDVOSB-certified, SAM.gov registered, and ready to contract."
        headerTheme="dark"
        labelBox={{
          title: "Quick Reference",
          items: [
            { label: "CAGE", value: contractingDetails.cageCode },
            { label: "UEI", value: contractingDetails.uei },
            { label: "SAM Status", value: contractingDetails.samStatus },
            { label: "Set-Aside", value: "SDVOSB" },
          ],
        }}
      />

      {/* 2. Statement (dark) */}
      <Statement
        text="SDVOSB-certified, SAM.gov registered, and structured for rapid federal engagement — Northbound Systems delivers data engineering and AI solutions through proven contract vehicles, with past performance across health, defense, and civilian missions."
        attribution="— Ready to Contract"
        headerTheme="light"
      />

      {/* 3. Contracting Information (dark) */}
      <section className="bg-[#202020] py-24 md:py-32" data-header-theme="light">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              <TextReveal
                text="Contracting Information"
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-serif font-medium text-white mb-10"
              />
            </div>

            <AnimatedLine
              direction="horizontal"
              color="rgba(255,255,255,0.1)"
              className="mb-10"
            />

            {/* Identifier cards */}
            <SectionReveal>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
                <div className="bg-[#1a1a1a] border border-white/[0.06] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Hash className="h-4 w-4 text-[#ff5841]" />
                    <p className="mono-label text-white/40">CAGE Code</p>
                  </div>
                  <p className="font-mono text-sm font-medium text-white">{contractingDetails.cageCode}</p>
                </div>
                <div className="bg-[#1a1a1a] border border-white/[0.06] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-4 w-4 text-[#ff5841]" />
                    <p className="mono-label text-white/40">UEI</p>
                  </div>
                  <p className="font-mono text-sm font-medium text-white">{contractingDetails.uei}</p>
                </div>
                <div className="bg-[#1a1a1a] border border-white/[0.06] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-[#ff5841]" />
                    <p className="mono-label text-white/40">Set-Asides</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {contractingDetails.setAsides.map((setAside) => (
                      <span key={setAside} className="inline-flex rounded-full bg-[#ff5841] px-3 py-1 text-xs font-bold text-[#202020]">
                        {setAside}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-white/[0.06] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-[#ff5841]" />
                    <p className="mono-label text-white/40">SAM Status</p>
                  </div>
                  <p className="font-mono text-sm font-medium text-[#ff5841]">{contractingDetails.samStatus}</p>
                </div>
              </div>
            </SectionReveal>

            {/* NAICS Codes */}
            <SectionReveal delay={0.1}>
              <div className="bg-[#1a1a1a] border border-white/[0.06] p-6 mb-8">
                <p className="mono-label text-[#ff5841] mb-4">NAICS Codes</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {contractingDetails.naicsCodes.map((naics) => (
                    <div key={naics.code} className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#ff5841] w-16">{naics.code}</span>
                      <span className="text-sm text-white/50">{naics.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* Certifications */}
            <SectionReveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {contractingDetails.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 border border-[#ff5841]/20 bg-[#ff5841]/5 px-4 py-2">
                    <CheckCircle className="h-4 w-4 text-[#ff5841]" />
                    <span className="text-sm font-medium text-white">{cert}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Capabilities Statement Download */}
            <SectionReveal delay={0.3}>
              <motion.div
                className="mt-10 bg-[#ff5841]/10 border border-[#ff5841]/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 flex-1">
                  <Download className="h-6 w-6 text-[#ff5841] flex-shrink-0" />
                  <div>
                    <h3 className="font-sans text-base font-medium text-white">Capabilities Statement (PDF)</h3>
                    <p className="text-sm text-white/50">Two-page federal-formatted overview of services, certifications, and past performance.</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff5841] px-6 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#ff6e59] transition-colors flex-shrink-0"
                >
                  Request PDF
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      {/* 4. Past Performance (light) */}
      <section className="bg-[#f5f5f5] py-24 md:py-32" data-header-theme="dark">
        <Container>
          <div className="max-w-5xl mx-auto">
            <p className="mono-label text-[#202020]/60 mb-4">Track Record</p>
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              <TextReveal
                text="Past Performance"
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-serif font-medium text-[#202020] mb-10"
              />
            </div>

            <AnimatedLine
              direction="horizontal"
              color="rgba(32,32,32,0.15)"
              className="mb-10"
            />

            <SectionReveal>
              <div className="grid gap-6 md:grid-cols-3">
                {pastPerformanceSummaries.map((summary) => (
                  <motion.div
                    key={summary.title}
                    className="bg-white border border-[#202020]/5 p-8 flex flex-col h-full border-l-2 border-l-transparent hover:border-l-[#ff5841] transition-all duration-300 hover:shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex-1">
                      <h3 className="font-sans text-lg font-medium text-[#202020] mb-2">{summary.title}</h3>
                      <p className="text-xs text-[#ff5841] font-medium uppercase tracking-wide mb-3">{summary.environment}</p>
                      <p className="text-sm text-[#666666] mb-4 leading-relaxed">{summary.scope}</p>
                      <div className="bg-[#f5f5f5] border border-[#202020]/5 p-4 mb-4">
                        <p className="mono-label text-[#202020]/40 mb-1">Outcome</p>
                        <p className="text-sm text-[#202020] font-medium">{summary.outcome}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {summary.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-[#202020]/10 px-3 py-1 text-xs text-[#666666]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#202020]/5">
                      <Link
                        href={`/case-studies/${summary.caseStudyId}`}
                        className="inline-flex items-center text-sm font-medium text-[#ff5841] hover:gap-2 transition-all"
                      >
                        View Full Pattern
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      {/* 5. Compliance Library Cross-Link (dark) */}
      <section className="bg-[#202020] py-16" data-header-theme="light">
        <Container>
          <SectionReveal>
            <div className="max-w-5xl mx-auto">
              <div className="bg-[#1a1a1a] border border-white/[0.06] p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-3 flex-1">
                  <Shield className="h-6 w-6 text-[#ff5841] flex-shrink-0" />
                  <div>
                    <p className="mono-label text-[#ff5841] mb-1">Contractor Portal</p>
                    <h3 className="font-sans text-lg font-medium text-white">Compliance Library</h3>
                    <p className="text-sm text-white/40 mt-1">
                      SSP-ready control mappings, ATO boundary diagrams, and FedRAMP inheritance matrices available for qualified evaluators.
                    </p>
                  </div>
                </div>
                <Link
                  href="/proof"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white hover:bg-white/5 transition-colors flex-shrink-0"
                >
                  View Compliance Artifacts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 6. CTA (coral) */}
      <section className="bg-[#ff5841] py-24 md:py-32" data-header-theme="dark">
        <Container>
          <div className="max-w-2xl">
            <p className="mono-label text-[#202020]/60 mb-4">Let&apos;s Talk</p>
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              <TextReveal
                text="Ready to Discuss Teaming or Contracting?"
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-serif font-medium text-[#202020] mb-4"
              />
            </div>
            <p className="text-[#202020]/70 mb-8 text-lg leading-relaxed">
              Contact our team to discuss capabilities, past performance details, and engagement pathways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
              >
                Contact Contracting Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202020]/30 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/10 transition-colors"
              >
                Request Capabilities PDF
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
