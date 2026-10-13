import { ArrowRight } from "lucide-react";
import Button from "../Button";
import Reveal from "../Reveal";

export default function Cta() {
  return (
    <section className="px-5 pb-28 sm:px-8">
      <Reveal className="above-glow mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-brand/30 bg-[url('/images/banner.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/40" />
        <div className="relative max-w-2xl px-8 py-16 sm:px-14 sm:py-20">
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Ready to run a <span className="text-gradient">smarter</span> security operation?
          </h2>
          <p className="mt-5 text-lg text-white/70">
            See how LivvGuard assigns duties, collects reports and keeps every post accountable.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact-us" size="lg">
              Get a demo <ArrowRight className="size-5" />
            </Button>
            <Button href="/#app" size="lg" variant="ghost">
              Download the app
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
