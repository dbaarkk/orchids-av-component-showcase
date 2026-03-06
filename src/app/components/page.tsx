"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { categories, components } from "@/lib/data";
import { ComponentPreview } from "@/components/library/ComponentPreview";
import { Copy, Check, Eye, Code, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [copyingId, setCopyingId] = useState<string | null>(null);

  const filteredComponents = components.filter((comp) => {
    const matchesCategory = selectedCategory ? comp.category === selectedCategory : true;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopyingId(id);
    setTimeout(() => setCopyingId(null), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col pt-16">
      <Navbar />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-secondary/30 hidden lg:block p-8 space-y-8 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Categories</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === null ? "bg-white border shadow-sm" : "hover:bg-white/50"
                  }`}
                >
                  All Components
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat ? "bg-white border shadow-sm" : "hover:bg-white/50"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-8 border-t">
             <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Resources</h3>
             <ul className="space-y-1">
                <li><a href="#" className="text-sm font-medium hover:underline flex items-center gap-2">Documentation <ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="text-sm font-medium hover:underline flex items-center gap-2">GitHub <ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="text-sm font-medium hover:underline flex items-center gap-2">Discord <ChevronRight className="w-3 h-3" /></a></li>
             </ul>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6 md:p-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {selectedCategory || "Library Assets"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Copy and paste beautifully crafted components directly into your project.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredComponents.map((comp) => (
              <motion.div
                layout
                key={comp.id}
                className="group border-2 rounded-3xl bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all"
              >
                {/* Preview Area */}
                <div className="h-48 bg-secondary/10 flex items-center justify-center border-b p-8 group-hover:bg-secondary/20 transition-colors">
                  <ComponentPreview id={comp.id} />
                </div>

                {/* Info Area */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold tracking-tight">{comp.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary px-2 py-0.5 rounded border">
                      {comp.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {comp.description}
                  </p>
                  
                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={() => handleCopy(comp.id, comp.code)}
                      className="flex-1 bg-primary text-primary-foreground py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      {copyingId === comp.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Code
                        </>
                      )}
                    </button>
                    <button className="px-4 py-2 border-2 rounded-xl text-sm font-semibold hover:bg-secondary transition-colors">
                      <Code className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredComponents.length === 0 && (
            <div className="py-24 text-center">
               <p className="text-xl text-muted-foreground font-medium italic">No components found in this category yet.</p>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
