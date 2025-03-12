"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

export default function About() {
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
            About ClosR
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bringing cutting-edge AI automation to Nigerian businesses.
          </motion.p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Founder's Story</h2>
              <div className="prose prose-lg text-gray-500">
                <p>
                  Prince Uwagboe, inspired by Canada's AI advancements, founded ClosR to bring cutting-edge automation
                  to Nigeria's untapped market.
                </p>
                <p>
                  After witnessing the transformative power of AI automation in various industries abroad, Prince
                  recognized the immense potential for similar technologies to revolutionize Nigerian businesses. He saw
                  an opportunity to bridge the technological gap and empower local companies with the tools they needed
                  to compete globally.
                </p>
                <p>
                  With a background in technology and business optimization, Prince assembled a team of skilled
                  engineers and business strategists who shared his vision. Together, they've built ClosR into a leading
                  force for AI-driven business transformation in Nigeria.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex items-center justify-center h-[400px]">
                <div className="text-center">
                  <div className="inline-block rounded-full overflow-hidden h-32 w-32 mb-4 relative">
                    <ImageWithFallback
                      src="/images/founder.png"
                      alt="Prince Uwagboe"
                      fill
                      sizes="128px"
                      quality={75}
                      className="object-cover"
                      fallbackSrc="/placeholder-user.jpg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Prince Uwagboe</h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h3 className="text-2xl font-bold text-primary mb-2">2020</h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">The Beginning</h4>
                  <p className="text-gray-600">
                    ClosR was founded with a vision to bring AI automation to Nigerian businesses. Starting with just three team members, we began developing our core technology platform.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h3 className="text-2xl font-bold text-primary mb-2">2021</h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">First Clients</h4>
                  <p className="text-gray-600">
                    We launched our first AI automation solutions and secured partnerships with five major Nigerian businesses across retail and manufacturing sectors.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h3 className="text-2xl font-bold text-primary mb-2">2023</h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Expansion</h4>
                  <p className="text-gray-600">
                    ClosR expanded operations to serve businesses across West Africa, growing our team to over 30 professionals and launching our advanced AI platform.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                Empowering Nigerian businesses to thrive through AI-driven automation, innovation, and strategic
                acquisitions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To be the leading AI automation partner for Nigerian businesses, driving economic growth and
                technological advancement across the country.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ClosR.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8 text-center hover:bg-white hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek new and better ways to solve problems and create value for our clients.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8 text-center hover:bg-white hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest standards in everything we do, from code quality to client
                communication.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8 text-center hover:bg-white hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical business practices in all our dealings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving our mission forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Founder */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center p-8">
                <div className="h-32 w-32 rounded-full overflow-hidden relative">
                  <ImageWithFallback
                    src="/images/founder.png"
                    alt="Prince Uwagboe"
                    fill
                    sizes="128px"
                    quality={75}
                    className="object-cover"
                    fallbackSrc="/placeholder-user.jpg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Prince Uwagboe</h3>
                <p className="text-accent font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  Visionary leader with expertise in AI technology and business transformation.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-accent/10 to-accent/30 flex items-center justify-center p-8">
                <div className="h-32 w-32 border-4 border-white shadow-lg rounded-full overflow-hidden relative">
                  <ImageWithFallback
                    src="/images/sarah-johnson.png"
                    alt="Sarah Johnson"
                    fill
                    sizes="128px"
                    quality={75}
                    loading="lazy"
                    className="object-cover"
                    fallbackSrc="/placeholder-user.jpg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-accent font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">
                  AI specialist with over 10 years of experience developing cutting-edge automation solutions.
                </p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                <div className="h-32 w-32 border-4 border-white shadow-lg rounded-full overflow-hidden relative">
                  <ImageWithFallback
                    src="/images/michael-okonkwo.png"
                    alt="Michael Okonkwo"
                    fill
                    sizes="128px"
                    quality={75}
                    className="object-cover"
                    fallbackSrc="/placeholder-user.jpg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Okonkwo</h3>
                <p className="text-accent font-medium mb-3">Chief Business Officer</p>
                <p className="text-gray-600">
                  Strategic business leader with deep knowledge of the Nigerian market and business landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join the growing number of Nigerian businesses leveraging AI automation to increase efficiency, reduce costs, and drive growth.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

