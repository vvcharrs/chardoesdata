export function PullQuote({
  children,
  credit
}: {
  children: React.ReactNode;
  credit?: string;
}) {
  return (
    <figure className="my-16 border-y border-camel/70 py-10">
      <blockquote className="max-w-4xl font-display text-[clamp(2.5rem,5vw,5.25rem)] font-semibold leading-[0.98] text-rubine">
        {children}
      </blockquote>
      {credit ? (
        <figcaption className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-boho">
          {credit}
        </figcaption>
      ) : null}
    </figure>
  );
}
