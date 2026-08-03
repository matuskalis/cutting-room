"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Application error:", error)
    }
  }, [error])

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
        <AlertTriangle className="h-10 w-10 text-accent" />
      </div>

      <h1 className="font-sans text-3xl font-bold text-white sm:text-4xl">
        Something went wrong
      </h1>

      <p className="mt-4 max-w-md text-lg text-white/50">
        We encountered an unexpected issue. Our team has been notified and is
        working to resolve it.
      </p>

      {error.digest && (
        <p className="mt-2 text-sm text-white/40">
          Reference: {error.digest}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button onClick={reset} variant="primary" size="md">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>

        <Button asChild variant="secondary" size="md">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </Container>
  )
}
