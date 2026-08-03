"use client"

import { useRef, useEffect, useCallback } from "react"

interface MagneticOptions {
  strength?: number
  ease?: number
  enabled?: boolean
}

export function useMagnetic(options?: MagneticOptions) {
  const { strength = 0.3, ease = 0.15, enabled = true } = options ?? {}

  const ref = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)
  const isHovering = useRef(false)

  const animate = useCallback(() => {
    const dx = target.current.x - current.current.x
    const dy = target.current.y - current.current.y

    current.current.x += dx * ease
    current.current.y += dy * ease

    if (ref.current) {
      ref.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`
    }

    const settled = Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01

    if (settled && !isHovering.current) {
      current.current.x = 0
      current.current.y = 0
      if (ref.current) {
        ref.current.style.transform = "translate(0px, 0px)"
      }
      rafId.current = null
      return
    }

    rafId.current = requestAnimationFrame(animate)
  }, [ease])

  const startLoop = useCallback(() => {
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(animate)
    }
  }, [animate])

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (isTouchDevice || prefersReducedMotion) return

    el.style.willChange = "transform"

    const handleMouseEnter = () => {
      isHovering.current = true
      startLoop()
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      target.current.x = (e.clientX - centerX) * strength
      target.current.y = (e.clientY - centerY) * strength
    }

    const handleMouseLeave = () => {
      isHovering.current = false
      target.current.x = 0
      target.current.y = 0
      startLoop()
    }

    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mousemove", handleMouseMove)
    el.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter)
      el.removeEventListener("mousemove", handleMouseMove)
      el.removeEventListener("mouseleave", handleMouseLeave)

      el.style.willChange = ""

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
        rafId.current = null
      }
    }
  }, [strength, startLoop, enabled])

  return ref
}
