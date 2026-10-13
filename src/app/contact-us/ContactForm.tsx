"use client";

import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const field =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand/60 focus:bg-white/[0.06]";

export default function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Number of guards: ${get("guards")}`,
      "",
      get("message"),
    ].join("\n");
    const subject = `Demo request from ${get("company") || get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-panel/80 p-6 shadow-2xl shadow-black/40 backdrop-blur sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-white/60">
          Full name
          <input name="name" required className={field} placeholder="Jane Doe" />
        </label>
        <label className="text-sm text-white/60">
          Company
          <input name="company" className={field} placeholder="Acme Security" />
        </label>
        <label className="text-sm text-white/60">
          Work email
          <input name="email" type="email" required className={field} placeholder="jane@company.com" />
        </label>
        <label className="text-sm text-white/60">
          Phone
          <input name="phone" type="tel" className={field} placeholder="(555) 000-0000" />
        </label>
        <label className="text-sm text-white/60 sm:col-span-2">
          Number of guards
          <select name="guards" className={`${field} [&>option]:bg-panel`} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>1 - 10</option>
            <option>11 - 50</option>
            <option>51 - 200</option>
            <option>200+</option>
          </select>
        </label>
        <label className="text-sm text-white/60 sm:col-span-2">
          How can we help?
          <textarea name="message" rows={5} className={field} placeholder="Tell us about your sites and what you need..." />
        </label>
      </div>
      <button
        type="submit"
        className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand text-lg font-medium shadow-[0_8px_30px_-8px_rgba(215,35,35,0.7)] transition-colors hover:bg-brand-600"
      >
        Request a demo <ArrowRight className="size-5" />
      </button>
    </form>
  );
}
