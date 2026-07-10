"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/our-products" },
  { label: "Social Initiatives", href: "/social-initiatives" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] py-12 text-white">
      <motion.div
        {...footerMotion}
        className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3"
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-2xl p-2.5 flex items-center justify-center shadow-lg border border-slate-700/20">
              <Image
                src="/siddesh logo.png"
                alt="Siddesh Logo"
                width={190}
                height={100}
                className="object-contain h-14 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Siddesh
              </h3>
              <span className="text-xs text-white/60 font-semibold">Technologies Pvt. Ltd.</span>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-sm mt-1">
            Building future-ready learners through immersive technology education and
            innovation labs.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold">Contact</h4>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Siddesh Technologies Pvt. Ltd.
            <br />
            Innovation Park, Bengaluru, Karnataka
            <br />
            +91 98765 43210
            <br />
            hello@siddeshtechnologies.com
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
