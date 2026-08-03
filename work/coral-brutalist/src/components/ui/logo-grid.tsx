"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Logo {
  name: string
  logo?: string
}

interface LogoGridProps {
  logos: Logo[]
  title?: string
  grayscale?: boolean
  className?: string
}

function LogoGrid({ logos, title, grayscale = true, className }: LogoGridProps) {
  return (
    <div className={cn("w-full", className)}>
      {title && (
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-foreground-muted">
          {title}
        </p>
      )}

      <div
        className={cn(
          "grid gap-8 items-center justify-items-center",
          "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        )}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className={cn(
              "flex h-16 w-full items-center justify-center px-4",
              "transition-all duration-300",
              grayscale && "grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
            )}
          >
            {logo.logo ? (
              <Image
                src={logo.logo}
                alt={logo.name}
                width={160}
                height={64}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <div
                className={cn(
                  "flex h-12 w-full items-center justify-center",
                  "rounded-lg border border-border bg-background-secondary",
                  "text-sm font-medium text-foreground-muted"
                )}
              >
                {logo.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export { LogoGrid, type Logo, type LogoGridProps }
