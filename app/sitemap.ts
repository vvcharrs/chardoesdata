import type { MetadataRoute } from 'next';
import { getAllInvestigations } from '@/lib/investigations';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '/',
    '/investigations',
    '/methodology',
    '/about',
    '/contact'
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  })) satisfies MetadataRoute.Sitemap;

  const investigations = getAllInvestigations().map((investigation) => ({
    url: absoluteUrl(`/investigations/${investigation.slug}`),
    lastModified: new Date(investigation.date),
    changeFrequency: 'monthly',
    priority: investigation.featured ? 0.9 : 0.8
  })) satisfies MetadataRoute.Sitemap;

  return [...staticRoutes, ...investigations];
}
