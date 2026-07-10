"use client";

import ProductLandingLayout from "@/components/our-product/ProductLandingLayout";

const productData = {
  name: "AI Mechatronics Lab",
  tagline: "Advanced AI and mechatronics lab integration setup",
  image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
  overview: "The AI Mechatronics Lab is a comprehensive, institutional-grade development platform bridging mechanical design, computer vision, and industrial automation. Specifically built for high schools and technical institutes, this kit links smart actuator blocks, automated conveyor units, pneumatic assemblies, and edge AI processing modules. Students design automated manufacturing pipelines, program smart robotic arms, and integrate machine learning cameras to build advanced, real-world smart factories.",
  whyChoose: [
    {
      title: "Industrial Automation",
      description: "Prepares students for modern Industry 4.0 standards by combining pneumatic valves, conveyor belts, and sensors.",
      icon: "layers" as const
    },
    {
      title: "Embedded AI Control",
      description: "Harness neural vision cameras to sort materials on moving belts automatically based on quality control models.",
      icon: "cpu" as const
    },
    {
      title: "ROS Compatibility",
      description: "Integrate Robot Operating System (ROS) scripts to command robotic arms with precision vector plans.",
      icon: "wrench" as const
    }
  ],
  features: [
    {
      title: "Smart Robotic Arm",
      description: "4-axis pick-and-place robotic arm with exchangeable vacuum suction and gripper attachments."
    },
    {
      title: "Variable Speed Conveyor Belt",
      description: "Equipped with photoelectric counting sensors and automated sorting pushers."
    },
    {
      title: "Smart Camera Vision System",
      description: "Performs real-time quality assurance inspection using preloaded convolutional neural networks."
    },
    {
      title: "Pneumatic Control Array",
      description: "Features safe 12V air solenoid valves and pistons for tactile sorting actions."
    }
  ],
  insideKit: [
    {
      name: "4-Axis Stepper Robotic Arm",
      quantity: "1 Unit",
      description: "High-precision arm with stepper motors and limit switches."
    },
    {
      name: "Smart Belt Conveyor (600mm)",
      quantity: "1 Unit",
      description: "Adjustable speed conveyor equipped with color sensors."
    },
    {
      name: "Edge AI Processing Unit",
      quantity: "1 Unit",
      description: "Quad-core computer board preloaded with Linux, ROS, and OpenCV libraries."
    },
    {
      name: "Pneumatic Piston & Valve Set",
      quantity: "1 Set",
      description: "Pneumatic sorting actuators with miniature silent air compressor."
    },
    {
      name: "Metal Workbench Base Board",
      quantity: "1 Unit",
      description: "Heavy-duty aluminum profile mounting board for safe assembly."
    }
  ],
  learningOutcomes: [
    "Industrial conveyor integration",
    "OpenCV object coordinates tracking",
    "Kinematics vector programming",
    "ROS nodes and publisher logic",
    "Solenoid valve relay circuits",
    "Smart factory pipeline controls"
  ],
  projects: [
    {
      title: "Color Sorting Conveyor Belt",
      description: "Configure the color sensor to trigger the pneumatic piston, routing blocks into distinct bins as they slide down the belt.",
      complexity: "Beginner" as const
    },
    {
      title: "AI Visual Defect Inspection",
      description: "Train a camera model to detect cracked blocks on the belt, sending coordinates to the robotic arm to discard defective pieces.",
      complexity: "Intermediate" as const
    },
    {
      title: "Fully Autonomous Smart Factory Loop",
      description: "Program a combined routine: Arm A places blocks, camera classifies them, conveyor moves them, and Arm B stores them based on AI outputs.",
      complexity: "Advanced" as const
    }
  ],
  specifications: [
    { label: "Target Age", value: "16+ Years" },
    { label: "Recommended Class", value: "Class 11 - College" },
    { label: "Onboard Controller", value: "Raspberry Pi 4 / ARM Cortex 64-bit SOC" },
    { label: "Software Support", value: "Python, C++, ROS, OpenCV, Linux OS" },
    { label: "Operating Voltages", value: "12V DC / 110V-240V AC Adapter" },
    { label: "Workbench Size", value: "600mm x 450mm base" },
    { label: "Warranty Support", value: "2 Years Institutional Warranty" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
  ],
  faqs: [
    {
      question: "What prior programming knowledge is required?",
      answer: "We recommend that students have basic familiarity with Python variables and conditional loops before starting mechatronics labs."
    },
    {
      question: "Is the air compressor loud?",
      answer: "No. The compressor included in the kit is a custom silent brushless 12V unit designed specifically for academic classrooms."
    },
    {
      question: "Can we interface this with external PLC controllers?",
      answer: "Yes, our breakout shield exposes standard industrial voltage level pins (24V inputs/outputs) to link with industrial PLC panels."
    }
  ],
  related: [
    {
      name: "AI Exploration Kit",
      image: "/products-images/product2.jpg",
      slug: "ai-exploration-kit",
      tagline: "Inspiring Tomorrow's Innovators"
    },
    {
      name: "Robotics Starter Kit",
      image: "/products-images/robotics-starter-kit.png",
      slug: "robotics-starter-kit",
      tagline: "Build smart robotic systems easily"
    },
    {
      name: "Drone Technology Kit",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
      slug: "drone-technology-kit",
      tagline: "Experience next-gen aerial technology"
    }
  ]
};

export default function AiMechatronicsLabPage() {
  return <ProductLandingLayout {...productData} />;
}
