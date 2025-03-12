"use client"

import Link from "next/link"
import SocialLinks from "./social-links"
import NewsletterSignup from "./newsletter-signup"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            className="col-span-2 xs:col-span-2 sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            suppressHydrationWarning
          >
            <Link href="/" className="text-xl sm:text-2xl font-bold text-primary" suppressHydrationWarning>
              ClosR
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-gray-500" suppressHydrationWarning>
              Transforming Nigerian Businesses with AI Automation
            </p>
            <SocialLinks className="mt-3 sm:mt-4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            suppressHydrationWarning
          >
            <h3 className="text-xs sm:text-sm font-semibold text-gray-400 tracking-wider uppercase" suppressHydrationWarning>
              Services
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-4" suppressHydrationWarning>
              <li suppressHydrationWarning>
                <Link
                  href="/services#automation-consulting"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Automation Consulting
                </Link>
              </li>
              <li suppressHydrationWarning>
                <Link
                  href="/services#engineer-outsourcing"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Engineer Outsourcing
                </Link>
              </li>
              <li suppressHydrationWarning>
                <Link
                  href="/services#business-acquisitions"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Business Acquisitions
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            suppressHydrationWarning
          >
            <h3 className="text-xs sm:text-sm font-semibold text-gray-400 tracking-wider uppercase" suppressHydrationWarning>Company</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-4" suppressHydrationWarning>
              <li suppressHydrationWarning>
                <Link
                  href="/about"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  About Us
                </Link>
              </li>
              <li suppressHydrationWarning>
                <Link
                  href="/careers"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Careers
                </Link>
              </li>
              <li suppressHydrationWarning>
                <Link
                  href="/blog"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Blog
                </Link>
              </li>
              <li suppressHydrationWarning>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            suppressHydrationWarning
          >
            <h3 className="text-xs sm:text-sm font-semibold text-gray-400 tracking-wider uppercase" suppressHydrationWarning>Legal</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-4" suppressHydrationWarning>
              <li suppressHydrationWarning>
                <Link
                  href="/privacy"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Privacy Policy
                </Link>
              </li>
              <li suppressHydrationWarning>
                <Link
                  href="/terms"
                  className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  suppressHydrationWarning
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          suppressHydrationWarning
        >
          <NewsletterSignup />
        </motion.div>

        <div className="mt-6 sm:mt-8 border-t border-gray-200 pt-6 sm:pt-8" suppressHydrationWarning>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} ClosR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

