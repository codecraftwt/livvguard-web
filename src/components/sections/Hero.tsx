import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../Button";
import Reveal from "../Reveal";
import DashboardMock from "../mocks/DashboardMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute left-1/2 top-24 h-105 w-205 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand-tint sm:text-xs sm:tracking-[0.18em]">
            <Sparkles className="size-3.5" /> 20+ years securing top-level clients
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            The smarter way to manage <span className="text-gradient">security operations</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            Automation, real-time intelligence and centralized visibility in one platform - so you
            assign duties, collect reports and review performance without the manual chase.
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact-us" size="lg">
            Get a demo <ArrowRight className="size-5" />
          </Button>
          <Button href="/#features" size="lg" variant="ghost">
            Explore features
          </Button>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 text-sm text-white/45">
            Duty scheduling · Real-time task reports · Centralized dashboard
          </p>
        </Reveal>

        <Reveal delay={360} className="above-glow mx-auto mt-16 max-w-6xl">
          <div className="glow pointer-events-none absolute -inset-x-10 -top-10 h-64" />
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
