'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/coraly-images-manifest';
import { LanguageSwitcher, ThemeToggle, useCoralyExperience } from '@/components/CoralyExperienceControls';

const coral = '#EF7A6C';

const NAV_LINKS = [
  { key: 'nav_shop', href: '/shop' },
  { key: 'nav_learn', href: '/learn' },
  { key: 'nav_about', href: '/about' },
  { key: 'nav_events', href: '/events' },
  { key: 'nav_community', href: '/community' },
] as const;

export default function Nav() {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { theme, t } = useCoralyExperience();
  const isLight = theme === 'light';

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <nav className="site-nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '68px',
      padding: '0 48px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      background: sc || isLight ? 'var(--nav)' : 'transparent',
      backdropFilter: sc || isLight ? 'blur(20px)' : 'none',
      borderBottom: sc || isLight ? '1px solid var(--theme-border)' : 'none',
      transition: 'all .4s ease',
    }}>
      <Link href="/" className="site-nav__brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <img src={isLight ? IMAGES.LOGO_SPACE_LIGHT : IMAGES.LOGO_SPACE_DARK} alt="Coraly Space"
          style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '3px', color: coral }}>CORALY SPACE</div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '3px', color: 'var(--txt3)' }}>BELONG · CONNECT · THRIVE</div>
        </div>
      </Link>

      <button
        ref={toggleRef}
        type="button"
        className="site-nav__toggle"
        aria-expanded={open}
        aria-controls="site-nav-links"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen(v => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <button
          type="button"
          className="site-nav__backdrop"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        ref={menuRef}
        id="site-nav-links"
        className={`site-nav__links ${open ? 'is-open' : ''}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        {NAV_LINKS.map(({ key, href }) => (
          <Link key={key} href={href} style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: '13px', fontWeight: 500,
            color: 'var(--txt2)', textDecoration: 'none', transition: 'color .2s',
          }}
            onClick={() => setOpen(false)}
            onMouseEnter={e => { e.currentTarget.style.color = coral; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--txt2)'; }}>
            {t(key)}
          </Link>
        ))}
        <div className="site-nav__controls">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <Link href="/community" className="cbtn" style={{ padding: '10px 20px', fontSize: '11px' }} onClick={() => setOpen(false)}>
          {t('nav_cta')}
        </Link>
      </div>
    </nav>
  );
}
