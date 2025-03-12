"use client"

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
        
        <h2>The Future of AI Automation in Nigerian Manufacturing</h2>
        
        <p>The future of AI automation in Nigerian manufacturing looks promising. As more manufacturers recognize the benefits and overcome the challenges, we can expect to see wider adoption of these technologies. This will not only boost the competitiveness of Nigerian manufacturers but also contribute to the country's economic growth.</p>
        
        <p>At ClosR, we are committed to helping Nigerian manufacturers harness the power of AI automation to transform their operations and achieve sustainable growth. Contact us to learn more about how we can help your manufacturing business thrive in the age of automation.</p>
      `,
    },
    "roi-ai-solutions-nigerian-businesses": {
      title: "The ROI of Implementing AI Solutions in Nigerian Businesses",
      date: "April 22, 2023",
      author: "Adebayo Johnson",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=500&auto=format&fit=crop",
      content: `
        <p>As Nigerian businesses increasingly explore AI automation solutions, one question remains paramount: What is the return on investment (ROI)? This article provides a comprehensive analysis of the financial benefits and considerations for implementing AI in the Nigerian business context.</p>
        
        <h2>Understanding AI Investment in the Nigerian Context</h2>
        
        <p>Investing in AI technology requires careful consideration of both direct costs (hardware, software, implementation) and indirect costs (training, maintenance, organizational changes). For Nigerian businesses, these investments must be evaluated against the unique challenges of the local market, including infrastructure limitations and skill gaps.</p>
        
        <h2>Quantifiable Returns on AI Investment</h2>
        
        <p>Our research across various Nigerian business sectors reveals several key areas where AI implementation delivers measurable returns:</p>
        
        <ul>
          <li><strong>Operational Efficiency:</strong> Nigerian businesses implementing AI automation report an average 35% reduction in operational costs within the first year.</li>
          <li><strong>Revenue Growth:</strong> AI-powered customer insights and personalization have led to 25-40% increases in sales conversion rates for Nigerian e-commerce businesses.</li>
          <li><strong>Error Reduction:</strong> Financial institutions using AI for fraud detection have seen a 60% decrease in fraudulent transactions, saving millions of naira annually.</li>
          <li><strong>Resource Optimization:</strong> Manufacturing companies report 30% improvements in resource utilization after implementing AI-driven predictive maintenance.</li>
        </ul>
        
        <h2>Case Study: Lagos Fintech Company</h2>
        
        <p>A leading Lagos-based fintech company invested ₦75 million in AI automation for customer service and fraud detection. Within 18 months, they achieved:</p>
        
        <ul>
          <li>65% reduction in customer service response times</li>
          <li>40% decrease in operational costs</li>
          <li>50% improvement in fraud detection accuracy</li>
          <li>Total savings of approximately ₦180 million</li>
        </ul>
        
        <p>This represents an ROI of 140% in less than two years, with ongoing benefits expected to increase this figure substantially over time.</p>
        
        <h2>Timeline to Positive ROI</h2>
        
        <p>Our analysis of Nigerian businesses across various sectors shows:</p>
        
        <ul>
          <li><strong>Financial Services:</strong> 12-18 months to positive ROI</li>
          <li><strong>Manufacturing:</strong> 18-24 months to positive ROI</li>
          <li><strong>Retail:</strong> 12-15 months to positive ROI</li>
          <li><strong>Healthcare:</strong> 24-36 months to positive ROI</li>
        </ul>
        
        <h2>Beyond Financial Returns</h2>
        
        <p>While financial metrics are crucial, Nigerian businesses are also realizing significant non-financial benefits from AI implementation:</p>
        
        <ul>
          <li><strong>Improved Customer Experience:</strong> Enhanced personalization and faster service delivery</li>
          <li><strong>Better Decision Making:</strong> Data-driven insights enabling more informed strategic choices</li>
          <li><strong>Competitive Advantage:</strong> Early adopters gaining significant market differentiation</li>
          <li><strong>Employee Satisfaction:</strong> Automation of repetitive tasks allowing staff to focus on higher-value activities</li>
        </ul>
        
        <h2>Maximizing ROI: Best Practices</h2>
        
        <p>To achieve optimal returns on AI investments, Nigerian businesses should:</p>
        
        <ul>
          <li><strong>Start Small:</strong> Begin with focused projects that address specific business challenges</li>
          <li><strong>Prioritize Data Quality:</strong> Invest in data collection and management infrastructure</li>
          <li><strong>Build Internal Capabilities:</strong> Develop AI literacy across the organization</li>
          <li><strong>Partner Strategically:</strong> Work with experienced AI implementation partners like ClosR</li>
        </ul>
        
        <p>At ClosR, we help Nigerian businesses navigate the AI implementation journey with a focus on maximizing ROI. Contact us to learn how we can help your organization achieve significant returns on AI investments.</p>
      `,
    },
    "top-industries-nigeria-ai-disruption": {
      title: "Top 5 Industries in Nigeria Ready for AI Disruption",
      date: "May 10, 2023",
      author: "Ngozi Okafor",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&h=500&auto=format&fit=crop",
      content: `
        <p>Nigeria's economic landscape is on the cusp of a technological revolution, with artificial intelligence poised to transform multiple sectors. This article explores the five industries most ready for AI disruption and the potential impact on Nigeria's economy.</p>
        
        <h2>1. Financial Services</h2>
        
        <p>Nigeria's financial sector, already a leader in African fintech innovation, stands to gain tremendously from AI implementation:</p>
        
        <ul>
          <li><strong>Fraud Detection:</strong> AI algorithms can analyze transaction patterns to identify fraudulent activities with greater accuracy than traditional methods, potentially saving Nigerian banks billions of naira annually.</li>
          <li><strong>Credit Scoring:</strong> AI-powered credit scoring systems can assess creditworthiness for the previously unbanked population, expanding financial inclusion.</li>
          <li><strong>Customer Service:</strong> Chatbots and virtual assistants are revolutionizing customer interactions, with Nigerian banks reporting 40-60% reductions in service costs after implementation.</li>
          <li><strong>Market Analysis:</strong> AI tools provide deeper insights into market trends, enabling more informed investment decisions.</li>
        </ul>
        
        <p>Leading Nigerian financial institutions like Access Bank and Guaranty Trust Bank are already investing heavily in AI capabilities, setting the stage for widespread adoption across the sector.</p>
        
        <h2>2. Agriculture</h2>
        
        <p>As Nigeria's largest employer and a critical sector for food security, agriculture stands to benefit significantly from AI technologies:</p>
        
        <ul>
          <li><strong>Precision Farming:</strong> AI-powered systems can analyze soil conditions, weather patterns, and crop health to optimize farming practices.</li>
          <li><strong>Supply Chain Optimization:</strong> AI can reduce post-harvest losses (currently estimated at 50% for some crops) through improved logistics and storage recommendations.</li>
          <li><strong>Pest and Disease Management:</strong> Early detection systems using computer vision can identify crop diseases before they spread.</li>
          <li><strong>Market Access:</strong> AI platforms can connect farmers directly with buyers, eliminating middlemen and increasing farmer profits by up to 30%.</li>
        </ul>
        
        <p>Companies like Hello Tractor are already using AI to optimize farm equipment usage, while Farmcrowdy is leveraging data analytics to improve agricultural investment decisions.</p>
        
        <h2>3. Healthcare</h2>
        
        <p>With a doctor-to-patient ratio of approximately 1:5,000, Nigeria's healthcare system faces significant challenges that AI can help address:</p>
        
        <ul>
          <li><strong>Diagnostic Assistance:</strong> AI tools can help healthcare workers in remote areas make more accurate diagnoses, particularly for conditions like malaria, tuberculosis, and pneumonia.</li>
          <li><strong>Predictive Healthcare:</strong> AI can identify disease outbreaks before they become epidemics by analyzing patterns in patient data.</li>
          <li><strong>Administrative Efficiency:</strong> Automation of routine tasks can free up healthcare workers to focus on patient care.</li>
          <li><strong>Telemedicine:</strong> AI-enhanced remote healthcare services can extend medical expertise to underserved rural areas.</li>
        </ul>
        
        <p>Nigerian health-tech startups like 54gene and Helium Health are pioneering AI applications in healthcare, with promising early results in improving patient outcomes and operational efficiency.</p>
        
        <h2>4. Education</h2>
        
        <p>Nigeria's education sector, facing challenges of accessibility and quality, can be transformed through AI technologies:</p>
        
        <ul>
          <li><strong>Personalized Learning:</strong> AI-powered platforms can adapt to individual student needs, providing customized learning experiences.</li>
          <li><strong>Access to Quality Education:</strong> AI can help bridge the urban-rural education gap by providing high-quality educational content to remote areas.</li>
          <li><strong>Administrative Efficiency:</strong> Schools and universities can streamline operations through AI-powered systems for enrollment, grading, and resource allocation.</li>
          <li><strong>Teacher Support:</strong> AI tools can assist teachers with lesson planning, student assessment, and identifying areas where students need additional help.</li>
        </ul>
        
        <p>Educational technology companies like uLesson are already leveraging AI to improve learning outcomes for Nigerian students.</p>
        
        <h2>5. Retail and E-commerce</h2>
        
        <p>Nigeria's rapidly growing retail sector is ripe for AI disruption:</p>
        
        <ul>
          <li><strong>Personalized Shopping:</strong> AI algorithms can analyze customer behavior to provide personalized product recommendations.</li>
          <li><strong>Inventory Management:</strong> Predictive analytics can optimize stock levels, reducing both stockouts and excess inventory.</li>
          <li><strong>Customer Service:</strong> AI-powered chatbots can handle customer inquiries 24/7, improving customer satisfaction.</li>
          <li><strong>Logistics Optimization:</strong> AI can improve last-mile delivery in Nigeria's challenging transportation environment.</li>
        </ul>
        
        <p>E-commerce leaders like Jumia and Konga are investing in AI capabilities to enhance customer experience and operational efficiency.</p>
        
        <h2>Conclusion: The Path Forward</h2>
        
        <p>For Nigeria to fully realize the benefits of AI across these industries, several key enablers must be addressed:</p>
        
        <ul>
          <li><strong>Infrastructure Development:</strong> Reliable power and internet connectivity are prerequisites for AI implementation.</li>
          <li><strong>Skills Development:</strong> Nigeria needs to invest in AI education and training to build local expertise.</li>
          <li><strong>Regulatory Frameworks:</strong> Appropriate regulations must be developed to address data privacy, security, and ethical concerns.</li>
          <li><strong>Investment:</strong> Both public and private investment in AI research and implementation must increase.</li>
        </ul>
        
        <p>At ClosR, we're committed to helping Nigerian businesses across these sectors harness the power of AI to drive growth, efficiency, and innovation. Contact us to learn how we can support your organization's AI journey.</p>
      `,
    },
    "building-ai-ready-workforce-nigeria": {
      title: "Building an AI-Ready Workforce in Nigeria",
      date: "June 5, 2023",
      author: "Emmanuel Nwachukwu",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&h=500&auto=format&fit=crop",
      content: `
        <p>As artificial intelligence transforms industries across Nigeria, one critical question emerges: Is our workforce ready for this technological revolution? This article explores strategies for developing the skills and knowledge needed to prepare Nigerian workers for an AI-automated future.</p>
        
        <h2>The AI Skills Gap in Nigeria</h2>
        
        <p>Nigeria faces a significant AI skills gap. While the country has a young, tech-savvy population, there remains a shortage of professionals with specialized AI expertise. Recent surveys indicate:</p>
        
        <ul>
          <li>Only 8% of Nigerian IT professionals have advanced AI skills</li>
          <li>Less than 5% of university graduates have taken courses in machine learning or data science</li>
          <li>Over 70% of businesses report difficulty finding qualified AI talent</li>
        </ul>
        
        <p>This gap threatens to limit Nigeria's ability to compete in the global AI economy and fully realize the benefits of automation technologies.</p>
        
        <h2>Key Skills for an AI-Ready Workforce</h2>
        
        <p>Building an AI-ready workforce requires developing both technical and non-technical skills:</p>
        
        <h3>Technical Skills</h3>
        
        <ul>
          <li><strong>Data Science and Analytics:</strong> The ability to collect, process, and derive insights from large datasets</li>
          <li><strong>Programming:</strong> Proficiency in languages like Python, R, and SQL that are commonly used in AI development</li>
          <li><strong>Machine Learning:</strong> Understanding of algorithms, model training, and evaluation</li>
          <li><strong>Domain Expertise:</strong> Industry-specific knowledge to apply AI solutions effectively</li>
        </ul>
        
        <h3>Non-Technical Skills</h3>
        
        <ul>
          <li><strong>Critical Thinking:</strong> The ability to interpret AI outputs and make informed decisions</li>
          <li><strong>Adaptability:</strong> Willingness to continuously learn and evolve with technological changes</li>
          <li><strong>Ethical Judgment:</strong> Understanding the ethical implications of AI implementation</li>
          <li><strong>Collaboration:</strong> Ability to work effectively with both humans and AI systems</li>
        </ul>
        
        <h2>Educational Initiatives and Opportunities</h2>
        
        <p>Several promising initiatives are addressing Nigeria's AI skills gap:</p>
        
        <h3>Formal Education</h3>
        
        <ul>
          <li><strong>University Programs:</strong> Institutions like the University of Lagos and Covenant University are introducing AI and data science degrees</li>
          <li><strong>Technical Colleges:</strong> Vocational training centers are incorporating AI modules into their curricula</li>
          <li><strong>International Partnerships:</strong> Collaborations with global universities providing access to world-class AI education</li>
        </ul>
        
        <h3>Alternative Learning Pathways</h3>
        
        <ul>
          <li><strong>Bootcamps and Short Courses:</strong> Intensive training programs focused on practical AI skills</li>
          <li><strong>Online Learning:</strong> Platforms like Coursera, Udacity, and DataCamp offering accessible AI education</li>
          <li><strong>Community Initiatives:</strong> Tech hubs and innovation centers providing mentorship and hands-on experience</li>
        </ul>
        
        <h2>Case Study: Data Science Nigeria</h2>
        
        <p>Data Science Nigeria (DSN) exemplifies successful AI workforce development. Through bootcamps, competitions, and learning communities, DSN has trained over 50,000 Nigerians in AI and data science skills. Their AI Saturdays program has created learning communities across 15 Nigerian cities, democratizing access to AI education.</p>
        
        <h2>The Role of Government and Industry</h2>
        
        <p>Building an AI-ready workforce requires collaboration between multiple stakeholders:</p>
        
        <h3>Government Initiatives</h3>
        
        <ul>
          <li><strong>National AI Strategy:</strong> Developing a comprehensive plan for AI adoption and workforce development</li>
          <li><strong>Educational Reform:</strong> Updating curricula at all levels to incorporate digital literacy and AI concepts</li>
          <li><strong>Funding and Incentives:</strong> Providing grants, scholarships, and tax incentives for AI education and training</li>
        </ul>
        
        <h3>Industry Responsibility</h3>
        
        <ul>
          <li><strong>Workplace Training:</strong> Investing in upskilling and reskilling current employees</li>
          <li><strong>Internships and Apprenticeships:</strong> Creating entry points for new AI talent</li>
          <li><strong>Industry-Academia Partnerships:</strong> Collaborating with educational institutions to ensure relevant skill development</li>
        </ul>
        
        <h2>ClosR's Commitment to AI Workforce Development</h2>
        
        <p>At ClosR, we're committed to developing Nigeria's AI talent pipeline through:</p>
        
        <ul>
          <li>Our AI Academy, which provides free training to promising young Nigerians</li>
          <li>Partnerships with universities to offer internships and practical experience</li>
          <li>Mentorship programs connecting industry experts with emerging AI talent</li>
          <li>Research grants supporting innovative AI applications in local contexts</li>
        </ul>
        
        <h2>Conclusion: Preparing for an AI-Enabled Future</h2>
        
        <p>Building an AI-ready workforce is not just about economic competitiveness—it's about ensuring that Nigerians can actively participate in and benefit from the fourth industrial revolution. By investing in both technical and human skills, Nigeria can position itself as an AI leader in Africa and create a workforce that thrives in an increasingly automated world.</p>
        
        <p>The journey toward an AI-ready workforce requires commitment from all stakeholders—government, educational institutions, industry, and individuals. At ClosR, we're proud to be part of this transformation and invite you to join us in building Nigeria's AI future.</p>
      `,
    }
  }

  return posts[slug as keyof typeof posts] || null
}

export async function generateStaticParams() {
  // Return an array of objects with slug parameters for all blog posts
  return [
    { slug: "ai-automation-nigerian-manufacturing" },
    { slug: "roi-ai-solutions-nigerian-businesses" }
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to Blog
      </Link>
      
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <div className="mr-6">
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="mr-6">{post.date}</div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <div className="mt-12 border-t pt-8">
        <h3 className="text-2xl font-bold mb-4">Share this article</h3>
        <SocialLinks />
      </div>
    </div>
  );
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Unwrap params using React.use() before accessing its properties
  const unwrappedParams = React.use(params);
  const post = getBlogPost(unwrappedParams.slug)

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/blog" className="inline-flex items-center text-secondary hover:text-secondary/80">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </Link>
      </div>
    )
  }

  const readingTime = calculateReadingTime(post.content)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="flex items-center justify-center text-sm flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>{post.date}</span>
            <span className="mx-2">&middot;</span>
            <span>By {post.author}</span>
            <span className="mx-2">&middot;</span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {readingTime} min read
            </span>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-secondary hover:text-secondary/80">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </div>

          <motion.div
            className="mb-8 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Share this article</h3>
                <SocialLinks className="mt-2" />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Want to learn more?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our other articles or contact our team to discuss how AI automation can transform your business.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              More Articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

