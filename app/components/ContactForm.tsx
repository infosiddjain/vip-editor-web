"use client";
import { useCallback, useState, useTransition, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";
import Button from "./Button";
import Toast, { type ToastData } from "./Toast";
import { sendContact } from "../actions/contact";
import { validateContact, type ContactErrors, type ContactFields } from "../lib/contact";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name", placeholder: "e.g. Priya Sharma" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", placeholder: "you@example.com" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off", placeholder: "What is this about?" },
] as const;
const input = "w-full rounded-xl border bg-blush/50 px-4 py-3 outline-none placeholder:text-muted/60 focus:ring-2";
const ok = "border-line focus:border-primary focus:ring-primary/20";
const bad = "border-red-400 focus:border-red-500 focus:ring-red-200";

const read = (form: HTMLFormElement): ContactFields => {
  const fd = new FormData(form);
  const get = (k: string) => String(fd.get(k) ?? "").trim();
  return { name: get("name"), email: get("email"), subject: get("subject"), message: get("message") };
};

function FieldError({ name, error }: { name: string; error?: string }) {
  return error ? <span id={`${name}-error`} className="mt-1 block text-xs font-medium text-red-600">{error}</span> : null;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [toast, setToast] = useState<ToastData | null>(null);
  const [pending, startTransition] = useTransition();
  const closeToast = useCallback(() => setToast(null), []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = read(form);
    const errs = validateContact(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setToast({ type: "error", message: "Please fix the highlighted fields." });
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    startTransition(async () => {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v));
      const res = await sendContact(fd);
      if (res.ok) {
        form.reset();
        setErrors({});
        setToast({ type: "success", message: "Message sent! We'll get back to you within 1–2 business days." });
      } else {
        if (res.field) setErrors({ [res.field]: res.error });
        setToast({ type: "error", message: res.error || "Something went wrong. Please try again." });
      }
    });
  };

  // Clear a field's error as soon as the visitor edits it.
  const clear = (name: keyof ContactErrors) => {
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  return (
    <>
      <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl border border-line bg-white p-6 shadow-sm md:p-8">
        {FIELDS.map(f => (
          <label key={f.name} className="block text-sm font-medium">
            {f.label}
            <input
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              onChange={() => clear(f.name)}
              aria-invalid={!!errors[f.name]}
              aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
              className={`${input} ${errors[f.name] ? bad : ok} mt-1`}
            />
            <FieldError name={f.name} error={errors[f.name]} />
          </label>
        ))}
        <label className="block text-sm font-medium">
          Message
          <textarea
            name="message"
            rows={5}
            maxLength={2000}
            placeholder="Tell us how we can help — questions, bugs or feature ideas…"
            onChange={() => clear("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${input} ${errors.message ? bad : ok} mt-1`}
          />
          <FieldError name="message" error={errors.message} />
        </label>
        <Button type="submit" disabled={pending}>
          {pending ? <>Sending… <LoaderCircle size={16} className="animate-spin" /></> : <>Send message <Send size={16} /></>}
        </Button>
      </form>
      <Toast toast={toast} onClose={closeToast} />
    </>
  );
}
