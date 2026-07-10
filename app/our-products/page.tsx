"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Zap, 
  Cpu, 
  Wifi, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers
} from "lucide-react";

// Preserved original product data database
const products = [
  {
    id: 1,
    name: "IoT Training Kit",
    description: "Empower your ideas with IoT innovation",
    price: "₹4,999",
    image: "/products-images/product1.jpg",
  },
  {
    id: 2,
    name: "AI Exploration Kit",
    description: "Inspiring Tomorrow's Innovators",
    price: "₹7,999",
    image: "/products-images/product2.jpg",
  },
  {
    id: 3,
    name: "Robotics Starter Kit",
    description: "Build smart robotic systems easily",
    price: "₹5,499",
    image: "/products-images/robotics-starter-kit.png",
  },
  {
    id: 4,
    name: "Drone Learning Kit",
    description: "Experience next-gen aerial technology",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Arduino Advanced Kit",
    description: "Master embedded electronics projects",
    price: "₹3,999",
    image: "/products-images/basic-electronic-kit.png",
  },
  {
    id: 6,
    name: "Smart Sensor Kit",
    description: "Explore automation with sensors",
    price: "₹4,499",
    image: "https://images.unsplash.com/photo-1581092919535-7146ff1a5905?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Machine Learning Kit",
    description: "Hands-on AI and ML practical learning",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Electronics Pro Kit",
    description: "Advanced electronics experiments setup",
    price: "₹6,499",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
  },
];

// Cards styled to match mockup and containing slugs to detail pages
const displayCards = [
  {
    id: 1,
    name: "IoT Training Kit",
    description: "Empower your ideas with IoT innovation",
    price: "₹4,999",
    image: "/products-images/product1.jpg",
    slug: "iot-training-kit"
  },
  {
    id: 2,
    name: "AI Exploration Kit",
    description: "Inspiring Tomorrow's Innovators",
    price: "₹7,999",
    image: "/products-images/product2.jpg",
    slug: "ai-exploration-kit"
  },
  {
    id: 3,
    name: "Robotics Starter Kit",
    description: "Build smart robotic systems easily",
    price: "₹5,499",
    image: "/products-images/robotics-starter-kit.png",
    slug: "robotics-starter-kit"
  },
  {
    id: 4,
    name: "Drone Technology Kit",
    description: "Experience next-gen aerial technology",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
    slug: "drone-technology-kit"
  },
  {
    id: 5,
    name: "VR Experience Kit",
    description: "Immersive VR-based learning for next-gen education",
    price: "₹6,999",
    image: "/products-images/vrar-kit.png",
    slug: "vr-experience-kit"
  },
  {
    id: 7,
    name: "Basic Electronics Kit",
    description: "Master embedded electronics projects",
    price: "₹3,999",
    image: "/products-images/basic-electronic-kit.png",
    slug: "basic-electronics-kit"
  }
];

// Smart Technology Solutions data
const solutions = [
  {
    id: 1,
    title: "Science Wall",
    badge: "Interactive Learning",
    description: "Transforming the Science Wall into an interactive educational experience helping students explore scientific concepts through engaging visual learning.",
    features: [
      "Interactive scientific models",
      "Educational displays",
      "Visual learning experience"
    ],
    image: "/ai-innovation-images/sciencewall.jpg",
    theme: "blue",
    slug: "science-wall"
  },
  {
    id: 2,
    title: "Virtual Reality Lab",
    badge: "Immersive Technology",
    description: "Step into a world where learning knows no limits with our advanced VR lab designed for interactive educational experiences.",
    features: [
      "VR-enabled classrooms",
      "Immersive simulations",
      "Smart learning environment"
    ],
    image: "/ai-innovation-images/virtualimg.jpg",
    theme: "green",
    slug: "vr-experience-kit"
  },
  {
    id: 3,
    title: "Customized Solutions",
    badge: "Smart Innovation",
    description: "Tailored technology solutions crafted to meet the needs of modern institutions and innovation-driven organizations.",
    features: [
      "AI & IoT based systems",
      "Smart automation",
      "Industry-ready solutions"
    ],
    image: "/custom-solution.png",
    theme: "blue",
    slug: "ai-mechatronics-lab"
  }
];

