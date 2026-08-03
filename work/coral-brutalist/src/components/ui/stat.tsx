"use client"

import * as React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  trend?: "up" | "down" | "neutral"
  className?: string
}

function Stat({ value, label, icon, trend, className }: StatProps) {
  const trendConfig = {
    up: {
      icon: TrendingUp,
      color: "text-success",
      bg: "bg-success/10",
    },
    down: {
      icon: TrendingDown,
      color: "text-error",
      bg: "bg-error/10",
    },
    neutral: {
      icon: Minus,
      color: "text-foreground-muted",
      bg: "bg-background-secondary",
    },
  }

  const TrendIcon = trend ? trendConfig[trend].icon : null

  return (
    <div
      className={cn(
        "relative rounded-lg border border-border bg-surface p-6",
        "shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
        "transition-all duration-300",
        "hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground-muted uppercase tracking-wide">
            {label}
          </p>
          <p className="mt-2 text-4xl font-bold text-foreground-strong font-sans tracking-tight">
            {value}
          </p>
        </div>

        {icon && (
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-lg",
              "bg-background-secondary text-foreground-strong",
              "transition-colors duration-200"
            )}
          >
            {icon}
          </div>
        )}
      </div>

      {trend && TrendIcon && (
        <div className="mt-4 flex items-center gap-2">
          <span
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full",
              trendConfig[trend].bg
            )}
          >
            <TrendIcon className={cn("h-3.5 w-3.5", trendConfig[trend].color)} />
          </span>
          <span className={cn("text-sm font-medium", trendConfig[trend].color)}>
            {trend === "up" && "Trending up"}
            {trend === "down" && "Trending down"}
            {trend === "neutral" && "No change"}
          </span>
        </div>
      )}
    </div>
  )
}

export { Stat, type StatProps }
