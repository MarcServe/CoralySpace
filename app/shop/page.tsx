'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Ticker from '@/components/Ticker';
import { IMAGES, P_FOX_GLOVE, P_BUTTERFLY_PINK, P_SUNSHINE, P_BUTTERFLY_KIDS, P_BUTTERFLIES_NAVY, P_SCARLETT, P_FOX_ADULT, P_DEER, P_ASYMMETRIC_BF, P_ROSE_HAND, B2_MENS_TEE, B2_BLACK_BUTTERFLY, B2_SPACE_OVAL } from '@/lib/coraly-images-manifest';

// ─── TEEMILL CONFIG ───────────────────────────────────────────────────────────
// Replace with Caroline's actual Teemill store URL, e.g. "https://coralyspace.teemill.com"
// Product slugs below come from the URL of each product page on the Teemill store.
const TEEMILL_STORE = 'https://coraly.teemill.com';
const TEEMILL_ALL = `${TEEMILL_STORE}/collection/all-products/`;
const teemillUrl = (_slug: string) => TEEMILL_ALL;
// ─────────────────────────────────────────────────────────────────────────────

const coral = '#EF7A6C';
const coralD = '#C0392B';
const gold = '#C9A84C';
const black = '#0D0D0D';
const cream = '#F5EFE8';
const sand = '#EDE0D4';
const muted = '#8B7E7B';
const offW = '#FAF7F4';
const char = '#1C1C1C';

const KIDS = [
  { img: IMAGES.PRODUCT_MOON_PHASE, name: 'Moon Phase Tee', price: '£22', tag: 'WHITE · KIDS', accent: coral, slug: 'moon-phase-tee' },
  { img: P_FOX_GLOVE, name: 'Fox Glove Kids Tee', price: '£24', tag: 'WHITE LONG SLEEVE', accent: '#5A7A3A', slug: 'fox-glove-kids-tee' },
  { img: P_BUTTERFLY_PINK, name: 'Butterfly Illustration', price: '£26', tag: 'PINK LONG SLEEVE', accent: '#C06080', slug: 'butterfly-illustration-kids' },
  { img: P_SUNSHINE, name: 'Coraly Sunshine Tee', price: '£20', tag: 'YELLOW · KIDS', accent: gold, slug: 'coraly-sunshine-tee' },
  { img: IMAGES.PRODUCT_CORAL_ROSE, name: 'Coral Rose Hoodie', price: '£38', tag: 'GREY · HOODIE', accent: coral, slug: 'coral-rose-hoodie' },
  { img: P_BUTTERFLY_KIDS, name: 'Butterfly Kids Tee', price: '£22', tag: 'YELLOW · KIDS', accent: '#C9A820', slug: 'butterfly-kids-tee' },
];

const ADULTS = [
  { img: P_BUTTERFLIES_NAVY, name: 'Butterflies T-Shirt', price: '£26', tag: 'NAVY · ADULT', accent: '#2A4A7F', badge: null, slug: 'butterflies-t-shirt' },
  { img: P_SCARLETT, name: 'Scarlett Shocks', price: '£32', tag: 'BLACK LONG SLEEVE', accent: coralD, badge: 'CREATOR', slug: 'scarlett-shocks' },
  { img: P_FOX_ADULT, name: 'Fox Glove Adult', price: '£28', tag: 'WHITE LONG SLEEVE', accent: '#5A7A3A', badge: null, slug: 'fox-glove-adult-tee' },
  { img: P_DEER, name: 'Deer Art Tee', price: '£26', tag: 'WHITE · ARTIST', accent: gold, badge: null, slug: 'deer-art-tee' },
  { img: IMAGES.PRODUCT_BUTTERFLY_MOON, name: 'Butterfly & Moon', price: '£26', tag: 'WHITE · WOMEN\'S', accent: '#3A5A8A', badge: 'AS WORN', slug: 'butterfly-moon-tee' },
  { img: P_ROSE_HAND, name: 'Rose in the Hand', price: '£28', tag: 'WHITE · VARIETY', accent: coral, badge: null, slug: 'rose-in-the-hand' },
  { img: B2_MENS_TEE, name: "Coraly Tee Men's", price: '£24', tag: 'WHITE · MINIMAL', accent: char, badge: null, slug: 'coraly-tee-mens' },
  { img: B2_BLACK_BUTTERFLY, name: 'Butterfly Tee Black', price: '£26', tag: 'BLACK · WOMEN\'S', accent: '#555', badge: 'NEW', slug: 'coraly-space-butterfly-tee-black' },
  { img: B2_SPACE_OVAL, name: 'Coraly.Space Oval', price: '£24', tag: 'WHITE · MINIMAL', accent: coral, badge: 'NEW', slug: 'coraly-space-oval-tee' },
];

