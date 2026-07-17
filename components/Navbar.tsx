"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const labsItems = [
  {
    label: "Think Sphere 360 Composite Skill Lab",
    href: "/labs/think-sphere-360-composite-skill-lab",
  },
  { label: "Science Lab", href: "/labs/science-lab" },
  { label: "Mathematics Lab", href: "/labs/mathematics-lab" },
  { label: "Geography Lab", href: "/labs/geography-lab" },
];



const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" }, // Updated to point to new About page
  { label: "Labs", href: "/labs", hasDropdown: true },
  { label: "Our Products", href: "/our-products" },
  { label: "Social Initiatives", href: "/social-initiatives" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

const dropdownMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: 0.2, ease: "easeOut" as const },
};

const mobilePanelMotion = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

const overlayMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

type NavbarProps = {
  floating?: boolean;
  overlay?: boolean;
};

export default function Navbar({ floating = false, overlay = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLabsOpen, setMobileLabsOpen] = useState(false);
  const [desktopLabsOpen, setDesktopLabsOpen] = useState(false);

  return (
    <>
      <header
        className={`w-full ${floating ? "fixed inset-x-0 top-0 z-50" : "sticky top-0 z-50"}`}
      >
        <div className="mx-auto flex w-[92%] lg:w-[94%] max-w-7xl items-center justify-between py-4 md:py-5">
          <nav className="relative flex w-full items-center justify-between rounded-[24px] border border-white/40 bg-white/80 pl-4 md:pl-6 pr-4 md:pr-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-md h-[80px] md:h-[88px]">

            {/* Logos Group */}
            <div className="flex items-center gap-2.5 h-full">
              {/* Siddesh Logo */}
              <Link
                href="/"
                className="flex items-center tracking-tight text-[#20306f]"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  <Image
                    src="/siddesh-marathi-logo.png"
                    alt="Siddesh"
                    width={438}
                    height={195}
                    style={{ width: "auto" }}
                    className="h-8 md:h-[44px] object-contain"
                    priority
                  />
                </motion.div>
                <span className="sr-only">Siddesh</span>
              </Link>

              {/* Thin vertical divider (1px, light gray) */}
              <div className="h-8 md:h-[48px] w-[1px] bg-slate-300/60" />

              {/* ThinkSphere Partner Logo */}
              <Link href="/labs/think-sphere-360-composite-skill-lab">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer transition-transform duration-300 ease-out flex items-center"
                >
                  <Image
                    src="/think-sphere-logo.png"
                    alt="ThinkSphere 360 Logo"
                    width={1133}
                    height={871}
                    style={{ width: "auto" }}
                    className="h-[44px] md:h-[60px] object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden items-center justify-center gap-8 lg:gap-10 text-[17px] lg:text-[18px] font-medium text-slate-700 md:flex h-full ml-auto mr-4 lg:mr-8"
            >
              {menuItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative flex items-center h-full"
                      onMouseEnter={() => setDesktopLabsOpen(true)}
                      onMouseLeave={() => setDesktopLabsOpen(false)}
                    >
                      <button
                        type="button"
                        className="relative flex items-center gap-1 px-1 py-1.5 text-slate-700 transition-colors duration-[250ms] ease-in-out hover:text-[#3B5BDB] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#3B5BDB] after:transition-transform after:duration-[250ms] after:ease-in-out after:origin-left hover:after:scale-x-100"
                        onClick={() => setDesktopLabsOpen((prev) => !prev)}
                        aria-expanded={desktopLabsOpen}
                      >
                        {item.label}
                        <span className="text-xs">▾</span>
                      </button>

                      <AnimatePresence>
                        {desktopLabsOpen && (
                          <motion.div
                            {...dropdownMotion}
                            className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-white/60 bg-white/95 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.2)] backdrop-blur z-50"
                          >
                            <div className="flex flex-col gap-1">
                              {labsItems.map((lab) => (
                                <Link
                                  key={lab.label}
                                  href={lab.href}
                                  className="rounded-xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-[#3B5BDB]/10 hover:text-[#3B5BDB]"
                                  onClick={() => setDesktopLabsOpen(false)}
                                >
                                  {lab.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-1 py-1.5 text-slate-700 transition-colors duration-[250ms] ease-in-out hover:text-[#3B5BDB] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#3B5BDB] after:transition-transform after:duration-[250ms] after:ease-in-out after:origin-left hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:text-[#3B5BDB] md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              {...overlayMotion}
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileOpen && (
            <motion.aside
              {...mobilePanelMotion}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-4 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.25)] md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[#20306f]">Siddesh Tech</span>
                <button
                  type="button"
                  className="rounded-lg px-2 py-1 text-sm font-semibold text-slate-600"
                  onClick={() => setMobileOpen(false)}
                >
                  X
                </button>
              </div>

              <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                {menuItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.label} className="flex flex-col">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors hover:bg-[#3B5BDB]/10 hover:text-[#3B5BDB]"
                          onClick={() => setMobileLabsOpen((prev) => !prev)}
                          aria-expanded={mobileLabsOpen}
                        >
                          <span>{item.label}</span>
                          <span className="text-xs">{mobileLabsOpen ? "▴" : "▾"}</span>
                        </button>

                        <AnimatePresence>
                          {mobileLabsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" as const }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 flex flex-col gap-1 pl-2">
                                {labsItems.map((lab) => (
                                  <Link
                                    key={lab.label}
                                    href={lab.href}
                                    className="rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-[#3B5BDB]/10 hover:text-[#3B5BDB]"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {lab.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-3 py-2 transition-colors hover:bg-[#3B5BDB]/10 hover:text-[#3B5BDB]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>

      {floating && !overlay ? <div className="h-[112px] md:h-[128px]" aria-hidden /> : null}
    </>
  );
}
