"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

interface LearningTrackCardProps {
  title: string
  description: string
  expandedContent: string
  link?: string
  isCustom?: boolean
}

export function LearningTrackCard({
  title,
  description,
  expandedContent,
  link,
  isCustom = false,
}: LearningTrackCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className={`border-none shadow-md overflow-hidden transition-all duration-300 ${
        isCustom ? "border-l-4 border-l-primary" : ""
      }`}
    >
      <CardContent className="pt-6 px-6 md:px-8">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {isCustom && <span className="text-xs bg-primary/10 text-green-700 px-2 py-1 rounded-full">Custom</span>}
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {link && (
            <Button variant="outline" size="sm" className="flex items-center" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Access Learning Path
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-green-700 hover:text-green-800 hover:bg-primary/5"
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
          <p className="text-muted-foreground leading-relaxed border-t pt-4">{expandedContent}</p>
        </div>
      </CardContent>
    </Card>
  )
}

