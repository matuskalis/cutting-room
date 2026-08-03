"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FooterBrandRevealProps {
  children: ReactNode
  className?: string
}

export function FooterBrandReveal({ children, className }: FooterBrandRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion || !containerRef.current) return

    let scrollTriggerInstance: { kill: () => void } | null = null

    async function setupAnimation() {
      const gsapModule = await import("gsap")
      const scrollTriggerModule = await import("gsap/ScrollTrigger")

      const { gsap } = gsapModule
      const { ScrollTrigger } = scrollTriggerModule

      gsap.registerPlugin(ScrollTrigger)

      if (!containerRef.current) return

      gsap.set(containerRef.current, {
        clipPath: "inset(0 0 100% 0)",
        yPercent: 20,
      })

      const tween = gsap.to(containerRef.current, {
        clipPath: "inset(0 0 0% 0)",
        yPercent: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          once: true,
        },
      })

      scrollTriggerInstance = tween.scrollTrigger as { kill: () => void }
    }

    setupAnimation()

    return () => {
      scrollTriggerInstance?.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  )
}
