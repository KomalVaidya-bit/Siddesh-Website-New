"use client"

import Navbar from "./Navbar"
import Footer from "./Footer"

import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: any) {

  const pathname = usePathname()

  const isAdmin =
    pathname.startsWith("/admin")

  return (

    <>

      {!isAdmin && <Navbar />}

      <main>
        {children}
      </main>

      {!isAdmin && <Footer />}

    </>
  )
}