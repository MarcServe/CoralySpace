'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Ticker from '@/components/Ticker';
import WaitlistForm from '@/components/WaitlistForm';
import PinnedHorizontalSlides from '@/components/PinnedHorizontalSlides';
import { IMAGES } from '@/lib/coraly-images-manifest';

const coral = '#EF7A6C';
const coralD = '#C0392B';
const gold = '#C9A84C';
const black = '#0D0D0D';
const cream = '#F5EFE8';
const sand = '#EDE0D4';
const muted = '#8B7E7B';
const offW = '#FAF7F4';
const char = '#1C1C1C';

const TICKER_ITEMS = ['BELONG', '·', 'CONNECT', '·', 'THRIVE', '·', 'SUSTAINABILITY', '·', 'COMMUNITY', '·', 'ADVENTURE', '·', 'CORALY SPACE', '·'];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const words = ['Creative', 'Community', '&', 'Curation.'];

  return (
    <section
      className="home-hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: black,
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {/* Desktop uses a blurred fill layer plus a full-frame layer to avoid cropping the portrait video. */}
      <video
        className="home-hero__media home-hero__media--fill"
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      >
        <source src={IMAGES.HERO_MOTION} type="video/mp4" />
      </video>
      <video
        className="home-hero__media home-hero__media--full"
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
        }}
      >
        <source src={IMAGES.HERO_MOTION} type="video/mp4" />
      </video>

      <div
        className="home-hero__scrim"
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(13,13,13,.92) 0%, rgba(13,13,13,.58) 42%, rgba(13,13,13,.18) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="home-hero__glow"
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 18% 24%, rgba(239,122,108,.24), transparent 34%), radial-gradient(circle at 82% 74%, rgba(201,168,76,.18), transparent 32%)',
          animation: 'pulse 6s ease infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        className="home-hero__content"
        style={{
          position: 'relative',
          zIndex: 1,
          width: 'min(640px, 100%)',
          padding: '130px 64px 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'absolute', left: 0, right: 0, top: '68px', height: '1px', background: `linear-gradient(90deg,transparent,${coral}40,transparent)`, animation: 'scanH 6s linear infinite', pointerEvents: 'none' }} />
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '4px', color: coral, marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px', animation: 'fadeUp .6s ease .2s both' }}>
          <div style={{ width: '28px', height: '1px', background: coral }} />SUSTAINABILITY ECOSYSTEM
        </div>
        <h1 className="home-hero__title" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(48px,7vw,96px)', fontWeight: 700, lineHeight: .92, color: offW, marginBottom: '20px', letterSpacing: '-1.5px' }}>
          {words.map((w, i) => (
            <span key={i} style={{ display: 'block', animation: `wordIn .65s cubic-bezier(.16,1,.3,1) ${.3 + i * .1}s both`, fontStyle: i === 0 || w === '&' ? 'italic' : 'normal', color: w === '&' || w === 'Community' ? coral : offW }}>{w}</span>
          ))}
        </h1>
        <p style={{ maxWidth: '430px', fontSize: '17px', lineHeight: 1.7, color: 'rgba(250,247,244,.72)', marginBottom: '12px', animation: 'fadeUp .6s ease .75s both' }}>
          Creating a sustainability ecosystem together.
        </p>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: `${gold}dd`, marginBottom: '42px', animation: 'fadeUp .6s ease .85s both' }}>
          BELONG · CONNECT · THRIVE
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'fadeUp .6s ease .95s both' }}>
          <Link href="/shop" className="cbtn">Explore the Space</Link>
          <Link href="/community" className="glbtn">Join the Waitlist</Link>
        </div>
      </div>

      <div
        className="home-hero__stats"
        style={{
          position: 'absolute',
          right: '56px',
          bottom: '72px',
          zIndex: 2,
          maxWidth: '270px',
          textAlign: 'right',
          animation: 'fadeUp .6s ease 1.05s both',
        }}
      >
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '46px', fontWeight: 700, color: coral, lineHeight: 1 }}>25%</div>
        <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(250,247,244,.68)' }}>
          of adults feel lonely. Coraly Space is built for belonging, creativity, and connection.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid rgba(250,247,244,.18)' }}>
          {[{ n: '3+', l: 'Communities' }, { n: '∞', l: 'Creativity' }].map(({ n, l }) => (
            <div key={l}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '24px', fontWeight: 700, color: gold, lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'rgba(250,247,244,.45)', marginTop: '4px' }}>{l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Models Section ────────────────────────────────────────────────────────────
function ModelsSection() {
  const [hov, setHov] = useState<number | null>(null);
  const shots = [
    { img: IMAGES.MODEL_COAST, caption: 'Butterfly & Moon Tee', sub: 'At the coast · @coraly.space', accent: '#3A5A8A' },
    { img: IMAGES.MODEL_LISBON_SCULPTURE, caption: 'Coraly Space Hoodie', sub: 'Lisbon explorer · Coraly UK', accent: gold },
    { img: IMAGES.CAROLINE_FIELD, caption: 'Coraly Space Tank', sub: 'Out in nature · Summer collection', accent: coral },
    { img: IMAGES.CAROLINE_SNOW, caption: 'Model with Impact', sub: 'Every season. Every explorer.', accent: '#8B2020' },
  ];

  return (
    <section id="models-section" className="home-section home-section--dark" data-section style={{ background: char, padding: '80px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />COMMUNITY IN MOTION
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1 }}>
              Explorers.<br /><em style={{ color: coral }}>Every one of them.</em>
            </h2>
          </div>
          <Link href="/shop" className="gbtn" data-reveal>View All Community →</Link>
        </div>
        <div className="responsive-grid responsive-grid--3" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
          {shots.map((s, i) => (
            <div key={i} data-reveal
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', cursor: 'pointer', transform: hov === i ? 'scale(1.02)' : 'scale(1)', transition: 'transform .4s cubic-bezier(.16,1,.3,1)' }}>
              <img src={s.img} alt={s.caption}
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block', transform: hov === i ? 'scale(1.05)' : 'scale(1)', transition: 'transform .6s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(13,13,13,.8) 0%,transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '16px', fontWeight: 600, color: offW, marginBottom: '4px' }}>{s.caption}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', color: 'rgba(250,247,244,.55)' }}>{s.sub}</div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: s.accent, opacity: hov === i ? 1 : 0, transition: 'opacity .3s' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Preview ─────────────────────────────────────────────────────────────
function AboutPreview() {
  return (
    <section className="home-section home-section--light" data-section style={{ background: cream, padding: '100px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="responsive-grid responsive-grid--2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
          <div style={{ position: 'relative' }} data-reveal>
            <div style={{ borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.15)' }}>
              <img src={IMAGES.CAROLINE_AUTUMN} alt="Caroline — Founder"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '52px', height: '52px', borderTop: `2px solid ${gold}`, borderLeft: `2px solid ${gold}`, opacity: .6 }} />
            <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', width: '52px', height: '52px', borderBottom: `2px solid ${gold}`, borderRight: `2px solid ${gold}`, opacity: .6 }} />
            <div style={{ position: 'absolute', top: '-18px', right: '20px', width: '72px', height: '72px', animation: 'spin 25s linear infinite' }}>
              <img src={IMAGES.LOGO_UK_PREMIUM} alt="Coraly UK"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          </div>

          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />FOUNDER'S STORY
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 700, color: '#1A1210', lineHeight: 1.1, marginBottom: '28px' }}>
              Building a kinder,<br /><em style={{ color: coral }}>more connected</em><br />world.
            </h2>
            <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: muted, marginBottom: '20px' }}>
              There is a loneliness epidemic — 25% of adults are lonely and looking for a place of belonging. Solopreneurs and creatives feel it most acutely. Caroline built Coraly Space to be that place.
            </p>
            <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: muted, marginBottom: '32px' }}>
              From dance workshops in Gloucestershire to curated sustainable retail, everything Caroline creates is designed so people and planet thrive together.
            </p>
            <div data-reveal style={{ display: 'flex', gap: '12px' }}>
              <Link href="/about" className="cbtn">Meet Caroline</Link>
              <Link href="/events" className="gbtn">Our Events →</Link>
            </div>
          </div>
        </div>

        <div data-reveal style={{ marginTop: '60px', paddingTop: '48px', borderTop: `1px solid ${sand}`, textAlign: 'center' }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px', color: muted, marginBottom: '20px' }}>EVERY EXPLORER IS WELCOME</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {['Female Solopreneurs', 'Neurodivergent Creators', 'Parents', 'LGBTQ+ Community', 'Diaspora', 'Dancers', 'Creative Technologists', 'Universities', 'Sustainable Makers'].map(t => (
              <span key={t} style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: coral, border: `1px solid rgba(239,122,108,.3)`, background: 'rgba(239,122,108,.05)', padding: '5px 12px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Blog Section ──────────────────────────────────────────────────────────────
function BlogSection() {
  const [hov, setHov] = useState<number | null>(null);
  const posts = [
    { img: IMAGES.CAROLINE_SNOW, cat: 'Models with Impact', title: 'The Woman in Red', desc: 'Every season brings a new chapter. Winter is not an absence — it\'s a transformation.', time: '5 min', accent: '#8B2020' },
    { img: IMAGES.BLOG_WINTER_STARS, cat: 'Sustainability & Lifestyle', title: 'Winter Wonderlands', desc: 'Starlit forests, silent paths, warm community.', time: '4 min', accent: '#2A4A7F' },
    { img: IMAGES.BLOG_AUTUMN_LEAVES, cat: 'Circular Economy', title: 'Quality Over Quantity', desc: 'Autumn teaches us. Let go of what no longer serves — buy less, buy better.', time: '6 min', accent: coral },
    { img: IMAGES.BLOG_WINTER_COSY, cat: 'Comfort & Wellbeing', title: 'Busy Lives, Creativity & Comfort', desc: 'The season for slowing down, warming up, and creating with intention.', time: '4 min', accent: gold },
  ];

  return (
    <section className="home-section home-section--dark" data-section style={{ background: black, padding: '100px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />KNOWLEDGE HUB
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1 }}>
              Learn. Share.<br /><em style={{ color: coral }}>Grow Together.</em>
            </h2>
          </div>
          <Link href="/learn" className="gbtn" data-reveal>All Articles →</Link>
        </div>
        <div className="responsive-grid responsive-grid--blog" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '16px' }}>
          {posts.map((p, i) => (
            <Link key={i} href="/learn" style={{ textDecoration: 'none', gridColumn: i === 0 ? '1' : 'auto', gridRow: i === 0 ? '1/3' : 'auto' }}
              data-reveal
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', border: `1.5px solid ${hov === i ? p.accent : 'rgba(250,247,244,.06)'}`, cursor: 'pointer', transition: 'all .3s ease', transform: hov === i ? 'translateY(-4px)' : 'none', boxShadow: hov === i ? `0 16px 40px rgba(0,0,0,.3), 0 0 0 1px ${p.accent}30` : 'none', height: '100%' }}>
                <div style={{ height: i === 0 ? '260px' : '160px', overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transform: hov === i ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s ease' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 40%,rgba(13,13,13,.6))' }} />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: p.accent, background: 'rgba(13,13,13,.85)', padding: '4px 10px', borderRadius: '2px' }}>{p.cat.toUpperCase()}</div>
                </div>
                <div style={{ padding: i === 0 ? '24px' : '18px 20px', background: char }}>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: i === 0 ? '22px' : '16px', fontWeight: 600, color: offW, lineHeight: 1.3, marginBottom: '10px' }}>{p.title}</h3>
                  {i === 0 && <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(250,247,244,.4)', marginBottom: '16px' }}>{p.desc}</p>}
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(250,247,244,.07)', paddingTop: '12px' }}>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', color: 'rgba(250,247,244,.3)', letterSpacing: '1px' }}>{p.time} read</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '11px', fontWeight: 600, color: p.accent }}>Read →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Shop Preview ──────────────────────────────────────────────────────────────
function ShopPreview() {
  const [hov, setHov] = useState<number | null>(null);
  const items = [
    { img: IMAGES.PRODUCT_BUTTERFLY_MOON, name: 'Butterfly & Moon', price: '£26', tag: 'WHITE · WOMEN\'S', accent: '#3A5A8A', badge: 'AS WORN' },
    { img: IMAGES.PRODUCT_MOON_PHASE, name: 'Moon Phase Tee', price: '£22', tag: 'WHITE · UNISEX', accent: coral, badge: null },
    { img: IMAGES.PRODUCT_REWILD, name: 'REWILD Tee', price: '£28', tag: 'BLACK · STATEMENT', accent: coralD, badge: 'ICON' },
    { img: IMAGES.PRODUCT_CORAL_ROSE, name: 'Coral Rose Hoodie', price: '£38', tag: 'GREY · HOODIE', accent: coral, badge: 'LOVED' },
  ];

  return (
    <section className="home-section home-section--light" data-section style={{ background: cream, padding: '80px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="responsive-grid responsive-grid--shop" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
          <div data-reveal style={{ position: 'relative', borderRadius: '3px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,.1)' }}>
            <img src={IMAGES.MODEL_COAST} alt="Model wearing Coraly Space"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(13,13,13,.8)', backdropFilter: 'blur(8px)', padding: '10px 16px', borderRadius: '2px' }}>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: coral, marginBottom: '2px' }}>AS WORN</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '13px', fontStyle: 'italic', color: offW }}>Butterfly & Moon Tee</div>
            </div>
          </div>

          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />CORALY UK · SHOP
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: '#1A1210', marginBottom: '32px', lineHeight: 1.1 }}>
              Wear your<br /><em style={{ color: coral }}>values.</em>
            </h2>
            <div className="responsive-grid responsive-grid--2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {items.map((p, i) => (
                <Link key={i} href="/shop" style={{ textDecoration: 'none' }} data-reveal
                  onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
                  <div style={{ cursor: 'pointer', transform: hov === i ? 'translateY(-6px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', marginBottom: '10px', border: `1.5px solid ${hov === i ? p.accent : sand}`, boxShadow: hov === i ? '0 12px 32px rgba(0,0,0,.08)' : 'none', transition: 'all .3s ease' }}>
                      <img src={p.img} alt={p.name}
                        style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'center top', display: 'block', transform: hov === i ? 'scale(1.04)' : 'scale(1)', transition: 'transform .4s ease' }} />
                      {p.badge && <div style={{ position: 'absolute', top: '8px', left: '8px', fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'white', background: p.accent, padding: '3px 8px', borderRadius: '2px' }}>{p.badge}</div>}
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: p.accent, padding: '11px', textAlign: 'center', fontFamily: "'DM Sans',sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '2px', color: 'white', transform: hov === i ? 'translateY(0)' : 'translateY(100%)', transition: 'transform .25s ease' }}>ADD +</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 500, color: '#1A1210' }}>{p.name}</div>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '14px', fontWeight: 600, color: p.accent }}>{p.price}</div>
                    </div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '1px', color: muted }}>{p.tag}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div data-reveal style={{ marginTop: '28px' }}>
              <Link href="/shop" className="cbtn">Full Collection →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Four Pillars ─────────────────────────────────────────────────────────────
