"use client"

import { useState, useRef, useEffect } from "react"
import { X, ChevronDown, ChevronUp, Calendar, Users } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactPopup } from "@/components/contact-popup"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { TrainingCard } from "@/components/training-card"
import { motion, AnimatePresence } from "framer-motion"
import HeroGeometric from "@/components/hero-geometric"

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [activeRoute, setActiveRoute] = useState<string | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const isMobile = useMobile()

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup()
      }
    }

    if (activePopup) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scrolling when popup is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [activePopup])

  // Add subtle background animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      document.documentElement.style.setProperty("--mouse-x", x.toString())
      document.documentElement.style.setProperty("--mouse-y", y.toString())
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Handle URL changes for popup routing
  useEffect(() => {
    if (pathname === "/") {
      setActivePopup(null);
      setActiveRoute(null);
    } else if (pathname === "/SADR-3") {
      setActivePopup("fast-track");
      setActiveRoute("SADR-3");
    } else if (pathname === "/SADR-6") {
      setActivePopup("one-to-one");
      setActiveRoute("SADR-6");
    }
  }, [pathname]);  

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  const openPopup = (popupId: string, routeCode?: string) => {
    setActivePopup(popupId);
    if (routeCode) {
      setActiveRoute(routeCode);
      router.push(`/${routeCode}`, { scroll: false });
    }
  };  

  const closePopup = () => {
    setActivePopup(null)
    setActiveRoute(null)
    router.push("/", { scroll: false })
  }

  const navigateInPopup = (routeCode: string) => {
    setActiveRoute(routeCode);
    router.push(`/${routeCode}`, { scroll: false });
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x,0)*30%)_calc(50%+var(--mouse-y,0)*30%),rgba(16,185,129,0.1)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x,0)*30%)_calc(50%+var(--mouse-y,0)*30%),rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-10 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white"><span className="text-green-600">Soft</span><span className="light:text-black"> Mania</span></h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ContactPopup />
          </div>
        </div>
      </header>
      {/* <HeroGeometric /> */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 md:py-16 text-center relative z-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight"
        >
          Master Splunk with Expert Training
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Choose the training path that fits your learning style and career goals
        </motion.p>
      </section>

      {/* Training Cards */}
      <section className="container mx-auto px-4 py-6 mb-16 relative z-0">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1: One-to-One Training */}
            <TrainingCard
              title="One-to-One Training"
              description="Personalized training sessions tailored to your learning pace and specific career goals."
              icon={<Users className="h-8 w-8 text-green-600 dark:text-green-400 relative z-10" />}
              onClick={() => router.push("/SADR-6")}
            />

            {/* Card 2: Fast-Track Program */}
            <TrainingCard
              title="3-Month Fast-Track Program"
              description="Accelerated program combining Splunk Admin & Developer skills for interview preparation."
              icon={<Calendar className="h-8 w-8 text-green-600 dark:text-green-400 relative z-10" />}
              onClick={() => router.push("/SADR-3")}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-6 mb-20 relative z-0">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden
                border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800
                shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq("faq-1")}
                className="w-full p-5 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  What is the difference between One-to-One training and Fast-Track training?
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300">
                  {expandedFaq === "faq-1" ? (
                    <ChevronUp className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {expandedFaq === "faq-1" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 dark:text-gray-300">
                        One-to-One Training is a personalized course tailored to your specific learning pace and goals,
                        with dedicated instructor attention. The Fast-Track program is an accelerated 3-month curriculum
                        designed to quickly prepare you for Splunk interviews and real-world projects, covering both
                        Admin and Developer skills in a structured format.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden
                border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800
                shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq("faq-2")}
                className="w-full p-5 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  How do I access the roadmap PDF?
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300">
                  {expandedFaq === "faq-2" ? (
                    <ChevronUp className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {expandedFaq === "faq-2" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 dark:text-gray-300">
                        You can access the roadmap PDF by clicking on the "View Roadmap" button in the respective
                        training popup. Alternatively, you can click on "Download Roadmap" to save a copy to your device
                        for offline reference.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden
                border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800
                shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq("faq-3")}
                className="w-full p-5 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Is the training recorded or live?
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300">
                  {expandedFaq === "faq-3" ? (
                    <ChevronUp className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {expandedFaq === "faq-3" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 dark:text-gray-300">
                        One-to-One training is conducted live with a dedicated instructor to provide personalized
                        guidance. The Fast-Track program combines both live interactive sessions and recorded materials,
                        giving you the benefits of real-time instruction and the flexibility to review content at your
                        own pace.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden
                border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800
                shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq("faq-4")}
                className="w-full p-5 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Do I need prior experience with Splunk?
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300">
                  {expandedFaq === "faq-4" ? (
                    <ChevronUp className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {expandedFaq === "faq-4" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 dark:text-gray-300">
                        No prior experience is required for our training programs. Both the One-to-One and Fast-Track
                        options start with fundamentals and progressively build to advanced concepts. However, basic IT
                        knowledge and familiarity with data concepts will help you progress more quickly through the
                        material.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ Item 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden
                border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800
                shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq("faq-5")}
                className="w-full p-5 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Will I receive a certificate upon completion?
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300">
                  {expandedFaq === "faq-5" ? (
                    <ChevronUp className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {expandedFaq === "faq-5" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 dark:text-gray-300">
                        Yes, all participants receive a SoftMania completion certificate. Additionally, the Fast-Track
                        program includes preparation for the Splunk Core Certified Power User exam, and we provide
                        guidance for official Splunk certification if that's your goal.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <EnhancedFooter />

      {/* Popups with Dynamic Routing */}
      {/* One-to-One Training Popup */}
      <AnimatePresence>
        {activePopup === "one-to-one" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto 
                border border-gray-100 dark:border-gray-700 ${isMobile ? "h-[90vh]" : ""}`}
            >
              <div className="sticky top-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center z-10 transition-colors duration-300">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">One-to-One Personalized Training</h2>
                <button
                  onClick={closePopup}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <div className="p-6">
                {/* Popup Navigation */}
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => navigateInPopup("one-to-one-roadmap")}
                      className={`py-2 px-4 font-medium transition-colors duration-300 ${
                        activeRoute === "one-to-one-roadmap"
                          ? "border-b-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      Roadmap
                    </button>
                    <button
                      onClick={() => navigateInPopup("one-to-one-curriculum")}
                      className={`py-2 px-4 font-medium transition-colors duration-300 ${
                        activeRoute === "one-to-one-curriculum"
                          ? "border-b-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      Curriculum
                    </button>
                  </div>
                </div>

                {/* Roadmap Content */}
                <AnimatePresence mode="wait">
                  {activeRoute === "one-to-one-roadmap" && (
                    <motion.div
                      key="roadmap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          6-Month Splunk Admin Roadmap
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                          A comprehensive training program to master Splunk administration from basics to advanced
                          concepts.
                        </p>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center mr-2">
                              1
                            </span>
                            Month 1-2: Foundations
                          </h3>
                          <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ml-10 transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <div>
                                  <span className="font-medium text-gray-800 dark:text-white">
                                    Splunk Architecture & Components
                                  </span>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Understanding indexers, search heads, forwarders, and deployment server roles
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <div>
                                  <span className="font-medium text-gray-800 dark:text-white">
                                    Installation & Configuration
                                  </span>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Setting up Splunk Enterprise in various environments
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <div>
                                  <span className="font-medium text-gray-800 dark:text-white">
                                    Data Inputs & Forwarders
                                  </span>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Configuring data inputs, understanding forwarder types and deployment
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center mr-2">
                              2
                            </span>
                            Month 3-4: Advanced Administration
                          </h3>
                          <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ml-10 transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <div>
                                  <span className="font-medium text-gray-800 dark:text-white">
                                    Distributed Deployment
                                  </span>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Scaling Splunk across multiple servers and environments
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <div>
                                  <span className="font-medium text-gray-800 dark:text-white">
                                    Clustering & High Availability
                                  </span>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Implementing indexer clustering and search head clustering
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center mr-2">
                              3
                            </span>
                            Month 5-6: Mastery
                          </h3>
                          <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ml-10 transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <div>
                                  <span className="font-medium text-gray-800 dark:text-white">
                                    Advanced Troubleshooting
                                  </span>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Diagnosing and resolving complex Splunk issues
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <div>
                                  <span className="font-medium text-gray-800 dark:text-white">
                                    Real-world Projects & Case Studies
                                  </span>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    Applying knowledge to solve enterprise-level challenges
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800/50 shadow-sm transition-colors duration-300">
                        <h3 className="font-semibold text-green-800 dark:text-green-400 text-lg mb-3">
                          Schedule a Consultation
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Speak with our training experts to create a personalized learning plan tailored to your
                          specific goals and timeline.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-sm transition-colors duration-300">
                            Book a Call
                          </Button>
                          <Button
                            variant="outline"
                            className="border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors duration-300"
                          >
                            Download Full Roadmap
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Curriculum Content */}
                  {activeRoute === "one-to-one-curriculum" && (
                    <motion.div
                      key="curriculum"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          Personalized Curriculum
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                          Our one-to-one training curriculum is tailored to your specific needs and learning pace.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                          <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">
                            Curriculum Highlights
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                              <div>
                                <span className="font-medium text-gray-800 dark:text-white">
                                  Personalized Learning Path
                                </span>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                  Customized curriculum based on your current skill level and career goals
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                              <div>
                                <span className="font-medium text-gray-800 dark:text-white">Flexible Schedule</span>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                  Sessions scheduled at your convenience with your dedicated instructor
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                              <div>
                                <span className="font-medium text-gray-800 dark:text-white">Hands-on Projects</span>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                  Real-world projects tailored to your industry and interests
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                              <div>
                                <span className="font-medium text-gray-800 dark:text-white">Progress Tracking</span>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                  Regular assessments and feedback to ensure you're meeting your goals
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                          <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">
                            Available Specializations
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-colors duration-300">
                              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Splunk Admin Track</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Focus on installation, configuration, and administration of Splunk environments
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-colors duration-300">
                              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Splunk Developer Track</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Focus on SPL, dashboard creation, and custom application development
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-colors duration-300">
                              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Splunk Architect Track</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Focus on enterprise-scale deployments and complex architectures
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-colors duration-300">
                              <h4 className="font-medium text-gray-800 dark:text-white mb-2">Splunk Security Track</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Focus on security use cases, SIEM implementation, and threat hunting
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800/50 shadow-sm transition-colors duration-300">
                        <h3 className="font-semibold text-green-800 dark:text-green-400 text-lg mb-3">
                          Ready to Get Started?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Book a free consultation call to discuss your training needs and create your personalized
                          curriculum.
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-sm transition-colors duration-300">
                          Schedule Consultation
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fast-Track Program Popup */}
      <AnimatePresence>
        {activePopup === "fast-track" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto 
                border border-gray-100 dark:border-gray-700 ${isMobile ? "h-[90vh]" : ""}`}
            >
              <div className="sticky top-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center z-10 transition-colors duration-300">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">3-Month Fast-Track Program</h2>
                <button
                  onClick={closePopup}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <div className="p-6">
                {/* Popup Navigation */}
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => navigateInPopup("fast-track-roadmap")}
                      className={`py-2 px-4 font-medium transition-colors duration-300 ${
                        activeRoute === "fast-track-roadmap"
                          ? "border-b-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      Roadmap
                    </button>
                    <button
                      onClick={() => navigateInPopup("fast-track-projects")}
                      className={`py-2 px-4 font-medium transition-colors duration-300 ${
                        activeRoute === "fast-track-projects"
                          ? "border-b-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      Projects
                    </button>
                  </div>
                </div>

                {/* Roadmap Content */}
                <AnimatePresence mode="wait">
                  {activeRoute === "fast-track-roadmap" && (
                    <motion.div
                      key="roadmap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                        <div className="flex justify-between items-start flex-wrap gap-4">
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                              Interview Preparation & Real-Time Project Experience
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              Accelerated program designed to prepare you for Splunk interviews with hands-on project
                              experience.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm transition-colors duration-300">
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
                          <h4 className="font-semibold text-gray-800 dark:text-white">Fast-Track Roadmap</h4>
                        </div>
                        <div className="p-4">
                          <div className="space-y-6">
                            <div>
                              <h5 className="font-medium text-green-700 dark:text-green-400 text-lg">
                                Month 1: Foundations & Core Skills
                              </h5>
                              <div className="mt-3 grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-300">
                                  <h6 className="font-semibold mb-2 text-gray-800 dark:text-white">
                                    Week 1-2: Admin Essentials
                                  </h6>
                                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Splunk Architecture</li>
                                    <li>Installation & Configuration</li>
                                    <li>Data Onboarding</li>
                                    <li>SPL Fundamentals</li>
                                  </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-300">
                                  <h6 className="font-semibold mb-2 text-gray-800 dark:text-white">
                                    Week 3-4: Developer Basics
                                  </h6>
                                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Dashboard Creation</li>
                                    <li>Advanced SPL</li>
                                    <li>Data Models</li>
                                    <li>App Framework Basics</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-green-700 dark:text-green-400 text-lg">
                                Month 2: Advanced Concepts & Project Work
                              </h5>
                              <div className="mt-3 grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-300">
                                  <h6 className="font-semibold mb-2 text-gray-800 dark:text-white">
                                    Week 5-6: Advanced Admin
                                  </h6>
                                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Distributed Environments</li>
                                    <li>Clustering</li>
                                    <li>Performance Tuning</li>
                                    <li>Project: Enterprise Deployment</li>
                                  </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-300">
                                  <h6 className="font-semibold mb-2 text-gray-800 dark:text-white">
                                    Week 7-8: Advanced Development
                                  </h6>
                                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Custom Visualizations</li>
                                    <li>REST API Integration</li>
                                    <li>JavaScript for Splunk</li>
                                    <li>Project: Custom App Development</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-green-700 dark:text-green-400 text-lg">
                                Month 3: Interview Prep & Final Projects
                              </h5>
                              <div className="mt-3 grid md:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-300">
                                  <h6 className="font-semibold mb-2 text-gray-800 dark:text-white">
                                    Week 9-10: Real-world Scenarios
                                  </h6>
                                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Case Studies & Problem Solving</li>
                                    <li>Troubleshooting Exercises</li>
                                    <li>Performance Optimization</li>
                                    <li>Project: End-to-End Solution</li>
                                  </ul>
                                </div>
                                <div className="bg-white dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-300">
                                  <h6 className="font-semibold mb-2 text-gray-800 dark:text-white">
                                    Week 11-12: Interview Preparation
                                  </h6>
                                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                                    <li>Mock Interviews</li>
                                    <li>Technical Question Practice</li>
                                    <li>Portfolio Development</li>
                                    <li>Final Project Presentation</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between flex-wrap gap-4 transition-colors duration-300">
                          <Button
                            variant="outline"
                            className="border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors duration-300"
                          >
                            Download PDF
                          </Button>
                          <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-sm transition-colors duration-300">
                            Enroll Now
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Projects Content */}
                  {activeRoute === "fast-track-projects" && (
                    <motion.div
                      key="projects"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Hands-on Projects</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Our Fast-Track program includes real-world projects that will help you build a portfolio and
                          prepare for interviews.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">
                            Project 1: Enterprise Deployment
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Design and implement a distributed Splunk environment with clustering and high availability.
                          </p>
                          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-colors duration-300">
                            <h5 className="font-medium mb-2 text-gray-800 dark:text-white">Key Learning Outcomes:</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Architecting scalable Splunk deployments
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Implementing indexer and search head clustering
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Configuring load balancing and failover
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Performance tuning and optimization
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">
                            Project 2: Custom App Development
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Build a custom Splunk application with advanced dashboards and visualizations.
                          </p>
                          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-colors duration-300">
                            <h5 className="font-medium mb-2 text-gray-800 dark:text-white">Key Learning Outcomes:</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Creating app framework and structure
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Developing custom visualizations with JavaScript
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Implementing REST API integrations
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">Packaging and deploying apps</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:border-green-200 dark:hover:border-green-800">
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">
                            Project 3: End-to-End Solution
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Develop a complete Splunk solution for a specific use case (security monitoring, IT
                            operations, etc.).
                          </p>
                          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg transition-colors duration-300">
                            <h5 className="font-medium mb-2 text-gray-800 dark:text-white">Key Learning Outcomes:</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Requirements gathering and solution design
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Data onboarding and field extraction
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Creating comprehensive dashboards and alerts
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  Documentation and knowledge transfer
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800/50 shadow-sm transition-colors duration-300">
                        <h3 className="font-semibold text-green-800 dark:text-green-400 text-lg mb-3">
                          Ready to Build Your Portfolio?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Enroll in our Fast-Track program and start working on real-world projects that will help you
                          stand out in interviews.
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-sm transition-colors duration-300">
                          Enroll Now
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

