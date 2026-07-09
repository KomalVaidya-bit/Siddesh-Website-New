"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Cpu, BrainCircuit, ShieldCheck, GraduationCap, Briefcase, Headset } from "lucide-react";

// Cards configuration data
const cardsData = [
  {
    number: "01",
    title: "Integrated Technology",
    description: "AI, Robotics, IoT, AR/VR, Drone Technology and 3D Printing integrated into one complete learning ecosystem.",
    icon: Cpu,
    theme: "blue",
  },
  {
    number: "02",
    title: "AI-Powered Learning Support",
    description: "Smart learning guidance, AI-assisted educational resources and personalized learning experiences.",
    icon: BrainCircuit,
    theme: "green",
  },
  {
    number: "03",
    title: "Safe & Offline Platform",
    description: "Secure offline learning environment with interactive activities, assessments and digital content.",
    icon: ShieldCheck,
    theme: "blue",
  },
  {
    number: "04",
    title: "Teacher Empowerment",
    description: "Comprehensive teacher training, implementation support and classroom-ready teaching resources.",
    icon: GraduationCap,
    theme: "green",
  },
  {
    number: "05",
    title: "Industry-Aligned Curriculum",
    description: "NEP 2020 aligned curriculum focused on emerging technologies and future-ready skills.",
    icon: Briefcase,
    theme: "blue",
  },
  {
    number: "06",
    title: "End-to-End Support",
    description: "Complete installation, maintenance, upgrades and continuous technical support for schools.",
    icon: Headset,
    theme: "green",
  },
];

// Framer Motion entry animations
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card Framer Motion variants coordinating card entry and card hover animations
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
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgb(15 23 42 / 0.08), 0 8px 10px -6px rgb(15 23 42 / 0.08)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

// Icon Framer Motion variants (triggered on card hover)
const iconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
};

// Divider Framer Motion variants (triggered on card hover)
const dividerVariants: Variants = {
  hidden: { width: "40px" },
  visible: {
    width: "48px",
    transition: { duration: 0.3 },
  },
  hover: {
    width: "72px",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

// Number Badge Framer Motion variants (triggered on card hover)
const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
  hover: {
    y: [0, -5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  },
};

export default function WhatMakesOurLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section className="py-24 bg-white relative overflow-hidden flex flex-col justify-center select-none">
      
      {/* 1. Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        
        {/* Soft radial glow centered behind header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_70%)]" />

        {/* Decorative curves */}
        <svg className="absolute top-14 left-[-4%] w-[35%] h-auto opacity-[0.12] text-blue-500 hidden lg:block" viewBox="0 0 400 400" fill="none">
          <path d="M -80,220 C 80,120 180,320 380,220" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" />
        </svg>
        
        <svg className="absolute bottom-16 right-[-4%] w-[35%] h-auto opacity-[0.12] text-green-500 hidden lg:block" viewBox="0 0 400 400" fill="none">
          <path d="M 20,220 C 200,120 200,320 480,220" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" />
        </svg>

        {/* Floating background dots */}
        <motion.div
          className="absolute top-28 left-[12%] w-3 h-3 rounded-full bg-blue-500/10"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-44 right-[8%] w-4 h-4 rounded-full bg-green-500/10"
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-36 left-[6%] w-2 h-2 rounded-full bg-green-500/15"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-24 right-[16%] w-3.5 h-3.5 rounded-full bg-blue-500/10"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header Section */}
        <motion.div
          ref={containerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-blue-100/30">
            LAB ADVANTAGES
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            What Makes Our Labs Unique
          </h2>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed font-normal">
            ThinkSphere 360 provides schools with an integrated, future-ready learning ecosystem that combines advanced technologies, hands-on learning, teacher empowerment and industry-ready education.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {cardsData.map((card, index) => {
            const IconComponent = card.icon;

            const themeStyles =
              card.theme === "blue"
                ? {
                    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/20",
                    borderAccent: "border-b-4 border-b-[#2563EB]",
                    dividerBg: "bg-[#2563EB]",
                    badgeText: "text-[#2563EB] bg-[#EFF6FF] border-blue-100/50",
                  }
                : {
                    iconBg: "bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/20",
                    borderAccent: "border-b-4 border-b-[#16A34A]",
                    dividerBg: "bg-[#16A34A]",
                    badgeText: "text-[#16A34A] bg-[#ECFDF5] border-green-100/50",
                  };

            return (
              <motion.div
                key={card.number}
                variants={cardVariants}
                whileHover="hover"
                className={`relative bg-white/95 rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-start text-left overflow-hidden ${themeStyles.borderAccent}`}
              >
                {/* Floating number badge inside the card top-right */}
                <motion.span
                  variants={badgeVariants}
                  className={`absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold border shadow-sm ${themeStyles.badgeText}`}
                >
                  {card.number}
                </motion.span>

                {/* Gentle floating motion for the icon */}
                <motion.div
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                  className="mb-5"
                >
                  {/* Circular gradient icon */}
                  <motion.div
                    variants={iconVariants}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${themeStyles.iconBg}`}
                  >
                    <IconComponent className="w-6.5 h-6.5" />
                  </motion.div>
                </motion.div>

                {/* Card Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#0F172A] mb-2.5">
                  {card.title}
                </h3>

                {/* Accent Divider (expands on hover) */}
                <motion.div
                  variants={dividerVariants}
                  className={`h-[2.5px] rounded-full mb-4 ${themeStyles.dividerBg}`}
                />

                {/* Card Description */}
                <p className="text-[13.5px] md:text-sm text-[#475569] leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
