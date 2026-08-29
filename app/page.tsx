"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TabNav from "@/components/TabNav";
import InfoTab from "@/components/InfoTab";
import AnalysisTab from "@/components/AnalysisTab";
import NumbersTab from "@/components/NumbersTab";
import BlogTab from "@/components/BlogTab";
import SettingsTab from "@/components/SettingsTab";

import fr from "@/locales/fr.json";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

type Tab = "info" | "analysis" | "numbers" | "blog" | "settings";
type Locale = "fr" | "en" | "ko";

const DICT = { fr, en, ko };

export default function Page() {
  const [tab, setTab] = useState<Tab>("info");
  const [locale, setLocale] = useState<Locale>("fr");
  const t = DICT[locale];

  return (
    <main>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pt-6">
        <div className="flex items-center gap-2">
          <span className="ball text-sm">★</span>
          <div>
            <p className="font-display text-lg leading-none text-chalk">
              {t.brand}
            </p>
            <p className="text-xs text-mist">{t.tagline}</p>
          </div>
        </div>
      </div>

      <Hero
        eyebrow={t.hero.eyebrow}
        cta={t.hero.cta}
        onCta={() => setTab("info")}
      />

      <TabNav active={tab} onChange={setTab} labels={t.nav} />

      {tab === "info" && <InfoTab />}
      {tab === "analysis" && <AnalysisTab />}
      {tab === "numbers" && (
        <NumbersTab
          title={t.numbers.title}
          disclaimer={t.numbers.disclaimer}
          generateLabel={t.numbers.generate}
        />
      )}
      {tab === "blog" && (
        <BlogTab title={t.blog.empty_title} body={t.blog.empty_body} />
      )}
      {tab === "settings" && (
        <SettingsTab locale={locale} onLocale={setLocale} labels={t.settings} />
      )}

      <footer className="mx-auto max-w-5xl px-4 py-10 text-xs text-mist">
        Contenu informatif et non officiel. Jouer comporte des risques —
        18 ans et plus. Aide : 09 74 75 13 13 (appel non surtaxé).
      </footer>
    </main>
  );
}
