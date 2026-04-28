"use client";

import { useEffect, useRef } from "react";

export default function TrustedSchools() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

   const logos = [
    "/logos-images/logo1.jpg",
    "/logos-images/logo2.jpg",
    "/logos-images/logo3.jpg",
    "/logos-images/logo4.jpg",
    "/logos-images/logo5.jpg",
    "/logos-images/logo6.jpg",
  ];

  useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  let speed = 1.5; // 🔥 smooth + fast
  let rafId: number;

  const scroll = () => {
    el.scrollLeft += speed;

    // infinite loop (smooth reset)
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0;
    }

    rafId = requestAnimationFrame(scroll);
  };

  rafId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(rafId);
}, []);

  return (
    <section className="bg-[#f8fafc] py-16 overflow-hidden">

      {/* 🔥 HEADING */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
          Schools Who Trust Us! Join Us for an Unparalleled Educational Experience!
        </h2>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
      </div>

      {/* 🔥 LOGO SCROLL */}
      <div
        ref={scrollRef}
        className="flex gap-10 items-center overflow-x-auto no-scrollbar px-6 md:px-16 whitespace-nowrap"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[120px] md:min-w-[150px] flex justify-center items-center"
          >
            <img
              src={logo}
              alt="school"
              className="h-12 md:h-20 object-contain transition duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}