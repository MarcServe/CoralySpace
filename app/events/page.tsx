'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Ticker from '@/components/Ticker';
import { IMAGES, BG_RAINBOW_SKY, BG_SUNSET_SKY_TREE, LIFESTYLE_GUITAR_WALK } from '@/lib/coraly-images-manifest';

const coral = '#EF7A6C';
const gold = '#C9A84C';
const black = '#0D0D0D';
const cream = '#F5EFE8';
const sand = '#EDE0D4';
const muted = '#8B7E7B';
const offW = '#FAF7F4';
const char = '#1C1C1C';

const UPCOMING = [
  {
    title: 'Dance & Voice Workshop',
    date: 'Recurring — check for dates',
    venue: 'Britannia Dance Studio, Cainscross',
    price: '£12',
    type: 'IN PERSON',
    accent: coral,
    desc: 'An immersive workshop combining movement and voice. All levels welcome. Come as you are — leave lighter.',
    img: IMAGES.BRAND_DANCE_EVENT,
  },
  {
    title: 'Coraly Space Community Meetup',
    date: 'Monthly — online',
    venue: 'Zoom · Coraly Space community',
    price: 'FREE',
    type: 'ONLINE',
    accent: '#3A5A8A',
    desc: 'Monthly gathering for the community. Share your projects, meet collaborators, and hear from Caroline.',
    img: BG_RAINBOW_SKY,
  },
  {
    title: 'Sustainability Makers Market',
    date: 'Seasonal — see dates',
    venue: 'Various · Bristol & Gloucestershire',
    price: 'FREE ENTRY',
    type: 'IN PERSON',
    accent: '#4A7A3A',
    desc: 'Pop-up market featuring sustainable makers from the Coraly Space community. Come browse, buy, and connect.',
    img: BG_SUNSET_SKY_TREE,
  },
  {
    title: 'Creative Circles — Online',
    date: 'Weekly · Thursdays',
    venue: 'Coraly Space community platform',
    price: 'MEMBERS FREE',
    type: 'ONLINE',
    accent: gold,
    desc: 'Weekly creative sessions. Bring your project — get support, feedback, and community energy.',
    img: LIFESTYLE_GUITAR_WALK,
  },
];

const PAST_HIGHLIGHTS = [
  'Dance & Voice at Britannia Dance Studio — sold out',
  'Winter Makers Market at Cainscross — 40+ makers',
  'Sustainability Talk with Caroline — 200+ online attendees',
  'Coraly Space Face-to-Face Stall — November edition',
];

function EventCard({ event, featured = false }: { event: typeof UPCOMING[0]; featured?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div data-reveal
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ borderRadius: '3px', overflow: 'hidden', border: `1.5px solid ${hov ? event.accent : 'rgba(239,122,108,.1)'}`, transition: 'all .3s ease', transform: hov ? 'translateY(-4px)' : 'none', boxShadow: hov ? `0 16px 40px rgba(0,0,0,.25)` : 'none' }}>
      <div style={{ height: featured ? '280px' : '180px', overflow: 'hidden', position: 'relative' }}>
        <img src={event.img} alt={event.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 40%,rgba(13,13,13,.7))' }} />
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: 'white', background: event.accent, padding: '4px 10px', borderRadius: '2px' }}>{event.type}</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: event.accent, background: 'rgba(13,13,13,.85)', padding: '4px 10px', borderRadius: '2px' }}>{event.price}</span>
        </div>
      </div>
      <div style={{ padding: featured ? '28px' : '20px', background: char }}>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: event.accent, marginBottom: '8px' }}>{event.date.toUpperCase()}</div>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: featured ? '22px' : '18px', fontWeight: 600, color: offW, lineHeight: 1.3, marginBottom: '8px' }}>{event.title}</h3>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: 'rgba(250,247,244,.4)', marginBottom: '12px' }}>📍 {event.venue}</div>
        <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(250,247,244,.4)', marginBottom: '20px' }}>{event.desc}</p>
        <a href="mailto:coralyspace@gmail.com" className="cbtn" style={{ background: event.accent, fontSize: '10px', padding: '10px 20px' }}>
          Book Now →
        </a>
      </div>
    </div>
  );
}

