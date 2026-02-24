"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);
  const isFirstRender = prevPathnameRef.current === null;
  const isSameRouteRemount = prevPathnameRef.current === pathname;

  // Only run enter animation when we've actually navigated (not first load, not Strict Mode remount)
  const shouldAnimateEnter = !isFirstRender && !isSameRouteRemount;

  useEffect(() => {
    prevPathnameRef.current = pathname;
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={
          shouldAnimateEnter
            ? { opacity: 0, y: 10 }
            : { opacity: 1, y: 0 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.35,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="w-full flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
