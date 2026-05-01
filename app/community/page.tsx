'use client';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Ticker from '@/components/Ticker';
import WaitlistForm from '@/components/WaitlistForm';
import PinnedHorizontalSlides from '@/components/PinnedHorizontalSlides';
import { CoralyCommunityGroups } from '@/components/CoralyFeatureSections';
import { BRAND_HERO_HEART_LEAF, BRAND_VENN_SUSTAINABILITY } from '@/lib/coraly-images-manifest';

const coral = '#EF7A6C';
const black = 'var(--bg)';
const cream = 'var(--bg)';
const muted = 'var(--txt2)';
const offW = 'var(--txt)';
const char = 'var(--bg2)';

const FEATURES = [
  { icon: '🛍️', title: 'Marketplace', desc: 'Buy and sell sustainably with makers who care. Peer-to-peer, values-first commerce.', href: '/shop' },
  { icon: '📚', title: 'Knowledge Hub', desc: 'Articles, guides, and community wisdom on sustainability, creativity, and wellbeing.', href: '/learn' },
  { icon: '📅', title: 'Live Events', desc: 'Dance workshops, makers markets, and creative circles. In-person and online.', href: '/events' },
  { icon: '🎮', title: 'Social Games', desc: 'Eco challenges, missions, and community badges. Sustainability made playful.', href: '#' },
  { icon: '👥', title: 'Community Space', desc: 'Connect with like-minded explorers. Share, collaborate, and grow together.', href: '#' },
  { icon: '🌿', title: 'Impact Tracking', desc: 'See the collective impact of the community. Circular economy in action.', href: '#' },
];

const STATS = [
  { n: '25%', label: 'Adults are lonely' },
  { n: '3+', label: 'Communities' },
  { n: '∞', label: 'Creativity' },
  { n: '1', label: 'Mission' },
];

