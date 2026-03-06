"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-background/80 backdrop-blur-md flex items-center px-6 md:px-12 font-plus-jakarta overflow-hidden">

      {/* ── Navbar white gradient orbs (many, everywhere) ── */}
      <span className="nav-orb nav-orb-1" />
      <span className="nav-orb nav-orb-2" />
      <span className="nav-orb nav-orb-3" />
      <span className="nav-orb nav-orb-4" />
      <span className="nav-orb nav-orb-5" />
      <span className="nav-orb nav-orb-6" />
      <span className="nav-orb nav-orb-7" />
      <span className="nav-orb nav-orb-8" />

      {/* Left nav links — desktop only */}
      <div className="hidden md:flex items-center gap-6 relative z-10">
        <Link href="#work" className="text-sm font-bold hover:text-muted-foreground transition-colors uppercase tracking-widest">
          Work
        </Link>
        <Link href="#process" className="text-sm font-bold hover:text-muted-foreground transition-colors uppercase tracking-widest">
          Process
        </Link>
        <Link href="https://sovereignsites.in" target="_blank" className="text-sm font-bold hover:text-muted-foreground transition-colors uppercase tracking-widest">
          Agency
        </Link>
      </div>

      {/* Mobile: buttons centered */}
      <div className="flex md:hidden items-center justify-center gap-3 flex-1 relative z-10">
        <Link href="https://sovereignsites.in" target="_blank">
          <button className="nav-btn-dark relative overflow-hidden bg-[#111] text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="btn-gradient-blob btn-blob-1" />
            <span className="btn-gradient-blob btn-blob-2" />
            <span className="relative z-10">Explore my agency</span>
            <ArrowUpRight className="relative z-10 w-3 h-3" />
          </button>
        </Link>
        <Link href="https://book.sovereignsites.in" target="_blank">
          <button className="nav-btn-dark relative overflow-hidden bg-[#111] text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="btn-gradient-blob btn-blob-1" />
            <span className="btn-gradient-blob btn-blob-2" />
            <span className="relative z-10">Start a project</span>
            <ArrowUpRight className="relative z-10 w-3 h-3" />
          </button>
        </Link>
      </div>

      {/* Desktop: buttons on right */}
      <div className="hidden md:flex items-center gap-3 ml-auto relative z-10">
        <Link href="https://sovereignsites.in" target="_blank">
          <button className="nav-btn-dark relative overflow-hidden bg-[#111] text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="btn-gradient-blob btn-blob-1" />
            <span className="btn-gradient-blob btn-blob-2" />
            <span className="relative z-10">Explore my agency</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5" />
          </button>
        </Link>
        <Link href="https://book.sovereignsites.in" target="_blank">
          <button className="nav-btn-dark relative overflow-hidden bg-[#111] text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="btn-gradient-blob btn-blob-1" />
            <span className="btn-gradient-blob btn-blob-2" />
            <span className="relative z-10">Start a project</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </nav>
  );
}
