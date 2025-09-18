import './globals.css';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Madena Brand',
  description: 'Premium bags — Azerbaijan',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Madena Brand',
    description: 'Premium bags — Azerbaijan',
    url: 'https://madenabrand.az', // replace with your real URL
    siteName: 'Madena Brand',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Madena Brand Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madena Brand',
    description: 'Premium bags — Azerbaijan',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className="scroll-smooth">
      <body className="bg-[#fff9f8] text-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
