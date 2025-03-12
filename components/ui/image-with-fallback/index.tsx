"use client"

import Image, { ImageProps } from "next/image"
import { useState, useEffect } from "react"

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder.jpg",
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    // Reset error state when src changes
    setError(false)
    setImgSrc(src)
  }, [src])

  return (
    <Image
      {...props}
      src={error ? fallbackSrc : (imgSrc || src)}
      alt={alt}
      onError={() => {
        setError(true)
        setImgSrc(fallbackSrc)
      }}
    />
  )
}