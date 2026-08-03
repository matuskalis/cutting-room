"use client"

import { Container } from "@/components/ui/container"
import { BlogCard } from "@/components/sections/blog-card"
import type { BlogPost } from "@/types"

interface BlogListClientProps {
  posts: BlogPost[]
}

export function BlogListClient({ posts }: BlogListClientProps) {
  return (
    <div>
      {/* ─── CORAL HERO ─── */}
      <section className="relative bg-[#ff5841] pt-32 pb-16 md:pb-20 overflow-hidden">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 items-end">
            <div className="lg:col-span-3">
              <p className="mono-label text-[#202020]/60 mb-4">Insights &amp; Updates</p>
              <h1
                className="font-sans font-bold tracking-tight text-[#202020] leading-[0.95]"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
              >
                Insights.
              </h1>
              <p className="mt-6 text-lg text-[#202020]/70 max-w-xl leading-relaxed">
                Thought leadership on data engineering, AI, and digital transformation
                from the Northbound Systems team.
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-2 bg-[#202020] p-8">
              <p className="mono-label text-[#ff5841] mb-3">Latest</p>
              <p className="text-white/40 font-mono text-xs uppercase tracking-[0.1em]">
                Federal Data Modernization / AI / Cloud
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── BLOG POSTS GRID (light) ─── */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#666666]">
                No posts yet. Check back soon for updates.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
