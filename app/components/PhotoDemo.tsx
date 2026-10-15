"use client";
import { useState, type ChangeEvent } from "react";
import { Download, FlipHorizontal2, FlipVertical2, RotateCcw, RotateCw, SlidersHorizontal, Upload, WandSparkles, Crop, Undo2 } from "lucide-react";
import Button from "./Button";

const FILTERS: Record<string, string> = {
  Original: "",
  Mono: "grayscale(1)",
  Sepia: "sepia(.8)",
  Vintage: "sepia(.4) contrast(1.1) saturate(.8)",
  Warm: "sepia(.25) saturate(1.3)",
  Cool: "hue-rotate(15deg) saturate(.9) brightness(1.05)",
  Vivid: "saturate(1.6) contrast(1.1)",
  Noir: "grayscale(1) contrast(1.4)",
  Rose: "sepia(.5) hue-rotate(280deg) saturate(1.2)",
  Golden: "sepia(.6) saturate(1.4) brightness(1.05)",
  Fade: "contrast(.8) brightness(1.1) saturate(.8)",
};
// Each slider maps to one CSS filter function.
const ADJUST = [
  { key: "brightness", label: "Brightness", fn: "brightness", min: 0, max: 200, unit: "%" },
  { key: "contrast", label: "Contrast", fn: "contrast", min: 0, max: 200, unit: "%" },
  { key: "saturate", label: "Saturation", fn: "saturate", min: 0, max: 200, unit: "%" },
  { key: "warmth", label: "Warmth", fn: "sepia", min: 0, max: 100, unit: "%" },
  { key: "hue", label: "Hue", fn: "hue-rotate", min: -180, max: 180, unit: "deg" },
  { key: "blur", label: "Blur", fn: "blur", min: 0, max: 10, unit: "px" },
] as const;
const TABS = [
  { key: "filters", label: "Filters", icon: WandSparkles, tip: "One-click colour looks" },
  { key: "adjust", label: "Adjust", icon: SlidersHorizontal, tip: "Fine-tune light, colour and blur" },
  { key: "transform", label: "Rotate", icon: Crop, tip: "Turn or mirror the photo" },
] as const;
const INITIAL = { filter: "Original", brightness: 100, contrast: 100, saturate: 100, warmth: 0, hue: 0, blur: 0, rotate: 0, flipX: false, flipY: false };

const chip = (on: boolean) =>
  `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
    on ? "border-primary bg-primary text-blush" : "border-line bg-white hover:border-primary"
  }`;

export default function PhotoDemo() {
  const [src, setSrc] = useState("/demo.svg");
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("filters");
  const [e, setE] = useState(INITIAL);
  const set = (patch: Partial<typeof INITIAL>) => setE(s => ({ ...s, ...patch }));

  const filter = `${FILTERS[e.filter]} ${ADJUST.map(a => `${a.fn}(${e[a.key]}${a.unit})`).join(" ")}`;
  const transform = `rotate(${e.rotate * 90}deg) scale(${e.flipX ? -1 : 1}, ${e.flipY ? -1 : 1})`;

  const upload = (ev: ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0];
    if (file) { setSrc(URL.createObjectURL(file)); setE(INITIAL); }
  };

  const download = async () => {
    const img = new Image();
    img.src = src;
    await img.decode();
    const { naturalWidth: w, naturalHeight: h } = img;
    const odd = e.rotate % 2 === 1;
    const canvas = Object.assign(document.createElement("canvas"), { width: odd ? h : w, height: odd ? w : h });
    const ctx = canvas.getContext("2d")!;
    ctx.filter = filter;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((e.rotate * Math.PI) / 2);
    ctx.scale(e.flipX ? -1 : 1, e.flipY ? -1 : 1);
    ctx.drawImage(img, -w / 2, -h / 2);
    Object.assign(document.createElement("a"), { href: canvas.toDataURL("image/jpeg", 0.92), download: "vip-editor.jpg" }).click();
  };

  return (
    <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-xl lg:grid-cols-[1.4fr_1fr]">
      <div className="grid min-h-80 place-items-center overflow-hidden bg-ink p-6">
        {/* eslint-disable-next-line @next/next/no-img-element -- user uploads are blob URLs */}
        <img src={src} alt="Image being edited" style={{ filter, transform }} className="max-h-96 max-w-full rounded-lg transition-all duration-300" />
      </div>

      <div className="flex flex-col gap-6 p-6">
        <div className="flex gap-2 rounded-xl bg-blush p-1">
          {TABS.map(t => (
            <button key={t.key} data-tip={t.tip} onClick={() => setTab(t.key)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold ${tab === t.key ? "bg-primary text-blush" : "text-muted"}`}>
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </div>

        <div className="min-h-36">
          {tab === "filters" && (
            <div className="flex flex-wrap gap-2">
              {Object.keys(FILTERS).map(f => (
                <button key={f} className={chip(e.filter === f)} onClick={() => set({ filter: f })}>{f}</button>
              ))}
            </div>
          )}
          {tab === "adjust" && ADJUST.map(a => (
            <label key={a.key} className="mb-3 block text-sm font-medium">
              <span className="flex justify-between">{a.label}<span className="text-muted">{e[a.key]}{a.unit === "deg" ? "°" : a.unit}</span></span>
              <input type="range" min={a.min} max={a.max} value={e[a.key]} onChange={ev => set({ [a.key]: +ev.target.value })} className="w-full" />
            </label>
          ))}
          {tab === "transform" && (
            <div className="flex flex-wrap gap-2">
              <button className={chip(false)} data-tip="Turn 90° to the left" onClick={() => set({ rotate: (e.rotate + 3) % 4 })}><RotateCcw size={16} /> Left</button>
              <button className={chip(false)} data-tip="Turn 90° to the right" onClick={() => set({ rotate: (e.rotate + 1) % 4 })}><RotateCw size={16} /> Right</button>
              <button className={chip(e.flipX)} data-tip="Mirror left to right" onClick={() => set({ flipX: !e.flipX })}><FlipHorizontal2 size={16} /> Flip H</button>
              <button className={chip(e.flipY)} data-tip="Mirror top to bottom" onClick={() => set({ flipY: !e.flipY })}><FlipVertical2 size={16} /> Flip V</button>
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <label data-tip="Use your own photo" className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-blush">
            <Upload size={16} /> Upload
            <input type="file" accept="image/*" onChange={upload} className="hidden" />
          </label>
          <Button variant="outline" size="sm" tip="Remove all edits" onClick={() => setE(INITIAL)}><Undo2 size={16} /> Reset</Button>
          <Button variant="accent" size="sm" tip="Save the edited photo as a JPG" onClick={download}><Download size={16} /> Download</Button>
        </div>
      </div>
    </div>
  );
}
