import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive AI automation solutions tailored for Nigerian businesses.
          </p>
        </div>
      </section>

      {/* Automation Consulting */}
      <section id="automation-consulting" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🔍 Automation Consulting</h2>
              <p className="text-xl text-gray-600 mb-6">
                We help businesses adopt AI-driven automation to save time and resources.
              </p>
              <div className="prose prose-lg text-gray-500">
                <p>
                  Our automation consulting services help Nigerian businesses identify opportunities for AI-driven
                  process improvements. We analyze your current workflows, identify bottlenecks, and design custom
                  automation solutions that reduce costs and increase efficiency.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What We Offer:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Comprehensive workflow analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Custom automation strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>ROI projections and implementation roadmaps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Technology selection and integration planning</span>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pricing:</h3>
                <p>Project-based fees ranging from ₦5M to ₦25M, depending on scope and complexity.</p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Automation Consulting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineer Outsourcing */}
      <section id="engineer-outsourcing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Engineer Outsourcing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🔧 Engineer Outsourcing</h2>
              <p className="text-xl text-gray-600 mb-6">
                Deploy skilled engineers to implement automation and train your team.
              </p>
              <div className="prose prose-lg text-gray-500">
                <p>
                  Our engineer outsourcing service provides you with skilled AI and automation specialists who can
                  implement solutions and train your team. This approach allows you to leverage cutting-edge expertise
                  without the overhead of full-time hires.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Package Options:</h3>
                <div className="mt-4 space-y-8">
                  {/* Basic Package */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary">Basic Package</h4>
                    <p className="text-3xl font-bold mt-2">₦22.5M</p>
                    <p className="text-gray-500">($15k) - 3 months</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>1 Senior Engineer</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Basic automation implementation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Weekly progress reports</span>
                      </li>
                    </ul>
                  </div>

                  {/* Premium Package */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-secondary">
                    <h4 className="text-lg font-semibold text-primary">Premium Package</h4>
                    <p className="text-3xl font-bold mt-2">₦52.5M</p>
                    <p className="text-gray-500">($35k) - 6 months</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>1 Senior Engineer + 1 Junior Engineer</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Advanced automation implementation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Team training sessions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Bi-weekly progress reports</span>
                      </li>
                    </ul>
                  </div>

                  {/* Enterprise Package */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary">Enterprise Package</h4>
                    <p className="text-3xl font-bold mt-2">₦90M</p>
                    <p className="text-gray-500">($60k) - 12 months</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>2 Senior Engineers + 2 Junior Engineers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Comprehensive automation implementation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Extensive team training program</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>24/7 support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                        <span>Weekly detailed reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Acquisitions */}
      <section id="business-acquisitions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📈 Business Acquisitions</h2>
              <p className="text-xl text-gray-600 mb-6">
                We acquire, optimize, and sell underperforming businesses using AI.
              </p>
              <div className="prose prose-lg text-gray-500">
                <p>
                  Our business acquisition service identifies underperforming Nigerian businesses with high potential.
                  We acquire these businesses, implement AI-driven optimizations to increase efficiency and
                  profitability, and then either operate them long-term or prepare them for resale at a higher
                  valuation.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Approach:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Identify businesses with automation potential</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Implement AI-driven process improvements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Optimize operations and reduce costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Scale and grow the business</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span>Prepare for profitable exit or long-term operation</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
                >
                  Discuss Opportunities
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Business Acquisitions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help your business thrive.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

