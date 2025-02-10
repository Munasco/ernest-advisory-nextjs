"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Clock } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/20 to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/30 via-purple-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-blue-400">
          Get Your SaaS Idea to Market in Weeks
        </h1>
        <div className="text-xl md:text-3xl text-foreground/80 mb-8 h-20">
          <TypeAnimation
            sequence={[
              "Animate Your SaaS Vision",
              2000,
              "Leverage AI Agents",
              2000,
              "Optimize your R&D process",
              2000,
              "Get a Productivity Audit",
              2000,
              "Accelerate Development",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
          Expert technical guidance, AI-driven development, and Optimized productivity workflows for your success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <div className="bg-accent/50 p-4 rounded-lg flex items-start">
            <Rocket className="w-6 h-6 text-blue-400 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Rapid Innovation</h3>
              <p className="text-foreground/70">
                Transform your ideas into market-ready products at unprecedented speed
              </p>
            </div>
          </div>
          <div className="bg-accent/50 p-4 rounded-lg flex items-start">
            <Clock className="w-6 h-6 text-blue-400 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">AI-Powered Solutions</h3>
              <p className="text-foreground/70">Harness cutting-edge AI to drive your business forward</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join our Community For Developers
          </Button>
        </div>
      </div>
    </section>
  )
}

