"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NavbarClouds() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    import("vanta/dist/vanta.clouds.min.js").then((mod) => {
      if (cancelled || vantaRef.current) return;

      const VANTA = mod.default ?? mod;

      vantaRef.current = VANTA({
        el: container,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 64,
        minWidth: 200,

        // Deep azure sky — strong contrast with white clouds
        skyColor: 0x1a6aad,
        // Bright crisp white clouds
        cloudColor: 0xfafcff,
        // Dark blue-grey shadow — gives volumetric depth & HD definition
        cloudShadowColor: 0x1a3a5c,
        // Warm golden sun for glossy highlights
        sunColor: 0xffa020,
        sunGlareColor: 0xff7700,
        sunlightColor: 0xffcc66,

        // Lower scale = tighter, more defined cloud shapes (less misty)
        scale: 1,
        scaleMobile: 1,

        // Gentle constant motion
        speed: 0.8,
      });
    });

    return () => {
      cancelled = true;
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
