"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionReveal } from "@/components/ui/section-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { clipRevealRight } from "@/lib/animations"

interface LabelBoxItem {
  label: string
  value?: string
}

interface SubpageHeroProps {
  title: string
  eyebrow: string
  description?: string
  headerTheme?: "dark" | "light"
  labelBox?: {
    title: string
    items: LabelBoxItem[]
  }
  children?: ReactNode
}

export function SubpageHero({
  title,
  eyebrow,
  description,
  headerTheme = "dark",
  labelBox,
  children,
}: SubpageHeroProps) {
  return (
    <SectionReveal>
      <section
        className="relative bg-[#ff5841] min-h-[600px] lg:min-h-[720px] flex flex-col pt-40 md:pt-52 lg:pt-60 pb-16 md:pb-20 lg:pb-24 overflow-hidden"
        data-header-theme={headerTheme}
      >
        <div className="mt-auto">
          <Container>
            <div className="relative">
              <p className="mono-label text-[#202020]/60 mb-4">{eyebrow}</p>
              <div style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
                <TextReveal
                  text={title}
                  as="h1"
                  splitBy="char"
                  variant="mask"
                  stagger={0.03}
                  className="font-serif font-medium text-[#202020] leading-[0.95]"
                />
              </div>
              {description && (
                <TextReveal
                  text={description}
                  as="p"
                  splitBy="word"
                  variant="mask"
                  delay={0.3}
                  className="text-lg md:text-xl text-[#202020]/70 max-w-xl mt-6"
                />
              )}
              {children}

              {/* Label box -- desktop: absolute positioned */}
              {labelBox && (
                <motion.div
                  variants={clipRevealRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="hidden lg:block absolute top-0 right-0 bg-[#202020] p-8 max-w-xs"
                >
                  <p className="mono-label text-[#ff5841] mb-4">{labelBox.title}</p>
                  <ul>
                    {labelBox.items.map((item, i) => (
                      <li
                        key={i}
                        className={`text-white/50 font-mono text-xs uppercase tracking-[0.1em] py-2 ${
                          i < labelBox.items.length - 1 ? "border-b border-white/10" : ""
                        }`}
                      >
                        {item.value ? (
                          <>
                            <span className="text-white/30">{item.label}</span>
                            <br />
                            <span className="text-white/60">{item.value}</span>
                          </>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Label box -- mobile: inline below content */}
            {labelBox && (
              <div className="lg:hidden bg-[#202020] p-6 mt-8">
                <p className="mono-label text-[#ff5841] mb-3">{labelBox.title}</p>
                <ul>
                  {labelBox.items.map((item, i) => (
                    <li
                      key={i}
                      className={`text-white/50 font-mono text-xs uppercase tracking-[0.1em] py-2 ${
                        i < labelBox.items.length - 1 ? "border-b border-white/10" : ""
                      }`}
                    >
                      {item.value ? (
                        <>
                          <span className="text-white/30">{item.label}</span>
                          {" — "}
                          <span className="text-white/60">{item.value}</span>
                        </>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </div>
      </section>
    </SectionReveal>
  )
}
