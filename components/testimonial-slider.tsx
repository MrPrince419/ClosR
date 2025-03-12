"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

interface Testimonial {
  id: number
  name: string
  company: string
  location: string
  quote: string
  imagePath: string
}

export default function TestimonialSlider() {
  const pathname = usePathname()
  const basePath = process.env.NODE_ENV === 'production' ? '/ClosR' : ''
  
  // Testimonials with real images
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Faith Wathong",
      company: "Small Business",
      location: "Lagos, Nigeria",
      quote:
        "50% efficiency gains in 6 months for Premium clients. ClosR's automation solutions transformed our manufacturing processes.",
      imagePath: "/images/Faith Wathong.png",
    },
    {
      id: 2,
      name: "Didi Chineye",
      company: "Healthcare Provider",
      location: "Abuja, Nigeria",
      quote:
        "Reduced operational costs by 40% through AI-driven process optimization. The ROI was evident within the first quarter.",
      imagePath: "/images/Didi Chineye.png",
    },
    {
      id: 3,
      name: "Charles Elerebe",
      company: "Logistics Company",
      location: "Port Harcourt, Nigeria",
      quote:
        "The engineer outsourcing program helped us implement automation that reduced delivery times by 35% and improved customer satisfaction.",
      imagePath: "/images/Charles Elerebe.png",
    },
    {
      id: 4,
      name: "Fatima Bello",
      company: "Retail Chain",
      location: "Kano, Nigeria",
      quote:
        "ClosR's business acquisition team helped us optimize our operations and increase our valuation by 70% in just one year.",
      imagePath: "/images/Fatima Bello.png",
    },
  ]

  return (
    <div className="py-6 px-2 sm:py-8 sm:px-4 md:py-10 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6 flex flex-col h-full"
          >
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 italic mb-3 sm:mb-4">"
              <span className="break-words">{testimonial.quote}</span>"
            </p>
            <div className="mt-auto flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* Image-based avatar */}
              <div className="flex-shrink-0">
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full overflow-hidden relative">
                  <Image 
                    src={`${basePath}${testimonial.imagePath}`}
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                    quality={75}
                    loading={testimonial.id === 1 ? "eager" : "lazy"}
                    priority={testimonial.id === 1}
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `${basePath}/placeholder-user.jpg`;
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="text-sm sm:text-base font-medium text-gray-900">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {testimonial.company}, {testimonial.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

