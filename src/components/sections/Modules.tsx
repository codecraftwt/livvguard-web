"use client";

import { useEffect, useState } from "react";
import {
  CalendarClock,
  ChartNoAxesColumn,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Clock,
  FileSearch,
  ListChecks,
  MonitorCheck,
  ShieldCheck,
  Siren,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

type Module = {
  icon: LucideIcon;
  title: string;
  text: string;
  highlight: string;
  checks: string[];
};

const modules: Module[] = [
  {
    icon: CalendarClock,
    title: "Duty hours",
    text: "Plan shifts and assign hours to every guard.",
    highlight: "Every shift planned",
    checks: ["Shift roster sent to every guard", "Site coverage confirmed in advance", "Swaps and overtime auto-logged"],
  },
  {
    icon: ListChecks,
    title: "Task assignment",
    text: "Allocate specific tasks with clear responsibilities.",
    highlight: "Every task clear",
    checks: ["Tasks assigned with clear ownership", "Priorities set per post", "Acknowledgement logged instantly"],
  },
  {
    icon: ClipboardCheck,
    title: "Guard reports",
    text: "Guards submit task reports right after duty. The central dashboard ensures every submitted report lands in one place, instantly.",
    highlight: "One shared record",
    checks: ["Report filed straight after duty", "Timestamped at submission", "Lands in the central dashboard"],
  },
  {
    icon: Siren,
    title: "Incident details",
    text: "Activity logs, timestamps and supporting evidence.",
    highlight: "Evidence, logged",
    checks: ["Activity described with context", "Timestamps on every entry", "Photo evidence attached"],
  },
  {
    icon: MonitorCheck,
    title: "Central dashboard",
    text: "Every submitted report lands in one place, instantly.",
    highlight: "One place, instantly",
    checks: ["Every report in a single view", "Live status for each site", "Nothing lost in transit"],
  },
  {
    icon: ChartNoAxesColumn,
    title: "Performance",
    text: "Track guard performance and spot issues early.",
    highlight: "Issues spotted early",
    checks: ["Completion rates per guard", "Trends across sites and shifts", "Early flags on weak spots"],
  },
  {
    icon: FileSearch,
    title: "Report history",
    text: "Historical and real-time reports, always accessible.",
    highlight: "Always accessible",
    checks: ["Search historical and live reports", "Filter by guard, site or date", "Export for clients and audits"],
  },
  {
    icon: ShieldCheck,
    title: "Audit & compliance",
    text: "Transparent records that hold up to review.",
    highlight: "Ready for review",
    checks: ["Transparent, tamper-evident records", "Standards mapped to evidence", "Audit-ready at any time"],
  },
];

const pills = [
  { label: "One shared record", kind: "dot" },
  { label: "No paperwork", kind: "check" },
  { label: "Real-time updates", kind: "dot" },
] as const;

const LEFT = modules.map((_, i) => i).filter((i) => i < 4);
const RIGHT = modules.map((_, i) => i).filter((i) => i >= 4);

function CollapsedCard({
  module,
  active,
  onSelect,
}: {
  module: Module;
  active: boolean;
  onSelect: () => void;
}) {
  const Icon = module.icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active}
      className={`card-hover group flex w-full items-center gap-3 rounded-2xl border p-4 text-left lg:min-h-28 lg:flex-col lg:items-start lg:gap-4 lg:p-5 ${
        active
          ? "border-brand/50 bg-brand/10 ring-1 ring-brand/20"
          : "border-line bg-panel/60 hover:border-brand/40 hover:bg-white/5"
      }`}
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl border lg:size-11 ${
          active ? "border-brand/50 bg-brand text-white" : "border-brand/25 bg-brand/10 text-brand-soft"
        }`}
      >
        <Icon className="size-5" strokeWidth={1.7} />
      </span>
      <span className="flex flex-1 items-center justify-between gap-2 lg:w-full lg:items-end">
        <span
          className={`text-sm font-semibold leading-snug transition ${
            active ? "text-white" : "text-white/85 group-hover:text-white"
          }`}
        >
          {module.title}
        </span>
        <ChevronDown
          aria-hidden
          className={`size-4 shrink-0 transition ${
            active
              ? "rotate-180 text-brand-soft"
              : "hint-pulse text-white/35 group-hover:text-brand-soft"
          }`}
        />
      </span>
      <span className="sr-only">Show {module.title} details</span>
    </button>
  );
}

export default function Modules() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = modules[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % modules.length);
    }, 10000);
    return () => clearTimeout(id);
  }, [activeIndex]);

  return (
    <section id="features" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-night via-[#150a10] to-night" />
        <div className="glow absolute left-1/2 top-6 h-72 w-176 max-w-full -translate-x-1/2 opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Essential features" title="Everything your operation needs. One hub.">
          The core features are designed to streamline security operations management - from
          assigning duty hours to verifying every report.
        </SectionHeading>

        <Reveal className="mt-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
            Eight parts of one operations hub
          </p>
        </Reveal>

        <Reveal delay={120} className="above-glow mt-8 sm:mt-10">
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1fr_minmax(0,1.75fr)_1fr]">
            <div className="order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:order-1 lg:flex lg:flex-col lg:justify-center">
              {LEFT.map((i) => (
                <CollapsedCard
                  key={modules[i].title}
                  module={modules[i]}
                  active={i === activeIndex}
                  onSelect={() => setActiveIndex(i)}
                />
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div
                key={activeIndex}
                className="panel-in card-hover relative z-10 flex h-full flex-col overflow-hidden rounded-3xl border border-brand/40 bg-panel/90 p-6 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.95)] ring-1 ring-white/5 hover:shadow-[0_50px_110px_-25px_rgba(215,35,35,0.35)] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand/20 blur-3xl" />

                <div className="relative flex items-center justify-between gap-3">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-soft">
                    {active.title} module
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400" /> Live
                  </span>
                </div>

                <h3 className="relative mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  {active.highlight}
                </h3>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {pills.map((pill) => (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3.5 py-1.5 text-sm text-white/70"
                    >
                      {pill.kind === "check" ? (
                        <Check className="size-3.5 text-emerald-400" strokeWidth={3} />
                      ) : (
                        <span className="size-2 rounded-full bg-brand-soft" />
                      )}
                      {pill.label}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex-1 rounded-2xl border border-line bg-white/3 p-5">
                  <div className="flex items-start gap-4">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-brand/50 bg-brand/10 text-brand-soft">
                      <ActiveIcon className="size-7" strokeWidth={1.6} />
                    </span>
                    <p className="leading-relaxed text-white/75">{active.text}</p>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {active.checks.map((check) => (
                      <li key={check} className="flex items-center gap-2.5 text-sm text-white/70">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand/15">
                          <Check className="size-3 text-brand-soft" strokeWidth={3} />
                        </span>
                        {check}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-xs text-white/45">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5" /> Synced to hub · just now
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CircleCheck className="size-3.5" /> Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-3 grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:justify-center">
              {RIGHT.map((i) => (
                <CollapsedCard
                  key={modules[i].title}
                  module={modules[i]}
                  active={i === activeIndex}
                  onSelect={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
