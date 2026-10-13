import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us - LivvGuard",
  description: "Request a LivvGuard demo or a custom subscription plan for your security operation.",
};

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone}` },
  { icon: MapPin, label: "Location", value: site.location },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-28 pt-36 sm:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute left-1/2 top-20 h-95 w-190 -translate-x-1/2" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">Get a demo</p>
          <h1 className="mt-3 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Let&apos;s talk about your <span className="text-gradient">operation</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            Tell us about your sites, guards and the features you need. We&apos;ll walk you through
            LivvGuard and put together a plan tailored to you.
          </p>

          <ul className="mt-10 space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-panel-2">
                  <Icon className="size-5 text-brand-soft" />
                </span>
                <div>
                  <p className="text-sm text-white/45">{label}</p>
                  {href ? (
                    <a href={href} className="text-lg hover:text-brand-tint">
                      {value}
                    </a>
                  ) : (
                    <p className="text-lg">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
