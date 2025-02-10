"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        window.location.href = "https://cal.com/munachi-ernest-eze/ernest-advisory-consultations"
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Ready to Supercharge Your Business?</h2>
          <p className="text-foreground/80">
            Schedule a consultation and get personalized recommendations from an industry expert.
          </p>
        </div>
        <Card className="max-w-xl mx-auto bg-card border-accent-foreground/20">
          <CardContent className="p-6">
            {submitSuccess ? (
              <div className="text-center text-green-500">
                <p>Thank you for your message! You will be redirected to schedule a meeting shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                      Name
                    </label>
                    <Input id="name" name="name" required className="bg-accent text-foreground" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required className="bg-accent text-foreground" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground/80">
                    Company
                  </label>
                  <Input id="company" name="company" className="bg-accent text-foreground" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required className="bg-accent text-foreground" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

