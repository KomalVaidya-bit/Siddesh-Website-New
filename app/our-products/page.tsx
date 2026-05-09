


// "use client";

// import { useRef } from "react";
// import { useScroll } from "framer-motion";

// import ProductCarousel from "@/components/our-product/ProductCarousel";
// import ParallaxCard from "@/components/our-product/ParallaxCard";

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
//     features: ["IoT Kit", "VR Box", "Motion Detection", "AR Demo"],
//     images: ["/products/ai1.png", "/products/ai2.png"],
//   },
//   {
//     title: "Science Wall",
//     price: "",
//     desc: "Interactive science learning wall.",
//     features: ["14 models", "Custom branding", "School-ready setup"],
//     images: ["/products/science1.png", "/products/science2.png"],
//   },
//   {
//     title: "Virtual Reality Lab",
//     price: "Starts INR 1999/-",
//     desc: "Immersive VR learning experience.",
//     features: ["Interactive simulations", "Better understanding", "Engaging content"],
//     images: ["/products/vr1.png", "/products/vr2.png"],
//   },
// ];

// export default function OurProductsPage() {

//   // ✅ PARALLAX HOOK
//   const parallaxRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: parallaxRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <div className="bg-[#f8fafc]">

//       {/* HERO */}
//       <section className="py-20 text-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white -mt-40 pt-60 ">
//         <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
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
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
//             >
//               <img src={item.images[0]} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔥 PARALLAX DETAILED CARDS */}
//       <section ref={parallaxRef} className="relative h-[400vh]">

//         {products.map((item, i, arr) => {
//           const reverse = i % 2 !== 0;
//           const targetScale = 1 - ((arr.length - i) * 0.05);

//           return (
//             <ParallaxCard
//               key={i}
//               i={i}
//               progress={scrollYProgress}
//               range={[i * 0.25, 1]}
//               targetScale={targetScale}
//             >

//               {/* <div className="relative rounded-2xl overflow-hidden shadow-xl"> */}

//                 {/* overlay */}
//                 {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/80"></div> */}



//                 <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#0f172a]">

//   {/* 🔥 FIXED GRADIENT BG */}
//   <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/80 z-0"></div>

//                 <div className="relative z-10 p-6">

//                   <div className="grid md:grid-cols-2 gap-8 items-center">

//                     {/* IMAGE */}
//                     <div className={reverse ? "md:order-2" : ""}>
//                       <ProductCarousel images={item.images} />
//                     </div>

//                     {/* TEXT */}
//                     <div className={`${reverse ? "md:order-1" : ""} text-white`}>
                      
//                       <h3 className="text-2xl font-bold">
//                         {item.title}
//                       </h3>

//                       {item.price && (
//                         <p className="text-gray-300 mt-1">{item.price}</p>
//                       )}

//                       <div className="h-[3px] w-14 bg-yellow-400 my-3"></div>

//                       <p className="text-gray-300 text-sm mb-3">
//                         {item.desc}
//                       </p>

//                       <ul className="text-sm text-gray-300 space-y-1">
//                         {item.features.map((f, idx) => (
//                           <li key={idx}>• {f}</li>
//                         ))}
//                       </ul>

//                       <button className="mt-4 bg-blue-600 px-5 py-2 rounded-full">
//                         Learn More
//                       </button>

//                     </div>

//                   </div>

//                 </div>
//               </div>

//             </ParallaxCard>
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

//       {/* CUSTOMIZED */}
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









// app/our-products/page.tsx

// import Layout from "@/components/our-product/layout"
// import ProductCard from "@/components/our-product/ProductCard"

// export default function ProductsPage() {
//   const products = [
//     {
//       name: "IoT Training Kit",
//       price: 4999,
//       description: "Hands-on IoT learning experience",
//       features: ["Hardware kit", "Projects", "Support"]
//     },
//     {
//       name: "AI Starter Kit",
//       price: 6999,
//       description: "Start your AI journey",
//       features: ["Python", "ML models", "Guides"]
//     },
//     {
//       name: "Science Wall",
//       price: 2999,
//       description: "Interactive science display",
//       features: ["Educational", "Interactive", "School-ready"]
//     }
//   ]

//   return (
//     <Layout>
//       <div className="text-center max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold">
//           Our Products
//         </h1>
//         <p className="text-gray-500 mt-4">
//           Explore our curated kits designed for hands-on learning and innovation.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 mt-14">
//         {products.map((p, i) => (
//           <ProductCard key={i} {...p} />
//         ))}
//       </div>
//     </Layout>
//   )
// }




// import Layout from "@/components/our-product/layout"
// import ProductCard from "@/components/our-product/ProductCard"
// import LogoutButton from "@/components/LogoutButton"

// async function getProducts() {
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store"
//   })

//   return res.json()
// }

// export default async function ProductsPage() {
//   const products = await getProducts()

//   return (
//     <Layout>
//       <LogoutButton />

//       <div className="text-center max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold">Our Products</h1>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 mt-14">
//         {products.map((p: any, i: number) => (
//           <ProductCard key={i} {...p} />
//         ))}
//       </div>
//     </Layout>
//   )
// }



"use client"

import { useEffect, useState } from "react"
import Layout from "@/components/our-product/layout"
import CartDrawer from "@/components/cart/CartDrawer"
import { useCart } from "@/context/CartContext"

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([])
  const [openCart, setOpenCart] = useState(false)

  const { addToCart, cart } = useCart()

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setProducts([
            {
              _id: "1",
              name: "IoT Smart Kit",
              price: 4999,
              description:
                "Advanced learning kit for IoT projects and automation.",
            },
            {
              _id: "2",
              name: "AI Learning Board",
              price: 7999,
              description:
                "Professional AI starter board for students and labs.",
            },
            {
              _id: "3",
              name: "Robotics Kit",
              price: 9999,
              description:
                "Hands-on robotics and embedded systems development kit.",
            },
          ])
        } else {
          setProducts(data)
        }
      })
  }, [])
  return (
    <Layout>
      <CartDrawer open={openCart} setOpen={setOpenCart} />

      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 p-10 text-white shadow-2xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">
            Innovative Tech Products For Future Learning
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            Explore premium educational kits, IoT systems, AI boards and robotics solutions designed for modern learning.
          </p>

          <button
            onClick={() => setOpenCart(true)}
            className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Cart ({cart.length})
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="grid md:grid-cols-3 gap-8 mt-14">
                {products.map((p: any) => (
          <div
            key={p._id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100"
          >
            {/* Top */}
            <div className="h-52 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold">
              {p.name.charAt(0)}
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {p.name}
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {p.description}
              </p>

              <div className="flex items-center justify-between mt-6">
                <h3 className="text-3xl font-bold text-blue-900">
                  ₹{p.price}
                </h3>

                <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                  In Stock
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => {
                    addToCart(p)
                    setOpenCart(true)
                  }}
                  className="flex-1 border-2 border-blue-900 text-blue-900 py-3 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() =>
                    (window.location.href = `/checkout?name=${p.name}&price=${p.price}`)
                  }
                  className="flex-1 bg-gradient-to-r from-blue-900 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
       </Layout>
  )
}