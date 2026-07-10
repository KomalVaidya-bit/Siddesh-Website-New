"use client";

import ProductLandingLayout from "@/components/our-product/ProductLandingLayout";

const productData = {
  name: "Basic Electronics Kit",
  tagline: "Master embedded electronics projects",
  image: "/products-images/basic-electronic-kit.png",
  overview: "Learn the foundational grammar of modern hardware with the Basic Electronics Kit. Centered around breadboards, dynamic resistors, capacitors, transistors, and low-voltage ICs, this kit removes the complexity of programming so students can focus entirely on electrical currents. Learners construct oscillators, signal amplifiers, alarm sirens, and logical gates, building a concrete intuition for hardware design before writing their first line of code.",
  whyChoose: [
    {
      title: "Pure Analogue Circuits",
      description: "Understand Ohm's law, capacitance, and logical gates through direct component interaction without software complexity.",
      icon: "zap" as const
    },
    {
      title: "No Soldering Required",
      description: "Features high-grade spring-loaded breadboard contacts, permitting endless rebuilding and safe circuit layouts.",
      icon: "wrench" as const
    },
    {
      title: "Schematic Fluency",
      description: "Curriculum guides show schematics alongside physical component drawings to build design literacy rapidly.",
      icon: "book" as const
    }
  ],
  features: [
    {
      title: "High-Density Breadboard",
      description: "Offers robust structural slots to distribute electric signals safely using jumper wires."
    },
    {
      title: "Discrete Semiconductors",
      description: "Includes NPN/PNP transistors, rectifier diodes, and optoelectronic photo-resistors."
    },
    {
      title: "Modular Power Bench",
      description: "Onboard current-limiting voltage regulators keep operations running safely on 9V power sources."
    },
    {
      title: "Visual Component Index",
      description: "Color-coded charts allow learners to decode resistor bands and capacitor values quickly."
    }
  ],
  insideKit: [
    {
      name: "Solderless Breadboard (830 Points)",
      quantity: "1 Unit",
      description: "Double-strip breadboard with terminal columns for power rails."
    },
    {
      name: "Carbon Film Resistors Pack",
      quantity: "50 Units",
      description: "Assorted values from 10 Ohm to 1 Mega Ohm to restrict currents."
    },
    {
      name: "Electrolytic Capacitors Pack",
      quantity: "20 Units",
      description: "Assorted sizes from 1uF to 470uF used for filtering and timing."
    },
    {
      name: "555 Timer Logic IC Chip",
      quantity: "2 Units",
      description: "Legendary integrated circuit used for pulse generation and oscillations."
    },
    {
      name: "Jumper Cable Wire Assortment",
      quantity: "1 Pack",
      description: "Pre-cut and stripped solid-core wires in varying colors."
    }
  ],
  learningOutcomes: [
    "Resistor color-code decoding",
    "Capacitor charge and discharge times",
    "Transistor amplification logic",
    "555 Timer pulse-width modulation",
    "Logic OR/AND circuit diagrams",
    "Voltmeter tracking practices"
  ],
  projects: [
    {
      title: "Simple Light Detector Switch",
      description: "Combine a photoresistor with a transistor to build a circuit that activates an LED light automatically at dusk.",
      complexity: "Beginner" as const
    },
    {
      title: "Adjustable Metronome Pulse",
      description: "Use a 555 Timer IC and a potentiometer to create an audio speaker pulse rate that varies with knob rotation.",
      complexity: "Intermediate" as const
    },
    {
      title: "Touch-Activated Timer Light",
      description: "Design a circuit that keeps a light active for exactly 10 seconds after a student finger touches the sensor pads.",
      complexity: "Advanced" as const
    }
  ],
  specifications: [
    { label: "Target Age", value: "10+ Years" },
    { label: "Recommended Class", value: "Class 5 - 12" },
    { label: "Active Components", value: "555 Timer, LM358 Op-Amp, Transistors" },
    { label: "Power Supply", value: "9V PP3 Battery (Included)" },
    { label: "Safety Protections", value: "PTC Self-Resetting Fuses Onboard" },
    { label: "Documentation", value: "30-Experiment Lab Manual" },
    { label: "Warranty Support", value: "1 Year Component Replacement" }
  ],
  gallery: [
    "/products-images/basic-electronic-kit.png",
    "/products-images/basic-electronic-kit.png"
  ],
  faqs: [
    {
      question: "Is there any risk of electrical shock?",
      answer: "No. The kit runs entirely on a low-current 9V battery, making it completely safe for elementary school students."
    },
    {
      question: "Are there replacement pieces if parts get lost?",
      answer: "Yes. The resistors, capacitors, and LEDs are standard components. We also offer spare parts kits on our portal."
    },
    {
      question: "Does this require computer access?",
      answer: "No. This kit is 100% hardware-driven and works out of the box with our printed experiment manuals."
    }
  ],
  related: [
    {
      name: "IoT Training Kit",
      image: "/products-images/product1.jpg",
      slug: "iot-training-kit",
      tagline: "Empower your ideas with IoT innovation"
    },
    {
      name: "Robotics Starter Kit",
      image: "/products-images/robotics-starter-kit.png",
      slug: "robotics-starter-kit",
      tagline: "Build smart robotic systems easily"
    },
    {
      name: "Science Wall",
      image: "/ai-innovation-images/sciencewall.jpg",
      slug: "science-wall",
      tagline: "Interactive science concepts explained visually"
    }
  ]
};

export default function BasicElectronicsKitPage() {
  return <ProductLandingLayout {...productData} />;
}
