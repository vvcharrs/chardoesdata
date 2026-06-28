export const site = {
  name: 'CharDoesData',
  description:
    'An independent data journalism publication investigating fashion, beauty, retail, luxury, consumer behaviour, and culture.',
  url: 'https://vvcharrs.github.io/chardoesdata/',
  basePath: '/chardoesdata',
  locale: 'en_US',
  themeColor: '#F7F4EF',
  defaultImage: '/images/blue-season-cover.png',
  creator: 'CharDoesData Editorial',
  nav: [
    { href: '/', label: 'Front' },
    { href: '/investigations', label: 'Investigations' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]
};

export function absoluteUrl(path = '/') {
  const hasFileExtension = /\.[a-z0-9]+$/i.test(path);
  const normalizedPath =
    !hasFileExtension && !path.endsWith('/') ? `${path}/` : path;

  return new URL(normalizedPath.replace(/^\//, ''), site.url).toString();
}
