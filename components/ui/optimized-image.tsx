"use client"

import React from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  onClick?: () => void
}

/**
 * OptimizedImage component that implements best practices for image loading
 * - Uses Next.js Image component for automatic optimization
 * - Implements lazy loading by default
 * - Allows setting priority for LCP images
 * - Provides proper width and height attributes
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  onClick,
}: OptimizedImageProps) {
  // Handle external URLs (like Unsplash, Pexels) vs local images
  const isExternalUrl = src.startsWith("http")

  if (isExternalUrl) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onClick={onClick}
      />
    )
  }

  // For local images, use Next.js Image component
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onClick={onClick}
    />
  )
}