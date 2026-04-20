// app/location/[city]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, toSlug, getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import CityClient from './CityClient';

export const dynamicParams = false;

export function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.map((city) => ({ city: toSlug(city) }));
}

type Props = { params: { city: string } };

export function generateMetadata({ params }: Props): Metadata {
  const cityName = getCityBySlug(params.city);

  if (!cityName) {
    return {
      title: 'Location Not Found',
      robots: { index: false, follow: false },
    };
  }

  const url = `${siteConfig.url}/location/${params.city}/`;
  const title = `Driveway Gate Installers in ${cityName}, Essex | Free Quotes`;
  const description = `Driveway gate installation in ${cityName}, Essex. Electric sliding, swing, wooden, and metal gates fitted by vetted local installers. Free site survey and written quote.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function Page({ params }: Props) {
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();
  return <CityClient params={params} />;
}
