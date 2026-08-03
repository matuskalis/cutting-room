"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  )

  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: prefersReducedMotion ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
      }}
      animate={{
        opacity: 1,
        clipPath: "inset(0 0 0 0)",
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
