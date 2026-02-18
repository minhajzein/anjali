"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PixelGridBackground } from "./pixel-grid-background";

gsap.registerPlugin(ScrollTrigger);

// Dynamically import with ssr:false — prevents hydration mismatch from
// the A/B slot system that uses dynamic inline styles (zIndex, opacity).
const HeroImageSlideshow = dynamic(
  () =>
    import("./hero-image-slideshow").then((m) => ({
      default: m.HeroImageSlideshow,
    })),
  {
    ssr: false,
    // Show the first image as a static placeholder while JS loads
    loading: () => (
      <div className="order-1 lg:order-2 relative h-[90%] flex flex-col justify-center items-center hero-image-container">
        <div className="relative aspect-[4/5] md:aspect-square h-[80%] lg:aspect-[4/5] w-full max-w-[500px] mx-auto rounded-[2rem] shadow-2xl overflow-hidden">
          <Image
            src="/prof-anjoo.JPG"
            alt="Anjali - Digital Marketing Specialist"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
        </div>
      </div>
    ),
  },
);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block char"
        style={{ display: "inline-block", willChange: "transform" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".hero-title-line") as HTMLElement[];
      lines.forEach((line, i) => {
        const chars = line.querySelectorAll(".char");
        gsap.from(chars, {
          y: "110%",
          rotationX: -60,
          opacity: 0,
          duration: 1.4,
          stagger: 0.03,
          ease: "expo.out",
          delay: i * 0.1,
        });
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-ctas", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.4,
        ease: "power3.out",
      });

      gsap.from(".hero-image-container", {
        opacity: 0,
        scale: 0.9,
        x: 50,
        duration: 1.8,
        delay: 0.8,
        ease: "expo.out",
      });

      gsap.from(".hero-decor", {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 1.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center px-6 pb-4 lg:pt-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wider">
              DIGITAL MARKETING SPECIALIST
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-primary mb-8 perspective-1000">
              <div className="hero-title-line overflow-hidden pb-2">
                {splitText("ELEVATING")}
              </div>
              <div className="hero-title-line overflow-hidden text-secondary pb-2">
                {splitText("BRANDS")}
              </div>
              <div className="hero-title-line overflow-hidden pb-2">
                {splitText("IN DIGITAL.")}
              </div>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-foreground/70 max-w-xl mb-12 leading-relaxed">
              Strategic digital marketing executive focused on data-driven
              growth, creative storytelling, and measurable results. Turning
              visions into market-leading success.
            </p>

            <div className="hero-ctas flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 h-12" asChild>
                <Link href="/portfolio">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Image Slideshow — client-only via dynamic import (ssr: false) */}
          <HeroImageSlideshow />
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/4 h-[80%] bg-secondary/5 -z-10 rounded-l-[5rem] hidden lg:block" />

      {/* Interactive Pixel Grid Background */}
      <PixelGridBackground />

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(172,200,162,0.05),transparent_70%)] -z-20" />
    </section>
  );
}
