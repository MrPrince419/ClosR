import Link from "next/link"
import { Settings, Image, FileText } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/favicon" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Favicon Generator</h2>
            </div>
            <p className="mt-3 text-gray-600">Generate a custom favicon with the letter 'C' for your website.</p>
          </div>
        </Link>

        <Link href="/admin/images" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Image className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Image Resources</h2>
            </div>
            <p className="mt-3 text-gray-600">Find recommended images for each section of your website.</p>
          </div>
        </Link>

        <Link href="/blog" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Blog Management</h2>
            </div>
            <p className="mt-3 text-gray-600">Manage your blog posts and content.</p>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Website Improvement Tips</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">1.</span>
            <span>Replace all placeholder images with real photos relevant to your business.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">2.</span>
            <span>Add real testimonials from your clients with their permission.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">3.</span>
            <span>Regularly update your blog with fresh content to improve SEO.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">4.</span>
            <span>Consider adding a chatbot for instant customer support.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">5.</span>
            <span>Implement Google Analytics to track website performance.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

