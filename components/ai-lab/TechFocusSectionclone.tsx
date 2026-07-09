




"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TechFocusSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const cards = document.querySelectorAll(".tech-card");

    // 🔥 SAFE scroll animation (no opacity bug)
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          delay: index * 0.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );



    });



  }, []);

  const cardsData = [
    { title: "Iot Lab", img: "/ai-innovation-images/imagelab.jpg" },
    { title: "Science Lab", img: "/ai-innovation-images/receiptionimg.jpg" },
    { title: "Science Wall", img: "/ai-innovation-images/sciencewall.jpg" },
    { title: "AI ML", img: "/ai-innovation-images/virtualimg.jpg" },
    { title: "STEM", img: "/ai-innovation-images/test.jpg" },
    { title: "Automation", img: "/ai-innovation-images/test.jpg" },
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe] py-16 px-4">




      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Technologies in Focus for Inclusive AI Innovation
        </h2>

        <p className="mt-4 text-[#334155] max-w-3xl mx-auto">
          Learn cutting-edge technologies through hands-on kits.
        </p>
      </div>

      {/* ✅ FORCE VISIBLE */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {cardsData.map((card, index) => (
          <div
            key={index}
            className="tech-card bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover transition duration-500 hover:scale-110"
            />

            <div className="p-4 text-center font-semibold text-[#1e293b]">
              {card.title}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}