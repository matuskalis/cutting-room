"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface QuoteProps {
  quote: string
  author: string
  title?: string
  company?: string
  image?: string
  className?: string
}

function Quote({ quote, author, title, company, image, className }: QuoteProps) {
  return (
    <figure
      className={cn(
        "relative rounded-lg border border-border bg-surface p-8",
        "shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
        "transition-all duration-300",
        "hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      <svg
        className="absolute left-6 top-6 h-8 w-8 text-accent/30"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>

      <blockquote className="relative z-10 pt-6">
        <p className="text-xl font-sans italic leading-relaxed text-foreground">
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-4">
        {image && (
          <div
            className={cn(
              "h-12 w-12 flex-shrink-0 overflow-hidden rounded-full",
              "border-2 border-accent/20",
              "transition-all duration-300",
              "group-hover:border-accent"
            )}
          >
            <img
              src={image}
              alt={author}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-col">
          <span className="font-semibold text-foreground-strong">{author}</span>
          {(title || company) && (
            <span className="text-sm text-foreground-muted">
              {title}
              {title && company && " at "}
              {company && <span className="font-medium">{company}</span>}
            </span>
          )}
        </div>
      </figcaption>
    </figure>
  )
}

export { Quote, type QuoteProps }
