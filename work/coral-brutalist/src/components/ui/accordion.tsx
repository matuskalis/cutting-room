"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  id: string
  trigger: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  type?: "single" | "multiple"
  className?: string
}

function Accordion({ items, type = "single", className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)

      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (type === "single") {
          newSet.clear()
        }
        newSet.add(id)
      }

      return newSet
    })
  }

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id)

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-lg border border-border bg-surface",
              "shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
              "transition-all duration-300",
              isOpen && "shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                "flex w-full items-center justify-between px-6 py-4",
                "text-left transition-colors duration-200",
                "hover:bg-background-secondary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset",
                "rounded-lg"
              )}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-foreground-strong pr-4">
                {item.trigger}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-shrink-0 text-foreground-muted"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-0">
                    <div className="border-t border-border pt-4 text-foreground-muted leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export { Accordion, type AccordionItem, type AccordionProps }
