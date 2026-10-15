import type { Metadata } from "next";
import { Clock, Mail, MessageSquare } from "lucide-react";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import Section from "../components/Section";

export const metadata: Metadata = { title: "Contact" };

const INFO = [
  { icon: Mail, title: "Email", text: "support@vipeditor.app" },
  { icon: Clock, title: "Response time", text: "Within 1–2 business days" },
  { icon: MessageSquare, title: "Feedback", text: "Feature ideas are always welcome" },
];

export default function Contact() {
  return (
    <>
      <PageHero kicker="Contact" title="We'd love to hear from you" text="Questions, feedback or early-access requests — send us a message." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <ul className="space-y-6">
            {INFO.map(i => (
              <li key={i.title} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-accent"><i.icon size={22} /></span>
                <div>
                  <p className="font-semibold">{i.title}</p>
                  <p className="text-muted">{i.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
