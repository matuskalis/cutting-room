"use client"

import { useRef, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { byTheNumbers } from "@/data/homepage"

export function ByTheNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let cancelled = false
    let scrollTriggerModule: typeof import("gsap/ScrollTrigger") | null = null

    const init = async () => {
      const gsapModule = await import("gsap")
      scrollTriggerModule = await import("gsap/ScrollTrigger")
      if (cancelled) return

      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

      const items = itemsRef.current.filter(Boolean) as HTMLDivElement[]

      gsapModule.gsap.set(items, {
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
      })

      gsapModule.gsap.to(items, {
        clipPath: "inset(0 0 0 0)",
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    }

    init()

    return () => {
      cancelled = true
      if (scrollTriggerModule) {
        scrollTriggerModule.ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === sectionRef.current) t.kill()
        })
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#1a1a1a] py-28 md:py-36 border-t border-b border-[#4d4d4d]"
      data-header-theme="light"
    >
      <Container>
        <p className="mono-label text-[#ff5841] mb-12">By the Numbers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {byTheNumbers.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => { itemsRef.current[index] = el }}
            >
              <p
                className="font-mono font-bold text-[#ff5841]"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white mt-2">
                {stat.label}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30 mt-1">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
