import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { LenisProvider } from '@/providers/LenisProvider';
import { CoralyExperienceProvider } from '@/components/CoralyExperienceControls';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
});
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Coraly Space — Belong. Connect. Thrive.',
  description: 'Creative community & curation. Building a sustainability ecosystem together.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'icon', url: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable}`}>
      <body>
        <LenisProvider>
          <CoralyExperienceProvider>
            <Nav />
            {children}
            <Footer />
            <div
              className="talkweb-badge"
              style={{
                position: 'fixed', bottom: '28px', right: '28px', zIndex: 300,
                width: '48px', height: '48px', borderRadius: '50%',
                background: '#1C1C1C', border: '1.5px solid #EF7A6C',
                animation: 'pulse 3s ease infinite',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '18px',
              }}
              title="TalkWeb — coming soon"
            >🎙️</div>
          </CoralyExperienceProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
