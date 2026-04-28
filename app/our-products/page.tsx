
// "use client";
// import Navbar from "../../components/Navbar";
// import { motion } from "framer-motion";

// import ProductCarousel from "@/components/ProductCarousel";


// // import { motion } from "framer-motion";

// const products = [
//   {
//     title: "IoT Training Kit",
//     images: [
//       "/kit-frames/kit4.png",
//       "/kit-frames/kit5.png",
//       "/kit-frames/kit6.png",
//     ],
//     desc: "Built for real-world IoT innovation.",
//     features: ["Sensors", "Live Projects", "Industry Use"],
//   },
//   {
//     title: "AI Exploration Kit",
//     images: [
//       "/products/ai1.png",
//       "/products/ai2.png",
//     ],
//     desc: "Hands-on AI learning kit.",
//     features: ["AI Models", "Experiments"],
//   },
//   {
//     title: "Science Wall",
//     img: "/products/science.png",
//     desc: "Interactive science concepts explained visually.",
//     features: ["3D Models", "Interactive Panels", "School Friendly"],
//   },
//   {
//     title: "Virtual Reality Lab",
//     img: "/products/vr.png",
//     desc: "Immersive VR-based learning for next-gen education.",
//     features: ["VR Headsets", "Simulations", "Interactive Learning"],
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="bg-[#f8fafc]">

//       {/* HERO */}
//       <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold"
//         >
//           Our Products
//         </motion.h1>
//         <p className="mt-4 max-w-2xl mx-auto opacity-90">
//           Innovative learning solutions designed to empower students with real-world skills.
//         </p>
//       </section>

//       {/* FEATURED GRID */}
//       <section className="py-20 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
//           Featured Products
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-xl shadow-md overflow-hidden border"
//             >
// <ProductCarousel images={item.images} />
//               <div className="p-5">
//                 <h3 className="font-semibold text-lg">{item.title}</h3>
//                 <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* DETAILED SECTIONS */}
//       <section className="py-20 max-w-7xl mx-auto px-6 space-y-24">

//         {products.map((item, i) => (
//           <div
//             key={i}
//             className={`grid md:grid-cols-2 gap-10 items-center ${
//               i % 2 !== 0 ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             {/* IMAGE */}
//             <motion.img
//               src={item.img}
//               className="rounded-xl shadow-lg"
//               initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             />

//             {/* TEXT */}
//             <motion.div
//               initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             >
//               <h3 className="text-2xl font-bold text-blue-600">
//                 {item.title}
//               </h3>

//               <div className="h-[3px] w-16 bg-yellow-400 my-3"></div>

//               <p className="text-gray-600 mb-4">{item.desc}</p>

//               <ul className="list-disc pl-5 text-gray-600 space-y-1">
//                 {item.features.map((f, idx) => (
//                   <li key={idx}>{f}</li>
//                 ))}
//               </ul>

//               <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700">
//                 Learn More
//               </button>
//             </motion.div>
//           </div>
//         ))}
//       </section>

//       {/* INNOVATION SECTION */}
//       <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           Customized Solutions — “You Think, We Make”
//         </h2>
//         <p className="max-w-2xl mx-auto opacity-90">
//           We build custom AI & Robotics labs tailored for your institution.
//         </p>
//       </section>

//       {/* WHY US */}
//       <section className="py-20 bg-[#eef2ff]">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

//           {[
//             "Hands-on Learning",
//             "Industry Ready Curriculum",
//             "Future Skill Development",
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white p-6 rounded-xl shadow"
//             >
//               {item}
//             </motion.div>
//           ))}

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Transform Your School with AI & Robotics
//         </h2>
//         <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow">
//           Contact Us
//         </button>
//       </section>

//     </div>
//   );
// }








// "use client";

// import Navbar from "../../components/Navbar";
// import { motion } from "framer-motion";
// import ProductCarousel from "@/components/ProductCarousel";

