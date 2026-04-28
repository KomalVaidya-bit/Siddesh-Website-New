"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Continuous Support",
    description: "At Siddesh, we’re committed to providing continuous support and guidance to our clients every step of the way. Whether you’re embarking on your first IoT project or delving into advanced AI concepts, our team of experts is here to assist you with technical assistance, training resources, and personalized advice. With Siddesh by your side, you can navigate the complexities of technology with confidence.",
  },
  {
    title: "AI Exploration Tools",
    description: "Delve into the realm of artificial intelligence with our AI exploration tools. From machine learning algorithms to natural language processing, our tools empower learners to explore the capabilities and applications of AI in diverse fields such as healthcare, finance, and robotics. With Siddesh, you’ll gain the skills and knowledge needed to harness the transformative potential of AI.",
  },
  {
    title: "IoT Training Kits",
    description: "Experience the fusion of creativity and technology with our IoT training kits. Designed to inspire curiosity and spark innovation, our kits provide hands-on learning experiences that cover the fundamentals of IoT, including sensor technology, data analytics, and cloud computing. Whether you’re a student, educator, or industry professional, our IoT training kits are your gateway to the future of technology.",
  },
];

const highlightMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 },
};

export default function Highlight() {
  return (
    <section className="relative overflow-hidden bg-[#3B5BDB] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:26px_26px] opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              {...highlightMotion}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
