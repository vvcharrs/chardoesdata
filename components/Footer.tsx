import Link from 'next/link';
import { site } from '@/lib/site';
import { NewsletterPlaceholder } from '@/components/NewsletterPlaceholder';

export function Footer() {
  return (
    <footer className="mt-28 border-t border-camel/70 bg-tamarind text-porcelain">
      <div className="mx-auto grid max-w-editorial gap-14 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-18">
        <div>
          <p className="font-display text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.85]">
            CharDoesData
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-porcelain/72">
            {site.description}
          </p>
          <nav
            aria-label="Footer navigation"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-camel/35 pt-6 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-camel"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="editorial-link transition hover:text-porcelain"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <NewsletterPlaceholder />
      </div>
    </footer>
  );
}
