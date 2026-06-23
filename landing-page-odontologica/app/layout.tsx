import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ortodoctor Martins Uberlândia | Clínica Odontológica em Uberlândia - MG',
  description:
    'Clínica odontológica em Uberlândia - MG com múltiplas especialidades: implantes, ortodontia, clareamento, prótese e estética dental. Atendimento humanizado e nota 4.3 no Google. Agende sua avaliação pelo WhatsApp.',
  keywords: [
    'dentista Uberlândia',
    'clínica odontológica Uberlândia',
    'implante dentário Uberlândia',
    'ortodontia Uberlândia',
    'clareamento dental Uberlândia',
    'Ortodoctor Martins',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Ortodoctor Martins Uberlândia | Clínica Odontológica',
    description:
      'Cuide do seu sorriso com segurança e qualidade em Uberlândia - MG. Agende sua avaliação pelo WhatsApp.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#00B4D8',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Ortodoctor - Unidade Martins Uberlândia',
  description:
    'Clínica odontológica com múltiplas especialidades em Uberlândia - MG.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Uberlândia',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  telephone: '+55 34 3458-9919',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.3',
    reviewCount: '82',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`light bg-background ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
