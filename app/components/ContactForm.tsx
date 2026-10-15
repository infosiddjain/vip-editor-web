"use client";
import { useState, type FormEvent } from "react";
import { CircleCheck, Send } from "lucide-react";
import Button from "./Button";

const FIELDS = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
];
const input = "w-full rounded-xl border border-line bg-blush/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // TODO: connect to your email service or API route before going live.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent)
    return (
      <div className="grid place-items-center gap-3 rounded-3xl border border-line bg-white p-10 text-center">
        <CircleCheck size={48} className="text-primary" />
        <h3 className="font-display text-2xl font-bold">Message received</h3>
        <p className="text-muted">Thank you for reaching out. We will get back to you soon.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl border border-line bg-white p-6 shadow-sm md:p-8">
      {FIELDS.map(f => (
        <label key={f.name} className="block text-sm font-medium">
          {f.label}
          <input required name={f.name} type={f.type} className={`${input} mt-1`} />
        </label>
      ))}
      <label className="block text-sm font-medium">
        Message
        <textarea required name="message" rows={5} className={`${input} mt-1`} />
      </label>
      <Button type="submit">Send message <Send size={16} /></Button>
    </form>
  );
}
