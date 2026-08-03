import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Lazy initialization to avoid build-time errors when API key is not set
let resend: Resend | null = null
function getResendClient(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

// Rate limiting: 5 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  // Clean up expired entry if found
  if (record && now > record.resetTime) {
    rateLimitMap.delete(ip)
  }

  const currentRecord = rateLimitMap.get(ip)
  if (!currentRecord) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true }
  }

  if (currentRecord.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((currentRecord.resetTime - now) / 1000)
    return { allowed: false, retryAfter }
  }

  currentRecord.count++
  return { allowed: true }
}

// Escape HTML to prevent XSS in email content
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown"

    // Check rate limit
    const rateLimitResult = checkRateLimit(ip)
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfter),
          },
        }
      )
    }

    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }

    if (!body.email || !body.email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    if (!body.message || !body.message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Send email with Resend
    const { error } = await getResendClient().emails.send({
      from: "Northbound Contact <noreply@northboundsystems.example>",
      to: ["contact@northboundsystems.example"],
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(body.company || "Not provided")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(body.phone || "Not provided")}</p>
        <p><strong>Service Interest:</strong> ${escapeHtml(body.service || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(body.message)}</p>
      `,
    })

    if (error) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you shortly.",
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
