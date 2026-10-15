import { ArrowRight, AudioWaveform, Download, Film, FolderOpen, Image as ImageIcon, ShieldCheck, Smartphone, WandSparkles, Zap } from "lucide-react";
import Button from "./components/Button";
import FeatureCard from "./components/FeatureCard";
import PhoneMockup from "./components/PhoneMockup";
import PhotoDemo from "./components/PhotoDemo";
import Section from "./components/Section";

const EDITORS = [
  { icon: ImageIcon, title: "Photo Editor", text: "Perfect every shot with precise, professional tools.", points: ["Crop to free or social sizes", "Rotate, flip and undo any step", "14 filters plus 7 fine adjustments", "Text captions and coloured frames"] },
  { icon: Film, title: "Video Editor", text: "Shape clips into stories in a few taps.", points: ["Timeline with split & delete", "Crop, zoom and text titles", "Add music, remove or extract audio", "Speed, filters and fades"] },
  { icon: AudioWaveform, title: "Audio Editor", text: "Clean up and style any recording or song.", points: ["Waveform timeline with split", "Noise removal and normalize", "Voice changer and effects", "Export as MP3 or M4A"] },
];

const STEPS = [
  { icon: FolderOpen, title: "Pick your media", text: "Open any photo, video or audio file from your device." },
  { icon: WandSparkles, title: "Edit with ease", text: "Use clear tools with instant previews — no learning curve." },
  { icon: Download, title: "Save to gallery", text: "Export in high quality straight to your gallery or files." },
];

const PERKS = [
  { icon: ShieldCheck, label: "Private by design" },
  { icon: Zap, label: "Fast on-device processing" },
  { icon: Smartphone, label: "Android & iOS" },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-accent/15 px-4 py-1 text-sm font-semibold text-primary">Photo · Video · Audio</p>
            <h1 className="font-display text-5xl leading-tight font-bold md:text-6xl">
              One studio for <span className="text-primary">every</span> <span className="text-accent">story</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              VIP Editor brings professional photo, video and audio editing into one elegant app. Edit in seconds and save straight to your gallery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#demo">Try the live demo <ArrowRight size={18} /></Button>
              <Button href="#features" variant="outline">Explore features</Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
              {PERKS.map(p => (
                <li key={p.label} className="flex items-center gap-2"><p.icon size={18} className="text-primary" /> {p.label}</li>
              ))}
            </ul>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <Section id="features" kicker="Features" title="Three editors. One beautiful app." text="Everything you need to polish photos, cut videos and perfect audio — without switching apps.">
        <div className="grid gap-6 md:grid-cols-3">
          {EDITORS.map(e => <FeatureCard key={e.title} {...e} />)}
        </div>
      </Section>

      <Section id="demo" kicker="Live demo" title="Try the photo editor right here" text="Apply filters, fine-tune colour and rotate — then download the result. Upload your own photo to try it.">
        <PhotoDemo />
      </Section>

      <Section dark kicker="How it works" title="From idea to finished in three steps">
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="text-center">
              <span className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-accent text-ink"><s.icon size={28} /></span>
              <p className="text-sm text-accent">Step {i + 1}</p>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-blush/80">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-ink px-6 py-14 text-center text-blush">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to create?</h2>
          <p className="mx-auto mt-3 max-w-xl text-blush/70">VIP Editor is coming soon to Android and iOS. Get in touch to join the early access list.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="accent">Join early access</Button>
            <Button href="/about" variant="outline">Learn more</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
