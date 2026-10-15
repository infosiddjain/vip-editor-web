import type { ReactNode } from "react";

export type Block = { heading: string; body: ReactNode };

export default function Prose({ blocks, updated }: { blocks: Block[]; updated?: string }) {
  return (
    <article className="mx-auto max-w-3xl space-y-10 px-4 py-16">
      {updated && <p className="text-sm text-muted">Last updated: {updated}</p>}
      {blocks.map(b => (
        <section key={b.heading}>
          <h2 className="mb-3 font-display text-2xl font-bold text-primary">{b.heading}</h2>
          <div className="space-y-3 leading-relaxed text-muted">{b.body}</div>
        </section>
      ))}
    </article>
  );
}
