import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "@/types"

const blogDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "")
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        content,
        author: data.author || "Northbound Team",
        publishedAt: data.publishedAt || "",
        tags: data.tags || [],
        coverImage: data.coverImage,
      } as BlogPost
    })

  return allPosts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) return 1
    if (a.publishedAt > b.publishedAt) return -1
    return 0
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const mdPath = path.join(blogDirectory, `${slug}.md`)

    let filePath = fullPath
    if (!fs.existsSync(fullPath)) {
      if (fs.existsSync(mdPath)) {
        filePath = mdPath
      } else {
        return null
      }
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      content,
      author: data.author || "Northbound Team",
      publishedAt: data.publishedAt || "",
      tags: data.tags || [],
      coverImage: data.coverImage,
    }
  } catch {
    return null
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.mdx?$/, ""))
}
