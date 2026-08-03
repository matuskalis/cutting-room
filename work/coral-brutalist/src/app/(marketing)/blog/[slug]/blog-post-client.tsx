"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/types"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

interface BlogPostClientProps {
  post: BlogPost
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <>
      {/* Hero Section */}
        <Section
          enableGrid
          className="relative pt-40 pb-12 overflow-hidden"
        >
          {/* Gradient Glow Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.1)_0%,transparent_70%)]" />
          </div>

          <Container className="relative z-10">
            <motion.div
              className="max-w-3xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Back Link */}
              <motion.div variants={fadeInUp} className="mb-8">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Insights
                  </Link>
                </Button>
              </motion.div>

              {/* Tags */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 text-white"
              >
                {post.title}
              </motion.h1>

              {/* Meta */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-6 text-white/50"
              >
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section className="bg-[#2a2a2a] pt-0 pb-16">
          <Container>
            <motion.article
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="glass rounded-xl p-8 md:p-12">
                <div className="prose prose-invert prose-lg max-w-none">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    const trimmed = paragraph.trim()
                    if (!trimmed) return null
                    return (
                      <p key={index} className="text-white/50 leading-relaxed mb-6 last:mb-0">
                        {trimmed}
                      </p>
                    )
                  })}
                </div>
              </div>

              {/* CTA Section */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-white/50 mb-6">
                  Interested in learning more about our solutions?
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Request Architecture Review
                  </Link>
                </Button>
              </motion.div>
            </motion.article>
          </Container>
        </Section>
    </>
  )
}
