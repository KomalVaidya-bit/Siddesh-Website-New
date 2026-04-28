
"use client";
import React, { useState } from "react";
import Image from "next/image";

const initialForm = {
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
const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu and Kashmir","Ladakh","Puducherry","Other"
];
const scheduleOptions = [
  "AI and Robotics Lab",
  "Atal Tinkering Lab",
  "Coding & AI Curriculum",
  "AI and Robotics Hardware Kits",
  "Composite Skill Lab",
];

export default function Page() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) {    
  
  const { name, value, type, checked } = e.target;

    const checked = (e.target as HTMLInputElement).checked;

    if (name === "schedule") {
      setForm((prev) => ({
        ...prev,
        schedule: checked ? [value] : [],
      }));
    } else if (name === "phone") {
      // Only allow numbers
      if (/^\d*$/.test(value)) {
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, phone: undefined }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "Please enter numbers only." }));
      }
    } else if (name === "email") {
      setForm((prev) => ({ ...prev, [name]: value }));
      // Validate email on change
      if (value && !/^\S+@\S+\.\S+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      } else {
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {    e.preventDefault();
    let newErrors = {};
    if (!form.fullName) newErrors.fullName = "Full Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Please enter a valid email address.";
    if (!form.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,}$/.test(form.phone)) newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    if (!form.designation) newErrors.designation = "Designation is required.";
    if (!form.organization) newErrors.organization = "Organization Name is required.";
    if (!form.state) newErrors.state = "State is required.";
    if (!form.city) newErrors.city = "City is required.";
    if (form.schedule.length === 0) newErrors.schedule = "Please select a demo option.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setSubmitted("Please correct the errors and fill all required fields.");
      setTimeout(() => setSubmitted(false), 3000);
      return;
    }
    // Here you can integrate with your backend or email service
    setSubmitted("Thank you for reaching out! Our team will contact you soon.");
    setTimeout(() => setSubmitted(false), 4000);
    setForm(initialForm);
    setErrors({});
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] flex flex-col items-center justify-center py-8 px-2">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left: Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:w-1/3 w-full flex flex-col justify-between" style={{paddingBottom: 0}}>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-[#1b2a28]">Contact Information</h2>
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#e7eaf0] p-2 rounded-lg">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#1e3a8a" strokeWidth="2" d="M12 21c-4.97-4.97-8-8.03-8-11.5A8 8 0 0 1 20 9.5C20 12.97 16.97 16.03 12 21Z"/><circle cx="12" cy="9.5" r="3" stroke="#1e3a8a" strokeWidth="2"/></svg>
              </span>
              <div>
                <div className="text-xs font-bold">ADDRESS</div>
                <div className="text-sm">445, Gera Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Phase II, Pune, Maharashtra 411057</div>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#e7eaf0] p-2 rounded-lg">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#1e3a8a" strokeWidth="2" d="M22 16.92v2a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 2 6.18 2 2 0 0 1 4 4h2a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 7.07 7.07l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92Z"/></svg>
              </span>
              <div>
                <div className="text-xs font-bold">MOBILE</div>
                <div className="text-sm">+91 9921059461<br/>+91 8623059461</div>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-[#e7eaf0] p-2 rounded-lg">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="4" stroke="#1e3a8a" strokeWidth="2"/><path stroke="#1e3a8a" strokeWidth="2" d="M22 6.5 12 13 2 6.5"/></svg>
              </span>
              <div>
                <div className="text-xs font-bold">EMAIL</div>
                <div className="text-sm">support@siddesh.co.in<br/>inquiry@siddesh.co.in<br/>careers@siddesh.co.in</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden w-full bg-[#e7eaf0] flex items-center justify-center mt-0" style={{height: 300}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.116964479836!2d73.7082731!3d18.5963116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5fa7cd7bd9d%3A0x4b878409936f10b5!2sSiddesh%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1714040000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 260 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Siddesh Technologies Map"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col gap-4 min-w-[320px]">
          <h1 className="text-3xl font-bold text-[#1b2a28] mb-2">Get in Touch</h1>
          <p className="text-[#304542] mb-4">Our experts are ready to help you navigate your next transformation. Let's start a conversation today.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input name="fullName" value={form.fullName} onChange={handleChange} required type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-[#eef0ed] placeholder-[#7a8a85] text-[#1f2d2b] outline-none" />
              {errors.fullName && <span className="text-xs text-red-600 mt-1">{errors.fullName}</span>}
            </div>
            <div className="flex flex-col">
              <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-[#eef0ed] placeholder-[#7a8a85] text-[#1f2d2b] outline-none" />
              {errors.email && <span className="text-xs text-red-600 mt-1">{errors.email}</span>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input name="phone" value={form.phone} onChange={handleChange} required type="text" placeholder="Phone Number" className="w-full p-3 rounded-lg bg-[#eef0ed] placeholder-[#7a8a85] text-[#1f2d2b] outline-none" maxLength={15} />
              {errors.phone && <span className="text-xs text-red-600 mt-1">{errors.phone}</span>}
            </div>
            <div className="flex flex-col">
              <select name="designation" value={form.designation} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#eef0ed] text-[#1f2d2b] outline-none">
                <option value="" disabled>Select Designation</option>
                {designations.map((d) => <option key={d}>{d}</option>)}
              </select>
              {errors.designation && <span className="text-xs text-red-600 mt-1">{errors.designation}</span>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <input name="organization" value={form.organization} onChange={handleChange} required type="text" placeholder="Organization Name" className="w-full p-3 rounded-lg bg-[#eef0ed] placeholder-[#7a8a85] text-[#1f2d2b] outline-none" />
              {errors.organization && <span className="text-xs text-red-600 mt-1">{errors.organization}</span>}
            </div>
            <div className="flex flex-col">
              <select name="state" value={form.state} onChange={handleChange} required className="w-full p-3 rounded-lg bg-[#eef0ed] text-[#1f2d2b] outline-none">
                <option value="" disabled>Select State</option>
                {states.map((s) => <option key={s}>{s}</option>)}
              </select>
              {errors.state && <span className="text-xs text-red-600 mt-1">{errors.state}</span>}
            </div>
            <div className="flex flex-col">
              <input name="city" value={form.city} onChange={handleChange} required type="text" placeholder="Enter City" className="w-full p-3 rounded-lg bg-[#eef0ed] placeholder-[#7a8a85] text-[#1f2d2b] outline-none" />
              {errors.city && <span className="text-xs text-red-600 mt-1">{errors.city}</span>}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[#1b2a28]">Schedule demo for <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-4">
              {scheduleOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="schedule"
                    value={opt}
                    checked={form.schedule[0] === opt}
                    onChange={handleChange}
                    className="accent-[#1e3a8a]"
                  />
                  {opt}
                </label>
              ))}
            </div>
            {errors.schedule && <span className="text-xs text-red-600 mt-1">{errors.schedule}</span>}
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" className="w-full p-3 rounded-lg bg-[#eef0ed] placeholder-[#7a8a85] text-[#1f2d2b] outline-none min-h-[100px]" />
          <button type="submit" className="w-full py-3 bg-[#1e3a8a] text-white font-semibold rounded-lg hover:scale-105 transition">
            Submit Request
          </button>
          {submitted && (
            <div className="mt-2 text-center text-sm text-green-700 bg-green-100 border border-green-300 rounded p-2">
              {submitted}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
