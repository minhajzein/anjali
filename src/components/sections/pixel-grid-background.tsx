"use client";

import React, { useEffect, useRef } from "react";

const pixelSize = 4.5;
const densityGap = 18;

class Pixel {
  // Original placement
  originX: number;
  originY: number;
  // Current drawing position
  x: number;
  y: number;
  opacity: number;
  isSpecial: boolean;
  phase: number;

  constructor(x: number, y: number) {
    this.originX = x;
    this.originY = y;
    this.x = x;
    this.y = y;
    this.opacity = 0;
    this.isSpecial = Math.random() < 0.05;
    this.phase = Math.random() * Math.PI * 2;
  }

  update(
    mouseX: number,
    mouseY: number,
    time: number,
    density: number,
    width: number,
    height: number,
  ) {
    // 1. Dynamic Shaping Logic
    // We only show pixels when the noise density at this specific moment is high
    const targetOpacity = density > 0.5 ? Math.min(1, (density - 0.5) * 4) : 0;

    // Smooth opacity transition
    this.opacity += (targetOpacity - this.opacity) * 0.1;

    // 2. Parallax + Movement
    const parallaxX = (mouseX / width - 0.5) * 30;
    const parallaxY = (mouseY / height - 0.5) * 30;

    // Subtle float animation
    const floatX = Math.sin(time + this.phase) * 3;
    const floatY = Math.cos(time + this.phase) * 3;

    this.x = this.originX + parallaxX + floatX;
    this.y = this.originY + parallaxY + floatY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.opacity < 0.05) return;

    const color = this.isSpecial
      ? "rgba(255, 255, 255,"
      : "rgba(172, 200, 162,";
    ctx.fillStyle = `${color} ${this.opacity * 0.6})`;

    // Add glow for special pixels
    if (this.isSpecial && this.opacity > 0.4) {
      ctx.shadowBlur = 5;
      ctx.shadowColor = "rgba(172, 200, 162, 0.4)";
    }

    ctx.fillRect(this.x, this.y, pixelSize, pixelSize);
    ctx.shadowBlur = 0;
  }
}

export const PixelGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixels: Pixel[] = [];
    let animationFrameId: number;
    let time = 0;

    // Multi-layered noise that evolves with time
    const getDensityAt = (x: number, y: number, t: number) => {
      // Scale coordinates for noise
      const sx = x * 0.001;
      const sy = y * 0.001;
      const st = t * 0.4; // Speed of shape evolution

      let v = 0;
      // Large evolving "continents"
      v += Math.sin(sx + st) * Math.cos(sy - st * 0.5) * 1.0;
      v += Math.sin(sx * 2.5 - st * 0.8) * Math.sin(sy * 1.5 + st) * 0.5;
      // Smaller dynamic islands
      v += Math.cos(sx * 5 + st * 1.2) * Math.sin(sy * 4 - st) * 0.25;

      return (v + 1.75) / 3.5; // Normalized 0-1
    };

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      pixels = [];
      // Create a dense grid of potential pixels
      for (let x = -50; x < width + 50; x += densityGap) {
        for (let y = -50; y < height + 50; y += densityGap) {
          pixels.push(new Pixel(x, y));
        }
      }
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Update and draw all potential pixels based on current noise state
      pixels.forEach((pixel) => {
        // Density is calculated per-frame to determine visibility
        const currentDensity = getDensityAt(pixel.originX, pixel.originY, time);
        pixel.update(mouseX, mouseY, time, currentDensity, width, height);
        pixel.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none opacity-80 mix-blend-screen"
      style={{ filter: "blur(0.2px)" }}
    />
  );
};
