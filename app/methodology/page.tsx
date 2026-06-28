import type { Metadata } from 'next';
import { MethodologyBlock } from '@/components/MethodologyBlock';
import { PageHeader } from '@/components/PageHeader';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Methodology',
  description:
    'How CharDoesData collects, cleans, analyses, visualises, and documents data.',
  path: '/methodology'
});

export default function MethodologyPage() {
  return (
    <section className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-18">
      <PageHeader eyebrow="Methodology" title="How evidence becomes a story." />
      <div className="mt-14 border-t border-camel/60">
        <MethodologyBlock title="Data Collection">
          <p>
            Investigations may combine public datasets, APIs, scraped pages,
            published reports, platform observations, and manually recorded
            samples. Each article should name the collection window and
            inclusion criteria.
          </p>
        </MethodologyBlock>
        <MethodologyBlock title="APIs and Scraping">
          <p>
            API access, scraping logic, rate limits, and collection scripts
            should be documented when they materially affect coverage,
            reproducibility, or bias.
          </p>
        </MethodologyBlock>
        <MethodologyBlock title="Cleaning and Analysis">
          <p>
            Cleaning decisions, exclusions, transformations, and statistical
            methods should be described plainly enough for another analyst to
            understand the route from raw observations to published claims.
          </p>
        </MethodologyBlock>
        <MethodologyBlock title="Visualisation">
          <p>
            Charts are treated as evidence, not decoration. Axes, units,
            uncertainty, sample sizes, and aggregation choices should be visible
            or explained near the visual.
          </p>
        </MethodologyBlock>
        <MethodologyBlock title="Limitations and Transparency">
          <p>
            Every investigation should include limitations, source notes, and a
            methodology section that states what the data can and cannot prove.
          </p>
        </MethodologyBlock>
      </div>
    </section>
  );
}