export default function CommunityPage() {
  useScrollReveal();

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section data-section style={{ background: black, minHeight: '65vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 64px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: `linear-gradient(90deg,transparent,${coral}40,transparent)`, animation: 'scanH 6s linear infinite', pointerEvents: 'none' }} />
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '4px', color: coral, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '28px', height: '1px', background: coral }} />PRE-LAUNCH · JOIN THE MOVEMENT
          </div>
          <h1 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(36px,4.5vw,64px)', fontWeight: 700, lineHeight: 1.05, color: offW, marginBottom: '20px' }}>
            Belong.<br />Connect.<br /><em style={{ color: coral }}>Thrive.</em>
          </h1>
          <p data-reveal style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--txt2)', maxWidth: '380px', marginBottom: '32px' }}>
            Coraly Space is building the antidote to loneliness — a sustainability ecosystem where explorers, makers, and creators belong.
          </p>
          <div data-reveal style={{ display: 'flex', gap: '36px' }}>
            {STATS.map(({ n, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '28px', fontWeight: 700, color: coral, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'var(--txt3)', marginTop: '4px' }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', background: '#0a0a08' }}>
          <img src={BRAND_HERO_HEART_LEAF} alt="Coraly Space — heart leaf"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', animation: 'ken 14s ease-in-out infinite alternate' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left,transparent 50%,rgba(13,13,13,.55))' }} />
        </div>
      </section>

      <Ticker items={['BELONG', '·', 'CONNECT', '·', 'THRIVE', '·', 'COMMUNITY', '·', 'SUSTAINABILITY', '·', 'ADVENTURE', '·']} />

      {/* Why Coraly Space */}
      <section data-section style={{ background: char, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '14px' }}>WHAT YOU GET</div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: offW, lineHeight: 1.1 }}>
              Six ways to<br /><em style={{ color: coral }}>explore the space.</em>
            </h2>
          </div>
          <div className="community-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {FEATURES.map((f, i) => (
              <Link key={i} href={f.href} style={{ textDecoration: 'none' }} data-reveal>
                <div style={{ padding: '32px 28px', border: '1px solid rgba(239,122,108,.12)', borderRadius: '3px', background: 'rgba(239,122,108,.03)', height: '100%', transition: 'all .3s ease', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = coral; e.currentTarget.style.background = 'rgba(239,122,108,.06)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(239,122,108,.12)'; e.currentTarget.style.background = 'rgba(239,122,108,.03)'; e.currentTarget.style.transform = 'none'; }}>
                  <div style={{ fontSize: '32px', marginBottom: '14px' }}>{f.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '18px', fontWeight: 600, color: offW, marginBottom: '10px' }}>{f.title}</div>
                  <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--txt2)' }}>{f.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="community-features-pinned">
            <PinnedHorizontalSlides
              topOffsetPx={62}
              progress={true}
              heightPerSlideVh={85}
              slides={FEATURES.map((f) => ({
                key: f.title,
                content: (
                  <Link href={f.href} style={{ textDecoration: 'none' }}>
                    <div className="community-feature-slide-card">
                      <div style={{ fontSize: '42px', marginBottom: '18px' }}>{f.icon}</div>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,10vw,42px)', fontWeight: 700, color: offW, lineHeight: 1.05, marginBottom: '16px' }}>{f.title}</div>
                      <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--txt2)', margin: 0 }}>{f.desc}</p>
                    </div>
                  </Link>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Sustainability visual */}
      <section data-section className="community-ecosystem-section" style={{ background: cream, padding: '80px 20px' }}>
        <div className="community-ecosystem-grid" style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column-reverse', gap: '36px', alignItems: 'stretch' }}>
          <div className="community-ecosystem-copy">
            <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '24px', height: '1px', background: coral }} />THE ECOSYSTEM
            </div>
            <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.1, marginBottom: '20px' }}>
              More than a platform.<br /><em style={{ color: coral }}>A movement.</em>
            </h2>
            <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: muted, marginBottom: '20px' }}>
              Coraly Space is designed around the belief that commerce and community can heal each other. When you join, you're not just getting access to a platform — you're joining a movement.
            </p>
            <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: muted, marginBottom: '28px' }}>
              Every purchase supports sustainable makers. Every event builds real connection. Every article grows collective wisdom.
            </p>
            <div data-reveal>
              <Link href="/about" className="cbtn" style={{ marginRight: '12px' }}>Learn Our Mission</Link>
            </div>
          </div>
          <div className="community-ecosystem-visual" data-reveal style={{ width: '100%', maxWidth: '620px', margin: '0 auto', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.15)', background: '#fff' }}>
            <img src={BRAND_VENN_SUSTAINABILITY} alt="Sustainability ecosystem" style={{ width: '100%', minHeight: '320px', objectFit: 'contain', display: 'block' }} />
          </div>
        </div>
      </section>

      <CoralyCommunityGroups />

      {/* Sustainable collection visual */}
      <section data-section style={{ background: cream, padding: '60px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div data-reveal style={{ borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.15)' }}>
            <img src="/community-coraly-brand-banner.png" alt="Coraly Space brand banner"
              style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <WaitlistForm />

      {/* Social proof */}
      <section data-section style={{ background: char, padding: '60px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px', color: 'var(--txt3)', marginBottom: '24px' }}>FIND US EVERYWHERE</div>
          <div data-reveal style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
            {[['@coraly.space', 'Instagram'], ['coralyspace.com', 'Web'], ['coralyspace@gmail.com', 'Email'], ['coraly.space', 'Platform']].map(([handle, platform]) => (
              <div key={handle} style={{ padding: '12px 20px', border: '1px solid rgba(239,122,108,.15)', borderRadius: '3px', background: 'rgba(239,122,108,.03)' }}>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: coral }}>{handle}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '11px', color: 'var(--txt3)', marginTop: '3px' }}>{platform}</div>
              </div>
            ))}
          </div>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: 'var(--txt3)' }}>
            CORALY SPACE · IP CAROLINE McGLONE · BUILT BY BIZ BOOSTERS LTD
          </div>
        </div>
      </section>
    </div>
  );
}
