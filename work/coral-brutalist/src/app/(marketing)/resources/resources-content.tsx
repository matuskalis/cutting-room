"use client"

import Link from "next/link"
import {
  FileText,
  ArrowRight,
  Calendar,
  Lightbulb,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { DownloadForm } from "@/components/sections/download-form"
import type { BlogPost } from "@/types"

interface ResourcesContentProps {
  posts: BlogPost[]
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function ResourcesContent({ posts }: ResourcesContentProps) {
  return (
    <div>
      {/* ─── CORAL HERO ─── */}
      <section className="relative bg-[#ff5841] pt-32 pb-16 md:pb-20 overflow-hidden">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 items-end">
            <div className="lg:col-span-3">
              <p className="mono-label text-[#202020]/60 mb-4">Knowledge Hub</p>
              <h1
                className="font-sans font-bold tracking-tight text-[#202020] leading-[0.95]"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
              >
                Resources.
              </h1>
              <p className="mt-6 text-lg text-[#202020]/70 max-w-xl leading-relaxed">
                Insights, guides, and tools to support your digital
                transformation journey.
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-2 bg-[#202020] p-8">
              <p className="mono-label text-[#ff5841] mb-3">Library</p>
              <p className="text-white/40 font-mono text-xs uppercase tracking-[0.1em]">
                Downloads / Insights / Procurement
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CAPABILITIES STATEMENT DOWNLOAD (dark) ─── */}
      <section className="bg-[#202020] py-20 md:py-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left side - Description */}
                <div className="p-8 md:p-10 lg:p-12 bg-[#ff5841]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#202020] mb-6">
                    <FileText className="h-7 w-7 text-white" />
                  </div>

                  <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#202020] mb-4">
                    Download Our Capabilities Statement
                  </h2>

                  <p className="text-[#202020]/70 mb-6 leading-relaxed">
                    Get a comprehensive overview of Northbound Systems&apos;s
                    services, certifications, and past performance. Our
                    capabilities statement includes:
                  </p>

                  <ul className="space-y-3 text-[#202020]/80">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#202020]" />
                      <span>Complete service portfolio and core competencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#202020]" />
                      <span>SDVOSB certification details and NAICS codes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#202020]" />
                      <span>Past performance highlights and case studies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#202020]" />
                      <span>Technology partnerships and differentiators</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-[#202020]/20">
                    <p className="text-sm text-[#202020]/60">
                      Perfect for contracting officers, prime contractors, and
                      potential partners evaluating Northbound Systems for federal
                      and commercial engagements.
                    </p>
                  </div>
                </div>

                {/* Right side - Form */}
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <Lightbulb className="h-5 w-5 text-[#ff5841]" />
                    <span className="text-sm font-medium text-white/50">
                      Free Download
                    </span>
                  </div>

                  <DownloadForm
                    resourceName="Capabilities Statement"
                    resourceDescription="Complete the form below to receive instant access to our capabilities statement PDF."
                    downloadUrl="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── PROCUREMENT RESOURCES (light) ─── */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <Container>
          <p className="mono-label text-[#202020]/60 mb-4 text-center">Federal</p>
          <h2 className="font-sans font-bold text-3xl text-[#202020] md:text-4xl text-center mb-4">
            Procurement Resources
          </h2>
          <p className="text-[#666666] text-center max-w-2xl mx-auto mb-12">
            Federal contracting information, capabilities documentation, and
            engagement pathways for government buyers.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                title: "Capabilities Statement",
                description:
                  "Federal-formatted overview of services, certifications, and NAICS codes.",
                href: "/procurement",
              },
              {
                title: "Past Performance",
                description:
                  "Engagement summaries with environments, constraints, and measurable outcomes.",
                href: "/procurement",
              },
              {
                title: "Teaming Inquiry",
                description:
                  "Structured discussions for prime contractors seeking SDVOSB partners.",
                href: "/contact",
              },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <div className="group bg-white rounded-lg border border-[#202020]/5 p-8 h-full text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-semibold text-[#202020] mb-2 group-hover:text-[#ff5841] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666666]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/procurement"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#202020]/20 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/5 transition-colors"
            >
              Federal Procurement Hub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── BLOG / INSIGHTS (dark) ─── */}
      <section className="bg-[#202020] py-20 md:py-28">
        <Container>
          <p className="mono-label text-[#ff5841] mb-4">Insights</p>
          <h2 className="font-sans font-bold text-3xl text-white md:text-4xl mb-4">
            Latest Insights
          </h2>
          <p className="text-white/50 max-w-2xl mb-12">
            Thought leadership on data engineering, AI, and digital
            transformation from our expert team.
          </p>

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="group bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-8 h-full hover:border-[#ff5841]/30 transition-all">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-white mb-3 group-hover:text-[#ff5841] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/40 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/30">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-[#ff5841] opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/50 text-lg">
                Insights coming soon &mdash; check back for thought leadership on
                federal data modernization.
              </p>
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-white/5 transition-colors"
            >
              View All Insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── CTA (coral) ─── */}
      <section className="bg-[#ff5841] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mono-label text-[#202020]/60 mb-4">Get Started</p>
            <h2 className="font-sans font-bold text-3xl text-[#202020] md:text-4xl mb-6">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-lg text-[#202020]/70 mb-8">
              Let&apos;s discuss how Northbound Systems can help you achieve your
              mission-critical objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
              >
                Request Architecture Review
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202020]/30 px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
