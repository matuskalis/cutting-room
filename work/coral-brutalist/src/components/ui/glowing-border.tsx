"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface GlowingBorderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean
  glowColor?: "primary" | "secondary"
}

const GlowingBorder = React.forwardRef<HTMLDivElement, GlowingBorderProps>(
  ({ className, animated = true, glowColor = "primary", children, ...props }, ref) => {
    const glowStyles = {
      primary: {
        gradient: "from-accent-primary via-accent-secondary to-accent-primary",
        shadow: "shadow-[0_0_30px_rgba(0,212,255,0.3)]",
      },
      secondary: {
        gradient: "from-accent-secondary via-accent-primary to-accent-secondary",
        shadow: "shadow-[0_0_30px_rgba(124,58,237,0.3)]",
      },
    }

    const styles = glowStyles[glowColor]

    return (
      <div
        ref={ref}
        className={cn("relative rounded-xl p-[1px]", styles.shadow, className)}
        {...props}
      >
        <motion.div
          className={cn(
            "absolute inset-0 rounded-xl bg-gradient-to-r",
            styles.gradient
          )}
          animate={
            animated
              ? {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }
              : undefined
          }
          transition={
            animated
              ? {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }
              : undefined
          }
          style={{
            backgroundSize: "200% 200%",
          }}
        />
        <div className="relative rounded-xl bg-background-secondary">
          {children}
        </div>
      </div>
    )
  }
)
GlowingBorder.displayName = "GlowingBorder"

export { GlowingBorder }
