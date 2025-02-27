"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {Medal, FileText, Linkedin, Twitter, Mail, Brain} from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b1G58FnAxve6lwAEA7BLpWcjEwBwZX.png"
              alt="Munachi Ernest-Eze"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="text-center lg:text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Our Lead Engineer</h2>
            <p className="text-foreground/80 mb-6">
              I'm Munachi Ernest-Eze, a Fractional CTO and AI Consultant with a track record of driving innovation at
              companies like DoorDash, LinkedIn, Microsoft, and Block. My expertise lies in scalable systems,
              performance optimization, and R&D expertise for software and avionic systems.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Card className="bg-card border-accent-foreground/20">
                <CardContent className="p-4 flex items-center">
                  <Medal className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-sm text-muted-foreground">Math Olympiad</span>
                </CardContent>
              </Card>
              <Card className="bg-card border-accent-foreground/20">
                <CardContent className="p-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-sm text-muted-foreground">Software Patents</span>
                </CardContent>
              </Card>
              <Card className="bg-card border-accent-foreground/20">
                <CardContent className="p-4 flex items-center">
                <Brain className="w-6 h-6 text-red-400 mr-2" />
                  <span className="text-sm text-muted-foreground">Software Engineer @ LinkedIn</span>
                </CardContent>
              </Card>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Key Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="bg-card border-accent-foreground/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-primary">Technical Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Pioneering patented algorithms and leading high-performance teams.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-accent-foreground/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-primary">AI Implementation</h4>
                  <p className="text-sm text-muted-foreground">
                    Leveraging cutting-edge AI technologies for real-world business solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/munachi-ernest-eze/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/munathelegend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:munachi@createwithjck.com"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

