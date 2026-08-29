"use client";

import { useState } from "react";

function randomSet() {
  const set = new Set<number>();
  while (set.size < 5) {
    set.add(Math.floor(Math.random() * 50) + 1);
  }
  return Array.from(set).sort((a, b) => a - b);
}

export default function NumbersTab({
  title,
  disclaimer,
  generateLabel,
}: {
  title: string;
  disclaimer: string;
  generateLabel: string;
}) {
  const [numbers, setNumbers] = useState<number[]>(randomSet());

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="font-display text-3xl text-chalk">{title}</h2>
      <p className="mt-2 max-w-xl text-sm text-mist">{disclaimer}</p>

      <div className="card-surface mt-8 flex flex-wrap items-center gap-3 rounded-2xl p-6">
        {numbers.map((n, i) => (
          <span key={i} className="ball text-lg">
            {n}
          </span>
        ))}
      </div>

      <button
        onClick={() => setNumbers(randomSet())}
        className="mt-6 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-night-950 transition hover:bg-gold-400"
      >
        {generateLabel}
      </button>
    </section>
  );
}