interface CardProps {
  num: string;
  label: string;
  titleTop: string;
  titleBot: string;
  desc: string;
  cta: string;
  href: string;
  accent: string;
  tag: string;
  img?: string;
  hov: boolean;
  onHover: () => void;
  onLeave: () => void;
  minimal?: boolean;
  blendedImage?: boolean;
}

function TechyCard({ num, label, titleTop, titleBot, desc, cta, href, accent, tag, img, hov, onHover, onLeave, minimal = false, blendedImage = false }: CardProps) {
  const nodes: [number, number][] = [[60,80],[200,55],[350,110],[295,205],[150,235],[78,325],[335,315]];
  const lines: [number, number][] = [[0,1],[1,2],[1,3],[0,4],[4,3],[3,6],[4,5],[5,6],[2,6]];

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: '#0A0A0A',
        border: `1.5px solid ${hov ? accent : 'rgba(250,247,244,.08)'}`,
        borderRadius: '4px', overflow: 'hidden',
        transition: 'border-color .3s ease, box-shadow .3s ease',
        boxShadow: hov ? `0 0 50px ${accent}28` : 'none',
        height: '100%', display: 'flex', flexDirection: 'column',
      }}
    >
      {/* ── Image zone ──────────────────────────────────────────── */}
      <div style={{ flex: minimal ? '0 0 52%' : '0 0 44%', position: 'relative', overflow: 'hidden', background: minimal ? '#101010' : 'transparent' }}>
        {img ? (
          <>
            {minimal ? (
              blendedImage ? (
                <div className="pillar-card-image-bg pillar-card-image-bg--blended" aria-hidden>
                  <img className="pillar-card-motion-fill" src={img} alt="" aria-hidden />
                  <img className="pillar-card-motion-main" src={img} alt="" aria-hidden />
                </div>
              ) : (
                <div
                  className="pillar-card-image-bg"
                  aria-hidden
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${img})`,
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#101010',
                  }}
                />
              )
            ) : (
              <img src={img} alt="" aria-hidden
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  filter: `saturate(0.45) brightness(${hov ? 1 : 0.85})`,
                  transition: 'filter .5s ease',
                }} />
            )}
            {!minimal && (
              <>
                {/* Subtle CRT scanline texture */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.08) 3px, rgba(0,0,0,.08) 4px)`,
                }} />
                {/* Accent top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: `linear-gradient(90deg, transparent, ${accent}99, transparent)`,
                }} />
                {/* Feather into card background at bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '52%',
                  background: `linear-gradient(to top, #0A0A0A 0%, transparent 100%)`,
                  pointerEvents: 'none',
                }} />
              </>
            )}
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, #111 0%, ${accent}18 100%)` }} />
        )}
        {!minimal && (
          <div style={{
            position: 'absolute', left: 0, right: 0, height: '1px',
            background: `linear-gradient(90deg, transparent, ${accent}66, transparent)`,
            animation: 'scanH 7s linear infinite', pointerEvents: 'none',
          }} />
        )}
      </div>

      {/* ── Text zone (remaining height) ──────────────────────── */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', padding: '28px 36px 36px', background: '#111214', overflow: 'hidden' }}>
        {/* Network node SVG — very faint, decorative only */}
        {!minimal && (
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none',
            opacity: hov ? .15 : .05, transition: 'opacity .5s ease' }}
            viewBox="0 0 400 380" preserveAspectRatio="xMidYMid slice">
            {lines.map(([a, b], i) => (
              <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
                stroke={accent} strokeWidth=".7" opacity=".5" />
            ))}
            {nodes.map(([cx, cy], j) => (
              <g key={j}>
                <circle cx={cx} cy={cy} r="14" fill="none" stroke={accent} strokeWidth=".7" opacity=".3"
                  style={{ animation: `pulseRing ${1.8 + j * .3}s ease infinite` }} />
                <circle cx={cx} cy={cy} r="3.5" fill={accent} opacity=".85"
                  style={{ animation: `nodeFloat ${2.4 + j * .35}s ease infinite` }} />
              </g>
            ))}
          </svg>
        )}

        {/* Text content */}
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px', color: accent }}>{label}</div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '32px', fontWeight: 700, color: `${accent}12`, lineHeight: 1, userSelect: 'none' }}>{num}</div>
          </div>

          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: accent, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent, display: 'inline-block', animation: 'blink 1.8s ease infinite' }} />
            {tag}
          </div>

          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 700, lineHeight: 1.1, marginBottom: '10px' }}>
            <span style={{ color: offW }}>{titleTop}</span>
            {titleBot && <><br /><em style={{ color: accent }}>{titleBot}</em></>}
          </h3>

          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', lineHeight: 1.75, color: 'rgba(250,247,244,.82)', flex: 1, marginBottom: '22px' }}>{desc}</p>

          <Link href={href} className="gbtn" style={{ alignSelf: 'flex-start' }}>{cta} →</Link>
        </div>
      </div>
    </div>
  );
}

