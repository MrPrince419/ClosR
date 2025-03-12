"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate form submission with reduced timeout for better performance
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Reset form and show success message
      setFormData({ name: "", email: "", message: "" })
      setSubmitSuccess(true)

      // Hide success message after 3 seconds (reduced from 5 for better UX)
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      setSubmitError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help your business.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or want to discuss a potential project? Fill out the form and we'll
                get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">uwagboe.o.p@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {submitSuccess && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-md">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {submitError && <div className="p-4 bg-red-50 text-red-700 rounded-md">{submitError}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does a typical automation project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. Basic automation projects can be completed in 3-6
                months, while more comprehensive solutions may take 6-12 months.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you work with businesses of all sizes?</h3>
              <p className="text-gray-600">
                Yes, we work with businesses of all sizes across Nigeria. Our solutions are scalable and can be tailored
                to meet the needs of small businesses, mid-sized companies, and large enterprises.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-600">
                We have experience working with businesses in manufacturing, healthcare, finance, retail, and logistics.
                However, our AI automation solutions can be adapted to virtually any industry.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How do I know if my business can benefit from AI automation?
              </h3>
              <p className="text-gray-600">
                If your business has repetitive processes, data-heavy operations, or manual workflows that could be
                streamlined, you're likely a good candidate for AI automation. Contact us for a free consultation to
                explore the possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

