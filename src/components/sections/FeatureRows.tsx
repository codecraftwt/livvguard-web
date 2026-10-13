import { Check, type LucideIcon, CalendarClock, ClipboardCheck, MonitorCheck, FileSearch } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "../Reveal";
import { AssignMock, ReportFormMock, ReviewMock, AnalyticsMock } from "../mocks/FeatureMocks";

type Feature = {
  tag: string;
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
  mock: ReactNode;
};

const features: Feature[] = [
  {
    tag: "Scheduling",
    icon: CalendarClock,
    title: "Assign duty hours and tasks in minutes.",
    text: "Administrators and supervisors allocate duty hours and specific tasks to security personnel - so every guard knows exactly what is expected of them.",
    points: [
      "Clear communication of responsibilities",
      "Proper shift planning across every site",
      "Better operational coordination",
    ],
    mock: <AssignMock />,
  },
  {
    tag: "Guard reports",
    icon: ClipboardCheck,
    title: "Guards submit task reports from the field.",
    text: "After completing their assigned duties, guards file reports straight from the app - accurate, real-time documentation with nothing left on paper.",
    points: [
      "Activity logs and incident details",
      "Timestamps on every entry",
      "Supporting photo evidence attached",
    ],
    mock: <ReportFormMock />,
  },
  {
    tag: "Review",
    icon: MonitorCheck,
    title: "Receive and review reports instantly.",
    text: "Submitted reports reach supervisors the moment they are filed, in a centralized dashboard built for fast review.",
    points: [
      "Monitor guard performance",
      "Identify issues before they grow",
      "Confirm every assigned task is complete",
    ],
    mock: <ReviewMock />,
  },
  {
    tag: "Reporting",
    icon: FileSearch,
    title: "Access reports for accuracy and audits.",
    text: "Historical and real-time reports are always one click away, so management can verify accuracy and track trends over time.",
    points: [
      "Performance trends at a glance",
      "Transparency for clients and auditors",
      "Compliance with operational standards",
    ],
    mock: <AnalyticsMock />,
  },
];

export default function FeatureRows() {
  return (
    <section className="relative border-t border-line py-28 sm:py-36">
      <div className="mx-auto max-w-7xl space-y-32 px-5 sm:px-8">
        {features.map(({ tag, icon: Icon, title, text, points, mock }, i) => (
          <div key={tag} className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 text-sm font-medium text-brand-tint">
                <Icon className="size-4" /> {tag}
              </span>
              <h3 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-white/60">{text}</p>
              <ul className="mt-8 space-y-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-white/80">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/15">
                      <Check className="size-3.5 text-brand-soft" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className={`above-glow ${i % 2 ? "lg:order-1" : ""}`}>
              <div className="glow pointer-events-none absolute inset-0 opacity-60" />
              <div className="relative mx-auto w-full max-w-lg">{mock}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
