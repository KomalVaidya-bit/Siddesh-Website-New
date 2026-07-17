"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVGs for Premium Aesthetics
const SparklesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 4.5L10.5 7.5L13.5 9L10.5 10.5L9 13.5L7.5 10.5L4.5 9L7.5 7.5L9 4.5ZM17.5 11L18.5 13L20.5 14L18.5 15L17.5 17L16.5 15L14.5 14L16.5 13L17.5 11ZM16 3L16.8 4.6L18.4 5.4L16.8 6.2L16 7.8L15.2 6.2L13.6 5.4L15.2 4.6L16 3Z" />
  </svg>
);

const CloseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const WhatsappIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.57 1.977 14.1 1.953 11.927 1.953c-5.43 0-9.855 4.37-9.859 9.8.001 1.849.493 3.655 1.425 5.248l-.93 3.395 3.494-.942zm12.35-6.096c-.3-.15-1.771-.875-2.045-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.205-.6-2.18-1.05-3.04-2.525-.23-.396.23-.368.66-.99.088-.13.044-.24-.022-.375-.066-.135-.594-1.43-.814-1.96-.215-.519-.43-.45-.595-.458l-.51-.01c-.175 0-.46.066-.7.33-.24.264-.915.893-.915 2.178 0 1.285.935 2.528 1.065 2.7.13.175 1.84 2.81 4.46 3.94 1.57.68 2.2 1.01 2.97.91.56-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.175-1.42-.075-.12-.275-.22-.575-.37z" />
  </svg>
);

const UserIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Types
type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  isFallback?: boolean;
};

type AiAssistantWindowProps = {
  onClose: () => void;
};

// Suggested questions list
const SUGGESTED_QUESTIONS = [
  "Tell me about ThinkSphere 360",
  "Which lab is best for my school?",
  "What products do you offer?",
  "Explain AI Lab",
  "Explain Robotics Lab",
  "Explain IoT Lab",
  "Explain VR Lab",
  "Explain AR Lab",
  "Explain 3D Printing Lab",
  "Book a Demo",
  "Contact Sales",
];

