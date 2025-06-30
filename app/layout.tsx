import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Sree Duggirala",
  description: "Personal portfolio showcasing work in quantitative finance and DeFi",
  openGraph: {
    title: "Sree Duggirala",
    description: "Personal portfolio showcasing work in quantitative finance and DeFi",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="font-mono max-w-3xl mx-auto px-4 py-8 md:py-16">{children}</body>
    </html>
  )
}

