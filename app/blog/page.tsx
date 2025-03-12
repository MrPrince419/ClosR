"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "How AI Automation is Transforming Nigerian Manufacturing",
    excerpt:
      "Discover how AI-driven automation is revolutionizing the manufacturing sector in Nigeria, leading to increased efficiency and reduced costs.",
    date: "March 15, 2023",
    author: "Prince Uwagboe",
    slug: "ai-automation-nigerian-manufacturing",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=600&h=300&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The ROI of Implementing AI Solutions in Nigerian Businesses",
    excerpt:
      "A detailed analysis of the return on investment that Nigerian businesses can expect when implementing AI automation solutions.",
    date: "April 22, 2023",
    author: "Adebayo Johnson",
    slug: "roi-ai-solutions-nigerian-businesses",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=300&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Top 5 Industries in Nigeria Ready for AI Disruption",
    excerpt:
      "Explore the five industries in Nigeria that are primed for transformation through AI automation and technological innovation.",
    date: "May 10, 2023",
    author: "Ngozi Okafor",
    slug: "top-industries-nigeria-ai-disruption",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&h=300&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Building an AI-Ready Workforce in Nigeria",
    excerpt:
      "Strategies for developing the skills and knowledge needed to prepare Nigerian workers for an AI-automated future.",
    date: "June 5, 2023",
    author: "Emmanuel Nwachukwu",
    slug: "building-ai-ready-workforce-nigeria",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&h=300&auto=format&fit=crop",
  },
]

export default function Blog() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ClosR Blog
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Insights and perspectives on AI automation for Nigerian businesses.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="md:flex h-full">
                  <div className="md:flex-shrink-0">
                    <div className="relative h-48 w-full md:w-48 md:h-full">
                      <Image
                        className="object-cover"
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        priority={post.id <= 2}
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-secondary">{post.date}</p>
                      <span className="mx-1 text-gray-500">&middot;</span>
                      <p className="text-sm font-medium text-gray-600">By {post.author}</p>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block mt-2 flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors duration-200"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Want to learn more about AI automation?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact our team to discuss how AI automation can transform your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

