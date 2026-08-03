"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CaseStudyCard } from "@/components/sections/case-study-card"
import { getSolutionBySlug } from "@/data/solutions"
import { getCaseStudyById } from "@/data/case-studies"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

interface SolutionPageProps {
  params: Promise<{ slug: string }>
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = use(params)
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    notFound()
  }

  const relatedStudies = solution.relatedCaseStudies
    .map((id) => getCaseStudyById(id))
    .filter(Boolean)

  return (
    <>
      {/* Hero */}
      <Section enableGrid className="relative min-h-[50vh] flex items-center pt-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.1)_0%,transparent_70%)]" />
        </div>

        <Container className="relative z-10">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Breadcrumb */}
            <motion.nav variants={fadeInUp} aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <ChevronRight className="h-4 w-4" />
                <li><Link href="/solutions" className="hover:text-accent transition-colors">Solutions</Link></li>
                <ChevronRight className="h-4 w-4" />
                <li className="text-white font-medium">{solution.persona}</li>
              </ol>
            </motion.nav>

            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">{solution.persona}</Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 text-white"
            >
              {solution.headline}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 max-w-3xl"
            >
              {solution.subheadline}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Pain Points */}
      <Section className="bg-[#2a2a2a]">
        <Container>
          <div className="max-w-4xl">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-white mb-8">
              Challenges We Address
            </h2>
            <motion.div
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {solution.painPoints.map((point, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <AlertCircle className="h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">
                            {point.title}
                          </h3>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* How We Help */}
      <Section className="bg-[#202020]">
        <Container>
          <div className="max-w-4xl">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-white mb-8">
              How VALOR Helps
            </h2>
            <motion.div
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {solution.howWeHelp.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <Section className="bg-[#2a2a2a]">
          <Container>
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-white mb-8">
              Relevant Case Studies
            </h2>
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {relatedStudies.map((study) => (
                study && (
                  <motion.div key={study.id} variants={fadeInUp}>
                    <CaseStudyCard study={study} />
                  </motion.div>
                )
              ))}
            </motion.div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-[#202020]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="text-lg text-white/50 mb-8">
              Let&apos;s review your current environment and identify the fastest
              path to your target architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="lg">
                <Link href="/contact">
                  {solution.ctaLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/solutions">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  All Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
