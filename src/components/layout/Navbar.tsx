"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/80 backdrop-blur-md flex items-center px-6 md:px-12 font-plus-jakarta">
      {/* Left nav links — desktop only */}
      <div className="hidden md:flex items-center gap-6">
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
      <div className="flex md:hidden items-center justify-center gap-3 flex-1">
        <Link href="https://sovereignsites.in" target="_blank">
          <button className="group bg-black text-white pl-1 pr-3 rounded-full text-[10px] font-black uppercase tracking-wider h-7 flex items-center gap-1.5 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-200">
              <ArrowUpRight className="w-3 h-3 text-black" />
            </span>
            Explore my agency
          </button>
        </Link>
        <Link href="https://book.sovereignsites.in" target="_blank">
          <button className="group bg-black text-white pl-1 pr-3 rounded-full text-[10px] font-black uppercase tracking-wider h-7 flex items-center gap-1.5 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-200">
              <ArrowUpRight className="w-3 h-3 text-black" />
            </span>
            Start a project
          </button>
        </Link>
      </div>

      {/* Desktop: buttons on right */}
      <div className="hidden md:flex items-center gap-3 ml-auto">
        <Link href="https://sovereignsites.in" target="_blank">
          <button className="group bg-black text-white pl-1 pr-4 rounded-full text-[11px] font-black uppercase tracking-wider h-8 flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-200">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </span>
            Explore my agency
          </button>
        </Link>
        <Link href="https://book.sovereignsites.in" target="_blank">
          <button className="group bg-black text-white pl-1 pr-4 rounded-full text-[11px] font-black uppercase tracking-wider h-8 flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-200">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </span>
            Start a project
          </button>
        </Link>
      </div>
    </nav>
  );
}
