import Link from 'next/link';
import Image from 'next/image';
import { type Investigation } from '@/lib/investigations';
import { Tag } from '@/components/Tag';

export function Hero({ investigation }: { investigation?: Investigation }) {
  return (
    <section className="border-b border-camel/60">
      <div className="mx-auto grid max-w-editorial gap-10 px-5 py-14 md:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <p className="eyebrow">Independent data journalism</p>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(3.6rem,8.4vw,8.8rem)] font-semibold leading-[0.85] text-tamarind">
              Fashion, beauty and culture, evidenced.
            </h1>
          </div>
          <p className="max-w-xl border-l border-camel/80 pl-5 text-[1.05rem] leading-8 text-roast/72 md:text-lg">
            Long-form investigations for readers who want the numbers behind
            taste, status, desire, and the market.
          </p>
        </div>
        {investigation ? (
          <Link
            href={`/investigations/${investigation.slug}`}
            className="group block"
          >
            <div className="overflow-hidden bg-camel/30 shadow-[0_22px_70px_rgba(40,11,15,0.12)]">
              <Image
                src={investigation.coverImage}
                alt={investigation.coverAlt}
                width={1400}
                height={1120}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[5/4] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {investigation.tags.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,4vw,4.1rem)] font-semibold leading-[0.98] text-tamarind transition group-hover:text-rubine">
              {investigation.title}
            </h2>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
