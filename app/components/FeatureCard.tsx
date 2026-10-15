import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

type Props = { icon: LucideIcon; title: string; text: string; points?: string[] };

export default function FeatureCard({ icon: Icon, title, text, points }: Props) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="mb-4 grid size-12 place-items-center rounded-xl bg-primary text-accent">
        <Icon size={24} />
      </span>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{text}</p>
      {points && (
        <ul className="mt-4 space-y-2 text-sm">
          {points.map(p => (
            <li key={p} className="flex items-center gap-2">
              <Check size={16} className="text-accent" /> {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
