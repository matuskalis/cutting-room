import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const dividerVariants = cva("", {
  variants: {
    variant: {
      gold: "h-1 bg-accent",
      subtle: "h-px bg-border",
      navy: "h-1 bg-primary",
      red: "h-1 bg-accent",
    },
    size: {
      sm: "w-12",
      md: "w-16",
      lg: "w-24",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "gold",
    size: "md",
  },
})

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  centered?: boolean
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant, size, centered = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        dividerVariants({ variant, size }),
        centered && "mx-auto",
        className
      )}
      {...props}
    />
  )
)
Divider.displayName = "Divider"

export { Divider, dividerVariants }
