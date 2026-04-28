"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { useState } from "react";

export default function DemoSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const left = el.querySelector(".demo-form");
    const right = el.querySelector(".demo-content");

    gsap.fromTo(
      left,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      right,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0284c7] text-white"
    >
      {/* 🔥 TOP HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Book your FREE Demo Today!
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-6 rounded"></div>
        <p className="text-blue-100">
          Experience the power of AI and Robotics with a hands-on demo tailored
          for your school.
        </p>
      </div>

      {/* 🔥 MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT FORM */}
        <div className="demo-form bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-6 text-white">Request your Demo</h3>
          {success && (
            <div className="mb-4 p-3 rounded bg-green-500/80 text-white text-center font-semibold">Thank you! Your request has been submitted successfully.</div>
          )}
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              setSuccess(true);
              setTimeout(() => setSuccess(false), 4000);
                 (e.target as HTMLFormElement).reset();            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number (e.g. +1 987 654 3210)"
                required
                className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none"
              />
              <select
                className="w-full p-3 rounded bg-white/20 text-white outline-none"
                required
                defaultValue=""
              >
                <option value="" disabled>Select Designation</option>
                <option>Educator</option>
                <option>Management</option>
                <option>Principal</option>
                <option>Parent</option>
                <option>Trainer</option>
                <option>Student</option>
                <option>Others</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="School / Organization"
              required
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                className="w-full p-3 rounded bg-white/20 text-white outline-none"
                required
                defaultValue=""
              >
                <option value="" disabled>Select State</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
                <option>Delhi</option>
                <option>Jammu and Kashmir</option>
                <option>Ladakh</option>
                <option>Puducherry</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                placeholder="Enter City Name"
                required
                className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-white">Schedule demo for</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="demoType" className="accent-yellow-400" required /> AI and Robotics Lab
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="demoType" className="accent-yellow-400" /> Atal Tinkering Lab
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="demoType" className="accent-yellow-400" /> Coding & AI Curriculum
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="demoType" className="accent-yellow-400" /> AI and Robotics Hardware Kits
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="demoType" className="accent-yellow-400" /> Composite Skill Lab
                </label>
              </div>
            </div>
            <textarea
              placeholder="Please add as much information as possible to ensure we can fully support you!"
              className="w-full p-3 rounded bg-white/20 placeholder-white text-white outline-none min-h-[100px]"
            />
            <button className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:scale-105 transition">
              Submit Request
            </button>
          </form>
        </div>
        {/* RIGHT CONTENT */}
        <div className="demo-content">
          <h3 className="text-2xl md:text-3xl font-bold">
            Experience the power of AI and Robotics
          </h3>
          <div className="w-16 h-1 bg-yellow-400 mt-3 mb-5"></div>
          <p className="text-blue-100 leading-relaxed">
            Discover a revolutionary AI ecosystem designed for schools.
            Our platform empowers students with coding, robotics, and
            hands-on learning experiences.
          </p>
          <ul className="mt-6 space-y-3 text-blue-200">
            <li>🚀 Live AI Demo Sessions</li>
            <li>🤖 Robotics Hands-on Experience</li>
            <li>📦 Smart Classroom Kits</li>
            <li>🎯 Activity-based Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}