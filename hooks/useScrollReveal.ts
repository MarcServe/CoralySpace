'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const els = section.querySelectorAll('[data-reveal]');
        if (els.length === 0) return;
        gsap.fromTo(
          els,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
