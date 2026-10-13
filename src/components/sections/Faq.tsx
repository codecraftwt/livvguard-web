"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative border-t border-line py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Before you book.">
          The things operators ask us first. Anything else? Talk to our team directly.
        </SectionHeading>

        <Reveal className="mt-12">
          <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-panel/60">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium text-white/90 transition-colors hover:text-white sm:px-8"
                  >
                    {item.q}
                    <Plus
                      className={`size-5 shrink-0 text-brand-soft transition-transform duration-300 ease-out ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-white/60 sm:px-8">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <Button href="/contact-us">Book a demo</Button>
        </Reveal>
      </div>
    </section>
  );
}
