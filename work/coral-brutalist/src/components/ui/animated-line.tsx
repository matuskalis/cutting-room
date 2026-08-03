"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedLineProps {
  direction?: "horizontal" | "vertical"
  color?: string
  thickness?: number
  delay?: number
  duration?: number
  origin?: "left" | "right" | "center" | "top" | "bottom"
  className?: string
}

const originMap: Record<string, string> = {
  left: "left center",
  right: "right center",
  center: "center center",
  top: "center top",
  bottom: "center bottom",
}

export function AnimatedLine({
  direction = "horizontal",
  color = "rgba(32, 32, 32, 0.15)",
  thickness = 1,
  delay = 0,
  duration = 1.2,
  origin = "left",
  className,
}: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (ref.current) {
        ref.current.style.transform = "scale(1)"
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

      const isHorizontal = direction === "horizontal"
      const fromScale = isHorizontal ? { scaleX: 0 } : { scaleY: 0 }
      const toScale = isHorizontal ? { scaleX: 1 } : { scaleY: 1 }

      gsapModule.gsap.set(ref.current, fromScale)

      gsapModule.gsap.to(ref.current, {
        ...toScale,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
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

  const isHorizontal = direction === "horizontal"

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        width: isHorizontal ? "100%" : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : "100%",
        backgroundColor: color,
        transformOrigin: originMap[origin],
        transform: isHorizontal ? "scaleX(0)" : "scaleY(0)",
      }}
    />
  )
}
