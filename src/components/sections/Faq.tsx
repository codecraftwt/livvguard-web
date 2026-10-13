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
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Before you book.">
          The things operators ask us first. Anything else? Talk to our team directly.
        </SectionHeading>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 80} className="h-full">
              <article className="relative flex h-full gap-5 overflow-hidden rounded-2xl border border-line bg-panel p-6 sm:p-7">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-brand via-brand-soft/70 to-transparent"
                />
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/15 font-semibold tabular-nums text-brand-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-white">{f.q}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{f.a}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-brand/30 bg-linear-to-r from-brand/15 via-panel to-panel px-6 py-6 sm:flex-row sm:items-center sm:px-8">
          <p className="text-lg text-white/80">Need an answer that is specific to your sites?</p>
          <Button href="/contact-us">Book a demo</Button>
        </Reveal>
      </div>
    </section>
  );
}
