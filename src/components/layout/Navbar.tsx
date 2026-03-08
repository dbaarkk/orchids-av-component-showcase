"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PixelBlast from "../ui/PixelBlast";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-black flex items-center px-6 md:px-12 font-plus-jakarta overflow-hidden">
      <PixelBlast
        color="#ffffff"
        pixelSize={1.5}
        patternScale={4}
        patternDensity={0.4}
        speed={0.2}
        transparent={true}
        edgeFade={0.3}
        liquid={true}
        liquidStrength={0.05}
        className="opacity-20"
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
          href="https://info.aaryaveersharma.in"
          target="_blank"
          className="text-sm font-bold hover:text-muted-foreground transition-colors uppercase tracking-widest"
        >
          Info
        </Link>
      </div>

      {/* Mobile: buttons centered */}
      <div className="flex md:hidden items-center justify-center gap-3 flex-1 relative z-10">
        <Link href="https://info.aaryaveersharma.in" target="_blank">
          <button className="relative overflow-hidden bg-white/10 border border-white/25 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/20 transition-colors whitespace-nowrap backdrop-blur-sm">
            <span className="relative z-10">Get more info</span>
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
        <Link href="https://info.aaryaveersharma.in" target="_blank">
          <button className="relative overflow-hidden bg-white/10 border border-white/25 text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-2 hover:bg-white/20 transition-colors whitespace-nowrap backdrop-blur-sm">
            <span className="relative z-10">Get more info</span>
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
