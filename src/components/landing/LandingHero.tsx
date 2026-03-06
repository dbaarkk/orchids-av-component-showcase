"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Full Stack Website Developer", "Founder of Sovereign Sites"];

export function LandingHero() {
  const [scrollVisible, setScrollVisible] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollVisible(window.scrollY <= 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-24 flex flex-col items-center text-center px-4 overflow-hidden min-h-[85vh] justify-center bg-white font-plus-jakarta">
      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2 mb-8 bg-secondary border border-black/5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse" />
        Available for new projects 2026
      </motion.div>

      {/* Main heading — portfolio */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="text-5xl md:text-[8rem] font-black tracking-tighter mb-4 max-w-6xl leading-[0.85] text-black"
      >
        Aaryaveer Sharma&apos;s
        <br />
        <span className="text-muted-foreground italic font-medium">Portfolio</span>
      </motion.h1>

      {/* Flipping role subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        className="relative h-10 flex items-center justify-center mb-10 overflow-hidden"
        style={{ minWidth: 380 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIndex}
            initial={{ rotateX: -90, opacity: 0, y: 20 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 90, opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute text-lg md:text-2xl font-bold tracking-tight text-black"
            style={{ transformOrigin: "center" }}
          >
            {roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed tracking-tight"
      >
        Specializing in bespoke web solutions — crafted for businesses and individuals who refuse to settle for ordinary.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        className="flex items-center justify-center mb-16"
      >
        <Link href="https://sovereignsites.in" target="_blank" className="group">
          <button className="bg-black text-white pr-8 pl-2 py-2 rounded-full text-base font-bold hover:opacity-90 transition-all flex items-center gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0">
            <div className="bg-white rounded-full p-3 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            Sovereign Sites
          </button>
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-black/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-black"
          />
        </div>
      </motion.div>
    </section>
  );
}
