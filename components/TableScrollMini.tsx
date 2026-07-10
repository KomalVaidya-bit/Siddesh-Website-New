





"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAME_COUNT = 39;

export default function TableScrollLeftFinal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement!.clientWidth;
    let height = window.innerHeight;

    const images: HTMLImageElement[] = [];
    const state = { frame: 0 };

    // LOAD FRAMES
    const loadImages = async () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = `/table-frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
        await new Promise((res) => (img.onload = res));
        images.push(img);
      }
      render();
    };

    const render = () => {
      const img = images[Math.floor(state.frame)];
      if (!img) return;

      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // PERFECT FIT
      const scale =
        Math.min(width / img.width, height / img.height) * 0.9;

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    loadImages();

    // 🔥 PIN ONLY LEFT SIDE
    gsap.to(state, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%",
        scrub: 1.2,
        pin: container, // ONLY LEFT SIDE PIN
      },
      onUpdate: render,
    });

    const handleResize = () => {
      width = canvas.parentElement!.clientWidth;
      height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[350vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
}