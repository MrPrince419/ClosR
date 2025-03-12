import React from "react"
import { Suspense } from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingFallback from "@/components/loading-fallback"

const inter = Inter({ subsets: ["latin"] })

import EthereumCheckScript from "@/components/ethereum-check"

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
        alt: "ClosR - AI Automation for Nigerian Businesses"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <EthereumCheckScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<LoadingFallback />}>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}