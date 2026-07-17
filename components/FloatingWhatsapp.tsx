"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Configuration Constants
const WHATSAPP_NUMBER = "919921059461"; // Siddesh Pune Support Number
const DEFAULT_MESSAGE = "Hi Siddesh Technologies team! I'm visiting your website and would like to learn more about your innovative labs and products.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

// Custom WhatsApp Icon SVG
const WhatsappIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.57 1.977 14.1 1.953 11.927 1.953c-5.43 0-9.855 4.37-9.859 9.8.001 1.849.493 3.655 1.425 5.248l-.93 3.395 3.494-.942zm12.35-6.096c-.3-.15-1.771-.875-2.045-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.205-.6-2.18-1.05-3.04-2.525-.23-.396.23-.368.66-.99.088-.13.044-.24-.022-.375-.066-.135-.594-1.43-.814-1.96-.215-.519-.43-.45-.595-.458l-.51-.01c-.175 0-.46.066-.7.33-.24.264-.915.893-.915 2.178 0 1.285.935 2.528 1.065 2.7.13.175 1.84 2.81 4.46 3.94 1.57.68 2.2 1.01 2.97.91.56-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.175-1.42-.075-.12-.275-.22-.575-.37z" />
  </svg>
);

// Custom Close (X) SVG
const CloseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function FloatingWhatsapp() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Set the current time on the client side only to avoid hydration mismatches
  useEffect(() => {
    const now = new Date();
    setCurrentTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }, []);

  return (
    <div className="fixed bottom-[24px] right-[24px] z-[9999] flex flex-col items-end gap-4 font-sans antialiased">
      {/* Desktop Chat Card Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="hidden lg:flex flex-col w-[360px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-200/60 bg-white/90 backdrop-blur-md"
          >
            {/* Header: Apple-style Glassmorphism & Branding */}
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white flex items-center gap-4">
              {/* Profile/Avatar with Glow */}
              <div className="relative w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner border border-white/30">
                <WhatsappIcon className="w-7 h-7 text-white" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-emerald-500 animate-pulse" />
              </div>

              {/* Support Info */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-[17px] tracking-tight text-white leading-tight">
                  Siddesh Technologies
                </h3>
                <span className="text-xs text-white/80 font-medium mt-0.5">
                  Typically replies in a few minutes
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/90 hover:text-white"
                aria-label="Close chat window"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body Area (Simulated Message) */}
            <div className="p-6 bg-slate-50/50 flex flex-col gap-4 min-h-[140px] justify-between">
              {/* WhatsApp message bubble */}
              <div className="relative bg-white border border-slate-100 rounded-[20px] rounded-tl-none p-4 shadow-sm max-w-[90%] flex flex-col gap-1">
                <span className="text-xs font-semibold text-emerald-600">
                  Siddesh Support
                </span>
                <p className="text-[14px] leading-relaxed text-slate-700">
                  Hello! 👋 Welcome to Siddesh Technologies. How can we help you today with our training kits or innovation labs?
                </p>
                {currentTime && (
                  <span className="text-[10px] text-slate-400 self-end mt-1">
                    {currentTime}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center justify-center gap-2.5 w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-[15px] rounded-2xl shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.5)] transition-all duration-300"
              >
                <WhatsappIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                <span>Start Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons: Separate versions for Mobile and Desktop to prevent hydration & interactivity issues */}
      <div>
        {/* MOBILE: Directly opens link without opening the card */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_8px_30px_rgb(16,185,129,0.4)] transition-transform duration-200"
          aria-label="Contact us on WhatsApp"
        >
          {/* Custom subtle floating motion for the button itself on mobile */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <WhatsappIcon className="w-7 h-7 text-white" />
          </motion.div>
        </a>

        {/* DESKTOP: Controls visibility of the Apple-style chat card */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.6)] outline-none border border-emerald-400/20"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isOpen}
          aria-label="Toggle WhatsApp chat window"
        >
          <WhatsappIcon className="w-7 h-7 text-white" />
        </motion.button>
      </div>
    </div>
  );
}
