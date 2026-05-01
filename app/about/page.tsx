'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Ticker from '@/components/Ticker';
import PinnedHorizontalSlides from '@/components/PinnedHorizontalSlides';
import { IMAGES, BRAND_CTA_EXPLORE_CREATE } from '@/lib/coraly-images-manifest';

const coral = '#EF7A6C';
const gold = '#C9A84C';
const black = 'var(--bg)';
const cream = 'var(--bg)';
const sand = 'var(--bg3)';
const muted = 'var(--txt2)';
const offW = 'var(--txt)';
const char = 'var(--bg2)';

const PILLARS = [
  { icon: '🛍️', title: 'Community Marketplace', desc: 'Peer-to-peer sustainable commerce. Buy and sell with purpose, from makers who care.' },
  { icon: '👕', title: 'Coraly Store', desc: 'Caroline\'s own Teemill merchandise. Organic cotton, on-demand, zero waste.' },
  { icon: '📚', title: 'Knowledge Hub', desc: 'Blog, courses, events, and community wisdom — all in one place.' },
  { icon: '🎮', title: 'Social Games', desc: 'Eco challenges, missions, badges, gamification. Sustainability made playful.' },
  { icon: '🩰', title: 'Movement & Activity', desc: 'Dance, voice, walks, and body-led creative events.' },
];

const TABS = ['Story', 'Mission', 'Values', 'Team'];

