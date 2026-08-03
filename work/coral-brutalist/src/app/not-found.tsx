import { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved.",
}

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-[#2a2a2a] bg-precision-grid">
      <Container className="py-20 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[8rem] font-bold leading-none tracking-tight text-accent md:text-[12rem]">
            404
          </p>

          <h1 className="mt-6 font-sans text-3xl font-bold tracking-tight text-white md:text-4xl">
            Page Not Found
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />

          <p className="mt-6 text-lg text-white/50">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href="/">Return Home</Link>
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <p className="mt-12 text-sm text-white/50">
            Need help finding something?{" "}
            <Link
              href="/contact"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Get in touch
            </Link>{" "}
            with our team.
          </p>
        </div>
      </Container>
    </div>
  )
}
