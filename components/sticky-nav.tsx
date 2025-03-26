"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, BookOpen, Layers, Server, GraduationCap, HelpCircle, Menu, X } from "lucide-react"

interface StickyNavProps {
  sections: {
    name: string
    ref: React.RefObject<HTMLElement>
  }[]
}

export function StickyNav({ sections }: StickyNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true when page is scrolled down
      setIsScrolled(window.scrollY > 50)

      // Find the current active section based on scroll position
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = section.ref.current
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (section: { name: string; ref: React.RefObject<HTMLElement> }) => {
    section.ref.current?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  // Map section names to icons
  const getIconForSection = (name: string) => {
    switch (name.toLowerCase()) {
      case "top":
        return <Home className="h-4 w-4" />
      case "why this training":
        return <BookOpen className="h-4 w-4" />
      case "learning track":
        return <Layers className="h-4 w-4" />
      case "resources":
        return <Server className="h-4 w-4" />
      case "courses":
        return <GraduationCap className="h-4 w-4" />
      case "faq":
        return <HelpCircle className="h-4 w-4" />
      default:
        return <Home className="h-4 w-4" />
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <span className="text-lg font-bold text-primary">SoftMania</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section) => (
                <Button
                  key={section.name}
                  variant={activeSection === section.name ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => scrollToSection(section)}
                >
                  {getIconForSection(section.name)}
                  <span className="ml-1">{section.name}</span>
                </Button>
              ))}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <Button
                    key={section.name}
                    variant={activeSection === section.name ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => scrollToSection(section)}
                  >
                    {getIconForSection(section.name)}
                    <span className="ml-2">{section.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

