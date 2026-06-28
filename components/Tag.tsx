export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border-b border-camel/80 pb-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-boho">
      {children}
    </span>
  );
}
