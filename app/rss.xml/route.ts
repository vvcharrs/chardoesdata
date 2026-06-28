import { getAllInvestigations } from '@/lib/investigations';
import { absoluteUrl, site } from '@/lib/site';

export const dynamic = 'force-static';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const items = getAllInvestigations()
    .map((investigation) => {
      const url = absoluteUrl(`/investigations/${investigation.slug}`);

      return `<item>
  <title>${escapeXml(investigation.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <description>${escapeXml(investigation.summary)}</description>
  <pubDate>${new Date(investigation.date).toUTCString()}</pubDate>
  ${investigation.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n  ')}
</item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${escapeXml(site.name)}</title>
  <link>${site.url}</link>
  <description>${escapeXml(site.description)}</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
