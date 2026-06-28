export function MethodologyBlock({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-5 border-b border-camel/60 py-9 lg:grid-cols-[0.55fr_1.45fr]">
      <h2 className="font-display text-[clamp(2rem,3vw,3.25rem)] font-semibold leading-tight text-tamarind">
        {title}
      </h2>
      <div className="max-w-reading text-base leading-8 text-roast/72">
        {children}
      </div>
    </section>
  );
}
