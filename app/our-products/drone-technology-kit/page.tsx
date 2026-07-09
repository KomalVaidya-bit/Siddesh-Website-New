"use client";

import ProductLandingLayout from "@/components/our-product/ProductLandingLayout";

const productData = {
  name: "Drone Technology Kit",
  tagline: "Experience next-gen aerial technology",
  image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
  overview: "Take learning to the skies with the Drone Technology Kit. This kit combines aerodynamics, battery chemistry, and telemetry sensor integration into an engaging, multi-disciplinary classroom experience. Students construct their own quadcopters, learn flight stabilization algorithms, program autonomous route plans, and explore the mathematical vectors of flight dynamics. Equipped with safe, low-power rotors and protective guards, it is the perfect safe sandbox for future aerospace engineers.",
  whyChoose: [
    {
      title: "Aerodynamic Physics",
      description: "Grash visual physics concepts of thrust, drag, weight, and lift through real-time telemetry variables.",
      icon: "wrench" as const
    },
    {
      title: "Programmable Flight Paths",
      description: "Send autonomous missions using Python scripts, linking yaw, pitch, and roll controls.",
      icon: "layers" as const
    },
    {
      title: "Safety First Frame",
      description: "Reinforced carbon fiber composite layout with elastic blade protectors to prevent classroom incidents.",
      icon: "cpu" as const
    }
  ],
  features: [
    {
      title: "Flight Controller with IMU",
      description: "Contains high-frequency gyroscopes and accelerometers for rapid stabilization adjustments."
    },
    {
      title: "Coreless Brushless ESCs",
      description: "Coordinates high-efficiency power levels directly to high-RPM motor arrays."
    },
    {
      title: "Real-Time Sensor Link",
      description: "Features barometric pressure altitude gauges and laser optical flow tracking sensors."
    },
    {
      title: "Python-Based Scripting",
      description: "Control drone altitude, trajectories, and automated takeoff/landing routines dynamically."
    }
  ],
  insideKit: [
    {
      name: "Carbon Fiber Quad Chassis",
      quantity: "1 Frame",
      description: "Lightweight structural layout built to absorb drop shocks."
    },
    {
      name: "High-RPM Brushless Motors",
      quantity: "4 Units",
      description: "Provides vertical lifting power with integrated ESC controllers."
    },
    {
      name: "Flight Controller Processor Board",
      quantity: "1 Unit",
      description: "Calculates orientation updates 400 times a second to ensure stable hovering."
    },
    {
      name: "Laser Altitude Sensor (ToF)",
      quantity: "1 Unit",
      description: "Measures ground distance accurately to maintain hovering limits."
    },
    {
      name: "2.4GHz Digital Remote Control",
      quantity: "1 Unit",
      description: "Allows manual override steering checks over radio signals."
    }
  ],
  learningOutcomes: [
    "PID stabilization algorithms",
    "Radio frequency communication paths",
    "Battery chemistry safety checks",
    "Three-axis rotation vectors",
    "Autonomous telemetry scripting",
    "Sensor calibration steps"
  ],
  projects: [
    {
      title: "Self-Stabilizing Hover Block",
      description: "Configure altitude telemetry readings to script a drone that hovers at 1.5 meters without drift.",
      complexity: "Beginner" as const
    },
    {
      title: "Optical Flow Square Flight",
      description: "Write code mapping optical surface velocity vectors to fly the drone in a perfect 2x2 meter square route.",
      complexity: "Intermediate" as const
    },
    {
      title: "Autonomous Target Land",
      description: "Program logic that detects a specific visual landing target using camera telemetry and executes soft touchdowns.",
      complexity: "Advanced" as const
    }
  ],
  specifications: [
    { label: "Target Age", value: "15+ Years" },
    { label: "Recommended Class", value: "Class 10 - College" },
    { label: "Flight Controller", value: "ARM Cortex-M4 32-bit MCU" },
    { label: "Stabilization Sensors", value: "6-Axis IMU, Barometer, Optical Flow" },
    { label: "Scripting Interface", value: "Python, C++, ROS compatible" },
    { label: "Battery Unit", value: "3.7V 600mAh Li-Po Cell" },
    { label: "Warranty Support", value: "1 Year Structural Coverage" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop"
  ],
  faqs: [
    {
      question: "Is this safe to fly inside a classroom?",
      answer: "Yes. The kit comes with a complete carbon fiber cage structure surrounding the propellers. We also pre-program flight altitude caps."
    },
    {
      question: "Do students need pilot certificates?",
      answer: "No. The drone operates on low-voltage hobby parameters indoors, below government registry regulations."
    },
    {
      question: "How long is the hover time per charge?",
      answer: "A single battery pack delivers about 8 to 10 minutes of active flight telemetry. We include two battery packs in each kit."
    }
  ],
  related: [
    {
      name: "Robotics Starter Kit",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
      slug: "robotics-starter-kit",
      tagline: "Build smart robotic systems easily"
    },
    {
      name: "VR Experience Kit",
      image: "/ai-innovation-images/virtualimg.jpg",
      slug: "vr-experience-kit",
      tagline: "Immersive VR-based learning for next-gen education"
    },
    {
      name: "AI Mechatronics Lab",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      slug: "ai-mechatronics-lab",
      tagline: "Advanced AI and mechatronics lab integration setup"
    }
  ]
};

export default function DroneTechnologyKitPage() {
  return <ProductLandingLayout {...productData} />;
}
