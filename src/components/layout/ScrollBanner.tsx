"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -8 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-16 left-0 right-0 z-40 flex items-center justify-center h-8 bg-black pointer-events-none"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/70">
        ✦ &nbsp; Scroll slowly for best experience &nbsp; ✦
      </span>
    </motion.div>
  );
}
