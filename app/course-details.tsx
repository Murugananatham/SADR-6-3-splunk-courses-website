import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CourseDetails() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">SoftMania</h1>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-sm md:text-base">Contact Us</Button>
        </div>
      </header>

      {/* Course Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Learning Paths
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-8">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                3-Month Splunk Admin + Developer Fast-Track Program
              </h1>
              <p className="text-gray-600 mb-6">
                Our accelerated program designed to prepare you for Splunk interviews with hands-on project experience.
                This comprehensive course combines both admin and developer tracks to give you a well-rounded skill set.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-lg mb-2">Duration</h3>
                  <p>3 Months</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-lg mb-2">Format</h3>
                  <p>Live Online + Hands-on Projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-lg mb-2">Certification</h3>
                  <p>Splunk Core Certified Power User</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Course Overview</h2>
                <p className="text-gray-600 mb-4">
                  This fast-track program is specifically designed for professionals who want to quickly gain the skills
                  needed to pass Splunk interviews and work on real-world projects. The course combines both
                  administrative and development aspects of Splunk to provide a comprehensive understanding of the
                  platform.
                </p>
                <p className="text-gray-600">
                  By the end of this program, you'll have hands-on experience with Splunk deployment, administration,
                  and app development, making you a valuable asset for any organization using Splunk for their data
                  analytics needs.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-3">Admin Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Splunk Architecture & Components</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Installation & Configuration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Distributed Environments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Clustering & High Availability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>User Management & RBAC</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Performance Tuning & Troubleshooting</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-3">Developer Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Advanced SPL Commands</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Dashboard Creation & Customization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>App Framework & Development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>REST API & SDK Integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Custom Visualizations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>JavaScript for Splunk</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Detailed Curriculum</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-green-700 text-lg mb-3">Month 1: Foundations & Core Skills</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold mb-2">Week 1-2: Admin Essentials</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Splunk Architecture</li>
                          <li>Installation & Configuration</li>
                          <li>Data Onboarding</li>
                          <li>SPL Fundamentals</li>
                          <li>Hands-on Lab: Setting up a Splunk instance</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold mb-2">Week 3-4: Developer Basics</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Dashboard Creation</li>
                          <li>Advanced SPL</li>
                          <li>Data Models</li>
                          <li>App Framework Basics</li>
                          <li>Project: Building your first dashboard</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 text-lg mb-3">
                      Month 2: Advanced Concepts & Project Work
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold mb-2">Week 5-6: Advanced Admin</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Distributed Environments</li>
                          <li>Clustering</li>
                          <li>Performance Tuning</li>
                          <li>Security & User Management</li>
                          <li>Project: Enterprise Deployment</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold mb-2">Week 7-8: Advanced Development</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Custom Visualizations</li>
                          <li>REST API Integration</li>
                          <li>JavaScript for Splunk</li>
                          <li>Advanced Dashboard Techniques</li>
                          <li>Project: Custom App Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 text-lg mb-3">
                      Month 3: Interview Prep & Final Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold mb-2">Week 9-10: Real-world Scenarios</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Case Studies & Problem Solving</li>
                          <li>Troubleshooting Exercises</li>
                          <li>Performance Optimization</li>
                          <li>Integration with Other Tools</li>
                          <li>Project: End-to-End Solution</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <h4 className="font-semibold mb-2">Week 11-12: Interview Preparation</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Mock Interviews</li>
                          <li>Technical Question Practice</li>
                          <li>Portfolio Development</li>
                          <li>Resume Building</li>
                          <li>Final Project Presentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Course Highlights</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Live Sessions" width={40} height={40} />
                    </div>
                    <h3 className="font-semibold mb-2">Live Sessions</h3>
                    <p className="text-sm text-gray-600">Interactive sessions with industry experts</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Real Projects" width={40} height={40} />
                    </div>
                    <h3 className="font-semibold mb-2">Real Projects</h3>
                    <p className="text-sm text-gray-600">Work on industry-relevant projects</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Job Support" width={40} height={40} />
                    </div>
                    <h3 className="font-semibold mb-2">Job Support</h3>
                    <p className="text-sm text-gray-600">Interview preparation and resume building</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8">Enroll Now</Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 text-lg py-6 px-8"
                >
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold">SoftMania</h2>
              </div>
              <p className="mt-2 text-gray-400">Expert Splunk Training Solutions</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-400">info@softmania.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SoftMania. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

