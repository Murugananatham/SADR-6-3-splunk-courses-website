"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, Clock, Users, BookOpen, Award, ExternalLink } from "lucide-react"



interface DevCourseCardProps {
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

export function DevCourseCard({
  title,
  description,
  features,
  detailedDescription,
  expandedDetails,
  duration = "5-6 Months",
  audience = ["Beginners", "Intermediate IT Professionals"],
  prerequisites = ["Basic IT knowledge", "Familiarity with data concepts"],
  certification = true,
}: DevCourseCardProps) {
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
                      <h4 className="font-medium">Phase-1.a : Splunk Developer Environment Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        1. Install & Configure Indexer <br />
                        2. Install & Configure Universal Forwarder in Local. <br />
                        3. Why does Splunk Enterprise need a license? <br />
                        4. Request Developer License <br />
                        5. Explore and understand Search & Reporting App <br />
                        6. Sample Data Onboarding/Configuration <br />
                        7. Basic terminologies
                      </p>

                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-1.b : Basic Splunk Processing Language (SPL) Commands</h4>
                      <div className="grid grid-cols-1 pt-3 sm:grid-cols-5 gap-4 text-sm text-muted-foreground">
                        {[
                          "table", "fields", "eval", "rename", "replace", "dedup", "sort", "search", "where", 
                          "top", "rare", "head", "tail", "fillnull", "filldown", "stats", "eventstats", "streamstats",
                          "chart", "timechart", "xyseries", "join", "rangemap", "transpose", "map", "foreach", 
                          "rex", "erex", "savedsearch", "sendemail", "convert", "fieldformat", "transaction", 
                          "iplocation", "makeresults", "inputlookup", "outputlookup", "lookup", "inputcsv", 
                          "outputcsv", "mvexpand", "pivot", "datamodel", "loadjob", "delete"
                        ].map((command) => (
                          <div key={command} className="p-2 border border-gray-300 rounded-md text-center">{command}</div>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-2 : Splunk Dashboarding Expert</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>How to create a dashboard?</li>
                        <li>How to add filters?</li>
                        <ul className="list-circle ml-4">
                          <li>Dropdown</li>
                          <li>Text</li>
                          <li>Radio</li>
                          <li>Checkbox</li>
                          <li>Multiselect</li>
                          <li>Link list</li>
                          <li>Time</li>
                          <li>Submit</li>
                        </ul>
                        <li>How to create dependent dropdowns?</li>
                        <li>How to create a drill-down for panels?</li>
                        <li>How to handle tokens inside the dashboard?</li>
                        <ul className="list-circle ml-4">
                          <li>Set & unset token</li>
                        </ul>
                        <li>How to customize Splunk native charts/tables?</li>
                        <li>How to add custom charts/tables in the Splunk dashboard?</li>
                        <li>How to use base search in the Splunk dashboard?</li>
                        <li>How to create popup/modal drill-downs?</li>
                        <li>How to handle the utility features menu?</li>
                        <li>How to enable dark mode in the Splunk dashboard?</li>
                        <li>How to create Tabs in the dashboard?</li>
                        <li>How to add a background image?</li>
                        <li>How to create a custom command/feedback box?</li>
                        <li>How to group metrics into a single panel?</li>
                        <li>How to add a Disclaimer popup in the Splunk Dashboard?</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-3 : Knowledge Objects Expert</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>Fields</li>
                        <ul className="list-circle ml-4">
                          <li>Extractions</li>
                          <li>Aliases</li>
                          <li>Calculated</li>
                        </ul>
                        <li>Lookups</li>
                        <li>Eventtypes</li>
                        <li>Tags</li>
                        <li>Workflow Actions</li>
                        <li>Reports</li>
                        <li>Alerts</li>
                        <li>Macros</li>
                        <li>Data Models</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-4 : Search optimization Expert</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>What is it?</li>
                        <li>What happens if the search is not optimized?</li>
                        <li>Basic Principles</li>
                        <li>Search Optimization Principles</li>
                        <li>Quick Tips for Optimization</li>
                        <ul className="list-circle ml-4">
                          <li className="font-medium">Limit the data from disk</li>
                          <ul className="list-disc ml-6">
                            <li>Narrow the time window</li>
                            <li>Specify the index, source, or sourcetype</li>
                            <li>Be specific</li>
                            <li>Limit the number of events retrieved</li>
                            <li>Use TERM directive for minor breaker terms</li>
                            <li>Avoid using NOT expressions</li>
                          </ul>
                          <li className="font-medium">Filter as soon as possible</li>
                          <ul className="list-disc ml-6">
                            <li>Use field-value pairs before the first pipeline</li>
                            <li>Apply filtering commands before calculating commands</li>
                            <li>Filter unnecessary fields from search results</li>
                            <li>Use non-streaming commands as late as possible</li>
                          </ul>
                          <li className="font-medium">Other techniques for search optimization</li>
                          <ul className="list-disc ml-6">
                            <li>Post-process searches</li>
                            <li>Summary Indexing, Report & Data Model Acceleration</li>
                          </ul>
                        </ul>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-5 : Splunk App Expert</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>What is an App?</li>
                        <li>How to create an App in Splunk?</li>
                        <li>How to add a logo to an App?</li>
                        <li>How to create a dashboard inside an App?</li>
                        <li>How to create a Landing Page/Home Page for your App?</li>
                        <li>How to customize the navigation bar?</li>
                        <li>How to customize the theme of your App?</li>
                        <li>How to handle local configurations during packaging?</li>
                        <li>How to Package Apps with a Slim Packaging Tool Kit?</li>
                        <li>How to perform AppInspect for scanning?</li>
                        <li>How to Deploy Apps to Search Head Clusters?</li>
                        <li>How to Deploy Apps to Indexer Clusters?</li>
                        <li>How to Deploy Apps to Forwarders?</li>
                        <li>How to Integrate React.js with your App?</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">Phase-6 : Use Cases</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>How to onboard data from an SQL database?</li>
                        <li>How to integrate ServiceNow & Splunk?</li>
                        <li>How to connect JIRA & Splunk?</li>
                        <li>How to connect GitHub & Splunk?</li>
                        <li>How to connect Jenkins with Splunk?</li>
                        <li>How to get data from AWS to Splunk?</li>
                        <li>How to send data to 3rd party systems?</li>
                        <li>How to create an add-on to fetch details from an API?</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium">(Next Step) Phase-7 : Splunk Admin Basics</h4>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        <li>How to install Splunk Enterprise on Windows?</li>
                        <li>How to install Splunk Enterprise on Linux/Servers?</li>
                        <li>How to install Splunk Universal Forwarder in Windows?</li>
                        <li>How to install Splunk Universal Forwarder in Linux?</li>
                        <li>What are all the ports used by Splunk?</li>
                        <li>What is the latest version of Splunk?</li>
                        <li>What are the important configuration files in Splunk?</li>
                        <li>What are the types of Splunk licenses?</li>
                        <li>What is a Search Head?</li>
                        <li>What is an Indexer?</li>
                        <li>What is a Forwarder?</li>
                        <li>Types of Forwarders?</li>
                        <li>Difference between Heavy Forwarder & Universal Forwarders?</li>
                        <li>How to reset the Splunk Admin password?</li>
                        <li>How does Splunk avoid duplicate logs being indexed?</li>
                        <li>How to troubleshoot issues in Splunk?</li>
                        <li>What are the different types of roles available in Splunk?</li>
                        <li>How to create a user in Splunk?</li>
                        <li>How to restrict user access to a specific index or dashboard?</li>
                        <li>Why should we create multiple indexes instead of using a single index?</li>
                        <li>How to deploy Splunk Apps to a production environment?</li>
                        <li>What is the naming convention for your environment and knowledge objects?</li>
                        <li>What is your environment structure & capacity?</li>
                        <li>How to add thresholds for Alerts and Reports?</li>
                        <li>How to schedule reports & alerts?</li>
                        <li>How to create an index in Splunk?</li>
                        <li>What is meant by retention policy in Splunk? What are the default values?</li>
                        <li>How to clean an index from Splunk Web/UI or CLI?</li>
                        <li>How to rename Splunk indexes?</li>
                      </ul>
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

