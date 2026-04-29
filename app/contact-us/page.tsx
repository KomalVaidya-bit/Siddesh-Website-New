



"use client";

import React, { useState } from "react";

// TYPES
type FormType = {
  fullName: string;
  email: string;
  phone: string;
  designation: string;
  organization: string;
  state: string;
  city: string;
  schedule: string[];
  message: string;
};

type ErrorType = Partial<Record<keyof FormType, string>>;

const initialForm: FormType = {
  fullName: "",
  email: "",
  phone: "",
  designation: "",
  organization: "",
  state: "",
  city: "",
  schedule: [],
  message: "",
};

const designations = [
  "Educator",
  "Management",
  "Principal",
  "Parent",
  "Trainer",
  "Student",
  "Others",
];

const states = ["Maharashtra", "Gujarat", "Delhi", "Karnataka", "Other"];

const scheduleOptions = [
  "AI and Robotics Lab",
  "Atal Tinkering Lab",
  "Coding & AI Curriculum",
  "AI and Robotics Hardware Kits",
  "Composite Skill Lab",
];

export default function Page() {
  const [form, setForm] = useState<FormType>(initialForm);
  const [errors, setErrors] = useState<ErrorType>({});
  const [submitted, setSubmitted] = useState<string | false>(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const isCheckbox = (e.target as HTMLInputElement).type === "checkbox";
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    if (name === "schedule") {
      setForm((prev) => {
        if (checked) {
          // Only one can be selected at a time
          return { ...prev, schedule: [value] };
        } else {
          // Uncheck all
          return { ...prev, schedule: [] };
        }
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let newErrors: ErrorType = {};

    if (!form.fullName) newErrors.fullName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.designation) newErrors.designation = "Required";
    if (!form.organization) newErrors.organization = "Required";
    if (!form.state) newErrors.state = "Required";
    if (!form.city) newErrors.city = "Required";
    if (form.schedule.length === 0) newErrors.schedule = "Select one";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitted("Please fix errors");
      return;
    }

    setSubmitted("Thank you for reaching out! Your message has been received. Our team will get back to you as soon as possible.");
    setForm(initialForm);
  }


  return (
    <main className="min-h-screen bg-[#f7f8fc] py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE - Professional Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col gap-6 justify-between h-full">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-2 tracking-tight">Contact Information</h2>
          <div className="flex flex-col gap-4 text-gray-700 text-base">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-xl">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className="w-6 h-6"><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' /></svg>
              </span>
              <div>
                <span className="font-semibold">Siddesh Technologies</span><br />
                445, Gera Imperium Rise,<br />
                Hinjewadi Rajiv Gandhi Infotech Park, Phase II,<br />
                Pune, Maharashtra 411057
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 text-xl">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className="w-6 h-6"><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 001.789 1.106H17a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2V5z' /></svg>
              </span>
              <div>
                <span className="font-semibold">Phone</span><br />
                <a href="tel:+919921059461" className="hover:underline">+91 9921059461</a><br />
                <a href="tel:+918623059461" className="hover:underline">+91 8623059461</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 text-xl">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className="w-6 h-6"><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12v1m0 4h.01M12 20h.01M8 16h.01M12 4v16m8-8H4' /></svg>
              </span>
              <div>
                <span className="font-semibold">Email</span><br />
                <a href="mailto:support@siddesh.co.in" className="hover:underline">support@siddesh.co.in</a>
              </div>
            </div>
          </div>
          {/* MAP */}
          <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Pune&output=embed"
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Siddesh Technologies Location"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold mb-2">Send Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number (e.g. +1 987 654 3210)"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <select
                name="designation"
                value={form.designation}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              >
                <option value="">Select Designation</option>
                {designations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation}</p>}
            </div>
            <div className="md:col-span-2">
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="School / Organization"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
              {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
            </div>
            <div>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
            <div>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter City Name"
                className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label className="font-semibold mb-1 block">Schedule demo for</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {scheduleOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    name="schedule"
                    value={opt}
                    checked={form.schedule.includes(opt)}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {opt}
                </label>
              ))}
            </div>
            {errors.schedule && <p className="text-red-500 text-xs mt-1">{errors.schedule}</p>}
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Please add as much information as possible to ensure we can fully support you!"
            className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 min-h-[80px]"
          />
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full p-3 rounded mt-2 transition-colors duration-200">
            Submit Request
          </button>
          {submitted && (
            <p className="mt-3 text-green-600 font-medium">{submitted}</p>
          )}
        </form>
      </div>
    </main>
  );
}