// Q&A Local Knowledge Base Matcher
const getAiResponse = (query: string): { text: string; isFallback?: boolean } => {
  const norm = query.toLowerCase().trim();

  // 1. ThinkSphere 360
  if (
    norm.includes("thinksphere") ||
    norm.includes("think sphere") ||
    norm.includes("composite") ||
    norm.includes("ecosystem")
  ) {
    return {
      text: "ThinkSphere 360 is our flagship Integrated Composite Skill Lab ecosystem designed in alignment with NEP 2020. It combines emerging technologies—Artificial Intelligence, Robotics, IoT, Drone Technology, AR/VR, and 3D Printing—into one unified platform. We provide dedicated hardware kits, interactive offline platforms, and end-to-end teacher training and curriculum support to transform standard classrooms into modern innovation hubs.",
    };
  }

  // 2. Best lab for school
  if (
    norm.includes("which lab") ||
    norm.includes("best lab") ||
    norm.includes("for my school") ||
    norm.includes("school lab")
  ) {
    return {
      text: "The best lab configuration depends on your school's current grade levels and focus:\n\n• For younger students (Middle School): Our Science and Mathematics Labs focus on visual and hands-on experiments.\n• For secondary/higher secondary: The ThinkSphere 360 Composite Skill Lab is highly recommended as it integrates all major future-ready tech (AI, Robotics, IoT, 3D printing) under one comprehensive ecosystem aligned with NEP 2020.\n\nWould you like to book a demo or consult with our experts?",
    };
  }

  // 3. Products / Kits offered
  if (
    norm.includes("product") ||
    norm.includes("kit") ||
    norm.includes("offer") ||
    norm.includes("sell") ||
    norm.includes("buy")
  ) {
    return {
      text: "We offer a range of premium hands-on STEM & technology kits, including:\n\n• AI Exploration Kit: Learn machine vision, neural networks, and facial detection.\n• IoT Training Kit: Build smart home automation and cloud telemetry projects.\n• Robotics Starter Kit: Design smart autonomous robotic systems.\n• Drone Learning Kit: Learn flight physics and aerial mechanics.\n• VR Experience Kit: Bring immersive virtual reality learning to the classroom.\n• Basic Electronics Kit: Learn circuit building and Arduino microcontroller programming.\n\nWe also establish complete school labs like the AI Mechatronics Lab and Interactive Science Walls.",
    };
  }

  // 4. AI Lab
  if (norm.includes("explain ai") || norm.includes("artificial intelligence") || norm.includes("ai lab")) {
    return {
      text: "Our AI Exploration Lab teaches students the core concepts of Artificial Intelligence, including Neural Networks, Computer Vision (object recognition, face detection, gesture tracking), and Machine Learning. Using our AI Exploration Kit, students get a dedicated smart camera and high-speed processor to train and run ML models locally at the edge without needing cloud servers. Features block-based programming to make complex AI algorithms fun and accessible!",
    };
  }

  // 5. Robotics Lab
  if (norm.includes("explain robotics") || norm.includes("robot") || norm.includes("robotics lab")) {
    return {
      text: "The Robotics Lab enables students to build, wire, and program autonomous robots. Through hands-on challenges, they learn about motor drivers, microcontrollers, and sensor integrations (ultrasonic, line-tracking, infrared). It builds strong design-thinking, mechanics, and C++/Block-based programming skills as they solve real-world problems through robotics.",
    };
  }

  // 6. IoT Lab
  if (norm.includes("explain iot") || norm.includes("internet of things") || norm.includes("iot lab")) {
    return {
      text: "Our IoT (Internet of Things) Lab bridges embedded hardware and cloud systems. Students use the IoT Training Kit (powered by ESP32) to capture real-time telemetry (temp, humidity, light) and push data to cloud dashboards (like ThingSpeak or Firebase). They build smart home automations, weather stations, and automated agricultural setups, learning about MQTT/HTTP protocols and digital signal conversion.",
    };
  }

  // 7. VR Lab
  if (norm.includes("explain vr") || norm.includes("virtual reality") || norm.includes("vr lab")) {
    return {
      text: "The VR (Virtual Reality) Experience Lab turns abstract concepts into immersive educational journeys. Using VR headsets and controllers, students can explore the solar system, dive inside human anatomy, or run complex physics experiments in a safe, simulated 3D environment. It dramatically improves student engagement and concept retention.",
    };
  }

  // 8. AR Lab
  if (norm.includes("explain ar") || norm.includes("augmented reality") || norm.includes("ar lab")) {
    return {
      text: "Our AR (Augmented Reality) Lab overlays digital learning elements onto the physical world. Using smart devices, students interact with interactive 3D models of machinery, historical sites, and science setups right on their desks, blending digital interactive elements with real-world environments.",
    };
  }

  // 9. 3D Printing Lab
  if (norm.includes("3d print") || norm.includes("3d printing") || norm.includes("3d printing lab")) {
    return {
      text: "The 3D Printing Lab introduces students to additive manufacturing, CAD designing, and rapid prototyping. Students design their own physical models using simple software, configure slicing parameters, and print real physical objects. This teaches them engineering principles, structural integrity, and custom design iteration.",
    };
  }

  // 10. Book a Demo
  if (norm.includes("book") || norm.includes("demo") || norm.includes("schedule") || norm.includes("appointment")) {
    return {
      text: "We would love to show you how our STEM labs and kits can transform learning at your institution! You can schedule a live demonstration or lab tour by visiting our Contact Us page, chatting with us on WhatsApp, or clicking the 'Book Demo' button below.",
    };
  }

  // 11. Sales / Contact Information / Address
  if (
    norm.includes("sales") ||
    norm.includes("contact") ||
    norm.includes("phone") ||
    norm.includes("support") ||
    norm.includes("email") ||
    norm.includes("number") ||
    norm.includes("address") ||
    norm.includes("pune") ||
    norm.includes("location")
  ) {
    return {
      text: "Our team is ready to assist you with custom pricing, lab installations, and kit orders. You can reach out directly via:\n\n• Phone: +91 9921059461 / +91 8623059461\n• Email: support@siddesh.co.in\n• Office Address: 445, Gera Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Phase II, Pune, Maharashtra 411057\n\nClick the options below to connect with us instantly!",
    };
  }

  // 12. Drone Technology Lab
  if (norm.includes("drone") || norm.includes("quadcopter") || norm.includes("aerial")) {
    return {
      text: "Our Drone Learning Lab lets students explore next-gen aerial technology. With the Drone Learning Kit, students learn about flight physics, remote telemetry, gyroscope stabilization, and drone programming, introducing them to aerospace concepts hands-on.",
    };
  }

  // 13. Basic Electronics Kit
  if (norm.includes("electronics") || norm.includes("circuit") || norm.includes("arduino")) {
    return {
      text: "Our Basic Electronics Kit is designed to help students master embedded electronics projects. Using microcontrollers like Arduino, breadboards, shields, and passive/active components, students build interactive circuits, learning hardware programming and electronics from absolute scratch.",
    };
  }

  // 14. Science Wall
  if (norm.includes("science wall") || norm.includes("wall")) {
    return {
      text: "The Science Wall is an interactive learning experience that transforms classroom walls into visual educational tools. It enables students to explore scientific concepts through physical, mechanical, and electronic interactive models mounted directly on the wall.",
    };
  }

  // 15. FAQ / FAQs
  if (norm.includes("faq") || norm.includes("faqs") || norm.includes("frequently")) {
    return {
      text: "Frequently Asked Questions:\n\n1. Do students need coding experience? No, our kits start with Block-based Scratch coding and scale to Python/C++.\n2. Do kits work offline? Yes! We provide offline environments to ensure classroom reliability.\n3. Is training provided? Yes, we provide full teacher training, teacher guides, and a standard curriculum.",
    };
  }

  // 16. Mission & Vision
  if (norm.includes("mission") || norm.includes("vision")) {
    return {
      text: "Siddesh Technologies Mission & Vision:\n\n• Mission: To empower students and educators with the tools and knowledge to thrive in a technology-driven world.\n• Vision: To be the leading force in transforming education through innovation, creativity, and technology.",
    };
  }

  // 17. Who is Siddesh Technologies
  if (norm.includes("siddesh") || norm.includes("who are you") || norm.includes("company") || norm.includes("about")) {
    return {
      text: "Siddesh Technologies is a pioneer in bringing advanced AI, Robotics, and STEM solutions to educational institutions. Operating for over 8 years, we have set up labs in 120+ schools, trained 15,000+ students, and delivered 250+ projects. We partner with schools to establish world-class labs (like ThinkSphere 360), provide hardware kits, and deliver engaging teacher training.",
    };
  }

  // Fallback default response
  return {
    text: "I couldn't find that information in our immediate database. Would you like to connect with our expert team directly?",
    isFallback: true,
  };
};

