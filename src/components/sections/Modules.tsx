import {
  CalendarClock,
  ChartNoAxesColumn,
  ClipboardCheck,
  FileSearch,
  ListChecks,
  MonitorCheck,
  ShieldCheck,
  Siren,
} from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const modules = [
  { icon: CalendarClock, title: "Duty hours", text: "Plan shifts and assign hours to every guard." },
  { icon: ListChecks, title: "Task assignment", text: "Allocate specific tasks with clear responsibilities." },
  { icon: ClipboardCheck, title: "Guard reports", text: "Guards submit task reports right after duty." },
  { icon: Siren, title: "Incident details", text: "Activity logs, timestamps and supporting evidence." },
  { icon: MonitorCheck, title: "Central dashboard", text: "Every submitted report lands in one place, instantly." },
  { icon: ChartNoAxesColumn, title: "Performance", text: "Track guard performance and spot issues early." },
  { icon: FileSearch, title: "Report history", text: "Historical and real-time reports, always accessible." },
  { icon: ShieldCheck, title: "Audit & compliance", text: "Transparent records that hold up to review." },
];

const notes = ["One shared record", "Real-time updates", "No paperwork"];

export default function Modules() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Essential features" title="Everything your operation needs. One hub.">
          The core features are designed to streamline security operations management - from
          assigning duty hours to verifying every report.
        </SectionHeading>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm font-medium tracking-wide text-white/70">Eight parts of one operations hub</p>
          <ul className="flex flex-wrap gap-2">
            {notes.map((note) => (
              <li key={note} className="rounded-full border border-line px-3 py-1 text-sm text-white/60">
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="marquee-mask mt-8 overflow-hidden">
        <ul className="marquee-track flex w-max gap-4 py-2">
          {[...modules, ...modules].map(({ icon: Icon, title, text }, i) => (
            <li
              key={`${title}-${i}`}
              {...(i >= modules.length ? { "data-clone": "" } : {})}
              aria-hidden={i >= modules.length}
              className="flex w-80 shrink-0 gap-4 rounded-2xl border border-line bg-panel p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand-soft">
                <Icon className="size-5" strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 leading-relaxed text-white/55">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
