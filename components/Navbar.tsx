import Link from 'next/link';
import { site } from '@/lib/site';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-camel/50 bg-porcelain/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto grid max-w-editorial grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 lg:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        <Link
          href="/"
          className="font-display text-[1.7rem] font-semibold leading-none text-tamarind transition hover:text-rubine"
        >
          Char<span className="text-rubine">Does</span>Data
        </Link>
        <div className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-roast/70 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="editorial-link transition hover:text-rubine"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          aria-label="Pitch CharDoesData"
          className="justify-self-end border-b border-rubine pb-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-rubine transition hover:text-tamarind"
        >
          Pitch
        </Link>
      </nav>
    </header>
  );
}
