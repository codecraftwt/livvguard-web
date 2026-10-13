import { Suspense } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import CurrentYear from "./CurrentYear";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Quick links",
    links: [
      { label: "Features", href: "/#features" },
      { label: "About us", href: "/#about" },
      { label: "Plans", href: "/#plans" },
      { label: "Contact us", href: "/contact-us" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms and conditions", href: site.termsUrl },
      { label: "Privacy policy", href: site.privacyUrl },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 leading-relaxed text-white/55">
            LivvGuard&apos;s approach not only enhances overall security posture but also improves
            operational efficiency, allowing teams to focus on strategic decision-making rather than
            routine tasks.
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Contact us</h3>
          <ul className="mt-5 space-y-3 text-white/70">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="size-4 text-brand-soft" /> {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-white">
                <Phone className="size-4 text-brand-soft" /> {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-brand-soft" /> {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/40 sm:px-8">
          Copyright ©{" "}
          <Suspense>
            <CurrentYear />
          </Suspense>{" "}
          {site.company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
