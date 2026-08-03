"use client"

import Link from "next/link"
import { ArrowRight, Building2, Layers, Clock, BarChart3 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { CaseStudyNew } from "@/types"
import { isPatternCaseStudy } from "@/data/case-studies"

interface CaseStudyCardProps {
  study: CaseStudyNew
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const isPattern = isPatternCaseStudy(study)

  // Get title based on mode
  const title = isPattern ? study.patternTitle : study.title

  // Get challenge/problem description
  const description = isPattern ? study.problemSpace : study.challenge

  // Get outcomes/results
  const results = isPattern ? study.typicalOutcomes : study.measurableOutcome.map(o => o.metric)

  return (
    <Link href={`/case-studies/${study.id}`}>
      <Card className="h-full cursor-pointer group flex flex-col">
        <CardHeader>
          {/* Industry Badge + Mode Indicator */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs">
              {study.industry}
            </Badge>
            {isPattern && (
              <Badge variant="accent" className="text-xs gap-1">
                <Layers className="h-3 w-3" />
                Pattern
              </Badge>
            )}
            {isPattern && study.timeline && (
              <Badge variant="outline" className="text-xs gap-1">
                <Clock className="h-3 w-3" />
                {study.timeline}
              </Badge>
            )}
          </div>

          <CardTitle className="font-sans font-bold group-hover:text-accent transition-colors text-xl mb-3">
            {title}
          </CardTitle>

          {/* Engagement Type or Client Type */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
            <Building2 className="h-4 w-4" />
            <span>{isPattern ? study.engagementType : study.clientType}</span>
          </div>

          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>

          {/* Approach Preview */}
          {isPattern && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                Approach
              </p>
              <p className="text-sm text-white/50 line-clamp-2">
                {study.approachPattern}
              </p>
            </div>
          )}
        </CardHeader>

        <CardContent className="flex-1">
          {/* Measurable Outcomes Preview */}
          {isPattern && study.measurableOutcomes && study.measurableOutcomes.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Measurable Outcomes
              </p>
              <div className="grid grid-cols-2 gap-2">
                {study.measurableOutcomes.slice(0, 2).map((outcome, index) => (
                  <div key={index} className="rounded border border-white/10 p-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      {outcome.metric}
                    </p>
                    <p className="text-sm font-semibold text-accent">
                      {outcome.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                {isPattern ? "Typical Outcomes" : "Key Results"}
              </p>
              <ul className="space-y-1">
                {results.slice(0, 2).map((result, index) => (
                  <li
                    key={index}
                    className="text-sm text-white/50 flex items-start gap-2"
                  >
                    <span className="text-accent mt-1.5 text-xs">●</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-4 border-t border-white/10">
          <div className="flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
            {isPattern ? "Explore This Pattern" : "View Engagement Details"}
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
