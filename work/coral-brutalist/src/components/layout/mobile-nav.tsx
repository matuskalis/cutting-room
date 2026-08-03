"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const navSections = [
  {
    title: "Services",
    links: [
      { name: "Health Data Modernization", href: "/services/health-data" },
      { name: "Logistics & Readiness", href: "/services/logistics-analytics" },
      { name: "Data Lakehouse Engineering", href: "/services/data-lakehouse" },
      { name: "AI & Machine Learning", href: "/services/ai-ml" },
      { name: "Cloud Modernization", href: "/services/cloud-modernization" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Insights", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Procurement", href: "/procurement" },
      { name: "Technology", href: "/technology" },
    ],
  },
]

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const lenis = useSmoothScroll()

  React.useEffect(() => {
    if (isOpen) {
      if (lenis) {
        lenis.stop()
      } else {
        document.body.style.overflow = "hidden"
      }
    } else {
      if (lenis) {
        lenis.start()
      } else {
        document.body.style.overflow = ""
      }
    }

    return () => {
      if (lenis) {
        lenis.start()
      }
      document.body.style.overflow = ""
    }
  }, [isOpen, lenis])

  // Handle Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // Focus trap
  React.useEffect(() => {
    if (!isOpen || !overlayRef.current) return

    const overlay = overlayRef.current
    const focusableSelector =
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      const focusableElements = overlay.querySelectorAll(focusableSelector)
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    overlay.addEventListener("keydown", handleTabKey)

    // Focus the close button when the menu opens
    const closeButton = overlay.querySelector("button") as HTMLElement | null
    closeButton?.focus()

    return () => {
      overlay.removeEventListener("keydown", handleTabKey)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-50 bg-[#202020]"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-full flex-col overflow-y-auto">
            {/* Header Bar */}
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center" onClick={onClose}>
                <Image
                  src="/logos/northbound-wordmark.svg"
                  alt="Northbound Systems"
                  width={180}
                  height={56}
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>
              <button
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] font-medium text-white transition-colors hover:bg-white/20"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Navigation Content */}
            <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
              <div className="mx-auto max-w-7xl">
                {/* Primary Links — Large */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <p className="mono-label text-[#ff5841] mb-6">Primary</p>
                  <div className="space-y-4">
                    {siteConfig.navigation.primary.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.15 }}
                      >
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between border-b border-white/10 pb-4 transition-colors hover:border-[#ff5841]"
                          onClick={onClose}
                        >
                          <span className="text-3xl sm:text-4xl font-sans font-bold uppercase tracking-tight text-white group-hover:text-[#ff5841] transition-colors">
                            {item.name}
                          </span>
                          <ArrowUpRight className="h-6 w-6 text-white/30 group-hover:text-[#ff5841] transition-colors" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Secondary Links — Smaller grid */}
                <motion.div
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <p className="mono-label text-white/30 mb-4">Explore</p>
                  <div className="grid grid-cols-2 gap-3">
                    {siteConfig.navigation.secondary.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-2 border border-white/[0.06] px-4 py-3 hover:border-[#ff5841]/30 transition-colors"
                        onClick={onClose}
                      >
                        <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/20 group-hover:text-[#ff5841] transition-colors ml-auto" />
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Sectioned Sub-links */}
                <motion.div
                  className="grid gap-10 sm:grid-cols-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {navSections.map((section) => (
                    <div key={section.title}>
                      <p className="mono-label text-[#ff5841] mb-4">
                        {section.title}
                      </p>
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="text-sm text-white/60 hover:text-white transition-colors"
                              onClick={onClose}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-6">
              <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff5841] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] font-semibold text-[#202020] hover:bg-[#ff6e59] transition-colors"
                  onClick={onClose}
                >
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
