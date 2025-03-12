"use client"

import Link from "next/link"
import { ArrowRight, Search, Users, TrendingUp, BarChart2, Zap, Award } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"
import { motion } from "framer-motion"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <div>
      {/* Hero Section with animated gradient background */}
      <section className="animated-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Nigerian Businesses with AI Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Reduce costs, streamline processes, and scale growth with our tailored solutions.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Decorative shapes */}
          <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
            <div className="shape-circle bg-white/10 h-20 w-20"></div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
            <div className="shape-triangle bg-white/10 h-20 w-20"></div>
          </div>
        </div>
      </section>

      {/* What We Do Section with pattern background */}
      <section className="py-16 pattern-dots bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We help Nigerian businesses leverage AI automation to optimize operations, reduce costs, and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Search className="h-6 w-6" />}
              title="Automation Consulting"
              description="We help businesses adopt AI-driven automation to save time and resources."
              href="/services#automation-consulting"
              delay={0.1}
            />

            <ServiceCard
              icon={<Users className="h-6 w-6" />}
              title="Engineer Outsourcing"
              description="Deploy skilled engineers to implement automation and train your team."
              href="/services#engineer-outsourcing"
              delay={0.2}
            />

            <ServiceCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Business Acquisitions"
              description="We acquire, optimize, and sell underperforming businesses using AI."
              href="/services#business-acquisitions"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Client Success Stories with gradient background */}
      <section className="py-16 secondary-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Client Success Stories</h2>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              See how our solutions have transformed businesses across Nigeria.
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Why Choose Us Section with geometric shapes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with global best practices to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="glass-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/50 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">
                We deploy solutions quickly, ensuring minimal disruption to your operations.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-secondary/50 text-white">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Measurable Results</h3>
              <p className="text-gray-600">
                Our solutions deliver quantifiable improvements in efficiency and profitability.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/50 text-white">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                We understand the unique challenges and opportunities in the Nigerian market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 accent-gradient text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to schedule a free consultation and discover how our AI automation solutions can help your business grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

