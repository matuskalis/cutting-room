import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Northbound Systems privacy policy - how we collect, use, and protect your information.",
}

const tableOfContents = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-information", title: "How We Use Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights" },
  { id: "cookies-and-tracking", title: "Cookies and Tracking" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "updates-to-policy", title: "Updates to This Policy" },
  { id: "contact-us", title: "Contact Us" },
]

export default function PrivacyPolicyPage() {
  const { contact } = siteConfig
  const lastUpdated = "February 3, 2026"

  return (
    <div className="min-h-screen">
      {/* ─── Coral Hero ─── */}
      <section className="bg-[#ff5841] pt-32 pb-16">
        <Container>
          <p className="mono-label text-[#202020]/60 mb-4">Legal</p>
          <h1 className="font-sans font-bold text-[#202020] text-[length:var(--text-display-page)]">
            Privacy Policy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#202020]/70 leading-relaxed">
            Your privacy is important to us. This policy explains how Northbound Systems
            collects, uses, and protects your personal information.
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
                  Northbound Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                  your privacy. This Privacy Policy describes how we collect, use, disclose,
                  and safeguard your information when you visit our website at northboundsystems.example
                  or engage with our services.
                </p>

                {/* Information We Collect */}
                <section id="information-we-collect" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Information We Collect
                  </h2>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Information You Provide
                  </h3>
                  <p className="text-white/70 mb-4">
                    We collect information you voluntarily provide when you:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Contact Form Submissions:</strong> Name, email address,
                      organization, phone number (optional), and message content
                    </li>
                    <li>
                      <strong className="text-white/90">Newsletter Subscriptions:</strong> Email address and
                      communication preferences
                    </li>
                    <li>
                      <strong className="text-white/90">Capabilities Statement Downloads:</strong> Name, email address,
                      and organization
                    </li>
                    <li>
                      <strong className="text-white/90">Service Inquiries:</strong> Information related to your
                      project requirements and business needs
                    </li>
                  </ul>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Information Collected Automatically
                  </h3>
                  <p className="text-white/70 mb-4">
                    When you visit our website, we automatically collect certain information,
                    including:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>
                      <strong className="text-white/90">Device Information:</strong> Browser type, operating system,
                      device type, and screen resolution
                    </li>
                    <li>
                      <strong className="text-white/90">Usage Data:</strong> Pages visited, time spent on pages,
                      click patterns, and navigation paths
                    </li>
                    <li>
                      <strong className="text-white/90">Log Data:</strong> IP address (anonymized), access times,
                      and referring URLs
                    </li>
                  </ul>
                </section>

                {/* How We Use Information */}
                <section id="how-we-use-information" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    How We Use Information
                  </h2>
                  <p className="text-white/70 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Respond to your inquiries and provide requested information</li>
                    <li>Send newsletters and updates you have subscribed to</li>
                    <li>Deliver capabilities statements and other requested materials</li>
                    <li>Improve our website, services, and user experience</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Communicate about our services and relevant opportunities</li>
                    <li>Comply with legal obligations and protect our rights</li>
                    <li>Prevent fraudulent activity and ensure website security</li>
                  </ul>
                </section>

                {/* Information Sharing */}
                <section id="information-sharing" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Information Sharing
                  </h2>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    We Do Not Sell Your Information
                  </h3>
                  <p className="text-white/70 mb-6">
                    Northbound Systems does not sell, rent, or trade your personal information
                    to third parties for marketing purposes.
                  </p>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Third-Party Service Providers
                  </h3>
                  <p className="text-white/70 mb-4">
                    We may share information with trusted third-party service providers
                    who assist us in operating our website and conducting our business,
                    including:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>Web hosting and cloud infrastructure providers</li>
                    <li>Email service providers for communications</li>
                    <li>Analytics services (with anonymized data)</li>
                    <li>Customer relationship management systems</li>
                  </ul>
                  <p className="text-white/70 mb-6">
                    These providers are contractually obligated to maintain the
                    confidentiality and security of your information.
                  </p>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Legal Requirements
                  </h3>
                  <p className="text-white/70">
                    We may disclose your information when required by law, court order,
                    or government regulation, or when we believe disclosure is necessary
                    to protect our rights, your safety, or the safety of others.
                  </p>
                </section>

                {/* Data Security */}
                <section id="data-security" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Data Security
                  </h2>
                  <p className="text-white/70 mb-4">
                    We implement industry-standard security measures to protect your
                    personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Encryption:</strong> All data transmitted to and from our
                      website is encrypted using TLS/SSL protocols
                    </li>
                    <li>
                      <strong className="text-white/90">Secure Storage:</strong> Personal information is stored on
                      secure servers with restricted access
                    </li>
                    <li>
                      <strong className="text-white/90">Access Controls:</strong> Only authorized personnel have
                      access to personal information on a need-to-know basis
                    </li>
                    <li>
                      <strong className="text-white/90">Regular Monitoring:</strong> We regularly monitor our
                      systems for vulnerabilities and potential security issues
                    </li>
                  </ul>
                  <p className="text-white/70">
                    While we strive to protect your personal information, no method of
                    transmission over the Internet or electronic storage is 100% secure.
                    We cannot guarantee absolute security but are committed to
                    implementing reasonable safeguards.
                  </p>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Your Rights
                  </h2>
                  <p className="text-white/70 mb-4">
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Access:</strong> Request a copy of the personal information
                      we hold about you
                    </li>
                    <li>
                      <strong className="text-white/90">Correction:</strong> Request correction of inaccurate or
                      incomplete information
                    </li>
                    <li>
                      <strong className="text-white/90">Deletion:</strong> Request deletion of your personal
                      information, subject to legal retention requirements
                    </li>
                    <li>
                      <strong className="text-white/90">Opt-Out:</strong> Unsubscribe from marketing communications
                      at any time using the link in our emails
                    </li>
                    <li>
                      <strong className="text-white/90">Data Portability:</strong> Request your data in a
                      machine-readable format
                    </li>
                  </ul>
                  <p className="text-white/70">
                    To exercise any of these rights, please contact us using the
                    information provided below. We will respond to your request within
                    30 days.
                  </p>
                </section>

                {/* Cookies and Tracking */}
                <section id="cookies-and-tracking" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-white/70 mb-4">
                    Our website uses cookies and similar tracking technologies to enhance
                    your experience and analyze website usage:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      <strong className="text-white/90">Essential Cookies:</strong> Required for basic website
                      functionality
                    </li>
                    <li>
                      <strong className="text-white/90">Analytics Cookies:</strong> Help us understand how visitors
                      interact with our website (Google Analytics with IP anonymization)
                    </li>
                    <li>
                      <strong className="text-white/90">Preference Cookies:</strong> Remember your settings and
                      preferences
                    </li>
                  </ul>
                  <p className="text-white/70">
                    You can control cookies through your browser settings. Disabling
                    certain cookies may affect website functionality.
                  </p>
                </section>

                {/* Third-Party Links */}
                <section id="third-party-links" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Third-Party Links
                  </h2>
                  <p className="text-white/70">
                    Our website may contain links to third-party websites. We are not
                    responsible for the privacy practices or content of these external
                    sites. We encourage you to review the privacy policies of any
                    third-party sites you visit.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section id="childrens-privacy" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Children&apos;s Privacy
                  </h2>
                  <p className="text-white/70">
                    Our website and services are not directed to individuals under the
                    age of 18. We do not knowingly collect personal information from
                    children. If we become aware that we have collected personal
                    information from a child, we will take steps to delete such
                    information promptly.
                  </p>
                </section>

                {/* Updates to Policy */}
                <section id="updates-to-policy" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Updates to This Policy
                  </h2>
                  <p className="text-white/70 mb-4">
                    We may update this Privacy Policy from time to time to reflect
                    changes in our practices or for other operational, legal, or
                    regulatory reasons. When we make material changes, we will:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>Update the &quot;Last Updated&quot; date at the top of this policy</li>
                    <li>Post a notice on our website for significant changes</li>
                    <li>
                      Notify you by email if we have your contact information and the
                      changes materially affect how we use your data
                    </li>
                  </ul>
                  <p className="text-white/70">
                    We encourage you to review this policy periodically to stay informed
                    about how we protect your information.
                  </p>
                </section>

                {/* Contact Us */}
                <section id="contact-us" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Contact Us
                  </h2>
                  <p className="text-white/70 mb-6">
                    If you have questions about this Privacy Policy, wish to exercise
                    your privacy rights, or have concerns about how we handle your
                    information, please contact us:
                  </p>

                  <div className="rounded-lg border border-white/10 bg-[#2a2a2a] p-6">
                    <p className="font-semibold text-white mb-4">Northbound Systems</p>
                    <div className="space-y-2 text-white/70">
                      <p>
                        <strong className="text-white/90">Email:</strong>{" "}
                        <a
                          href={`mailto:${contact.email}`}
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
                    We aim to respond to all privacy-related inquiries within 30 days.
                  </p>
                </section>

                {/* Additional Links */}
                <section className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/70">
                    See also our{" "}
                    <Link
                      href="/terms"
                      className="text-[#ff5841] hover:text-[#ff5841]/80 transition-colors"
                    >
                      Terms of Service
                    </Link>{" "}
                    for the terms and conditions governing use of our website.
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
