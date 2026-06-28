import { getAllInvestigations } from '@/lib/investigations';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const searchIndex = getAllInvestigations().map(
    ({ slug, title, summary, date, tags, readingTime }) => ({
      slug,
      title,
      summary,
      date,
      tags,
      readingTime,
      url: `${site.basePath}/investigations/${slug}/`
    })
  );

  return Response.json(searchIndex, {
    headers: {
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
