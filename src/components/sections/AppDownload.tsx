import Image from "next/image";
import { BellRing, Clock, ClipboardCheck, Smartphone } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { site } from "@/lib/site";

const perks = [
  { icon: BellRing, title: "Receive assigned duties", text: "New shifts and tasks arrive the moment they are assigned." },
  { icon: Clock, title: "Track working hours", text: "Every hour on duty is recorded without paper timesheets." },
  { icon: ClipboardCheck, title: "Submit reports in real time", text: "File task reports from the post, right when it happens." },
  { icon: Smartphone, title: "Simple, user-friendly", text: "Seamless communication with a clean interface guards like." },
];

export default function AppDownload() {
  return (
    <section id="app" className="relative overflow-hidden border-t border-line py-28 sm:py-36">
      <div className="glow pointer-events-none absolute -left-40 top-1/3 size-130" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="Guard app" title="Your guard's assistant, right in the pocket.">
            Download the app for guards and take control of daily responsibilities with ease. Stay
            organized, improve accountability and enhance overall performance - all from a mobile
            device.
          </SectionHeading>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {perks.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="flex gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-panel-2">
                  <Icon className="size-5 text-brand-soft" />
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
            <a href={site.appStoreUrl} aria-label="Download on the Apple App Store" className="transition-transform duration-200 hover:-translate-y-0.5">
              <Image src="/images/store1.png" alt="Available on Apple Store" width={170} height={50} className="h-13 w-auto rounded-lg ring-1 ring-white/15" />
            </a>
            <a href={site.playStoreUrl} aria-label="Get it on Google Play" className="transition-transform duration-200 hover:-translate-y-0.5">
              <Image src="/images/store2.png" alt="Get it on Google Play" width={170} height={50} className="h-13 w-auto rounded-lg ring-1 ring-white/15" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="above-glow">
          <div className="absolute inset-x-10 bottom-0 top-10 rounded-[3rem] bg-linear-to-b from-brand/25 to-transparent blur-2xl" />
          <Image
            src="/images/mobile.png"
            alt="LivvGuard guard app screens"
            width={463}
            height={656}
            className="relative mx-auto w-full max-w-md drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
