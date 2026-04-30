'use client';

import { useLayoutEffect, useRef } from 'react';
import { animate, scroll } from 'motion';
import { IMAGES } from '@/lib/coraly-images-manifest';

const SLIDES = [
  { img: IMAGES.LOGO_SPACE_DARK, label: '#001' },
  { img: IMAGES.MODEL_COAST, label: '#002' },
  { img: IMAGES.CAROLINE_AUTUMN, label: '#003' },
  { img: IMAGES.BRAND_COLLECTION, label: '#004' },
  { img: IMAGES.PRODUCT_REWILD, label: '#005' },
] as const;

/**
 * Motion scroll-linked opacity strips (motion.dev pattern).
 * Uses a sharper `opacity: [0, 1, 0]` + offset window per card; progress bar uses scaleX.
 */
export default function ScrollImageGallery() {
  const scrollRootRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let stops: Array<() => void> = [];

    const bind = () => {
      stops.forEach((fn) => fn());
      stops = [];

      const progress = progressRef.current;
      if (!progress) return;

      SLIDES.forEach((_, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const stop = scroll(
          animate(el, {
            opacity: [0, 1, 0],
            // Extra emphasis so the fade reads clearly on dark backgrounds.
            filter: ['blur(18px)', 'blur(0px)', 'blur(18px)'],
          }),
          {
            target: el,
            offset: ['start end', 'center center', 'end start'],
          },
        );
        if (typeof stop === 'function') stops.push(stop);
      });

      const stopProgress = scroll(
        animate(progress, { scaleX: [0, 1] }),
        {
          target: scrollRootRef.current ?? document.documentElement,
          offset: ['start start', 'end end'],
        },
      );
      if (typeof stopProgress === 'function') stops.push(stopProgress);
    };

    bind();

    // `ResizeObserver` can fire rapidly (fonts/images). Rerun bindings at most once per frame.
    let roRaf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(roRaf);
      roRaf = requestAnimationFrame(bind);
    });
    ro.observe(document.documentElement);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(roRaf);
      stops.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <main ref={scrollRootRef} className="relative min-h-[100vh] bg-[var(--black)] pb-8">
        {SLIDES.map((slide, i) => (
          <section
            key={slide.label}
            className="relative flex min-h-[100svh] snap-start items-center justify-center pt-[76px]"
          >
            <div
              ref={(node) => {
                itemRefs.current[i] = node;
              }}
              style={{ opacity: 0 }}
              className="relative mx-auto mb-5 mt-2 w-[300px] overflow-hidden rounded-sm bg-white/[0.06] outline outline-1 outline-white/10"
            >
              <img
                src={slide.img}
                alt={`Coraly ${slide.label}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                width={300}
                height={400}
                className="h-[400px] w-[300px] object-cover"
                draggable={false}
              />
              <h2 className="pointer-events-none absolute left-[calc(50%+120px)] top-[calc(50%-25px)] m-0 inline-block font-[family-name:var(--font-dm-mono)] text-[clamp(38px,8vw,50px)] font-bold leading-none tracking-[-3px] text-[#EF7A6C]">
                {slide.label}
              </h2>
            </div>
          </section>
        ))}
      </main>

      <div
        ref={progressRef}
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-[200] h-[3px] origin-left rounded-full bg-[#EF7A6C] shadow-[0_0_16px_rgba(239,122,108,.35)]"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
    </>
  );
}
