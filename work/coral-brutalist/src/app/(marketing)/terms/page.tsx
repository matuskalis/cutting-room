import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Northbound Systems terms of service - the terms and conditions governing use of our website and services.",
}

const tableOfContents = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "use-of-website", title: "Use of Website" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "services", title: "Services" },
  { id: "user-submissions", title: "User Submissions" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "contact-us", title: "Contact Us" },
]

export default function TermsOfServicePage() {
  const { contact } = siteConfig
  const lastUpdated = "February 3, 2026"

  return (
    <div className="min-h-screen">
      {/* ─── Coral Hero ─── */}
      <section className="bg-[#ff5841] pt-32 pb-16">
        <Container>
          <p className="mono-label text-[#202020]/60 mb-4">Legal</p>
          <h1 className="font-sans font-bold text-[#202020] text-[length:var(--text-display-page)]">
            Terms of Service.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#202020]/70 leading-relaxed">
            Please read these terms carefully before using our website or engaging
            with our services.
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
                  Welcome to Northbound Systems. These Terms of Service (&quot;Terms&quot;) govern your
                  access to and use of our website located at northboundsystems.example and any related
                  services provided by Northbound Systems (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
                </p>

                {/* Acceptance of Terms */}
                <section id="acceptance-of-terms" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Acceptance of Terms
                  </h2>
                  <p className="text-white/70 mb-4">
                    By accessing or using our website, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms. If you do not agree
                    to these Terms, you must not access or use our website.
                  </p>
                  <p className="text-white/70 mb-4">
                    These Terms constitute a legally binding agreement between you and
                    Northbound Systems. You represent that you are at least 18 years of age
                    and have the legal capacity to enter into this agreement.
                  </p>
                  <p className="text-white/70">
                    If you are accessing our website on behalf of a business or other
                    legal entity, you represent that you have the authority to bind such
                    entity to these Terms.
                  </p>
                </section>

                {/* Use of Website */}
                <section id="use-of-website" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Use of Website
                  </h2>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Permitted Uses
                  </h3>
                  <p className="text-white/70 mb-4">
                    You may use our website for lawful purposes only. Permitted uses include:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>Learning about our company and services</li>
                    <li>Contacting us through our contact form</li>
                    <li>Downloading publicly available resources and materials</li>
                    <li>Subscribing to our newsletter and updates</li>
                    <li>Accessing information about our capabilities and expertise</li>
                  </ul>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Prohibited Activities
                  </h3>
                  <p className="text-white/70 mb-4">
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>
                      Using the website in any way that violates applicable federal, state,
                      local, or international laws or regulations
                    </li>
                    <li>
                      Attempting to gain unauthorized access to our systems, networks, or
                      data
                    </li>
                    <li>
                      Interfering with or disrupting the integrity or performance of the
                      website
                    </li>
                    <li>
                      Transmitting any malware, viruses, or other malicious code
                    </li>
                    <li>
                      Using automated systems, including bots or scrapers, to access the
                      website without our prior written consent
                    </li>
                    <li>
                      Impersonating or attempting to impersonate the Company, employees,
                      or other users
                    </li>
                    <li>
                      Collecting or harvesting personal information from the website
                    </li>
                    <li>
                      Using the website for any commercial purpose without our authorization
                    </li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Intellectual Property
                  </h2>
                  <p className="text-white/70 mb-4">
                    All content on this website, including but not limited to text,
                    graphics, logos, images, audio clips, video, data compilations, and
                    software, is the property of Northbound Systems or its content suppliers
                    and is protected by United States and international copyright,
                    trademark, and other intellectual property laws.
                  </p>
                  <p className="text-white/70 mb-4">
                    The Northbound Systems name, logo, and all related names, logos, product
                    and service names, designs, and slogans are trademarks of Northbound Systems.
                    You must not use such marks without our prior written permission.
                  </p>
                  <p className="text-white/70">
                    You are granted a limited, non-exclusive, non-transferable license
                    to access and view the content on this website for personal,
                    non-commercial use only. This license does not include the right to
                    modify, copy, distribute, transmit, display, perform, reproduce,
                    publish, license, create derivative works from, transfer, or sell
                    any content obtained from this website.
                  </p>
                </section>

                {/* Services */}
                <section id="services" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Services
                  </h2>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Description of Services
                  </h3>
                  <p className="text-white/70 mb-4">
                    Northbound Systems provides data engineering, artificial intelligence, cloud
                    modernization, and related consulting services to government agencies,
                    healthcare organizations, and commercial enterprises. Information about
                    our services on this website is for general informational purposes only.
                  </p>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Separate Engagement Terms
                  </h3>
                  <p className="text-white/70 mb-4">
                    The actual provision of consulting services is governed by separate
                    written agreements, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>Master Services Agreements (MSA)</li>
                    <li>Statements of Work (SOW)</li>
                    <li>Government contracts and task orders</li>
                    <li>Non-Disclosure Agreements (NDA)</li>
                  </ul>
                  <p className="text-white/70">
                    These Terms do not create any obligation on our part to provide
                    consulting services, nor do they constitute an offer or acceptance
                    of any engagement.
                  </p>
                </section>

                {/* User Submissions */}
                <section id="user-submissions" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    User Submissions
                  </h2>
                  <p className="text-white/70 mb-4">
                    When you submit information through our contact form, newsletter
                    signup, or other means, you grant us the right to use that information
                    to respond to your inquiry and provide requested services or materials.
                  </p>
                  <p className="text-white/70 mb-4">
                    You represent and warrant that:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>
                      All information you provide is accurate, current, and complete
                    </li>
                    <li>
                      You have the right to provide such information and it does not
                      violate any third-party rights
                    </li>
                    <li>
                      Your submission does not contain confidential information of any
                      third party without proper authorization
                    </li>
                  </ul>
                  <p className="text-white/70">
                    We are not responsible for any confidential information you choose
                    to submit through unsecured channels on our website.
                  </p>
                </section>

                {/* Disclaimers */}
                <section id="disclaimers" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Disclaimers
                  </h2>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    Website Provided &quot;As Is&quot;
                  </h3>
                  <p className="text-white/70 mb-4">
                    THIS WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS
                    WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE
                    FULLEST EXTENT PERMITTED BY LAW, NORTHBOUND SYSTEMS DISCLAIMS ALL WARRANTIES,
                    INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    No Professional Advice
                  </h3>
                  <p className="text-white/70 mb-4">
                    The information on this website is for general informational purposes
                    only and does not constitute professional, technical, or legal advice.
                    You should consult appropriate professionals before making any decisions
                    based on information found on this website.
                  </p>

                  <h3 className="font-sans text-lg font-bold text-white mt-6 mb-3">
                    No Guarantee of Accuracy
                  </h3>
                  <p className="text-white/70">
                    While we strive to provide accurate and up-to-date information, we make
                    no representations or warranties about the completeness, reliability,
                    or accuracy of any information on this website. Any reliance you place
                    on such information is strictly at your own risk.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section id="limitation-of-liability" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Limitation of Liability
                  </h2>
                  <p className="text-white/70 mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                    NORTHBOUND SYSTEMS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES
                    BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                    PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                    <li>Loss of profits, revenue, data, or business opportunities</li>
                    <li>Business interruption or loss of goodwill</li>
                    <li>Cost of substitute services</li>
                    <li>Any other intangible losses</li>
                  </ul>
                  <p className="text-white/70 mb-4">
                    This limitation applies regardless of the theory of liability (contract,
                    tort, negligence, strict liability, or otherwise), even if we have been
                    advised of the possibility of such damages.
                  </p>
                  <p className="text-white/70">
                    In no event shall our total liability to you for all claims arising
                    from or relating to your use of the website exceed the amount you paid
                    to us, if any, for accessing the website during the twelve (12) months
                    preceding the claim.
                  </p>
                </section>

                {/* Indemnification */}
                <section id="indemnification" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Indemnification
                  </h2>
                  <p className="text-white/70">
                    You agree to indemnify, defend, and hold harmless Northbound Systems and its
                    officers, directors, employees, agents, affiliates, and contractors
                    from and against any claims, liabilities, damages, losses, costs, or
                    expenses (including reasonable attorneys&apos; fees) arising out of or
                    relating to your use of the website, your violation of these Terms,
                    or your violation of any rights of another party.
                  </p>
                </section>

                {/* Governing Law */}
                <section id="governing-law" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Governing Law
                  </h2>
                  <p className="text-white/70 mb-4">
                    These Terms shall be governed by and construed in accordance with the
                    laws of the State of Maryland and the applicable federal laws of the
                    United States of America, without regard to conflict of law principles.
                  </p>
                  <p className="text-white/70 mb-4">
                    Any legal action or proceeding arising out of or relating to these
                    Terms or your use of the website shall be brought exclusively in the
                    federal or state courts located in Montgomery County, Maryland. You
                    consent to the personal jurisdiction of such courts and waive any
                    objection to venue in such courts.
                  </p>
                  <p className="text-white/70">
                    If any provision of these Terms is held to be invalid or unenforceable,
                    such provision shall be struck and the remaining provisions shall
                    remain in full force and effect.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section id="changes-to-terms" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Changes to Terms
                  </h2>
                  <p className="text-white/70 mb-4">
                    We reserve the right to modify these Terms at any time at our sole
                    discretion. When we make changes, we will update the &quot;Last Updated&quot;
                    date at the top of this page.
                  </p>
                  <p className="text-white/70 mb-4">
                    For material changes, we may provide additional notice, such as posting
                    a prominent notice on our website. Your continued use of the website
                    after any changes to these Terms constitutes your acceptance of the
                    revised Terms.
                  </p>
                  <p className="text-white/70">
                    We encourage you to review these Terms periodically to stay informed
                    of any updates.
                  </p>
                </section>

                {/* Contact Us */}
                <section id="contact-us" className="mt-12 scroll-mt-32">
                  <h2 className="font-sans text-2xl font-bold text-white mb-6">
                    Contact Us
                  </h2>
                  <p className="text-white/70 mb-6">
                    If you have any questions about these Terms of Service, please contact us:
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
                    for information about how we collect, use, and protect your personal
                    information.
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
