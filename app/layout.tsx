import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "ClosR - AI Automation for Nigerian Businesses",
  description:
    "Transforming Nigerian Businesses with AI Automation. Reduce costs, streamline processes, and scale growth with our tailored solutions.",
  keywords: "AI automation Nigeria, business optimization Abuja, engineer outsourcing Lagos, digital transformation, process automation, AI consulting",
  // viewport has been moved to the viewport export above
  openGraph: {
    title: "ClosR - AI Automation for Nigerian Businesses",
    description: "Transforming Nigerian Businesses with AI Automation. Reduce costs, streamline processes, and scale growth with our tailored solutions.",
    url: "https://closr.com",
    siteName: "ClosR",
    images: [
      {
        url: "https://closr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClosR - AI Automation for Nigerian Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClosR - AI Automation for Nigerian Businesses",
    description: "Transforming Nigerian Businesses with AI Automation. Reduce costs, streamline processes, and scale growth with our tailored solutions.",
    images: ["https://closr.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://closr.com",
    languages: {
      'en-US': "https://closr.com/en-US",
      'fr-FR': "https://closr.com/fr-FR",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* This script prevents ethereum property redefinition errors */}
        <Script id="ethereum-check" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined') {
              // Prevent redefining ethereum property
              if (!Object.getOwnPropertyDescriptor(window, 'ethereum')) {
                Object.defineProperty(window, 'ethereum', {
                  value: undefined,
                  writable: true,
                  configurable: true
                });
              }
            }
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ClosR",
            url: "https://closr.com",
            logo: "https://closr.com/logo.png",
            description:
              "Transforming Nigerian Businesses with AI Automation. Reduce costs, streamline processes, and scale growth with our tailored solutions.",
            sameAs: ["https://linkedin.com/in/prince05/"],
          })}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
          >
            Skip to content
          </a>

          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'