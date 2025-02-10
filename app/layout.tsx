import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Logo } from "@/components/logo"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ernest Advisory - Fractional CTO & AI Expertise",
  description:
    "On-demand CTO & AI expertise to supercharge your business—plus insights on financial markets, technology, and productivity.",
  keywords: "CTO, AI consulting, technology consulting, financial markets, productivity",
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
            <div className="flex items-center space-x-4">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Ernest Advisory
              </span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#newsletter" className="text-foreground/80 hover:text-primary transition-colors">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-16">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}

