import { getAllPosts } from "@/lib/blog"
import { ResourcesContent } from "./resources-content"

export default function ResourcesPage() {
  const blogPosts = getAllPosts()
  return <ResourcesContent posts={blogPosts.slice(0, 3)} />
}
