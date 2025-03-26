"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle } from "lucide-react"

interface RoadmapStep {
  name: string
  progress: number
}

interface ProgressRoadmapProps {
  title: string
  steps: RoadmapStep[]
}

export function ProgressRoadmap({ title, steps }: ProgressRoadmapProps) {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {step.progress === 100 ? (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle
                      className={`h-5 w-5 ${step.progress > 0 ? "text-primary/70" : "text-muted-foreground/40"}`}
                    />
                  )}
                  <span
                    className={`font-medium ${
                      step.progress === 100
                        ? "text-primary"
                        : step.progress > 0
                          ? "text-foreground"
                          : "text-muted-foreground"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{step.progress}%</span>
              </div>
              <Progress value={step.progress} className={`h-2 ${step.progress === 0 ? "bg-muted" : ""}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

