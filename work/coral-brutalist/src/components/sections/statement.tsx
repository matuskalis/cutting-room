"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { TextReveal } from "@/components/ui/text-reveal"
import { AnimatedLine } from "@/components/ui/animated-line"

interface StatementProps {
  text: string
  attribution?: string
  headerTheme?: "dark" | "light"
}

export function Statement({
  text,
  attribution,
  headerTheme = "light",
}: StatementProps) {
  return (
    <section
      className="bg-[#202020] py-28 md:py-36 lg:min-h-screen lg:flex lg:items-center border-t border-[#4d4d4d]"
      data-header-theme={headerTheme}
    >
      <Container>
        <AnimatedLine
          direction="horizontal"
          color="rgba(255,88,65,0.3)"
          duration={1.2}
          className="mb-12 md:mb-16"
        />
        <div style={{ fontSize: "clamp(1.5rem, 3vw + 0.5rem, 3rem)" }}>
          <TextReveal
            text={text}
            as="p"
            splitBy="word"
            variant="mask"
            stagger={0.03}
            className="font-sans font-medium leading-snug text-white/90 max-w-5xl"
          />
        </div>
        {attribution && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mono-label text-[#ff5841] mt-8 md:mt-12"
          >
            {attribution}
          </motion.p>
        )}
      </Container>
    </section>
  )
}
