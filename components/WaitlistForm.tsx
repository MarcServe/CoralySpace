'use client';
import { useState } from 'react';
import { IMAGES } from '@/lib/coraly-images-manifest';
import { useCoralyExperience } from '@/components/CoralyExperienceControls';

const coral = '#EF7A6C';
const offW = 'var(--txt)';
const black = 'var(--bg)';

const ROLE_OPTIONS = [
  { value: 'creator', key: 'waitlist_role_creator', en: 'Creator — artist, maker, innovator' },
  { value: 'maker', key: 'waitlist_role_maker', en: 'Sustainable Maker' },
  { value: 'consumer', key: 'waitlist_role_consumer', en: 'Conscious Consumer' },
  { value: 'educator', key: 'waitlist_role_educator', en: 'Educator / Holistic Practitioner' },
  { value: 'partner', key: 'waitlist_role_partner', en: 'Cultural Partner / Organisation' },
] as const;

const INTEREST_OPTIONS = [
  { value: 'shop', key: 'waitlist_interest_shop', en: 'Shop' },
  { value: 'events', key: 'waitlist_interest_events', en: 'Events' },
  { value: 'blog', key: 'waitlist_interest_blog', en: 'Blog' },
  { value: 'community', key: 'waitlist_interest_community', en: 'Community' },
  { value: 'courses', key: 'waitlist_interest_courses', en: 'Courses' },
] as const;

const HOW_HEARD_OPTIONS = [
  { value: 'instagram', key: 'waitlist_how_heard_instagram', en: 'Instagram' },
  { value: 'facebook', key: 'waitlist_how_heard_facebook', en: 'Facebook' },
  { value: 'crowdfunder', key: 'waitlist_how_heard_crowdfunder', en: 'Crowdfunder page' },
  { value: 'friend', key: 'waitlist_how_heard_friend', en: 'Friend or word of mouth' },
  { value: 'event', key: 'waitlist_how_heard_event', en: 'Event or market stall' },
  { value: 'search', key: 'waitlist_how_heard_search', en: 'Search engine' },
  { value: 'other', key: 'waitlist_how_heard_other', en: 'Somewhere else' },
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

  const toggleInterest = (value: string) => {
    setInterests(current =>
      current.includes(value) ? current.filter(i => i !== value) : [...current, value]
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
      const roleLabel = ROLE_OPTIONS.find(option => option.value === role)?.en ?? role;
      const howHeardLabel = HOW_HEARD_OPTIONS.find(option => option.value === howHeard)?.en ?? howHeard;
      const interestLabels = interests.map(value =>
        INTEREST_OPTIONS.find(option => option.value === value)?.en ?? value
      );
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          role: roleLabel,
          location,
          interests: interestLabels,
          howHeard: howHeardLabel,
          consent,
        }),
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
    <section id="waitlist-section" data-section data-no-translate="true" style={{
      background: black, padding: '100px 48px',
      borderTop: '1px solid rgba(239,122,108,.1)', position: 'relative', overflowX: 'clip',
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
        <p data-reveal style={{ color: 'var(--txt2)', fontSize: '17px', lineHeight: 1.8, marginBottom: '28px' }}>
          {t('waitlist_sub')}
        </p>

        {/* What you get */}
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', textAlign: 'left' }}>
          {[
            { icon: '🌿', key: 'waitlist_perk_1' as const },
            { icon: '🎟', key: 'waitlist_perk_2' as const },
            { icon: '📬', key: 'waitlist_perk_3' as const },
            { icon: '🛍', key: 'waitlist_perk_4' as const },
            { icon: '💌', key: 'waitlist_perk_5' as const },
          ].map(item => (
            <div key={item.key} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span aria-hidden="true" style={{ fontSize: '16px', lineHeight: 1, marginTop: '2px' }}>{item.icon}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '16px', color: 'var(--txt2)', lineHeight: 1.65 }}>{t(item.key)}</span>
            </div>
          ))}
        </div>

        {!done ? (
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="waitlist-form__row">
              <input
                className="waitlist-form__input"
                placeholder={t('waitlist_first_name')}
                value={name}
                onChange={e => setName(e.target.value)}
                onFocus={() => setFoc('n')} onBlur={() => setFoc(null)}
                style={inp('n')}
              />
              <input
                className="waitlist-form__input"
                placeholder={t('waitlist_email')}
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSubmit(); }}
                onFocus={() => setFoc('e')} onBlur={() => setFoc(null)}
                style={inp('e')}
              />
            </div>
            <select
              aria-label={t('waitlist_role_empty')}
              value={role}
              onChange={e => setRole(e.target.value)}
              onFocus={() => setFoc('r')} onBlur={() => setFoc(null)}
              style={{ ...inp('r'), color: role ? offW : 'var(--txt2)', cursor: 'pointer' }}>
              <option value="">{t('waitlist_role_empty')}</option>
              {ROLE_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>{t(option.key)}</option>
              ))}
            </select>

            <input
              placeholder={t('waitlist_location')}
              value={location}
              onChange={e => setLocation(e.target.value)}
              onFocus={() => setFoc('l')} onBlur={() => setFoc(null)}
              style={inp('l')}
            />

            <select
              aria-label={t('waitlist_how_heard_empty')}
              value={howHeard}
              onChange={e => setHowHeard(e.target.value)}
              onFocus={() => setFoc('h')} onBlur={() => setFoc(null)}
              style={{ ...inp('h'), color: howHeard ? offW : 'var(--txt2)', cursor: 'pointer' }}>
              <option value="">{t('waitlist_how_heard_empty')}</option>
              {HOW_HEARD_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>{t(option.key)}</option>
              ))}
            </select>

            <div style={{ textAlign: 'left', marginTop: '4px' }}>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: 'var(--txt3)', marginBottom: '10px' }}>
                {t('waitlist_interests_label')}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {INTEREST_OPTIONS.map(option => {
                  const on = interests.includes(option.value);
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => toggleInterest(option.value)}
                      aria-pressed={on}
                      style={{
                        fontFamily: "'DM Mono',monospace", fontSize: '10px', letterSpacing: '1px',
                        padding: '7px 14px', borderRadius: '20px', cursor: 'pointer',
                        color: on ? '#fff' : coral,
                        background: on ? coral : 'rgba(239,122,108,.05)',
                        border: `1px solid ${on ? coral : 'rgba(239,122,108,.3)'}`,
                        transition: 'all .2s ease',
                      }}>
                      {t(option.key)}
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
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '15px', lineHeight: 1.65, color: 'var(--txt2)' }}>
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
            <div className="waitlist-form__contact" style={{
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
