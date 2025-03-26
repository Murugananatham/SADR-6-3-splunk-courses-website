"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, Clock, Users, BookOpen, Award, ExternalLink } from "lucide-react"

interface RelatedCourse {
  title: string
  description: string
  link: string
}

interface CourseCardProps {
  title: string
  description: string
  features: string[]
  detailedDescription: string
  expandedDetails: string
  duration?: string
  audience?: string[]
  prerequisites?: string[]
  certification?: boolean
  relatedCourses: RelatedCourse[]
}

export function CourseCard({
  title,
  description,
  features,
  detailedDescription,
  expandedDetails,
  duration = "4-6 weeks",
  audience = ["Beginners", "Intermediate IT Professionals"],
  prerequisites = ["Basic IT knowledge", "Familiarity with data concepts"],
  certification = true,
  relatedCourses,
}: CourseCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [relevantCourses, setRelevantCourses] = useState<RelatedCourse[]>([])

  // Simulate AI-driven course suggestions based on the current course
  useEffect(() => {
    if (isDialogOpen) {
      // In a real app, this would be an API call to get personalized recommendations
      setRelevantCourses(relatedCourses)
    }
  }, [isDialogOpen, relatedCourses])

  return (
    <>
      <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full mt-4 shadow-md hover:shadow-primary/20 transition-all duration-300"
            onClick={() => setIsDialogOpen(true)}
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 max-h-[90vh] overflow-hidden flex flex-col">
          <div className="sticky top-0 z-10 bg-background p-6 pb-2 border-b">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary flex items-center justify-between">
                {title}
                {certification && (
                  <Badge className="ml-2 bg-[#FFD700]/20 text-[#B8860B] hover:bg-[#FFD700]/30">
                    Certification Available
                  </Badge>
                )}
              </DialogTitle>
            </DialogHeader>
          </div>

          <div className="overflow-y-auto p-6 pt-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4 w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Course Details</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="related">Related Courses</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Course Overview</h3>
                  <p className="text-muted-foreground">{detailedDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">{duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Target Audience</p>
                      <p className="text-sm text-muted-foreground">{audience.join(", ")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Detailed Course Information</h3>
                  <p className="text-muted-foreground">{expandedDetails}</p>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Course Structure</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Module 1: Foundations</h4>
                      <p className="text-sm text-muted-foreground">Core concepts and fundamental principles</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Module 2: Practical Applications</h4>
                      <p className="text-sm text-muted-foreground">Hands-on exercises and real-world scenarios</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Module 3: Advanced Techniques</h4>
                      <p className="text-sm text-muted-foreground">Specialized skills and optimization strategies</p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Module 4: Integration & Implementation</h4>
                      <p className="text-sm text-muted-foreground">
                        Putting it all together in enterprise environments
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Training Methodology</h3>
                  <p className="text-muted-foreground">
                    Our one-to-one training methodology ensures personalized attention and customized learning paths.
                    Sessions are conducted via video conferencing with screen sharing capabilities. Each session
                    includes theoretical concepts followed by practical exercises and real-time feedback.
                  </p>
                </div>

                {certification && (
                  <>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Award className="h-5 w-5 text-[#B8860B] mr-2" />
                        Certification
                      </h3>
                      <p className="text-muted-foreground">
                        Upon successful completion of the course and passing the final assessment, you will receive a
                        SoftMania certification recognizing your expertise in this domain. This certification can be
                        added to your professional profile and shared with potential employers.
                      </p>
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Prerequisites</h3>
                  <ul className="space-y-2">
                    {prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Technical Requirements</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">To participate in this course, you will need:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>Computer with minimum 8GB RAM and 20GB free disk space</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>Stable internet connection (minimum 5Mbps)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>Modern web browser (Chrome, Firefox, or Edge)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>Microphone and webcam for interactive sessions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Time Commitment</h3>
                  <p className="text-muted-foreground">
                    This course requires approximately 4-6 hours per week, including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>1-2 hours of one-to-one instruction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>2-3 hours of hands-on practice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>1 hour of self-study and review</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="related" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    Recommended Courses
                  </h3>
                  <p className="text-muted-foreground">
                    Based on your interest in {title}, we recommend these related courses:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-4">
                  {relevantCourses.map((course, index) => (
                    <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-primary mb-1">{course.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href={course.link} className="flex items-center justify-center">
                            View Course
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end space-x-2 pt-6 sticky bottom-0 bg-background border-t mt-6 py-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
              <Button className="bg-primary hover:bg-primary/90 hover:shadow-md transition-all duration-200">
                Enroll Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

