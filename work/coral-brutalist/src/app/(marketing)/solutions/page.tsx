"use client"

import Link from "next/link"
import {
  ShieldCheck,
  Database,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionReveal } from "@/components/ui/section-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { AnimatedLine } from "@/components/ui/animated-line"
import { SubpageHero } from "@/components/sections/subpage-hero"
import { Statement } from "@/components/sections/statement"
import { buyerPathways } from "@/data/solutions"

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Database,
  Briefcase,
}

export default function SolutionsPage() {
  return (
    <div>
      {/* 1. SubpageHero (coral) */}
      <SubpageHero
        title="Solutions."
        eyebrow="By Role"
        description="Find the right entry point for your organization's data, compliance, and procurement needs."
        labelBox={{
          title: "Pathways",
          items: buyerPathways.map((p, i) => ({
            label: `${String(i + 1).padStart(2, "0")}. ${p.persona}`,
          })),
        }}
      />

      {/* 2. Statement (dark) */}
      <Statement
        text="We meet organizations where they are — whether you're navigating ATO timelines, modernizing legacy data systems, or searching for a trusted SDVOSB partner with proven federal delivery."
      />

      {/* 3. Pathway Cards (dark) */}
      <section className="bg-[#202020] py-20 md:py-28 border-t border-[#4d4d4d]" data-header-theme="light">
        <Container>
          <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            <TextReveal
              text="Choose Your Path."
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
          <div className="grid gap-8 md:grid-cols-3">
            {buyerPathways.map((pathway, index) => {
              const IconComponent = iconMap[pathway.icon]
              return (
                <SectionReveal key={pathway.id} delay={index * 0.15}>
                  <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-8 flex flex-col h-full hover:border-[#ff5841]/30 transition-all">
                    <div className="flex-1">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/5 mb-6">
                        {IconComponent && <IconComponent className="h-7 w-7 text-[#ff5841]" />}
                      </div>
                      <h3 className="font-sans font-medium text-2xl text-white mb-4">
                        {pathway.persona}
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {pathway.painPoints.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-white/50"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5841] flex-shrink-0 mt-2" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={pathway.ctaHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5841] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#ff6e59] transition-colors w-full"
                    >
                      {pathway.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 4. CTA (coral) */}
      <section className="bg-[#ff5841] py-20 md:py-28" data-header-theme="dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <TextReveal
                text="Not sure where to start?"
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-sans font-medium text-[#202020] mb-4"
              />
            </div>
            <p className="text-[#202020]/70 mb-8">
              Our team can help identify the right engagement pathway for your
              specific requirements and constraints.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
            >
              Request Architecture Review
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
