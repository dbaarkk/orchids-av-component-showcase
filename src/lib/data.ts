export interface ComponentAsset {
  id: string;
  name: string;
  category: "Text Animations" | "Backgrounds" | "Animations" | "Components" | "3D & Special";
  description: string;
  code: string;
  previewType: "text" | "background" | "component" | "animation";
}

export const categories = [
  "Text Animations",
  "Backgrounds",
  "Animations",
  "Components",
  "3D & Special",
] as const;

export const components: ComponentAsset[] = [
  // TEXT ANIMATIONS
  {
    id: "split-text",
    name: "SplitText",
    category: "Text Animations",
    description: "Splits text into characters or words with entrance animations.",
    previewType: "text",
    code: `"use client";
import { motion } from "framer-motion";

export const SplitText = ({ text }) => {
  return (
    <div className="flex flex-wrap gap-x-2 overflow-hidden">
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: i * 0.1,
            ease: [0.215, 0.61, 0.355, 1.0]
          }}
          className="inline-block text-4xl font-bold"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};`,
  },
  {
    id: "shiny-text",
    name: "ShinyText",
    category: "Text Animations",
    description: "A shimmering effect for text elements.",
    previewType: "text",
    code: `"use client";
import { motion } from "framer-motion";

export const ShinyText = ({ text }) => {
  return (
    <div className="relative inline-block text-4xl font-bold overflow-hidden">
      <span className="text-muted-foreground/30">{text}</span>
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "linear" 
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent bg-clip-text text-transparent"
      >
        {text}
      </motion.span>
    </div>
  );
};`,
  },
  // BACKGROUNDS
  {
    id: "aurora",
    name: "Aurora",
    category: "Backgrounds",
    description: "Beautifully animated aurora borealis background.",
    previewType: "background",
    code: `// Aurora Background implementation with CSS gradients and animation`,
  },
    {
      id: "dots-bg",
      name: "Dots",
      category: "Backgrounds",
      description: "Clean dot grid background pattern.",
      previewType: "background",
      code: ".dots-bg {\n  background-image: radial-gradient(#e4e4e7 1px, transparent 1px);\n  background-size: 24px 24px;\n}",
    },
  // ANIMATIONS
  {
    id: "magnet",
    name: "Magnet",
    category: "Animations",
    description: "Elements that attract the cursor with a magnetic effect.",
    previewType: "animation",
    code: `"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const Magnet = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.5);
    y.set((e.clientY - centerY) * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};`,
  },
  // COMPONENTS
  {
    id: "spotlight-card",
    name: "SpotlightCard",
    category: "Components",
    description: "A card with a mouse-following spotlight effect.",
    previewType: "component",
    code: `// SpotlightCard implementation with mouse tracking`,
  },
  {
    id: "stack-carousel",
    name: "Stack",
    category: "Components",
    description: "Stacked elements that expand on hover.",
    previewType: "component",
    code: `// Stack implementation`,
  },
  {
    id: "ballpit",
    name: "Ballpit",
    category: "3D & Special",
    description: "Interactive 3D ball pit with physics using Matter.js and Three.js.",
    previewType: "component",
    code: `// Ballpit implementation with physics`,
  },
  {
    id: "hyperspeed",
    name: "Hyperspeed",
    category: "Backgrounds",
    description: "Warp speed starfield animation.",
    previewType: "background",
    code: `// Hyperspeed starfield effect`,
  },
  {
    id: "decrypted-text",
    name: "DecryptedText",
    category: "Text Animations",
    description: "Matrix-style text decryption animation.",
    previewType: "text",
    code: `// DecryptedText implementation`,
  },
  {
    id: "orb",
    name: "Orb",
    category: "3D & Special",
    description: "Animated 3D orb with iridescent textures.",
    previewType: "component",
    code: `// 3D Orb implementation`,
  },
];
