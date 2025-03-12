"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { OptimizedImage } from "./ui/optimized-image"

export default function ImageRecommendations() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const imageRecommendations = [
    {
      section: "Homepage Hero",
      description: "A professional image showing AI automation in a Nigerian business context",
      suggestions: [
        "Search for 'AI automation business Nigeria' on Unsplash or Pexels",
        "A photo of Nigerian professionals working with technology",
        "A clean, modern office space with technology elements",
      ],
      urls: [
        "https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-with-laptop-5fNmWej4tAA",
        "https://www.pexels.com/photo/man-people-woman-technology-6804604/",
        "https://unsplash.com/photos/man-in-black-long-sleeve-shirt-sitting-beside-woman-in-black-long-sleeve-shirt-hpjSkU2UYSU",
      ],
    },
    {
      section: "Automation Consulting",
      description: "Image representing AI consulting or business analysis",
      suggestions: [
        "Search for 'business consulting technology' on stock photo sites",
        "People analyzing data on screens or in a meeting",
        "Visual representations of AI or automation processes",
      ],
      urls: [
        "https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-with-laptop-5fNmWej4tAA",
        "https://www.pexels.com/photo/people-discussing-about-graphs-and-rates-3184292/",
        "https://unsplash.com/photos/person-writing-on-white-paper-Hcfwew744z4",
      ],
    },
    {
      section: "Engineer Outsourcing",
      description: "Image representing engineering teams or technical collaboration",
      suggestions: [
        "Search for 'software engineers team' or 'IT professionals'",
        "Diverse team working on code or technical projects",
        "Engineers collaborating in a modern workspace",
      ],
      urls: [
        "https://unsplash.com/photos/man-in-white-dress-shirt-sitting-beside-woman-in-black-blazer-bwki71ap-y8",
        "https://www.pexels.com/photo/people-working-in-front-of-the-computer-3182763/",
        "https://unsplash.com/photos/people-using-laptops-QckxruozjRg",
      ],
    },
    {
      section: "Business Acquisitions",
      description: "Image representing business growth or acquisition",
      suggestions: [
        "Search for 'business acquisition' or 'company merger'",
        "Handshake or business deal imagery",
        "Growth charts or business analytics visuals",
      ],
      urls: [
        "https://unsplash.com/photos/two-person-shaking-hands-in-front-of-laptop-computer-on-table-hcHmgMV4Sr4",
        "https://www.pexels.com/photo/crop-businessman-handshaking-with-partner-3815585/",
        "https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-gMsnXqILjp4",
      ],
    },
    {
      section: "Founder's Photo",
      description: "Professional headshot or business portrait",
      suggestions: [
        "A professional headshot of Prince Uwagboe if available",
        "Otherwise, search for 'professional African businessman portrait'",
        "Business professional in formal attire against neutral background",
      ],
      urls: [
        "https://unsplash.com/photos/man-in-black-suit-jacket-ILip77SbmOE",
        "https://www.pexels.com/photo/well-dressed-young-black-businessman-with-smartphone-5668859/",
        "https://unsplash.com/photos/man-in-black-suit-jacket-standing-near-glass-window-SJvDxw0azqw",
      ],
    },
    {
      section: "Client Success Stories",
      description: "Images representing client industries (manufacturing, healthcare)",
      suggestions: [
        "Search for 'Nigerian manufacturing' or 'African healthcare'",
        "Modern factory floor or healthcare facility",
        "Business professionals in these industries",
      ],
      urls: [
        "https://unsplash.com/photos/people-working-inside-the-factory-5Hl5reICevY",
        "https://www.pexels.com/photo/photo-of-woman-checking-the-blood-pressure-of-a-woman-4226896/",
        "https://unsplash.com/photos/man-in-blue-scrub-suit-standing-beside-woman-in-blue-scrub-suit-NFvdKIhxYlU",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Image Recommendations</h2>
      <p className="text-gray-600">
        Here are recommended images for each section of your website. You can download these images from the provided
        URLs and replace the placeholder images in your code.
      </p>

      <div className="space-y-6">
        {imageRecommendations.map((rec, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-primary mb-2">{rec.section}</h3>
            <p className="text-gray-700 mb-3">{rec.description}</p>

            <h4 className="font-semibold text-gray-800 mt-4 mb-2">Suggestions:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              {rec.suggestions.map((suggestion, idx) => (
                <li key={idx} className="text-gray-600">
                  {suggestion}
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-gray-800 mt-4 mb-2">Recommended Images:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {rec.urls.map((url, idx) => (
                <div key={idx} className="relative">
                  <motion.div 
                    className="relative overflow-hidden rounded-md border border-gray-200 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImage(url)}
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-medium text-sm transition-opacity duration-300">Preview</span>
                    </div>
                  </motion.div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline text-xs mt-1 block truncate"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Source
                  </a>
                </div>
              ))}
            </div>
            
            {/* Image preview modal */}
            {selectedImage && (
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div 
                  className="relative max-w-4xl max-h-[90vh] overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="relative">
                    <OptimizedImage 
                      src={selectedImage} 
                      alt="Preview" 
                      width={800}
                      height={600}
                      priority={true}
                      className="max-w-full max-h-[80vh] object-contain bg-white"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button 
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(null)
                      }}
                      suppressHydrationWarning
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" suppressHydrationWarning>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <a 
                      href={selectedImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm underline"
                      onClick={(e) => e.stopPropagation()}
                      suppressHydrationWarning
                    >
                      Open Original
                    </a>
                    <button 
                      className="text-gray-300 hover:text-white text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(null)
                      }}
                      suppressHydrationWarning
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">How to Use These Images</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Visit the URLs provided and download the images you like.</li>
          <li>
            Optimize the images for web (you can use tools like{" "}
            <a
              href="https://squoosh.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
              suppressHydrationWarning
            >
              Squoosh
            </a>
            ).
          </li>
          <li>
            Place the downloaded images in your project's <code className="bg-gray-100 px-2 py-1 rounded">public</code>{" "}
            folder.
          </li>
          <li>
            Update the image paths in your code from{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">/placeholder.svg?height=400&width=600</code> to{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">/your-image-name.jpg</code>.
          </li>
        </ol>
      </div>
    </div>
  )
}