export default function AboutPage() {
  const [tab, setTab] = useState(0);
  useScrollReveal();

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section data-section style={{ background: black, minHeight: '60vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 64px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: `linear-gradient(90deg,transparent,${coral}40,transparent)`, animation: 'scanH 8s linear infinite', pointerEvents: 'none' }} />
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '4px', color: coral, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '28px', height: '1px', background: coral }} />FOUNDER'S STORY
          </div>
          <h1 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 700, lineHeight: 1.05, color: offW, marginBottom: '20px' }}>
            Building a kinder,<br /><em style={{ color: coral }}>more connected</em><br />world.
          </h1>
          <p data-reveal style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--txt2)', maxWidth: '380px', marginBottom: '32px' }}>
            Coraly Space is Caroline McGlone's answer to the loneliness epidemic — a sustainability ecosystem where every explorer belongs.
          </p>
          <div data-reveal style={{ display: 'flex', gap: '14px' }}>
            <Link href="/community" className="cbtn">Join the Community</Link>
            <Link href="/events" className="glbtn">See Our Events</Link>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={IMAGES.CAROLINE_RIVER} alt="Caroline McGlone — Founder"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', animation: 'ken 14s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left,transparent 50%,rgba(13,13,13,.6))' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'rgba(13,13,13,.8)', backdropFilter: 'blur(12px)', padding: '14px 20px', borderRadius: '3px', border: `1px solid rgba(239,122,108,.2)` }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '3px', color: coral, marginBottom: '4px' }}>CAROLINE McGLONE</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '14px', fontStyle: 'italic', color: offW }}>Founder, Coraly Space</div>
          </div>
        </div>
      </section>

      <Ticker items={['BELONG', '·', 'CONNECT', '·', 'THRIVE', '·', 'COMMUNITY', '·', 'SUSTAINABILITY', '·', 'CREATIVITY', '·']} />

      {/* Tabbed Story / Mission / Values */}
      <section data-section style={{ background: cream, padding: '100px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
          {/* Left — editorial photo */}
          <div style={{ position: 'relative' }} data-reveal>
            <div style={{ borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.15)' }}>
              <img src={IMAGES.CAROLINE_AUTUMN} alt="Caroline — editorial"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '52px', height: '52px', borderTop: `2px solid ${gold}`, borderLeft: `2px solid ${gold}`, opacity: .6 }} />
            <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', width: '52px', height: '52px', borderBottom: `2px solid ${gold}`, borderRight: `2px solid ${gold}`, opacity: .6 }} />
            <div style={{ position: 'absolute', top: '-18px', right: '20px', width: '72px', height: '72px', animation: 'spin 25s linear infinite' }}>
              <img src={IMAGES.LOGO_UK_PREMIUM} alt="Coraly UK"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Right — tabs */}
          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />ABOUT CORALY SPACE
            </div>

            {/* Tab switcher */}
            <div data-reveal style={{ display: 'flex', gap: '4px', marginBottom: '32px', background: sand, padding: '4px', borderRadius: '4px', width: 'fit-content' }}>
              {TABS.map((t, i) => (
                <button key={t} onClick={() => setTab(i)}
                  style={{ padding: '8px 20px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', background: tab === i ? coral : 'transparent', color: tab === i ? 'white' : muted, transition: 'all .2s ease' }}>
                  {t.toUpperCase()}
                </button>
              ))}
            </div>

            {tab === 0 && (
              <div>
                <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: muted, marginBottom: '20px' }}>
                  There is a loneliness epidemic — 25% of adults are lonely and looking for a place of belonging. Solopreneurs and creatives feel it most acutely. Caroline built Coraly Space to be that place.
                </p>
                <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: muted, marginBottom: '20px' }}>
                  From dance workshops in Gloucestershire to curated sustainable retail, everything Caroline creates is designed so people and planet thrive together.
                </p>
                <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: muted, marginBottom: '32px' }}>
                  Coraly Space is two things at once: coralyspace.com — dark, techy, community platform; and coralyspace.co.uk — warm, holistic, retail and trade arm. Two personalities, one mission.
                </p>
              </div>
            )}
            {tab === 1 && (
              <div>
                <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: muted, marginBottom: '20px' }}>
                  To build a kinder, more connected world where every explorer — creator, maker, consumer, dancer, neurodivergent thinker, or someone from the diaspora — finds their community.
                </p>
                <div data-reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '24px', marginBottom: '28px' }}>
                  {[{ i: '📅', t: 'Hybrid Events' }, { i: '🌐', t: 'Online Community' }, { i: '🛍️', t: 'Curated Retail' }, { i: '🌿', t: 'Sustainability' }].map(({ i, t }) => (
                    <div key={t} style={{ padding: '16px', background: sand, borderRadius: '3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '20px' }}>{i}</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 600, color: 'var(--txt)' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === 2 && (
              <div>
                {['Sustainability first — people and planet above profit.', 'Radical inclusion — every explorer is welcome.', 'Creative courage — neurodivergence is a superpower.', 'Circular thinking — buy less, buy better, pass it on.', 'Real community — not followers, but belonging.'].map((v, i) => (
                  <div key={i} data-reveal style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: coral, marginTop: '7px', flexShrink: 0 }} />
                    <p style={{ fontSize: '14px', lineHeight: 1.8, color: muted }}>{v}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === 3 && (
              <div>
                <div data-reveal style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '28px', padding: '20px', background: sand, borderRadius: '3px' }}>
                  <img src={IMAGES.CAROLINE_MODEL} alt="Caroline" style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: `2px solid ${coral}` }} />
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '18px', fontWeight: 600, color: 'var(--txt)' }}>Caroline McGlone</div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: coral }}>FOUNDER · CREATOR · EXPLORER</div>
                    <p style={{ fontSize: '13px', color: muted, marginTop: '6px', lineHeight: 1.6 }}>Bristol / Gloucestershire · coralyspace@gmail.com</p>
                  </div>
                </div>
                <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: muted, marginBottom: '20px' }}>
                  Caroline is a dancer, maker, community builder, and founder. She created Coraly Space because she lived through the loneliness epidemic — and decided to do something about it.
                </p>
                <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: muted }}>
                  She runs Dance & Voice workshops at Britannia Dance Studio, Cainscross. She wears her own designs. She shows up — at stalls, at events, on social — as herself.
                </p>
              </div>
            )}

            <div data-reveal style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
              <Link href="/events" className="cbtn">Meet Caroline at an Event</Link>
              <Link href="/community" className="gbtn">Our Community →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="about-pillars-section" data-section style={{ background: char, padding: '80px 0 0', overflowX: 'clip', overflowY: 'visible' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '14px' }}>THE FIVE PILLARS</div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1 }}>
              One ecosystem.<br /><em style={{ color: coral }}>Five ways in.</em>
            </h2>
          </div>
        </div>

        <PinnedHorizontalSlides
          topOffsetPx={68}
          progress={false}
          heightPerSlideVh={76}
          slides={PILLARS.map((p, i) => ({
            key: p.title,
            content: (
              <div className="about-pillar-slide">
                <div className="about-pillar-card" data-reveal>
                  <div style={{ fontSize: '42px', marginBottom: '20px' }}>{p.icon}</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px', color: coral, marginBottom: '16px' }}>
                    PILLAR 0{i + 1}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(34px,5vw,68px)', fontWeight: 700, color: offW, marginBottom: '18px', lineHeight: 1 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(15px,1.5vw,20px)', lineHeight: 1.75, color: 'var(--txt2)', maxWidth: '620px' }}>{p.desc}</p>
                </div>
              </div>
            ),
          }))}
        />
      </section>

      {/* Yin-yang dual brand */}
      <section className="about-dual-section" data-section style={{ background: cream, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '14px' }}>TWO SIDES, ONE MISSION</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.1 }}>
              The dual<br /><em style={{ color: coral }}>personality.</em>
            </h2>
          </div>
          <div className="about-dual-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            <div className="about-dual-card about-dual-card--dark" data-reveal style={{ background: black, padding: '56px 48px', borderRadius: '3px 0 0 3px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={IMAGES.LOGO_SPACE_DARK} alt="Coraly Space" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px', border: `2px solid ${coral}` }} />
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '10px' }}>CORALY SPACE</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: 'rgba(250,247,244,.3)', marginBottom: '16px' }}>CORALYSPACE.COM</div>
              <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(250,247,244,.45)' }}>Dark. Techy. Community platform. Where explorers gather, trade, learn, and play.</p>
            </div>
            <div className="about-dual-card about-dual-card--light" data-reveal style={{ background: '#F0E8DF', padding: '56px 48px', borderRadius: '0 3px 3px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={IMAGES.LOGO_UK_PREMIUM} alt="Coraly UK" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px', border: `2px solid ${gold}` }} />
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: gold, marginBottom: '10px' }}>CORALY UK</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: muted, marginBottom: '16px' }}>CORALYSPACE.CO.UK</div>
              <p style={{ fontSize: '13px', lineHeight: 1.75, color: muted }}>Warm. Holistic. Retail and trade arm. Where sustainable makers meet conscious consumers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gruffalo + personality */}
      <section data-section style={{ background: black, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />THE HUMAN BEHIND IT
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1, marginBottom: '20px' }}>
              Yes, that's a community member<br /><em style={{ color: coral }}>with the Gruffalo.</em>
            </h2>
            <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--txt2)', marginBottom: '20px' }}>
              Coraly Space is built around real people — not stock models, not faceless community. Members show up as themselves: in nature, at events, on stalls, and in everyday moments.
            </p>
            <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: 'var(--txt2)', marginBottom: '28px' }}>
              That authenticity is the product. When you join Coraly Space, you join a world of explorers, makers, and joyful characters. And sometimes, the Gruffalo's too.
            </p>
            <div data-reveal>
              <Link href="/events" className="cbtn">Come Meet Her →</Link>
            </div>
          </div>
          <div data-reveal style={{ position: 'relative', borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.4)' }}>
            <img src={IMAGES.CAROLINE_GRUFFALO} alt="Caroline with the Gruffalo" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '-18px', right: '20px', width: '72px', height: '72px', animation: 'spin 20s linear infinite' }}>
              <img src={IMAGES.BRAND_GRUFFALO_ART} alt="Gruffalo art badge" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA explore create */}
      <section data-section style={{ background: cream, padding: '60px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div data-reveal style={{ borderRadius: '3px', overflow: 'hidden' }}>
            <img src={BRAND_CTA_EXPLORE_CREATE} alt="Explore. Create. Connect." style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Community tags */}
      <section data-section style={{ background: black, padding: '60px 48px 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px', color: muted, marginBottom: '24px' }}>EVERY EXPLORER IS WELCOME</div>
          <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
            {['Female Solopreneurs', 'Neurodivergent Creators', 'Parents', 'LGBTQ+ Community', 'Diaspora', 'Dancers', 'Creative Technologists', 'Universities', 'Sustainable Makers', 'Artists', 'Small Businesses', 'Cultural Partners'].map(t => (
              <span key={t} style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: coral, border: `1px solid rgba(239,122,108,.3)`, background: 'rgba(239,122,108,.05)', padding: '6px 14px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <div data-reveal>
            <Link href="/community" className="cbtn" style={{ marginRight: '12px' }}>Join the Space</Link>
            <Link href="/events" className="gbtn">See What's On</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
