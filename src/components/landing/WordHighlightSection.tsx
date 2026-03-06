"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const words = ["Strategy", "Design", "Identity", "Build", "Launch"];

function Word({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // Each word tracks its own scroll: starts when it enters bottom of viewport,
  // peaks when it's centred, ends when it exits top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  // Generous spring so color change feels physical, not instant
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Start very dim gray, peak bright white exactly at centre, return to dim gray
  const color = useTransform(
    smooth,
    [0, 0.35, 0.5, 0.65, 1],
    ["#333333", "#555555", "#ffffff", "#555555", "#333333"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ color, willChange: "color" }}
      className="text-[18vw] md:text-[22vw] font-black tracking-tighter leading-[0.75] select-none py-16 md:py-20 uppercase w-full text-center"
    >
      {text}
    </motion.div>
  );
}

export function WordHighlightSection() {
  return (
    <section className="bg-black relative py-[8vh] overflow-hidden flex flex-col items-center justify-center font-plus-jakarta">
      <div className="flex flex-col items-center justify-center w-full px-6 z-10">
        {words.map((word) => (
          <Word key={word} text={word} />
        ))}
      </div>

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}
