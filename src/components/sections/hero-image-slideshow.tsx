"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";

const HERO_IMAGES = ["/prof-anjoo.JPG", "/hero-3.jpg"];

function isSafari(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return (
    ua.includes("Safari") &&
    !ua.includes("Chrome") &&
    !ua.includes("Chromium")
  );
}

export function HeroImageSlideshow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgARef = useRef<HTMLDivElement>(null);
  const imgBRef = useRef<HTMLDivElement>(null);
  const imgTurbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const imgDisplacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const isTransitioningRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");
  // Start false so Safari never gets filter on first paint; effect sets true for other browsers
  const [useFilter, setUseFilter] = useState(false);

  const startTransition = useCallback(
    (targetIndex?: number) => {
      if (isTransitioningRef.current) return;
      // Skip filter refs check when filter is disabled (e.g. Safari) — crossfade only
      if (useFilter && (!imgDisplacementRef.current || !imgTurbulenceRef.current))
        return;

      const target =
        targetIndex !== undefined
          ? targetIndex
          : (currentIndex + 1) % HERO_IMAGES.length;
      if (target === currentIndex) return;

      isTransitioningRef.current = true;

      // Update the hidden slot with the target image
      setNextIndex(target);

      // Use requestAnimationFrame to ensure the src update has been processed by React
      // before starting the GSAP animation on the ref.
      requestAnimationFrame(() => {
        const incoming = activeSlot === "A" ? imgBRef.current : imgARef.current;
        const outgoing = activeSlot === "A" ? imgARef.current : imgBRef.current;

        if (!incoming || !outgoing) {
          isTransitioningRef.current = false;
          return;
        }

        ctxRef.current?.add(() => {
          const useDistortion =
            useFilter &&
            imgDisplacementRef.current &&
            imgTurbulenceRef.current;

          if (useDistortion) {
            gsap.set(imgDisplacementRef.current, { attr: { scale: 0 } });
            gsap.set(imgTurbulenceRef.current, { attr: { seed: 1 } });
          }

          // Ensure both are ready for the crossfade
          gsap.set(incoming, { opacity: 1, zIndex: 1 });
          gsap.set(outgoing, { opacity: 1, zIndex: 2 });

          const tl = gsap.timeline({
            onComplete: () => {
              setCurrentIndex(target);
              setActiveSlot((prev) => (prev === "A" ? "B" : "A"));
              isTransitioningRef.current = false;
            },
          });

          if (useDistortion) {
            tl.to(
              imgDisplacementRef.current,
              { attr: { scale: 120 }, duration: 0.7, ease: "power2.in" },
              0,
            );
            tl.to(
              imgTurbulenceRef.current,
              { attr: { seed: 20 }, duration: 0.7, ease: "none" },
              0,
            );
          }

          tl.to(
            outgoing,
            { opacity: 0, duration: 0.4, ease: "power2.in" },
            useDistortion ? 0.4 : 0,
          );

          if (useDistortion) {
            tl.to(
              imgDisplacementRef.current,
              { attr: { scale: 0 }, duration: 0.5, ease: "power2.out" },
              0.8,
            );
          }
        });
      });
    },
    [currentIndex, activeSlot, useFilter],
  );

  // Use a stable ref for the transition function to avoid clearing the interval unnecessarily
  const transitionRef = useRef(startTransition);
  useEffect(() => {
    transitionRef.current = startTransition;
  }, [startTransition]);

  // Enable SVG filter only on non-Safari so the hero image is visible everywhere (Safari hides content with filter: url())
  useEffect(() => {
    const isSafariBrowser = isSafari();
    queueMicrotask(() => setUseFilter(!isSafariBrowser));
  }, []);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {}, containerRef);

    // Set a strict interval that doesn't reset on every transition
    timerRef.current = setInterval(() => {
      transitionRef.current();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="order-1 lg:order-2 relative h-[90%] flex flex-col justify-center mt-10 md:mt-0 items-center hero-image-container"
    >
      <div
        className="relative aspect-[4/5] md:aspect-square h-[80%] lg:aspect-[4/5] w-full max-w-[500px] mx-auto rounded-[2rem] shadow-2xl overflow-hidden hero-image-wrapper"
        style={{
          filter: useFilter ? "url(#image-distortion)" : "none",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "visible" as const,
          backfaceVisibility: "visible",
        }}
      >
        {/* Slot A */}
        <div
          ref={imgARef}
          className="absolute inset-0"
          style={{
            zIndex: activeSlot === "A" ? 2 : 1,
            opacity: activeSlot === "A" ? 1 : 0,
          }}
        >
          <Image
            src={HERO_IMAGES[activeSlot === "A" ? currentIndex : nextIndex]}
            alt="Anjali - Digital Marketing Specialist"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Slot B */}
        <div
          ref={imgBRef}
          className="absolute inset-0"
          style={{
            zIndex: activeSlot === "B" ? 2 : 1,
            opacity: activeSlot === "B" ? 1 : 0,
          }}
        >
          <Image
            src={HERO_IMAGES[activeSlot === "B" ? currentIndex : nextIndex]}
            alt="Anjali - Digital Marketing Specialist"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none z-10" />
      </div>

      {/* Image indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isTransitioningRef.current && i !== currentIndex) {
                startTransition(i);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-secondary w-6" : "bg-foreground/30 w-2"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Floating Stats Decor */}
      <div className="hero-decor absolute bottom-0 left-0 bg-card p-6 rounded-2xl shadow-xl border border-secondary/20 hidden md:block">
        <div className="text-3xl font-bold text-primary">4+ YRS</div>
        <div className="text-xs font-semibold section-title-accent uppercase tracking-widest">
          Expertise
        </div>
      </div>

      <div className="hero-decor absolute top-0 right-0 bg-secondary p-6 rounded-2xl shadow-xl text-primary hidden md:block">
        <div className="text-3xl font-bold">100%</div>
        <div className="text-xs font-semibold uppercase tracking-widest">
          Avg. ROI
        </div>
      </div>

      {/* SVG Distortion Filter */}
      <div
        className="absolute top-0 left-0 w-[1px] h-[1px] opacity-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1 1">
          <filter
            id="image-distortion"
            filterUnits="userSpaceOnUse"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              ref={imgTurbulenceRef}
              type="turbulence"
              baseFrequency="0.015"
              numOctaves="3"
              seed="1"
              result="noise"
            />
            <feDisplacementMap
              ref={imgDisplacementRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </div>
    </div>
  );
}
