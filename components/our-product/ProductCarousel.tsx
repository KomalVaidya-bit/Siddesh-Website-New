"use client";

import { useState, useEffect } from "react";

interface Props {
  images: string[];
}

export default function ProductCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[280px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">

      {/* IMAGE */}
      <img
        src={images[index]}
        alt="product"
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow hover:bg-white"
      >
        ←
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow hover:bg-white"
      >
        →
      </button>

    </div>
  );
}