'use client';
import { useState } from 'react';
import { IMAGES } from '@/lib/coraly-images-manifest';
import { useCoralyExperience } from '@/components/CoralyExperienceControls';

const coral = '#EF7A6C';
const offW = 'var(--txt)';
const black = 'var(--bg)';

const INTEREST_KEYS = [
  'waitlist_interest_shop',
  'waitlist_interest_events',
  'waitlist_interest_blog',
  'waitlist_interest_community',
  'waitlist_interest_courses',
] as const;

const HOW_HEARD_KEYS = [
  'waitlist_how_heard_instagram',
  'waitlist_how_heard_facebook',
  'waitlist_how_heard_crowdfunder',
  'waitlist_how_heard_friend',
  'waitlist_how_heard_event',
  'waitlist_how_heard_search',
  'waitlist_how_heard_other',
] as const;

export default function WaitlistForm() {
  const [done, setDone] = useState(false);
  const [foc, setFoc] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [howHeard, setHowHeard] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const { theme, t } = useCoralyExperience();
  const isLight = theme === 'light';

  const toggleInterest = (label: string) => {
    setInterests(current =>
      current.includes(label) ? current.filter(i => i !== label) : [...current, label]
    );
  };

  const inp = (f: string): React.CSSProperties => ({
    width: '100%', padding: '14px 18px', background: 'var(--card)',
    border: `1.5px solid ${foc === f ? coral : 'var(--theme-border)'}`,
    borderRadius: '3px', color: offW, fontFamily: "'DM Sans',sans-serif",
    fontSize: '14px', outline: 'none', transition: 'all .25s ease',
    boxShadow: foc === f ? '0 0 0 4px rgba(239,122,108,.1)' : 'none',
  });

  async function handleSubmit() {
    setErr(null);
    if (!email || !email.includes('@')) {
      setErr('Please enter a valid email address.');
      return;
    }
    if (!consent) {
      setErr(t('waitlist_consent_required'));
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, location, interests, howHeard, consent }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setDone(true);
      }
    } catch {
      setErr('Network error — please try again.');
    } finally {
      setLoading(false);
    }
  }

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
        <p data-reveal style={{ color: 'var(--txt2)', fontSize: '14px', lineHeight: 1.8, marginBottom: '28px' }}>
          {t('waitlist_sub')}
        </p>

        {/* What you get */}
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px', textAlign: 'left' }}>
          {[
            { icon: '🌿', text: 'Early access to the community before public launch' },
            { icon: '🎟', text: 'First invites to events, workshops & live gatherings' },
            { icon: '📬', text: 'A welcome gift — free resources from the Knowledge Hub' },
            { icon: '🛍', text: 'Shop drops before they go public' },
            { icon: '💌', text: 'Warm monthly letters from Caroline — zero spam, always personal' },
          ].map(item => (
            <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '14px', lineHeight: 1, marginTop: '2px' }}>{item.icon}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', color: 'var(--txt2)', lineHeight: 1.6 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {!done ? (
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                placeholder={t('waitlist_first_name')}
                value={name}
                onChange={e => setName(e.target.value)}
                onFocus={() => setFoc('n')} onBlur={() => setFoc(null)}
                style={inp('n')}
              />
              <input
                placeholder={t('waitlist_email')}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFoc('e')} onBlur={() => setFoc(null)}
                style={{ ...inp('e'), flex: 1.5 }}
              />
            </div>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              onFocus={() => setFoc('r')} onBlur={() => setFoc(null)}
              style={{ ...inp('r'), color: 'var(--txt2)', cursor: 'pointer' }}>
              <option value="">{t('waitlist_role_empty')}</option>
              <option>{t('waitlist_role_creator')}</option>
              <option>{t('waitlist_role_maker')}</option>
              <option>{t('waitlist_role_consumer')}</option>
              <option>{t('waitlist_role_educator')}</option>
              <option>{t('waitlist_role_partner')}</option>
            </select>

            <input
              placeholder={t('waitlist_location')}
              value={location}
              onChange={e => setLocation(e.target.value)}
              onFocus={() => setFoc('l')} onBlur={() => setFoc(null)}
              style={inp('l')}
            />

            <select
              value={howHeard}
              onChange={e => setHowHeard(e.target.value)}
              onFocus={() => setFoc('h')} onBlur={() => setFoc(null)}
              style={{ ...inp('h'), color: 'var(--txt2)', cursor: 'pointer' }}>
              <option value="">{t('waitlist_how_heard_empty')}</option>
              {HOW_HEARD_KEYS.map(key => (
                <option key={key}>{t(key)}</option>
              ))}
            </select>

            <div style={{ textAlign: 'left', marginTop: '4px' }}>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: 'var(--txt3)', marginBottom: '10px' }}>
                {t('waitlist_interests_label')}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {INTEREST_KEYS.map(key => {
                  const label = t(key);
                  const on = interests.includes(label);
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleInterest(label)}
                      aria-pressed={on}
                      style={{
                        fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '1px',
                        padding: '7px 14px', borderRadius: '20px', cursor: 'pointer',
                        color: on ? '#fff' : coral,
                        background: on ? coral : 'rgba(239,122,108,.05)',
                        border: `1px solid ${on ? coral : 'rgba(239,122,108,.3)'}`,
                        transition: 'all .2s ease',
                      }}>
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textAlign: 'left', cursor: 'pointer', marginTop: '6px' }}>
              <input
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                style={{ marginTop: '3px', width: '15px', height: '15px', accentColor: coral, cursor: 'pointer', flexShrink: 0 }}
              />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', lineHeight: 1.6, color: 'var(--txt2)' }}>
                {t('waitlist_consent')}
              </span>
            </label>

            {err && (
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '13px', color: coral, margin: 0 }}>{err}</p>
            )}
            <button
              className="cbtn"
              onClick={handleSubmit}
              disabled={loading}
              style={{ padding: '16px', borderRadius: '3px', fontSize: '12px', letterSpacing: '2px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'SENDING…' : t('waitlist_button')}
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
