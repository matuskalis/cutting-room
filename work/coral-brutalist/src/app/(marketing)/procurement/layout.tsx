import type { Metadata } from "next"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Federal Procurement",
  description: "Everything federal buyers need to evaluate, procure, and partner with Northbound Systems.",
}

export default function ProcurementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
