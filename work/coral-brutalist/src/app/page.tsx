"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Brain,
  Cloud,
  HeartPulse,
  Truck,
} from "lucide-react"
import { HeroNetwork } from "@/components/ui/hero-network"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { TextReveal } from "@/components/ui/text-reveal"
import { SectionReveal } from "@/components/ui/section-reveal"
import { StickyCaseStudy } from "@/components/sections/sticky-case-study"
import { EnhancedCTA } from "@/components/sections/enhanced-cta"
import { ATOAccelerate } from "@/components/sections/ato-accelerate"
import { ByTheNumbers } from "@/components/sections/by-the-numbers"
import { PlatformDemo } from "@/components/sections/platform-demo"
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel"
import { BinaryJetVideo } from "@/components/sections/binary-jet-video"
import { AnimatedLine } from "@/components/ui/animated-line"
import { clipRevealStaggerItem } from "@/lib/animations"
import { siteConfig } from "@/data/site"
import { heroContent, heroMetrics, ceoProfile, systemStatus } from "@/data/homepage"

const serviceIcons: Record<string, React.ElementType> = {
  HeartPulse,
  Truck,
  Database,
  Brain,
  Cloud,
}

export default function Home() {
  return (
    <div>
      <div id="main-content" />

      {/* ─── HERO: Full-Viewport Dramatic Statement ─── */}
      <section className="relative bg-[#ff5841] min-h-screen overflow-hidden" data-header-theme="dark">
        <HeroNetwork className="absolute inset-0 z-0" />
        <Container>
          <div className="relative z-10 grid lg:grid-cols-[1fr_380px] gap-px min-h-screen">
            {/* Left: Massive Headline */}
            <motion.div
              className="flex flex-col justify-center py-32 lg:py-20 lg:pr-12"
              initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mono-label text-[#202020]/60 mb-6">
                Service-Disabled Veteran-Owned Small Business
              </p>
              <h1
                className="font-sans font-medium tracking-tight text-[#202020] leading-[0.92]"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)", letterSpacing: "-0.03em" }}
              >
                {heroContent.headline}
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[#202020]/70 max-w-xl leading-relaxed">
                {heroContent.subheadline}
              </p>

              {/* Metric Bullets with top border */}
              <div className="mt-10 pt-8 border-t border-[#202020]/15">
                <div className="grid gap-6 sm:grid-cols-3">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-mono text-3xl md:text-4xl font-medium text-[#202020]">
                        {metric.value}
                      </p>
                      <p className="text-sm font-medium text-[#202020]/80 mt-1">
                        {metric.label}
                      </p>
                      {'context' in metric && metric.context && (
                        <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#202020]/40 mt-1">
                          {metric.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild variant="primary" size="lg">
                  <Link href="/contact">
                    {heroContent.primaryCTA}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-[#202020] border-[#202020]/30">
                  <Link href="/case-studies">
                    {heroContent.secondaryCTA}
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: Sticky Data-Viz Sidebar (Desktop) */}
            <motion.div
              className="hidden lg:block"
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sticky top-28 bg-[#202020] p-8 flex flex-col" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
                {/* System Status Header */}
                <p className="mono-label text-[#ff5841] mb-6">System Status</p>

                {/* Status Rows */}
                <div className="space-y-0 flex-1">
                  {systemStatus.map((item) => (
                    <div
                      key={item.label}
                      className="py-3 border-b border-[#4d4d4d] last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#b9b9b9]/60">
                          {item.label}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 rounded-full ${item.status === 'VERIFIED' ? 'bg-[#ff5841]' : 'bg-green-400'}`} />
                          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#b9b9b9]/40">
                            {item.status}
                          </span>
                        </span>
                      </div>
                      <p className="font-mono text-xs text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CEO Mini Profile */}
                <div className="mt-6 pt-6 border-t border-[#4d4d4d]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-white/10 overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={ceoProfile.image}
                        alt={ceoProfile.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-white">{ceoProfile.name}</p>
                      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#b9b9b9]/50">{ceoProfile.title}</p>
                    </div>
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#b9b9b9]/30 leading-relaxed">
                    U.S. Army Veteran · TS/SCI Eligible · 15+ Years Federal Data Engineering
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="mt-6 group flex items-center gap-3 bg-[#ff5841] p-4 text-[#202020] hover:bg-[#ff6e59] transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#202020] text-white group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#202020]/60">Free Assessment</p>
                    <p className="font-sans font-medium text-sm">Book ATO Readiness Review</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── ANIMATED DIVIDER ─── */}
      <AnimatedLine color="rgba(77, 77, 77, 1)" duration={1.5} />

      {/* ─── TRUST MICRO-BAR ─── */}
      <section className="bg-[#202020] border-b border-[#4d4d4d]" data-header-theme="light">
        <Container>
          <div className="py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "SDVOSB Certified",
              "CAGE: Available on Request",
              "UEI: Available on Request",
              "NAICS: 541511, 541512, 541519",
            ].map((item, index) => (
              <span key={item} className="flex items-center gap-x-2">
                {index > 0 && <span className="hidden sm:inline text-white/20">|</span>}
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#b9b9b9]/50">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── BINARY JET VIDEO ─── */}
      <SectionReveal>
        <BinaryJetVideo />
      </SectionReveal>

      {/* ─── BY THE NUMBERS ─── */}
      <SectionReveal>
        <ByTheNumbers />
      </SectionReveal>

      {/* ─── PLATFORM DEMO ─── */}
      <SectionReveal delay={0.1}>
        <PlatformDemo />
      </SectionReveal>

      {/* ─── STICKY CASE STUDY ─── */}
      <SectionReveal>
        <StickyCaseStudy />
      </SectionReveal>

      {/* ─── VALOR ATO ACCELERATE ─── */}
      <SectionReveal delay={0.1}>
        <ATOAccelerate />
      </SectionReveal>

      {/* ─── TESTIMONIALS ─── */}
      <SectionReveal delay={0.1}>
        <TestimonialCarousel />
      </SectionReveal>

      {/* ─── CORE SOLUTIONS ─── */}
      <SectionReveal delay={0.1}>
        <section className="section-line-top bg-[#202020] py-28 md:py-36" data-header-theme="light">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="mono-label text-white/40 mb-4">What We Do</p>
                <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  <TextReveal
                    text="Core Solutions"
                    as="h2"
                    splitBy="word"
                    className="font-serif font-medium text-white"
                  />
                </div>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-white/40 hover:text-[#ff5841] transition-colors mt-4 md:mt-0"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                initial: {},
                animate: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {siteConfig.services.slice(0, 3).map((service) => {
                const IconComponent = serviceIcons[service.icon]
                return (
                  <motion.div
                    key={service.slug}
                    variants={clipRevealStaggerItem}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="group bg-[#2a2a2a] rounded-lg border border-white/8 p-8 h-full hover:shadow-lg hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 border-l-2 border-l-transparent hover:border-l-[#ff5841]">
                        <div className="mb-6 h-32 rounded-lg bg-[#333333] border border-white/5 flex items-center justify-center">
                          {IconComponent && (
                            <IconComponent className="h-12 w-12 text-white/20 group-hover:text-[#ff5841] transition-colors" />
                          )}
                        </div>
                        <h3 className="font-sans text-xl font-medium text-white mb-3 group-hover:text-[#ff5841] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-[#999999] leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] text-[#ff5841]">
                          Explore
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
      </SectionReveal>

      {/* ─── ENHANCED CTA ─── */}
      <SectionReveal delay={0.1}>
        <EnhancedCTA />
      </SectionReveal>
    </div>
  )
}
