import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import FloatingCTAs from '@/components/FloatingCTAs';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'BP Drains South East — Local Drainage Specialists, Kent', template: '%s | BP Drains South East' },
  description: 'Local, family-run drainage specialists covering Kent and the South East since 2009. Six vans, real engineers, honest pricing. 24/7 emergency callout.',
  keywords: 'drainage, blocked drains, CCTV survey, drain repair, Kent, South East, emergency drainage',
  openGraph: {
    siteName: 'BP Drains South East',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        {children}
        <FloatingCTAs />
      </body>
    </html>
  );
}
