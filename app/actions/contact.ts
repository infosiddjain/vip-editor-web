"use server";

import { validateContact, type ContactResult } from "../lib/contact";

const ENDPOINT = "https://hub-form.vercel.app/api/f/2Ywe3tHybRZb";

export async function sendContact(formData: FormData): Promise<ContactResult> {
  const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Never trust the client — validate again on the server.
  const errors = validateContact(data);
  const [field] = Object.keys(errors) as (keyof typeof errors)[];
  if (field) return { ok: false, code: "invalid", error: errors[field]!, field };

  const key = process.env.HUB_KEY;
  if (!key) {
    console.error("HUB_KEY is not set");
    return { ok: false, code: "config", error: "The contact form is not configured yet. Please email us instead." };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify(data),
      cache: "no-store",
    });
    const json = (await res.json().catch(() => null)) as ContactResult | null;
    if (json && typeof json.ok === "boolean") return json;
    return { ok: false, code: "bad_response", error: "Something went wrong. Please try again." };
  } catch (err) {
    console.error("Contact form request failed", err);
    return { ok: false, code: "network", error: "Could not send your message. Please check your connection and try again." };
  }
}
