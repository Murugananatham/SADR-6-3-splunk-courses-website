"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Save theme preference to localStorage
  useEffect(() => {
    if (mounted && theme) {
      localStorage.setItem("theme-preference", theme)
    }
  }, [theme, mounted])

  // Load theme preference from localStorage on mount
  useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem("theme-preference")
      if (savedTheme) {
        setTheme(savedTheme)
      }
    }
  }, [mounted, setTheme])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
        bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
        text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-gray-700" />}
    </button>
  )
}

