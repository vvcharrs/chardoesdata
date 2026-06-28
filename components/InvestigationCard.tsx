import Link from 'next/link';
import Image from 'next/image';
import { formatDate, type Investigation } from '@/lib/investigations';
import { withBasePath } from '@/lib/site';
import { Tag } from '@/components/Tag';

export function InvestigationCard({
  investigation
}: {
  investigation: Investigation;
}) {
  return (
    <article className="group grid gap-5 border-t border-camel/60 pt-6 transition duration-300 hover:border-rubine/70 sm:grid-cols-[minmax(140px,190px)_1fr]">
      <Link
        href={`/investigations/${investigation.slug}`}
        className="block overflow-hidden bg-camel/25"
      >
        <Image
          src={withBasePath(investigation.coverImage)}
          alt={investigation.coverAlt}
          width={640}
          height={480}
          sizes="(min-width: 768px) 190px, 100vw"
          className="aspect-[4/3] h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
      </Link>
      <div>
        <div className="mb-4 flex flex-wrap gap-3">
          {investigation.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3 className="font-display text-[clamp(1.65rem,2.4vw,2.35rem)] font-semibold leading-[1.02] text-tamarind">
          <Link
            href={`/investigations/${investigation.slug}`}
            className="transition group-hover:text-rubine"
          >
            {investigation.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-reading text-[0.95rem] leading-7 text-roast/72">
          {investigation.summary}
        </p>
        <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-boho">
          {formatDate(investigation.date)} · {investigation.readingTime}
        </p>
      </div>
    </article>
  );
}
