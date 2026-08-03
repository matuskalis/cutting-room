import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  showDivider?: boolean
  dividerVariant?: "gold" | "subtle"
  dark?: boolean
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      eyebrow,
      title,
      description,
      align = "left",
      showDivider = false,
      dividerVariant = "gold",
      dark = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-12 md:mb-16",
          align === "center" && "text-center",
          eyebrow && "accent-line",
          className
        )}
        {...props}
      >
        {eyebrow && (
          <p className={cn(
            "mono-label mb-4",
            dark ? "text-[#ff5841]" : "text-[#202020]/60"
          )}>
            {eyebrow}
          </p>
        )}
        <h2 className={cn(
          "font-serif font-bold",
          "text-[length:var(--text-display-section)]",
          dark ? "text-white" : "text-[#202020]"
        )}>
          {title}
        </h2>
        {showDivider && (
          <div
            className={cn(
              "mt-4",
              align === "center" && "mx-auto",
              dividerVariant === "gold" && "w-16 h-1 bg-[#ff5841]",
              dividerVariant === "subtle" && "w-24 h-px bg-white/10"
            )}
          />
        )}
        {description && (
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed",
              dark ? "text-[#999999]" : "text-[#666666]",
              align === "center" && "max-w-2xl mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader }
