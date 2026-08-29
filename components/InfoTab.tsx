"use client";

import lotteries from "@/data/lotteries-fr.json";

export default function InfoTab() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="font-display text-3xl text-chalk">Les jeux en France</h2>
      <p className="mt-2 max-w-2xl text-sm text-mist">
        Informations de référence — vérifiées manuellement, mises à jour
        occasionnellement. En cas de doute, consultez toujours le site
        officiel du jeu avant de miser.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {lotteries.map((l) => (
          <article
            key={l.id}
            className="card-surface rounded-2xl p-5 shadow-lg shadow-black/20"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-chalk">{l.name}</h3>
              <span className="rounded-full bg-plum-500/20 px-3 py-1 text-xs text-plum-400">
                {l.family}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              <dt className="text-mist">Mise</dt>
              <dd className="text-right text-chalk">{l.price}</dd>
              <dt className="text-mist">Tirages</dt>
              <dd className="text-right text-chalk">{l.draws}</dd>
              <dt className="text-mist">Cagnotte min.</dt>
              <dd className="text-right text-chalk">{l.jackpotMin}</dd>
              <dt className="text-mist">Fiscalité</dt>
              <dd className="text-right text-gold-500">{l.tax}</dd>
            </dl>

            <p className="mt-4 border-t border-plum-500/20 pt-3 text-xs text-mist">
              {l.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
