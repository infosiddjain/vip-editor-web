import Link from "next/link";
import Logo from "./Logo";
import { NAV } from "./nav";

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
      <p className="border-t border-white/10 py-4 text-center text-xs">© 2026 VIP Editor. All rights reserved.</p>
    </footer>
  );
}
