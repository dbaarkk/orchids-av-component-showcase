"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
    <section
      className="relative pt-40 pb-24 flex flex-col items-center text-center px-4 overflow-hidden min-h-[85vh] justify-center font-plus-jakarta"
    >
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-top -z-20"
        sizes="100vw"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none -z-10" />

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase text-white"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
        Available for new projects 2026
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative z-10 text-5xl md:text-[8rem] font-black tracking-tighter mb-4 max-w-6xl leading-[0.85] text-white"
        style={{
          textShadow:
            "0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        Aaryaveer Sharma&apos;s
        <br />
        <span
          className="italic font-medium"
          style={{
            textShadow:
              "0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          Portfolio
        </span>
      </motion.h1>

      {/* Flipping role subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        className="relative z-10 h-10 flex items-center justify-center mb-10 overflow-hidden"
        style={{ minWidth: 380 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIndex}
            initial={{ rotateX: -90, opacity: 0, y: 20 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 90, opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute text-lg md:text-2xl font-bold tracking-tight text-white"
            style={{
              transformOrigin: "center",
              textShadow:
                "0 3px 16px rgba(0,0,0,0.95), 0 1px 6px rgba(0,0,0,0.9)",
            }}
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
        className="relative z-10 text-base md:text-lg text-white/90 mb-12 max-w-xl leading-relaxed tracking-tight"
        style={{
          textShadow:
            "0 2px 12px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)",
        }}
      >
        Specializing in bespoke web solutions — crafted for businesses and individuals who refuse to settle for ordinary.
      </motion.p>

      {/* CTA Button — reference style: dark pill, no circle icon, "Get started ↗" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-center mb-16"
      >
        <Link href="https://sovereignsites.in" target="_blank">
          <button className="relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/25 text-white px-7 py-3 rounded-xl text-base font-semibold hover:bg-white/15 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            <span className="relative z-10">Sovereign Sites</span>
            <ArrowUpRight className="relative z-10 w-4 h-4" strokeWidth={2.5} />
          </button>
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-10"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
