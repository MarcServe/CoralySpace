'use client';
import { useState } from 'react';
import { IMAGES } from '@/lib/coraly-images-manifest';

const coral = '#EF7A6C';
const offW = '#FAF7F4';
const black = '#0D0D0D';

export default function WaitlistForm() {
  const [done, setDone] = useState(false);
  const [foc, setFoc] = useState<string | null>(null);

  const inp = (f: string): React.CSSProperties => ({
    width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,.06)',
    border: `1.5px solid ${foc === f ? coral : 'rgba(250,247,244,.15)'}`,
    borderRadius: '3px', color: offW, fontFamily: "'DM Sans',sans-serif",
    fontSize: '14px', outline: 'none', transition: 'all .25s ease',
    boxShadow: foc === f ? '0 0 0 4px rgba(239,122,108,.1)' : 'none',
  });

  return (
    <section id="waitlist-section" data-section style={{
      background: black, padding: '100px 48px',
      borderTop: '1px solid rgba(239,122,108,.1)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '500px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse,rgba(239,122,108,.07) 0%,transparent 70%)', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <img src={IMAGES.LOGO_SPACE_DARK} alt=""
          style={{ width: '52px', height: '52px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' }}
          data-reveal />
        <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '14px' }}>
          PRE-LAUNCH · JOIN THE MOVEMENT
        </div>
        <h2 data-reveal style={{
          fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,48px)',
          fontWeight: 700, color: offW, lineHeight: 1.1, marginBottom: '16px',
        }}>
          Belong. Connect.<br /><em style={{ color: coral }}>Thrive.</em>
        </h2>
        <p data-reveal style={{ color: 'rgba(250,247,244,.4)', fontSize: '14px', lineHeight: 1.8, marginBottom: '40px' }}>
          Be among the first to join. Early access, event invites, and community news.
        </p>

        {!done ? (
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input placeholder="First name" onFocus={() => setFoc('n')} onBlur={() => setFoc(null)} style={inp('n')} />
              <input placeholder="Email address" onFocus={() => setFoc('e')} onBlur={() => setFoc(null)} style={{ ...inp('e'), flex: 1.5 }} />
            </div>
            <select onFocus={() => setFoc('r')} onBlur={() => setFoc(null)}
              style={{ ...inp('r'), color: 'rgba(250,247,244,.4)', cursor: 'pointer' }}>
              <option value="">I am a... (choose your role)</option>
              <option>Creator — artist, designer, innovator</option>
              <option>Sustainable Maker</option>
              <option>Conscious Consumer</option>
              <option>Educator / University</option>
              <option>Cultural Partner</option>
            </select>
            <button className="cbtn" onClick={() => setDone(true)}
              style={{ padding: '16px', borderRadius: '3px', fontSize: '12px', letterSpacing: '2px' }}>
              RESERVE MY SPOT
            </button>
            <div style={{
              fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px',
              color: 'rgba(250,247,244,.2)', marginTop: '4px',
            }}>
              coraly.space · @coraly.space · coralyspace@gmail.com
            </div>
          </div>
        ) : (
          <div style={{
            padding: '44px 32px', border: `1.5px solid ${coral}`, borderRadius: '3px',
            background: 'rgba(239,122,108,.06)', animation: 'fadeUp .4s ease',
          }}>
            <div style={{ fontSize: '36px', marginBottom: '14px' }}>🌿</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '24px', fontWeight: 600, color: coral, marginBottom: '10px' }}>You are in.</div>
            <p style={{ color: 'rgba(250,247,244,.45)', fontSize: '14px', lineHeight: 1.7 }}>
              Welcome to Coraly Space. We will be in touch before launch.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
