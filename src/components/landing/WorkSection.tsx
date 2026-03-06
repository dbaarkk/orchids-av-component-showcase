"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "sovereignsites.in",
    description: "A premium web development agency specializing in high-performance, conversion-optimized digital experiences for modern brands.",
    link: "https://sovereignsites.in",
    color: "bg-white",
  },
  {
    title: "theurbanauto.com",
    description: "A comprehensive digital platform for a high-end automotive garage, featuring service booking and inventory management.",
    link: "https://theurbanauto.com",
    color: "bg-[#f5f5f7]",
  },
  {
    title: "app.theurbanauto.com",
    description: "The internal management application for The Urban Auto, streamlining operations, customer tracking, and service workflows.",
    link: "https://app.theurbanauto.com",
    color: "bg-white",
  },
  {
    title: "inkai.in",
    description: "An immersive e-commerce experience for manga enthusiasts, featuring a curated collection and a seamless shopping flow.",
    link: "https://inkai.in",
    color: "bg-[#f5f5f7]",
  },
  {
    title: "petalmind.in",
    description: "An AI-powered mental wellness ecosystem designed to provide empathetic, personalized support and evidence-based therapeutic tools for holistic growth.",
    link: "https://petalmind.in",
    color: "bg-white",
  },
];

const N = projects.length;

function ProjectCard({
  project,
  index,
  scrollYProgress,
}: {
  project: (typeof projects)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Each card occupies an equal slice of [0,1] scroll progress
  const sliceSize = 1 / N;
  const start = index * sliceSize;
  const end = (index + 1) * sliceSize;
  const enterEnd = start + sliceSize * 0.35;
  const exitStart = end - sliceSize * 0.2;

  // Enter: slide up and fade in
  const y = useTransform(scrollYProgress, [start, enterEnd], ["5%", "0%"]);
  const enterOpacity = useTransform(scrollYProgress, [start, enterEnd], [0, 1]);

  // Exit: scale down and dim slightly as next card stacks over (same for all cards)
  // Last card: we still compute but won't use the exit scale — it stays at 1
  const exitScale = useTransform(scrollYProgress, [exitStart, end], [1, 0.93]);
  const exitOpacity = useTransform(scrollYProgress, [exitStart, end], [1, 0.65]);

  // Combined opacity: enter fade + exit fade (for non-last cards)
  const combinedOpacity = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [0, 1, 1, 0.65]
  );

  const isLast = index === N - 1;

  return (
    <motion.div
      style={{
        zIndex: index + 1,
        top: `${14 + index * 2.2}vh`,
        y,
        scale: isLast ? exitScale /* stays 1 since it uses enterEnd range */ : exitScale,
        opacity: isLast ? enterOpacity : combinedOpacity,
      }}
      className={`sticky w-full max-w-6xl h-[45vh] md:h-[50vh] ${project.color} border border-black/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 flex flex-col justify-between group overflow-hidden`}
    >
      <div className="flex justify-between items-start gap-8 relative z-20">
        <div className="space-y-6">
          <h3 className="text-muted-foreground italic font-medium font-plus-jakarta text-xl leading-none tracking-tight">
            {project.title.toLowerCase()}
          </h3>
          <p className="text-2xl md:text-3xl lg:text-4xl text-black max-w-3xl font-black tracking-tighter leading-[1] md:leading-[0.9]">
            {project.description}
          </p>
        </div>
        <Link
          href={project.link}
          target="_blank"
          className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-black text-white hover:scale-110 active:scale-95 transition-all shadow-xl flex items-center justify-center group-hover:bg-black/90"
        >
          <ExternalLink className="w-8 h-8 md:w-12 md:h-12" />
        </Link>
      </div>

      <div className="absolute bottom-12 left-16 flex items-center gap-3 opacity-20">
        <div className="w-12 h-[1px] bg-black" />
        <span className="text-xs font-black uppercase tracking-[0.3em]">
          Project {index + 1}
        </span>
      </div>
    </motion.div>
  );
}

// Fast-scroll guard: caps progress advance to MAX_DELTA per animation frame
function useThrottledScrollProgress(raw: MotionValue<number>) {
  const [displayed, setDisplayed] = useState(0);
  const displayedRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const MAX_DELTA = 0.008;

  useEffect(() => {
    const unsub = raw.on("change", () => {
      if (rafRef.current !== null) return;

      function step() {
        const current = displayedRef.current;
        const target = raw.get();
        const diff = target - current;

        if (Math.abs(diff) < 0.0005) {
          displayedRef.current = target;
          setDisplayed(target);
          rafRef.current = null;
          return;
        }

        const delta = Math.sign(diff) * Math.min(Math.abs(diff), MAX_DELTA);
        displayedRef.current = current + delta;
        setDisplayed(displayedRef.current);
        rafRef.current = requestAnimationFrame(step);
      }

      rafRef.current = requestAnimationFrame(step);
    });

    return () => {
      unsub();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [raw]);

  return displayed;
}

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useThrottledScrollProgress(scrollYProgress); // side-effect: caps fast scroll

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 42,
    restDelta: 0.001,
  });

  const headingY = useTransform(springProgress, [0, 0.12], [0, -280]);
  const headingOpacity = useTransform(springProgress, [0, 0.1], [1, 0]);

  return (
    <section
      id="work"
      ref={containerRef}
      // (N cards + 1.5 intro screens) × 100vh gives enough room for each card's scroll slice
      style={{ minHeight: `${(N + 1.5) * 100}vh` }}
      className="relative bg-white pt-[15vh] px-4 md:px-12"
    >
      {/* Sticky heading */}
      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="sticky top-16 mb-0 flex flex-col items-center text-center z-[100] pointer-events-none"
      >
        <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none text-black uppercase mb-6 drop-shadow-sm">
          Selected <br /> Works
        </h2>
        <div className="w-24 h-[6px] bg-black rounded-full" />
      </motion.div>

      {/* Cards — all sticky, stacking on top of each other */}
      <div className="relative flex flex-col items-center max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            scrollYProgress={springProgress}
          />
        ))}
      </div>
    </section>
  );
}
