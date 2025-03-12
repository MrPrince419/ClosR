"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type ServiceCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  delay?: number
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-center justify-center mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1.5 sm:mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
      <div className="mt-3 sm:mt-4">
        <Link
          href={href}
          className="inline-flex items-center text-sm sm:text-base text-secondary hover:text-secondary/80 transition-colors duration-200"
        >
          Learn more
          <svg
            className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

