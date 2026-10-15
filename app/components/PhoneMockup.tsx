import { AudioWaveform, ChevronRight, Film, Image as ImageIcon, ShieldCheck } from "lucide-react";

const ROWS = [
  { icon: ImageIcon, title: "Photo Editor", text: "Crop, rotate, filters" },
  { icon: Film, title: "Video Editor", text: "Trim, speed, colour" },
  { icon: AudioWaveform, title: "Audio Editor", text: "Fades, effects, reverse" },
];

export default function PhoneMockup() {
  return (
    <div className="mx-auto w-72 rounded-[2.5rem] border-[10px] border-ink bg-blush p-4 shadow-2xl">
      <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-ink/20" />
      <div className="mb-4 space-y-1 rounded-2xl bg-primary p-4 text-blush">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">VIP EDITOR</p>
        <p className="font-semibold">Create without limits</p>
        <p className="text-[11px] text-blush/80">Edit and save straight to your gallery.</p>
      </div>
      <div className="space-y-3">
        {ROWS.map(r => (
          <div key={r.title} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3">
            <span className="grid size-9 place-items-center rounded-lg bg-primary text-accent"><r.icon size={18} /></span>
            <div className="flex-1">
              <p className="text-sm font-semibold">{r.title}</p>
              <p className="text-[11px] text-muted">{r.text}</p>
            </div>
            <ChevronRight size={16} className="text-muted" />
          </div>
        ))}
      </div>
      <p className="mt-4 flex items-center justify-center gap-1 text-[10px] text-muted"><ShieldCheck size={12} className="text-primary" /> Edits stay on your device</p>
    </div>
  );
}
