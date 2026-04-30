'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type ThemeName = 'dark' | 'light';
type LanguageCode = 'en' | 'pt' | 'fr' | 'de';

type TranslationKey =
  | 'nav_shop'
  | 'nav_learn'
  | 'nav_about'
  | 'nav_events'
  | 'nav_community'
  | 'nav_cta'
  | 'hero_sub'
  | 'hero_cta_primary'
  | 'hero_cta_secondary';

type ExperienceContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
};

const LANGUAGES: { code: LanguageCode; label: string; flag: string; name: string }[] = [
  { code: 'en', label: 'EN', flag: 'GB', name: 'English' },
  { code: 'pt', label: 'PT', flag: 'PT', name: 'Portugues' },
  { code: 'fr', label: 'FR', flag: 'FR', name: 'Francais' },
  { code: 'de', label: 'DE', flag: 'DE', name: 'Deutsch' },
];

const TRANSLATIONS: Record<LanguageCode, Record<TranslationKey, string>> = {
  en: {
    nav_shop: 'Shop',
    nav_learn: 'Learn',
    nav_about: 'About',
    nav_events: 'Events',
    nav_community: 'Community',
    nav_cta: 'Join Waitlist',
    hero_sub: 'Creating a sustainability ecosystem together.',
    hero_cta_primary: 'Explore the Space',
    hero_cta_secondary: 'Join the Waitlist',
  },
  pt: {
    nav_shop: 'Loja',
    nav_learn: 'Conhecimento',
    nav_about: 'Sobre',
    nav_events: 'Eventos',
    nav_community: 'Comunidade',
    nav_cta: 'Lista de Espera',
    hero_sub: 'Criando juntos um ecossistema de sustentabilidade.',
    hero_cta_primary: 'Explorar o Espaco',
    hero_cta_secondary: 'Entrar na Lista',
  },
  fr: {
    nav_shop: 'Boutique',
    nav_learn: 'Savoir',
    nav_about: 'A propos',
    nav_events: 'Evenements',
    nav_community: 'Communaute',
    nav_cta: 'Liste Attente',
    hero_sub: 'Creer ensemble un ecosysteme durable.',
    hero_cta_primary: 'Explorer',
    hero_cta_secondary: 'Rejoindre',
  },
  de: {
    nav_shop: 'Shop',
    nav_learn: 'Wissen',
    nav_about: 'Uber uns',
    nav_events: 'Events',
    nav_community: 'Gemeinschaft',
    nav_cta: 'Warteliste',
    hero_sub: 'Gemeinsam ein Nachhaltigkeits-Okosystem aufbauen.',
    hero_cta_primary: 'Entdecken',
    hero_cta_secondary: 'Warteliste',
  },
};

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function CoralyExperienceProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('dark');
  const [lang, setLang] = useState<LanguageCode>('en');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('coraly-theme');
    const storedLang = window.localStorage.getItem('coraly-lang');
    if (storedTheme === 'dark' || storedTheme === 'light') setTheme(storedTheme);
    if (storedLang === 'en' || storedLang === 'pt' || storedLang === 'fr' || storedLang === 'de') {
      setLang(storedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('coraly-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('coraly-lang', lang);
  }, [lang]);

  const value = useMemo<ExperienceContextValue>(() => ({
    theme,
    setTheme,
    toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark'),
    lang,
    setLang,
    t: (key) => TRANSLATIONS[lang][key] ?? TRANSLATIONS.en[key],
  }), [theme, lang]);

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useCoralyExperience() {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useCoralyExperience must be used inside CoralyExperienceProvider');
  }
  return context;
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useCoralyExperience();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      title={isDark ? 'Switch to light holistic theme' : 'Switch to dark ecosystem theme'}
      aria-label={isDark ? 'Switch to light holistic theme' : 'Switch to dark ecosystem theme'}
    >
      <span className="theme-toggle__icon" aria-hidden>{isDark ? 'Moon' : 'Sun'}</span>
      <span className="theme-toggle__track" aria-hidden>
        <span className="theme-toggle__thumb" />
      </span>
      <span className="theme-toggle__label">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useCoralyExperience();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find(item => item.code === lang) ?? LANGUAGES[0];

  return (
    <div className="lang-switcher">
      <button
        type="button"
        className="lang-switcher__button"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen(value => !value)}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <span aria-hidden>v</span>
      </button>
      {open && (
        <div className="lang-switcher__menu">
          {LANGUAGES.map(item => (
            <button
              key={item.code}
              type="button"
              className={item.code === lang ? 'is-active' : ''}
              onClick={() => {
                setLang(item.code);
                setOpen(false);
              }}
            >
              <span>{item.flag}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
