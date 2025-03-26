"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function SecondaryCoursesSection() {
  const [showCourses, setShowCourses] = useState(false)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center mb-8">
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 border-dashed border-primary/50 hover:border-primary hover:bg-primary/5"
          onClick={() => setShowCourses(!showCourses)}
        >
          {showCourses ? (
            <>
              Hide Additional Courses
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Looking for More? View Additional Courses
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {showCourses && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">SoftMania Partner Courses</h3>
                <p className="text-muted-foreground">Additional specialized training from our trusted partners</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CourseCard
                  title="Cybersecurity Fundamentals"
                  description="Essential cybersecurity principles and practices for IT professionals."
                  features={[
                    "Security Frameworks & Compliance",
                    "Threat Detection & Analysis",
                    "Incident Response",
                    "Security Tools & Technologies",
                  ]}
                  detailedDescription="Our Cybersecurity Fundamentals course provides a comprehensive introduction to the essential principles and practices of modern cybersecurity. Designed for IT professionals looking to expand their security knowledge, this course covers key frameworks, threat detection methodologies, and practical incident response techniques."
                  expandedDetails="This course is delivered by SoftMania's security partners, industry experts with extensive experience in enterprise security. You'll learn through a combination of theoretical concepts and hands-on labs, giving you practical experience with real security tools and scenarios. By the end of this course, you'll have a solid foundation in cybersecurity principles that you can apply immediately in your organization."
                  duration="4-5 weeks"
                  audience={["IT Professionals", "Network Administrators", "Security Enthusiasts"]}
                  prerequisites={["Basic IT knowledge", "Networking fundamentals", "Windows/Linux basics"]}
                  certification={true}
                  relatedCourses={[
                    {
                      title: "Advanced Threat Hunting",
                      description: "Learn proactive techniques to identify and neutralize threats",
                      link: "#threat-hunting",
                    },
                    {
                      title: "Security Compliance for Enterprises",
                      description: "Navigate complex regulatory requirements for your organization",
                      link: "#compliance",
                    },
                    {
                      title: "Incident Response Planning",
                      description: "Develop comprehensive incident response strategies",
                      link: "#incident-response",
                    },
                  ]}
                />

                <CourseCard
                  title="Cloud Security & Compliance"
                  description="Secure cloud deployments and maintain regulatory compliance across platforms."
                  features={[
                    "Cloud Security Architecture",
                    "Multi-Cloud Security Strategies",
                    "Compliance Frameworks",
                    "Automated Security Controls",
                  ]}
                  detailedDescription="The Cloud Security & Compliance course focuses on securing cloud environments across major platforms including AWS, Azure, and GCP. Learn how to design secure cloud architectures, implement proper access controls, and maintain regulatory compliance in dynamic cloud environments."
                  expandedDetails="Taught by certified cloud security professionals, this course combines cloud architecture principles with practical security implementations. You'll work through real-world scenarios to secure cloud resources, detect misconfigurations, and implement automated remediation. The course covers compliance requirements for various industries including finance, healthcare, and government sectors, ensuring you can meet regulatory standards in your cloud deployments."
                  duration="6-8 weeks"
                  audience={["Cloud Engineers", "Security Professionals", "Compliance Officers"]}
                  prerequisites={["Cloud platform experience", "Basic security knowledge", "Regulatory awareness"]}
                  certification={true}
                  relatedCourses={[
                    {
                      title: "AWS Security Specialist",
                      description: "Deep dive into AWS-specific security controls and best practices",
                      link: "#aws-security",
                    },
                    {
                      title: "Multi-Cloud Governance",
                      description: "Establish consistent security policies across cloud platforms",
                      link: "#cloud-governance",
                    },
                    {
                      title: "DevSecOps for Cloud",
                      description: "Integrate security into your cloud development pipeline",
                      link: "#devsecops",
                    },
                  ]}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

