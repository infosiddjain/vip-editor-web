"use client";
import { useEffect } from "react";
import { CircleAlert, CircleCheck, X } from "lucide-react";

export type ToastData = { type: "success" | "error"; message: string };

export default function Toast({ toast, onClose }: { toast: ToastData | null; onClose: () => void }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  if (!toast) return null;
  const ok = toast.type === "success";
  const Icon = ok ? CircleCheck : CircleAlert;

  return (
    <div
      role={ok ? "status" : "alert"}
      aria-live="polite"
      className={`fixed bottom-4 left-4 right-4 z-50 flex items-start gap-3 rounded-2xl border p-4 shadow-lg sm:left-auto sm:right-6 sm:bottom-6 sm:w-96 ${
        ok ? "border-primary/20 bg-white text-ink" : "border-red-200 bg-red-50 text-red-800"
      }`}
    >
      <Icon size={22} className={`shrink-0 ${ok ? "text-primary" : "text-red-600"}`} />
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button type="button" onClick={onClose} aria-label="Dismiss" className="opacity-60 hover:opacity-100">
        <X size={18} />
      </button>
    </div>
  );
}
