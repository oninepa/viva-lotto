"use client";

export default function BlogTab({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="card-surface flex flex-col items-start gap-3 rounded-2xl p-10">
        <span className="ball ball--ghost">?</span>
        <h2 className="font-display text-2xl text-chalk">{title}</h2>
        <p className="max-w-md text-sm text-mist">{body}</p>
      </div>
    </section>
  );
}
