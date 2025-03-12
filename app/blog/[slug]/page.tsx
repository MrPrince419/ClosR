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
    },
    "top-industries-nigeria-ai-disruption": {
      title: "Top Industries in Nigeria Being Disrupted by AI",
      date: "March 22, 2023",
      author: "Prince Uwagboe",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=500&auto=format&fit=crop",
      content: `
        <p>Artificial Intelligence (AI) is revolutionizing various sectors of the Nigerian economy, creating new opportunities and transforming traditional business models. Here's an in-depth look at the industries experiencing the most significant AI-driven disruption.</p>

        <h2>1. Financial Services</h2>
        
        <p>The banking and fintech sector is leading the AI revolution in Nigeria:</p>
        
        <ul>
          <li><strong>Automated Customer Service:</strong> AI-powered chatbots and virtual assistants handling customer inquiries 24/7</li>
          <li><strong>Fraud Detection:</strong> Machine learning algorithms identifying suspicious transactions in real-time</li>
          <li><strong>Credit Scoring:</strong> AI systems analyzing alternative data to assess creditworthiness</li>
        </ul>

        <h2>2. Healthcare</h2>
        
        <p>Healthcare delivery is being transformed through AI applications:</p>
        
        <ul>
          <li><strong>Diagnostic Assistance:</strong> AI algorithms helping doctors make more accurate diagnoses</li>
          <li><strong>Telemedicine:</strong> AI-enabled remote healthcare services reaching rural areas</li>
          <li><strong>Drug Discovery:</strong> Machine learning accelerating the development of new medications</li>
        </ul>

        <h2>3. Agriculture</h2>
        
        <p>The agricultural sector is embracing AI for improved productivity:</p>
        
        <ul>
          <li><strong>Crop Monitoring:</strong> AI-powered drones and sensors tracking crop health</li>
          <li><strong>Yield Prediction:</strong> Machine learning models forecasting harvest volumes</li>
          <li><strong>Smart Irrigation:</strong> Automated systems optimizing water usage</li>
        </ul>

        <h2>4. Education</h2>
        
        <p>Educational institutions are leveraging AI to enhance learning:</p>
        
        <ul>
          <li><strong>Personalized Learning:</strong> AI adapting content to individual student needs</li>
          <li><strong>Automated Grading:</strong> AI systems assisting in assessment and feedback</li>
          <li><strong>Administrative Tasks:</strong> Automation of routine administrative work</li>
        </ul>

        <h2>Future Outlook</h2>
        
        <p>As AI technology continues to evolve, we expect to see:</p>
        
        <ul>
          <li><strong>Increased Investment:</strong> More funding flowing into AI-driven startups</li>
          <li><strong>Job Market Evolution:</strong> New roles emerging in AI implementation and management</li>
          <li><strong>Cross-Industry Integration:</strong> AI solutions bridging different sectors</li>
        </ul>
      `
    },
    "building-ai-ready-workforce-nigeria": {
      title: "Building an AI-Ready Workforce in Nigeria",
      date: "March 29, 2023",
      author: "Prince Uwagboe",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&h=500&auto=format&fit=crop",
      content: `
        <p>As artificial intelligence continues to reshape industries across Nigeria, the need for a skilled workforce capable of leveraging these technologies becomes increasingly critical. This article explores the strategies and initiatives being implemented to build an AI-ready workforce in Nigeria.</p>

        <h2>The Current Skills Gap</h2>
        
        <p>Nigeria faces a significant skills gap in AI and related technologies:</p>
        
        <ul>
          <li><strong>Technical Skills:</strong> Limited expertise in machine learning, data science, and AI development</li>
          <li><strong>Infrastructure:</strong> Need for better technical infrastructure and training facilities</li>
          <li><strong>Industry-Academia Gap:</strong> Disconnect between academic curriculum and industry needs</li>
        </ul>

        <h2>Building the Foundation</h2>
        
        <p>Several initiatives are underway to address these challenges:</p>
        
        <ul>
          <li><strong>Educational Programs:</strong> Universities introducing AI-focused courses and degrees</li>
          <li><strong>Industry Partnerships:</strong> Collaboration between tech companies and educational institutions</li>
          <li><strong>Government Support:</strong> Policy initiatives to promote AI education and training</li>
        </ul>

        <h2>Key Training Areas</h2>
        
        <p>The focus areas for workforce development include:</p>
        
        <ul>
          <li><strong>Technical Skills:</strong> Programming, machine learning, and data analysis</li>
          <li><strong>Soft Skills:</strong> Problem-solving, critical thinking, and adaptability</li>
          <li><strong>Industry Knowledge:</strong> Understanding of AI applications in various sectors</li>
        </ul>

        <h2>Success Stories</h2>
        
        <p>Several organizations are already seeing success in building AI capabilities:</p>
        
        <ul>
          <li><strong>Tech Hubs:</strong> Innovation centers providing hands-on AI training</li>
          <li><strong>Corporate Programs:</strong> Companies investing in employee AI skill development</li>
          <li><strong>International Partnerships:</strong> Collaboration with global AI leaders</li>
        </ul>
      `
    },
    "roi-ai-solutions-nigerian-businesses": {
      title: "ROI of AI Solutions for Nigerian Businesses",
      date: "April 5, 2023",
      author: "Prince Uwagboe",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=500&auto=format&fit=crop",
      content: `
        <p>As Nigerian businesses increasingly adopt AI solutions, understanding the return on investment (ROI) becomes crucial for making informed decisions. This article examines the tangible and intangible benefits of AI implementation across various business sectors.</p>

        <h2>Measuring AI ROI</h2>
        
        <p>Key metrics for evaluating AI investments:</p>
        
        <ul>
          <li><strong>Cost Savings:</strong> Reduction in operational expenses and resource utilization</li>
          <li><strong>Revenue Growth:</strong> Increased sales and new revenue streams</li>
          <li><strong>Productivity Gains:</strong> Improved efficiency and output quality</li>
        </ul>

        <h2>Success Stories</h2>
        
        <p>Real-world examples of AI ROI in Nigerian businesses:</p>
        
        <ul>
          <li><strong>Banking Sector:</strong> 40% reduction in customer service costs</li>
          <li><strong>Manufacturing:</strong> 30% improvement in production efficiency</li>
          <li><strong>Healthcare:</strong> 50% faster patient diagnosis times</li>
        </ul>

        <h2>Implementation Costs</h2>
        
        <p>Understanding the investment required:</p>
        
        <ul>
          <li><strong>Initial Setup:</strong> Hardware, software, and infrastructure costs</li>
          <li><strong>Training:</strong> Employee upskilling and development expenses</li>
          <li><strong>Maintenance:</strong> Ongoing support and updates</li>
        </ul>

        <h2>Long-term Benefits</h2>
        
        <p>Beyond immediate financial returns:</p>
        
        <ul>
          <li><strong>Competitive Advantage:</strong> Enhanced market position and capabilities</li>
          <li><strong>Innovation:</strong> New products and services development</li>
          <li><strong>Customer Satisfaction:</strong> Improved service quality and response times</li>
        </ul>
      `
    }
  }
  return posts[slug as keyof typeof posts]
}

export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return [
    { slug: "ai-automation-nigerian-manufacturing" },
    { slug: "top-industries-nigeria-ai-disruption" },
    { slug: "building-ai-ready-workforce-nigeria" },
    { slug: "roi-ai-solutions-nigerian-businesses" }
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
            src="/images/founder.png"
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

