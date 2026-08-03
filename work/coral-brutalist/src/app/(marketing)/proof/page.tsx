"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  FileText,
  ArrowRight,
  Lock,
  ShieldCheck,
  Network,
  GitBranch,
  Shield,
  BookOpen,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { proofTiles, complianceFrameworksList } from "@/data/proof"

const iconMap: Record<string, React.ElementType> = {
  FileText,
  ShieldCheck,
  Network,
  GitBranch,
}

const classificationColors: Record<string, { bg: string; text: string; border: string }> = {
  CUI: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  UNCLASSIFIED: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  FOUO: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
}

export default function ProofPage() {
  return (
    <div>
      {/* ─── CORAL HERO ─── */}
      <section className="relative bg-[#ff5841] pt-32 pb-16 md:pb-20 overflow-hidden">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 items-end">
            <div className="lg:col-span-3">
              <p className="mono-label text-[#202020]/60 mb-4">Compliance Library</p>
              <h1
                className="font-serif font-medium tracking-tight text-[#202020] leading-[0.95]"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
              >
                Compliance Artifacts.
              </h1>
              <p className="mt-6 text-lg text-[#202020]/70 max-w-xl leading-relaxed">
                Controlled compliance documentation, authorization boundary references,
                and assessment templates available to qualified evaluators.
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-2 bg-[#202020] p-8">
              <p className="mono-label text-[#ff5841] mb-3">Supported Frameworks</p>
              <div className="space-y-2">
                {complianceFrameworksList.map((framework) => (
                  <div key={framework} className="flex items-center gap-2">
                    <Shield className="h-3 w-3 text-[#ff5841]" />
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">
                      {framework}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── DOCUMENT REGISTRY (dark) ─── */}
      <section className="bg-[#202020] py-28 md:py-36">
        <Container>
          {/* Registry header */}
          <div className="flex items-center gap-3 mb-8 max-w-5xl mx-auto">
            <BookOpen className="h-5 w-5 text-[#ff5841]" />
            <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-white/40">
              Document Registry — {proofTiles.length} Artifacts
            </h2>
          </div>

          <motion.div
            className="space-y-3 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              animate: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {proofTiles.map((tile) => {
              const IconComponent = iconMap[tile.icon]
              const isGated = tile.cta === 'Request Access'
              const classColors = tile.classification
                ? classificationColors[tile.classification]
                : classificationColors.UNCLASSIFIED

              return (
                <motion.div
                  key={tile.id}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Link href={tile.ctaHref}>
                    <div className="group bg-[#1a1a1a] border border-white/[0.06] hover:border-[#ff5841]/20 transition-all relative overflow-hidden">
                      {/* Classification stripe */}
                      {tile.classification && (
                        <div className={`absolute top-0 left-0 w-1 h-full ${tile.classification === 'CUI' ? 'bg-amber-500' : 'bg-green-500'}`} />
                      )}

                      <div className="p-6 pl-8 flex flex-col md:flex-row md:items-center gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center bg-[#ff5841]/10 border border-[#ff5841]/20">
                            {IconComponent ? (
                              <IconComponent className="h-5 w-5 text-[#ff5841]" />
                            ) : (
                              <FileText className="h-5 w-5 text-[#ff5841]" />
                            )}
                          </div>
                        </div>

                        {/* Document info */}
                        <div className="flex-1 min-w-0">
                          {/* Top metadata row */}
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            {tile.documentId && (
                              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#ff5841]/60">
                                {tile.documentId}
                              </span>
                            )}
                            {tile.version && (
                              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/20 border border-white/10 px-1.5 py-0.5">
                                v{tile.version}
                              </span>
                            )}
                            {tile.classification && (
                              <span className={`font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 border ${classColors.border} ${classColors.bg} ${classColors.text}`}>
                                {tile.classification}
                              </span>
                            )}
                            {tile.pageCount && (
                              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/20">
                                {tile.pageCount} pages
                              </span>
                            )}
                          </div>

                          <h3 className="font-sans text-base font-medium text-white group-hover:text-[#ff5841] transition-colors">
                            {tile.title}
                          </h3>

                          {tile.previewLabel && (
                            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30 mt-1">
                              {tile.previewLabel}
                            </p>
                          )}

                          <p className="text-sm text-white/40 leading-relaxed mt-2 hidden md:block">
                            {tile.description}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#ff5841] whitespace-nowrap">
                            {isGated && <Lock className="h-3 w-3" />}
                            {tile.cta}
                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Access CTA */}
          <motion.div
            className="mt-10 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-[#1a1a1a] border border-white/[0.06] p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-4 w-4 text-[#ff5841]" />
                  <h3 className="font-sans text-lg font-medium text-white">
                    Request Full Documentation Access
                  </h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  Detailed reference architectures, control mappings, and compliance documentation
                  available to qualified government evaluators and prime contractors under NDA.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff5841] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#ff6e59] transition-colors flex-shrink-0"
              >
                Request Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── PROCUREMENT HUB CROSS-LINK ─── */}
      <section className="bg-[#f5f5f5] py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-[#202020]/5 p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-3 flex-1">
                <FileText className="h-6 w-6 text-[#ff5841] flex-shrink-0" />
                <div>
                  <p className="mono-label text-[#202020]/60 mb-1">Contractor Portal</p>
                  <h3 className="font-sans text-lg font-medium text-[#202020]">Federal Procurement Hub</h3>
                  <p className="text-sm text-[#666666] mt-1">
                    CAGE codes, NAICS, UEI, set-aside certifications, and capabilities statement — everything for contracting evaluation.
                  </p>
                </div>
              </div>
              <Link
                href="/procurement"
                className="inline-flex items-center gap-2 rounded-full border border-[#202020]/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] hover:bg-[#202020]/5 transition-colors flex-shrink-0"
              >
                View Procurement Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA (coral) ─── */}
      <section className="bg-[#ff5841] py-28 md:py-36">
        <Container>
          <div className="max-w-2xl">
            <p className="mono-label text-[#202020]/60 mb-4">Get Started</p>
            <h2
              className="font-serif font-medium text-[#202020] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Need Specific Compliance Documentation?
            </h2>
            <p className="text-[#202020]/70 mb-8 text-lg leading-relaxed">
              Request access to specific control mappings, boundary diagrams,
              or assessment templates for your evaluation process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
              >
                Request Documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/procurement"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202020]/30 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/10 transition-colors"
              >
                Federal Procurement Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
