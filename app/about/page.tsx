


"use client";



// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
ease: "easeInOut" as any ,
    },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut" as any,
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut" as any ,
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
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
      {/* Animated floating background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="hidden md:block absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-300 via-blue-100 to-yellow-100 blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden md:block absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-yellow-200 via-blue-100 to-blue-200 blur-3xl z-0"
      />

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 pt-12 md:pt-16 pb-16 md:pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white text-center overflow-hidden shadow-xl rounded-b-3xl -mt-16 md:-mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg bg-gradient-to-r from-yellow-200 via-white/60 to-blue-200 bg-clip-text text-transparent"
        >
          About Siddesh Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-lg md:text-2xl font-medium mb-6 drop-shadow"
        >
          Empowering the next generation with <span className="font-bold text-yellow-200">AI</span>, <span className="font-bold text-yellow-200">Robotics</span>, and <span className="font-bold text-yellow-200">Innovation</span> in Education.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-1 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[350px] h-[120px] bg-gradient-to-r from-yellow-200 via-blue-100 to-blue-200 blur-2xl rounded-full z-0"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
      </section>

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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Who We Are</h2>
          <div className="h-1 w-16 bg-yellow-400 rounded mb-6" />
          <p className="text-lg text-slate-700 mb-4">
            Siddesh Technologies is a pioneer in bringing advanced AI, Robotics, and STEM solutions to educational institutions. Our mission is to inspire curiosity, creativity, and problem-solving skills in students through hands-on learning and innovative technology.
          </p>
          <p className="text-base text-slate-600">
            We partner with schools to set up world-class labs, provide cutting-edge kits, and deliver engaging workshops that make learning future-ready and fun.
          </p>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8">
        {([
          {
            title: "Our Mission",
            desc: "To empower students and educators with the tools and knowledge to thrive in a technology-driven world.",
          },
          {
            title: "Our Vision",
            desc: "To be the leading force in transforming education through innovation, creativity, and technology.",
          },
        ] as { title: string; desc: string }[]).map((card, i: number) => (
          <motion.div
            key={card.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={i + 1}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,91,219,0.10)" }}
            className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-yellow-400 transition-transform cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-2">{card.title}</h3>
            <p className="text-slate-700 text-lg">{card.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* WHAT WE OFFER */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">What We Offer</h2>
        <div className="h-1 w-16 bg-yellow-400 rounded mx-auto mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((offer, i: number) => (
            <motion.div
              key={offer.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ scale: 1.04 }}
              className={`rounded-3xl shadow-xl p-0 overflow-hidden flex flex-col items-stretch transition-transform cursor-pointer bg-gradient-to-br ${offer.bg}`}
              style={{ minHeight: 340 }}
            >
                <div className="w-full h-56 relative m-0 p-0" style={{margin:0,padding:0}}>
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    className="object-contain w-full h-full m-0 p-0"
                    style={{ objectPosition: 'center', margin: 0, padding: 0 }}
                    priority={i === 0}
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-2 pb-3 pt-0">
                  <h4 className="text-2xl font-bold text-white mb-1 drop-shadow-lg text-center">{offer.title}</h4>
                  <p className="text-base font-medium text-white/90 text-center drop-shadow-sm">{offer.subtitle}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">Why Choose Us</h2>
        <div className="h-1 w-16 bg-yellow-400 rounded mx-auto mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ scale: 1.07 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md border border-blue-100 transition-transform cursor-pointer"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">{feature.title}</h4>
              <p className="text-slate-600 text-center text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat: { label: string; value: number }, i: number) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white rounded-2xl p-8 shadow-md border border-blue-100"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-lg font-medium text-slate-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Ready to Transform Your School?</h2>
        <div className="h-1 w-16 bg-yellow-400 rounded mb-8" />
        <Link href="/contact-us">
          <motion.button
            whileHover={{ scale: 1.07 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 font-bold text-lg shadow-lg transition-all"
          >
            Contact Us
          </motion.button>
        </Link>
      </section>
    </div>
  );
}

// Animated Counter for stats
function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 1200 / end;
    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count.toLocaleString()}</span>;
}