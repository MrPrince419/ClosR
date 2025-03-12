"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type FormData = z.infer<typeof schema>

export default function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>("") 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Success simulation
      setSubmitStatus("success")
      reset()
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-sm p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest insights on AI automation and digital transformation in Nigeria.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              disabled={isSubmitting}
              suppressHydrationWarning
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          suppressHydrationWarning
        >
          {isSubmitting ? (
            <>
              <span className="inline-block animate-spin mr-2">⟳</span>
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>

        {submitStatus === "success" && (
          <div 
            className="mt-4 p-3 bg-green-50 text-green-700 rounded-md"
            role="alert"
          >
            <p className="text-center font-medium">
              Thank you for subscribing! We'll keep you updated with the latest news.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div 
            className="mt-4 p-3 bg-red-50 text-red-700 rounded-md"
            role="alert"
          >
            <p className="text-center font-medium">{errorMessage}</p>
          </div>
        )}
      </form>
    </motion.div>
  )
}

