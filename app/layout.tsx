import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signature Design Center | Kitchen & Bath Showroom, Anaheim",
  description:
    "Family-owned Anaheim showroom for kitchen and bathroom remodeling. See cabinets, stone, and tile in person before you commit. CSLB #924506.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
