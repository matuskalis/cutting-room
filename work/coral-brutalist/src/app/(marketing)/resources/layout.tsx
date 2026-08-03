import type { Metadata } from "next"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Insights, guides, and tools to support your digital transformation journey.",
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
