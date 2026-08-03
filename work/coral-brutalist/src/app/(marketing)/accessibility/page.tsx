import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Northbound Systems accessibility statement - our commitment to digital accessibility and inclusive design.",
}

const tableOfContents = [
  { id: "our-commitment", title: "Our Commitment" },
  { id: "conformance-status", title: "Conformance Status" },
  { id: "accessibility-features", title: "Accessibility Features" },
  { id: "assistive-technologies", title: "Assistive Technologies" },
  { id: "known-limitations", title: "Known Limitations" },
  { id: "feedback", title: "Feedback" },
]

export default function AccessibilityPage() {
  const { contact } = siteConfig
  const lastUpdated = "February 6, 2026"

  return (
    <div className="min-h-screen">
      {/* ─── Coral Hero ─── */}
      <section className="bg-[#ff5841] pt-32 pb-16">
        <Container>
          <p className="mono-label text-[#202020]/60 mb-4">Commitment</p>
          <h1 className="font-sans font-bold text-[#202020] text-[length:var(--text-display-page)]">
            Accessibility.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#202020]/70 leading-relaxed">
            Northbound Systems is committed to ensuring digital accessibility for people
            of all abilities. We continually improve the user experience for
            everyone and apply relevant accessibility standards.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-[#202020]/50">
            Last Updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* ─── Dark Content ─── */}
      <section className="bg-[#202020] py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="font-sans text-lg font-bold text-white mb-4">
                  Contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-white/50 hover:text-[#ff5841] transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link
                    href="/"
                    className="text-sm text-[#ff5841] hover:text-[#ff5841]/80 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-none">
                {/* Introduction */}
                <p className="text-lg text-white/70 leading-relaxed">
                  Northbound Systems believes that the internet should be accessible to
                  everyone. As a federal contractor serving the Department of Defense
                  and other government agencies, we recognize our responsibility to
                  provide an inclusive digital experience that serves all users,
                  including those with disabilities.
                </p>

                {/* Our Commitment */}
                <section id="our-commitment" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Our Commitment
                  </h2>
                  <p className="text-white/70 mb-4">
                    Northbound Systems is committed to providing a website that is accessible
                    to the widest possible audience, regardless of technology or ability.
                    We are actively working to increase the accessibility and usability
                    of our website and in doing so adhere to many of the available
                    standards and guidelines.
                  </p>
                  <p className="text-white/70 mb-4">
                    Our commitment to accessibility reflects our core values as a
                    Service-Disabled Veteran-Owned Small Business. We understand that
                    accessibility is not just a legal requirement but a moral imperative
                    to ensure equal access to information and services for all individuals.
                  </p>
                </section>

                {/* Conformance Status */}
                <section id="conformance-status" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Conformance Status
                  </h2>
                  <p className="text-white/70 mb-4">
                    The Web Content Accessibility Guidelines (WCAG) defines requirements
                    for designers and developers to improve accessibility for people with
                    disabilities. It defines three levels of conformance: Level A, Level AA,
                    and Level AAA.
                  </p>
                  <p className="text-white/70 mb-4">
                    Northbound Systems strives to conform to{" "}
                    <strong className="text-white/90">WCAG 2.1 Level AA</strong> standards. This means we work to
                    ensure our website meets the success criteria outlined in WCAG 2.1 at
                    the AA level, which covers a wide range of recommendations for making
                    web content more accessible.
                  </p>
                  <p className="text-white/70">
                    We also aim to comply with Section 508 of the Rehabilitation Act,
                    which requires federal agencies and their contractors to make
                    electronic and information technology accessible to people with
                    disabilities.
                  </p>
                </section>

                {/* Accessibility Features */}
                <section id="accessibility-features" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Accessibility Features
                  </h2>
                  <p className="text-white/70 mb-4">
                    We have implemented the following accessibility features on our website:
                  </p>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Navigation and Structure
                  </h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Keyboard Navigation:</strong> All functionality is available
                      using keyboard-only navigation
                    </li>
                    <li>
                      <strong className="text-white/90">Skip Links:</strong> Skip navigation links allow users to
                      bypass repetitive content
                    </li>
                    <li>
                      <strong className="text-white/90">Logical Structure:</strong> Semantic HTML provides a clear
                      document structure with proper heading hierarchy
                    </li>
                    <li>
                      <strong className="text-white/90">Focus Indicators:</strong> Visible focus states help keyboard
                      users track their position on the page
                    </li>
                  </ul>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Visual Design
                  </h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Color Contrast:</strong> Text and interactive elements meet
                      WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for
                      large text)
                    </li>
                    <li>
                      <strong className="text-white/90">Resizable Text:</strong> Text can be resized up to 200%
                      without loss of content or functionality
                    </li>
                    <li>
                      <strong className="text-white/90">No Color-Only Information:</strong> Information is not
                      conveyed by color alone
                    </li>
                    <li>
                      <strong className="text-white/90">Responsive Design:</strong> Content adapts to different
                      screen sizes and orientations
                    </li>
                  </ul>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Content and Media
                  </h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Alternative Text:</strong> Images include descriptive
                      alternative text for screen reader users
                    </li>
                    <li>
                      <strong className="text-white/90">Link Purpose:</strong> Links are descriptive and indicate
                      their destination or purpose
                    </li>
                    <li>
                      <strong className="text-white/90">Form Labels:</strong> All form inputs have associated labels
                      for clear identification
                    </li>
                    <li>
                      <strong className="text-white/90">Error Identification:</strong> Form errors are clearly
                      identified and described in text
                    </li>
                  </ul>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Technical Implementation
                  </h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>
                      <strong className="text-white/90">ARIA Landmarks:</strong> ARIA landmarks help assistive
                      technology users navigate the page structure
                    </li>
                    <li>
                      <strong className="text-white/90">Valid HTML:</strong> Semantic, standards-compliant HTML
                      ensures compatibility with assistive technologies
                    </li>
                    <li>
                      <strong className="text-white/90">Consistent Navigation:</strong> Navigation is consistent
                      across all pages
                    </li>
                  </ul>
                </section>

                {/* Assistive Technologies */}
                <section id="assistive-technologies" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Assistive Technologies
                  </h2>
                  <p className="text-white/70 mb-4">
                    Our website is designed to be compatible with the following assistive
                    technologies:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>Screen readers (such as NVDA, JAWS, VoiceOver, and TalkBack)</li>
                    <li>Screen magnification software</li>
                    <li>Speech recognition software</li>
                    <li>Keyboard-only navigation</li>
                    <li>Switch devices and alternative input methods</li>
                  </ul>
                  <p className="text-white/70">
                    We recommend using modern web browsers (Chrome, Firefox, Safari, Edge)
                    for the best experience with assistive technologies.
                  </p>
                </section>

                {/* Known Limitations */}
                <section id="known-limitations" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Known Limitations
                  </h2>
                  <p className="text-white/70 mb-4">
                    While we strive to ensure accessibility across all pages and content,
                    some areas may have limitations:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Third-Party Content:</strong> Some embedded third-party
                      content may not fully meet accessibility standards
                    </li>
                    <li>
                      <strong className="text-white/90">PDF Documents:</strong> Some legacy PDF documents may not be
                      fully accessible; we are working to remediate these
                    </li>
                    <li>
                      <strong className="text-white/90">Dynamic Content:</strong> Some dynamically updated content
                      may require additional navigation
                    </li>
                  </ul>
                  <p className="text-white/70">
                    We are actively working to address these limitations and improve
                    accessibility across all areas of our website.
                  </p>
                </section>

                {/* Feedback */}
                <section id="feedback" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Feedback
                  </h2>
                  <p className="text-white/70 mb-6">
                    We welcome your feedback on the accessibility of the Northbound Systems
                    website. If you encounter any accessibility barriers or have
                    suggestions for improvement, please contact us:
                  </p>

                  <div className="rounded-lg border border-white/10 bg-[#2a2a2a] p-6">
                    <p className="font-semibold text-white mb-4">
                      Accessibility Feedback
                    </p>
                    <div className="space-y-2 text-white/70">
                      <p>
                        <strong className="text-white/90">Email:</strong>{" "}
                        <a
                          href={`mailto:${contact.email}?subject=Accessibility%20Feedback`}
                          className="text-[#ff5841] hover:text-[#ff5841]/80 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </p>
                      <p>
                        <strong className="text-white/90">Phone:</strong>{" "}
                        <a
                          href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                          className="text-[#ff5841] hover:text-[#ff5841]/80 transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </p>
                      <p>
                        <strong className="text-white/90">Address:</strong> {contact.address}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/70 mt-6">
                    When reporting accessibility issues, please include:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mt-4 mb-6">
                    <li>The URL of the page where you encountered the issue</li>
                    <li>A description of the accessibility barrier</li>
                    <li>
                      The assistive technology you were using (if applicable)
                    </li>
                    <li>Your contact information so we can follow up</li>
                  </ul>
                  <p className="text-white/70">
                    We aim to respond to accessibility feedback within 5 business days
                    and will work to resolve issues as quickly as possible.
                  </p>
                </section>

                {/* Additional Links */}
                <section className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/70">
                    See also our{" "}
                    <Link
                      href="/privacy"
                      className="text-[#ff5841] hover:text-[#ff5841]/80 transition-colors"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/terms"
                      className="text-[#ff5841] hover:text-[#ff5841]/80 transition-colors"
                    >
                      Terms of Service
                    </Link>{" "}
                    for additional information about using our website.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
