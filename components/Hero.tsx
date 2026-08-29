"use client";

export default function Hero({
  eyebrow,
  cta,
  onCta,
}: {
  eyebrow: string;
  cta: string;
  onCta: () => void;
}) {
  return (
    <header className="relative overflow-hidden px-4 pb-14 pt-16">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <span className="ball">€</span>
          <span className="text-sm uppercase tracking-[0.2em] text-mist">
            {eyebrow}
          </span>
        </div>

        <p className="font-display text-6xl font-semibold leading-none text-chalk sm:text-7xl">
          130&nbsp;
          <span className="text-gold-500">M€</span>
        </p>

        <p className="max-w-xl text-base text-mist">
          Cagnotte estimée avant le prochain tirage. Consultez les résultats,
          comprenez les règles et comparez les jeux — sans jargon.
        </p>

        <div className="flex items-center gap-2 pt-2">
          {[7, 12, 23, 34, 45].map((n) => (
            <span key={n} className="ball text-sm">
              {n}
            </span>
          ))}
          <span className="ball ball--ghost text-sm">+2</span>
        </div>

        <button
          onClick={onCta}
          className="mt-4 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-night-950 transition hover:bg-gold-400"
        >
          {cta}
        </button>
      </div>
    </header>
  );
}