// SVGs for Background Circuit Traces
const CircuitSVGLeft = () => (
  <svg
    className="absolute left-0 top-[20%] pointer-events-none opacity-25 text-blue-500/20 hidden lg:block"
    width="180"
    height="360"
    viewBox="0 0 180 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-20 40 H80 V160 H140 V280 H-20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 4"
    />
    <circle cx="80" cy="40" r="3.5" fill="currentColor" />
    <circle cx="140" cy="160" r="3.5" fill="currentColor" />
    <circle cx="80" cy="200" r="2" fill="currentColor" />
    <circle cx="10" cy="280" r="3" fill="currentColor" />
  </svg>
);

const CircuitSVGRight = () => (
  <svg
    className="absolute right-0 top-[40%] pointer-events-none opacity-25 text-cyan-500/20 hidden lg:block"
    width="180"
    height="360"
    viewBox="0 0 180 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M200 60 H100 V180 H40 V300 H200"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 4"
    />
    <circle cx="100" cy="60" r="3.5" fill="currentColor" />
    <circle cx="40" cy="180" r="3.5" fill="currentColor" />
    <circle cx="120" cy="240" r="2" fill="currentColor" />
    <circle cx="170" cy="300" r="3" fill="currentColor" />
  </svg>
);

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 overflow-hidden relative pb-28 -mt-[100px] sm:-mt-[100px] md:-mt-[135px]">
      {/* Decorative Radial Blur Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-50/40 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-50/30 blur-3xl pointer-events-none z-0" />

      {/* SVG Background Grid & Circles (Slow Float Animations) */}
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-8 text-slate-200/50 pointer-events-none z-0 select-none hidden md:block"
      >
        <svg width="120" height="120" fill="currentColor" viewBox="0 0 100 100">
          <pattern id="grid-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="currentColor" className="text-slate-300/60" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-dots)" />
        </svg>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[50%] left-[-50px] text-slate-200/50 pointer-events-none z-0 select-none hidden lg:block"
      >
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-slate-300/40">
          <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="16" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-20 right-10 text-slate-200/50 pointer-events-none z-0 select-none hidden md:block"
      >
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-slate-300/40">
          <line x1="10" y1="10" x2="90" y2="90" strokeDasharray="4 4" />
          <line x1="90" y1="10" x2="10" y2="90" />
          <circle cx="50" cy="50" r="20" className="fill-white/80" />
        </svg>
      </motion.div>

      <CircuitSVGLeft />
      <CircuitSVGRight />

      {/* ==========================================
          SECTION 1: HERO
          ========================================== */}
      <section className="relative pt-[120px] sm:pt-[128px] md:pt-[136px] pb-20 z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100/60 px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 text-xs font-extrabold tracking-[0.12em] uppercase">
              Our Innovation Kits
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0f172a]"
          >
            Explore Smart{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Tech Products
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-500 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Professional innovation kits designed for students, creators, and
            future engineers to build real-world IoT and AI projects.
          </motion.p>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: PRODUCT CARDS GRID
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {displayCards.map((item, idx) => (
            <motion.div
              key={idx}
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { y: 0, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.03)", borderColor: "#f1f5f9" },
                hover: {
                  y: -8,
                  boxShadow: "0 20px 40px -10px rgba(37,99,235,0.08)",
                  borderColor: "#bfdbfe",
                  transition: { duration: 0.3, ease: "easeOut" }
                }
              }}
              className="bg-white/80 border backdrop-blur-xl rounded-[32px] overflow-hidden group flex flex-col h-full border-slate-100 transition-all duration-300"
            >
              {/* Wrapped Image & Info in Link for Redesigned User Journey */}
              <Link href={`/our-products/${item.slug}`} className="flex flex-col flex-grow cursor-pointer">
                {/* Product Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-50 border-b border-slate-100/60">
                  <motion.div
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05, transition: { duration: 0.3 } }
                    }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500"
                    />
                  </motion.div>
                </div>

                {/* Product Info Block */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500 mt-2 leading-relaxed h-10 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-6">
                      <motion.span
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.05, transition: { duration: 0.3 } }
                        }}
                        className="text-2xl font-extrabold text-blue-600 tracking-tight"
                      >
                        {item.price}
                      </motion.span>

                      <span className="bg-blue-50 text-blue-600 border border-blue-100/50 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide">
                        Premium
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Interactive Action Buttons */}
              <div className="px-6 pb-6 flex gap-3">
                <Link href={`/our-products/${item.slug}`} className="flex-1">
                  <motion.button 
                    variants={{
                      initial: { backgroundColor: "#f8fafc" },
                      hover: { backgroundColor: "#e2e8f0" }
                    }}
                    className="w-full py-3 px-4 text-slate-700 text-xs md:text-sm font-semibold rounded-2xl border border-slate-200/60 transition-all duration-300 active:scale-95 text-center"
                  >
                    Add to Cart
                  </motion.button>
                </Link>
                <Link href={`/our-products/${item.slug}`} className="flex-1">
                  <motion.button 
                    variants={{
                      initial: { boxShadow: "0 0px 0px rgba(37,99,235,0)" },
                      hover: { boxShadow: "0 10px 20px rgba(37,99,235,0.22)" }
                    }}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs md:text-sm font-bold rounded-2xl flex items-center justify-center gap-1.5 transition-all duration-300 group/btn"
                  >
                    <span>Buy Now</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 3: SMART SOLUTIONS
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100/60 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Layers className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 text-xs font-extrabold tracking-[0.12em] uppercase">
              Our Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#0f172a]">
            Smart Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions</span>
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Innovative educational and technology-driven solutions designed to
            empower institutions, students, and future innovators.
          </p>
        </div>

        {/* Alternating Solution Block Cards */}
        <div className="flex flex-col gap-14">
          {solutions.map((sol, index) => {
            const isImageRight = index % 2 === 1;

            return (
              <motion.div
                key={sol.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white border border-slate-100/80 rounded-[32px] p-6 lg:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  
                  {/* Solution Block Image */}
                  <div className={`relative h-[260px] sm:h-[320px] lg:h-[380px] w-full rounded-[24px] overflow-hidden bg-slate-50 ${isImageRight ? "md:order-2" : ""}`}>
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>

                  {/* Solution Block Content */}
                  <div className={`flex flex-col justify-center ${isImageRight ? "md:order-1" : ""}`}>
                    {/* Theme Badge */}
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase w-fit border ${sol.theme === "green"
                      ? "bg-emerald-50/80 border-emerald-100 text-emerald-600"
                      : "bg-blue-50/80 border-blue-100 text-blue-600"
                      }`}>
                      {sol.badge}
                    </span>

                    <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight mt-4 mb-4">
                      {sol.title}
                    </h3>

                    <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    {/* Staggered features rendering */}
                    <motion.ul 
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                      }}
                      className="space-y-3.5 mb-8"
                    >
                      {sol.features.map((feature, fIdx) => (
                        <motion.li 
                          key={fIdx}
                          variants={{
                            hidden: { opacity: 0, x: -12 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                          }}
                          className="flex items-center gap-3.5 text-slate-600 text-sm lg:text-base"
                        >
                          <span className={`w-5.5 h-5.5 rounded-full flex items-center justify-center border flex-shrink-0 ${sol.theme === "green"
                            ? "bg-emerald-50 border-emerald-100 text-emerald-500"
                            : "bg-blue-50 border-blue-100 text-blue-500"
                            }`}>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA Button */}
                    <Link href={`/our-products/${sol.slug}`}>
                      <button className={`px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 w-fit transition-all duration-300 active:scale-95 group/sol-btn ${sol.theme === "green"
                        ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 text-white"
                        : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 text-white"
                        }`}>
                        <span>Explore More</span>
                        <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover/sol-btn:translate-x-1" />
                      </button>
                    </Link>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}