import { ArrowUpRight, MapPin } from "lucide-react";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import { DEVELOPER } from "./developer";

export default function DeveloperCard() {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm md:grid-cols-[280px_1fr]">
      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden bg-primary-dark p-8 text-center text-blush">
        <div className="absolute -top-16 -right-16 size-48 rounded-full bg-primary opacity-60" />
        <div className="relative grid size-28 place-items-center rounded-full border-2 border-accent bg-primary font-display text-4xl font-bold text-accent">
          {DEVELOPER.initials}
        </div>
        <div className="relative">
          <h3 className="font-display text-2xl font-bold">{DEVELOPER.name}</h3>
          <p className="mt-1 text-sm text-soft">{DEVELOPER.role}</p>
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-blush/70">
            <MapPin size={14} /> {DEVELOPER.location}
          </p>
        </div>
      </div>
      <div className="space-y-6 p-8">
        <p className="leading-relaxed text-muted">{DEVELOPER.bio}</p>
        <ul className="flex flex-wrap gap-2">
          {DEVELOPER.skills.map(s => (
            <li key={s} className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-primary">
              {s}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SocialLinks withContact />
          <Button href={DEVELOPER.portfolio} variant="accent" size="sm" external>
            View portfolio <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