// const products = [
//   {
//     title: "IoT Training Kit",
//     images: [
//       "/kit-frames/kit4.png",
//       "/kit-frames/kit5.png",
//       "/kit-frames/kit6.png",
//     ],
//     desc: "Built for real-world IoT innovation.",
//     features: ["Sensors", "Live Projects", "Industry Use"],
//   },
//   {
//     title: "AI Exploration Kit",
//     images: [
//       "/products/ai1.png",
//       "/products/ai2.png",
//     ],
//     desc: "Hands-on AI learning kit.",
//     features: ["AI Models", "Experiments"],
//   },
//   {
//     title: "Science Wall",
//     images: [
//       "/products/science.png",
//     ],
//     desc: "Interactive science concepts explained visually.",
//     features: ["3D Models", "Interactive Panels", "School Friendly"],
//   },
//   {
//     title: "Virtual Reality Lab",
//     images: [
//       "/products/vr.png",
//     ],
//     desc: "Immersive VR-based learning for next-gen education.",
//     features: ["VR Headsets", "Simulations", "Interactive Learning"],
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="bg-[#f8fafc]">

//       {/* HERO */}
//       <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold"
//         >
//           Our Products
//         </motion.h1>
//         <p className="mt-4 max-w-2xl mx-auto opacity-90">
//           Innovative learning solutions designed to empower students with real-world skills.
//         </p>
//       </section>

//       {/* FEATURED GRID */}
//       <section className="py-20 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
//           Featured Products
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-xl shadow-md overflow-hidden border"
//             >
//               <ProductCarousel images={item.images} />

//               <div className="p-5">
//                 <h3 className="font-semibold text-lg">{item.title}</h3>
//                 <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* DETAILED SECTIONS */}
//       <section className="py-20 max-w-7xl mx-auto px-6 space-y-24">

//         {products.map((item, i) => (
//           <div
//             key={i}
//             className="grid md:grid-cols-2 gap-10 items-center"
//           >
//             {/* IMAGE */}
//             <motion.img
//               src={item.images?.[0] || "/placeholder.png"}
//               className="rounded-xl shadow-lg"
//               initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             />

//             {/* TEXT */}
//             <motion.div
//               initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             >
//               <h3 className="text-2xl font-bold text-blue-600">
//                 {item.title}
//               </h3>

//               <div className="h-[3px] w-16 bg-yellow-400 my-3"></div>

//               <p className="text-gray-600 mb-4">{item.desc}</p>

//               <ul className="list-disc pl-5 text-gray-600 space-y-1">
//                 {item.features.map((f, idx) => (
//                   <li key={idx}>{f}</li>
//                 ))}
//               </ul>

//               <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700">
//                 Learn More
//               </button>
//             </motion.div>
//           </div>
//         ))}

//       </section>

//       {/* INNOVATION SECTION */}
//       <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           Customized Solutions — “You Think, We Make”
//         </h2>
//         <p className="max-w-2xl mx-auto opacity-90">
//           We build custom AI & Robotics labs tailored for your institution.
//         </p>
//       </section>

//       {/* WHY US */}
//       <section className="py-20 bg-[#eef2ff]">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

//           {[
//             "Hands-on Learning",
//             "Industry Ready Curriculum",
//             "Future Skill Development",
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white p-6 rounded-xl shadow"
//             >
//               {item}
//             </motion.div>
//           ))}

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Transform Your School with AI & Robotics
//         </h2>
//         <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow">
//           Contact Us
//         </button>
//       </section>

//     </div>
//   );
// }



// "use client";

// import ProductCarousel from "@/components/ProductCarousel";

// const products = [
//   {
//     title: "IoT Training Kit",
//     images: [
//       "/kit-frames/kit4.png",
//       "/kit-frames/kit5.png",
//       "/kit-frames/kit6.png",
//     ],
//     desc: "Built for real-world IoT innovation.",
//     features: ["Sensors", "Live Projects", "Industry Use"],
//   },
//   {
//     title: "AI Exploration Kit",
//     images: [
//       "/kit-frames/kit2.png",
//       "/kit-frames/kit3.png",
//     ],
//     desc: "Hands-on AI learning kit.",
//     features: ["AI Models", "Experiments"],
//   },
//   {
//     title: "Science Wall",
//     images: ["/kit-frames/kit8.png",
//             "/kit-frames/kit1.png",
//     ],
//     desc: "Interactive science concepts explained visually.",
//     features: ["3D Models", "Interactive Panels", "School Friendly"],
//   },
//   {
//     title: "Virtual Reality Lab",
//     images: ["/kit-frames/kit7.png"],
//     desc: "Immersive VR-based learning for next-gen education.",
//     features: ["VR Headsets", "Simulations", "Interactive Learning"],
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="bg-[#f8fafc]">

//       {/* HERO */}
//       <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Our Products
//         </h1>
//         <p className="mt-4 max-w-2xl mx-auto opacity-90">
//           Innovative learning solutions designed to empower students with real-world skills.
//         </p>
//       </section>

