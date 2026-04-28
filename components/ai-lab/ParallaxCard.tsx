"use client";

import { motion, useTransform } from "framer-motion";

export default function ParallaxCard({
  children,
  i,
  progress,
  range,
  targetScale,
}: any) {

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="w-[85%] rounded-3xl shadow-xl bg-[#eff6ff] p-10"
      >
        {children}
      </motion.div>
    </div>
  );
}