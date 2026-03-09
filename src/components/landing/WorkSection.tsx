"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "sovereignsites.in",
    tag: "Web Agency",
    description:
      "A premium web development agency specializing in high-performance, conversion-optimized digital experiences for modern brands.",
    link: "https://sovereignsites.in",
  },
  {
    title: "theurbanauto.com",
    tag: "Automotive",
    description:
      "A sleek booking website for an upscale garage — customers can schedule services, explore packages, and track their vehicle's status online.",
    link: "https://theurbanauto.com",
  },
  {
    title: "app.theurbanauto.com",
    tag: "Internal Tool",
    description:
      "Internal management app for The Urban Auto — streamlining job cards, customer records, service workflows, and real-time garage operations.",
    link: "https://app.theurbanauto.com",
  },
  {
    title: "inkai.in",
    tag: "Manga Brand",
    description:
      "An immersive e-commerce platform for a manga lifestyle brand — featuring art prints, apparel, and collectibles with a hand-crafted visual identity.",
    link: "https://inkai.in",
  },
  {
    title: "info.aaryaveersharma.in",
    tag: "Information",
    description:
      "A comprehensive digital resume and information portal detailing professional experience, technical expertise, and personal milestones.",
    link: "https://info.aaryaveersharma.in",
  },
];

interface CardProps {
  project: typeof projects[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({ project, index, progress, range, targetScale }: CardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${index * 28}px)`,
        }}
        className="relative aspect-square bg-black border border-white/10 rounded-[2rem] p-8 md:p-14 flex flex-col justify-between hover:border-white/30 transition-all group overflow-hidden w-[90vw] max-w-[550px]"
      >
        {/* Top: Project Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-black tracking-[0.3em] uppercase text-zinc-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[10px] font-black tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full text-zinc-400">
              {project.tag}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight break-words pr-4">
            {project.title}
          </h3>

          <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom: Visit Button */}
        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white h-14 px-10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full group-hover:scale-[1.02] transform duration-300"
        >
          Visit
          <ExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}

export function WorkSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="work" ref={container} className="relative bg-white font-plus-jakarta py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-black mb-6">
            Selected <br /> Works
          </h2>
          <div className="w-24 h-1.5 bg-black rounded-full" />
        </div>

        {/* Stacking Cards Column */}
        <div className="flex flex-col gap-0">
          {projects.map((project, index) => {
            const targetScale = 1 - ( (projects.length - index) * 0.05);
            return (
              <Card
                key={project.title}
                project={project}
                index={index}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
