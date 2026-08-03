import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  enableGrid?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, enableGrid = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative py-16 md:py-24",
          enableGrid && "bg-grid",
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
