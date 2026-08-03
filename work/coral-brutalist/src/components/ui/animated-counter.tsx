"use client"

import { useRef, useEffect } from "react"

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || hasAnimated.current)
      return

    const match = value.match(/^([^0-9]*)([\d.]+)(.*)$/)
    if (!match) {
      ref.current.textContent = value
      return
    }

    const [, prefix, numStr, suffix] = match
    const targetNum = parseFloat(numStr)
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current.textContent = prefix + targetNum.toFixed(decimals) + suffix
      hasAnimated.current = true
      return
    }

    let cancelled = false
    let tween: { kill: () => void } | null = null

    const init = async () => {
      const gsapModule = await import("gsap")
      const scrollTriggerModule = await import("gsap/ScrollTrigger")
      if (cancelled) return
      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

      if (!ref.current) return

      ref.current.textContent = prefix + (0).toFixed(decimals) + suffix

      const counter = { val: 0 }
      tween = gsapModule.gsap.to(counter, {
        val: targetNum,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent =
              prefix + counter.val.toFixed(decimals) + suffix
          }
        },
        onComplete: () => {
          hasAnimated.current = true
        },
      })
    }

    init()

    return () => {
      cancelled = true
      if (tween) tween.kill()
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
