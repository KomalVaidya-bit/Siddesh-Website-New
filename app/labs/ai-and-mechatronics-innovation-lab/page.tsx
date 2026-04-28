// "use client";

// import { useEffect, useRef } from "react";
// import { useScroll } from "framer-motion";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "../../../components/Navbar";
// import TableScrollClient from "../../../components/TableScrollClient";
// // import TableScrollRight from "../../../components/TableScrollRight";
// import TableScrollRightClone from "../../../components/TableScrollRightClone";
// import AiLabHero from "./AiLabHero";
// import AiLabIntro from "./AiLabIntro";
// import TechFocusSection from "@/components/ai-lab/TechFocusSection";
// import AiKitSection from "@/components/ai-lab/AiKitSection";
// import AiKitSectionReverse from "@/components/ai-lab/AiKitSectionReverse";
// import TechFocusSectionclone from "@/components/ai-lab/TechFocusSection";
// import AutoScrollCards from "@/components/ai-lab/AutoScrollCards";
// import DemoSection from "@/components/ai-lab/BookDemoSection";
// import TrustedSchools from "@/components/ai-lab/TrustedSchools"
// import ParallaxCard from "@/components/ai-lab/ParallaxCard";






// const tracks = [
//   {
//     title: "AI And ML Fundamentals",
//     description: "Learn model basics, practical workflows, and real-world mini projects.",
//   },
//   {
//     title: "IoT And Smart Systems",
//     description: "Build connected prototypes with sensors, logic, and hardware integration.",
//   },
//   {
//     title: "3D Printing Design Challenge",
//     description: "Design and prototype useful models from idea to printable output.",
//   },
//   {
//     title: "Robotics And Creative Tech",
//     description: "Explore hands-on concepts with guided activities and interactive kits.",
//   },
// ];

// const kitItems = [
//   "IoT learning kit modules",
//   "Starter electronic components",
//   "Mentor-guided activity sheets",
//   "Challenge-based project tasks",
// ];

// export default function Page() {


// //add here new lines 

// const parallaxRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: parallaxRef,
//     offset: ["start start", "end end"],
//   });

//   const heroRef = useRef<HTMLElement | null>(null);
//   const heroImageWrapRef = useRef<HTMLDivElement | null>(null);
//   const heroTextRef = useRef<HTMLDivElement | null>(null);
//   const trackCardRefs = useRef<Array<HTMLElement | null>>([]);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const hero = heroRef.current;
//     const imageWrap = heroImageWrapRef.current;
//     const textWrap = heroTextRef.current;

//     if (!hero || !imageWrap || !textWrap) {
//       return;
//     }

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: hero,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1.4,
//       },
//     });

//     timeline.to(imageWrap, { y: 180, scale: 0.98, ease: "none" as const }, 0);
//     timeline.to(textWrap, { y: -40, opacity: 0.75, ease: "none" as const }, 0);

//     const cardAnimations = trackCardRefs.current
//       .map((card, index) => {
//         if (!card) {
//           return null;
//         }

//         const fromX = index % 2 === 0 ? -70 : 70;
//         return gsap.fromTo(
//           card,
//           { x: fromX, opacity: 0 },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 0.75,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 88%",
//               toggleActions: "play none none reverse",
//             },
//           },
//         );
//       })
//       .filter((animation): animation is gsap.core.Tween => animation !== null);

//     return () => {
//       cardAnimations.forEach((animation) => {
//         animation.scrollTrigger?.kill();
//         animation.kill();
//       });
//       timeline.scrollTrigger?.kill();
//       timeline.kill();
//     };
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#eef0ed] text-[#1f2d2b]">
//       <Navbar floating overlay />
//       <AiLabHero />
//       <AiLabIntro />
//       {/* <TableScrollRight /> */}
//       <TableScrollRightClone />
//       <TechFocusSection /> 
//       {/* <AiKitSection/>
//       <AiKitSectionReverse /> */}
//       <TechFocusSectionclone/>
//       <AutoScrollCards />
//       <DemoSection />
//       <TrustedSchools/>
//       {/* <ParallaxCard/> */}


// <TechFocusSection /> 

// {/* 🔥 PARALLAX CARDS START */}
// <div ref={parallaxRef} className="relative h-[200vh]">

//   {[<AiKitSection />, <AiKitSectionReverse />].map((card, i, arr) => {
//     const targetScale = 1 - ((arr.length - i) * 0.05);

//     return (
//       <ParallaxCard
//         key={i}
//         i={i}
//         progress={scrollYProgress}
//         range={[i * 0.5, 1]}
//         targetScale={targetScale}
//       >
//         {card}
//       </ParallaxCard>
//     );
//   })}

// </div>
// {/* 🔥 PARALLAX CARDS END */}

// <TechFocusSectionclone/>

//       <section
//         ref={heroRef}
//         className="mx-auto grid w-full max-w-5xl items-center gap-6 px-4 pb-8 pt-2 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:pb-10"
//       >
//         <div ref={heroTextRef} className="space-y-4">
//           <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[#1b2a28]">
//             Learn By Building
//             <br />
//             AI, IoT And 3D Projects
//           </h1>
//           <p className="max-w-xl text-sm leading-relaxed text-[#304542] md:text-base">
//             Based on the provided learning table content, this platform combines guided
//             tracks, mentor support, and practical kits so students can build real outcomes.
//           </p>
//         </div>

//         <div
//           ref={heroImageWrapRef}
//           className="will-change-transform rounded-2xl border border-[#1f2d2b]/10 bg-white p-2 shadow-[0_14px_30px_rgba(31,45,43,0.08)]"
//         >
//           <img
//             src="/table-frames/ezgif-frame-001.jpg"
//             alt="Interactive learning table"
//             className="h-full w-full rounded-xl object-contain"
//             draggable={false}
//           />
//         </div>
//       </section>

//       <TableScrollClient />

//       <div className="relative z-10 mt-10 md:mt-14">
//         <section className="mx-auto w-full max-w-5xl px-4 pb-8 md:px-6 md:pb-10">
//           <h2 className="mb-4 text-2xl font-semibold text-[#1b2a28]">Learning Tracks</h2>
//           <div className="grid gap-3 md:grid-cols-2">
//             {tracks.map((track, index) => (
//               <article
//                 key={track.title}
//                 ref={(element) => {
//                   trackCardRefs.current[index] = element;
//                 }}
//                 className="rounded-2xl border border-[#1f2d2b]/10 bg-white p-4 shadow-[0_10px_20px_rgba(31,45,43,0.05)]"
//               >
//                 <h3 className="text-lg font-semibold text-[#1b2a28]">{track.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-[#334744]">{track.description}</p>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className="mx-auto w-full max-w-5xl px-4 pb-12 md:px-6">
//           <div className="grid gap-4 rounded-3xl border border-[#1f2d2b]/10 bg-white p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6">
//             <div>
//               <h2 className="text-2xl font-semibold text-[#1b2a28]">Kits And Mentor Support</h2>
//               <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#334744] md:text-base">
//                 Students receive curated kits and mentor support to complete challenge-based
//                 activities such as smart systems, maker tasks, and design projects.
//               </p>
//             </div>
//             <ul className="space-y-2.5 text-sm text-[#304542]">
//               {kitItems.map((item) => (
//                 <li key={item} className="rounded-xl bg-[#eef7f6] px-3 py-2.5">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }







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