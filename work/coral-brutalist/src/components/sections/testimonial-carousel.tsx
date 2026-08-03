"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { testimonials } from "@/data/testimonials"

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (isPaused) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  const testimonial = testimonials[current]

  return (
    <section className="bg-[#1a1a1a] py-28" data-header-theme="light">
      <Container>
        <div
          className="max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <p className="mono-label text-[#ff5841] mb-8">What Partners Say</p>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-serif text-[#ff5841] text-6xl leading-none block mb-4">
                &ldquo;
              </span>
              <blockquote
                className="font-serif italic text-white leading-relaxed mb-8"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                {testimonial.quote}
              </blockquote>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-white/40">
                {testimonial.author} &mdash; {testimonial.title},{" "}
                {testimonial.organization}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-10">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current
                    ? "bg-[#ff5841]"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
