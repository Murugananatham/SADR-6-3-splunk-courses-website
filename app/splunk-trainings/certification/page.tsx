"use client"

import Link from "next/link"
import { ChevronLeft, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x,0)*30%)_calc(50%+var(--mouse-y,0)*30%),rgba(16,185,129,0.1)_0%,transparent_60%)] pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">SoftMania</h1>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-sm md:text-base shadow-sm">Contact Us</Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Learning Paths
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 mb-8">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Splunk Certification Exam Roadmap</h1>
              <p className="text-gray-600 mb-6">
                A structured approach to prepare for Splunk certification exams at your own pace. Our comprehensive
                guides and resources will help you achieve certification success.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Self-Learning Certification Path</h2>
                <p className="text-gray-600">
                  Follow our proven certification paths to gain industry-recognized Splunk credentials that will enhance
                  your career prospects and validate your expertise.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-green-50 p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-green-800 text-lg">Splunk Core Certified User</h3>
                    <p className="text-sm text-green-700">Entry-level certification</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-lg mb-3">Exam Topics</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Basic Navigation & Search</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Using the Splunk interface and basic search commands
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Using Fields in Searches</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Field extraction, field aliases, and calculated fields
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Creating Reports & Dashboards</span>
                              <p className="text-sm text-gray-600 mt-1">Building basic visualizations and dashboards</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Creating & Using Lookups</span>
                              <p className="text-sm text-gray-600 mt-1">Enhancing data with lookup tables</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-3">Study Resources</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Splunk Fundamentals 1 Course</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Official training course covering all exam topics
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Splunk User Manual</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Comprehensive documentation for all Splunk features
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Practice Exercises</span>
                              <p className="text-sm text-gray-600 mt-1">Hands-on labs to reinforce learning</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Sample Exam Questions</span>
                              <p className="text-sm text-gray-600 mt-1">Practice tests to prepare for the exam</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50 flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Study Guide
                      </Button>
                      <Button variant="ghost" className="text-green-600 hover:bg-green-50 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Exam Details
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-green-50 p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-green-800 text-lg">Splunk Core Certified Power User</h3>
                    <p className="text-sm text-green-700">Intermediate-level certification</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-lg mb-3">Exam Topics</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Advanced SPL Commands</span>
                              <p className="text-sm text-gray-600 mt-1">Complex search commands and functions</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Creating & Using Macros</span>
                              <p className="text-sm text-gray-600 mt-1">Reusable search patterns and arguments</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Creating & Using Tags</span>
                              <p className="text-sm text-gray-600 mt-1">Categorizing and organizing field values</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Data Models & Pivot</span>
                              <p className="text-sm text-gray-600 mt-1">Creating and using data models for reporting</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-3">Study Resources</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Splunk Fundamentals 2 Course</span>
                              <p className="text-sm text-gray-600 mt-1">Advanced search techniques and reporting</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Advanced Search Cheat Sheet</span>
                              <p className="text-sm text-gray-600 mt-1">Quick reference for complex SPL commands</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Practice Lab Exercises</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Hands-on scenarios to master advanced concepts
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Sample Exam Questions</span>
                              <p className="text-sm text-gray-600 mt-1">Practice tests with detailed explanations</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50 flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Study Guide
                      </Button>
                      <Button variant="ghost" className="text-green-600 hover:bg-green-50 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Exam Details
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-green-50 p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-green-800 text-lg">Splunk Enterprise Certified Admin</h3>
                    <p className="text-sm text-green-700">Advanced-level certification</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-lg mb-3">Exam Topics</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Splunk Architecture</span>
                              <p className="text-sm text-gray-600 mt-1">Components and deployment architecture</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Installation & Configuration</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Advanced installation options and configurations
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Distributed Deployment</span>
                              <p className="text-sm text-gray-600 mt-1">Scaling Splunk across multiple servers</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">User Management & RBAC</span>
                              <p className="text-sm text-gray-600 mt-1">Security and access control</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-3">Study Resources</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Splunk System Administration Course</span>
                              <p className="text-sm text-gray-600 mt-1">Core administration concepts and practices</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Splunk Cluster Administration Course</span>
                              <p className="text-sm text-gray-600 mt-1">Advanced clustering and high availability</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Admin Certification Guide</span>
                              <p className="text-sm text-gray-600 mt-1">Comprehensive study guide for the exam</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Practice Exam Questions</span>
                              <p className="text-sm text-gray-600 mt-1">Realistic exam scenarios and questions</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50 flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Study Guide
                      </Button>
                      <Button variant="ghost" className="text-green-600 hover:bg-green-50 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Exam Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-green-800 text-lg mb-3">Certification Success Package</h3>
                <p className="text-gray-700 mb-4">
                  Get access to our complete certification preparation materials, including practice exams, study
                  guides, and expert support to ensure your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 shadow-sm">Access Free Resources</Button>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Complete Roadmap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12 relative z-0">
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
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

