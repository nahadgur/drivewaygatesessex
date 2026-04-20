// app/services/[serviceSlug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import ServiceClient from './ServiceClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ serviceSlug: s.slug }));
}

type Props = { params: { serviceSlug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) {
    return {
      title: 'Service Not Found',
      robots: { index: false, follow: false },
    };
  }

  const url = `${siteConfig.url}/services/${service.slug}/`;
  const title = `${service.title} in Essex | Vetted Installers, Free Quotes`;
  const description = `${service.title} across Essex. Compare quotes from vetted local installers covering every town and village in the county. Free site surveys, written quotes, BS EN 12453 compliant installations.`;

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
  if (!service) notFound();
  return <ServiceClient params={params} />;
}
