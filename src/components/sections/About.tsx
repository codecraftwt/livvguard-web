import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const values = [
  { title: "Guaranteed professionalism", text: "Trained, accountable personnel on every post." },
  { title: "Surveillance & insurance", text: "Coverage and oversight our clients can rely on." },
  { title: "State-of-the-art facilities", text: "Top-notch facility services that keep clients at ease." },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="above-glow order-2 lg:order-1">
          <div className="glow pointer-events-none absolute inset-0" />
          <Image
            src="/images/about.png"
            alt="LivvGuard security officers reviewing a report on a tablet"
            width={600}
            height={545}
            className="relative mx-auto w-full max-w-xl"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading align="left" eyebrow="About us" title={<>Protecting top-level clients for <span className="text-gradient">20+ years</span></>}>
            We value our clients&apos; priorities and expectations, building long-lasting bonds so they
            feel safe and secure with us and with our services.
          </SectionHeading>

          <Reveal delay={100} className="mt-8 rounded-3xl border border-brand/30 bg-brand/[0.07] p-6">
            <Quote className="size-7 text-brand-soft" />
            <p className="mt-3 text-xl font-medium leading-snug">
              Security is not a product, rather a process of trust and hope.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={150 + i * 80} className="h-full">
                <div className="card-hover h-full rounded-2xl border border-line bg-white/3 p-5 hover:bg-white/6">
                  <p className="font-semibold">{v.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
