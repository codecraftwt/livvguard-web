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

export default function Modules() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Essential features" title="Everything your operation needs. One hub.">
          The core features are designed to streamline security operations management - from
          assigning duty hours to verifying every report.
        </SectionHeading>

        <Reveal className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-white/55">
          {["One shared record", "Real-time updates", "No paperwork"].map((tag) => (
            <span key={tag} className="rounded-full border border-line px-4 py-1.5">
              {tag}
            </span>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 4) * 80}>
              <div className="tile px-4 pb-9 pt-8 text-center">
                <div className="tile-icon mx-auto grid size-24 place-items-center rounded-[1.6rem] border border-white/10 bg-linear-to-b from-panel-2 to-panel text-brand-soft">
                  <Icon className="size-10" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mx-auto mt-2 max-w-60 leading-relaxed text-white/55">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
