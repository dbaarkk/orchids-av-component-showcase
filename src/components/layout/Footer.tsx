import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white py-24 px-6 md:px-12 mt-auto font-plus-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8 flex-1">
          <h3 className="font-black text-6xl tracking-tighter leading-none">Aaryaveer <br /> Sharma</h3>
          <p className="text-muted-foreground text-xl max-w-sm font-bold tracking-tight">
            Crafting high-performance digital experiences that help brands stand out in the noise.
          </p>
          <div className="pt-4 flex gap-4">
            <a href="mailto:contact@sovereignsites.in">
              <button className="group bg-black text-white pl-1 pr-5 rounded-full text-[11px] font-black uppercase tracking-wider h-9 flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-200">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </span>
                Get in touch
              </button>
            </a>
          </div>
        </div>

        <div className="flex gap-24 text-sm font-black uppercase tracking-widest">
          <div className="space-y-6 flex flex-col">
            <span className="text-muted-foreground font-black text-xs opacity-50">Sitemap</span>
            <a href="#work" className="hover:text-muted-foreground transition-colors">Work</a>
            <a href="#process" className="hover:text-muted-foreground transition-colors">Process</a>
            <a href="https://sovereignsites.in" target="_blank" className="hover:text-muted-foreground transition-colors">Agency</a>
          </div>
          <div className="space-y-6 flex flex-col">
            <span className="text-muted-foreground font-black text-xs opacity-50">Connect</span>
            <a href="mailto:contact@sovereignsites.in" className="hover:text-muted-foreground transition-colors">Sovereign Sites</a>
            <a href="https://instagram.com/sovereignsites" target="_blank" className="hover:text-muted-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-black uppercase tracking-widest">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p>© {new Date().getFullYear()} Aaryaveer Sharma.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
