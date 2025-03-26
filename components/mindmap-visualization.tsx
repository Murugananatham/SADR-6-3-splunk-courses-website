"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronRight } from "lucide-react"

interface MindmapNode {
  id: string
  title: string
  description: string
  link?: string
  isCustom?: boolean
  children?: MindmapNode[]
}

interface MindmapVisualizationProps {
  rootNode: MindmapNode
  customTracks: MindmapNode[]
}

export function MindmapVisualization({ rootNode, customTracks }: MindmapVisualizationProps) {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([rootNode.id])

  const toggleNode = (nodeId: string) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((id) => id !== nodeId))
    } else {
      setExpandedNodes([...expandedNodes, nodeId])
    }
  }

  const renderNode = (node: MindmapNode, level = 0, isLast = true, parentExpanded = true) => {
    const isExpanded = expandedNodes.includes(node.id)
    const hasChildren = node.children && node.children.length > 0

    return (
      <div key={node.id} className="relative">
        <div className={`flex ${level > 0 ? "ml-8" : ""}`}>
          {/* Connection lines */}
          {level > 0 && <div className="absolute left-[-24px] top-[20px] w-6 border-t-2 border-primary/30"></div>}
          {level > 0 && !isLast && parentExpanded && (
            <div className="absolute left-[-24px] top-[20px] h-full border-l-2 border-primary/30"></div>
          )}

          {/* Node card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: level * 0.1 }}
            className="w-full"
          >
            <Card
              className={`p-4 mb-4 border-none shadow-md hover:shadow-lg transition-all duration-300 ${
                node.isCustom ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{node.title}</h3>
                {node.isCustom && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Custom</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-3">{node.description}</p>
              <div className="flex flex-wrap gap-2">
                {node.link && (
                  <Button variant="outline" size="sm" className="flex items-center text-xs" asChild>
                    <a href={node.link} target="_blank" rel="noopener noreferrer">
                      Access
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                )}

                {hasChildren && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center text-xs text-primary"
                    onClick={() => toggleNode(node.id)}
                  >
                    {isExpanded ? "Collapse" : "Expand"}
                    <ChevronRight className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Render children */}
        {hasChildren && isExpanded && (
          <div className="ml-8">
            {node.children!.map((child, index) =>
              renderNode(child, level + 1, index === node.children!.length - 1, isExpanded),
            )}
          </div>
        )}
      </div>
    )
  }

  // Combine the root node with custom tracks
  const completeRootNode = {
    ...rootNode,
    children: [...(rootNode.children || []), ...customTracks],
  }

  return <div className="w-full py-4">{renderNode(completeRootNode)}</div>
}

