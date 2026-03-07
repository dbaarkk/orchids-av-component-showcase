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

    // Dynamically import vanta clouds (skips SSR, loads instantly client-side)
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
        // Sky gradient: rich blue top, lighter horizon bottom
        skyColor: 0x3a7bd5,
        cloudColor: 0xf0f4ff,
        cloudShadowColor: 0xb8c8e8,
        sunColor: 0xfff8e7,
        sunGlareColor: 0xffe5a0,
        sunlightColor: 0xfff0c0,
        speed: 1.2,
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
