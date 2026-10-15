import type { ReactNode } from "react";

type Props = { id?: string; kicker?: string; title?: string; text?: string; dark?: boolean; children: ReactNode };

export default function Section({ id, kicker, title, text, dark, children }: Props) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 ${dark ? "bg-primary text-blush" : ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {kicker && <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-accent uppercase">{kicker}</p>}
            <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
            {text && <p className={`mt-4 ${dark ? "text-blush/80" : "text-muted"}`}>{text}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
