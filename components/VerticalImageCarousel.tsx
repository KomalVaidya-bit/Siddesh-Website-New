"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/ai-innovation-images/imagelab.jpg",
  "/ai-innovation-images/receiptionimg.jpg",
  "/ai-innovation-images/sciencewall.jpg",
  "/ai-innovation-images/test.jpg",
];

export default function VerticalImageCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Lab preview"
          className="h-60 md:h-72 w-full object-cover absolute left-0 top-0"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}