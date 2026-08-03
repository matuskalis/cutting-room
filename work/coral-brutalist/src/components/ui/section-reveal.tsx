"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface SectionRevealProps {
  children: ReactNode
  direction?: "up" | "right"
  duration?: number
  delay?: number
  className?: string
}

export function SectionReveal({
  children,
  direction = "up",
  duration = 1,
  delay = 0,
  className = "",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (ref.current) {
        ref.current.style.clipPath = "inset(0 0 0 0)"
      }
      return
    }

    let cancelled = false
    let gsapModule: typeof import("gsap") | null = null
    let scrollTriggerModule: typeof import("gsap/ScrollTrigger") | null = null

    const init = async () => {
      gsapModule = await import("gsap")
      scrollTriggerModule = await import("gsap/ScrollTrigger")
      if (cancelled) return
      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

      if (!ref.current) return

      const fromClip =
        direction === "up" ? "inset(0 0 100% 0)" : "inset(0 100% 0 0)"

      gsapModule.gsap.set(ref.current, { clipPath: fromClip })

      gsapModule.gsap.to(ref.current, {
        clipPath: "inset(0 0 0% 0)",
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    }

    init()

    return () => {
      cancelled = true
      if (scrollTriggerModule) {
        scrollTriggerModule.ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === ref.current) t.kill()
        })
      }
    }
  }, [direction, duration, delay])

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  )
}
