"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function ComponentPreview({ id }: { id: string }) {
  if (id === "split-text") {
    return (
      <div className="flex flex-wrap gap-x-2 overflow-hidden justify-center">
        {"AV ASSET LIBRARY".split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="inline-block text-2xl font-bold tracking-tight"
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  }

  if (id === "shiny-text") {
    return (
      <div className="relative inline-block text-2xl font-bold overflow-hidden">
        <span className="text-muted-foreground/20">PREMIUM ASSETS</span>
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent bg-clip-text text-transparent"
        >
          PREMIUM ASSETS
        </motion.span>
      </div>
    );
  }

  if (id === "magnet") {
    return <MagnetPreview />;
  }

  if (id === "dots-bg") {
    return (
      <div className="w-full h-full border rounded-xl" style={{ 
        backgroundImage: 'radial-gradient(#e4e4e7 1px, transparent 1px)',
        backgroundSize: '16px 16px'
      }} />
    );
  }

  if (id === "spotlight-card") {
    return (
        <div className="w-48 h-32 bg-secondary/50 rounded-xl border relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-4 flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10" />
                <div className="w-24 h-2 bg-primary/10 rounded" />
                <div className="w-16 h-2 bg-primary/5 rounded" />
            </div>
        </div>
    )
  }

  return <div className="text-xs font-bold uppercase tracking-widest opacity-20">Preview Soon</div>;
}

function MagnetPreview() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer shadow-lg"
    >
      AV
    </motion.div>
  );
}
