import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';

// Static lastModified dates, updated manually when content changes.
// Never use new Date() here: it makes the sitemap dynamic and confuses crawlers.
const LAST_MOD_HOME = '2026-04-21';
const LAST_MOD_SERVICES = '2026-04-21';
const LAST_MOD_LOCATIONS = '2026-04-21';
const LAST_MOD_BLOG = '2026-04-21';
const LAST_MOD_SERVICE = '2026-04-21';
const LAST_MOD_CITY = '2026-04-21';
const LAST_MOD_SERVICE_CITY = '2026-04-21';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: LAST_MOD_HOME, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: LAST_MOD_SERVICES, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/location/`, lastModified: LAST_MOD_LOCATIONS, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/`, lastModified: LAST_MOD_BLOG, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: LAST_MOD_SERVICE,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: LAST_MOD_CITY,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const city of allCities) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${toSlug(city)}/`,
        lastModified: LAST_MOD_SERVICE_CITY,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    }
  }

  return [...staticPages, ...servicePages, ...locationPages, ...serviceLocationPages];
}
