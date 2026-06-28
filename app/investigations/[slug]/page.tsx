import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { BackToTop } from '@/components/BackToTop';
import { ChartContainer } from '@/components/ChartContainer';
import { ImageWithCaption } from '@/components/ImageWithCaption';
import { InvestigationCard } from '@/components/InvestigationCard';
import { PullQuote } from '@/components/PullQuote';
import { ReadingProgressBar } from '@/components/ReadingProgressBar';
import { TableOfContents } from '@/components/TableOfContents';
import { Tag } from '@/components/Tag';
import { createMetadata } from '@/lib/seo';
import { absoluteUrl, withBasePath } from '@/lib/site';
import {
  formatDate,
  getAllInvestigations,
  getHeadingsFromMdx,
  getInvestigation,
  getRelatedInvestigations
} from '@/lib/investigations';
import { slugify } from '@/utils/slugify';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const mdxComponents = {
  PullQuote,
  ImageWithCaption,
  ChartContainer,
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 id={slugify(String(children))}>{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 id={slugify(String(children))}>{children}</h3>
  )
};

export function generateStaticParams() {
  return getAllInvestigations().map((investigation) => ({
    slug: investigation.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const investigation = getInvestigation(slug);

  if (!investigation) {
    return {};
  }

  return createMetadata({
    title: investigation.title,
    description: investigation.summary,
    path: `/investigations/${investigation.slug}`,
    image: investigation.coverImage,
    type: 'article',
    publishedTime: investigation.date,
    tags: investigation.tags
  });
}

export default async function InvestigationPage({ params }: PageProps) {
  const { slug } = await params;
  const investigation = getInvestigation(slug);

  if (!investigation) {
    notFound();
  }

  const headings = getHeadingsFromMdx(investigation.content);
  const related = getRelatedInvestigations(investigation);
  const articleUrl = absoluteUrl(`/investigations/${investigation.slug}`);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: investigation.title,
    description: investigation.summary,
    datePublished: investigation.date,
    image: absoluteUrl(investigation.coverImage),
    articleSection: investigation.tags,
    url: articleUrl
  };
  const { content } = await compileMDX({
    source: investigation.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    }
  });

  return (
    <>
      <ReadingProgressBar />
      <article>
        <header className="mx-auto max-w-editorial px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 border-b border-camel/60 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:pb-12">
            <div>
              <div className="flex flex-wrap gap-3">
                {investigation.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <h1 className="mt-7 font-display text-[clamp(3.8rem,9vw,9rem)] font-semibold leading-[0.82] text-tamarind">
                {investigation.title}
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-8 lg:pb-2">
              <p className="max-w-reading text-[clamp(1.18rem,1.5vw,1.55rem)] leading-9 text-roast/72">
                {investigation.summary}
              </p>
              <div className="grid gap-3 border-t border-camel/60 pt-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-boho sm:grid-cols-3">
                <p>
                  <span className="block text-roast/45">Published</span>
                  <time dateTime={investigation.date}>
                    {formatDate(investigation.date)}
                  </time>
                </p>
                <p>
                  <span className="block text-roast/45">Reading</span>
                  {investigation.readingTime}
                </p>
                <p>
                  <span className="block text-roast/45">Desk</span>
                  Data & Culture
                </p>
              </div>
            </div>
          </div>
          <figure className="mt-10 lg:mt-12">
            <div className="overflow-hidden bg-camel/25 shadow-[0_24px_80px_rgba(40,11,15,0.12)]">
              <Image
                src={withBasePath(investigation.coverImage)}
                alt={investigation.coverAlt}
                width={1600}
                height={900}
                priority
                sizes="(min-width: 1180px) 1180px, 100vw"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 max-w-3xl border-l border-camel/80 pl-4 text-sm leading-6 text-boho">
              {investigation.coverAlt}
            </figcaption>
          </figure>
        </header>

        <div className="mx-auto grid max-w-editorial gap-12 px-5 pt-4 lg:grid-cols-[minmax(0,1fr)_240px] lg:px-8">
          <div className="article-body min-w-0">{content}</div>
          <TableOfContents headings={headings} />
        </div>
      </article>

      <section className="mx-auto max-w-editorial px-5 py-20 lg:px-8">
        <div className="border-t border-camel/60 pt-10">
          <p className="eyebrow">Related Investigations</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {related.length ? (
              related.map((item) => (
                <InvestigationCard key={item.slug} investigation={item} />
              ))
            ) : (
              <p className="max-w-reading text-sm leading-6 text-roast/70">
                Related investigations will appear here as the archive grows.
              </p>
            )}
          </div>
        </div>
      </section>
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
