import type { Metadata } from "next"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Find the right entry point for your organization's data, compliance, and procurement needs.",
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
