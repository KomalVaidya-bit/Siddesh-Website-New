"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeInOut",
    },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

// Stats for counters
const stats = [
  { label: "Schools", value: 120 },
  { label: "Students", value: 15000 },
  { label: "Projects", value: 250 },
  { label: "Years", value: 8 },
];

const offers = [
  {
    title: "AI Adventures",
    subtitle: "Intro to AI for Kids.",
    bg: "from-[#2b2e7a] to-[#3b1e5c]",
    image: "/courses-image/course1.png",
    alt: "AI Adventures card illustration",
  },
  {
    title: "Robotics & Coding",
    subtitle: "Build & Program Robots.",
    bg: "from-[#1b6b8e] to-[#2e3a8a]",
    image: "/courses-image/course2.png",
    alt: "Robotics and Coding card illustration",
  },
  {
    title: "Creative AI",
    subtitle: "Art & AI Projects.",
    bg: "from-[#e94e77] to-[#f9d423]",
    image: "/courses-image/course3.png",
    alt: "Creative AI card illustration",
  },
];

const features = [
  {
    title: "Expert Team",
    desc: "Our team consists of industry experts in AI, Robotics, and STEM education.",
    icon: "👨‍💼",
  },
  {
    title: "Cutting-edge Solutions",
    desc: "We deliver innovative, future-ready technology for schools and students.",
    icon: "🚀",
  },
  {
    title: "Proven Impact",
    desc: "Thousands of students empowered, hundreds of successful projects.",
    icon: "🏆",
  },
  {
    title: "Support & Training",
    desc: "Comprehensive support and training for seamless adoption.",
    icon: "🎓",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#eef0ed] min-h-screen w-full relative overflow-x-hidden">

      {/* ABOUT INTRO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideLeft}
        >
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-blue-100">
            <Image
              src="/ai-innovation-images/receiptionimg.jpg"
              alt="About Siddesh"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideRight}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-slate-700">
            Siddesh Technologies is a pioneer in AI, Robotics and STEM.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <div className="text-4xl font-bold text-blue-700">
                <AnimatedCounter value={stat.value} />
              </div>
              <div>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <Link href="/contact-us">
          <motion.button whileHover={{ scale: 1.07 }}>
            Contact Us
          </motion.button>
        </Link>
      </section>
    </div>
  );
}

// Animated Counter
function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current === value) clearInterval(timer);
    }, 1200 / value);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
}