function ProductCard({ img, name, price, tag, accent, badge = null, slug }: { img: string; name: string; price: string; tag: string; accent: string; badge?: string | null; slug: string }) {
  const [hov, setHov] = useState(false);
  const href = teemillUrl(slug);
  return (
    <a data-reveal href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'block', textDecoration: 'none', cursor: 'pointer', transform: hov ? 'translateY(-6px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', marginBottom: '10px', border: `1.5px solid ${hov ? accent : sand}`, boxShadow: hov ? '0 12px 32px rgba(0,0,0,.08)' : 'none', transition: 'all .3s ease' }}>
        <img src={img} alt={name}
          style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'center top', display: 'block', transform: hov ? 'scale(1.04)' : 'scale(1)', transition: 'transform .4s ease' }} />
        {badge && <div style={{ position: 'absolute', top: '8px', left: '8px', fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'white', background: accent, padding: '3px 8px', borderRadius: '2px' }}>{badge}</div>}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: accent, padding: '11px', textAlign: 'center', fontFamily: "'DM Sans',sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '2px', color: 'white', transform: hov ? 'translateY(0)' : 'translateY(100%)', transition: 'transform .25s ease' }}>ADD TO BAG +</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 500, color: '#1A1210' }}>{name}</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '14px', fontWeight: 600, color: accent }}>{price}</div>
      </div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '1px', color: muted }}>{tag}</div>
    </a>
  );
}

export default function ShopPage() {
  useScrollReveal();

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Shop Hero */}
      <section data-section style={{ background: black, minHeight: '55vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 64px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: `linear-gradient(90deg,transparent,${coral}40,transparent)`, animation: 'scanH 6s linear infinite', pointerEvents: 'none' }} />
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '4px', color: coral, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '28px', height: '1px', background: coral }} />CORALY UK · ORGANIC COTTON
          </div>
          <h1 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(36px,4.5vw,64px)', fontWeight: 700, lineHeight: 1.05, color: offW, marginBottom: '20px' }}>
            Wear your<br /><em style={{ color: coral }}>values.</em>
          </h1>
          <p data-reveal style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(250,247,244,.5)', maxWidth: '360px', marginBottom: '32px' }}>
            Organic cotton. On-demand. Zero waste. Every piece made by Teemill — so nothing is made until you order it.
          </p>
          <div data-reveal style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#kids" className="cbtn">Kids Collection</a>
            <a href="#adults" className="glbtn">Adult Collection</a>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={IMAGES.MODEL_COAST} alt="Model wearing Coraly Space"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', animation: 'ken 14s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left,transparent 60%,rgba(13,13,13,.5))' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'rgba(13,13,13,.8)', backdropFilter: 'blur(10px)', padding: '12px 18px', borderRadius: '3px', border: `1px solid rgba(239,122,108,.2)` }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '3px', color: coral, marginBottom: '3px' }}>AS WORN</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '13px', fontStyle: 'italic', color: offW }}>Butterfly & Moon Tee</div>
          </div>
        </div>
      </section>

      <Ticker items={['ORGANIC COTTON', '·', 'ON-DEMAND', '·', 'ZERO WASTE', '·', 'TEEMILL', '·', 'SUSTAINABLE', '·']} />

      {/* REWILD Spotlight */}
      <section data-section style={{ background: black, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div data-reveal style={{ position: 'relative', borderRadius: '3px', overflow: 'hidden' }}>
            <img src={IMAGES.PRODUCT_REWILD_SHOWCASE} alt="REWILD Tee" style={{ width: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', top: '16px', left: '16px', fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px', color: 'white', background: coralD, padding: '5px 12px', borderRadius: '2px' }}>ICON PIECE</div>
          </div>
          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />STATEMENT PIECE
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 700, color: offW, lineHeight: 1.05, marginBottom: '20px' }}>
              REWILD<br /><em style={{ color: coral }}>REWILD</em><br />REWILD
            </h2>
            <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(250,247,244,.45)', marginBottom: '28px' }}>
              Not just a tee. A manifesto. Rewilding yourself, your community, your relationship with nature. Black, bold, unapologetic.
            </p>
            <div data-reveal style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={teemillUrl('rewild-tee')} target="_blank" rel="noopener noreferrer" className="cbtn" style={{ background: coralD }}>Add to Bag — £28</a>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: 'rgba(250,247,244,.3)', display: 'flex', alignItems: 'center' }}>BLACK · STATEMENT · ORGANIC COTTON</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Collection */}
      <section id="kids" data-section style={{ background: cream, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: '48px' }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />KIDS COLLECTION
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: '#1A1210', lineHeight: 1.1 }}>
              Little explorers,<br /><em style={{ color: coral }}>big hearts.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {KIDS.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Adult Collection */}
      <section id="adults" data-section style={{ background: char, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: '48px' }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />ADULT COLLECTION
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1 }}>
              Wear it.<br /><em style={{ color: coral }}>Mean it.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {ADULTS.map((p, i) => (
              <div key={i} style={{ background: cream, borderRadius: '3px', padding: '16px' }}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand collection banner */}
      <section data-section style={{ background: black, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div data-reveal style={{ borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.3)' }}>
            <img src={IMAGES.BRAND_COLLECTION} alt="Coraly Space collection flat lay"
              style={{ width: '100%', display: 'block' }} />
          </div>
          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />THE FULL RANGE
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1, marginBottom: '20px' }}>
              Every piece.<br /><em style={{ color: coral }}>A statement.</em>
            </h2>
            <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(250,247,244,.4)', marginBottom: '28px' }}>
              Coraly Space × Teemill. Organic cotton, print-on-demand, shipped in recycled packaging. Fashion that gives back.
            </p>
            <div data-reveal style={{ display: 'flex', gap: '12px' }}>
              <Link href="/community" className="cbtn">Join to Shop Early</Link>
              <a href={TEEMILL_ALL} target="_blank" rel="noopener noreferrer" className="gbtn">Visit Teemill Store →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
