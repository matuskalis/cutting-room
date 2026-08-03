import { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { BlogListClient } from "./blog-list-client"

export const metadata: Metadata = {
  title: "Blog",
  description: "Thought leadership on data engineering, AI, and digital transformation from the Northbound Systems team.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogListClient posts={posts} />
}
