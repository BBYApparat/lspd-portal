// app/layout.tsx - Main UPD Layout
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { UPDNavigation } from "@/components/upd-navigation"
import { UPDFooter } from "@/components/upd-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UPD Portal - Unified Police Department",
  description:
    "Official portal for the Unified Police Department - Serving and Protecting Citizens Across All Jurisdictions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UPDNavigation />
        <main>{children}</main>
        <UPDFooter />
      </body>
    </html>
  )
}