"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  autoResize?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, autoResize = false, onChange, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

    const handleResize = React.useCallback(() => {
      const textarea = textareaRef.current
      if (textarea && autoResize) {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }, [autoResize])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleResize()
      onChange?.(e)
    }

    React.useEffect(() => {
      handleResize()
    }, [handleResize])

    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border bg-surface px-4 py-3 text-base text-foreground transition-all duration-200",
          "placeholder:text-foreground-muted/50",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          autoResize && "resize-none overflow-hidden",
          error
            ? "border-error focus:ring-error"
            : "border-surface-border hover:border-white/20 focus:border-accent focus:ring-accent/50",
          className
        )}
        ref={(node) => {
          textareaRef.current = node
          if (typeof ref === "function") {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        onChange={handleChange}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
