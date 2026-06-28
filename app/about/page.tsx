import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'An editorial note on CharDoesData as an independent data journalism publication.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-18">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
        <p className="eyebrow">About CharDoesData</p>
        <div>
          <PageHeader
            eyebrow=""
            title="A publication for the evidence behind desire."
            constrained={false}
          />
          <div className="mt-10 max-w-reading space-y-7 border-t border-camel/60 pt-8 text-lg leading-8 text-roast/72">
            <p>
              CharDoesData is an independent editorial publication dedicated to
              long-form, evidence-based data journalism across fashion, beauty,
              retail, luxury, consumer behaviour, and culture.
            </p>
            <p>
              The publication is built for stories that need room: close
              reading, transparent methods, carefully designed charts, and
              reporting that treats cultural signals as data without flattening
              their meaning.
            </p>
            <p>
              It is intentionally not a portfolio or a personal blog. It is a
              publishing system for investigations that can scale as the archive
              grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
