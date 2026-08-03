"use client"

import { useRef, useEffect, type ElementType } from "react"

interface TextRevealProps {
  text: string
  as?: ElementType
  splitBy?: "word" | "char"
  stagger?: number
  className?: string
  delay?: number
  variant?: "slide" | "mask"
}

export function TextReveal({
  text,
  as: Tag = "h2",
  splitBy = "word",
  stagger = 0.04,
  className = "",
  delay = 0,
  variant = "mask",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined" || hasAnimated.current) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const inners = containerRef.current?.querySelectorAll(".tr-inner")
      inners?.forEach((el) => {
        ;(el as HTMLElement).style.transform = "translateY(0)"
      })
      if (variant === "mask") {
        const outers = containerRef.current?.querySelectorAll(".tr-outer")
        outers?.forEach((el) => {
          ;(el as HTMLElement).style.clipPath = "inset(0 0 0% 0)"
        })
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

      if (!containerRef.current) return

      const inners = containerRef.current.querySelectorAll(".tr-inner")
      const outers = containerRef.current.querySelectorAll(".tr-outer")

      if (variant === "mask") {
        const tl = gsapModule.gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay,
        })

        tl.fromTo(
          outers,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.0,
            stagger,
            ease: "power3.out",
          },
          0
        )

        tl.fromTo(
          inners,
          { yPercent: 20 },
          {
            yPercent: 0,
            duration: 1.0,
            stagger,
            ease: "power3.out",
          },
          0
        )
      } else {
        gsapModule.gsap.fromTo(
          inners,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.8,
            stagger,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      hasAnimated.current = true
    }

    init()

    return () => {
      cancelled = true
      if (scrollTriggerModule) {
        scrollTriggerModule.ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === containerRef.current) t.kill()
        })
      }
    }
  }, [stagger, delay, variant])

  const units = splitBy === "char" ? text.split("") : text.split(" ")

  const isMask = variant === "mask"

  return (
    <Tag ref={containerRef} className={className} aria-label={text}>
      {units.map((unit, i) => (
        <span
          key={`${unit}-${i}`}
          className={`tr-outer inline-block ${isMask ? "" : "overflow-hidden"}`}
          style={isMask ? { clipPath: "inset(0 0 100% 0)" } : undefined}
          aria-hidden="true"
        >
          <span
            className="tr-inner inline-block"
            style={{
              transform: isMask ? "translateY(20%)" : "translateY(110%)",
            }}
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  )
}
