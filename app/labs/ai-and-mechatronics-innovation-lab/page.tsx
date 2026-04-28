
"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../../../components/Navbar";
import TableScrollClient from "../../../components/TableScrollClient";
import TableScrollRightClone from "../../../components/TableScrollRightClone";
import AiLabHero from "./AiLabHero";
import AiLabIntro from "./AiLabIntro";
import TechFocusSection from "@/components/ai-lab/TechFocusSection";
import TechFocusSectionclone from "@/components/ai-lab/TechFocusSection";
import AutoScrollCards from "@/components/ai-lab/AutoScrollCards";
import DemoSection from "@/components/ai-lab/BookDemoSection";
import TrustedSchools from "@/components/ai-lab/TrustedSchools";

import ParallaxCard from "@/components/ai-lab/ParallaxCard";
import AiKitSection from "@/components/ai-lab/AiKitSection";
import AiKitSectionReverse from "@/components/ai-lab/AiKitSectionReverse";
import AiKitHeader from "@/components/ai-lab/AiKitHeader";

export default function Page() {

  // ✅ PARALLAX HOOKS (IMPORTANT)
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end end"],
  });

  // existing refs
  const heroRef = useRef<HTMLElement | null>(null);
  const heroImageWrapRef = useRef<HTMLDivElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const trackCardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const imageWrap = heroImageWrapRef.current;
    const textWrap = heroTextRef.current;

    if (!hero || !imageWrap || !textWrap) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    timeline.to(imageWrap, { y: 180, scale: 0.98 }, 0);
    timeline.to(textWrap, { y: -40, opacity: 0.75 }, 0);

  }, []);

  return (
    <main className="min-h-screen bg-[#eef0ed] text-[#1f2d2b]">

      <Navbar floating overlay />
      <AiLabHero />
      <AiLabIntro />
      <TableScrollRightClone />
      <TechFocusSection />
      <AiKitHeader/>


      {/* 🔥 PARALLAX CARDS START */}
      <div ref={parallaxRef} className="relative h-[400vh] -m-25">

        

        {[
          <AiKitSection
            title="Smart AI & Robotics Lab"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            image="/ai-innovation-images/virtualimg.jpg"
          />,

          <AiKitSectionReverse
            title="Interactive Learning Experience"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            image="/ai-innovation-images/test.jpg"
          />,

          <AiKitSection
            title="Advanced AI Experiments"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            image="/ai-innovation-images/virtualimg.jpg"
          />,

          <AiKitSectionReverse
            title="Real World Robotics"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            image="/ai-innovation-images/test.jpg"
          />

        ].map((card, i, arr) => {
          const targetScale = 1 - ((arr.length - i) * 0.05);

          return (
            <ParallaxCard
              key={i}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            >
              {card}
            </ParallaxCard>
          );
        })}

      </div>
      {/* 🔥 PARALLAX CARDS END */}

      <TechFocusSectionclone />
     
      <AutoScrollCards />
      <DemoSection />
      <TrustedSchools />

      <TableScrollClient />

    </main>
  );
}