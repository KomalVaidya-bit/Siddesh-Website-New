"use client";

import { motion } from "framer-motion";
import {
    Lightbulb,
    Boxes,
    GraduationCap,
    Sparkles,
    Users,
    Briefcase,
    Brain,
    Layers3,
    ShieldCheck,
    Rocket,
} from "lucide-react";

const features = [
    {
        icon: Lightbulb,
        title: "Hands-on Project Learning",
        desc: "Students learn by designing, building and experimenting with real-world projects.",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: Boxes,
        title: "Dedicated Hardware Kits",
        desc: "Every learning module includes specially designed hardware and activity kits.",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        icon: GraduationCap,
        title: "Teacher Empowerment",
        desc: "Comprehensive training, implementation guidance and continuous educator support.",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: Sparkles,
        title: "Innovation Driven Learning",
        desc: "Encourages creativity, curiosity and practical problem-solving through technology.",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        icon: Users,
        title: "Collaborative Learning",
        desc: "Promotes teamwork, communication and leadership through group activities.",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: Briefcase,
        title: "Real-World Applications",
        desc: "Students connect classroom concepts with practical industry use cases.",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        icon: Brain,
        title: "Creative Thinking",
        desc: "Build confidence through experimentation, design thinking and innovation.",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: Layers3,
        title: "Integrated Learning Ecosystem",
        desc: "AI, Robotics, IoT, Drone Technology, AR/VR, MR and 3D Printing together in one platform.",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        icon: ShieldCheck,
        title: "Safe & Organized Lab",
        desc: "Designed for engaging, secure and student-friendly practical learning.",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        icon: Rocket,
        title: "Future Career Readiness",
        desc: "Builds technical, analytical and innovation skills for tomorrow's careers.",
        color: "text-green-600",
        bg: "bg-green-100",
    },
];
export default function WhyChooseThinkSphere() {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-4xl mx-auto">

                    <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        WHY CHOOSE THINKSPHERE 360
                    </p>

                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Why Schools Choose
                        <br />
                        ThinkSphere 360
                    </h2>

                    <p className="mt-6 text-base sm:text-lg text-slate-600 leading-7 sm:leading-8 px-2 sm:px-0">
                        ThinkSphere 360 is more than a technology lab. It is a complete
                        learning ecosystem designed to develop innovation, creativity,
                        collaboration and future-ready skills through immersive hands-on education.
                    </p>

                </div>

                {/* ================= LEFT IMAGE SECTION ================= */}

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* LEFT IMAGE */}


                    <div className="relative">

                        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

                            <img
                                src="/teacher-ai.png"
                                alt="ThinkSphere"
                                className="w-full max-w-[560px] mx-auto h-[300px] sm:h-[380px] lg:h-[430px] rounded-[30px] object-cover"
                            />

                        </div>

                        {/* Floating Card 1 */}

                        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-10 lg:left-10 animate-floatSlow bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 py-2 sm:px-5 sm:py-4 w-32 sm:w-40 lg:w-48 z-20">

                            <div className="flex items-center gap-3">

                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">

                                    🔵

                                </div>

                                <div>

                                    <h4 className="font-semibold text-sm">
                                        100% Offline
                                    </h4>

                                    <p className="text-xs text-slate-500">
                                        Seamless Learning
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Floating Card 2 */}

                        <div className="absolute bottom-4 left-3 sm:bottom-10 sm:left-4 lg:bottom-14 lg:left-4 animate-floatMedium bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 py-2 sm:px-5 sm:py-4 w-32 sm:w-40 lg:w-48 z-20">

                            <div className="flex items-center gap-3">

                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">

                                    🚀

                                </div>

                                <div>

                                    <h4 className="font-semibold text-sm">
                                        9 Future Techs
                                    </h4>

                                    <p className="text-xs text-slate-500">
                                        Emerging Domains
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Floating Card 3 */}

                        <div className="absolute bottom-8 right-3 sm:bottom-12 sm:right-4 lg:bottom-16 lg:right-6 animate-floatFast bg-white rounded-xl sm:rounded-2xl shadow-xl px-3 py-2 sm:px-5 sm:py-4 w-36 sm:w-44 lg:w-52">

                            <div className="flex items-center gap-3">

                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">

                                    ✅

                                </div>

                                <div>

                                    <h4 className="font-semibold text-sm">
                                        NEP 2020
                                    </h4>

                                    <p className="text-xs text-slate-500">
                                        Aligned Curriculum
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* RIGHT SIDE */}

                    {/* ================= RIGHT SIDE ================= */}

                    <div className="w-full">

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 lg:mt-0">

                            {[
                                {
                                    title: "Hands-on Learning",
                                    desc: "Real-world projects and practical learning.",
                                    icon: "🛠️",
                                    color: "bg-blue-600",
                                },
                                {
                                    title: "Learning Kits",
                                    desc: "Dedicated hardware kits for every module.",
                                    icon: "📦",
                                    color: "bg-green-600",
                                },
                                {
                                    title: "Innovation",
                                    desc: "Creativity through hands-on activities.",
                                    icon: "💡",
                                    color: "bg-blue-600",
                                },
                                {
                                    title: "Teacher Support",
                                    desc: "Training and implementation assistance.",
                                    icon: "👨‍🏫",
                                    color: "bg-green-600",
                                },
                                {
                                    title: "Industry Skills",
                                    desc: "Future-ready technical learning.",
                                    icon: "📈",
                                    color: "bg-blue-600",
                                },
                                {
                                    title: "Safe Learning",
                                    desc: "Secure and organized lab environment.",
                                    icon: "🛡️",
                                    color: "bg-green-600",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    className="
group
bg-white
rounded-2xl
border
border-slate-200
shadow-md
hover:shadow-xl
transition-all
duration-300

p-5

min-h-[160px]
sm:min-h-[175px]

flex
flex-col
justify-start
"
                                >
                                    <div
                                        className={`
            w-12
            h-12
            rounded-xl
            ${item.color}
            flex
            items-center
            justify-center
            text-xl
            text-white
            shadow-md
            transition-transform
            duration-300
            group-hover:scale-110
          `}
                                    >
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-4 text-lg font-semibold text-slate-900 leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {item.desc}
                                    </p>

                                </motion.div>
                            ))}

                        </div>

                    </div>

                </div>




            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-3 px-4">

                <span className="rounded-full bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
                    Innovation First
                </span>

                <span className="rounded-full bg-green-100 px-6 py-3 font-medium">
                    Learn by Building
                </span>

                <span className="rounded-full bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium">
                    Future Ready Skills
                </span>

                <span className="rounded-full bg-green-100 px-6 py-3 font-medium">
                    Industry Inspired
                </span>

            </div>



        </section>
    );
}