"use client"

import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-accent" id="newsletter">
      <div className="container px-4 mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Join the Newsletter</h2>
        <p className="text-foreground/80 mb-8">
          Get exclusive insights on AI, tech trends, and financial markets delivered straight to your inbox.
        </p>
        <form
          action="https://sirnestoo.substack.com/"
          method="get"
          target="_blank"
          className="flex flex-col items-center gap-4"
        >
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Subscribe to our Newsletter
          </Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4">Join hundreds of professionals getting weekly insights</p>
      </div>
    </section>
  )
}

