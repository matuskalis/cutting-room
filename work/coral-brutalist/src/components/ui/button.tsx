"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useMagnetic } from "@/hooks/use-magnetic"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-mono text-xs uppercase tracking-[0.1em] font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#202020] text-white hover:bg-[#333333] shadow-sm hover:shadow-md",
        accent:
          "bg-[#ff5841] text-[#202020] font-semibold hover:bg-[#ff6e59] shadow-sm hover:shadow-md",
        secondary:
          "border border-white/20 text-white bg-transparent hover:bg-white/5",
        outline:
          "border border-current text-current bg-transparent hover:bg-current/5",
        gold:
          "bg-[#ff5841] text-[#202020] font-semibold hover:bg-[#ff6e59] shadow-sm hover:shadow-md",
        ghost:
          "text-foreground bg-transparent hover:bg-white/5",
        "ghost-dark":
          "text-white bg-transparent hover:bg-white/10",
        subtle:
          "text-foreground-muted bg-transparent hover:text-foreground hover:bg-white/5",
        destructive:
          "bg-error text-white hover:bg-error/90",
      },
      size: {
        sm: "h-9 px-5 text-[10px]",
        md: "h-11 px-6 text-xs",
        lg: "h-13 px-8 text-xs",
        xl: "h-14 px-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  magnetic?: boolean
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, magnetic = false, children, disabled, ...props }, ref) => {
    const magneticRef = useMagnetic({ enabled: magnetic })

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref as React.Ref<HTMLElement>}
        >
          {children}
        </Slot>
      )
    }

    const button = (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        transition={{ duration: 0.2, ease: "easeOut" }}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
        {children}
      </motion.button>
    )

    if (magnetic) {
      return (
        <div ref={magneticRef} style={{ display: "inline-block" }}>
          {button}
        </div>
      )
    }

    return button
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
