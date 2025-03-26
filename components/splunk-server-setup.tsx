"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, CheckCircle, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { colors, shadows, animations } from "@/config/theme"

export default function SplunkServerSetup() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    standalone: false,
    distributed: false,
    clustered: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2
          className="text-3xl font-bold tracking-tight mb-2"
          style={{
            background: `linear-gradient(to right, ${colors.primary.green}, ${colors.variations.lightGreen})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Splunk Server Setup Options
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the right Splunk environment for your learning and development needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {/* Free Standalone Lab */}
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: shadows.xl,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-full"
        >
          <Card
            className="relative overflow-hidden h-full border-0"
            style={{
              background: `linear-gradient(to bottom right, ${colors.primary.white}, ${colors.background.light})`,
              boxShadow: shadows.md,
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `linear-gradient(to bottom right, rgba(40, 167, 69, 0.05), rgba(255, 255, 255, 0.1))`,
                backdropFilter: "blur(8px)",
              }}
            />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: colors.primary.green,
                    color: colors.primary.white,
                  }}
                >
                  Free
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  background: `linear-gradient(to right, ${colors.primary.green}, ${colors.variations.lightGreen})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Free Splunk Standalone Server Setup
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Step-by-step guide to set up your own Splunk server environment for practice.
              </p>

              <div className="space-y-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle style={{ color: colors.primary.green }} className="h-5 w-5" />
                  <span>Pre-configured Splunk Instance</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle style={{ color: colors.primary.green }} className="h-5 w-5" />
                  <span>BOTSv3 Security Dataset (Real-world threat hunting logs)</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle style={{ color: colors.primary.green }} className="h-5 w-5" />
                  <span>Supporting Add-ons</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle style={{ color: colors.primary.green }} className="h-5 w-5" />
                  <span>Step-by-Step Guidance</span>
                </motion.div>

                <AnimatePresence>
                  {expandedSections.standalone && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Get access to our pre-configured Splunk standalone environment with the BOTSv3 dataset already
                          loaded. Perfect for beginners and those looking to practice their Splunk skills in a realistic
                          environment.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          This environment includes everything you need to start your Splunk journey, with real-world
                          security logs that simulate actual cyber threats and attacks.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{
                    scale: animations.hover.scale,
                    boxShadow: shadows.glow,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 font-medium rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to right, ${colors.primary.green}, ${colors.variations.lightGreen})`,
                    color: colors.primary.white,
                    transition: animations.transition.medium,
                    boxShadow: shadows.sm,
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Book Your Slot
                </motion.button>

                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-center gap-1"
                  style={{ color: colors.primary.green }}
                  onClick={() => toggleSection("standalone")}
                >
                  {expandedSections.standalone ? (
                    <>
                      See Less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      See More <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Free Distributed (Non-clustered) */}
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: shadows.xl,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full"
        >
          <Card
            className="relative overflow-hidden h-full border-0"
            style={{
              background: `linear-gradient(to bottom right, ${colors.primary.white}, ${colors.background.light})`,
              boxShadow: shadows.md,
              opacity: 0.85,
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `linear-gradient(to bottom right, rgba(40, 167, 69, 0.1), rgba(255, 255, 255, 0.1))`,
                backdropFilter: "blur(8px)",
              }}
            />
            <div
              className="absolute top-0 right-0 text-xs font-medium px-3 py-1 rounded-bl-lg z-20"
              style={{
                background: "rgba(108, 117, 125, 0.9)",
                backdropFilter: "blur(4px)",
                color: colors.primary.white,
              }}
            >
              Coming Soon
            </div>
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: colors.states.disabled,
                    color: colors.primary.white,
                  }}
                >
                  Free
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.variations.darkGreen }}>
                Free Splunk Distributed (Non-clustered) Environment
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                A more advanced setup with separate components for a complete Splunk experience.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className="h-5 w-5 rounded-full flex items-center justify-center"
                    style={{ background: colors.primary.green }}
                  >
                    <span style={{ color: colors.primary.white }} className="text-xs">
                      1
                    </span>
                  </div>
                  <span className="text-muted-foreground">Search Head</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-5 w-5 rounded-full flex items-center justify-center"
                    style={{ background: colors.primary.green }}
                  >
                    <span style={{ color: colors.primary.white }} className="text-xs">
                      1
                    </span>
                  </div>
                  <span className="text-muted-foreground">Indexer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-5 w-5 rounded-full flex items-center justify-center"
                    style={{ background: colors.primary.green }}
                  >
                    <span style={{ color: colors.primary.white }} className="text-xs">
                      1
                    </span>
                  </div>
                  <span className="text-muted-foreground">Heavy Forwarder</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-5 w-5 rounded-full flex items-center justify-center"
                    style={{ background: colors.primary.green }}
                  >
                    <span style={{ color: colors.primary.white }} className="text-xs">
                      1
                    </span>
                  </div>
                  <span className="text-muted-foreground">Universal Forwarder</span>
                </div>

                <AnimatePresence>
                  {expandedSections.distributed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Experience a complete Splunk distributed environment with separate components. This setup
                          mimics real-world deployments and helps you understand how Splunk components interact.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Learn about data forwarding, indexing, and searching in a distributed architecture that scales
                          to enterprise needs.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <motion.button
                  className="w-full py-2.5 px-4 font-medium rounded-lg flex items-center justify-center cursor-not-allowed"
                  style={{
                    background: `linear-gradient(to right, ${colors.states.disabled}, ${colors.variations.darkGreen})`,
                    color: colors.primary.white,
                    transition: animations.transition.medium,
                    boxShadow: shadows.sm,
                  }}
                >
                  <Clock className="mr-2 h-4 w-4 animate-pulse" />
                  Coming Soon
                </motion.button>

                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-center gap-1"
                  style={{ color: colors.variations.darkGreen }}
                  onClick={() => toggleSection("distributed")}
                >
                  {expandedSections.distributed ? (
                    <>
                      See Less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      See More <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Paid Distributed Clustered */}
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: `${shadows.xl}, ${shadows.goldGlow}`,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-full"
        >
          <Card
            className="relative overflow-hidden h-full border-0"
            style={{
              background: `linear-gradient(to bottom right, ${colors.primary.white}, ${colors.background.light})`,
              boxShadow: shadows.md,
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `linear-gradient(to bottom right, rgba(255, 193, 7, 0.05), rgba(40, 167, 69, 0.05))`,
                backdropFilter: "blur(8px)",
              }}
            />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: colors.variations.gold,
                    color: colors.text.primary,
                  }}
                >
                  Premium
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  background: `linear-gradient(to right, ${colors.variations.gold}, ${colors.primary.green})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Paid Distributed Clustered Environment
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                A Distributed Clustered Environment in Splunk enables scalability and high availability.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle style={{ color: colors.variations.gold }} className="h-5 w-5 mt-0.5" />
                  <div>
                    <span className="font-medium">Search Head Cluster (3 SHC)</span>
                    <p className="text-xs text-muted-foreground">
                      Distributes search queries for load balancing & failover
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle style={{ color: colors.variations.gold }} className="h-5 w-5 mt-0.5" />
                  <div>
                    <span className="font-medium">Indexer Cluster (3 Indexers)</span>
                    <p className="text-xs text-muted-foreground">
                      Stores, replicates, and manages data with redundancy
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections.clustered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Our premium clustered environment provides enterprise-grade Splunk experience with high
                          availability and fault tolerance. Perfect for advanced users and teams looking to simulate
                          production environments.
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Benefits:</p>
                          <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                            <li>High availability and fault tolerance</li>
                            <li>Load balancing across multiple components</li>
                            <li>Data replication and redundancy</li>
                            <li>Enterprise-grade security features</li>
                            <li>Dedicated support and guidance</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{
                    scale: animations.hover.scale,
                    boxShadow: `${shadows.goldGlow}, ${shadows.glow}`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 font-medium rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to right, ${colors.variations.gold}, ${colors.primary.green})`,
                    color: colors.primary.white,
                    transition: animations.transition.medium,
                    boxShadow: shadows.sm,
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Book Your Slot
                </motion.button>

                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-center gap-1"
                  style={{ color: colors.primary.green }}
                  onClick={() => toggleSection("clustered")}
                >
                  {expandedSections.clustered ? (
                    <>
                      See Less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      See More <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

