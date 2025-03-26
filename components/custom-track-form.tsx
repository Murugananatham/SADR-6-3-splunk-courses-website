"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

interface CustomTrackFormProps {
  onAddTrack: (track: { title: string; description: string; link?: string }) => void
}

export function CustomTrackForm({ onAddTrack }: CustomTrackFormProps) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      onAddTrack({
        title: title.trim(),
        description: description.trim(),
        link: link.trim() || undefined,
      })

      // Reset form
      setTitle("")
      setDescription("")
      setLink("")
      setIsFormVisible(false)
    }
  }

  return (
    <Card className="border-none shadow-md overflow-hidden transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium flex items-center justify-between">
          <span>Create Your Custom Learning Track</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/80 hover:bg-primary/5"
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            {isFormVisible ? (
              "Cancel"
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Add Track
              </>
            )}
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {isFormVisible ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Track Title</Label>
              <Input
                id="title"
                placeholder="Enter a title for your learning track"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what this learning track covers"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Resource Link (Optional)</Label>
              <Input
                id="link"
                placeholder="https://example.com/resource"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              Create Learning Track
            </Button>
          </form>
        ) : (
          <p className="text-muted-foreground">
            Create your own personalized learning path by adding custom tracks to your roadmap.
          </p>
        )}
      </CardContent>
    </Card>
  )
}

