// app/blog/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Driveway Gates Blog | Essex Buying Guides, Pricing, and Advice',
  description: 'Practical guides to driveway gates in Essex covering pricing, materials, planning permission, automation, and how to choose an installer. Written for homeowners, not salespeople.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/blog/`,
    siteName: siteConfig.name,
    title: 'Driveway Gates Blog | Essex Buying Guides, Pricing, and Advice',
    description: 'Practical guides to driveway gates in Essex covering pricing, materials, planning permission, automation, and how to choose an installer.',
    locale: 'en_GB',
  },
};

export default function Page() {
  return <BlogIndexClient />;
}
