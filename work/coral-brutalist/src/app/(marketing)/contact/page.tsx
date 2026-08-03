"use client"

import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Linkedin,
  Building2,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionReveal } from "@/components/ui/section-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { ContactForm } from "@/components/sections/contact-form"
import { SubpageHero } from "@/components/sections/subpage-hero"
import { siteConfig } from "@/data/site"

const engagementTypes = [
  {
    icon: MessageSquare,
    title: "General Inquiry",
    description: "Questions about our services or capabilities",
  },
  {
    icon: Building2,
    title: "Federal Procurement",
    description: "Past performance, teaming, or contracting discussions",
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a discovery call with our team",
  },
]

const expectations = [
  "Response within 24 business hours",
  "Initial discovery call to understand your needs",
  "Tailored recommendations for your mission",
  "No-obligation consultation",
]

export default function ContactPage() {
  const { contact, social } = siteConfig

  return (
    <div>
      {/* 1. SubpageHero (coral) */}
      <SubpageHero
        title="Contact."
        eyebrow="Get In Touch"
        description="Connect with our veteran-led team to discuss how we can accelerate your data operations and deliver mission-critical results."
        labelBox={{
          title: "Quick Contact",
          items: [
            { label: "Phone", value: contact.phone },
            { label: "Email", value: contact.email },
          ],
        }}
      />

      {/* 2. Engagement Types (dark) */}
      <section className="bg-[#202020] py-12 border-b border-white/[0.08]" data-header-theme="light">
        <Container>
          <SectionReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {engagementTypes.map((type) => (
                <div
                  key={type.title}
                  className="flex items-start gap-4 p-6 rounded-lg bg-[#2a2a2a] border border-white/[0.08] hover:border-[#ff5841]/30 transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ff5841]/10">
                    <type.icon className="h-6 w-6 text-[#ff5841]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-white">{type.title}</h3>
                    <p className="text-sm text-white/50 mt-1">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 3. Form + Info (dark) */}
      <section className="bg-[#202020] py-20 md:py-28" data-header-theme="light">
        <Container>
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-2">
                <div className="sticky top-32">
                  <div className="mb-10">
                    <p className="mono-label text-[#ff5841] mb-4">What to Expect</p>
                    <ul className="space-y-3">
                      {expectations.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#ff5841] shrink-0 mt-0.5" />
                          <span className="text-white/50">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-white/[0.08] bg-[#2a2a2a] p-6 space-y-5">
                    <h3 className="font-sans font-medium text-white">Direct Contact</h3>

                    <a
                      href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                      className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#ff5841]/20 transition-colors">
                        <Phone className="h-4 w-4 text-white group-hover:text-[#ff5841]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/30">Phone</p>
                        <p className="font-medium">{contact.phone}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#ff5841]/20 transition-colors">
                        <Mail className="h-4 w-4 text-white group-hover:text-[#ff5841]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/30">Email</p>
                        <p className="font-medium">{contact.email}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 text-white/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/30">Location</p>
                        <p className="font-medium">{contact.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-white/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/30">Hours</p>
                        <p className="font-medium">{contact.hours}</p>
                      </div>
                    </div>

                    {social.linkedin && social.linkedin !== "#" && (
                      <div className="pt-4 border-t border-white/[0.08]">
                        <Link
                          href={social.linkedin}
                          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#ff5841] transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          Connect on LinkedIn
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 rounded-lg border-2 border-[#ff5841]/30 bg-[#ff5841]/5 p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff5841]/20">
                        <Shield className="h-6 w-6 text-[#ff5841]" />
                      </div>
                      <div>
                        <p className="font-sans font-medium text-white">SDVOSB Certified</p>
                        <p className="text-sm text-white/50">
                          Service-Disabled Veteran-Owned Small Business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 4. CTA (coral) */}
      <section className="bg-[#ff5841] py-20 md:py-28" data-header-theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              <TextReveal
                text="Need Our Capabilities Statement?"
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-sans font-medium text-[#202020] mb-4"
              />
            </div>
            <p className="text-[#202020]/70 mb-8">
              Request our SDVOSB capabilities statement for procurement and teaming purposes.
            </p>
            <Link
              href="/procurement"
              className="inline-flex items-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
            >
              Request Capabilities Statement
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
