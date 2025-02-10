import { Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a
              href="mailto:munachi@ekogenie.com"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/munachi-ernest-eze/" className="text-foreground/80 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <div>
            <p className="text-sm text-foreground/80">
              &copy; {new Date().getFullYear()} Ernest Advisory. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 text-sm text-foreground/60 justify-center">
              <a href="" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

