"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom" // Import React Portal
import { X, MessageSquare, Globe, BookOpen } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* Contact Button inside Header */}
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 
          text-sm md:text-base shadow-sm transition-all duration-300"
      >
        Contact Us
      </Button>

      {/* Popup rendered outside header using React Portal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
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
                  className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto 
                    border border-gray-100 dark:border-gray-700"
                >
                  {/* Popup Content */}
                  <div className="sticky top-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center z-10 transition-colors duration-300">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Get in Touch</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      Connect with us through any of the following channels to learn more about our Splunk training programs
                      or to get started with your learning journey.
                    </p>

                    <div className="space-y-6">
                      {/* WhatsApp */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm 
                          hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 hover:shadow-md"
                      >
                        <a
                          href="https://whatsapp.com/channel/example"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                        >
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                            <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">Join WhatsApp Group</h3>
                            <p className="text-gray-600 dark:text-gray-300">Get updates and connect with other learners</p>
                          </div>
                        </a>
                      </motion.div>

                      {/* Corporate Website */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm 
                          hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 hover:shadow-md"
                      >
                        <a
                          href="https://softmania.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                        >
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                            <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">Corporate Website</h3>
                            <p className="text-gray-600 dark:text-gray-300">Visit our main website for more information</p>
                          </div>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body // Render outside header inside body
        )}
    </>
  )
}
