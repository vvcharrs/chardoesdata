import Link from 'next/link';
import { formatDate, type Investigation } from '@/lib/investigations';

export function FeaturedInvestigation({
  investigation
}: {
  investigation: Investigation;
}) {
  return (
    <section className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-20">
      <div className="grid gap-10 border-y border-camel/60 py-10 lg:grid-cols-[0.62fr_1.38fr] lg:py-12">
        <div>
          <p className="eyebrow">Featured Investigation</p>
          <p className="mt-5 max-w-xs text-sm leading-7 text-roast/66">
            A flagship space for the work with the clearest question, strongest
            evidence, and richest visual narrative.
          </p>
        </div>
        <article>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-boho">
            {formatDate(investigation.date)} · {investigation.readingTime}
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.9] text-tamarind">
            <Link
              href={`/investigations/${investigation.slug}`}
              className="transition hover:text-rubine"
            >
              {investigation.title}
            </Link>
          </h2>
          <p className="mt-7 max-w-reading text-lg leading-8 text-roast/72">
            {investigation.summary}
          </p>
        </article>
      </div>
    </section>
  );
}
