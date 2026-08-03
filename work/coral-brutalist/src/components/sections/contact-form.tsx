"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "health-data", label: "Health Data Modernization" },
  { value: "logistics-analytics", label: "Logistics & Readiness Analytics" },
  { value: "data-lakehouse", label: "Data Lakehouse Engineering" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "cloud-modernization", label: "Cloud & Infrastructure Modernization" },
  { value: "federal-procurement", label: "Federal Procurement / Teaming" },
  { value: "other", label: "Other / General Inquiry" },
] as const

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [status, setStatus] = React.useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      )
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-white/10 bg-[#2a2a2a] p-8 md:p-12 shadow-sm"
      >
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-900/20 border-2 border-green-500/30">
            <CheckCircle className="h-10 w-10 text-green-400" />
          </div>
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-white">
            Message Sent Successfully
          </h3>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Thank you for reaching out. Our team will review your message and get back
            to you within 24 business hours.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#2a2a2a] p-6 md:p-10 shadow-sm">
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="font-sans text-2xl font-bold text-white md:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 text-white/50">
          Fill out the form below and we&apos;ll be in touch shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white"
            >
              Full Name <span className="text-accent">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              error={!!errors.name}
              disabled={status === "submitting"}
              className="h-12"
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Work Email <span className="text-accent">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@agency.gov"
              error={!!errors.email}
              disabled={status === "submitting"}
              className="h-12"
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-accent flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company & Phone Row */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-white"
            >
              Organization
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Department / Agency / Company"
              disabled={status === "submitting"}
              className="h-12"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-white"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              disabled={status === "submitting"}
              className="h-12"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-white"
          >
            How Can We Help?
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              "flex h-12 w-full rounded-lg border px-4 py-2 text-base transition-all duration-200",
              "bg-[#2a2a2a] text-white",
              "placeholder:text-white/30",
              "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#202020]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "border-white/10 hover:border-white/20 focus:border-accent",
              "[&>option]:bg-[#2a2a2a] [&>option]:text-white"
            )}
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            Your Message <span className="text-accent">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, timeline, and how we can help..."
            error={!!errors.message}
            disabled={status === "submitting"}
            rows={5}
            className="resize-none"
          />
          {errors.message && (
            <p className="mt-1.5 text-sm text-accent flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Error Message */}
        {status === "error" && (
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-accent">{errorMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full h-14 text-base font-semibold"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <span className="animate-pulse">Sending...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
          <p className="mt-4 text-center text-xs text-white/50">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            . We&apos;ll never share your information.
          </p>
        </div>
      </form>
    </div>
  )
}
