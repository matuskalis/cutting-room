"use client"

import { Container } from "@/components/ui/container"
import { TextReveal } from "@/components/ui/text-reveal"
import { AnimatedLine } from "@/components/ui/animated-line"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface StatItem {
  value: string
  label: string
  context?: string
}

interface StatsListProps {
  title: string
  description?: string
  stats: StatItem[]
  headerTheme?: "dark" | "light"
}

function isNumericValue(value: string): boolean {
  return /^[\$]?\d/.test(value)
}

export function StatsList({
  title,
  description,
  stats,
  headerTheme = "light",
}: StatsListProps) {
  return (
    <section
      className="bg-[#202020] py-28 md:py-36 border-t border-[#4d4d4d]"
      data-header-theme={headerTheme}
    >
      <Container>
        <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          <TextReveal
            text={title}
            as="h2"
            splitBy="word"
            variant="mask"
            className="font-serif font-medium text-white"
          />
        </div>
        {description && (
          <p className="text-white/40 max-w-2xl mb-16 mt-4">{description}</p>
        )}
        {!description && <div className="mb-16" />}

        <div>
          <AnimatedLine
            direction="horizontal"
            color="rgba(255,255,255,0.1)"
            duration={1}
          />
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="py-8 md:py-10 md:grid md:grid-cols-[240px_1fr] gap-4 md:items-baseline">
                <div>
                  {isNumericValue(stat.value) ? (
                    <div style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                      <AnimatedCounter
                        value={stat.value}
                        className="font-mono font-bold text-[#ff5841]"
                        duration={2}
                      />
                    </div>
                  ) : (
                    <span
                      className="font-mono font-bold text-[#ff5841]"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                    >
                      {stat.value}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-white">
                    {stat.label}
                  </p>
                  {stat.context && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30 mt-1">
                      {stat.context}
                    </p>
                  )}
                </div>
              </div>
              <AnimatedLine
                direction="horizontal"
                color="rgba(255,255,255,0.1)"
                duration={1}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
