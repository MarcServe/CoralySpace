'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IMAGES } from '@/lib/coraly-images-manifest';

const coral = '#EF7A6C';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Community', href: '/community' },
];

export default function Nav() {
  const [sc, setSc] = useState(false);

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '68px',
      padding: '0 48px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      background: sc ? 'rgba(13,13,13,.96)' : 'transparent',
      backdropFilter: sc ? 'blur(20px)' : 'none',
      borderBottom: sc ? '1px solid rgba(239,122,108,.12)' : 'none',
      transition: 'all .4s ease',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <img src={IMAGES.LOGO_SPACE_DARK} alt="Coraly Space"
          style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '3px', color: coral }}>CORALY SPACE</div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '3px', color: 'rgba(250,247,244,.4)' }}>BELONG · CONNECT · THRIVE</div>
        </div>
      </Link>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={label} href={href} style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: '13px', fontWeight: 500,
            color: 'rgba(250,247,244,.7)', textDecoration: 'none', transition: 'color .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = coral; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(250,247,244,.7)'; }}>
            {label}
          </Link>
        ))}
        <Link href="/community" className="cbtn" style={{ padding: '10px 20px', fontSize: '11px' }}>
          Join Waitlist
        </Link>
      </div>
    </nav>
  );
}
