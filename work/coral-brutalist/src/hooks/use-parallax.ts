"use client"

import { useRef, useEffect } from "react"

interface UseParallaxOptions {
  speed?: number
  direction?: "up" | "down"
}

export function useParallax(options?: UseParallaxOptions) {
  const ref = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<{ kill: () => void } | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let cancelled = false

    const init = async () => {
      const gsapModule = await import("gsap")
      const scrollTriggerModule = await import("gsap/ScrollTrigger")
      if (cancelled || !ref.current) return
      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

      const speed = options?.speed ?? 0.2
      const direction = options?.direction ?? "up"
      const yPercent = direction === "up" ? -(speed * 100) : speed * 100

      const tween = gsapModule.gsap.to(ref.current, {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      triggerRef.current = tween.scrollTrigger as { kill: () => void }
    }

    init()

    return () => {
      cancelled = true
      if (triggerRef.current) {
        triggerRef.current.kill()
        triggerRef.current = null
      }
    }
  }, [options?.speed, options?.direction])

  return ref
}
