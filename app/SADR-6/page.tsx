"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Server, Code, Award, ChevronLeft } from "lucide-react"
import { ExpandableSection } from "@/components/expandable-section"
import { LearningTrackCard } from "@/components/learning-track-card"
import { ResourceCard } from "@/components/resource-card"
import { CourseCard } from "@/components/course-card"
import { CustomTrackForm } from "@/components/custom-track-form"
import { SecondaryCoursesSection } from "@/components/secondary-courses-section"
import { ProgressRoadmap } from "@/components/progress-roadmap"
import { MindmapVisualization } from "@/components/mindmap-visualization"
import { StickyNav } from "@/components/sticky-nav"
import { FAQSection } from "@/components/faq-section"
import { ContactPopup } from "@/components/contact-popup"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const whyTrainingRef = useRef<HTMLElement>(null)
  const learningTrackRef = useRef<HTMLElement>(null)
  const resourcesRef = useRef<HTMLElement>(null)
  const coursesRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)

  const [customTracks, setCustomTracks] = useState<
    Array<{ id: string; title: string; description: string; link?: string; isCustom?: boolean }>
  >([])
  const [isVisible, setIsVisible] = useState(false)
  const [showMindmap, setShowMindmap] = useState(true)

  useEffect(() => {
    // Add fade-in animation for page elements
    setIsVisible(true)

    // Add scroll event listener for animations
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // You could add scroll-based animations here
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addCustomTrack = (track: { title: string; description: string; link?: string }) => {
    const newTrack = {
      id: `custom-${Date.now()}`,
      ...track,
      isCustom: true,
    }
    setCustomTracks([...customTracks, newTrack])
  }

  // Sample course progress data (in a real app, this would come from a database)
  const courseProgress = {
    admin: {
      installation: 100,
      userManagement: 75,
      dataOnboarding: 30,
      performance: 0,
    },
    developer: {
      searchQueries: 100,
      dashboards: 60,
      appDevelopment: 20,
      apiIntegration: 0,
    },
  }

  // Mindmap data structure
  const learningTrackData = {
    id: "root",
    title: "Splunk Learning Path",
    description: "Complete learning journey for Splunk mastery",
    children: [
      {
        id: "basics",
        title: "Splunk Basics",
        description: "Learn the fundamentals of Splunk architecture, components, and basic search functionality.",
        link: "https://example.com/splunk-basics",
        children: [
          {
            id: "installation",
            title: "Installation & Setup",
            description: "Learn how to install and configure Splunk in various environments",
            link: "https://example.com/splunk-installation",
          },
          {
            id: "ui",
            title: "UI Navigation",
            description: "Master the Splunk user interface and basic navigation",
            link: "https://example.com/splunk-ui",
          },
        ],
      },
      {
        id: "labs",
        title: "Hands-on Labs",
        description: "Apply your knowledge with guided labs and exercises to reinforce your understanding.",
        link: "https://example.com/splunk-labs",
        children: [
          {
            id: "search",
            title: "Search Exercises",
            description: "Practice creating and optimizing Splunk searches",
            link: "https://example.com/splunk-search-exercises",
          },
          {
            id: "dashboards",
            title: "Dashboard Creation",
            description: "Build your first Splunk dashboards with guided examples",
            link: "https://example.com/splunk-dashboards",
          },
        ],
      },
      {
        id: "advanced",
        title: "Advanced Configurations",
        description: "Explore advanced Splunk configurations, custom dashboards, and reporting capabilities.",
        children: [
          {
            id: "admin",
            title: "Admin Configuration",
            description: "Advanced administrative configurations and best practices",
            link: "https://example.com/splunk-admin",
          },
          {
            id: "reporting",
            title: "Advanced Reporting",
            description: "Create sophisticated reports and visualizations",
            link: "https://example.com/splunk-reporting",
          },
        ],
      },
    ],
  }

  // FAQ data
  const faqData = [
    {
      question: "What is the duration of the training?",
      answer:
        "Each training program lasts between 4-8 weeks, depending on the specific course and your learning pace. Our one-to-one approach allows us to adjust the timeline based on your progress and availability.",
    },
    {
      question: "Do I get certification?",
      answer:
        "Yes, you receive an official SoftMania certification upon successful completion of the course. This certification validates your skills and can be shared on professional platforms like LinkedIn.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, refunds are available within the first 7 days of starting the course if you're not satisfied with the training. After this period, partial refunds may be considered on a case-by-case basis.",
    },
    {
      question: "How are the sessions conducted?",
      answer:
        "Sessions are conducted via video conferencing platforms like Zoom or Microsoft Teams. Each session typically lasts 60-90 minutes and includes theoretical concepts, practical demonstrations, and hands-on exercises.",
    },
    {
      question: "Do I need any special software or hardware?",
      answer:
        "You'll need a computer with at least 8GB RAM, stable internet connection, and the ability to install Splunk software. We provide detailed setup instructions before the course begins.",
    },
    {
      question: "Can I reschedule my sessions?",
      answer:
        "Yes, you can reschedule sessions with at least 24 hours notice. We understand that schedules can change, and we try to be as flexible as possible to accommodate your needs.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
    {/* Animated background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x,0)*30%)_calc(50%+var(--mouse-y,0)*30%),rgba(16,185,129,0.1)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x,0)*30%)_calc(50%+var(--mouse-y,0)*30%),rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none"></div>

        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-10 transition-colors duration-300">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white"><span className="text-green-600">Soft</span><span className="light:text-black"> Mania</span></h1>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>

      {/* Hero Section */}
      <section
        id="#"
        ref={heroRef}
        className={`relative bg-gradient-to-b from-primary/10 to-background py-14 md:py-14 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >

        {/* Back to course */}
        <div className="container mx-auto px-1">
            <div className="mb-10">
              <Link href="/" className="inline-flex items-center text-primary hover:text-primary/50 transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" />
                <Button variant="outline">
                Back to Learning Paths
                </Button>
                
              </Link>
            </div>
          </div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">
              One-to-One Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
              Master Splunk with Personalized Training
            </p>
            <Button
              size="lg"
              className="mt-6 h-12 px-8 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px]"
              onClick={scrollToCourses}
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Training Section */}
      <section
        id="why-this-training"
        ref={whyTrainingRef}
        className={`py-16 container px-4 md:px-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="max-w-3xl mx-auto">
          <ExpandableSection
            title="Why This Training?"
            initialContent="Our one-to-one training ensures hands-on learning, real-world scenarios, and direct mentorship."
            expandedContent="Personalized mentorship, career-focused guidance, and structured learning paths tailored for individual success. Get expert mentorship, real-world use cases, and customized learning paths to suit your career goals. Learn efficiently with structured guidance. Our trainers have years of industry experience and will help you navigate complex scenarios you'll encounter in real-world environments."
          />
        </div>
      </section>

      {/* Free Learning Track Section
      <section
        id="free-learning-track"
        ref={learningTrackRef}
        className={`py-16 bg-muted/30 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Free Learning Track</h2>
            </div>

            {showMindmap ? (
              <MindmapVisualization rootNode={learningTrackData} customTracks={customTracks} />
            ) : (
              <div className="space-y-8">
                <LearningTrackCard
                  title="Splunk Basics"
                  description="Learn the fundamentals of Splunk architecture, components, and basic search functionality."
                  expandedContent="Start your Splunk journey by understanding core concepts like indexing, searching, and basic reporting. You'll learn how to navigate the Splunk interface, create your first searches, and understand how data flows through the Splunk ecosystem."
                  link="https://example.com/splunk-basics"
                />

                <LearningTrackCard
                  title="Hands-on Labs"
                  description="Apply your knowledge with guided labs and exercises to reinforce your understanding."
                  expandedContent="Practice makes perfect! Our hands-on labs provide real-world scenarios where you'll configure Splunk, troubleshoot common issues, and build practical solutions. Each lab includes step-by-step instructions and validation checks to ensure you're on the right track."
                  link="https://example.com/splunk-labs"
                />

                <LearningTrackCard
                  title="Advanced Configurations"
                  description="Explore advanced Splunk configurations, custom dashboards, and reporting capabilities."
                  expandedContent="Take your Splunk skills to the next level by mastering advanced configurations, learning how to build sophisticated dashboards, and creating complex reports. You'll also explore Splunk's alerting capabilities, scheduled reports, and integration with other systems."
                />

                {customTracks.map((track, index) => (
                  <LearningTrackCard
                    key={track.id}
                    title={track.title}
                    description={track.description}
                    expandedContent={track.description}
                    link={track.link}
                    isCustom={true}
                  />
                ))}

                <CustomTrackForm onAddTrack={addCustomTrack} />
              </div>
            )}
          </div>
        </div>
      </section> */}

      {/* Roadmap Helping Resources Section */}
      <section
        id="roadmap-resources"
        ref={resourcesRef}
        className={`py-16 container px-4 md:px-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Roadmap Helping Free & Paid Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="Splunk Standalone Server Setup"
              description="Step-by-step guide to set up your own Splunk server environment for practice."
              expandedContent="Free Splunk Standalone Lab Setup – BOTSv3 Data Included!

              Get hands-on experience with Splunk by setting up your own Standalone Lab—completely free! This setup includes:
              ✅ Pre-configured Splunk Instance
              ✅ BOTSv3 Security Dataset (Real-world logs for threat hunting)
              ✅ Supporting Add-ons for seamless data ingestion
              ✅ Step-by-Step Guidance to help you get started"
              tag="Free"
              isPaid={false}
              accessType="form"
              accessLink="https://sales.softmania.in/bookings/splunk-standalone-lab-setup"
              formFields={["Name", "Email", "Company", "Experience Level", "Primary Use Case"]}
            />

            <ResourceCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Splunk Distributed (Non-clustered) Environment Setup"
              description="Coming Soon..."
              expandedContent="
              Search head -1
              Indexer -1
              Heavy Forwarder -1
              Universal Forwarder -1
              "
              tag="Free"
              isPaid={false}
              accessType="form"
              accessLink="https://forms.softmania.com/admin-commands"
              formFields={["Name", "Email", "Current Role", "Splunk Experience"]}
            />

            <ResourceCard
              icon={<Code className="h-10 w-10 text-[#FFD700]" />}
              title="Distributed Clustered Environment"
              description="A Distributed Clustered Environment in Splunk enables scalability and high availability."
              expandedContent="Search Head Cluster (SHC): A group of 3 search heads that work together to distribute search queries and results, ensuring load balancing and failover.

Indexer Cluster: A cluster of 3 indexers that store, replicate, and manage incoming data to provide redundancy and fault tolerance."
              tag="Paid"
              isPaid={true}
              accessType="booking"
              accessLink="https://calendly.com/softmania/splunk-query-mastery"
              bookingDetails={{
                duration: "60 minutes",
                availability: "Mon-Fri, 9AM-6PM EST",
              }}
            />
          </div>
        </div>
      </section>

      {/* One-to-One Course Section with Progress Roadmap */}
      <section
        id="course-options"
        ref={coursesRef}
        className={`py-16 bg-muted/30 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">One-to-One Course Options</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8">
                <CourseCard
                  title="Splunk Admin Roadmap"
                  description="A structured roadmap covering Splunk administration essentials."
                  features={[
                    "Installation & Deployment",
                    "User & Role Management",
                    "Data Onboarding & Indexing",
                    "Performance Tuning",
                  ]}
                  detailedDescription="Our Splunk Admin Roadmap provides a comprehensive path to mastering Splunk administration. Starting with installation and basic configuration, you'll progress through user management, data onboarding, and advanced performance optimization techniques. Each session is tailored to your specific needs and environment."
                  expandedDetails="The course includes hands-on exercises, real-world scenarios, and best practices from experienced Splunk administrators. You'll learn how to troubleshoot common issues, implement security best practices, and optimize your Splunk deployment for performance and scalability. By the end of this roadmap, you'll have the skills and confidence to manage enterprise-level Splunk environments."
                  duration="6-8 weeks"
                  audience={["IT Administrators", "DevOps Engineers", "System Administrators"]}
                  prerequisites={[
                    "Basic IT infrastructure knowledge",
                    "Familiarity with Linux/Windows server administration",
                    "Understanding of data concepts",
                  ]}
                  certification={true}
                  relatedCourses={[
                    {
                      title: "Splunk Cloud Administration",
                      description: "Learn to manage and optimize Splunk Cloud deployments",
                      link: "#splunk-cloud",
                    },
                    {
                      title: "Splunk Security Essentials",
                      description: "Security monitoring and threat detection with Splunk",
                      link: "#splunk-security",
                    },
                    {
                      title: "Enterprise Splunk Deployment",
                      description: "Design and implement large-scale Splunk environments",
                      link: "#enterprise-deployment",
                    },
                  ]}
                />
              </div>

              <div className="space-y-8">
                <CourseCard
                  title="Splunk Developer Roadmap"
                  description="Master Splunk development with personalized guidance on searches, dashboards, and apps."
                  features={["Advanced Search Queries", "Dashboard Creation", "App Development", "API Integration"]}
                  detailedDescription="The Splunk Developer Roadmap focuses on building your skills as a Splunk developer. You'll learn advanced search techniques, dashboard creation, custom visualization development, and app building. Our expert instructors will guide you through each step of the development process."
                  expandedDetails="This roadmap covers everything from SPL (Search Processing Language) mastery to creating production-ready Splunk apps. You'll learn how to leverage Splunk's REST API, create custom commands, and integrate with external systems. The course includes practical projects that you can add to your portfolio, demonstrating your ability to solve real business problems with Splunk."
                  duration="8-10 weeks"
                  audience={["Software Developers", "Data Analysts", "IT Professionals"]}
                  prerequisites={[
                    "Basic programming knowledge",
                    "Understanding of web technologies (HTML, CSS, JavaScript)",
                    "Familiarity with Splunk basics",
                  ]}
                  certification={true}
                  relatedCourses={[
                    {
                      title: "Advanced SPL for Developers",
                      description: "Master complex search processing language techniques",
                      link: "#advanced-spl",
                    },
                    {
                      title: "Splunk App Certification Prep",
                      description: "Prepare your custom Splunk apps for certification",
                      link: "#app-certification",
                    },
                    {
                      title: "Splunk Dashboard Framework",
                      description: "Build advanced dashboards with the latest framework",
                      link: "#dashboard-framework",
                    },
                  ]}
                />
              </div>
            </div>

            {/* <SecondaryCoursesSection /> */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqRef}
        className={`py-16 container px-4 md:px-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
          <FAQSection faqs={faqData} />
        </div>
      </section>

        {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="https://splunk.softmania.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <h3 className="text-white font-bold text-lg mb-4">SoftMania</h3>
              </Link>
              <p className="text-sm">Professional Splunk training with real-world projects and hands-on experience.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#course-details" className="hover:text-white transition-colors">
                    Course Details
                  </Link>
                </li>
                <li>
                  <Link href="#syllabus" className="hover:text-white transition-colors">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="hover:text-white transition-colors">
                    Learning Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:info@softmania.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Email: info@softmania.in
                  </Link>
                </li>
                <li>
                  <Link href="tel:+91 8317349618" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Phone: +91 8317349618
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/918317349618" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp: +91 8317349618
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/company/softmania-tech" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/@SoftManiaTech" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/softmaniatech" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M7.5 2C4.42 2 2 4.42 2 7.5v9C2 19.58 4.42 22 7.5 22h9c3.08 0 5.5-2.42 5.5-5.5v-9C22 4.42 19.58 2 16.5 2h-9ZM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5Zm0 1.5A3.5 3.5 0 0 0 8.5 12 3.5 3.5 0 0 0 12 15.5 3.5 3.5 0 0 0 15.5 12 3.5 3.5 0 0 0 12 8.5ZM17.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} softmania. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="https://splunk.softmania.in/#/privacy-policy" target="_blank" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="https://splunk.softmania.in/#/terms-and-conditions" target="_blank" className="hover:text-white transition-colors">
                Terms & conditions
              </Link>
              <Link href="https://splunk.softmania.in/#/refund-policy" target="_blank" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div>
    </div>
    </div>
  )
}