export default function EventsPage() {
  useScrollReveal();

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section data-section style={{ background: black, padding: '100px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${IMAGES.BRAND_DANCE_EVENT})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18 }} />
        <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: `linear-gradient(90deg,transparent,${coral}40,transparent)`, animation: 'scanH 8s linear infinite', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '4px', color: coral, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: coral }} />LIVE EVENTS & GATHERINGS<div style={{ width: '24px', height: '1px', background: coral }} />
          </div>
          <h1 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(40px,5vw,72px)', fontWeight: 700, lineHeight: 1.05, color: offW, marginBottom: '20px' }}>
            Move. Create.<br /><em style={{ color: coral }}>Connect in person.</em>
          </h1>
          <p data-reveal style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(250,247,244,.45)', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>
            Real community happens in real life. Dance workshops, makers markets, creative circles, and seasonal gatherings across the UK.
          </p>
          <div data-reveal style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:coralyspace@gmail.com" className="cbtn">Book an Event</a>
            <Link href="/community" className="glbtn">Join Online Community</Link>
          </div>
        </div>
      </section>

      <Ticker items={['DANCE & VOICE', '·', 'WORKSHOPS', '·', 'MAKERS MARKET', '·', 'COMMUNITY MEETUPS', '·', 'CREATIVE CIRCLES', '·']} />

      {/* Featured event — Dance & Voice */}
      <section data-section style={{ background: char, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: coral }} />SIGNATURE EVENT
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div data-reveal style={{ borderRadius: '3px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.4)' }}>
              <img src={IMAGES.BRAND_DANCE_EVENT} alt="Dance & Voice Workshop"
                style={{ width: '100%', display: 'block' }} />
            </div>
            <div>
              <div data-reveal style={{ display: 'inline-block', fontFamily: "'DM Mono',monospace", fontSize: '8px', letterSpacing: '3px', color: 'white', background: coral, padding: '5px 12px', borderRadius: '2px', marginBottom: '16px' }}>RECURRING · IN PERSON</div>
              <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 700, color: offW, lineHeight: 1.1, marginBottom: '16px' }}>
                Dance & Voice<br /><em style={{ color: coral }}>Workshop.</em>
              </h2>
              <div data-reveal style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {[{ icon: '📍', text: 'Britannia Dance Studio, Cainscross' }, { icon: '💷', text: '£12 per session' }, { icon: '🕐', text: 'Check for current dates' }].map(({ icon, text }) => (
                  <div key={text} style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: 'rgba(250,247,244,.5)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{icon}</span>{text}
                  </div>
                ))}
              </div>
              <p data-reveal style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(250,247,244,.45)', marginBottom: '16px' }}>
                An immersive workshop combining movement and voice. No experience needed — just a willingness to show up. Created and led by Caroline.
              </p>
              <p data-reveal style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(250,247,244,.35)', marginBottom: '28px' }}>
                Past participants describe it as "transformative", "freeing", and "the highlight of my week." Book by emailing Caroline directly.
              </p>
              <div data-reveal style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="mailto:coralyspace@gmail.com?subject=Dance %26 Voice Workshop Booking" className="cbtn">Book Now — £12</a>
                <a href="mailto:coralyspace@gmail.com" className="gbtn">Ask a Question →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All events grid */}
      <section data-section style={{ background: black, padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: coral }} />ALL UPCOMING EVENTS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }}>
            {UPCOMING.map((event, i) => (
              <EventCard key={i} event={event} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Past highlights */}
      <section data-section style={{ background: char, padding: '80px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: coral }} />PAST HIGHLIGHTS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {PAST_HIGHLIGHTS.map((h, i) => (
              <div key={i} data-reveal style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', border: '1px solid rgba(239,122,108,.1)', borderRadius: '3px', background: 'rgba(239,122,108,.03)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: coral, flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '14px', color: 'rgba(250,247,244,.55)', lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an event CTA */}
      <section data-section style={{ background: cream, padding: '80px 48px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '14px' }}>WANT TO COLLABORATE?</div>
          <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: '#1A1210', lineHeight: 1.1, marginBottom: '16px' }}>
            Host with<br /><em style={{ color: coral }}>Coraly Space.</em>
          </h2>
          <p data-reveal style={{ fontSize: '15px', lineHeight: 1.8, color: muted, marginBottom: '32px' }}>
            Universities, studios, venues, and organisations — partner with Coraly Space to bring sustainable community events to your audience.
          </p>
          <div data-reveal style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:coralyspace@gmail.com?subject=Partnership Enquiry" className="cbtn">Get in Touch</a>
            <Link href="/about" className="gbtn">Learn About Us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
