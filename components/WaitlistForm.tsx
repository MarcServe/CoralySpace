'use client';
import { useState } from 'react';
import { IMAGES } from '@/lib/coraly-images-manifest';
import { useCoralyExperience } from '@/components/CoralyExperienceControls';

const coral = '#EF7A6C';
const offW = 'var(--txt)';
const black = 'var(--bg)';

export default function WaitlistForm() {
  const [done, setDone] = useState(false);
  const [foc, setFoc] = useState<string | null>(null);
  const { theme, t } = useCoralyExperience();
  const isLight = theme === 'light';

  const inp = (f: string): React.CSSProperties => ({
    width: '100%', padding: '14px 18px', background: 'var(--card)',
    border: `1.5px solid ${foc === f ? coral : 'var(--theme-border)'}`,
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
        <img src={isLight ? IMAGES.LOGO_SPACE_LIGHT : IMAGES.LOGO_SPACE_DARK} alt=""
          style={{ width: '52px', height: '52px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' }}
          data-reveal />
        <div data-reveal style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '3px', color: coral, marginBottom: '14px' }}>
          {t('waitlist_kicker')}
        </div>
        <h2 data-reveal style={{
          fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,48px)',
          fontWeight: 700, color: offW, lineHeight: 1.1, marginBottom: '16px',
        }}>
          {t('waitlist_title_a')}<br /><em style={{ color: coral }}>{t('waitlist_title_b')}</em>
        </h2>
        <p data-reveal style={{ color: 'var(--txt2)', fontSize: '14px', lineHeight: 1.8, marginBottom: '40px' }}>
          {t('waitlist_sub')}
        </p>

        {!done ? (
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input placeholder={t('waitlist_first_name')} onFocus={() => setFoc('n')} onBlur={() => setFoc(null)} style={inp('n')} />
              <input placeholder={t('waitlist_email')} onFocus={() => setFoc('e')} onBlur={() => setFoc(null)} style={{ ...inp('e'), flex: 1.5 }} />
            </div>
            <select onFocus={() => setFoc('r')} onBlur={() => setFoc(null)}
              style={{ ...inp('r'), color: 'var(--txt2)', cursor: 'pointer' }}>
              <option value="">{t('waitlist_role_empty')}</option>
              <option>{t('waitlist_role_creator')}</option>
              <option>{t('waitlist_role_maker')}</option>
              <option>{t('waitlist_role_consumer')}</option>
              <option>{t('waitlist_role_educator')}</option>
              <option>{t('waitlist_role_partner')}</option>
            </select>
            <button className="cbtn" onClick={() => setDone(true)}
              style={{ padding: '16px', borderRadius: '3px', fontSize: '12px', letterSpacing: '2px' }}>
              {t('waitlist_button')}
            </button>
            <div style={{
              fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '1px',
              color: 'var(--txt3)', marginTop: '4px',
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
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '24px', fontWeight: 600, color: coral, marginBottom: '10px' }}>{t('waitlist_success_title')}</div>
            <p style={{ color: 'var(--txt2)', fontSize: '14px', lineHeight: 1.7 }}>
              {t('waitlist_success_body')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
