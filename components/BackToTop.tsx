'use client';

import { useEffect, useState } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 640);

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-hidden={!isVisible}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-30 border border-rubine/70 bg-porcelain/90 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-rubine shadow-sm backdrop-blur transition duration-300 hover:bg-rubine hover:text-porcelain ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      Top
    </button>
  );
}
