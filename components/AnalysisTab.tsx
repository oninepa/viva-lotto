"use client";

import lotteries from "@/data/lotteries-fr.json";

const CRITERIA: { key: keyof (typeof lotteries)[number]["score"]; label: string }[] = [
  { key: "rtp", label: "Taux de redistribution" },
  { key: "odds", label: "Difficulté du jackpot" },
  { key: "netPayout", label: "Gain net / fiscalité" },
  { key: "bonus", label: "Bonus & tirages secondaires" },
  { key: "access", label: "Accessibilité" },
];

function totalOf(score: (typeof lotteries)[number]["score"]) {
  const sum = Object.values(score).reduce((a, b) => a + b, 0);
  return Math.round((sum / (5 * 10)) * 10);
}

export default function AnalysisTab() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <p className="text-xs uppercase tracking-[0.2em] text-plum-400">
        La série — un jeu à la fois
      </p>
      <h2 className="mt-2 font-display text-3xl text-chalk">
        Notes sur 10, sans complaisance
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-mist">
        Avis maison, pas une statistique officielle. Chaque jeu est noté sur
        5 critères, mis à jour chaque année.
      </p>

      <div className="mt-8 space-y-5">
        {lotteries.map((l) => (
          <article
            key={l.id}
            className="card-surface rounded-2xl p-5 shadow-lg shadow-black/20"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl text-chalk">{l.name}</h3>
              <span className="font-display text-3xl text-gold-500">
                {totalOf(l.score)}
                <span className="text-base text-mist">/10</span>
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {CRITERIA.map((c) => (
                <div key={c.key} className="flex items-center gap-3">
                  <span className="w-44 shrink-0 text-xs text-mist">
                    {c.label}
                  </span>
                  <div className="h-1.5 flex-1 rounded-full bg-night-700">
                    <div
                      className="h-1.5 rounded-full bg-gold-500"
                      style={{ width: `${(l.score[c.key] / 10) * 100}%` }}
                    />
                  </div>
                  <span className="w-6 text-right text-xs text-chalk">
                    {l.score[c.key]}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
