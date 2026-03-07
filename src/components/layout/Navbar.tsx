"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-background/50 backdrop-blur-md flex items-center px-6 md:px-12 font-plus-jakarta overflow-hidden">
      {/* ── Grainy background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
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
