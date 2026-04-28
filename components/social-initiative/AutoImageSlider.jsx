"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AutoImageSlider() {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);
  const xPos = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const totalWidth = slider.scrollWidth / 2;

    tweenRef.current = gsap.to(slider, {
      x: -totalWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

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
    <div className="relative overflow-hidden mt-6">

      {/* LEFT ARROW */}
      <button
        onClick={moveLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-1 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={moveRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-1 rounded-full"
      >
        ▶
      </button>

      {/* SLIDER */}
      <div ref={sliderRef} className="flex gap-4 w-max">
        {[
          "/empowering-images/image1.png",
          "/empowering-images/image2.png",
          "/empowering-images/image3.png",
          "/empowering-images/image4.png",
          "/empowering-images/image5.png",
          "/empowering-images/image1.png",
          "/empowering-images/image2.png",
          "/empowering-images/image3.png",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-48 h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}