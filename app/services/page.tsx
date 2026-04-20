// app/services/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ServicesIndexClient from './ServicesIndexClient';

export const metadata: Metadata = {
  title: 'Driveway Gate Services Across Essex',
  description: 'Browse electric sliding, electric swing, wooden, metal, and automated gate services available through vetted installers across Essex. Free quotes on every enquiry.',
  alternates: { canonical: `${siteConfig.url}/services/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/services/`,
    siteName: siteConfig.name,
    title: 'Driveway Gate Services Across Essex',
    description: 'Browse electric sliding, electric swing, wooden, metal, and automated gate services available through vetted installers across Essex.',
    locale: 'en_GB',
  },
};

export default function Page() {
  return <ServicesIndexClient />;
}
