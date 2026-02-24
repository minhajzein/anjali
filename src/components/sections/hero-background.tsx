"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

/**
 * Hero background orbs animated with GSAP — smooth, organic motion.
 */
export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const orbs = [orb1Ref.current, orb2Ref.current, orb3Ref.current].filter(
        Boolean,
      ) as HTMLElement[];

      // Entrance: orbs fade and scale in
      gsap.fromTo(
        orbs,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2,
        },
      );

      // Orb 1 — top-left: slow drift + gentle scale pulse
      gsap.to(orb1Ref.current, {
        x: "4%",
        y: "-3%",
        scale: 1.08,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });

      // Orb 2 — bottom-right: opposite phase, slightly longer
      gsap.to(orb2Ref.current, {
        x: "-3%",
        y: "4%",
        scale: 1.06,
        duration: 6.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });

      // Orb 3 — center-right: subtle vertical float + scale
      gsap.to(orb3Ref.current, {
        y: "-4%",
        scale: 1.1,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Large soft orb — top left */}
      <div
        ref={orb1Ref}
        className="absolute -top-[40%] -left-[20%] w-[80%] aspect-square rounded-full opacity-[0.12] dark:opacity-[0.08] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, var(--secondary) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Soft orb — bottom right */}
      <div
        ref={orb2Ref}
        className="absolute -bottom-[30%] -right-[15%] w-[70%] aspect-square rounded-full opacity-[0.1] dark:opacity-[0.06] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, var(--secondary) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Accent orb — center-right */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[50%] aspect-square pointer-events-none">
        <div
          ref={orb3Ref}
          className="w-full h-full rounded-full opacity-[0.06] dark:opacity-[0.04] will-change-transform"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
      </div>
    </div>
  );
}
