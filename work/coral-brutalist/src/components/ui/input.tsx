import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border bg-surface px-4 py-2 text-base text-foreground transition-all duration-200",
          "placeholder:text-foreground-muted/50",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-error focus:ring-error"
            : "border-surface-border hover:border-white/20 focus:border-accent focus:ring-accent/50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
