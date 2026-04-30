'use client';

import type { ReactNode } from 'react';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { animate, scroll } from 'motion';

type Slide = {
  key: string;
  content: ReactNode;
};

export default function PinnedHorizontalSlides({
  slides,
  progress = true,
  progressColor = '#EF7A6C',
  heightPerSlideVh = 100,
  topOffsetPx = 0,
}: {
  slides: Slide[];
  progress?: boolean;
  progressColor?: string;
  heightPerSlideVh?: number;
  topOffsetPx?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);

  const moveCount = slides.length - 1;
  const shouldAnimate = moveCount > 0;

  const stickyHeightStyle = useMemo(() => {
    if (!topOffsetPx) return '100vh';
    return `calc(100vh - ${topOffsetPx}px)`;
  }, [topOffsetPx]);

  useLayoutEffect(() => {
    if (!shouldAnimate) return;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const stops: Array<() => void> = [];

    const stopMove = scroll(
      animate(track, {
        transform: ['none', `translateX(-${moveCount}00vw)`],
      }),
      {
        target: container,
      },
    );
    if (typeof stopMove === 'function') stops.push(stopMove);

    // Pronounced fade-in/out as each slide passes the "center" of the viewport.
    const stopFade = scroll(
      (p) => {
        const step = moveCount === 0 ? 1 : 1 / moveCount;
        // Controls fade overlap. Too small can create scroll ranges where *all*
        // slides evaluate to near-zero opacity (=> "blank" pillars).
        const edge = step * 0.85; // wider overlap keeps slides bright between transitions

        slideRefs.current.forEach((el, i) => {
          if (!el) return;
          if (moveCount === 0) {
            el.style.opacity = '1';
            return;
          }
          const center = i * step; // 0..1
          const x = Math.abs(p - center);
          const t = Math.max(0, 1 - x / edge);
          // Minimum opacity prevents "overlay-only" flicker and avoids fully
          // invisible slides during the scroll transition.
          // Higher minOpacity reduces the "overlay-only / washed" look when
          // slides are between states.
          const minOpacity = 0.55;
          const snappy = Math.pow(t, 3);
          const opacity = minOpacity + (1 - minOpacity) * snappy;
          el.style.opacity = String(opacity);
        });
      },
      {
        target: container,
      },
    );
    if (typeof stopFade === 'function') stops.push(stopFade);

    if (progress && progressRef.current) {
      const progressEl = progressRef.current;
      const stopProgress = scroll(
        animate(progressEl, { scaleX: [0, 1] }),
        {
          target: container,
        },
      );
      if (typeof stopProgress === 'function') stops.push(stopProgress);
    }

    return () => {
      stops.forEach((fn) => fn());
    };
  }, [shouldAnimate, moveCount, progress]);

  return (
    <>
      <article ref={containerRef} style={{ position: 'relative', height: `${slides.length * heightPerSlideVh}vh` }}>
        <div
          style={{
            position: 'sticky',
            top: topOffsetPx,
            overflow: 'hidden',
            height: stickyHeightStyle,
            background: 'transparent',
          }}
        >
          <ul
            ref={trackRef}
            style={{
              display: 'flex',
              width: `${slides.length * 100}vw`,
              height: '100%',
              margin: 0,
              padding: 0,
              listStyle: 'none',
              transform: 'none',
            }}
          >
            {slides.map((s, i) => (
              <li
                key={s.key}
                ref={(node) => {
                  slideRefs.current[i] = node;
                }}
                style={{
                  flex: '0 0 auto',
                  width: '100vw',
                  height: '100%',
                  opacity: i === 0 ? 1 : 0,
                }}
              >
                {s.content}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {progress && (
        <div
          ref={progressRef}
          aria-hidden
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 200,
            height: '3px',
            transformOrigin: 'left center',
            // Matches the Motion `scaleX` animation pattern used elsewhere in the codebase
            // (initial value via the CSS `scale` property).
            scale: 0,
            background: progressColor,
            borderRadius: 999,
          }}
        />
      )}
    </>
  );
}

