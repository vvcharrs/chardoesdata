import type { Metadata } from 'next';
import { InvestigationCard } from '@/components/InvestigationCard';
import { PageHeader } from '@/components/PageHeader';
import { getAllInvestigations } from '@/lib/investigations';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Investigations',
  description:
    'The CharDoesData archive of long-form data journalism investigations.',
  path: '/investigations'
});

export default function InvestigationsPage() {
  const investigations = getAllInvestigations();

  return (
    <section className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-18">
      <PageHeader
        eyebrow="Archive"
        title="Investigations"
        description="A growing index of reported, evidence-based stories across fashion, beauty, retail, luxury, consumer behaviour, and culture."
      />
      <div className="mt-14 grid gap-12 border-t border-camel/60 pt-2">
        {investigations.map((investigation) => (
          <InvestigationCard
            key={investigation.slug}
            investigation={investigation}
          />
        ))}
      </div>
    </section>
  );
}
