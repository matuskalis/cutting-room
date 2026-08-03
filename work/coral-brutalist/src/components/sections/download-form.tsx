"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle } from "lucide-react"

interface DownloadFormData {
  name: string
  email: string
  company: string
}

interface FormErrors {
  name?: string
  email?: string
}

type FormStatus = "idle" | "submitting" | "success"

interface DownloadFormProps {
  resourceName: string
  resourceDescription?: string
  downloadUrl?: string
}

export function DownloadForm({
  resourceName,
  resourceDescription,
  downloadUrl = "#",
}: DownloadFormProps) {
  const [formData, setFormData] = React.useState<DownloadFormData>({
    name: "",
    email: "",
    company: "",
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [status, setStatus] = React.useState<FormStatus>("idle")

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

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    // Simulate brief processing time
    await new Promise((resolve) => setTimeout(resolve, 800))

    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/20">
          <CheckCircle className="h-7 w-7 text-success" />
        </div>
        <h4 className="mb-2 text-lg font-semibold text-white">
          Thank You!
        </h4>
        <p className="mb-6 text-white/50 text-sm">
          Your download is ready. Click below to access your resource.
        </p>
        <Button
          variant="gold"
          size="lg"
          className="w-full"
          onClick={() => window.open(downloadUrl, "_blank")}
        >
          <Download className="h-4 w-4 mr-2" />
          Download {resourceName}
        </Button>
        <p className="mt-4 text-xs text-white/50">
          A copy has also been sent to your email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {resourceDescription && (
        <p className="text-sm text-white/50 mb-4">
          {resourceDescription}
        </p>
      )}

      <div>
        <label
          htmlFor="download-name"
          className="mb-2 block text-sm font-medium text-white"
        >
          Name <span className="text-error">*</span>
        </label>
        <Input
          id="download-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Smith"
          error={!!errors.name}
          disabled={status === "submitting"}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="download-email"
          className="mb-2 block text-sm font-medium text-white"
        >
          Work Email <span className="text-error">*</span>
        </label>
        <Input
          id="download-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          error={!!errors.email}
          disabled={status === "submitting"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="download-company"
          className="mb-2 block text-sm font-medium text-white"
        >
          Company <span className="text-white/50">(Optional)</span>
        </label>
        <Input
          id="download-company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your organization"
          disabled={status === "submitting"}
        />
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full mt-6"
        isLoading={status === "submitting"}
      >
        {status === "submitting" ? (
          "Processing..."
        ) : (
          <>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </>
        )}
      </Button>

      <p className="text-xs text-white/50 text-center mt-4">
        By downloading, you agree to receive occasional updates from Northbound Systems.
        You can unsubscribe at any time.
      </p>
    </form>
  )
}
