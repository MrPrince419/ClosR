"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function FaviconGenerator() {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      setMessage({ text: 'Please select an image file', type: 'error' })
      return
    }

    setImageFile(file)
    const fileUrl = URL.createObjectURL(file)
    setPreviewUrl(fileUrl)
    setMessage(null)
  }

  const generateFavicon = async () => {
    if (!imageFile) {
      setMessage({ text: 'Please select an image first', type: 'info' })
      return
    }

    setIsGenerating(true)
    setMessage({ text: 'Generating favicon...', type: 'info' })

    try {
      // In a real implementation, this would process the image and generate favicon files
      // For this example, we'll just simulate the process
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setMessage({ 
        text: 'Favicon generated successfully! In a real implementation, you would be able to download the favicon files.', 
        type: 'success' 
      })
    } catch (error) {
      setMessage({ 
        text: 'Failed to generate favicon. Please try again.', 
        type: 'error' 
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Favicon Generator</h2>
      <p className="text-gray-600 mb-6">
        Upload an image to generate a complete set of favicons for your website.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Image
        </label>
        <div className="flex items-center space-x-4">
          <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200">
            Select Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              disabled={isGenerating}
            />
          </label>
          <span className="text-sm text-gray-500">
            {imageFile ? imageFile.name : 'No file selected'}
          </span>
        </div>
      </div>

      {previewUrl && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Preview</h3>
          <div className="relative h-32 w-32 border border-gray-300 rounded-md overflow-hidden">
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <button
        onClick={generateFavicon}
        disabled={!imageFile || isGenerating}
        className={`w-full py-2 px-4 rounded-md transition duration-200 ${!imageFile || isGenerating
          ? 'bg-gray-300 cursor-not-allowed text-gray-500'
          : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
      >
        {isGenerating ? 'Generating...' : 'Generate Favicon'}
      </button>

      {message && (
        <div
          className={`mt-4 p-3 rounded-md ${message.type === 'success'
            ? 'bg-green-100 text-green-800'
            : message.type === 'error'
              ? 'bg-red-100 text-red-800'
              : 'bg-blue-100 text-blue-800'
            }`}
        >
          {message.text}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">
        <p>Note: This is a simplified implementation. In a production environment, this would:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Generate multiple favicon sizes</li>
          <li>Create manifest files</li>
          <li>Provide downloadable zip with all necessary files</li>
        </ul>
      </div>
    </div>
  )
}