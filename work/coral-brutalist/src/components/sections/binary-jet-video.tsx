"use client"

import { useRef, useEffect } from "react"

interface BinaryJetVideoProps {
  caption?: string
}

export function BinaryJetVideo({ caption = "DATA IN MOTION" }: BinaryJetVideoProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let cancelled = false
    let scrollTriggerInstance: import("gsap/ScrollTrigger").ScrollTrigger | null = null

    const init = async () => {
      const gsapModule = await import("gsap")
      const scrollTriggerModule = await import("gsap/ScrollTrigger")
      if (cancelled) return

      gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

      scrollTriggerInstance = scrollTriggerModule.ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => videoRef.current?.play().catch(() => {}),
        onEnterBack: () => videoRef.current?.play().catch(() => {}),
        onLeave: () => videoRef.current?.pause(),
        onLeaveBack: () => videoRef.current?.pause(),
      })
    }

    init()

    return () => {
      cancelled = true
      scrollTriggerInstance?.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden"
      data-header-theme="light"
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/binary-jet-poster.jpg"
        src="/videos/binary-jet.mp4"
        className="object-cover w-full h-full absolute inset-0"
        aria-hidden="true"
      />

      <p className="absolute bottom-6 left-6 md:bottom-10 md:left-10 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 z-10">
        {caption}
      </p>
    </section>
  )
}
