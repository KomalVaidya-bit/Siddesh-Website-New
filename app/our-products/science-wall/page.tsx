"use client";

import ProductLandingLayout from "@/components/our-product/ProductLandingLayout";

const productData = {
  name: "Science Wall",
  tagline: "Interactive science concepts explained visually",
  image: "/ai-innovation-images/sciencewall.jpg",
  overview: "The Science Wall is an interactive, wall-mounted educational array designed to make core physics, dynamics, and mechanical concepts visible. Featuring modular magnetic panels, dynamic pulleys, gear assemblies, and electronic circuit overlays, this product turns static classroom walls into shared collaborative experiments. Students physically adjust gears, set up simple machines, measure electrical current flows, and observe kinetic energy conversion in real time.",
  whyChoose: [
    {
      title: "Tactile Kinetic Units",
      description: "Visual mechanical linkages help students grasp force multiplication and torque equations through physical setups.",
      icon: "wrench" as const
    },
    {
      title: "Space-Saving Array",
      description: "Wall-mounted structures transform underutilized vertical surfaces into a safe, collaborative science zone.",
      icon: "layers" as const
    },
    {
      title: "Safe Electrical Grids",
      description: "Includes low-voltage overlays to demonstrate current circuits, logic gates, and magnet induction safely.",
      icon: "zap" as const
    }
  ],
  features: [
    {
      title: "Modular Panel System",
      description: "Easily slide, rearrange, or snap various physical experiment templates onto magnetic grids."
    },
    {
      title: "Kinetic Gearbox Modules",
      description: "Physical clear-housing gear modules let students configure mechanical ratios manually."
    },
    {
      title: "Magnetic Force Telemetry",
      description: "Features load cell displays to measure simple machine tensions and forces directly."
    },
    {
      title: "Interactive Software Guides",
      description: "Access structured curriculum modules that walk classes through physics, mechanical, and sound wave theories."
    }
  ],
  insideKit: [
    {
      name: "Magnetic Grid Steel Frame",
      quantity: "1 Array",
      description: "Rugged wall-mounting grid frame with integrated structural tabs."
    },
    {
      name: "Force Pulley Setups",
      quantity: "1 Set",
      description: "Fixed and floating magnetic pulley blocks with cords."
    },
    {
      name: "Gearing Assembly Set",
      quantity: "1 Set",
      description: "Various spur gears, drivers, and visual indicators."
    },
    {
      name: "Analog Sensor Gauge Module",
      quantity: "2 Units",
      description: "Tension, current, and sound level analog visual gauges."
    },
    {
      name: "Wall Safety Bolt Set",
      quantity: "1 Set",
      description: "Heavy-duty masonry anchors and bracket braces."
    }
  ],
  learningOutcomes: [
    "Simple machine mechanical advantages",
    "Gearing velocity ratio calculations",
    "Kinetic to potential energy conversions",
    "Electrical circuit basics (series vs parallel)",
    "Pneumatics logic configurations",
    "Sound wave frequency measurements"
  ],
  projects: [
    {
      title: "Compound Pulley Lift Challenge",
      description: "Configure a 4-pulley compound lift that cuts the measured input force threshold by 75% on the dial.",
      complexity: "Beginner" as const
    },
    {
      title: "Mechanical Clock Gearing Array",
      description: "Link spur gear modules to build a mechanical system where the output turns at exactly 1/60th of the input driver.",
      complexity: "Intermediate" as const
    },
    {
      title: "Logical Or/And Logic Gate Circuits",
      description: "Assemble physical switch modules on the electrical panel to verify Boolean truth tables using LED bulbs.",
      complexity: "Advanced" as const
    }
  ],
  specifications: [
    { label: "Target Age", value: "8+ Years" },
    { label: "Recommended Class", value: "Class 3 - 10" },
    { label: "Panel Layout Dimensions", value: "8 Feet (W) x 4 Feet (H)" },
    { label: "Board Material", value: "Stainless Steel / Polycarbonate Overlays" },
    { label: "Operating Voltages", value: "Safe 5V DC via USB (Low-voltage)" },
    { label: "Accreditation", value: "STEM Approved Visual Curriculum" },
    { label: "Warranty Support", value: "2 Years Structural Warranty" }
  ],
  gallery: [
    "/ai-innovation-images/sciencewall.jpg",
    "/ai-innovation-images/sciencewall.jpg",
    "/ai-innovation-images/sciencewall.jpg"
  ],
  faqs: [
    {
      question: "Is installation included in the product cost?",
      answer: "Yes, our certified technical teams handle masonry installation and safety certification directly at your school."
    },
    {
      question: "Can we clean the panel surfaces?",
      answer: "Yes. The panels feature scratch-proof whiteboard coatings, allowing students to write formulas directly around the gear setups."
    },
    {
      question: "Does the wall need an active power outlet?",
      answer: "A single 5V USB connection (similar to a phone charger) is needed only if using the electronic circuit module."
    }
  ],
  related: [
    {
      name: "VR Experience Kit",
      image: "/ai-innovation-images/virtualimg.jpg",
      slug: "vr-experience-kit",
      tagline: "Immersive VR-based learning for next-gen education"
    },
    {
      name: "Basic Electronics Kit",
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1200&auto=format&fit=crop",
      slug: "basic-electronics-kit",
      tagline: "Master embedded electronics projects"
    },
    {
      name: "Robotics Starter Kit",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
      slug: "robotics-starter-kit",
      tagline: "Build smart robotic systems easily"
    }
  ]
};

export default function ScienceWallPage() {
  return <ProductLandingLayout {...productData} />;
}
