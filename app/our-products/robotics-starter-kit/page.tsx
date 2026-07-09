"use client";

import ProductLandingLayout from "@/components/our-product/ProductLandingLayout";

const productData = {
  name: "Robotics Starter Kit",
  tagline: "Build smart robotic systems easily",
  image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
  overview: "The Robotics Starter Kit is an interactive introduction to mechanical engineering, kinematics, and electronic design. Featuring precision servo motors, heavy-duty structural frames, and customizable wheels, this kit enables students to assemble line-following rovers, obstacle-avoiding cars, and multi-jointed robotic arms. By programming real-time motor outputs and processing tactile switch inputs, learners understand modern industrial robotics basics.",
  whyChoose: [
    {
      title: "Kinematic Mechanics",
      description: "Learn about rotational vectors, gear ratios, and torque calculation with real metal/polycarbonate components.",
      icon: "wrench" as const
    },
    {
      title: "Modular Chassis",
      description: "Rebuild the base chassis into 3 completely different configurations: 2WD Rover, Robot Arm, or Smart Forklift.",
      icon: "layers" as const
    },
    {
      title: "Integrated Drivers",
      description: "Onboard dual H-bridge motor drivers protect circuitry from current spikes during physical stress testing.",
      icon: "cpu" as const
    }
  ],
  features: [
    {
      title: "Dual H-Bridge Motor Controller",
      description: "Directly regulates speed and direction parameters of multiple high-torque geared DC motors."
    },
    {
      title: "Ultrasonic Ranging Unit",
      description: "Helps robotic rovers calculate distance thresholds to avoid obstacles in real time."
    },
    {
      title: "Line Tracking Sensors",
      description: "Reads high-contrast track paths utilizing infrared reflection arrays."
    },
    {
      title: "Multi-Joint Arm Assembly",
      description: "Enables pickup and drop routines using precision positional micro servos."
    }
  ],
  insideKit: [
    {
      name: "Chassis Structure Frame Plate",
      quantity: "1 Set",
      description: "Durable, laser-cut mounting plates for structural assembly."
    },
    {
      name: "High-Torque DC Geared Motors",
      quantity: "2 Units",
      description: "Provides driving power with integrated metal gear reduction units."
    },
    {
      name: "SG90 Structural Servos",
      quantity: "2 Units",
      description: "Accurate servo controllers for robot hand gripper operations."
    },
    {
      name: "Infrared Line-Follower Shield",
      quantity: "1 Unit",
      description: "Sensory strip that reads black/white paths under the robot frame."
    },
    {
      name: "Rechargeable Lithium Battery Pack",
      quantity: "1 Unit",
      description: "High-capacity power cell for mobile test operations."
    }
  ],
  learningOutcomes: [
    "Motor rotational speed controls",
    "Servo PWM duty cycle settings",
    "Feedback loops for navigation",
    "Mechanical assembly and gearing",
    "Sensor data comparison code",
    "Chassis equilibrium properties"
  ],
  projects: [
    {
      title: "Obstacle Avoiding Mobile Rover",
      description: "Assemble a rover that sweeps its ultrasonic sensor using a servo, plotting an open route around walls.",
      complexity: "Beginner" as const
    },
    {
      title: "High-Contrast Track Line Follower",
      description: "Program logic to evaluate differential speeds based on three IR sensor triggers to guide a rover along tracks.",
      complexity: "Intermediate" as const
    },
    {
      title: "3-DOF Remote Robotic Picker",
      description: "Program a jointed claw assembly that coordinates vertical and grab motor axes to sort blocks dynamically.",
      complexity: "Advanced" as const
    }
  ],
  specifications: [
    { label: "Target Age", value: "10+ Years" },
    { label: "Recommended Class", value: "Class 5 - 10" },
    { label: "Main Processor", value: "Atmel ATmega328P 8-bit MCU" },
    { label: "Motor Drivers", value: "L298N Dual H-Bridge Driver" },
    { label: "Programming IDE", value: "Scratch Blocks, Arduino IDE" },
    { label: "Operating Power", value: "7.4V Li-ion Rechargeable Pack" },
    { label: "Warranty Support", value: "1 Year Structural Warranty" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop"
  ],
  faqs: [
    {
      question: "Are assembly tools included in the box?",
      answer: "Yes. Every kit is shipped with hex drivers, custom mounting bolts, and a detailed visual instruction booklet."
    },
    {
      question: "Can we control the robot using a phone?",
      answer: "Yes, the controller board supports Bluetooth attachments, allowing you to deploy the Siddesh Android app for manual override overrides."
    },
    {
      question: "What programming languages are taught?",
      answer: "We support Blockly for younger students, transitioning directly into raw C++ sketches on the Arduino environment for Class 8+."
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
      name: "Drone Technology Kit",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
      slug: "drone-technology-kit",
      tagline: "Experience next-gen aerial technology"
    },
    {
      name: "Basic Electronics Kit",
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1200&auto=format&fit=crop",
      slug: "basic-electronics-kit",
      tagline: "Master embedded electronics projects"
    }
  ]
};

export default function RoboticsStarterKitPage() {
  return <ProductLandingLayout {...productData} />;
}
