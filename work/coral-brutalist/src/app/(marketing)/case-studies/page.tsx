"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { SectionReveal } from "@/components/ui/section-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { AnimatedLine } from "@/components/ui/animated-line"
import { CaseStudyCard } from "@/components/sections/case-study-card"
import { SubpageHero } from "@/components/sections/subpage-hero"
import { Statement } from "@/components/sections/statement"
import { caseStudies } from "@/data/case-studies"

export default function CaseStudiesPage() {
  return (
    <div>
      {/* 1. SubpageHero (coral) */}
      <SubpageHero
        title="Case Studies."
        eyebrow="Proven Delivery"
        description="Representative engagement patterns with environments, constraints, and measurable outcomes from federal health, defense, and research missions."
        labelBox={{
          title: "Engagement Patterns",
          items: [
            { label: "Federal Health / Defense / Research" },
            { label: "NDA", value: "Client details available under NDA" },
          ],
        }}
      />

      {/* 2. Statement (dark) */}
      <Statement
        text="Every engagement below reflects real constraints, real environments, and measurable outcomes — because in federal technology, proof of delivery is the only credential that matters."
      />

      {/* 3. Case Studies Grid (light) */}
      <section className="bg-[#f5f5f5] py-20 md:py-28" data-header-theme="dark">
        <Container>
          <SectionReveal>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 4. Technologies (dark) */}
      <section className="bg-[#202020] py-20 md:py-28 border-t border-[#4d4d4d]" data-header-theme="light">
        <Container>
          <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            <TextReveal
              text="Technologies We Deploy."
              as="h2"
              splitBy="word"
              variant="mask"
              className="font-sans font-medium text-white mb-4"
            />
          </div>
          <AnimatedLine
            direction="horizontal"
            color="rgba(255,88,65,0.3)"
            duration={1.2}
            className="mb-12"
          />
          <p className="text-white/50 max-w-2xl mb-12">
            Our solutions leverage industry-leading platforms to deliver
            reliable, scalable, and secure results.
          </p>

          <div className="flex flex-wrap gap-3">
            {Array.from(
              new Set(caseStudies.flatMap((study) => study.technologies))
            ).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-[#2a2a2a] px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA (coral) */}
      <section className="bg-[#ff5841] py-20 md:py-28" data-header-theme="dark">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <TextReveal
                text="Ready to Discuss Your Project?"
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-sans font-medium text-[#202020] mb-6"
              />
            </div>
            <p className="text-lg text-[#202020]/70 mb-8">
              Let&apos;s explore how Northbound Systems can help you achieve similar
              results. We&apos;ll share relevant experience and references tailored
              to your specific mission requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
              >
                Request Architecture Review
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202020]/30 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/10 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
