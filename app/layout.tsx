import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans max-w-3xl mx-auto px-4 py-8 md:py-16">{children}</body>
    </html>
  )
}
