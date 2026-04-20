// app/services/[serviceSlug]/[locationSlug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, toSlug, getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import ServiceLocationClient from './ServiceLocationClient';

export const dynamicParams = false;

export function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const service of services) {
    for (const city of allCities) {
      params.push({ serviceSlug: service.slug, locationSlug: toSlug(city) });
    }
  }
  return params;
}

type Props = { params: { serviceSlug: string; locationSlug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  const city = getCityBySlug(params.locationSlug);

  if (!service || !city) {
    return {
      title: 'Page Not Found',
      robots: { index: false, follow: false },
    };
  }

  const url = `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`;
  const title = `${service.title} in ${city}, Essex | Free Quotes`;
  const description = `${service.title} in ${city}, Essex. Connect with vetted local installers, free site surveys, and written quotes. BS EN 12453 compliant installations with written warranties.`;

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
  const service = getServiceBySlug(params.serviceSlug);
  const city = getCityBySlug(params.locationSlug);
  if (!service || !city) notFound();
  return <ServiceLocationClient params={params} />;
}
