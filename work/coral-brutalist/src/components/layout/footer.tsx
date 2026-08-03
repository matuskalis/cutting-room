import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
} from "lucide-react"
import { siteConfig } from "@/data/site"
import { FooterBrandReveal } from "@/components/ui/footer-brand-reveal"

const footerServices = [
  { name: "Health Data Modernization", href: "/services/health-data" },
  { name: "Logistics & Readiness", href: "/services/logistics-analytics" },
  { name: "Data Lakehouse Engineering", href: "/services/data-lakehouse" },
  { name: "AI & Machine Learning", href: "/services/ai-ml" },
  { name: "Cloud Modernization", href: "/services/cloud-modernization" },
]

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Procurement", href: "/procurement" },
  { name: "Compliance Library", href: "/proof" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#ff5841]">
      {/* ─── GET IN TOUCH Section ─── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid gap-8 md:grid-cols-3 border-b border-[#202020]/10 pb-12">
          <div>
            <p className="mono-label text-[#202020]/50 mb-4">Get in Touch</p>
            <p className="text-2xl font-sans font-medium text-[#202020]">
              Let&apos;s discuss your mission.
            </p>
          </div>
          <div>
            <p className="mono-label text-[#202020]/50 mb-4">Phone</p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-xl font-sans font-semibold text-[#202020] hover:text-[#202020]/70 transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <div>
            <p className="mono-label text-[#202020]/50 mb-4">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-xl font-sans font-semibold text-[#202020] hover:text-[#202020]/70 transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        {/* ─── DARK NAV CARD ─── */}
        <div className="mt-12 bg-[#202020] rounded-2xl p-8 md:p-12">
          {/* Nav columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {/* Logo + Tagline */}
            <div>
              <Link href="/">
                <Image
                  src="/logos/northbound-wordmark.svg"
                  alt="Northbound Systems"
                  width={150}
                  height={48}
                  className="h-12 w-auto brightness-0 invert mb-4"
                />
              </Link>
              <p className="text-sm text-white/40 leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="mono-label text-[#ff5841] mb-4">Services</p>
              <ul className="space-y-2.5">
                {footerServices.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + Contact */}
            <div>
              <p className="mono-label text-[#ff5841] mb-4">Company</p>
              <ul className="space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 pt-6 mt-6 border-t border-[#4d4d4d]">
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <MapPin className="h-3.5 w-3.5" />
                  {siteConfig.contact.address}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <Phone className="h-3.5 w-3.5" />
                  {siteConfig.contact.phone}
                </div>
              </div>
            </div>
          </div>

          {/* SDVOSB + Address bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#4d4d4d] pt-8 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/certification-badge.svg"
                alt="SDVOSB Certified"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <p className="mono-label text-white/40">Built for Mission</p>
                <p className="text-xs text-white/20">Service-Disabled Veteran-Owned Small Business</p>
              </div>
            </div>
            {siteConfig.social.linkedin && siteConfig.social.linkedin !== "#" && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Giant Brand Text */}
          <FooterBrandReveal className="border-t border-[#4d4d4d] pt-8">
            <svg
              viewBox="0 0 100 13"
              className="w-full h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Northbound Systems"
            >
              <text
                x="0"
                y="11"
                fill="#ff5841"
                fontFamily="var(--font-geist-sans), Inter, system-ui, sans-serif"
                fontWeight="700"
                fontSize="13"
                textLength="100"
                lengthAdjust="spacingAndGlyphs"
              >
                Northbound Systems
              </text>
            </svg>
          </FooterBrandReveal>
        </div>
      </div>

      {/* ─── BOTTOM BAR ─── */}
      <div className="border-t border-[#202020]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs text-[#202020]/40">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 font-mono text-xs text-[#202020]/40">
              {siteConfig.navigation.footer.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#202020]/70 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/accessibility"
                className="hover:text-[#202020]/70 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
