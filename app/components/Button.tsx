import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "accent" | "outline";
  size?: "sm" | "md";
  type?: "button" | "submit";
  onClick?: () => void;
  tip?: string;
  external?: boolean; // opens in a new tab
};

const styles = {
  primary: "bg-primary text-blush hover:bg-primary-dark",
  accent: "bg-accent text-ink hover:brightness-95",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-blush",
};

export default function Button({ children, href, variant = "primary", size = "md", type = "button", onClick, tip, external }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition ${styles[variant]} ${
    size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3"
  }`;
  if (href && external)
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return href ? <Link href={href} className={cls}>{children}</Link> : <button type={type} onClick={onClick} data-tip={tip} className={cls}>{children}</button>;
}