//       {/* FEATURED GRID (STATIC) */}
//       <section className="py-20 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
//           Featured Products
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-md overflow-hidden border"
//             >
//               <img
//                 src={item.images[0]}
//                 className="w-full h-48 object-cover"
//                 alt={item.title}
//               />

//               <div className="p-5">
//                 <h3 className="font-semibold text-lg">{item.title}</h3>
//                 <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔥 DETAILED SECTION (3D + CAROUSEL + ALTERNATING) */}
//      <section className="py-24 max-w-7xl mx-auto px-6 space-y-20">

//   {products.map((item, i) => {
//     const isReverse = i % 2 !== 0;

//     return (
//       <div
//   key={i}
//   className="max-w-5xl mx-auto rounded-2xl bg-white/60 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] p-4 md:p-6"
// >
//   <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">

//     {/* IMAGE */}
//     <div className={`${isReverse ? "md:order-2" : ""}`}>
//       <div className="max-w-[420px] mx-auto rounded-xl overflow-hidden">
//         <ProductCarousel images={item.images} />
//       </div>
//     </div>

//     {/* TEXT */}
//     <div className={`${isReverse ? "md:order-1" : ""}`}>
//       <div className="max-w-md space-y-4">

//         <h3 className="text-2xl md:text-3xl font-bold text-[#0ea5e9]">
//           {item.title}
//         </h3>

//         <div className="h-[3px] w-14 bg-yellow-400"></div>

//         <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//           {item.desc}
//         </p>

//         <ul className="space-y-1 text-sm md:text-base">
//           {item.features.map((f, idx) => (
//             <li key={idx} className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//               {f}
//             </li>
//           ))}
//         </ul>

//         <button className="mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full shadow hover:scale-105 transition">
//           Learn More
//         </button>

//       </div>
//     </div>

//   </div>
// </div>
//     );
//   })}

// </section>

//       {/* CTA */}
//       <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Transform Your School with AI & Robotics
//         </h2>
//         <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow">
//           Contact Us
//         </button>
//       </section>

//     </div>
//   );
// }




// "use client";

// import ProductCarousel from "@/components//our-product/ProductCarousel";

// const products = [
//   {
//     title: "IoT Training Kit",
//     price: "Starts INR 4999/-",
//     desc: "Dive into the world of IoT with our comprehensive fundamentals kit.",
//     features: [
//       "Sensors: Temperature, humidity, motion",
//       "Actuators: LED, motors",
//       "Arduino & Raspberry Pi",
//       "Wi-Fi, Bluetooth",
//     ],
//     images: ["/kit-frames/kit4.png", "/kit-frames/kit6.png"],
//   },
//   {
//     title: "AI Exploration Kit",
//     price: "Starts INR 7499/-",
//     desc: "Explore artificial intelligence with immersive learning tools.",
//     features: [
//       "IoT Kit",
//       "VR Box",
//       "Motion Detection",
//       "AR Demo",
//     ],
//     images: ["/products/ai1.png", "/products/ai2.png"],
//   },
//   {
//     title: "Science Wall",
//     price: "",
//     desc: "Interactive science learning wall.",
//     features: [
//       "14 models",
//       "Custom branding",
//       "School-ready setup",
//     ],
//     images: ["/products/science1.png", "/products/science2.png"],
//   },
//   {
//     title: "Virtual Reality Lab",
//     price: "Starts INR 1999/-",
//     desc: "Immersive VR learning experience.",
//     features: [
//       "Interactive simulations",
//       "Better understanding",
//       "Engaging content",
//     ],
//     images: ["/products/vr1.png", "/products/vr2.png"],
//   },
// ];

// export default function OurProductsPage() {
//   return (
//     <div className="bg-[#f8fafc]">

//       {/* 🔥 HERO */}
//       <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Our Products
//         </h1>
//         <p className="mt-4 opacity-90">
//           Explore our innovative learning solutions
//         </p>
//       </section>

