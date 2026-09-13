import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://signature-design-center-demo.vercel.app'),
  title: 'Signature Design Center | Luxury Kitchen & Bathroom Remodeling in Anaheim, CA',
  description: 'Anaheim physical showroom backed by 40 years of craftsmanship since 1986. Custom kitchen & bathroom remodeling, custom cabinetry, 3D computer elevations, and CSLB #924506.',
  keywords: [
    'Kitchen Remodeling Anaheim',
    'Bathroom Remodeling Orange County',
    'Signature Design Center',
    'Anaheim Showroom Kitchen Remodel',
    'Custom Cabinets Anaheim CA',
    'CSLB 924506'
  ],
  openGraph: {
    title: 'Signature Design Center | Showroom-Backed Kitchen & Bath Remodeling',
    description: 'See the remodel before you commit to the project. 40 years of trusted craftsmanship, Anaheim showroom, and verified CSLB license #924506.',
    url: 'https://signature-design-center-demo.vercel.app',
    siteName: 'Signature Design Center',
    images: [
      {
        url: '/images/hero-kitchen-luxury.jpg',
        width: 1920,
        height: 755,
        alt: 'Signature Design Center Luxury Kitchen Remodel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/signature-logo.jpg" />
      </head>
      <body className="antialiased bg-[#FAF8F5] text-[#1E232A] selection:bg-[#C59A46] selection:text-white">
        {children}
      </body>
    </html>
  );
}
