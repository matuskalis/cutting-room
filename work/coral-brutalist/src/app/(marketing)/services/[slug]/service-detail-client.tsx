"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield,
  Cpu,
  Target,
  Lightbulb,
  HeadphonesIcon,
  HeartPulse,
  Truck,
  Database,
  Brain,
  Cloud,
  BadgeCheck,
} from "lucide-react"
import type { ServiceDetail } from "@/data/services"
import type { CaseStudyNew } from "@/types"
import { isPatternCaseStudy } from "@/data/case-studies"

const serviceIcons = {
  HeartPulse,
  Truck,
  Database,
  Brain,
  Cloud,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

interface ServiceDetailClientProps {
  service: ServiceDetail
  relatedStudies: CaseStudyNew[]
}

export function ServiceDetailClient({
  service,
  relatedStudies,
}: ServiceDetailClientProps) {
  const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons]
  const engagementIcons = [Target, Lightbulb, HeadphonesIcon]

  return (
    <div className="min-h-screen bg-[#202020]">
      {/* Hero Section */}
      <section className="bg-[#202020] pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            {/* Back Link */}
            <Link
              href="/services"
              className="mb-8 inline-flex items-center text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>

            {/* Icon */}
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-xl border border-surface-border bg-white/5">
              {IconComponent && (
                <IconComponent className="h-10 w-10 text-white" />
              )}
            </div>

            {/* Title */}
            <h1 className="font-sans text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {service.name}
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-xl text-accent md:text-2xl">
              {service.tagline}
            </p>

            {/* Accent underline */}
            <div className="mt-6 h-1 w-20 bg-accent" />

            {/* Description */}
            <p className="mt-8 text-lg leading-relaxed text-white/50 md:text-xl">
              {service.description}
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
              >
                Request Architecture Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="bg-[#2a2a2a] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
              What We Deliver
            </h2>
            <div className="mt-4 h-1 w-16 bg-accent" />
          </motion.div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2"
          >
            {service.deliverables.map((deliverable) => (
              <motion.li
                key={deliverable}
                variants={itemVariants}
                className="flex items-start gap-4 rounded-lg border border-white/10 bg-[#2a2a2a] p-5 transition-all duration-300 hover:border-accent hover:shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-white">{deliverable}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Typical Engagement Section */}
      <section className="bg-[#202020] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
              Typical Engagement
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
            <p className="mx-auto mt-6 max-w-2xl text-white/50">
              Our proven three-phase approach ensures successful delivery and
              lasting value for your organization.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline connector for desktop */}
            <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-border lg:block" />

            <div className="grid gap-8 md:grid-cols-3">
              {service.engagementSteps.map((step, index) => {
                const StepIcon = engagementIcons[index]
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative text-center"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-accent bg-[#2a2a2a]">
                      <span className="font-mono text-2xl font-bold text-white">
                        {String(index + 1).padStart(2, "0")}/
                      </span>
                      {StepIcon && (
                        <StepIcon className="mt-1 h-5 w-5 text-accent" />
                      )}
                    </div>
                    <h3 className="font-sans text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Shield className="h-7 w-7 text-accent" />
              </div>
              <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
                Security & Compliance
              </h2>
            </div>
            <div className="mb-8 h-1 w-16 bg-accent" />

            <p className="mb-10 text-lg leading-relaxed text-white/80">
              {service.securityCompliance.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {service.securityCompliance.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5"
                >
                  <BadgeCheck className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-white">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section className="bg-[#202020] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Cpu className="h-7 w-7 text-white" />
            </div>
            <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
              Tools & Platforms
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
            <p className="mx-auto mt-6 max-w-2xl text-white/50">
              We leverage industry-leading technologies to deliver robust,
              scalable solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {service.technologies.map((tech) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                className="rounded-lg border border-white/10 bg-[#2a2a2a] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-accent hover:shadow-sm"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="bg-[#2a2a2a] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
              Expected Outcomes
            </h2>
            <div className="mt-4 h-1 w-16 bg-accent" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {service.outcomes.map((outcome) => (
              <motion.div
                key={outcome}
                variants={itemVariants}
                className="flex items-start gap-4 rounded-lg border border-white/10 bg-[#2a2a2a] p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <p className="text-lg text-white">{outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies Section */}
      {relatedStudies.length > 0 && (
        <section className="bg-[#202020] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
                Related Case Studies
              </h2>
              <div className="mt-4 h-1 w-16 bg-accent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2"
            >
              {relatedStudies.map((study) => {
                const isPattern = isPatternCaseStudy(study)
                const title = isPattern ? study.patternTitle : study.title
                const description = isPattern ? study.problemSpace : study.challenge
                return (
                  <motion.div key={study.id} variants={itemVariants}>
                    <Link href={`/case-studies/${study.id}`}>
                      <div className="card-luxury group h-full bg-[#2a2a2a] p-8">
                        <span className="mb-4 inline-block rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/50">
                          {study.industry}
                        </span>
                        <h3 className="font-sans text-xl font-bold text-white transition-colors group-hover:text-accent">
                          {title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-white/50">
                          {description}
                        </p>
                        <div className="mt-6 flex items-center text-sm font-medium text-white transition-colors group-hover:text-accent">
                          {isPattern ? "Explore Pattern" : "Read Case Study"}
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 text-center"
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-accent"
              >
                View All Case Studies
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-navy py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
              Ready to modernize?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Let&apos;s discuss how our {service.name.toLowerCase()} solutions
              can transform your organization.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
              >
                Request Architecture Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
