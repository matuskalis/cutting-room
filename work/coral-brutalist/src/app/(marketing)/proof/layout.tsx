import type { Metadata } from "next"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Compliance Library",
  description: "Controlled compliance documentation, authorization boundary references, and assessment templates available to qualified federal evaluators and prime contractors.",
}

export default function ProofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
