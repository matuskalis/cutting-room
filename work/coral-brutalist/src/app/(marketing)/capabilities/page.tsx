"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Download,
  FileText,
  CheckCircle,
  ArrowRight,
  Shield,
  Mail,
  Building,
  Building2,
  Hash,
  Award,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SubpageHero } from "@/components/sections/subpage-hero"
import { SectionReveal } from "@/components/ui/section-reveal"

const contractingInfo = {
  cageCode: "Available on Request",
  uei: "Available on Request",
  naicsCodes: [
    { code: "541511", description: "Custom Computer Programming Services" },
    { code: "541512", description: "Computer Systems Design Services" },
    { code: "541519", description: "Other Computer Related Services" },
    { code: "518210", description: "Data Processing & Hosting Services" },
  ],
  setAsides: ["SDVOSB"],
}

const capabilitiesContents = [
  "Company overview and SDVOSB certification",
  "Core service offerings with deliverables",
  "Technical capabilities and platforms",
  "Past performance summaries",
  "Key personnel qualifications",
  "Contract vehicles and NAICS codes",
]

const differentiators = [
  {
    title: "Veteran Leadership",
    description: "Service-disabled veteran ownership with military discipline and mission focus",
  },
  {
    title: "Security-First Delivery",
    description: "Architectures designed for FedRAMP, HIPAA, and DoD IL4/IL5 environments",
  },
  {
    title: "Proven Federal Experience",
    description: "Track record with healthcare agencies, defense logistics, and research institutions",
  },
]

export default function CapabilitiesPage() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  const handleDirectDownload = () => {
    window.location.href = "mailto:contact@northboundsystems.example?subject=Capabilities%20Statement%20Request"
  }

  return (
    <div>
      {/* Redirect Banner */}
      <div className="bg-[#2a2a2a] text-white text-center py-3 text-sm border-b border-white/[0.08]">
        This page has moved.{" "}
        <Link href="/procurement" className="underline font-semibold hover:text-[#ff5841] transition-colors">
          Visit our Federal Procurement Hub &rarr;
        </Link>
      </div>

      <SubpageHero
        title="Capabilities."
        eyebrow="SDVOSB Statement"
        description="Our capabilities statement covers service offerings, past performance, and contract vehicles — formatted for federal acquisition teams and teaming partners."
        labelBox={{
          title: "Procurement Ready",
          items: [{ label: "2-Page Statement / PDF Format" }],
        }}
      />

      {/* ─── FEDERAL IDENTIFIERS (dark) ─── */}
      <section className="bg-[#202020] py-16 border-b border-white/[0.08]" data-header-theme="light">
        <Container>
        <SectionReveal>
          <p className="mono-label text-[#ff5841] mb-4">Identifiers</p>
          <h2 className="font-sans font-bold text-2xl text-white mb-8 text-center">
            Federal Contracting Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-5">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="h-4 w-4 text-[#ff5841]" />
                <p className="mono-label text-white/40">CAGE Code</p>
              </div>
              <p className="font-medium text-white">{contractingInfo.cageCode}</p>
            </div>

            <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-5">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-[#ff5841]" />
                <p className="mono-label text-white/40">UEI</p>
              </div>
              <p className="font-medium text-white">{contractingInfo.uei}</p>
            </div>

            <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-5">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-[#ff5841]" />
                <p className="mono-label text-white/40">Set-Asides</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {contractingInfo.setAsides.map((setAside) => (
                  <span key={setAside} className="inline-flex rounded-full bg-[#ff5841] px-3 py-1 text-xs font-bold text-[#202020]">
                    {setAside}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-5">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-[#ff5841]" />
                <p className="mono-label text-white/40">Primary NAICS</p>
              </div>
              <p className="font-medium text-white">541512</p>
            </div>
          </div>

          <div className="mt-6 bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-5">
            <p className="mono-label text-white/40 mb-3">All NAICS Codes</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {contractingInfo.naicsCodes.map((naics) => (
                <div key={naics.code} className="flex items-center gap-2">
                  <span className="font-mono text-sm font-medium text-[#ff5841]">{naics.code}</span>
                  <span className="text-sm text-white/50">- {naics.description}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
        </Container>
      </section>

      {/* ─── MAIN CONTENT (light) ─── */}
      <section className="bg-[#f5f5f5] py-20 md:py-28" data-header-theme="dark">
        <Container>
        <SectionReveal>
          <div className="grid gap-16 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Left: What's inside */}
            <div>
              <p className="mono-label text-[#202020]/60 mb-4">Contents</p>
              <h2 className="font-sans font-bold text-2xl text-[#202020] mb-6">
                What&apos;s Included
              </h2>

              <ul className="space-y-4 mb-10">
                {capabilitiesContents.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff5841] mt-0.5 flex-shrink-0" />
                    <span className="text-[#666666]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-white rounded-lg border border-[#202020]/5">
                <h3 className="font-semibold text-[#202020] mb-4">
                  Why Northbound Systems
                </h3>
                <div className="space-y-4">
                  {differentiators.map((item) => (
                    <div key={item.title}>
                      <p className="font-medium text-[#202020] text-sm">{item.title}</p>
                      <p className="text-sm text-[#666666]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Request form */}
            <div>
              <div className="p-8 bg-white rounded-lg border border-[#202020]/5 shadow-sm">
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#f5f5f5]">
                        <Download className="h-6 w-6 text-[#202020]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#202020]">
                          Request PDF
                        </h3>
                        <p className="text-sm text-[#666666]">
                          2-page capabilities overview
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#202020] mb-1.5">
                          Work email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#202020]/10 rounded-lg bg-[#f5f5f5] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#ff5841]/20 focus:border-[#ff5841]"
                            placeholder="you@agency.gov"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#202020] mb-1.5">
                          Organization
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                          <input
                            type="text"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#202020]/10 rounded-lg bg-[#f5f5f5] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#ff5841]/20 focus:border-[#ff5841]"
                            placeholder="Department / Agency / Prime"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5841] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#ff6e59] transition-colors disabled:opacity-50"
                      >
                        {loading ? (
                          "Sending request..."
                        ) : (
                          <>
                            <Mail className="h-4 w-4" />
                            Request Capabilities Statement
                          </>
                        )}
                      </button>
                    </form>

                    <div className="text-center">
                      <button
                        onClick={handleDirectDownload}
                        className="text-sm text-[#666666] hover:text-[#202020] underline underline-offset-2"
                      >
                        Or email contact@northboundsystems.example directly
                      </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#202020]/5">
                      <div className="flex items-center gap-2 text-sm text-[#666666]">
                        <Shield className="h-4 w-4" />
                        <span>For procurement and teaming purposes only.</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-50">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-sans font-bold text-2xl text-[#202020] mb-2">
                      Request received
                    </h3>
                    <p className="text-[#666666] mb-6">
                      We&apos;ll send the capabilities statement to your email within one business day.
                    </p>
                    <p className="text-sm text-[#666666]">
                      Questions? Contact{" "}
                      <a href="mailto:contact@northboundsystems.example" className="text-[#ff5841] underline">
                        contact@northboundsystems.example
                      </a>
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 p-6 bg-white rounded-lg border border-[#202020]/5 text-center">
                <p className="text-[#666666] mb-4">
                  Ready to discuss teaming opportunities?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#202020]/20 px-6 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[#202020] font-bold hover:bg-[#202020]/5 transition-colors"
                >
                  Schedule a conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
        </Container>
      </section>
    </div>
  )
}
