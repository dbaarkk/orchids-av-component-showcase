"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    title: "Discovery",
    description: "Deep dive into your business goals, target audience, and competition to craft a precise digital roadmap."
  },
  {
    title: "Architecture",
    description: "Creating bespoke, high-impact visual systems and user interfaces that resonate with your brand's core values."
  },
  {
    title: "Build",
    description: "Transforming designs into performant, scalable, and secure code using cutting-edge modern technologies."
  },
  {
    title: "Launch",
    description: "Strategic deployment followed by continuous optimization to ensure sustained digital growth and success."
  }
];

function ProgressDot({ index, total, progress }: { index: number, total: number, progress: MotionValue<number> }) {
  const point = index / (total - 1);
  const color = useTransform(
    progress,
    [point - 0.05, point, point + 0.05],
    ["#f3f4f6", "#000000", "#000000"]
  );

  return (
    <motion.div
      className="w-4 h-4 rounded-full z-10 shrink-0 border-2 border-white"
      style={{
        backgroundColor: color,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    />
  );
}

function StepContent({ step, index, total, progress }: { step: any, index: number, total: number, progress: MotionValue<number> }) {
  // Each step occupies 1/total of the scroll range
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;
  const enterWindow = 0.08; // how quickly it fades in
  const exitWindow = 0.08;  // how quickly it fades out

  // Opacity: invisible before its turn, fades in, stays visible, fades out — never comes back
  // For past steps: they should be gone (opacity 0, moved up)
  // For future steps: waiting below (opacity 0, ready to come up)
  const opacity = useTransform(
    progress,
    [
      start - enterWindow,   // before: invisible
      start,                  // entering: fully visible
      end - exitWindow,       // staying visible
      end                     // exiting: invisible
    ],
    [0, 1, 1, 0]
  );

  // Y: future steps come from below (+60px), past steps are gone above (-60px)
  const y = useTransform(
    progress,
    [
      start - enterWindow,
      start,
      end - exitWindow,
      end
    ],
    ["60px", "0px", "0px", "-60px"]
  );

  // Active state for pointer events
  const [isActive, setIsActive] = useState(index === 0);

  useMotionValueEvent(progress, "change", (latest) => {
    setIsActive(latest >= start && latest < end);
  });

  return (
    <motion.div
      style={{
        opacity,
        y,
        zIndex: index,
        pointerEvents: isActive ? "auto" : "none",
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="space-y-6 md:space-y-10 bg-white"
    >
      <div className="space-y-4">
        <span className="text-sm md:text-base font-black tracking-[0.3em] uppercase text-muted-foreground/40">
          Step 0{index + 1}
        </span>
            <h3 className="text-5xl md:text-6xl lg:text-[5.5vw] xl:text-[6vw] font-black tracking-tighter uppercase leading-[0.8] text-black whitespace-nowrap">
            {step.title}
          </h3>
      </div>
      <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl font-bold tracking-tight leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="relative bg-white h-[400vh] font-plus-jakarta px-6 md:px-12 overflow-visible">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between gap-12 md:gap-24 overflow-visible">

          {/* Main Content: steps, one at a time */}
            <div className="flex-1 relative h-[60vh] md:h-[70vh] overflow-visible">
            {steps.map((step, index) => (
              <StepContent
                key={index}
                step={step}
                index={index}
                total={steps.length}
                progress={smoothProgress}
              />
            ))}
          </div>

          {/* Right Side Progress UI */}
          <div className="flex items-center gap-12 h-full py-20 overflow-visible">
            {/* Progress Label */}
            <div className="hidden xl:flex flex-col items-end justify-center text-right opacity-30 pointer-events-none">
              <span className="text-xs font-black tracking-widest uppercase mb-4">The <br /> Process</span>
              <div className="w-12 h-1 bg-black rounded-full" />
            </div>

            {/* Vertical Bar & Dots */}
            <div className="relative w-1.5 h-[50vh] bg-black/5 rounded-full">
              {/* Active Progress Fill */}
              <motion.div
                className="absolute top-0 w-full bg-black rounded-full origin-top"
                style={{ height: lineHeight }}
              />

              {/* Fixed Dots */}
              <div className="absolute inset-y-[-10px] left-1/2 -translate-x-1/2 w-8 flex flex-col items-center justify-between py-0 overflow-visible">
                {steps.map((_, i) => (
                  <ProgressDot
                    key={i}
                    index={i}
                    total={steps.length}
                    progress={smoothProgress}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
