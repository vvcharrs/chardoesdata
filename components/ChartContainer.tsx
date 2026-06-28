import { slugify } from '@/utils/slugify';

export function ChartContainer({
  title,
  note,
  children
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  const headingId = slugify(title);

  return (
    <section
      aria-labelledby={headingId}
      className="my-16 border-y border-camel/70 bg-paper/75 px-0 py-7 md:px-8 md:py-9"
    >
      <div className="mb-7 flex flex-col gap-3 border-b border-camel/60 pb-5 md:flex-row md:items-end md:justify-between">
        <h3
          id={headingId}
          className="max-w-2xl font-display text-[clamp(2rem,3vw,3.2rem)] font-semibold leading-[1.02] text-tamarind"
        >
          {title}
        </h3>
        {note ? (
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-boho">
            {note}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
