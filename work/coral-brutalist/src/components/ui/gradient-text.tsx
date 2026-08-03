import * as React from "react"
import { cn } from "@/lib/utils"

type GradientTextElement = "span" | "h1" | "h2" | "h3" | "h4" | "p"

export interface GradientTextProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: GradientTextElement
}

function GradientText({
  className,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  )
}
GradientText.displayName = "GradientText"

export { GradientText }
