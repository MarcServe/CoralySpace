'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cancelFrame, frame } from 'framer-motion';
import { setLenis } from '@/lib/smooth-scroll';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    setLenis(lenis);
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from Motion’s frame loop so scroll-linked Motion / Framer APIs
    // read the same scroll position Lenis is animating (GSAP ticker was out of sync).
    const onFrame = (data: { timestamp: number }) => {
      lenis.raf(data.timestamp);
    };
    frame.update(onFrame, true);

    return () => {
      cancelFrame(onFrame);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
