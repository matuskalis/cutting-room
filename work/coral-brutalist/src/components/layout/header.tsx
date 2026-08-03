"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/data/site"
import { MobileNav } from "./mobile-nav"

type HeaderTheme = "light" | "dark"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [headerTheme, setHeaderTheme] = React.useState<HeaderTheme>("light")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  React.useEffect(() => {
    let scrollTriggers: Array<{ kill: () => void }> = []

    async function setupScrollTriggers() {
      const gsapModule = await import("gsap")
      const scrollTriggerModule = await import("gsap/ScrollTrigger")

      const { gsap } = gsapModule
      const { ScrollTrigger } = scrollTriggerModule

      gsap.registerPlugin(ScrollTrigger)

      const sections = document.querySelectorAll<HTMLElement>("[data-header-theme]")

      if (sections.length === 0) {
        setHeaderTheme("light")
        return
      }

      sections.forEach((section) => {
        const theme = section.getAttribute("data-header-theme") as HeaderTheme

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 80px",
          end: "bottom 80px",
          onEnter: () => setHeaderTheme(theme),
          onEnterBack: () => setHeaderTheme(theme),
        })

        scrollTriggers.push(trigger)
      })
    }

    setupScrollTriggers()

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? headerTheme === "light"
              ? "bg-[#202020]/90 backdrop-blur-md"
              : "bg-white/90 backdrop-blur-md"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/northbound-wordmark.svg"
                alt="Northbound Systems"
                width={180}
                height={56}
                className={cn(
                  "h-14 w-auto transition-all duration-500",
                  headerTheme === "light" ? "brightness-0 invert" : ""
                )}
                priority
              />
            </Link>

            {/* Desktop Primary Nav Links — visible at lg: */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
              {siteConfig.navigation.primary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-500",
                    headerTheme === "light"
                      ? "text-white/60 hover:text-white"
                      : "text-[#202020]/60 hover:text-[#202020]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* MENU Button */}
            <button
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5",
                "font-mono text-xs uppercase tracking-[0.1em] font-medium",
                "transition-all duration-500",
                headerTheme === "light"
                  ? isScrolled
                    ? "bg-[#202020] text-white border border-white/10"
                    : "bg-[#202020]/80 backdrop-blur-sm text-white"
                  : isScrolled
                    ? "bg-white text-[#202020] border border-[#202020]/10"
                    : "bg-white/80 backdrop-blur-sm text-[#202020]"
              )}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Menu Overlay */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  )
}
