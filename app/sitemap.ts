import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://airparkhotel.com';

const staticRoutes = [
  '/',
  '/about',
  '/rooms',
  '/gallery',
  '/amenities',
  '/meeting',
  '/sales',
  '/sustainability',
  '/booking',
  '/contact',
  '/privacy',
  '/disclosure',
  '/cancellation',
  '/opportunities',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }));
}

