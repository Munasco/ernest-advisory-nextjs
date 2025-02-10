"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Zap, BarChart, Clock, Target, Lightbulb } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Rapid Prototyping",
      description: "Transform your SaaS idea into a working prototype within days, not months.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI-Powered Development",
      description: "Leverage cutting-edge AI to accelerate your development process and reduce time-to-market.",
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Agile Project Management",
      description: "Optimize your workflow with our proven agile methodologies for faster, more efficient development.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "MVP in Weeks",
      description:
        "Launch your Minimum Viable Product in weeks, allowing you to start gathering user feedback quickly.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Scalable Architecture Design",
      description: "Build a foundation that can grow with your business, from MVP to enterprise-level solutions.",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation Consulting",
      description: "Get expert advice on emerging technologies and industry best practices to stay ahead of the curve.",
    },
  ]

  return (
    <section className="py-4 bg-accent" id="services">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center my-4 text-blue-400">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-accent-foreground/20">
              <CardContent className="p-6">
                <div className="mb-4 text-blue-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

