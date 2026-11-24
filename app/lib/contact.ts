export type ContactFields = { name: string; email: string; subject: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;
export type ContactResult = { ok: true } | { ok: false; code?: string; error: string; field?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Shared by the client (instant feedback) and the server action (source of truth).
export function validateContact({ name, email, subject, message }: ContactFields): ContactErrors {
  const e: ContactErrors = {};
  if (name.length < 2) e.name = "Please enter your full name.";
  else if (name.length > 80) e.name = "Name must be 80 characters or fewer.";
  if (!email) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) e.email = "Please enter a valid email address.";
  if (subject.length < 3) e.subject = "Subject must be at least 3 characters.";
  else if (subject.length > 120) e.subject = "Subject must be 120 characters or fewer.";
  if (message.length < 10) e.message = "Message must be at least 10 characters.";
  else if (message.length > 2000) e.message = "Message must be 2000 characters or fewer.";
  return e;
}
