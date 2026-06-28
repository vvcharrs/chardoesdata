import type { Metadata } from 'next';
import Link from 'next/link';
import { FeaturedInvestigation } from '@/components/FeaturedInvestigation';
import { Hero } from '@/components/Hero';
import { InvestigationCard } from '@/components/InvestigationCard';
import {
  getAllInvestigations,
  getFeaturedInvestigation
} from '@/lib/investigations';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata();

export default function HomePage() {
  const investigations = getAllInvestigations();
  const featured = getFeaturedInvestigation();
  const latest = investigations
    .filter((investigation) => investigation.slug !== featured?.slug)
    .slice(0, 4);

  return (
    <>
      <Hero investigation={featured} />
      {featured ? <FeaturedInvestigation investigation={featured} /> : null}
      <section className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-5 border-b border-camel/60 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Latest Investigations</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.9rem,6vw,6rem)] font-semibold leading-[0.92] text-tamarind">
              New evidence, close reading.
            </h2>
          </div>
          <Link
            href="/investigations"
            className="editorial-link text-[0.68rem] font-bold uppercase tracking-[0.18em] text-rubine"
          >
            View archive
          </Link>
        </div>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {(latest.length ? latest : investigations).map((investigation) => (
            <InvestigationCard
              key={investigation.slug}
              investigation={investigation}
            />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-editorial px-5 py-16 lg:px-8">
        <div className="grid gap-10 border-t border-camel/60 pt-12 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow">About the publication</p>
          <div>
            <h2 className="max-w-5xl font-display text-[clamp(3rem,6vw,6.2rem)] font-semibold leading-[0.92] text-tamarind">
              CharDoesData follows evidence where taste usually speaks first.
            </h2>
            <p className="mt-7 max-w-reading text-lg leading-8 text-roast/72">
              The publication treats fashion, beauty, retail, luxury, and
              culture as systems that can be measured, questioned, and explained
              through careful reporting and transparent analysis.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border-b border-rubine pb-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-rubine transition hover:text-tamarind"
            >
              Read the editorial note
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
