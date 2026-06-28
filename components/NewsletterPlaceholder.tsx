export function NewsletterPlaceholder() {
  return (
    <section
      className="border border-camel/45 bg-porcelain/[0.04] p-6"
      aria-labelledby="field-notes-title"
    >
      <h2
        id="field-notes-title"
        className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-camel"
      >
        Field Notes
      </h2>
      <p className="mt-4 text-sm leading-7 text-porcelain/72">
        A placeholder for dispatches on datasets, methods, and forthcoming
        investigations.
      </p>
      <div className="mt-6 flex gap-0 border-b border-camel/55">
        <label htmlFor="newsletter" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter"
          type="email"
          placeholder="reader@example.com"
          aria-describedby="newsletter-status"
          className="min-w-0 flex-1 bg-transparent py-3 pr-3 text-sm text-porcelain placeholder:text-porcelain/42 outline-none"
        />
        <button
          className="py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-camel transition hover:text-porcelain disabled:cursor-not-allowed disabled:opacity-60"
          type="button"
          disabled
        >
          Join
        </button>
      </div>
      <p
        id="newsletter-status"
        className="mt-3 text-xs leading-5 text-porcelain/55"
      >
        Newsletter signup is reserved for a future release.
      </p>
    </section>
  );
}
