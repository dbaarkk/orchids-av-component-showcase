"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  radius: number;
}

function Card({ index, total, progress, radius }: CardProps) {
  const angle = (index / total) * (2 * Math.PI);
  
    // Expansion timing
    const expansionStart = 0;
    
    // Transform for movement
    const x = useTransform(
      progress,
      [expansionStart, 1.0],
      [0, Math.cos(angle) * radius]
    );
    const y = useTransform(
      progress,
      [expansionStart, 1.0],
      [0, Math.sin(angle) * radius]
    );
    
    // Transform for rotation
    const rotate = useTransform(
      progress,
      [0, 1.0],
      [index * 3 - (total * 1.5), (angle * 180) / Math.PI + 90]
    );
    
    // Transform for scale
    const scale = useTransform(progress, [0, 0.1], [0.85, 1]);
    
    // Transform for opacity - stay visible until the end
    const opacity = useTransform(progress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        willChange: "transform, opacity",
      }}
      className="absolute w-48 h-60 md:w-64 md:h-80 bg-white rounded-3xl border border-black/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden cursor-default"
    >
      <div className="w-full h-full p-6 flex flex-col justify-between bg-white">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-xs font-black border border-black/10">
            {index + 1}
          </div>
          <div className="w-8 h-2.5 bg-black/5 rounded-full" />
        </div>
        
        <div className="space-y-3">
          <div className="h-4 bg-black/10 rounded-full w-3/4" />
          <div className="h-4 bg-black/5 rounded-full w-full" />
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-black/5 rounded-lg border border-black/10" />
          <div className="w-10 h-10 bg-black rounded-lg" />
        </div>
      </div>
    </motion.div>
  );
}

export function ScrollytellingCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 160,
      damping: 50,
      restDelta: 0.0001,
    });

    const cardsCount = 14;
    const radius = 420; // Increased radius to avoid overlap
    
    // Create an array for the cards
    const cards = Array.from({ length: cardsCount });

    // Text animations
    const textOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
    const textScale = useTransform(smoothProgress, [0.1, 0.3], [0.9, 1]);

    return (
      <div ref={sectionRef} className="scrollytelling-container relative">
        <div className="sticky-section bg-white overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Center Text */}
                <motion.div
                  style={{
                    opacity: textOpacity,
                    scale: textScale,
                  }}
                  className="absolute z-10 text-center pointer-events-none px-4"
                >
                    <h2 className="text-5xl md:text-[7rem] font-black tracking-tighter max-w-4xl leading-[0.8] text-black">
                      Jack of <span className="text-muted-foreground italic font-medium">all trades</span>
                    </h2>
                  <p className="mt-6 text-muted-foreground text-base md:text-xl font-black tracking-[0.2em] uppercase max-w-lg mx-auto">
                    One developer for every type of project.
                  </p>
                </motion.div>

          {/* Cards */}
          {cards.map((_, index) => (
            <Card 
              key={index} 
              index={index} 
              total={cardsCount} 
              progress={smoothProgress} 
              radius={radius} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
