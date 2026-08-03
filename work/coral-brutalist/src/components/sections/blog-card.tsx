"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/types"

interface BlogCardProps {
  post: BlogPost
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full cursor-pointer group">
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="group-hover:text-accent-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
          <motion.span
            className="flex items-center gap-1 text-sm font-medium text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            Read more
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </CardFooter>
      </Card>
    </Link>
  )
}
