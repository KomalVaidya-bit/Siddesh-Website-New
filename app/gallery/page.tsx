



  "use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Arivu-Setu Inauguration",
  "Science Wall",
  "Virtual Reality",
  "IoT Practicals",
  "Awards",
];

const imagesData = [
  { src: "/empowering-images/image1.png", category: "Arivu-Setu Inauguration" },
  { src: "/empowering-images/image2.png", category: "Science Wall" },
  { src: "/empowering-images/image3.png", category: "Virtual Reality" },
  { src: "/empowering-images/image4.png", category: "IoT Practicals" },
  { src: "/empowering-images/image5.png", category: "Awards" },
  { src: "/empowering-images/image6.png", category: "Science Wall" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
const [selected, setSelected] = useState<string | null>(null);
  const filtered =
    active === "All"
      ? imagesData
      : imagesData.filter((img) => img.category === active);

  return (
    <div className="bg-gray-100 min-h-screen">

  {/* HERO + GALLERY */}
<div className="max-w-6xl mx-auto px-6 pt-44 pb-10 -mt-40">
    <h1 className="text-4xl font-bold mb-2">
      Our Innovation <span className="text-blue-600">Gallery</span>
    </h1>

    <p className="text-gray-600 mb-6 max-w-xl">
      Witness the intersection of technology and education.
    </p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={i}
              layout
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-md"
              onClick={() => setSelected(img.src)}
            >
              <Image
                src={img.src}
                width={400}
                height={300}
                alt="gallery"
                className="w-full h-60 object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-4xl w-full px-4"
          >
            <Image
              src={selected}
              width={1000}
              height={700}
              alt="preview"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}