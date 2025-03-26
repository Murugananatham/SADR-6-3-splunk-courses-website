"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, Clock, Users, BookOpen, Award, ExternalLink } from "lucide-react"



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
}: CourseCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)


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
        <DialogContent className="sm:max-w-[850px] p-0 max-h-[90vh] overflow-hidden flex flex-col">
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
                      <h4 className="font-medium">Phase-1.a: Requirement Gathering Session</h4>
                      <p className="text-sm text-muted-foreground">1. Introduction - Project overview & Roadmap</p>
                      <p className="text-sm text-muted-foreground">2. Understand responsibilities & ownership of the individuals in your team</p>
                      <p className="text-sm text-muted-foreground">3. Gather all the business requirements discussion</p>

                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-1.b: Capacity Planning</h4>
                      <p className="text-sm text-muted-foreground">1. Calculate the capacity of the infrastructure (such as system-level resources like CPU,
                        Memory & Disk, etc... for each component)</p>
                      <p className="text-sm text-muted-foreground">2. Select the instance types from the Cloud service providers such as AWS, GCP, Azure,
                      etc.,</p>
                      <p className="text-sm text-muted-foreground">3. Distributed Deployment and why it's required?</p>

                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-2: Architecture Planning</h4>
                      <p className="text-sm text-muted-foreground">1. Identify standard integration points</p>
                      <p className="text-sm text-muted-foreground">2. Design and size indexes</p>
                      <p className="text-sm text-muted-foreground">3. Estimate storage requirements</p>
                      <p className="text-sm text-muted-foreground">4. Identify relevant apps</p>
                      <p className="text-sm text-muted-foreground">5. Identify the impact of clustering for index replication and for search heads</p>
                      <p className="text-sm text-muted-foreground">6. Discuss different architecture options based on use case</p>
                      <p className="text-sm text-muted-foreground">7. Plan Retention Policies for each index based on the requirement</p>
                      <p className="text-sm text-muted-foreground">8. Plan for the availability of data & necessary artifacts</p>
                      <p className="text-sm text-muted-foreground">9. Prepare the Disaster Recovery Strategy</p>
                      <p className="text-sm text-muted-foreground">10. Deployment Pipelines & Branching Strategy</p>
                      <p className="text-sm text-muted-foreground">11. Access Levels & Approval Process</p>

                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-3: Setting up the infrastructure</h4>
                      <p className="text-sm text-muted-foreground">1. Where to start?</p>
                      <p className="text-sm text-muted-foreground">2. How to install Splunk Enterprise on Linux/Servers?</p>
                      <p className="text-sm text-muted-foreground">3. How to install Splunk Universal Forwarder in Linux?</p>
                      <p className="text-sm text-muted-foreground">4. What are all the Processing Components & why do we need them?</p>
                      <p className="text-sm text-muted-foreground">5. What are all the Management Components & why do we need them</p>
                      <p className="text-sm text-muted-foreground">6. Which component will you set up first & why?</p>
                      <p className="text-sm text-muted-foreground">7. Configure each component one by one</p>
                      <p className="text-sm text-muted-foreground">8. How to update Splunk’s default configurations</p>
                      
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-4: Deploying Apps to Clusters & Maintenance</h4>
                      <p className="text-sm text-muted-foreground">1. What are all the minimum required files/configs for an app to be deployed?</p>
                      <p className="text-sm text-muted-foreground">2. How to Deploy Apps to Search Head Clusters using Deployer?</p>
                      <p className="text-sm text-muted-foreground">3. How to Deploy Apps to Indexer Clusters Using Cluster Master?</p>
                      <p className="text-sm text-muted-foreground">4. How to Deploy Apps to Forwarders using Deployment Servers?</p>
                      <p className="text-sm text-muted-foreground">5. How to Create Users in the Search Head Cluster?</p>
                      <p className="text-sm text-muted-foreground">6. How to Create Indexes in Indexer Clusters?</p>
                      <p className="text-sm text-muted-foreground">7. How to Clean Indexes in Indexer Clusters?</p>
                      <p className="text-sm text-muted-foreground">8. How to Delete Indexes in Indexer Clusters?</p>
                      <p className="text-sm text-muted-foreground">9. How to take a backup of Splunk configuration/data? Why should we do that?</p>
                      <p className="text-sm text-muted-foreground">10. How to migrate an index from one Splunk server to another Splunk server?</p>
                      <p className="text-sm text-muted-foreground">11. What is meant by the Collocation of Splunk Components? Why & when should we do that?</p>
                      <p className="text-sm text-muted-foreground">12. How to Upgrade the Splunk Enterprise?</p>
                      <p className="text-sm text-muted-foreground">13. How to Upgrade the Splunk Enterprise, which is Clustered?</p>
                      <p className="text-sm text-muted-foreground">14. What happens, If Cluster Master is down?</p>
                      <p className="text-sm text-muted-foreground">15. What happens, If one of the Indexers is down in a 3-member cluster?</p>
                      <p className="text-sm text-muted-foreground">16. What happens, If two of the Indexers are down in a 3-member cluster?</p>
                      <p className="text-sm text-muted-foreground">17. What happens, If all of the Indexers are down in a 3-member cluster?</p>
                      <p className="text-sm text-muted-foreground">18. What happens, If one of the Search Heads is down in a 3-member cluster?</p>
                      <p className="text-sm text-muted-foreground">19. What happens, If two of the Search Heads are down in a 3-member cluster?</p>
                      <p className="text-sm text-muted-foreground">20. What happens, If all of the Search Heads are down in a 3-member cluster?</p>
                      <p className="text-sm text-muted-foreground">21. What happens, If the Deployer is down?</p>
                      <p className="text-sm text-muted-foreground">22. What happens, If the Monitoring Console is down?</p>
                      <p className="text-sm text-muted-foreground">23. What happens, If the Deployment Server is down?</p>
                      <p className="text-sm text-muted-foreground">24. What happens, If Universal Forwarder is down?</p>
                      <p className="text-sm text-muted-foreground">25. What happens, If the License Master/Server is down?</p>
                      <p className="text-sm text-muted-foreground">26. What happens if the network connectivity between the Forwarder and indexer is lost?</p>
                      <p className="text-sm text-muted-foreground">27. How to avoid overloading of Indexers, while sending the data from Forwarders?</p>
                      <p className="text-sm text-muted-foreground">28. What happens when the Disk is full? Is the index full?</p>
                      <p className="text-sm text-muted-foreground">29. How to enable SSL in Splunk? Is it possible to use custom SSL Certificates?</p>
                      <p className="text-sm text-muted-foreground">30. What happens in a distributed environment, under the hood/behind the screen, when a user runs a query in Search Head?</p>
                      <p className="text-sm text-muted-foreground">31. How do Forwarders avoid duplicates? up to what level?</p>
                      <p className="text-sm text-muted-foreground">32. How does a fishbucket work?</p>
                      <p className="text-sm text-muted-foreground">33. How to reduce license usage in Splunk?</p>


                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-5: Data Onboarding</h4>
                      <p className="text-sm text-muted-foreground">1. How to use Universal Forwarder to get the data into Splunk</p>
                      <p className="text-sm text-muted-foreground">2. How to format the data before indexing into Splunk</p>
                      <p className="text-sm text-muted-foreground">3. Improve the data input process</p>
                      
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-6: Troubleshooting Splunk Enterprise</h4>
                      <p className="text-sm text-muted-foreground">1. Identify Where to Check the Index-Time Pipeline Status</p>
                      <p className="text-sm text-muted-foreground">2. Use the metrics.log to Clarify the Index-Time Problem</p>
                      <p className="text-sm text-muted-foreground">3. Data input issues</p>
                      <p className="text-sm text-muted-foreground">4. Troubleshooting inputs with Monitoring Console</p>
                      <p className="text-sm text-muted-foreground">5. Deployment Server Issues</p>
                      <p className="text-sm text-muted-foreground">6. Forwarding and Receiving Issues</p>
                      <p className="text-sm text-muted-foreground">7. Upgrade considerations</p>
                      <p className="text-sm text-muted-foreground">8. Installation issues</p>
                      <p className="text-sm text-muted-foreground">9. Splunk Licensing Issues</p>
                      <p className="text-sm text-muted-foreground">10. Splunk roles and user management issues</p>
                      <p className="text-sm text-muted-foreground">11. Troubleshoot Distributed Search Issues</p>
                      <p className="text-sm text-muted-foreground">12. Identify Job Scheduling Problems</p>
                      <p className="text-sm text-muted-foreground">13. Learn to Diagnose Crashing Problems</p>
                      <p className="text-sm text-muted-foreground">14. Describe How to Prioritize Resources for Critical Splunk Processes</p>
                      <p className="text-sm text-muted-foreground">15. Identify the types of search problems</p>
                      <p className="text-sm text-muted-foreground">16. Isolate and troubleshoot search problems</p>

                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">(Next Step) Phase-7: Best Practices for Splunk Admin</h4>
                      <p className="text-sm text-muted-foreground">https://conf.splunk.com/files/2019/slides/FN1054.pdf</p>
                      <p className="text-sm text-muted-foreground">https://www.youtube.com/watch?v=O_w7rSWlHJs</p>
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

