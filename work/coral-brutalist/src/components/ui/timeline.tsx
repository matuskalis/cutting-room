"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  title: string
  description: string
  icon?: React.ReactNode
  period?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <div key={index} className="relative pb-10 last:pb-0">
          {index !== items.length - 1 && (
            <div
              className="absolute left-[15px] top-10 h-[calc(100%-2.5rem)] w-px bg-border"
              aria-hidden="true"
            />
          )}

          <div className="flex gap-6">
            <div className="relative flex-shrink-0">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full",
                  "border border-border bg-surface",
                  "shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
                  "transition-all duration-300",
                  "group-hover:border-accent group-hover:shadow-md"
                )}
              >
                {item.icon ? (
                  <span className="text-foreground-strong">{item.icon}</span>
                ) : (
                  <span className="text-sm font-medium text-foreground-strong">
                    {index + 1}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-1 pt-0.5">
              {item.period && (
                <span className="mb-1 block text-sm font-medium text-accent">
                  {item.period}
                </span>
              )}
              <h4 className="text-lg font-bold text-foreground-strong font-sans tracking-tight">
                {item.title}
              </h4>
              <p className="mt-2 text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { Timeline, type TimelineItem, type TimelineProps }
