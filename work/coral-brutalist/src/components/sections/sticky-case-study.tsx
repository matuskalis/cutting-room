"use client"

import { useRef, useEffect } from "react"
import { ArrowRight, Clock, TrendingDown, DollarSign, Shield } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"

const caseStudyData = {
  eyebrow: "Federal Health Agency — Pattern Case Study",
  headline: "ATO in 6 Weeks.\n40% Faster Authorization.",
  narrative:
    "A federal health agency needed to modernize a legacy data platform while maintaining HIPAA compliance and achieving Authority to Operate under aggressive timelines. Northbound Systems delivered a compliance-mapped lakehouse architecture with pre-built control documentation, enabling parallel authorization and engineering workstreams.",
  metrics: [
    {
      value: "6",
      unit: "Weeks",
      label: "To ATO Authorization",
      icon: "Clock",
      context: "HIPAA-aligned federal health platform",
    },
    {
      value: "40%",
      unit: "",
      label: "Reduction in Authorization Timeline",
      icon: "TrendingDown",
      context: "vs. prior agency ATO cycle",
    },
    {
      value: "$2.3M",
      unit: "",
      label: "Annual Compliance Cost Savings",
      icon: "DollarSign",
      context: "Automated evidence collection + monitoring",
    },
    {
      value: "Zero",
      unit: "",
      label: "Compliance Findings at Audit",
      icon: "Shield",
      context: "Independent 3PAO assessment",
    },
  ],
  technologies: ["Snowflake", "Databricks", "AWS", "Apache Airflow"],
  caseStudyId: "federal-health-agency",
}

const iconMap: Record<string, React.ElementType> = {
  Clock,
  TrendingDown,
  DollarSign,
  Shield,
}

export function StickyCaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const metricRefs = useRef<(HTMLDivElement | null)[]>([])
  const prefersReducedMotionRef = useRef(false)

  useEffect(() => {
    prefersReducedMotionRef.current =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Only run GSAP on desktop (no sticky on mobile)
    if (window.innerWidth < 1024 || prefersReducedMotionRef.current) return

    let cancelled = false
    let scrollTriggerModule: typeof import("gsap/ScrollTrigger") | null = null

    const init = async () => {
      const gsapModule = await import("gsap")
      scrollTriggerModule = await import("gsap/ScrollTrigger")
      if (cancelled) return
      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

      metricRefs.current.forEach((el) => {
        if (!el) return
        gsapModule.gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }

    init()

    return () => {
      cancelled = true
      if (scrollTriggerModule) {
        scrollTriggerModule.ScrollTrigger.getAll().forEach((t) => {
          if (metricRefs.current.includes(t.trigger as HTMLDivElement | null)) {
            t.kill()
          }
        })
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#202020] py-28 md:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          {/* Left: Sticky narrative panel */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mono-label text-[#ff5841] mb-6">
              {caseStudyData.eyebrow}
            </p>
            <h2
              className="font-sans font-medium text-white leading-[0.95] mb-8 whitespace-pre-line"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              {caseStudyData.headline}
            </h2>
            <p className="text-[#b9b9b9]/60 leading-relaxed mb-8 max-w-lg">
              {caseStudyData.narrative}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {caseStudyData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#4d4d4d] px-3 py-1 text-xs text-[#b9b9b9]/50 font-mono uppercase tracking-[0.1em]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/case-studies/${caseStudyData.caseStudyId}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#ff5841] hover:text-[#ff6e59] transition-colors"
            >
              Read Full Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Scrolling metric cards */}
          <div className="space-y-4">
            {caseStudyData.metrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon]
              return (
                <div
                  key={metric.label}
                  ref={(el) => { metricRefs.current[index] = el }}
                  className="gsap-metric-card bg-[#1a1a1a] border border-[#4d4d4d] p-8 md:p-10 lg:min-h-[55vh] flex flex-col justify-center"
                >
                  {/* Icon + Label row */}
                  <div className="flex items-center gap-3 mb-6">
                    {IconComponent && (
                      <div className="flex h-10 w-10 items-center justify-center border border-[#4d4d4d]">
                        <IconComponent className="h-5 w-5 text-[#ff5841]" />
                      </div>
                    )}
                    <span className="mono-label text-[#b9b9b9]/40">
                      {metric.label}
                    </span>
                  </div>

                  {/* Big metric value */}
                  <div>
                    <span
                      className="font-mono font-medium text-[#ff5841]"
                      style={{
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="block text-lg text-[#b9b9b9]/50 mt-2 font-medium">
                        {metric.unit}
                      </span>
                    )}
                  </div>

                  {/* Context */}
                  {metric.context && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#b9b9b9]/30 mt-4 pt-4 border-t border-[#4d4d4d]">
                      {metric.context}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
