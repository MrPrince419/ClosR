"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "navbar-glass shadow-md" : "bg-white shadow-sm"}`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex">
            <motion.div
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              suppressHydrationWarning
            >
              <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" suppressHydrationWarning>
                ClosR
              </Link>
            </motion.div>
            <motion.div
              className="hidden sm:ml-6 sm:flex sm:space-x-4 md:space-x-6 lg:space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              suppressHydrationWarning
            >
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                suppressHydrationWarning
              >
                Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                suppressHydrationWarning
              >
                Services
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                suppressHydrationWarning
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                suppressHydrationWarning
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                suppressHydrationWarning
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                suppressHydrationWarning
              >
                Contact
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
              suppressHydrationWarning
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-1 pb-2 space-y-1">
              <Link
                href="/"
                className="block pl-3 pr-4 py-1.5 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block pl-3 pr-4 py-1.5 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block pl-3 pr-4 py-1.5 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="block pl-3 pr-4 py-1.5 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="block pl-3 pr-4 py-1.5 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block pl-3 pr-4 py-1.5 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

