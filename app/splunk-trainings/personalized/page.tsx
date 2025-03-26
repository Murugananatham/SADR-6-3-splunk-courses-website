"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PersonalizedTraining() {
  const [activeTab, setActiveTab] = useState<"admin" | "developer">("admin")

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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">One-to-One Personalized Training</h1>
              <p className="text-gray-600 mb-6">
                Our personalized training includes detailed roadmaps tailored to your learning pace and goals. Choose
                between our Splunk Admin or Developer paths to accelerate your career.
              </p>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors ${
                    activeTab === "admin"
                      ? "border-b-2 border-green-600 text-green-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("admin")}
                >
                  Splunk Admin Roadmap
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors ${
                    activeTab === "developer"
                      ? "border-b-2 border-green-600 text-green-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("developer")}
                >
                  Splunk Developer Roadmap
                </button>
              </div>

              {/* Admin Roadmap */}
              {activeTab === "admin" && (
                <div className="animate-in fade-in duration-300">
                  <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">6-Month Splunk Admin Roadmap</h2>
                    <p className="text-gray-600">
                      A comprehensive training program to master Splunk administration from basics to advanced concepts.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2">
                          1
                        </span>
                        Month 1-2: Foundations
                      </h3>
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm ml-10">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Splunk Architecture & Components</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Understanding indexers, search heads, forwarders, and deployment server roles
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Installation & Configuration</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Setting up Splunk Enterprise in various environments
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Data Inputs & Forwarders</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Configuring data inputs, understanding forwarder types and deployment
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Search Processing Language (SPL) Basics</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Core search commands, filtering, and basic reporting
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2">
                          2
                        </span>
                        Month 3-4: Advanced Administration
                      </h3>
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm ml-10">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Distributed Deployment</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Scaling Splunk across multiple servers and environments
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Clustering & High Availability</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Implementing indexer clustering and search head clustering
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">User Management & RBAC</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Setting up roles, permissions, and authentication methods
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Performance Tuning</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Optimizing Splunk performance and troubleshooting bottlenecks
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2">
                          3
                        </span>
                        Month 5-6: Mastery
                      </h3>
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm ml-10">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Advanced Troubleshooting</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Diagnosing and resolving complex Splunk issues
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Monitoring & Alerting</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Setting up comprehensive monitoring and alert systems
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Deployment Server Management</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Managing configurations across distributed environments
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Real-world Projects & Case Studies</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Applying knowledge to solve enterprise-level challenges
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Developer Roadmap */}
              {activeTab === "developer" && (
                <div className="animate-in fade-in duration-300">
                  <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">6-Month Splunk Developer Roadmap</h2>
                    <p className="text-gray-600">
                      A comprehensive training program to master Splunk development from dashboards to custom
                      applications.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2">
                          1
                        </span>
                        Month 1-2: Foundations
                      </h3>
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm ml-10">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">SPL Advanced Concepts</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Advanced search commands, subsearches, and field extractions
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Dashboard Creation</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Building interactive dashboards and visualizations
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Simple XML & Dashboard Studio</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Understanding XML structure and using Dashboard Studio
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Data Models & Pivot</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Creating and using data models for faster reporting
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2">
                          2
                        </span>
                        Month 3-4: App Development
                      </h3>
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm ml-10">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">App Architecture & Structure</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Understanding app components and directory structure
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Custom Visualizations</span>
                              <p className="text-sm text-gray-600 mt-1">Creating custom charts and visualizations</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">REST API & SDK Usage</span>
                              <p className="text-sm text-gray-600 mt-1">Interacting with Splunk programmatically</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Custom Search Commands</span>
                              <p className="text-sm text-gray-600 mt-1">Extending SPL with custom commands</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-2">
                          3
                        </span>
                        Month 5-6: Advanced Development
                      </h3>
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm ml-10">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">JavaScript & Web Frameworks</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Integrating modern web technologies with Splunk
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Advanced App Development</span>
                              <p className="text-sm text-gray-600 mt-1">
                                Building complex, production-ready applications
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">App Certification Process</span>
                              <p className="text-sm text-gray-600 mt-1">Preparing apps for Splunkbase submission</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <div>
                              <span className="font-medium">Real-world Projects & Case Studies</span>
                              <p className="text-sm text-gray-600 mt-1">Building solutions for enterprise use cases</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-green-800 text-lg mb-3">Schedule a Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Speak with our training experts to create a personalized learning plan tailored to your specific goals
                  and timeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 shadow-sm">Book a Call</Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Download Full Roadmap
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

