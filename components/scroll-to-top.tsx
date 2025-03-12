"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    // Safely check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  const scrollToTop = () => {
    // Safely check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    // Safely check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility)

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", toggleVisibility)
      }
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-accent text-white shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      suppressHydrationWarning
    >
      <ChevronUp className="h-5 w-5" suppressHydrationWarning />
    </button>
  )
}

