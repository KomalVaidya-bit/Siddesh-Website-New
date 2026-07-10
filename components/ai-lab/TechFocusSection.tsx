"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Wifi, FlaskConical, LayoutGrid, Glasses, Bot, Cpu, ArrowRight } from "lucide-react";

// 6 Premium Cards Configuration
const cardsData = [
  {
    title: "IoT Innovation Lab",
    description: "Hands-on learning with smart sensors, embedded systems and real-time IoT applications.",
    img: "/ai-innovation-images/imagelab.jpg",
    icon: Wifi,
    theme: "blue",
  },
  {
    title: "Composite Science Lab",
    description: "Explore scientific concepts through experiments, interactive demonstrations and practical activities.",
    img: "/ai-innovation-images/receiptionimg.jpg",
    icon: FlaskConical,
    theme: "green",
  },
  {
    title: "Interactive Science Wall",
    description: "Visual STEM learning that encourages curiosity, creativity and experiential understanding.",
    img: "/ai-innovation-images/sciencewall.jpg",
    icon: LayoutGrid,
    theme: "blue",
  },
  {
    title: "VR / AR Experience Zone",
    description: "Immersive virtual and augmented reality experiences for interactive and engaging learning.",
    img: "/ai-innovation-images/virtualimg.jpg",
    icon: Glasses,
    theme: "green",
  },
  {
    title: "Robotics Innovation Lab",
    description: "Build, program and innovate using robotics kits and real-world automation projects.",
    img: "/ai-innovation-images/test.jpg",
    icon: Bot,
    theme: "blue",
  },
  {
    title: "AI & Mechatronics Lab",
    description: "Explore Artificial Intelligence, automation and intelligent systems through hands-on projects.",
    img: "/ai-innovation-images/test.jpg",
    icon: Cpu,
    theme: "green",
  },
];

// Grid entrance animations
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Card Framer Motion variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(15 23 42 / 0.08), 0 8px 10px -6px rgb(15 23 42 / 0.08)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

// Image zoom variant
const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Floating Icon hover rotation variant
const iconVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 8,
    transition: { type: "spring" as const, stiffness: 200, damping: 10 },
  },
};

// Arrow slide variant
const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: {
    x: 4,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
};

interface TechCardProps {
  card: typeof cardsData[0];
  index: number;
}

// Sub-component for individual card interaction (handles 3D tilt isolate from Framer Motion parent hover scale/translate)
function TechCard({ card, index }: TechCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Subtle 3D tilt rotation calculation (max 6 degrees)
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 6;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const IconComponent = card.icon;

  const themeStyles =
    card.theme === "blue"
      ? {
        iconBg: "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/20",
        arrowColor: "text-blue-600 border-blue-100 bg-blue-50/50 hover:bg-blue-600 hover:text-white",
        textHover: "group-hover/card:text-blue-600",
      }
      : {
        iconBg: "bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/20",
        arrowColor: "text-green-600 border-green-100 bg-green-50/50 hover:bg-green-600 hover:text-white",
        textHover: "group-hover/card:text-green-600",
      };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="w-full flex"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 0 && rotate.y === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
          transformStyle: "preserve-3d",
        }}
        className="group/card relative w-full bg-white rounded-[30px] shadow-sm border border-slate-100/80 overflow-hidden flex flex-col justify-between select-none"
      >
        {/* 1. Zooming Cover Image */}
        <div className="relative w-full h-[210px] overflow-hidden bg-slate-50">
          <motion.img
            variants={imageVariants}
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. Overlapping Card Content Info Panel */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md px-6 pt-9 pb-6 rounded-t-[30px] -mt-8 border-t border-slate-100 flex flex-col justify-between flex-1">

          {/* Floating circular technology icon */}
          <div className="absolute -top-7 left-6 z-20">
            <motion.div
              animate={{ y: [0, -3.5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            >
              <motion.div
                variants={iconVariants}
                className={`w-13 h-13 rounded-2xl flex items-center justify-center text-white shadow-lg ${themeStyles.iconBg}`}
              >
                <IconComponent className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>

          {/* Heading, Description, and Arrow Panel */}
          <div className="flex items-start justify-between gap-4 mt-1.5">
            <div className="flex-1">
              <h3 className={`text-base md:text-[17px] font-bold text-[#0F172A] leading-snug transition-colors duration-300 ${themeStyles.textHover}`}>
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="flex-shrink-0 self-center">
              {/* Sliding Arrow Button */}
              <motion.div
                variants={arrowVariants}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${themeStyles.arrowColor}`}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function TechFocusSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-white relative overflow-hidden flex flex-col justify-center">

      {/* Background visual graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">

        {/* Soft radial blue glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_70%)]" />

        {/* Dotted pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />

        {/* Floating blurred circles */}
        <motion.div
          className="absolute top-[12%] left-[8%] w-36 h-36 rounded-full bg-blue-100/10 filter blur-2xl"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[12%] right-[8%] w-44 h-44 rounded-full bg-blue-100/10 filter blur-2xl"
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* SVG curved graphics */}
        <svg className="absolute top-28 left-[-3%] w-[30%] h-auto opacity-[0.08] text-blue-500" viewBox="0 0 400 400" fill="none">
          <path d="M -60,200 C 90,100 140,300 340,200" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-28 right-[-3%] w-[30%] h-auto opacity-[0.08] text-blue-500" viewBox="0 0 400 400" fill="none">
          <path d="M 60,200 C 260,100 260,300 460,200" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-blue-100/30"
          >
            Our Labs & Facilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4"
          >
            Technologies in Focus for <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Inclusive AI Innovation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Learn cutting-edge technologies through hands-on kits designed to develop innovation, creativity and future-ready skills.
          </motion.p>
        </div>

        {/* Feature Cards Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <motion.div
          ref={containerRef}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {cardsData.map((card, index) => (
            <TechCard key={index} card={card} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}