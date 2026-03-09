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

export function WorkSection() {
  return (
    <section id="work" className="relative bg-white font-plus-jakarta py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-black mb-6">
            Selected <br /> Works
          </h2>
          <div className="w-24 h-1.5 bg-black rounded-full" />
        </div>

        {/* Square Grid of Black Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="aspect-square bg-black border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between hover:border-white/30 transition-all group overflow-hidden"
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

                <h3 className="text-2xl font-black tracking-tight text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Visit Button */}
              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white h-12 px-8 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full group-hover:scale-[1.02] transform duration-300"
              >
                Visit
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
