"use client";

type Tab = "info" | "analysis" | "numbers" | "blog" | "settings";

export default function TabNav({
  active,
  onChange,
  labels,
}: {
  active: Tab;
  onChange: (t: Tab) => void;
  labels: Record<Tab, string>;
}) {
  const tabs: Tab[] = ["info", "analysis", "numbers", "blog", "settings"];

  return (
    <nav
      aria-label="Navigation principale"
      className="sticky top-0 z-20 border-b border-plum-500/20 bg-night-950/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              onClick={() => onChange(t)}
              aria-current={isActive ? "page" : undefined}
              className={[
                "whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "border-gold-500 text-chalk"
                  : "border-transparent text-mist hover:text-chalk",
              ].join(" ")}
            >
              {labels[t]}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
