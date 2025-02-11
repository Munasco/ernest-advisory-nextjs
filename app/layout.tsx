import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navbar";

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
    <html lang="en" className="dark scroll-smooth">
    <body className={`${inter.className} bg-background text-foreground`}>
    <Navbar />
    <main className="pt-16">{children}</main>
    <Analytics/>
    </body>
    </html>
  )
}

