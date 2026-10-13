import { ArrowRight } from "lucide-react";
import Button from "../Button";
import Reveal from "../Reveal";
import DashboardMock from "../mocks/DashboardMock";

const points = ["Duty scheduling", "Real-time task reports", "Centralized dashboard"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute -left-24 top-28 size-72 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-end gap-4">
                <span className="text-6xl font-bold leading-none tracking-tight text-brand-soft sm:text-7xl">
                  20+
                </span>
                <span className="mb-1 max-w-40 text-sm font-medium uppercase leading-snug tracking-[0.16em] text-white/55">
                  years securing top-level clients
                </span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                The smarter way to manage security operations
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
                Automation, real-time intelligence and centralized visibility in one platform - so
                you assign duties, collect reports and review performance without the manual chase.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Button href="/contact-us" size="lg">
                Get a demo <ArrowRight className="size-5" />
              </Button>
              <Button href="/#features" size="lg" variant="ghost">
                Explore features
              </Button>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <ul className="border-t border-line">
              {points.map((point, i) => (
                <li key={point} className="flex items-center gap-4 border-b border-line py-5">
                  <span className="font-semibold tabular-nums text-brand-soft">0{i + 1}</span>
                  <span className="text-lg text-white/85">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={260} className="above-glow mt-14">
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
