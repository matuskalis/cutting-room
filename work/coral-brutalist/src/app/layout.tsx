import type { Metadata } from "next"
import { Inter, DM_Serif_Display, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/sections/cookie-banner"
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import "./globals.css"

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const dmSerif = DM_Serif_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://northboundsystems.example"),
  title: {
    default: "Northbound Systems | Built for Mission. Delivered with Precision.",
    template: "%s | Northbound Systems",
  },
  description:
    "Service-Disabled Veteran-Owned Small Business delivering advanced data engineering, AI, and cloud solutions supporting national readiness, public health resilience, and digital modernization.",
  keywords: [
    "SDVOSB",
    "veteran-owned",
    "data engineering",
    "AI solutions",
    "cloud modernization",
    "healthcare data",
    "logistics analytics",
    "data lakehouse",
    "machine learning",
    "federal contractor",
    "government IT",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://northboundsystems.example",
    siteName: "Northbound Systems",
    title: "Northbound Systems | Built for Mission. Delivered with Precision.",
    description:
      "Service-Disabled Veteran-Owned Small Business delivering advanced data engineering, AI, and cloud solutions.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Northbound Systems - Built for Mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbound Systems | Built for Mission. Delivered with Precision.",
    description:
      "Service-Disabled Veteran-Owned Small Business delivering advanced data engineering, AI, and cloud solutions.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${inter.variable} ${dmSerif.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#202020] text-white`}
      >
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <Header />
        <ScrollProgress />
        <SmoothScrollProvider>
          <main className="flex-1">{children}</main>
        </SmoothScrollProvider>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
