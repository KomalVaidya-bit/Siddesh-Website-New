"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Search, Book, Hammer, FlaskConical, Rocket } from "lucide-react";

// Steps configuration
const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Students explore AI, Robotics, IoT and emerging technologies through engaging demonstrations.",
    icon: Search,
    color: "blue",
  },
  {
    number: "02",
    title: "Learn",
    description: "Understand concepts through guided lessons, interactive activities and practical demonstrations.",
    icon: Book,
    color: "green",
  },
  {
    number: "03",
    title: "Build",
    description: "Design and create working models using hardware kits and real-world projects.",
    icon: Hammer,
    color: "blue",
  },
  {
    number: "04",
    title: "Experiment",
    description: "Test ideas, improve prototypes and solve practical challenges using innovation and teamwork.",
    icon: FlaskConical,
    color: "green",
  },
  {
    number: "05",
    title: "Innovate",
    description: "Present solutions, showcase projects and become confident future-ready innovators.",
    icon: Rocket,
    color: "blue",
  },
];

// Tailwind classes mapping for responsive grid layouts
const colSpanClasses = [
  "md:col-span-2 lg:col-span-1", // Step 1
  "md:col-span-2 lg:col-span-1", // Step 2
  "md:col-span-2 lg:col-span-1", // Step 3
  "md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto", // Step 4
  "md:col-span-2 md:col-start-4 lg:col-span-1 lg:col-start-auto", // Step 5
];

// Desktop-only alternating vertical offsets to form a wavy roadmap
const offsetClasses = [
  "lg:mt-0",   // Step 1 (Normal)
  "lg:mt-12",  // Step 2 (Shifted down)
  "lg:mt-0",   // Step 3 (Normal)
  "lg:mt-12",  // Step 4 (Shifted down)
  "lg:mt-0",   // Step 5 (Normal)
];

// Bezier path generators for SVG connectors
const getBezierPath = (p1: { x: number; y: number }, p2: { x: number; y: number }, isVertical: boolean) => {
  if (isVertical) {
    const dy = p2.y - p1.y;
    return `M ${p1.x} ${p1.y} C ${p1.x} ${p1.y + dy / 2}, ${p2.x} ${p2.y - dy / 2}, ${p2.x} ${p2.y}`;
  } else {
    const dx = p2.x - p1.x;
    return `M ${p1.x} ${p1.y} C ${p1.x + dx / 2} ${p1.y}, ${p2.x - dx / 2} ${p2.y}, ${p2.x} ${p2.y}`;
  }
};

// Framer Motion variant definitions
const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (customDelay: any) => ({
    pathLength: 1,
    opacity: 0.8,
    transition: {
      pathLength: { type: "tween" as const, duration: 0.5, delay: customDelay, ease: "easeInOut" as const },
      opacity: { duration: 0.2, delay: customDelay }
    }
  })
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (customDelay: any) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: customDelay
    }
  })
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (customDelay: any) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 12,
      delay: customDelay - 0.1 // Pop in slightly before the card settles
    }
  })
};

export default function LearningJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const [coords, setCoords] = useState<Array<{ x: number; y: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Sync state values on the client
  useEffect(() => {
    setIsMounted(true);

    const updateLayout = () => {
      // 1. Check screen size
      const mobileStatus = window.innerWidth < 768;
      setIsMobile(mobileStatus);

      // 2. Compute coordinates of center of each icon element
      if (!containerRef.current) return;
      const parentRect = containerRef.current.getBoundingClientRect();
      const newCoords = iconRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const elRect = el.getBoundingClientRect();
        return {
          x: elRect.left + elRect.width / 2 - parentRect.left,
          y: elRect.top + elRect.height / 2 - parentRect.top,
        };
      });
      setCoords(newCoords);
    };

    updateLayout();

    // Use ResizeObserver for responsive recalculations
    const resizeObserver = new ResizeObserver(() => updateLayout());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden flex flex-col justify-center min-h-[550px] lg:min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            LEARNING JOURNEY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            From Curiosity to Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-base text-slate-500 leading-relaxed font-normal"
          >
            ThinkSphere 360 provides a structured learning pathway where students gradually develop creativity, technical knowledge, problem-solving ability and future-ready skills through immersive hands-on experiences.
          </motion.p>
        </div>

        {/* Roadmap Roadmap/Grid Container */}
        <div
          ref={containerRef}
          className="relative grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-y-14 md:gap-y-20 lg:gap-y-0 gap-x-6 md:gap-x-8 lg:gap-x-5 max-w-5xl mx-auto pt-10 pb-6"
        >
          {/* SVG Connectors overlay (hidden during SSR / initial load) */}
          {isMounted && coords.length === steps.length && (
            <svg
              className="absolute inset-0 pointer-events-none z-0"
              style={{ width: "100%", height: "100%" }}
            >
              {steps.slice(0, -1).map((step, i) => {
                const p1 = coords[i];
                const p2 = coords[i + 1];
                if (!p1 || !p2) return null;

                // Path drawing starts at step index * 0.5s delay
                const delay = 0.5 + i * 0.5;
                const pathData = getBezierPath(p1, p2, isMobile);

                return (
                  <motion.path
                    key={i}
                    d={pathData}
                    fill="none"
                    stroke={step.color === "blue" ? "#3b82f6" : "#10b981"}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    custom={delay}
                    variants={lineVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  />
                );
              })}
            </svg>
          )}

          {/* Cards & Milestones Rendering */}
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            // Sync timings: Card and Icon pop-ins trigger in sequence with connector drawing
            const cardDelay = 0.4 + index * 0.5;

            // Apply different accent colors
            const themeClasses =
              step.color === "blue"
                ? {
                    circleBg: "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/20",
                    hoverBorder: "group-hover:border-blue-200",
                    badgeBg: "bg-slate-900 text-white",
                  }
                : {
                    circleBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/20",
                    hoverBorder: "group-hover:border-emerald-200",
                    badgeBg: "bg-slate-900 text-white",
                  };

            return (
              <div
                key={step.number}
                className={`group ${colSpanClasses[index]} ${offsetClasses[index]} flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 w-full relative`}
              >
                {/* 1. Large circular floating icon with number badge */}
                <div
                  ref={(el) => {
                    iconRefs.current[index] = el;
                  }}
                  className="relative md:absolute z-20 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 md:-top-8 md:left-1/2 md:-translate-x-1/2"
                >
                  <motion.div
                    custom={cardDelay}
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-full h-full"
                  >
                    {/* Continuous floating animation wrapper */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: index * 0.2, // Stagger floats so they alternate dynamically
                      }}
                      className={`w-full h-full rounded-full flex items-center justify-center text-white shadow-lg ${themeClasses.circleBg} relative`}
                    >
                      <IconComponent className="w-5.5 h-5.5 md:w-7 md:h-7" />

                      {/* Number Badge */}
                      <span
                        className={`absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full text-[9px] md:text-[10px] font-bold border-2 border-white shadow-sm ${themeClasses.badgeBg}`}
                      >
                        {step.number}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* 2. White rounded card body */}
                <motion.div
                  custom={cardDelay}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : "hidden"}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-full flex-1 md:flex-none bg-white rounded-2xl p-5 md:pt-11 md:pb-5 shadow-sm border border-slate-100 hover:border-slate-200/60 ${themeClasses.hoverBorder} text-left md:text-center select-none`}
                >
                  <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1.5">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
