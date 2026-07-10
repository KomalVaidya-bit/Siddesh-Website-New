"use client";

import ProductLandingLayout from "@/components/our-product/ProductLandingLayout";

const productData = {
  name: "VR Experience Kit",
  tagline: "Immersive VR-based learning for next-gen education",
  image: "/products-images/vrar-kit.png",
  overview: "The VR Experience Kit shifts classroom learning from passive observation into active immersion. Integrating premium high-definition virtual reality headsets, motion-tracked controllers, and interactive mechatronic simulations, this kit allows students to conduct virtual lab experiments that would normally be too hazardous or expensive. Explore molecules, take interactive tours of planetary systems, or debug electrical setups in a safe, engaging virtual environment.",
  whyChoose: [
    {
      title: "Interactive Sandbox",
      description: "Perform simulated laboratory runs (chemistry reactions, physics dynamics) with zero chemical waste or danger.",
      icon: "layers" as const
    },
    {
      title: "Active Kinematics",
      description: "Motion controllers translate student hand orientations directly into 3D vector coordinates on screen.",
      icon: "wrench" as const
    },
    {
      title: "High Retention Rates",
      description: "Visual scale models increase comprehension speeds for complex spatial structures like molecules and galaxies.",
      icon: "grad" as const
    }
  ],
  features: [
    {
      title: "Standalone VR Headset",
      description: "High-resolution display matrix with integrated tracking modules, avoiding external PC wiring."
    },
    {
      title: "Motion Tracking Controllers",
      description: "Allows high-precision picking, placing, assembly, and slicing operations inside virtual space."
    },
    {
      title: "Curated Science Catalog",
      description: "Pre-installed simulations for biology cell tours, electric grids, and historical timeline walkthroughs."
    },
    {
      title: "WebVR Scripting Interface",
      description: "Students learn how to code basic virtual worlds using Javascript and A-Frame layout elements."
    }
  ],
  insideKit: [
    {
      name: "Siddesh Standalone VR Headset",
      quantity: "1 Unit",
      description: "Rechargeable, high-res VR visor with active cooling vents."
    },
    {
      name: "Spatial Motion Controllers",
      quantity: "2 Units",
      description: "Allows natural hand tracking interactions inside spatial modules."
    },
    {
      name: "Classroom Router Station",
      quantity: "1 Unit",
      description: "High-frequency local router coordinates multi-student multiplayer labs."
    },
    {
      name: "Siddesh Education Portal License",
      quantity: "1 User",
      description: "One-year digital access card to downoad updated simulation directories."
    },
    {
      name: "Reinforced EVA Storage Case",
      quantity: "1 Case",
      description: "Protective padded casing for secure storage of lenses."
    }
  ],
  learningOutcomes: [
    "3D coordinate spaces (X, Y, Z)",
    "Virtual environment graphics loops",
    "Physics simulation collisions",
    "Interactive UI layout inside 3D space",
    "WebVR basic HTML structures",
    "Multiplayer client server synchronization"
  ],
  projects: [
    {
      title: "My First WebVR Solar System",
      description: "Use Javascript variables to construct orbiting planets in WebVR, adjusting relative speeds.",
      complexity: "Beginner" as const
    },
    {
      title: "Virtual Physics Friction Slope",
      description: "Script custom sliding blocks on virtual ramps, tracking dynamic acceleration curves based on surface material scripts.",
      complexity: "Intermediate" as const
    },
    {
      title: "Automated Assembly Diagnostic Tool",
      description: "Code a spatial walkthrough that forces students to grab and assemble circuit parts in the correct logical sequence.",
      complexity: "Advanced" as const
    }
  ],
  specifications: [
    { label: "Target Age", value: "11+ Years" },
    { label: "Recommended Class", value: "Class 6 - College" },
    { label: "Display Resolution", value: "Dual 2K Panels (90Hz Refresh rate)" },
    { label: "Processor Unit", value: "Qualcomm Snapdragon Standalone Edge XR Processor" },
    { label: "Programming IDE", value: "WebVR, Unity 3D, Unreal Engine" },
    { label: "Connectivity", value: "Wi-Fi 6E, Bluetooth 5.2" },
    { label: "Warranty Support", value: "1 Year Hardware Coverage" }
  ],
  gallery: [
    "/products-images/vrar-kit.png",
    "/products-images/vrar-kit.png",
    "/products-images/vrar-kit.png"
  ],
  faqs: [
    {
      question: "Will students experience motion sickness?",
      answer: "We utilize low-latency 90Hz panels and restrict simulations to fixed positions or teleportation paths, which minimizes disorientation."
    },
    {
      question: "Can multiple headsets run in the same classroom?",
      answer: "Yes, our router synchronizes positions locally, allowing group members to collaborate inside the same virtual workspace."
    },
    {
      question: "Can teachers review student actions inside VR?",
      answer: "Yes, the headset stream is compatible with standard screen casting, allowing teachers to monitor progress on a shared display."
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
      name: "Science Wall",
      image: "/ai-innovation-images/sciencewall.jpg",
      slug: "science-wall",
      tagline: "Interactive science concepts explained visually"
    },
    {
      name: "Drone Technology Kit",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
      slug: "drone-technology-kit",
      tagline: "Experience next-gen aerial technology"
    }
  ]
};

export default function VrExperienceKitPage() {
  return <ProductLandingLayout {...productData} />;
}
