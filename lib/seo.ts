import type { Metadata } from 'next';
import { absoluteUrl, site } from '@/lib/site';

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
};

export function createMetadata({
  title,
  description = site.description,
  path = '/',
  image = site.defaultImage,
  type = 'website',
  publishedTime,
  tags
}: SeoInput = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      types: {
        'application/rss+xml': absoluteUrl('/rss.xml')
      }
    },
    openGraph: {
      type,
      title: title ? `${title} · ${site.name}` : site.name,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: description
        }
      ],
      publishedTime,
      tags
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} · ${site.name}` : site.name,
      description,
      images: [imageUrl],
      creator: site.creator
    }
  };
}
