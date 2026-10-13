import { ArrowRight, Check, MessageSquareText, Rocket, SlidersHorizontal } from "lucide-react";
import Button from "../Button";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const steps = [
  {
    icon: MessageSquareText,
    title: "Tell us your needs",
    text: "Share your scale of operations, number of guards and the features you care about.",
  },
  {
    icon: SlidersHorizontal,
    title: "Get a tailored plan",
    text: "We build a custom plan around your requirements - no fixed tiers to squeeze into.",
  },
  {
    icon: Rocket,
    title: "Go live with confidence",
    text: "Your team starts assigning duties and collecting reports from day one.",
  },
];

const included = [
  "Duty hours & task assignment",
  "Guard mobile app",
  "Real-time task reports",
  "Centralized review dashboard",
  "Historical report access",
  "Plans that scale with you",
];

export default function Plans() {
  return (
    <section id="plans" className="relative border-t border-line py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Subscription plans" title="Flexible plans, built around you.">
          Instead of fixed pricing tiers, we offer customized plans based on your unique
          requirements, scale of operations and feature preferences.
        </SectionHeading>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="h-full">
              <div className="card-hover group relative h-full rounded-3xl border border-line bg-panel p-8 hover:bg-panel-2">
                <span className="absolute right-8 top-8 text-5xl font-bold text-white/6 transition-colors group-hover:text-brand/20">
                  0{i + 1}
                </span>
                <div className="grid size-14 place-items-center rounded-2xl bg-brand/15 transition-colors group-hover:bg-brand/25">
                  <Icon className="size-7 text-brand-soft" strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/55">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-6 overflow-hidden rounded-3xl border border-brand/30 bg-linear-to-br from-brand/20 via-panel to-panel p-8 transition-colors duration-200 hover:border-brand/55 sm:p-12">
          <div className="glow pointer-events-none absolute -right-20 -top-20 size-80" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="text-3xl font-bold sm:text-4xl">Every plan includes</h3>
              <p className="mt-3 text-white/60">Bring your headcount and site count - leave with a real number.</p>
              <Button href="/contact-us" size="lg" className="mt-8">
                Request a custom plan <ArrowRight className="size-5" />
              </Button>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
