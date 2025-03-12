import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock } from "lucide-react"
import SocialLinks from "@/components/social-links"
import { calculateReadingTime } from "@/utils/reading-time"
import { motion } from "framer-motion"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "ai-automation-nigerian-manufacturing": {
      title: "How AI Automation is Transforming Nigerian Manufacturing",
      date: "March 15, 2023",
      author: "Prince Uwagboe",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&h=500&auto=format&fit=crop",
      content: `
        <p>The manufacturing sector in Nigeria is undergoing a significant transformation, driven by the adoption of AI automation technologies. This shift is not just enhancing operational efficiency but is also positioning Nigerian manufacturers to compete more effectively in the global market.</p>
        
        <h2>The Current State of Manufacturing in Nigeria</h2>
        
        <p>Nigeria's manufacturing sector has traditionally faced challenges such as inconsistent power supply, high operational costs, and limited access to advanced technologies. These factors have hindered the sector's growth and competitiveness. However, the introduction of AI automation is beginning to address these challenges in innovative ways.</p>
        
        <h2>Key Benefits of AI Automation in Manufacturing</h2>
        
        <p>AI automation is delivering several key benefits to Nigerian manufacturers:</p>
        
        <ul>
          <li><strong>Increased Efficiency:</strong> Automated systems can operate continuously without the fatigue that affects human workers, leading to higher production rates.</li>
          <li><strong>Reduced Costs:</strong> By optimizing processes and reducing waste, AI automation helps manufacturers lower their operational costs.</li>
          <li><strong>Improved Quality Control:</strong> AI-powered quality control systems can detect defects with greater accuracy than human inspectors, ensuring higher product quality.</li>
          <li><strong>Enhanced Safety:</strong> Automation of dangerous tasks reduces the risk of workplace accidents and injuries.</li>
          <li><strong>Data-Driven Decision Making:</strong> AI systems collect and analyze vast amounts of data, providing insights that help manufacturers make more informed decisions.</li>
        </ul>
        
        <h2>Case Study: Lagos Manufacturing Plant</h2>
        
        <p>A manufacturing plant in Lagos implemented AI automation in their production line and saw a 50% increase in efficiency within six months. The system optimized the use of raw materials, reducing waste by 30%, and improved product quality, resulting in fewer returns and higher customer satisfaction.</p>
        
        <h2>Challenges and Solutions</h2>
        
        <p>Despite the benefits, the adoption of AI automation in Nigerian manufacturing faces challenges such as high initial costs, lack of technical expertise, and resistance to change. To address these challenges, companies like ClosR are providing:</p>
        
        <ul>
          <li><strong>Phased Implementation:</strong> Breaking down the automation process into manageable phases to spread out costs.</li>
          <li><strong>Technical Training:</strong> Providing comprehensive training to equip workers with the skills needed to operate and maintain automated systems.</li>
          <li><strong>Change Management:</strong> Implementing strategies to help employees adapt to new technologies and workflows.</li>
        </ul>
      `
    }
  }
  return posts[slug as keyof typeof posts]
}

export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return [
    { slug: "ai-automation-nigerian-manufacturing" }
  ]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) return null

  const readingTime = calculateReadingTime(post.content)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" size={20} />
        Back to Blog
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={500}
          className="w-full h-[500px] object-cover rounded-lg mb-8"
        />
        
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span className="flex items-center">
            <Clock className="mr-1" size={16} />
            {readingTime} min read
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/placeholder-user.jpg"
            alt={post.author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-medium">{post.author}</span>
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <SocialLinks />
        </div>
      </article>
    </div>
  )
}

