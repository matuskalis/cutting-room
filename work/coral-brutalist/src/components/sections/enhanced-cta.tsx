"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, CheckCircle } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { enhancedCTA } from "@/data/homepage"

export function EnhancedCTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Quick Contact",
          email,
          message: "ATO Readiness Review requested via homepage quick-contact form",
        }),
      })
      if (!response.ok) throw new Error("Failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="bg-[#ff5841] py-28 md:py-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mono-label text-[#202020]/60 mb-6">Get Started</p>
          <h2
            className="font-serif font-medium text-[#202020] mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {enhancedCTA.headline}
          </h2>

          {/* Deliverable bullets */}
          <ul className="space-y-3 mb-8">
            {enhancedCTA.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-[#202020]/80">
                <CheckCircle className="h-5 w-5 text-[#202020]/60 flex-shrink-0 mt-0.5" />
                <span className="text-base">{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-[#202020]/60 mb-8 font-mono uppercase tracking-[0.05em]">
            {enhancedCTA.qualifier}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact">
                {enhancedCTA.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-[#202020]/60 text-sm sm:mt-3">
              <Mail className="h-4 w-4" />
              <span>Or email</span>
              <a
                href={`mailto:${enhancedCTA.alternativeContact}`}
                className="text-[#202020] font-medium hover:underline"
              >
                {enhancedCTA.alternativeContact}
              </a>
            </div>
          </div>

          {/* Inline email capture */}
          <div className="mt-8 pt-8 border-t border-[#202020]/15 max-w-md">
            {status === "sent" ? (
              <div className="flex items-center gap-2 text-[#202020]">
                <CheckCircle className="h-5 w-5" />
                <p className="font-mono text-sm uppercase tracking-[0.05em]">
                  We&apos;ll be in touch within 24 hours
                </p>
              </div>
            ) : status === "error" ? (
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sm text-[#202020]/80">
                  Something went wrong. Please try again.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-[#202020] underline hover:no-underline self-start"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="your.email@agency.gov"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#202020] text-white placeholder:text-white/40 px-4 py-3 font-mono text-sm rounded-none border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-[#202020] text-[#ff5841] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] font-bold hover:bg-[#333333] transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "..." : "Send"}
                </button>
              </form>
            )}
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#202020]/40 mt-2">
              Quick contact — we&apos;ll reach out to schedule your assessment
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
