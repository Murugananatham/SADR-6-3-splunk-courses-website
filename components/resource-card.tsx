"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, FileText, Info, ChevronDown, ChevronUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import type { ReactNode } from "react"

interface ResourceCardProps {
  icon: ReactNode
  title: string
  description: string
  expandedContent: string
  tag: string
  isPaid: boolean
  accessType: "form" | "booking"
  accessLink: string
  formFields?: string[]
  bookingDetails?: {
    duration: string
    availability: string
  }
}

export function ResourceCard({
  icon,
  title,
  description,
  expandedContent,
  tag,
  isPaid,
  accessType,
  accessLink,
  formFields = ["Name", "Email", "Company", "Experience Level"],
  bookingDetails = {
    duration: "45 minutes",
    availability: "Mon-Fri, 9AM-5PM EST",
  },
}: ResourceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card
        className={`border-none shadow-md hover:shadow-lg transition-all duration-300 ${
          isPaid ? "border-t-4 border-t-[#FFD700]" : ""
        }`}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2 rounded-lg ${isPaid ? "bg-[#FFD700]/10" : "bg-primary/10"}`}>{icon}</div>
            <Badge
              variant="outline"
              className={
                isPaid
                  ? "bg-[#FFD700]/10 text-[#B8860B] border-[#FFD700]/20"
                  : "bg-primary/10 text-primary border-primary/20"
              }
            >
              {tag}
            </Badge>
          </div>

          <h3 className={`text-xl font-bold mb-3 ${isPaid ? "text-[#B8860B]" : ""}`}>{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center ${
                isPaid
                  ? "text-[#B8860B] hover:text-[#B8860B]/80 hover:bg-[#FFD700]/5"
                  : "text-primary hover:text-primary/80 hover:bg-primary/5"
              }`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  See Less
                  <ChevronUp className="ml-1 h-3 w-3" />
                </>
              ) : (
                <>
                  See More
                  <ChevronDown className="ml-1 h-3 w-3" />
                </>
              )}
            </Button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t pt-4 space-y-4">
              <p className="text-muted-foreground leading-relaxed">{expandedContent}</p>

              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">
                    {isPaid
                      ? "Book a slot for premium content access:"
                      : "Fill out the form to access this free resource:"}
                  </p>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsDialogOpen(true)}>
                    <Info className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  className={`w-full ${
                    isPaid
                      ? "bg-[#B8860B] hover:bg-[#B8860B]/90 text-white"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                  asChild
                >
                  <a href={accessLink} target="_blank" rel="noopener noreferrer">
                    {accessType === "form" ? (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Access Resource Form
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Access Slot
                      </>
                    )}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className={isPaid ? "text-[#B8860B]" : "text-primary"}>
              {accessType === "form" ? "Form Access Details" : "Booking Information"}
            </DialogTitle>
            <DialogDescription>
              {accessType === "form"
                ? "Complete the form to gain access to this resource"
                : "Book a time slot to access this premium resource"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {accessType === "form" ? (
              <>
                <div>
                  <h4 className="text-sm font-medium mb-2">Required Information</h4>
                  <ul className="space-y-1">
                    {formFields.map((field, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-medium mb-2">What Happens Next?</h4>
                  <p className="text-sm text-muted-foreground">
                    After submitting the form, you'll receive an email with access instructions within 24 hours. The
                    resource will be available for 30 days from activation.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h4 className="text-sm font-medium mb-2">Session Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="text-sm font-medium">{bookingDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Availability:</span>
                      <span className="text-sm font-medium">{bookingDetails.availability}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-medium mb-2">What to Expect</h4>
                  <p className="text-sm text-muted-foreground">
                    After booking, you'll receive a confirmation email with meeting details. During the session, our
                    expert will provide personalized guidance and access to the premium resource materials.
                  </p>
                </div>
              </>
            )}

            <div className="flex justify-end pt-2">
              <Button className={isPaid ? "bg-[#B8860B] hover:bg-[#B8860B]/90" : ""} asChild>
                <a href={accessLink} target="_blank" rel="noopener noreferrer">
                  {accessType === "form" ? "Go to Form" : "Book Now"}
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

