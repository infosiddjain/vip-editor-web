import Link from "next/link";
import { Layers } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-accent">
        <Layers size={20} />
      </span>
      <span className={`font-display text-xl font-bold ${light ? "text-blush" : "text-ink"}`}>
        VIP <span className="text-accent">Editor</span>
      </span>
    </Link>
  );
}
