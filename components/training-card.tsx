"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface TrainingCardProps {
  title: string
  description: string
  icon: React.ReactNode
  onClick: () => void
}

export function TrainingCard({ title, description, icon, onClick }: TrainingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      {/* Card background with glassmorphism */}
      <div
        className="absolute inset-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl z-0
        border border-transparent transition-all duration-300
        group-hover:border-green-200 dark:group-hover:border-green-800"
      ></div>

      {/* Gradient border effect */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-200/30 to-transparent dark:from-green-500/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      ></div>

      {/* Shadow effect */}
      <div
        className="absolute inset-0 rounded-xl shadow-[0_4px_20px_-12px_rgba(16,185,129,0.2)] dark:shadow-[0_4px_20px_-12px_rgba(16,185,129,0.3)]
        group-hover:shadow-[0_8px_30px_-12px_rgba(16,185,129,0.4)] dark:group-hover:shadow-[0_8px_30px_-12px_rgba(16,185,129,0.5)]
        transition-all duration-300 pointer-events-none"
      ></div>

      {/* Card content */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="w-16 h-16 relative mb-6">
          {/* Icon background with gradient */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-green-200 to-green-100 
            dark:from-green-700 dark:to-green-900 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
          ></div>

          {/* Icon container */}
          <div
            className="absolute inset-0 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center
            transform transition-transform duration-500 group-hover:scale-110"
          >
            {icon}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">{description}</p>

        <div className="flex items-center text-green-600 dark:text-green-400 font-medium transition-all duration-300">
          <span className="mr-2">View Details</span>
          <ArrowRight className="h-5 w-5 transform transition-transform duration-500 group-hover:translate-x-2" />
        </div>
      </div>
    </motion.div>
  )
}

