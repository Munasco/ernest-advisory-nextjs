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
      title: "Expertise Across Platforms & Technologies",
      description: "Leverage expertise in mobile, web, systems infra and app security, to build the right solution for your needs",
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Project Management Strategies",
      description: "Optimize your workflow with our proven agile methodologies for faster, more efficient development.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "MVP in Weeks",
      description:
        "Get a functional Minimum Viable Product within weeks to gather real user feedback.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Scalable Architecture Design",
      description: "Build a strong technical foundation that grows with your business.",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Technical Consulting",
      description: "Get expert advice on R&D and industry best practices to stay ahead of the curve.",
    },
  ]

  return (
    <section className="pt-4 pb-8 bg-accent" id="services">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center my-8 text-blue-400">
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

