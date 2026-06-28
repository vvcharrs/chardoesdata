type Heading = {
  id: string;
  title: string;
};

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings.length) {
    return null;
  }

  return (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-auto border-l border-camel/60 pl-5 lg:block">
      <p className="eyebrow">Contents</p>
      <ol className="mt-5 space-y-3.5 text-[0.82rem] leading-5 text-roast/62">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="transition hover:text-rubine">
              {heading.title}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
