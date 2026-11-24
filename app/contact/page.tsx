import type { Metadata } from "next";
import { Clock, Mail, MessageSquare } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { DEVELOPER } from "../components/developer";
import PageHero from "../components/PageHero";
import Section from "../components/Section";

export const metadata: Metadata = { title: "Contact" };

const INFO: { icon: typeof Mail; title: string; text: string; href?: string }[] = [
  { icon: Mail, title: "Email", text: DEVELOPER.email, href: `mailto:${DEVELOPER.email}` },
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
                  {i.href ? <a href={i.href} className="text-muted underline-offset-4 hover:text-primary hover:underline">{i.text}</a> : <p className="text-muted">{i.text}</p>}
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
