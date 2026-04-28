"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function GallerySection({ section }) {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [...section.images];

  // AUTO SCROLL
  useEffect(() => {
    const el = sliderRef.current;

    tweenRef.current = gsap.to(el, {
      x: "-50%",
      duration: 25,
      ease: "linear",
      repeat: -1,
    });

    return () => tweenRef.current.kill();
  }, []);

  // ARROW CONTROL
  const moveLeft = () => {
    gsap.to(sliderRef.current, {
      x: "+=200",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const moveRight = () => {
    gsap.to(sliderRef.current, {
      x: "-=200",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div>
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">
        {section.title}
      </h2>

      {/* SLIDER WRAPPER */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => tweenRef.current.pause()}
        onMouseLeave={() => tweenRef.current.resume()}
      >
        {/* LEFT ARROW */}
        <button
          onClick={moveLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ❮
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={moveRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ❯
        </button>

        {/* SLIDER */}
        <div ref={sliderRef} className="flex gap-6 w-max">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer min-w-[250px] h-56 rounded-xl overflow-hidden shadow-lg group relative"
            >
              <Image
                src={img}
                width={300}
                height={200}
                alt="gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX (NO ARROWS INSIDE) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full px-4">
            <Image
              src={selectedImage}
              width={1200}
              height={800}
              alt="preview"
              className="w-full h-auto rounded-xl"
            />

            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}