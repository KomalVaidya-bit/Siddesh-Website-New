"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ProductShowcaseProps {
  productImage: string;
  productName: string;
  backgroundGlow?: string;
}

export default function ProductShowcase({
  productImage,
  productName,
  backgroundGlow,
}: ProductShowcaseProps) {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center select-none overflow-hidden rounded-[32px] bg-white border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
      {/* 1. Background Glow & Halos */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.75, 0.85, 0.75],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[85%] h-[85%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16)_0%,transparent_70%)] blur-[40px] z-0 pointer-events-none"
      />

      {/* Light blue circular concentric halos */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[85%] h-[85%] rounded-full border border-blue-100/30 blur-[1px]" />
        <div className="absolute w-[68%] h-[68%] rounded-full border border-blue-200/20 blur-[2px]" />
        <div className="absolute w-[50%] h-[50%] rounded-full border border-blue-300/10 blur-[3px]" />
      </div>

      {/* Minimal dotted background pattern inside showcase */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-30 z-0 pointer-events-none" />

      {/* 2. Floating Blue Particles */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[14%] right-[12%] w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-400 to-blue-500/80 blur-[0.5px] shadow-[0_4px_10px_rgba(59,130,246,0.25)]"
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[24%] left-[10%] w-3 h-3 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400/80 blur-[0.5px] shadow-[0_4px_10px_rgba(59,130,246,0.18)]"
      />
      <motion.div
        animate={{ y: [0, -9, 0], x: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[32%] left-[14%] w-2 h-2 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-400 shadow-[0_2px_5px_rgba(34,211,238,0.3)]"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[36%] right-[10%] w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-300 to-indigo-400/80 blur-[0.2px] shadow-[0_2px_5px_rgba(99,102,241,0.15)]"
      />

      {/* 3. Futuristic Pedestal Circular Platform */}
      <div className="absolute bottom-[10%] w-[82%] aspect-[4.8/1] z-10 flex items-center justify-center pointer-events-none">
        {/* Layered circular base shadow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400/25 to-transparent blur-[14px] translate-y-3.5 opacity-90" />
        
        {/* Main Base Structure */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-blue-50 border border-blue-200/40 shadow-[0_15px_30px_rgba(37,99,235,0.15)]" />
        
        {/* Blue Glowing Ring 1 (Middle Layer) */}
        <motion.div
          animate={{
            opacity: [0.65, 0.85, 0.65],
            boxShadow: [
              "inset 0 0 12px rgba(59,130,246,0.25)",
              "inset 0 0 22px rgba(59,130,246,0.45)",
              "inset 0 0 12px rgba(59,130,246,0.25)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[3px] rounded-full border border-blue-300/35 bg-gradient-to-b from-white/95 to-blue-100/40"
        />

        {/* Blue Glowing Ring 2 (Inner Ring) */}
        <div className="absolute inset-[9px] rounded-full border border-blue-400/20 bg-gradient-to-b from-blue-50/60 to-blue-100/10 shadow-[0_2px_8px_rgba(59,130,246,0.08)_inset]">
          <div className="absolute inset-[2px] rounded-full bg-white/40 blur-[2px] border border-blue-400/25" />
        </div>
        
        {/* Top Rim edge light */}
        <div className="absolute top-0 left-[6%] right-[6%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-[0.5px]" />
      </div>

      {/* 4. Product Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[80%] aspect-[4/3] flex items-center justify-center animate-ambientLight"
      >
        {/* Continuous Floating & Hover Animation wrapper */}
        <motion.div
          animate={{ y: [-7, 7, -7] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          whileHover={{ scale: 1.025, transition: { duration: 0.3 } }}
          className="relative w-full h-full flex items-center justify-center cursor-pointer"
        >
          {/* Subtle reflection shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-30 rounded-[32px]" />
          
          <div className="relative w-[90%] h-[90%] flex items-center justify-center">
            <Image
              src={productImage}
              alt={productName}
              fill
              className="object-contain p-2 drop-shadow-[0_12px_24px_rgba(0,0,0,0.05)] filter brightness-[1.01]"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
