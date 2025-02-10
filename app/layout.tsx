import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Logo } from "@/components/logo"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ernest Advisory - Fractional CTO & AI Expertise",
  description:
    "On-demand CTO & AI expertise to supercharge your business—plus insights on AI agents, scalability, operational bottlenecks, and productivity.",
  keywords: "CTO, AI consulting, technology consulting, productivity, startup tech support",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
    <body className={`${inter.className} bg-background text-foreground`}>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Logo className="w-10 h-10"/>
          <span
              className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Ernest Advisory
              </span>
        </div>

        {/* Mobile Menu Toggle (Checkbox Hack) */}
        <input type="checkbox" id="menu-toggle" className="peer hidden"/>
        <label
            htmlFor="menu-toggle"
            className="md:hidden cursor-pointer text-foreground/80 hover:text-primary transition-colors"
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6 peer-checked:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
          {/* Close Icon */}
          <svg className="w-6 h-6 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </label>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            </li>
            <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a></li>
            <li><a href="#newsletter" className="text-foreground/80 hover:text-primary transition-colors">Newsletter</a>
            </li>
            <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation (Hidden by Default) */}
      <nav className="hidden peer-checked:block md:hidden bg-background/90 backdrop-blur-sm border-t border-border">
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a></li>
          <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a></li>
          <li><a href="#newsletter" className="text-foreground/80 hover:text-primary transition-colors">Newsletter</a>
          </li>
          <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main className="pt-16">{children}</main>
    <Analytics/>
    </body>
    </html>
  )
}

