import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-24 px-6 md:px-12 mt-auto font-plus-jakarta text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8 flex-1">
          <h3 className="font-black text-6xl tracking-tighter leading-none bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Aaryaveer <br /> Sharma
          </h3>
          <p className="text-zinc-400 text-xl max-w-sm font-bold tracking-tight">
            Crafting high-performance digital experiences that help brands stand out in the noise.
          </p>
          <div className="pt-4 flex gap-4">
            <a href="mailto:contact@sovereignsites.in">
              <button className="group bg-white text-black pl-1 pr-5 rounded-full text-[11px] font-black uppercase tracking-wider h-9 flex items-center gap-2 hover:bg-zinc-200 transition-colors whitespace-nowrap">
                <span className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-200">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
                Schedule a chat
              </button>
            </a>
          </div>
        </div>

        <div className="flex gap-24 text-sm font-black uppercase tracking-widest">
          <div className="space-y-6 flex flex-col">
            <span className="text-zinc-500 font-black text-xs">Sitemap</span>
            <a href="#work" className="hover:text-zinc-400 transition-colors">Work</a>
            <a href="#process" className="hover:text-zinc-400 transition-colors">Process</a>
            <a href="https://info.aaryaveersharma.in" target="_blank" className="hover:text-zinc-400 transition-colors">Info</a>
          </div>
          <div className="space-y-6 flex flex-col">
            <span className="text-zinc-500 font-black text-xs">Connect</span>
            <a href="mailto:contact@sovereignsites.in" className="hover:text-zinc-400 transition-colors">Sovereign Sites</a>
            <a href="https://instagram.com/sovereignsites" target="_blank" className="hover:text-zinc-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-black uppercase tracking-widest">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p>© {new Date().getFullYear()} Aaryaveer Sharma.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
