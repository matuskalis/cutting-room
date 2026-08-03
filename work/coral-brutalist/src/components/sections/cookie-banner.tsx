"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "cookie-consent"
type ConsentValue = "accepted" | "rejected"

export function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(STORAGE_KEY, value)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-[#2a2a2a]/95 backdrop-blur-sm border-t border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-3 text-white">
                  <Cookie className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 md:mt-0" />
                  <p className="text-sm md:text-base text-white/90">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
                    <Link
                      href="/privacy"
                      className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleConsent("rejected")}
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    Reject
                  </Button>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => handleConsent("accepted")}
                  >
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
