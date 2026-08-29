"use client";

type Locale = "fr" | "en" | "ko";

export default function SettingsTab({
  locale,
  onLocale,
  labels,
}: {
  locale: Locale;
  onLocale: (l: Locale) => void;
  labels: { language: string; country: string; darkmode: string };
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="font-display text-3xl text-chalk">
        {labels.language === "언어" ? "설정" : "Réglages"}
      </h2>

      <div className="card-surface mt-8 max-w-md space-y-6 rounded-2xl p-6">
        <div>
          <p className="text-sm text-mist">{labels.language}</p>
          <div className="mt-2 flex gap-2">
            {(["fr", "en", "ko"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => onLocale(l)}
                className={[
                  "rounded-full px-4 py-2 text-sm",
                  locale === l
                    ? "bg-gold-500 text-night-950"
                    : "bg-night-700 text-mist hover:text-chalk",
                ].join(" ")}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-mist">{labels.country}</p>
          <div className="mt-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-night-700 px-4 py-2 text-sm text-chalk">
              🇫🇷 France
            </span>
            <span className="ml-2 text-xs text-mist">
              (다른 국가는 Phase 4에서 추가 예정)
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-plum-500/20 pt-4">
          <p className="text-sm text-mist">{labels.darkmode}</p>
          <span className="text-xs text-mist">기본 적용됨</span>
        </div>
      </div>
    </section>
  );
}
