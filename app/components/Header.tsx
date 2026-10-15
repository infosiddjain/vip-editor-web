"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { NAV } from "./nav";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const link = (active: boolean) => `font-medium transition-colors ${active ? "text-primary" : "text-muted hover:text-primary"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-blush/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className={link(path === n.href)}>{n.label}</Link>
          ))}
          <Button href="/#demo" size="sm">Try the demo</Button>
        </nav>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-line px-4 py-4 md:hidden">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={link(path === n.href)}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
