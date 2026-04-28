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
          top: `calc(-5vh + ${i * 20}px)`
        }}
        className="w-full max-w-6xl"
      >
        {children}
      </motion.div>
    </div>
  );
}