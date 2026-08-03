import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionReveal } from "@/components/ui/section-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { BinaryJetVideo } from "@/components/sections/binary-jet-video"
import { SubpageHero } from "@/components/sections/subpage-hero"
import { Statement } from "@/components/sections/statement"
import { StatsList } from "@/components/sections/stats-list"
import { siteConfig } from "@/data/site"
import { enhancedCTA, founderQuote, byTheNumbers, ceoProfile } from "@/data/homepage"

export const metadata: Metadata = {
  title: "About Us",
  description: siteConfig.mission,
}

const sdvosbBenefits = [
  "Direct access to federal contracting opportunities",
  "Commitment to hiring and mentoring veteran talent",
  "Understanding of military culture and mission requirements",
  "Proven track record in defense and government sectors",
]

export default function AboutPage() {
  return (
    <div>
      {/* 1. SubpageHero (coral) */}
      <SubpageHero
        title="About."
        eyebrow="Our Story"
        description="Delivering advanced data engineering, AI, and cloud solutions that support national readiness — all led by a veteran-driven team."
        labelBox={{
          title: "Northbound Systems",
          items: [
            { label: "Certification", value: "SDVOSB Certified" },
            { label: "Location", value: "Arlington, VA" },
          ],
        }}
      />

      {/* 2. BinaryJetVideo (dark) */}
      <SectionReveal>
        <BinaryJetVideo caption="VETERAN-LED INNOVATION" />
      </SectionReveal>

      {/* 3. Statement (dark) */}
      <Statement
        text={founderQuote.text}
        attribution={`— ${founderQuote.author}, ${founderQuote.title}`}
      />

      {/* 4. StatsList (dark) */}
      <StatsList
        title="By the Numbers."
        description="A track record of veteran-led delivery across federal, defense, and commercial sectors."
        stats={byTheNumbers}
      />

      {/* 5. CEO Profile (dark) */}
      <section className="bg-[#202020] py-20 md:py-28 border-t border-[#4d4d4d]" data-header-theme="light">
        <Container>
          <SectionReveal>
            <div className="max-w-5xl mx-auto">
              <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                <TextReveal
                  text="Leadership."
                  as="h2"
                  splitBy="char"
                  variant="mask"
                  stagger={0.03}
                  className="font-serif font-medium text-white mb-12"
                />
              </div>

              <div className="bg-[#2a2a2a] rounded-lg border border-white/[0.08] p-8 md:p-12">
                <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
                  <div className="relative w-full sm:w-48 md:w-56 flex-shrink-0">
                    <Image
                      src={ceoProfile.image}
                      alt="Marin Vance, Founder & CEO of Northbound Systems"
                      width={250}
                      height={300}
                      className="rounded-xl object-cover w-full aspect-[5/6]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-2xl font-medium text-white">{ceoProfile.name}</h3>
                    <p className="text-[#ff5841] text-sm font-medium mt-1">{ceoProfile.title}</p>
                    <p className="text-white/40 text-xs mt-1 font-mono uppercase tracking-[0.1em]">{ceoProfile.militaryBackground}</p>
                    <p className="text-lg text-white/70 leading-relaxed mt-4">
                      {ceoProfile.shortBio}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-white/50 leading-relaxed">
                    A Service-Disabled U.S. Army veteran, Marin&apos;s leadership style was forged long before
                    boardrooms and startups — flying attack helicopters and leading soldiers in combat
                    environments where trust, clarity, and decisive action were not optional.
                  </p>

                  <p className="text-white/50 leading-relaxed">
                    After his military service, Marin transitioned into the private sector, advising Global 2000
                    organizations through roles at AT&amp;T Solutions and PwC. He went on to found and scale
                    multiple technology-driven companies at the intersection of innovation and public service.
                  </p>

                  <p className="text-white/50 leading-relaxed">
                    Among them was Relaypoint, a real-time communications platform that raised $17.7 million in
                    venture funding, and Courage LLC, where Marin led the design, integration, launch, and
                    operations of the DC Health Insurance Exchange — one of only four in the country to meet
                    its ACA mandate while operating with zero unscheduled downtime.
                  </p>

                  <blockquote className="border-l-4 border-[#ff5841] pl-6 py-2 italic text-white/60">
                    &ldquo;{ceoProfile.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 6. SDVOSB Certification (coral) */}
      <section className="bg-[#ff5841] py-20 md:py-28" data-header-theme="dark">
        <Container>
          <SectionReveal>
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-5 items-center">
                <div className="lg:col-span-2 text-center">
                  <div className="inline-flex flex-col items-center">
                    <Shield className="h-24 w-24 text-[#202020]" />
                    <h3 className="font-sans text-2xl font-medium text-[#202020] mt-6 mb-2">
                      SDVOSB
                    </h3>
                    <p className="text-[#202020]/60 text-sm">
                      Service-Disabled Veteran-Owned<br />Small Business
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#202020] px-4 py-2">
                      <CheckCircle className="h-4 w-4 text-[#ff5841]" />
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <h2 className="font-sans text-3xl font-medium text-[#202020] mb-6">
                    Why Partner with an SDVOSB?
                  </h2>
                  <p className="text-[#202020]/70 mb-6 leading-relaxed">
                    As a certified Service-Disabled Veteran-Owned Small Business, Northbound Systems embodies
                    the values of service, sacrifice, and commitment. Our certification reflects not just
                    a designation, but a promise: we bring the same dedication to your mission that we
                    brought to serving our nation.
                  </p>
                  <ul className="space-y-4">
                    {sdvosbBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-[#202020]" />
                        </div>
                        <span className="text-[#202020]/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* 7. CTA (coral) */}
      <section className="bg-[#ff5841] py-20 md:py-28 border-t border-[#202020]/10" data-header-theme="dark">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <TextReveal
                text={enhancedCTA.headline}
                as="h2"
                splitBy="word"
                variant="mask"
                className="font-sans font-medium text-[#202020]"
              />
            </div>
            <p className="text-[#202020]/60 mt-4 mb-8">{enhancedCTA.qualifier}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#202020] px-8 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white font-bold hover:bg-[#333333] transition-colors"
            >
              {enhancedCTA.primaryCTA}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
