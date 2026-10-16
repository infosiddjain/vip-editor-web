import Link from "next/link";
import Logo from "./Logo";
import { NAV } from "./nav";
import SocialLinks from "./SocialLinks";
import { DEVELOPER } from "./developer";

export default function Footer() {
  return (
    <footer className="bg-ink text-blush/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo light />
          <p className="text-sm">Photo, video and audio editing — all in one app.</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className="hover:text-accent">{n.label}</Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-xs md:flex-row md:justify-between">
          <p>© 2026 VIP Editor. All rights reserved.</p>
          <p>
            Designed &amp; developed by{" "}
            <a href={DEVELOPER.portfolio} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
              {DEVELOPER.name}
            </a>
          </p>
          <SocialLinks light />
        </div>
      </div>
    </footer>
  );
}
