"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "sovereignsites.in",
    tag: "Web Agency",
    description:
      "A premium web development agency specializing in high-performance, conversion-optimized digital experiences for modern brands.",
    link: "https://sovereignsites.in",
    bg: "#ffffff",
  },
  {
    title: "theurbanauto.com",
    tag: "Automotive",
    description:
      "A sleek booking website for an upscale garage — customers can schedule services, explore packages, and track their vehicle's status online.",
    link: "https://theurbanauto.com",
    bg: "#f5f5f7",
  },
  {
    title: "app.theurbanauto.com",
    tag: "Internal Tool",
    description:
      "Internal management app for The Urban Auto — streamlining job cards, customer records, service workflows, and real-time garage operations.",
    link: "https://app.theurbanauto.com",
    bg: "#ffffff",
  },
  {
    title: "inkai.in",
    tag: "Manga Brand",
    description:
      "An immersive e-commerce platform for a manga lifestyle brand — featuring art prints, apparel, and collectibles with a hand-crafted visual identity built for true fans.",
    link: "https://inkai.in",
    bg: "#f5f5f7",
  },
  {
    title: "petalmind.in",
    tag: "Mental Wellness",
    description:
      "An AI-powered mental wellness ecosystem providing empathetic, personalized support and evidence-based therapeutic tools for holistic growth.",
    link: "https://petalmind.in",
    bg: "#ffffff",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="relative bg-white font-plus-jakarta">
      {/* Section heading — normal flow, not sticky */}
      <div className="pt-24 pb-16 flex flex-col items-center text-center px-4">
        <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none text-black mb-6">
          Selected <br /> Works
        </h2>
        <div className="w-24 h-[6px] bg-black rounded-full" />
      </div>

      {/* Stacking cards via CSS sticky */}
      <div className="relative px-4 md:px-12 pb-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="sticky"
            style={{
              top: `${72 + index * 18}px`,
              zIndex: index + 1,
              marginBottom: index === projects.length - 1 ? 0 : "0px",
            }}
          >
            <div
              className="w-full max-w-6xl mx-auto rounded-[2.5rem] border border-black/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] p-8 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
              style={{ backgroundColor: project.bg }}
            >
              {/* Left: text content */}
              <div className="flex flex-col gap-4 flex-1 min-w-0">
                {/* Tag + project number */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black tracking-[0.3em] uppercase text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-black tracking-widest uppercase bg-black/5 border border-black/10 px-3 py-1 rounded-full text-black/60">
                    {project.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black leading-none">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Right: visit button */}
              <Link
                href={project.link}
                target="_blank"
                className="shrink-0 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-black/80 transition-colors self-start md:self-center"
              >
                Visit
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
        {/* Spacer so last card doesn't get buried under sticky cards */}
        <div style={{ height: `${projects.length * 18 + 40}px` }} />
      </div>
    </section>
  );
}
