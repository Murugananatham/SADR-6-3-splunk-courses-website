"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExpandableSectionProps {
  title: string
  initialContent: string

}

export function ExpandableSection({ title, initialContent }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="bg-white border-none shadow-md overflow-hidden transition-all duration-300">
      <CardContent className="pt-6 px-6 md:px-8">
        <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">{initialContent}</p>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed pt-4">
             1. I learned all concepts in Splunk Admin, but don’t have real-time experience. <br />
             2. I am unable to crack the interview, they are asking real-time questions. <br />
             3. I need one dedicated trainer to guide me step by step. <br />
             4. I took many courses in Splunk, but not able to understand properly. <br />
             5. I want to be a real time expert in Splunk. <br />
             6. I want to gain practical knowledge / real time experience. <br />
             7. I want to learn how to implement end-to-end project in Splunk. <br />
</p>
          </div>

          <Button
            variant="ghost"
            className="flex items-center text-primary hover:text-primary/80 hover:bg-primary/5 p-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                See Less
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                See More
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

