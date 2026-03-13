import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PC Forge — Custom PCs, Components & Bundles',
  description: 'Premium custom-built PCs, curated bundles, and hand-picked components. Built for performance. Designed to impress.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'PC Forge',
    description: 'Forging the extraordinary. Custom PCs built for performance.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
