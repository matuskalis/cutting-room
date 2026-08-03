"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  Building2,
  CheckCircle2,
  Lightbulb,
  Target,
  Cpu,
  Users,
  Layers,
  Wrench,
  Clock,
  AlertTriangle,
  BarChart3,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CaseStudyCard } from "@/components/sections/case-study-card"
import { getCaseStudyById, caseStudies, isPatternCaseStudy } from "@/data/case-studies"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface CaseStudyPageProps {
  params: Promise<{ id: string }>
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = use(params)
  const caseStudy = getCaseStudyById(id)

  if (!caseStudy) {
    notFound()
  }

  const isPattern = isPatternCaseStudy(caseStudy)

  // Get related case studies (excluding current one)
  const relatedStudies = caseStudies
    .filter((study) => study.id !== caseStudy.id)
    .slice(0, 2)

  // Mode-specific data
  const title = isPattern ? caseStudy.patternTitle : caseStudy.title
  const challengeText = isPattern ? caseStudy.problemSpace : caseStudy.challenge
  const solutionText = isPattern ? caseStudy.approachPattern : caseStudy.approach
  const results = isPattern ? caseStudy.typicalOutcomes : caseStudy.measurableOutcome.map(o => o.metric)
  const engagementLabel = isPattern ? caseStudy.engagementType : caseStudy.clientType

  return (
    <>
      {/* Hero Section */}
        <Section className="relative overflow-hidden pt-40 pb-12">
          <Container>
            <motion.div
              className="max-w-4xl"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Breadcrumb */}
              <motion.nav variants={fadeInUp} aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-white/50">
                  <li>
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                  </li>
                  <ChevronRight className="h-4 w-4" />
                  <li>
                    <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
                  </li>
                  <ChevronRight className="h-4 w-4" />
                  <li className="text-white font-medium truncate max-w-[200px]">{title}</li>
                </ol>
              </motion.nav>

              {/* Badges */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline">{caseStudy.industry}</Badge>
                {isPattern && (
                  <Badge variant="accent" className="gap-1">
                    <Layers className="h-3 w-3" />
                    Engagement Pattern
                  </Badge>
                )}
                {isPattern && caseStudy.timeline && (
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {caseStudy.timeline}
                  </Badge>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-6"
              >
                {title}
              </motion.h1>

              {/* Engagement Type */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 text-lg text-white/50"
              >
                <Building2 className="h-5 w-5" />
                <span>{engagementLabel}</span>
              </motion.div>

              {/* Environment */}
              {isPattern && caseStudy.environment && (
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-sm text-white/50 mt-3"
                >
                  <Server className="h-4 w-4" />
                  <span>{caseStudy.environment}</span>
                </motion.div>
              )}
            </motion.div>
          </Container>
        </Section>

        {/* Context Notice for Patterns */}
        {isPattern && (
          <Section className="py-0 -mt-4">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-lg border border-accent/20 bg-accent/5 p-4 flex items-start gap-3 max-w-4xl"
              >
                <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/50">
                  This represents a typical engagement pattern for {caseStudy.applicableTo.slice(0, 2).join(' and ')}. Contact us to discuss how this approach applies to your specific requirements.
                </p>
              </motion.div>
            </Container>
          </Section>
        )}

        {/* Main Content */}
        <Section className="bg-[#2a2a2a]">
          <Container>
            <div className="max-w-4xl">
              <motion.div
                className="space-y-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {/* Problem/Challenge Section */}
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <Target className="h-6 w-6" />
                          </div>
                        </div>
                        <div>
                          <h2 className="font-sans font-bold text-2xl text-white mb-4">
                            {isPattern ? "Problem Space" : "The Challenge"}
                          </h2>
                          <p className="text-white/50 leading-relaxed">
                            {challengeText}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Solution/Approach Section */}
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <Lightbulb className="h-6 w-6" />
                          </div>
                        </div>
                        <div>
                          <h2 className="font-sans font-bold text-2xl text-white mb-4">
                            {isPattern ? "Approach Pattern" : "Our Solution"}
                          </h2>
                          <p className="text-white/50 leading-relaxed">
                            {solutionText}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Constraints Section */}
                {isPattern && caseStudy.constraints && caseStudy.constraints.length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-900/20 text-amber-400">
                              <AlertTriangle className="h-6 w-6" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h2 className="font-sans font-bold text-2xl text-white mb-6">
                              Environment Constraints
                            </h2>
                            <ul className="space-y-3">
                              {caseStudy.constraints.map((constraint, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3 text-white/50"
                                >
                                  <span className="h-2 w-2 rounded-full bg-amber-500 flex-shrink-0 mt-2" />
                                  <span>{constraint}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Measurable Outcomes Section */}
                {isPattern && caseStudy.measurableOutcomes && caseStudy.measurableOutcomes.length > 0 && (
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                              <BarChart3 className="h-6 w-6" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h2 className="font-sans font-bold text-2xl text-white mb-6">
                              Measurable Outcomes
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                              {caseStudy.measurableOutcomes.map((outcome, index) => (
                                <div
                                  key={index}
                                  className="rounded-lg border border-white/10 p-4"
                                >
                                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                                    {outcome.metric}
                                  </p>
                                  <p className="text-lg font-semibold text-accent">
                                    {outcome.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Delivered System Section (Pattern only) */}
                {isPattern && caseStudy.deliveredSystem && (
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                              <Wrench className="h-6 w-6" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h2 className="font-sans font-bold text-2xl text-white mb-6">
                              Delivered System
                            </h2>
                            <ul className="space-y-4">
                              {caseStudy.deliveredSystem.map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3 text-white/50"
                                >
                                  <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Results/Outcomes Section */}
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="font-sans font-bold text-2xl text-white mb-6">
                            {isPattern ? "Typical Outcomes" : "Results Achieved"}
                          </h2>
                          <ul className="space-y-4">
                            {results.map((result, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3 text-white/50"
                              >
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Applicable To (Pattern only) */}
                {isPattern && (
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                              <Users className="h-6 w-6" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h2 className="font-sans font-bold text-2xl text-white mb-4">
                              Applicable To
                            </h2>
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.applicableTo.map((org) => (
                                <Badge
                                  key={org}
                                  variant="outline"
                                  className="px-3 py-1.5 text-sm"
                                >
                                  {org}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Technologies Section */}
                <motion.div variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <Cpu className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="font-sans font-bold text-2xl text-white mb-6">
                            Technologies Used
                          </h2>
                          <div className="flex flex-wrap gap-3">
                            {caseStudy.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="px-4 py-2 text-sm"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <Section enableGrid>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-white mb-4">
                  More Case Studies
                </h2>
                <div className="mt-4 h-1 w-16 bg-accent" />
                <p className="text-white/50 mt-6">
                  Explore more examples of our mission-critical solutions.
                </p>
              </motion.div>

              <motion.div
                className="grid gap-6 md:grid-cols-2"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {relatedStudies.map((study) => (
                  <motion.div key={study.id} variants={fadeInUp}>
                    <CaseStudyCard study={study} />
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </Section>
        )}

        {/* CTA Section */}
        <Section className="bg-[#2a2a2a]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="font-sans font-bold text-3xl text-white md:text-4xl">
                Want Similar Results?
              </h2>
              <p className="mt-6 text-lg text-white/50">
                Let&apos;s discuss how Northbound Systems can help transform your data
                operations with proven expertise and mission-focused solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gold" size="lg">
                  <Link href="/contact">
                    Request Architecture Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/case-studies">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
    </>
  )
}
