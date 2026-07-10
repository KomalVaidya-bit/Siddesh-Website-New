"use client";

import ProductLandingLayout from "@/components/our-product/ProductLandingLayout";

const productData = {
  name: "IoT Training Kit",
  tagline: "Empower your ideas with IoT innovation",
  image: "/products-images/product1.jpg",
  overview: "The IoT Training Kit is designed to bridge the gap between abstract software algorithms and real-world physical automation. It includes highly integrated microcontroller modules, an array of sensors, and cloud communication protocols that enable students to build connected, smart environments from scratch. From home automation systems to agricultural telemetry, this kit gives students the tools to grasp internet protocols, sensory data conversion, and remote device controls.",
  whyChoose: [
    {
      title: "Real-World Protocols",
      description: "Students learn standard IoT connectivity protocols like MQTT, HTTP, and WebSockets directly on embedded systems.",
      icon: "cpu" as const
    },
    {
      title: "Plug-and-Play Sensors",
      description: "Includes sensor shields that avoid complex soldering, enabling quick prototypes and rapid feedback loops.",
      icon: "wrench" as const
    },
    {
      title: "Cloud Integration",
      description: "Includes modules to push telemetry data directly to cloud dashboards like Adafruit IO, ThingSpeak, or Firebase.",
      icon: "layers" as const
    }
  ],
  features: [
    {
      title: "ESP32 Wi-Fi & Bluetooth MCU",
      description: "A dual-core controller capable of local computing and simultaneous network communication."
    },
    {
      title: "Multi-Sensor Shield",
      description: "Features temperature, humidity, light, motion, and ultrasonic proximity sensors out of the box."
    },
    {
      title: "Active Actuators",
      description: "Includes relay modules, hobby servos, piezoceramic buzzers, and programmable RGB LEDs."
    },
    {
      title: "Comprehensive Curriculum",
      description: "Step-by-step guides for 15+ IoT experiments aligned with secondary school educational standards."
    }
  ],
  insideKit: [
    {
      name: "ESP32 Development Board",
      quantity: "1 Unit",
      description: "Core microcontroller with integrated Wi-Fi and Bluetooth capabilities."
    },
    {
      name: "IoT Expansion Shield",
      quantity: "1 Unit",
      description: "Custom expansion board for plug-and-play sensor connections without breadboards."
    },
    {
      name: "DHT11 Temperature & Humidity Sensor",
      quantity: "1 Unit",
      description: "Reads atmospheric humidity and temperature telemetry."
    },
    {
      name: "Ultrasonic Distance Sensor",
      quantity: "1 Unit",
      description: "Calculates ranges based on high-frequency sound reflection."
    },
    {
      name: "Single-Channel Relay Module",
      quantity: "1 Unit",
      description: "Allows microcontroller signals to switch high-voltage electrical appliances safely."
    },
    {
      name: "Mini Servo Motor (SG90)",
      quantity: "1 Unit",
      description: "Precise 180-degree motor positioning for physical lock and gate mockups."
    }
  ],
  learningOutcomes: [
    "Embedded programming in C++",
    "Analog vs. digital signal processing",
    "Network configurations & SSID linking",
    "Cloud dashboard telemetry charts",
    "JSON parsing on microcontrollers",
    "Relay control mechanisms"
  ],
  projects: [
    {
      title: "Smart Home Automated Door Lock",
      description: "Build a lock that triggers via a smartphone app using local WebSocket control protocols.",
      complexity: "Beginner" as const
    },
    {
      title: "Automated Plant Watering System",
      description: "Design a moisture sensor feedback loop that activates a mini-water pump when soil moisture falls below threshold levels.",
      complexity: "Intermediate" as const
    },
    {
      title: "Cloud-Based Weather Telemetry Station",
      description: "Log atmospheric parameters hourly to an external dashboard, tracking weather trends over time.",
      complexity: "Advanced" as const
    }
  ],
  specifications: [
    { label: "Target Age", value: "12+ Years" },
    { label: "Recommended Class", value: "Class 7 - 12" },
    { label: "Main Processor", value: "ESP32 (Dual-Core, 240MHz)" },
    { label: "IDE Compatibility", value: "Arduino IDE, VS Code, MicroPython" },
    { label: "Power Supply", value: "5V USB / 9V DC Adapter" },
    { label: "Hardware Standards", value: "CE, FCC Certified Components" },
    { label: "Warranty Support", value: "1 Year Limited Warranty" }
  ],
  gallery: [
    "/products-images/product1.jpg",
    "/products-images/product1.jpg",
    "/products-images/product1.jpg"
  ],
  faqs: [
    {
      question: "Do students need to know coding before using this kit?",
      answer: "No. The kit is shipped with basic modular Blockly/Scratch blocks to introduce block logic, before transitioning into writing raw C++ code using our guides."
    },
    {
      question: "Does the kit require an active internet connection to work?",
      answer: "No. For simple projects, local communication over LAN or point-to-point Wi-Fi works. Internet is only required when uploading data to cloud databases."
    },
    {
      question: "Are additional sensors sold separately?",
      answer: "Yes, our custom shield is compatible with standard Grove and standard pin sensors, so you can expand the kit with custom components later."
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
      name: "Basic Electronics Kit",
      image: "/products-images/basic-electronic-kit.png",
      slug: "basic-electronics-kit",
      tagline: "Master embedded electronics projects"
    }
  ]
};

export default function IotKitPage() {
  return <ProductLandingLayout {...productData} />;
}