export default function AiAssistantWindow({ onClose }: AiAssistantWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! 👋 I'm the ThinkSphere AI Assistant. How can I help you today with our STEM Labs, robotics kits, or educational solutions?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle message sending
  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text,
      timestamp,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate thinking/typing animation (Apple-style realism)
    setTimeout(() => {
      const response = getAiResponse(text);
      const aiMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: "ai",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isFallback: response.isFallback,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleSendMessage(inputValue);
    setInputValue("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-[164px] right-[24px] z-[9999] flex flex-col w-[360px] md:w-[380px] h-[520px] max-h-[70vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(30,58,138,0.15)] border border-slate-200/60 bg-white/90 backdrop-blur-md font-sans antialiased"
    >
      {/* Header Area */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-5 text-white flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
          <SparklesIcon className="w-5 h-5 text-yellow-300 animate-pulse" />
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-blue-400 border-2 border-blue-700 animate-ping" />
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-blue-400 border-2 border-blue-700" />
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-[16px] tracking-tight leading-tight">
            ThinkSphere AI Assistant
          </h3>
          <span className="text-[11px] text-blue-200/90 font-medium mt-0.5">
            Ask anything about our STEM Labs & Products
          </span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/90 hover:text-white"
          aria-label="Close assistant"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Messages & Chips Container */}
      <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50 flex flex-col gap-4 scrollbar-thin">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col max-w-[85%] ${
              msg.sender === "user" ? "self-end items-end" : "self-start items-start"
            }`}
          >
            {/* Sender Label */}
            <span className="text-[10px] font-semibold text-slate-400 mb-1 px-1 flex items-center gap-1">
              {msg.sender === "user" ? (
                <>
                  <span>You</span>
                  <UserIcon className="w-2.5 h-2.5" />
                </>
              ) : (
                <>
                  <SparklesIcon className="w-2.5 h-2.5 text-blue-500" />
                  <span>ThinkSphere AI</span>
                </>
              )}
            </span>

            {/* Bubble */}
            <div
              className={`rounded-[20px] p-3.5 shadow-sm border text-[13.5px] leading-relaxed whitespace-pre-line ${
                msg.sender === "user"
                  ? "bg-blue-600 border-blue-700 text-white rounded-tr-none"
                  : "bg-white border-slate-100 text-slate-700 rounded-tl-none"
              }`}
            >
              {msg.text}

              {/* Dynamic CTA buttons for Fallback / Support questions */}
              {msg.isFallback && (
                <div className="flex flex-col gap-2 mt-3.5 pt-3.5 border-t border-slate-100 w-full">
                  <a
                    href="https://wa.me/919921059461?text=Hi! I was talking with your AI Assistant and would like to connect with a human expert."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm"
                  >
                    <WhatsappIcon className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="/contact-us"
                    className="flex items-center justify-center gap-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm"
                  >
                    <span>Contact Us Form</span>
                  </a>
                  <a
                    href="/contact-us"
                    className="flex items-center justify-center gap-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors border border-slate-200"
                  >
                    <span>Book a Lab Demo</span>
                  </a>
                </div>
              )}
            </div>

            {/* Timestamp */}
            <span className="text-[9px] text-slate-400 mt-1 px-1">
              {msg.timestamp}
            </span>
          </div>
        ))}

        {/* Typing Placeholder */}
        {isTyping && (
          <div className="self-start flex flex-col items-start max-w-[85%]">
            <span className="text-[10px] font-semibold text-slate-400 mb-1 px-1 flex items-center gap-1">
              <SparklesIcon className="w-2.5 h-2.5 text-blue-500" />
              <span>ThinkSphere AI is typing</span>
            </span>
            <div className="rounded-[20px] rounded-tl-none p-3.5 bg-white border border-slate-100 text-slate-700 shadow-sm flex items-center gap-1.5 h-[42px] px-5">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions Grid */}
      {messages.length === 1 && !isTyping && (
        <div className="px-5 pb-3 pt-2 bg-slate-50/50 border-t border-slate-100 flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Suggested Questions
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-[96px] overflow-y-auto pb-1 scrollbar-none">
            {SUGGESTED_QUESTIONS.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => handleSendMessage(question)}
                className="text-[11px] font-medium text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/90 border border-blue-100 px-2.5 py-1 rounded-full transition-all text-left whitespace-nowrap"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Message Input Form */}
      <form
        onSubmit={handleFormSubmit}
        className="p-4 bg-white border-t border-slate-200/80 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 py-2.5 px-4 bg-slate-100/70 border border-slate-200/50 rounded-2xl text-[13.5px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/70 transition-all font-sans"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-100 text-white disabled:text-slate-400 rounded-2xl transition-all shadow-md disabled:shadow-none flex items-center justify-center"
          aria-label="Send query"
        >
          <SendIcon />
        </button>
      </form>
    </motion.div>
  );
}
