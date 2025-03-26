"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, FileText, Info, ChevronDown, ChevronUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import type { ReactNode } from "react"

interface DisClusteredCardProps {
  icon: ReactNode
  title: string
  description: string
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

export function DisClusteredCard({
  icon,
  title,
  description,
  tag,
  isPaid,
  accessType,
  accessLink,

}: DisClusteredCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

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
              <p className="text-muted-foreground leading-relaxed">
               <b> Search Head Cluster (SHC):</b> A group of 3 search heads that work together to distribute search queries and results, ensuring load balancing and failover.

I               <b>Indexer Cluster: </b>A cluster of 3 indexers that store, replicate, and manage incoming data to provide redundancy and fault tolerance.</p>

              <div className="pt-2">
               
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
    </>
  )
}

