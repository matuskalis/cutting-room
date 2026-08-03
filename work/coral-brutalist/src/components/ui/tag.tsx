"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-background-secondary text-foreground border border-transparent hover:border-border",
        outline:
          "bg-transparent text-foreground border border-border hover:bg-background-secondary",
        filled:
          "bg-primary text-white border border-transparent hover:bg-primary-light",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface TagProps extends VariantProps<typeof tagVariants> {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

function Tag({ children, variant, size, icon, className }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant, size }), className)}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

export { Tag, tagVariants, type TagProps }
