import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team 🌱</h1>
          <p className="text-xl max-w-3xl mx-auto">Be part of the AI revolution transforming Nigerian businesses.</p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Join ClosR?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're building something special, and we want you to be part of it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equity Incentives</h3>
              <p className="text-gray-600">
                Top talent receives equity stakes to grow with us. We believe in sharing our success with the team that
                makes it possible.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Work with the latest AI and automation technologies, solving real problems for Nigerian businesses.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">
                As we expand, you'll have opportunities to grow your skills, take on new challenges, and advance your
                career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help shape the future of AI automation in Nigeria.
            </p>
          </div>

          <div className="space-y-6">
            {/* Position 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Chief Technology Officer (CTO)</h3>
                <p className="text-gray-600 mt-2">Lagos, Nigeria | Full-time</p>
                <div className="mt-4 prose prose-lg text-gray-500">
                  <p>
                    We're looking for an experienced CTO to lead our technical strategy and engineering team. You'll be
                    responsible for overseeing all technical aspects of the company, from product development to
                    infrastructure.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mt-4">Requirements:</h4>
                  <ul>
                    <li>7+ years of experience in software engineering</li>
                    <li>3+ years in a leadership role</li>
                    <li>Strong background in AI and automation technologies</li>
                    <li>Experience scaling engineering teams</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center text-secondary hover:text-secondary/80">
                    Apply Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Position 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">AI Engineer</h3>
                <p className="text-gray-600 mt-2">Remote | Full-time</p>
                <div className="mt-4 prose prose-lg text-gray-500">
                  <p>
                    We're seeking talented AI Engineers to develop and implement automation solutions for our clients.
                    You'll work on cutting-edge projects that transform how Nigerian businesses operate.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mt-4">Requirements:</h4>
                  <ul>
                    <li>3+ years of experience in AI/ML development</li>
                    <li>Strong programming skills in Python</li>
                    <li>Experience with automation frameworks</li>
                    <li>Excellent problem-solving abilities</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center text-secondary hover:text-secondary/80">
                    Apply Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Position 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Sales Manager</h3>
                <p className="text-gray-600 mt-2">Lagos, Nigeria | Full-time</p>
                <div className="mt-4 prose prose-lg text-gray-500">
                  <p>
                    We're looking for a Sales Manager to help us grow our client base across Nigeria. You'll be
                    responsible for developing relationships with potential clients and showcasing the value of our AI
                    automation solutions.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mt-4">Requirements:</h4>
                  <ul>
                    <li>5+ years of B2B sales experience</li>
                    <li>Strong network in Nigerian business community</li>
                    <li>Excellent communication and presentation skills</li>
                    <li>Understanding of technology and automation concepts</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center text-secondary hover:text-secondary/80">
                    Apply Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't see the right position?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you
            can contribute.
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

