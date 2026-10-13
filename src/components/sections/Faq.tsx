import { Plus } from "lucide-react";
import Button from "../Button";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const faqs = [
  {
    q: "What does LivvGuard help us manage?",
    a: "LivvGuard brings your security operations into one platform: assigning duty hours and tasks to guards, collecting their task reports, reviewing them in a centralized dashboard and accessing historical reports whenever you need them.",
  },
  {
    q: "What can guards do from the mobile app?",
    a: "Guards receive their assigned duties, track their working hours and submit task reports in real time - including activity logs, incident details, timestamps and supporting evidence.",
  },
  {
    q: "How do supervisors review reports?",
    a: "Reports reach supervisors instantly after submission. From the dashboard they can monitor guard performance, spot issues and confirm that every assigned task was completed as expected.",
  },
  {
    q: "Can we look back at older reports?",
    a: "Yes. Both historical and real-time reports stay accessible, so management can verify accuracy, track performance trends and support auditing and compliance.",
  },
  {
    q: "What does it cost?",
    a: "There are no fixed pricing tiers. We build a customized plan based on your requirements, scale of operations and the features you need. Request a demo and we will put together a plan for you.",
  },
  {
    q: "Who is behind LivvGuard?",
    a: "LivvGuard is built by a team that has provided security to top-level clients for over 20 years, with a focus on professionalism, surveillance and long-lasting client relationships.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative border-t border-line py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading align="left" eyebrow="FAQ" title="Before you book.">
            The things operators ask us first. Anything else? Talk to our team directly.
          </SectionHeading>
          <Reveal delay={100} className="mt-8">
            <Button href="/contact-us">Book a demo</Button>
          </Reveal>
        </div>

        <Reveal delay={100} className="divide-y divide-line rounded-3xl border border-line bg-panel/60">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5 transition-colors first:rounded-t-3xl last:rounded-b-3xl hover:bg-white/3 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-white/90 transition-colors group-hover:text-white">
                {f.q}
                <Plus className="size-5 shrink-0 text-brand-soft transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
