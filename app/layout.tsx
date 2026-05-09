import type { Metadata } from "next";
import { Sora } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

import { CartProvider } from "@/context/CartContext"





const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Siddesh Website",
  description: "Cinematic table scroll animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <CartProvider>
    {children}
  </CartProvider>
</body>
    </html>
  );
}



