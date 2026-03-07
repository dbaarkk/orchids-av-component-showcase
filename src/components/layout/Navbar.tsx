"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically imported — no SSR, loads instantly on client
const NavbarClouds = dynamic(() => import("./NavbarClouds"), { ssr: false });

export function Navbar() {
  const [cloudOpacity, setCloudOpacity] = useState(1);

  useEffect(() => {
    const hero = document.querySelector("section") as HTMLElement | null;

    const update = () => {
      const heroBottom = hero
        ? hero.offsetTop + hero.offsetHeight
        : window.innerHeight * 0.85;
      const fadeStart = heroBottom - window.innerHeight * 0.35;
      const fadeEnd = heroBottom;
      const scroll = window.scrollY;

      if (scroll <= fadeStart) {
        setCloudOpacity(1);
      } else if (scroll >= fadeEnd) {
        setCloudOpacity(0);
      } else {
        setCloudOpacity(1 - (scroll - fadeStart) / (fadeEnd - fadeStart));
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 backdrop-blur-md flex items-center px-6 md:px-12 font-plus-jakarta overflow-hidden">

      {/* ── Vanta clouds — fades as user scrolls past hero ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: cloudOpacity,
          transition: "opacity 0.1s linear",
          willChange: "opacity",
        }}
      >
        <NavbarClouds />
      </div>

      {/* Semi-transparent bg fallback when clouds have faded */}
      <div
        className="absolute inset-0 pointer-events-none bg-background/80"
        style={{
          opacity: 1 - cloudOpacity,
          transition: "opacity 0.1s linear",
        }}
      />

      {/* Left nav links — desktop only */}
      <div className="hidden md:flex items-center gap-6 relative z-10">
        <Link
          href="#work"
          className="text-sm font-bold hover:text-muted-foreground transition-colors uppercase tracking-widest"
        >
          Work
        </Link>
        <Link
          href="#process"
          className="text-sm font-bold hover:text-muted-foreground transition-colors uppercase tracking-widest"
        >
          Process
        </Link>
        <Link
          href="https://sovereignsites.in"
          target="_blank"
          className="text-sm font-bold hover:text-muted-foreground transition-colors uppercase tracking-widest"
        >
          Agency
        </Link>
      </div>

      {/* Mobile: buttons centered */}
      <div className="flex md:hidden items-center justify-center gap-3 flex-1 relative z-10">
        <Link href="https://sovereignsites.in" target="_blank">
          <button className="relative overflow-hidden bg-white/10 border border-white/25 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/20 transition-colors whitespace-nowrap backdrop-blur-sm">
            <span className="relative z-10">Explore my agency</span>
            <ArrowUpRight className="relative z-10 w-3 h-3" />
          </button>
        </Link>
        <Link href="https://book.sovereignsites.in" target="_blank">
          <button className="relative overflow-hidden bg-white/10 border border-white/25 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/20 transition-colors whitespace-nowrap backdrop-blur-sm">
            <span className="relative z-10">Start a project</span>
            <ArrowUpRight className="relative z-10 w-3 h-3" />
          </button>
        </Link>
      </div>

      {/* Desktop: buttons on right */}
      <div className="hidden md:flex items-center gap-3 ml-auto relative z-10">
        <Link href="https://sovereignsites.in" target="_blank">
          <button className="relative overflow-hidden bg-white/10 border border-white/25 text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-2 hover:bg-white/20 transition-colors whitespace-nowrap backdrop-blur-sm">
            <span className="relative z-10">Explore my agency</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5" />
          </button>
        </Link>
        <Link href="https://book.sovereignsites.in" target="_blank">
          <button className="relative overflow-hidden bg-white/10 border border-white/25 text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-2 hover:bg-white/20 transition-colors whitespace-nowrap backdrop-blur-sm">
            <span className="relative z-10">Start a project</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </nav>
  );
}
