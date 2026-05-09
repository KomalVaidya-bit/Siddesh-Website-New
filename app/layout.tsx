import type { Metadata } from "next"
import { Sora } from "next/font/google"
import type { ReactNode } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "./globals.css"

import { CartProvider } from "@/context/CartContext"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Siddesh Website",
  description: "Professional Ecommerce Website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {

  return (

    <html lang="en">

      <body className={sora.className}>

        <CartProvider>

          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main>
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

        </CartProvider>

      </body>

    </html>
  )
}