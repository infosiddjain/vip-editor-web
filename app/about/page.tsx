import type { Metadata } from "next";
import { Gem, Heart, Lock, Sparkles } from "lucide-react";
import DeveloperCard from "../components/DeveloperCard";
import FeatureCard from "../components/FeatureCard";
import PageHero from "../components/PageHero";
import Section from "../components/Section";

export const metadata: Metadata = { title: "About" };

const VALUES = [
  { icon: Sparkles, title: "Simplicity", text: "Powerful tools presented clearly, so anyone can edit like a pro on the first try." },
  { icon: Lock, title: "Privacy", text: "Your media is processed on your device. We never upload your photos, videos or audio." },
  { icon: Gem, title: "Quality", text: "High-quality exports that look and sound great on every screen and speaker." },
  { icon: Heart, title: "Craft", text: "Every detail — from colour to typography — is designed to feel premium and calm." },
];

export default function About() {
  return (
    <>
      <PageHero kicker="About us" title="Editing, made effortless" text="We believe creative tools should feel elegant, fast and simple — not overwhelming." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          <p>
            VIP Editor started with a simple frustration: editing a photo, trimming a video and cleaning up a voice note meant juggling three different apps,
            each with its own learning curve.
          </p>
          <p>
            So we built one app that does all three beautifully. A consistent set of tools — crop, trim, filter, adjust — works the same way across every kind
            of media, and your finished work saves straight to your gallery.
          </p>
        </div>
      </Section>
      <Section kicker="Our values" title="What we stand for">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(v => <FeatureCard key={v.title} {...v} />)}
        </div>
      </Section>
      <Section id="developer" kicker="Meet the developer" title="Designed & built by Siddharth Jain" text="VIP Editor — the app and this website — is designed and developed by one person.">
        <DeveloperCard />
      </Section>
    </>
  );
}
