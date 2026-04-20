// app/location/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import LocationIndexClient from './LocationIndexClient';

export const metadata: Metadata = {
  title: 'Driveway Gate Installers by Location Across Essex',
  description: 'Find vetted driveway gate installers covering every region of Essex, from Southend and Chelmsford through to Colchester, Saffron Walden, and the coast. Free quotes, local expertise.',
  alternates: { canonical: `${siteConfig.url}/location/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/location/`,
    siteName: siteConfig.name,
    title: 'Driveway Gate Installers by Location Across Essex',
    description: 'Find vetted driveway gate installers covering every region of Essex, from Southend and Chelmsford through to Colchester, Saffron Walden, and the coast.',
    locale: 'en_GB',
  },
};

export default function Page() {
  return <LocationIndexClient />;
}
