"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the Chat Window to optimize page loading performance
const AiAssistantWindow = dynamic(() => import("./AiAssistantWindow"), {
  ssr: false,
  loading: () => null,
});

// Sparkles SVG
const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 4.5L10.5 7.5L13.5 9L10.5 10.5L9 13.5L7.5 10.5L4.5 9L7.5 7.5L9 4.5ZM17.5 11L18.5 13L20.5 14L18.5 15L17.5 17L16.5 15L14.5 14L16.5 13L17.5 11ZM16 3L16.8 4.6L18.4 5.4L16.8 6.2L16 7.8L15.2 6.2L13.6 5.4L15.2 4.6L16 3Z" />
  </svg>
);

export default function FloatingAiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button: Placed at bottom-[96px] (16px above WhatsApp button at bottom-[24px]) */}
      <div className="fixed bottom-[96px] right-[24px] z-[9999] flex flex-col items-end font-sans antialiased">
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center w-14 h-14 rounded-full border border-blue-200/50 bg-white/95 text-blue-600 shadow-[0_8px_30px_rgba(30,58,138,0.12)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.25)] outline-none"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5, // Offset from WhatsApp button floating timing
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isOpen}
          aria-label="Toggle AI Assistant"
        >
          {/* Animated glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-[8px] animate-pulse" />
          
          {/* Sparkles Icon */}
          <SparklesIcon className="w-6 h-6 relative z-10 text-blue-600 hover:text-blue-700 transition-colors" />
        </motion.button>
      </div>

      {/* Lazy-Loaded Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <AiAssistantWindow onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