//       {/* 🔥 FEATURED */}
//       <section className="py-16 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
//           Featured Products
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((item, i) => (
//             <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
//               <img src={item.images[0]} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔥 DETAILED */}
//       <section className="py-16 max-w-6xl mx-auto px-6 space-y-20">
//         {products.map((item, i) => {
//           const reverse = i % 2 !== 0;

//           return (
//             <div key={i} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6">
//               <div className="grid md:grid-cols-2 gap-8 items-center">

//                 {/* IMAGE */}
//                 <div className={reverse ? "md:order-2" : ""}>
//                   <ProductCarousel images={item.images} />
//                 </div>

//                 {/* TEXT */}
//                 <div className={reverse ? "md:order-1" : ""}>
//                   <h3 className="text-2xl font-bold text-blue-600">{item.title}</h3>

//                   {item.price && <p className="font-semibold mt-1">{item.price}</p>}

//                   <div className="h-[3px] w-14 bg-yellow-400 my-3"></div>

//                   <p className="text-gray-600 text-sm mb-3">{item.desc}</p>

//                   <ul className="text-sm text-gray-600 space-y-1">
//                     {item.features.map((f, idx) => (
//                       <li key={idx}>• {f}</li>
//                     ))}
//                   </ul>

//                   <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full">
//                     Learn More
//                   </button>
//                 </div>

//               </div>
//             </div>
//           );
//         })}
//       </section>

//       {/* 🔥 CUSTOM CARD (OVERLAY) */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="relative rounded-2xl overflow-hidden shadow-xl">
//           <img src="/products/ai-card.png" className="w-full h-[350px] object-cover" />

//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
//             <div className="text-white space-y-3 max-w-md">
//               <h2 className="text-3xl font-bold">WE HAVE THE SOLUTION YOU NEED</h2>
//               <p className="text-lg font-semibold">YOU THINK, WE MAKE</p>
//               <button className="bg-blue-600 px-5 py-2 rounded-md">Explore</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔥 CUSTOMIZED SOLUTION */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           <img src="/products/custom-banner.png" className="rounded-xl shadow-lg" />

//           <div>
//             <h2 className="text-3xl font-bold">
//               Customized Solutions: “You Think, We Make”
//             </h2>

//             <p className="mt-2 font-medium">Consultation Starting INR 3999/-</p>

//             <p className="mt-3 text-gray-600">
//               We turn your ideas into real solutions tailored to your needs.
//             </p>

//             <ul className="mt-3 space-y-1 text-gray-600">
//               <li>• Your Vision, Our Expertise</li>
//               <li>• Tailored Solutions</li>
//               <li>• Bring Ideas to Life</li>
//             </ul>

//             <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md">
//               Shop Now
//             </button>
//           </div>

//         </div>
//       </section>

//       {/* 🔥 ARIVU SETU */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           <img src="/products/arivu.png" className="rounded-xl shadow-md" />

//           <div>
//             <h2 className="text-3xl font-bold">
//               Arivu-Setu Bridging Technology & Education
//             </h2>

//             <p className="mt-2 font-medium">
//               Booking Starting at INR 30/- per km
//             </p>

//             <p className="mt-3 text-gray-600">
//               A mobile technology lab bringing innovation directly to students.
//             </p>

//             <ul className="mt-3 space-y-1 text-gray-600">
//               <li>• Innovation On Wheels</li>
//               <li>• Empowering Students</li>
//               <li>• Book for Schools & Colleges</li>
//             </ul>

//             <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md">
//               Book Now
//             </button>
//           </div>

//         </div>
//       </section>

//       {/* 🔥 CTA */}
//       <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Transform Your School with AI & Robotics
//         </h2>
//         <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow">
//           Contact Us
//         </button>
//       </section>

//     </div>
//   );
// }


// working code without parralx

// "use client";

// import ProductCarousel from "@/components/our-product/ProductCarousel";

// const products = [
//   {
//     title: "IoT Training Kit",
//     price: "Starts INR 4999/-",
//     desc: "Dive into the world of IoT with our comprehensive fundamentals kit.",
//     features: [
//       "Sensors: Temperature, humidity, motion",
//       "Actuators: LED, motors",
//       "Arduino & Raspberry Pi",
//       "Wi-Fi, Bluetooth",
//     ],
//     images: ["/kit-frames/kit4.png", "/kit-frames/kit6.png"],
//   },
//   {
//     title: "AI Exploration Kit",
//     price: "Starts INR 7499/-",
//     desc: "Explore artificial intelligence with immersive learning tools.",
//     features: [
//       "IoT Kit",
//       "VR Box",
//       "Motion Detection",
//       "AR Demo",
//     ],
//     images: ["/products/ai1.png", "/products/ai2.png"],
//   },
//   {
//     title: "Science Wall",
//     price: "",
//     desc: "Interactive science learning wall.",
//     features: [
//       "14 models",
//       "Custom branding",
//       "School-ready setup",
//     ],
//     images: ["/products/science1.png", "/products/science2.png"],
//   },
//   {
//     title: "Virtual Reality Lab",
//     price: "Starts INR 1999/-",
//     desc: "Immersive VR learning experience.",
//     features: [
//       "Interactive simulations",
//       "Better understanding",
//       "Engaging content",
//     ],
//     images: ["/products/vr1.png", "/products/vr2.png"],
//   },
// ];

// export default function OurProductsPage() {
//   return (
//     <div className="bg-[#f8fafc]">

//       {/* HERO */}
//       <section className="py-20 text-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Our Products
//         </h1>
//         <p className="mt-4 opacity-90">
//           Explore our innovative learning solutions
//         </p>
//       </section>

//       {/* FEATURED */}
//       <section className="py-16 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
//           Featured Products
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((item, i) => (
//             <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
//               <img src={item.images[0]} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* DETAILED */}
//       <section className="py-16 max-w-6xl mx-auto px-6 space-y-20">
//         {products.map((item, i) => {
//           const reverse = i % 2 !== 0;

//           return (
//             <div className="relative rounded-2xl overflow-hidden shadow-xl">

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/80"></div>

//               {/* CONTENT */}
//               <div className="relative z-10 p-6">

//                 <div className="grid md:grid-cols-2 gap-8 items-center">

//                   {/* IMAGE */}
//                   <div className={reverse ? "md:order-2" : ""}>
//                     <ProductCarousel images={item.images} />
//                   </div>

//                   {/* TEXT */}
//                   <div className={`${reverse ? "md:order-1" : ""} text-white`}>
                    
//                     <h3 className="text-2xl font-bold">
//                       {item.title}
//                     </h3>

//                     {item.price && (
//                       <p className="text-gray-300 mt-1">{item.price}</p>
//                     )}

//                     <div className="h-[3px] w-14 bg-yellow-400 my-3"></div>

//                     <p className="text-gray-300 text-sm mb-3">
//                       {item.desc}
//                     </p>

//                     <ul className="text-sm text-gray-300 space-y-1">
//                       {item.features.map((f, idx) => (
//                         <li key={idx}>• {f}</li>
//                       ))}
//                     </ul>

//                     <button className="mt-4 bg-blue-600 px-5 py-2 rounded-full">
//                       Learn More
//                     </button>

//                   </div>

//                 </div>

//               </div>
//             </div>
//           );
//         })}
//       </section>

//       {/* CUSTOM CARD */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="relative rounded-2xl overflow-hidden shadow-xl">
//           <img src="/products/ai-card.png" className="w-full h-[350px] object-cover" />

//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
//             <div className="text-white space-y-3 max-w-md">
//               <h2 className="text-3xl font-bold">WE HAVE THE SOLUTION YOU NEED</h2>
//               <p className="text-lg font-semibold">YOU THINK, WE MAKE</p>
//               <button className="bg-blue-600 px-5 py-2 rounded-md">Explore</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CUSTOMIZED SOLUTION */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           <img src="/products/custom-banner.png" className="rounded-xl shadow-lg" />

//           <div>
//             <h2 className="text-3xl font-bold">
//               Customized Solutions: “You Think, We Make”
//             </h2>

//             <p className="mt-2 font-medium">Consultation Starting INR 3999/-</p>

//             <p className="mt-3 text-gray-600">
//               We turn your ideas into real solutions tailored to your needs.
//             </p>

//             <ul className="mt-3 space-y-1 text-gray-600">
//               <li>• Your Vision, Our Expertise</li>
//               <li>• Tailored Solutions</li>
//               <li>• Bring Ideas to Life</li>
//             </ul>

//             <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md">
//               Shop Now
//             </button>
//           </div>

//         </div>
//       </section>

//       {/* ARIVU SETU */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           <img src="/products/arivu.png" className="rounded-xl shadow-md" />

//           <div>
//             <h2 className="text-3xl font-bold">
//               Arivu-Setu Bridging Technology & Education
//             </h2>

//             <p className="mt-2 font-medium">
//               Booking Starting at INR 30/- per km
//             </p>

//             <p className="mt-3 text-gray-600">
//               A mobile technology lab bringing innovation directly to students.
//             </p>

//             <ul className="mt-3 space-y-1 text-gray-600">
//               <li>• Innovation On Wheels</li>
//               <li>• Empowering Students</li>
//               <li>• Book for Schools & Colleges</li>
//             </ul>

//             <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md">
//               Book Now
//             </button>
//           </div>

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Transform Your School with AI & Robotics
//         </h2>
//         <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow">
//           Contact Us
//         </button>
//       </section>

//     </div>
//   );
// }



"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import ProductCarousel from "@/components/our-product/ProductCarousel";
import ParallaxCard from "@/components/our-product/ParallaxCard";

const products = [
  {
    title: "IoT Training Kit",
    price: "Starts INR 4999/-",
    desc: "Dive into the world of IoT with our comprehensive fundamentals kit.",
    features: [
      "Sensors: Temperature, humidity, motion",
      "Actuators: LED, motors",
      "Arduino & Raspberry Pi",
      "Wi-Fi, Bluetooth",
    ],
    images: ["/kit-frames/kit4.png", "/kit-frames/kit6.png"],
  },
  {
    title: "AI Exploration Kit",
    price: "Starts INR 7499/-",
    desc: "Explore artificial intelligence with immersive learning tools.",
    features: ["IoT Kit", "VR Box", "Motion Detection", "AR Demo"],
    images: ["/products/ai1.png", "/products/ai2.png"],
  },
  {
    title: "Science Wall",
    price: "",
    desc: "Interactive science learning wall.",
    features: ["14 models", "Custom branding", "School-ready setup"],
    images: ["/products/science1.png", "/products/science2.png"],
  },
  {
    title: "Virtual Reality Lab",
    price: "Starts INR 1999/-",
    desc: "Immersive VR learning experience.",
    features: ["Interactive simulations", "Better understanding", "Engaging content"],
    images: ["/products/vr1.png", "/products/vr2.png"],
  },
];

export default function OurProductsPage() {

  // ✅ PARALLAX HOOK
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-[#f8fafc]">

      {/* HERO */}
      <section className="py-20 text-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white -mt-40 pt-60 ">
        <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
        <p className="mt-4 opacity-90">
          Explore our innovative learning solutions
        </p>
      </section>

      {/* FEATURED */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={item.images[0]} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PARALLAX DETAILED CARDS */}
      <section ref={parallaxRef} className="relative h-[400vh]">

        {products.map((item, i, arr) => {
          const reverse = i % 2 !== 0;
          const targetScale = 1 - ((arr.length - i) * 0.05);

          return (
            <ParallaxCard
              key={i}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            >

              {/* <div className="relative rounded-2xl overflow-hidden shadow-xl"> */}

                {/* overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/80"></div> */}



                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#0f172a]">

  {/* 🔥 FIXED GRADIENT BG */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/80 z-0"></div>

                <div className="relative z-10 p-6">

                  <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* IMAGE */}
                    <div className={reverse ? "md:order-2" : ""}>
                      <ProductCarousel images={item.images} />
                    </div>

                    {/* TEXT */}
                    <div className={`${reverse ? "md:order-1" : ""} text-white`}>
                      
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      {item.price && (
                        <p className="text-gray-300 mt-1">{item.price}</p>
                      )}

                      <div className="h-[3px] w-14 bg-yellow-400 my-3"></div>

                      <p className="text-gray-300 text-sm mb-3">
                        {item.desc}
                      </p>

                      <ul className="text-sm text-gray-300 space-y-1">
                        {item.features.map((f, idx) => (
                          <li key={idx}>• {f}</li>
                        ))}
                      </ul>

                      <button className="mt-4 bg-blue-600 px-5 py-2 rounded-full">
                        Learn More
                      </button>

                    </div>

                  </div>

                </div>
              </div>

            </ParallaxCard>
          );
        })}

      </section>

      {/* CUSTOM CARD */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/products/ai-card.png" className="w-full h-[350px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
            <div className="text-white space-y-3 max-w-md">
              <h2 className="text-3xl font-bold">WE HAVE THE SOLUTION YOU NEED</h2>
              <p className="text-lg font-semibold">YOU THINK, WE MAKE</p>
              <button className="bg-blue-600 px-5 py-2 rounded-md">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZED */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/products/custom-banner.png" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold">
              Customized Solutions: “You Think, We Make”
            </h2>
            <p className="mt-2 font-medium">Consultation Starting INR 3999/-</p>
            <p className="mt-3 text-gray-600">
              We turn your ideas into real solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Transform Your School with AI & Robotics
        </h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow">
          Contact Us
        </button>
      </section>

    </div>
  );
}