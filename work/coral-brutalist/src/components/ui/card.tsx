"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-surface rounded-lg border border-surface-border transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: [
          "p-6",
          "bg-[#2a2a2a]",
          "shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
          "hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
        ],
        featured: [
          "p-8",
          "border-accent/30 border-2",
          "shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
          "hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1",
        ],
        elevated: [
          "p-6",
          "shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
          "hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
        ],
        subtle: [
          "p-6",
          "border-transparent bg-background-secondary",
          "hover:bg-background-tertiary",
        ],
        light: [
          "p-6",
          "bg-white border-[#202020]/5",
          "hover:shadow-lg hover:-translate-y-0.5",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-bold leading-none tracking-tight text-foreground-strong font-sans",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-foreground-muted leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { withBorder?: boolean }
>(({ className, withBorder = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center pt-4",
      withBorder && "border-t border-border mt-4",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
