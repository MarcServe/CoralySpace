'use client';

import Link from 'next/link';
import { IMAGES } from '@/lib/coraly-images-manifest';
import { useCoralyExperience } from '@/components/CoralyExperienceControls';

const coral = '#EF7A6C';

const COLS = [
  {
    title: 'Explore',
    links: [
      { label: 'Marketplace', href: '/community' },
      { label: 'Coraly Store', href: '/shop' },
      { label: 'Knowledge Hub', href: '/learn' },
      { label: 'Events', href: '/events' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: "Caroline's Mission", href: '/about' },
      { label: 'Sustainability', href: '/learn' },
      { label: 'Partners', href: '/about' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Join Waitlist', href: '/community' },
      { label: '@coraly.space', href: '/community' },
      { label: 'Newsletter', href: '/community' },
      { label: 'Events', href: '/events' },
    ],
  },
];

export default function Footer() {
  const { theme, t } = useCoralyExperience();
  const isLight = theme === 'light';

  return (
    <footer className="site-footer" style={{ background: 'var(--bg3)', padding: '56px 48px 32px', borderTop: '1px solid var(--theme-border)' }}>
      <div className="site-footer__grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '44px' }}>
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', textDecoration: 'none' }}>
            <img src={isLight ? IMAGES.LOGO_SPACE_LIGHT : IMAGES.LOGO_SPACE_DARK} alt="Coraly Space"
              style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '3px', color: coral }}>CORALY SPACE</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'var(--txt3)' }}>BELONG · CONNECT · THRIVE</div>
            </div>
          </Link>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--txt2)', maxWidth: '220px' }}>
            {t('footer_intro')}
          </p>
          <div style={{ marginTop: '14px', fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: coral, opacity: .5, border: '1px solid rgba(239,122,108,.18)', display: 'inline-block', padding: '5px 11px', borderRadius: '2px' }}>
            🎙️ TALKWEB COMING SOON
          </div>
        </div>

        {COLS.map(({ title, links }) => (
          <div key={title}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: coral, marginBottom: '16px' }}>
              {t(`footer_col_${title.toLowerCase()}`).toUpperCase()}
            </div>
            {links.map(({ label, href }) => (
              <Link key={label} href={href} style={{
                display: 'block', fontSize: '12px', color: 'var(--txt2)',
                marginBottom: '8px', textDecoration: 'none', transition: 'color .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = coral; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--txt2)'; }}>
                {t(`footer_link_${label.toLowerCase().replaceAll(' ', '_').replaceAll("'", '')}`)}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--theme-border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: 'var(--txt3)' }}>
          {t('footer_copyright')}
        </div>
        <div style={{ display: 'flex', gap: '18px' }}>
          {['Privacy', 'Terms', 'GDPR'].map(l => (
            <Link key={l} href="#" style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: 'var(--txt3)', textDecoration: 'none' }}>
              {t(`footer_legal_${l.toLowerCase()}`)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
