type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  constrained?: boolean;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  constrained = true
}: PageHeaderProps) {
  return (
    <header className={constrained ? 'max-w-5xl' : undefined}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] text-tamarind">
        {title}
      </h1>
      {description ? (
        <p className="mt-7 max-w-reading text-lg leading-8 text-roast/72">
          {description}
        </p>
      ) : null}
    </header>
  );
}
