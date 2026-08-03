"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import Lenis from "lenis"

const SmoothScrollContext = createContext<Lenis | null>(null)

export function useSmoothScroll(): Lenis | null {
  return useContext(SmoothScrollContext)
}

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    let cancelled = false

    const init = async () => {
      const lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        touchMultiplier: 1.5,
      })

      if (cancelled) {
        lenisInstance.destroy()
        return
      }

      lenisRef.current = lenisInstance
      setLenis(lenisInstance)

      try {
        const gsapModule = await import("gsap")
        const scrollTriggerModule = await import("gsap/ScrollTrigger")

        if (cancelled) return

        gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

        lenisInstance.on("scroll", scrollTriggerModule.ScrollTrigger.update)

        gsapModule.gsap.ticker.add((time: number) => {
          lenisInstance.raf(time * 1000)
        })

        gsapModule.gsap.ticker.lagSmoothing(0)
      } catch {
        const raf = (time: number) => {
          lenisInstance.raf(time)
          if (!cancelled) {
            requestAnimationFrame(raf)
          }
        }
        requestAnimationFrame(raf)
      }
    }

    init()

    return () => {
      cancelled = true
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      setLenis(null)
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
