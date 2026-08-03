"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const [isEnabled, setIsEnabled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (!prefersReduced) setIsEnabled(true)
  }, [])

  if (!isEnabled) return null

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#ff5841] z-[60]"
      aria-hidden="true"
    />
  )
}