function SoftCard({ num, label, titleTop, titleBot, desc, cta, href, accent, tag, img, hov, onHover, onLeave, minimal = false, blendedImage = false }: CardProps) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: cream,
        border: `1.5px solid ${hov ? accent : sand}`,
        borderRadius: '4px', overflow: 'hidden',
        transition: 'border-color .3s ease, box-shadow .3s ease',
        boxShadow: hov ? '0 24px 64px rgba(0,0,0,.13)' : '0 4px 20px rgba(0,0,0,.05)',
        height: '100%', display: 'flex', flexDirection: 'column',
      }}
    >
      {/* ── Image zone ──────────────────────────────────────────── */}
      <div style={{ flex: minimal ? '0 0 52%' : '0 0 44%', position: 'relative', overflow: 'hidden', background: '#fff' }}>
        {img ? (
          <>
            {minimal ? (
              blendedImage ? (
                <div className="pillar-card-image-bg pillar-card-image-bg--blended" aria-hidden>
                  <img className="pillar-card-motion-fill" src={img} alt="" aria-hidden />
                  <img className="pillar-card-motion-main" src={img} alt="" aria-hidden />
                </div>
              ) : (
                <div
                  className="pillar-card-image-bg"
                  aria-hidden
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${img})`,
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#fff',
                  }}
                />
              )
            ) : (
              <img src={img} alt="" aria-hidden
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'filter .5s ease',
                  filter: hov ? 'brightness(1.05)' : 'brightness(1)',
                }} />
            )}
            {!minimal && (
              <>
                {/* Botanical SVG in corner */}
                <div style={{ position: 'absolute', top: '12px', right: '12px', width: '48px', height: '48px', opacity: hov ? .55 : .35, animation: 'petalSway 5s ease infinite', pointerEvents: 'none', transition: 'opacity .4s' }}>
                  <svg viewBox="0 0 70 70" fill="none">
                    {[0, 72, 144, 216, 288].map((deg, i) => (
                      <ellipse key={i} cx="35" cy="19" rx="8" ry="18" fill={accent} transform={`rotate(${deg} 35 35)`} />
                    ))}
                    <circle cx="35" cy="35" r="5" fill={accent} />
                  </svg>
                </div>
                {/* Feather into cream at bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '48%',
                  background: `linear-gradient(to top, ${cream} 0%, transparent 100%)`,
                  pointerEvents: 'none',
                }} />
              </>
            )}
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${sand} 0%, ${cream} 100%)` }} />
        )}
      </div>

      {/* ── Text zone (remaining height) ──────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '28px 36px 36px', background: cream }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px', color: accent, opacity: .8 }}>{label}</div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '32px', fontWeight: 700, color: 'rgba(26,18,16,.06)', lineHeight: 1, userSelect: 'none' }}>{num}</div>
        </div>

        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: accent, marginBottom: '12px' }}>{tag}</div>

        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 700, lineHeight: 1.1, marginBottom: '10px' }}>
          <em style={{ color: accent }}>{titleTop}</em>
          {titleBot && <><br /><span style={{ color: '#1A1210' }}>{titleBot}</span></>}
        </h3>

        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', lineHeight: 1.75, color: muted, flex: 1, marginBottom: '22px' }}>{desc}</p>

        <Link href={href} className="cbtn" style={{ alignSelf: 'flex-start' }}>{cta} →</Link>
      </div>
    </div>
  );
}

function PillarsSection() {
  const [hov, setHov] = useState<number | null>(null);

  const PILLARS: (CardProps & { type: 'techy' | 'soft' })[] = [
    {
      type: 'techy', num: '01', label: 'CORALYSPACE.COM · COMMUNITY',
      titleTop: 'Community', titleBot: 'Marketplace',
      desc: 'Peer-to-peer sustainable commerce. Buy, sell, and connect with conscious creators worldwide.',
      cta: 'Join the Community', href: '/community',
      accent: coral, tag: 'PEER-TO-PEER · SUSTAINABLE',
      img: IMAGES.BRAND_CREATE_CC_MOTION,
      blendedImage: true,
      hov: false, onHover: () => {}, onLeave: () => {},
    },
    {
      type: 'soft', num: '02', label: 'CORALY.UK · STORE',
      titleTop: 'Coraly', titleBot: 'Store',
      desc: "Organic cotton. On-demand. Zero waste. Caroline's own designs — worn with intention.",
      cta: 'Shop the Collection', href: '/shop',
      accent: gold, tag: 'ORGANIC · ON-DEMAND · ZERO WASTE',
      img: IMAGES.BRAND_CORALY_UK_SHIRT_MOTION,
      blendedImage: true,
      hov: false, onHover: () => {}, onLeave: () => {},
    },
    {
      type: 'soft', num: '03', label: 'CORALYSPACE.COM · LEARN',
      titleTop: 'Knowledge', titleBot: 'Hub',
      desc: 'Blog, courses, events, and community wisdom. Learn, share, and grow together.',
      cta: 'Explore the Hub', href: '/learn',
      accent: coral, tag: 'BLOG · COURSES · EVENTS',
      img: IMAGES.BRAND_KNOWLEDGE_TEA_MOTION,
      blendedImage: true,
      hov: false, onHover: () => {}, onLeave: () => {},
    },
    {
      type: 'techy', num: '04', label: 'CORALYSPACE.COM · PLAY',
      titleTop: 'Social', titleBot: 'Games',
      desc: 'Eco challenges, missions, badges, gamification. Make sustainability a collective adventure.',
      cta: 'Play & Earn', href: '/community',
      accent: gold, tag: 'CHALLENGES · MISSIONS · BADGES',
      img: IMAGES.BRAND_ADVENTURE,
      blendedImage: true,
      hov: false, onHover: () => {}, onLeave: () => {},
    },
  ];

  return (
    <section className="home-section home-section--pillars" data-section style={{ background: black, padding: '100px 0 0' }}>
      <div className="home-section__inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div data-reveal style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ height: '1px', width: '36px', background: `linear-gradient(90deg, transparent, ${coral})` }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '4px', color: coral }}>CORALYSPACE.COM · TECH</span>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: gold, animation: 'pulse 2s ease infinite' }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '4px', color: gold }}>CORALY.UK · HOLISTIC</span>
            <div style={{ height: '1px', width: '36px', background: `linear-gradient(90deg, ${gold}, transparent)` }} />
          </div>
          <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,4.5vw,58px)', fontWeight: 700, color: offW, lineHeight: 1.05, marginBottom: '20px' }}>
            Four Pillars.<br /><em style={{ color: coral }}>One Ecosystem.</em>
          </h2>
          <p data-reveal style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '15px', color: 'rgba(250,247,244,.4)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.85 }}>
            Everything Coraly builds is designed so people and planet thrive together.
          </p>
        </div>

        <div style={{ marginTop: '16px' }}>
          <PinnedHorizontalSlides
            topOffsetPx={68}
            progress={true}
            heightPerSlideVh={84}
            slides={PILLARS.map((p, i) => ({
              key: p.num,
              content: (
                <div
                  className="pillar-slide-card-wrap"
                  style={{
                    height: '100%',
                    width: '100%',
                    padding: '0 8px',
                    boxSizing: 'border-box',
                  }}
                >
                  {p.type === 'techy' ? (
                    <TechyCard
                      key={i}
                      {...p}
                      minimal={true}
                      hov={hov === i}
                      onHover={() => setHov(i)}
                      onLeave={() => setHov(null)}
                    />
                  ) : (
                    <SoftCard
                      key={i}
                      {...p}
                      minimal={true}
                      hov={hov === i}
                      onHover={() => setHov(i)}
                      onLeave={() => setHov(null)}
                    />
                  )}
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <PillarsSection />
      <ModelsSection />
      <AboutPreview />
      <BlogSection />
      <ShopPreview />
      <WaitlistForm />
    </>
  );
}
