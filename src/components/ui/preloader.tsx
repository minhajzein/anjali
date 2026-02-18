"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Preloader = () => {
  const [percentage, setPercentage] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Simulate loading progress
      const progress = { value: 0 };
      gsap.to(progress, {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          setPercentage(Math.round(progress.value));
        },
        onComplete: () => {
          // Unlock scroll
          document.body.style.overflow = "auto";

          // Final Reveal Sequence
          tl.to(counterRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          })
            .to(
              barRef.current,
              {
                scaleY: 0,
                transformOrigin: "bottom",
                duration: 0.8,
                ease: "expo.inOut",
              },
              "-=0.2",
            )
            .to(
              textRef.current,
              {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "expo.inOut",
              },
              "-=0.6",
            )
            .to(
              preloaderRef.current,
              {
                y: "-100%",
                duration: 1.2,
                ease: "expo.inOut",
              },
              "-=0.4",
            );
        },
      });

      // Subtle initial animations
      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      <div className="relative w-full max-w-sm px-10">
        {/* Brand Text */}
        <div ref={textRef} className="text-primary-foreground mb-8 text-center">
          <h2 className="text-2xl font-black tracking-[0.3em] uppercase mb-2">
            Anjali
          </h2>
          <p className="text-[10px] tracking-[0.5em] uppercase opacity-40">
            Strategic Marketing
          </p>
        </div>

        {/* Percentage Counter */}
        <div
          ref={counterRef}
          className="absolute right-10 bottom-full mb-4 text-7xl font-black text-secondary leading-none select-none tabular-nums"
        >
          {percentage}%
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-[2px] w-full bg-secondary/10 overflow-hidden">
          {/* Active Bar */}
          <div
            ref={barRef}
            className="absolute left-0 top-0 h-full bg-secondary"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-10 left-10 text-primary-foreground/5 text-[15vw] font-black pointer-events-none select-none leading-none whitespace-nowrap">
        REDEFINING DIGITAL
      </div>
    </div>
  );
};
