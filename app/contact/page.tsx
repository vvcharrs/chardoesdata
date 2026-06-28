import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Contact CharDoesData for pitches, data tips, and collaborations.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-18">
      <div className="max-w-3xl">
        <PageHeader
          eyebrow="Contact"
          title="Send a signal."
          description="For data tips, story leads, source notes, or collaboration enquiries, use the contact channel below."
        />
        <div className="mt-12 border-y border-camel/70 bg-paper/65 py-7">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-boho">
            Editorial inbox
          </p>
          <a
            className="mt-4 block break-words font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-none text-rubine transition hover:text-tamarind"
            href="mailto:hello@chardoesdata.com"
          >
            hello@chardoesdata.com
          </a>
        </div>
      </div>
    </section>
  );
}
