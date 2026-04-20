// app/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Driveway Gates Essex | Find Trusted Gate Installers Across Essex',
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    title: 'Driveway Gates Essex | Find Trusted Gate Installers Across Essex',
    description: siteConfig.description,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Driveway Gates Essex | Find Trusted Gate Installers Across Essex',
    description: siteConfig.description,
  },
};

export default function Page() {
  return <HomePageClient />;
}
