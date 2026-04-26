import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Raleway, Cormorant_Garamond } from 'next/font/google';
import { SITE } from '@/lib/content';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dgpinturas.com.br'),
  title: {
    default:
      'DG Pinturas | Pinturas e Acabamentos Premium em Londrina e São Paulo',
    template: '%s | DG Pinturas',
  },
  description:
    'Há mais de 12 anos transformando ambientes com excelência. Pintura residencial, comercial, textura, grafiato e acabamentos em Londrina-PR e São Paulo-SP.',
  keywords: [
    'pintura residencial',
    'pintura comercial',
    'textura grafiato',
    'gesso drywall',
    'massa corrida',
    'pintor Londrina',
    'pintor São Paulo',
    'DG Pinturas',
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://dgpinturas.com.br',
    siteName: SITE.name,
    title: 'DG Pinturas | Pinturas e Acabamentos Premium',
    description:
      'Há mais de 12 anos transformando ambientes com excelência em Londrina e São Paulo.',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'DG Pinturas — Pinturas e Acabamentos Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DG Pinturas | Pinturas e Acabamentos Premium',
    description:
      'Há mais de 12 anos transformando ambientes com excelência em Londrina e São Paulo.',
    images: ['/images/hero-bg.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dgpinturas.com.br',
  name: 'DG Pinturas',
  description:
    'Pinturas e acabamentos premium — residencial, comercial, textura, grafiato, gesso e drywall.',
  image: 'https://dgpinturas.com.br/images/logo.png',
  url: 'https://dgpinturas.com.br',
  telephone: '+55-42-99843-4058',
  email: SITE.email,
  founder: { '@type': 'Person', name: SITE.founder },
  areaServed: [
    { '@type': 'City', name: 'Londrina', addressRegion: 'PR' },
    { '@type': 'City', name: 'São Paulo', addressRegion: 'SP' },
  ],
  sameAs: [SITE.instagramUrl],
  priceRange: '$$',
  serviceType: [
    'Pintura Residencial',
    'Pintura Comercial',
    'Textura e Grafiato',
    'Gesso, Drywall e Massa Corrida',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${raleway.variable} ${cormorant.variable}`}
    >
      <head>
        {/* Preload do vídeo do hero — começa a baixar no primeiro byte da página,
            antes mesmo de qualquer JS rodar. Reduz o tempo até o vídeo aparecer. */}
        <link
          rel="preload"
          as="video"
          href="/images/hero.mp4"
          type="video/mp4"
        />
      </head>
      <body className="bg-ink text-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
