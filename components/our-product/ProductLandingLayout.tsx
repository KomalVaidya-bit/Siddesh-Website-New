"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  Download, 
  Calendar, 
  Mail,
  Cpu,
  Zap,
  Layers,
  BookOpen,
  Wrench,
  GraduationCap,
  Play
} from "lucide-react";

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: "cpu" | "zap" | "layers" | "book" | "wrench" | "grad";
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface InsideComponentItem {
  name: string;
  quantity: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  complexity: "Beginner" | "Intermediate" | "Advanced";
}

export interface TechSpecItem {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedProduct {
  name: string;
  image: string;
  slug: string;
  tagline: string;
}

export interface ProductDetailProps {
  name: string;
  tagline: string;
  image: string;
  overview: string;
  whyChoose: WhyChooseItem[];
  features: FeatureItem[];
  insideKit: InsideComponentItem[];
  learningOutcomes: string[];
  projects: ProjectItem[];
  specifications: TechSpecItem[];
  gallery: string[];
  faqs: FaqItem[];
  related: RelatedProduct[];
}

const iconMap = {
  cpu: Cpu,
  zap: Zap,
  layers: Layers,
  book: BookOpen,
  wrench: Wrench,
  grad: GraduationCap,
};

export default function ProductLandingLayout({
  name,
  tagline,
  image,
  overview,
  whyChoose,
  features,
  insideKit,
  learningOutcomes,
  projects,
  specifications,
  gallery,
  faqs,
  related,
}: ProductDetailProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleAction = (type: string) => {
    alert(`${type} requested for ${name}! We will get in touch with you shortly.`);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 overflow-hidden relative pb-20 -mt-[100px] sm:-mt-[100px] md:-mt-[135px]">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-50/40 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-50/30 blur-3xl pointer-events-none z-0" />

      {/* ==========================================
          1. HERO BANNER
          ========================================== */}
      <section className="relative pt-[140px] sm:pt-[150px] md:pt-[160px] pb-16 z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100/60 px-4 py-1.5 rounded-full mb-6 shadow-sm w-fit"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-blue-600 text-xs font-extrabold tracking-[0.12em] uppercase">
                ThinkSphere 360 Edition
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-tight"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-500 text-lg md:text-xl mt-6 max-w-xl leading-relaxed font-medium"
            >
              {tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button 
                onClick={() => handleAction("Book Demo")}
                className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center gap-2 transition shadow-lg shadow-blue-600/10"
              >
                <Calendar className="w-4 h-4" />
                Book Demo
              </button>
              <button 
                onClick={() => handleAction("Download Brochure")}
                className="bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-bold py-3.5 px-6 rounded-2xl flex items-center gap-2 transition border border-slate-200 shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
              <button 
                onClick={() => handleAction("Contact Sales")}
                className="bg-[#0f172a] hover:bg-slate-800 active:scale-95 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center gap-2 transition shadow-lg"
              >
                <Mail className="w-4 h-4" />
                Contact Sales
              </button>
            </motion.div>
          </div>

          {/* Hero Right Product Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-square w-full max-w-[420px] bg-white border border-slate-100 rounded-[32px] overflow-hidden p-8 shadow-xl flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent" />
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-6 relative z-10"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. PRODUCT OVERVIEW
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-slate-100 p-8 md:p-12 rounded-[32px] shadow-sm max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-6">
            Product Overview
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            {overview}
          </p>
        </motion.div>
      </section>

      {/* ==========================================
          3. WHY CHOOSE THIS PRODUCT
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            Why Choose {name}?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whyChoose.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cpu;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-sm flex flex-col items-start gap-4 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          4. KEY FEATURES
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            Key Features
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="bg-white/80 border border-slate-100 p-6 rounded-[24px] shadow-sm flex items-start gap-4"
            >
              <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          5. WHAT'S INSIDE THE KIT
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            What's Inside the Kit
          </h2>
        </div>
        <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm max-w-5xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
                <th className="p-5 pl-8">Component Name</th>
                <th className="p-5">Qty</th>
                <th className="p-5 pr-8">Functionality</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {insideKit.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5 pl-8 font-bold text-slate-800">{item.name}</td>
                  <td className="p-5 text-blue-600 font-semibold">{item.quantity}</td>
                  <td className="p-5 pr-8 text-slate-500">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ==========================================
          6. LEARNING OUTCOMES
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[32px] p-8 md:p-12 shadow-xl">
          <div className="md:col-span-5 flex flex-col">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Learning Outcomes
            </h2>
            <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
              Equip students with core engineering, programming, and technical problem-solving capabilities.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningOutcomes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. ACTIVITIES & PROJECTS
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            Activities & Projects
          </h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            Hands-on prototype engineering builds that students can deploy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-sm flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300"
            >
              <div>
                <span className={`text-2xs font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md border w-fit block mb-4 ${
                  proj.complexity === "Beginner" 
                    ? "bg-blue-50 border-blue-100 text-blue-600"
                    : proj.complexity === "Intermediate"
                    ? "bg-amber-50 border-amber-100 text-amber-600"
                    : "bg-rose-50 border-rose-100 text-rose-600"
                }`}>
                  {proj.complexity} Project
                </span>
                <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-2">
                  {proj.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>
              <button className="text-blue-600 font-bold text-sm flex items-center gap-1.5 hover:underline group/btn">
                <span>View project guides</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          8. TECHNICAL SPECIFICATIONS
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            Technical Specifications
          </h2>
        </div>
        <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {specifications.map((spec, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-sm font-semibold text-slate-500">{spec.label}</span>
                <span className="text-sm font-bold text-slate-800 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          9. GALLERY
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            Product Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gallery.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-100 shadow-md bg-white p-2"
            >
              <Image
                src={imgSrc}
                alt={`${name} gallery view`}
                fill
                className="object-contain p-2 rounded-[20px]"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          10. FAQ
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-slate-50/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          11. RELATED PRODUCTS
          ========================================== */}
      <section className="relative py-16 z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0f172a]">
            Related Innovation Kits
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {related.map((prod, idx) => (
            <motion.div
              key={idx}
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { y: 0, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.03)" },
                hover: { y: -8, boxShadow: "0 20px 45px -12px rgba(37,99,235,0.08)", transition: { duration: 0.3 } }
              }}
              className="bg-white border border-slate-100 rounded-[28px] overflow-hidden flex flex-col justify-between h-full transition-all duration-300"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-50 border-b border-slate-100/50">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-1 tracking-tight">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {prod.tagline}
                  </p>
                </div>
                <Link href={`/our-products/${prod.slug}`} className="mt-4">
                  <button className="text-blue-600 hover:text-blue-700 font-bold text-xs flex items-center gap-1">
                    <span>Learn details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          12. CTA
          ========================================== */}
      <section className="relative py-20 z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="bg-[#0f172a] text-white rounded-[36px] py-16 px-8 relative overflow-hidden shadow-2xl">
          {/* Inner decorative gradients */}
          <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Ready to Transform Your Lab?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            Contact us today to receive customized quotations and demo schedules for {name}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => handleAction("Book Demo")}
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3.5 px-8 rounded-2xl flex items-center gap-2 transition"
            >
              <Calendar className="w-4 h-4" />
              Book Demo
            </button>
            <button 
              onClick={() => handleAction("Contact Sales")}
              className="bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold py-3.5 px-8 rounded-2xl flex items-center gap-2 transition border border-white/10"
            >
              <Mail className="w-4 h-4" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
