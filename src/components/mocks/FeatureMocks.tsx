import { Camera, Check, ChevronLeft, Clock, MapPin, Mic, X } from "lucide-react";
import type { ReactNode } from "react";

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-panel p-6 shadow-2xl shadow-black/50 ${className}`}>
      {children}
    </div>
  );
}

function Avatar({ name, tone = "bg-brand/25 text-brand-tint" }: { name: string; tone?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <span className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-semibold ${tone}`}>
      {initials}
    </span>
  );
}

export function AssignMock() {
  const tasks = [
    { label: "Open main gate & log visitors", done: true },
    { label: "Hourly perimeter patrol", done: true },
    { label: "Check fire exits - Level 2", done: false },
    { label: "End-of-shift handover note", done: false },
  ];
  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Assign duty</p>
        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Guard available</span>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-line bg-white/3 p-3">
        <Avatar name="James Carter" />
        <div className="flex-1">
          <p className="font-medium">James Carter</p>
          <p className="text-sm text-white/45">Licensed · Unarmed</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-line bg-white/3 p-3">
          <p className="text-white/45">Site</p>
          <p className="mt-1 flex items-center gap-1.5 font-medium">
            <MapPin className="size-4 text-brand-soft" /> Downtown Plaza
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-white/3 p-3">
          <p className="text-white/45">Duty hours</p>
          <p className="mt-1 flex items-center gap-1.5 font-medium">
            <Clock className="size-4 text-brand-soft" /> 6:00 AM - 2:00 PM
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm text-white/45">Tasks for this shift</p>
      <ul className="mt-3 space-y-2">
        {tasks.map((t) => (
          <li key={t.label} className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5 text-sm">
            <span
              className={`grid size-5 place-items-center rounded-md ${
                t.done ? "bg-brand" : "border border-white/20"
              }`}
            >
              {t.done && <Check className="size-3.5" strokeWidth={3} />}
            </span>
            {t.label}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex h-12 items-center justify-center rounded-full bg-brand font-medium">
        Assign to James
      </div>
    </Card>
  );
}

export function ReportFormMock() {
  return (
    <div className="mx-auto w-full max-w-85 rounded-[2.75rem] border border-white/10 bg-black p-3 shadow-2xl shadow-black/60">
      <div className="overflow-hidden rounded-[2.2rem] bg-linear-to-b from-[#2a0d10] to-panel px-5 pb-6 pt-4">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>9:41</span>
          <span className="h-5 w-20 rounded-full bg-black" />
          <span>100%</span>
        </div>
        <div className="mt-5 grid size-9 place-items-center rounded-full bg-white/10">
          <ChevronLeft className="size-4" />
        </div>
        <p className="mt-4 text-2xl font-semibold">Task report</p>
        <p className="text-sm text-white/50">Hourly perimeter patrol</p>

        <div className="mt-5 space-y-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-white/45">Activity</p>
            <p className="mt-1">Completed full perimeter walk. North gate found unlocked - secured at 10:42 PM.</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-xl bg-[url('/images/banner.png')] bg-cover bg-position-[70%_30%]" />
            <div className="aspect-square rounded-xl bg-[url('/images/about.png')] bg-size-[240%] bg-position-[24%_32%]" />
            <div className="grid aspect-square place-items-center rounded-xl border border-dashed border-white/20 text-white/40">
              <Camera className="size-5" />
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" /> Oct 13 · 10:45 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" /> Harbor Warehouse
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <div className="grid size-12 place-items-center rounded-full border border-white/15">
            <Mic className="size-5 text-brand-soft" />
          </div>
          <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-brand text-sm font-medium">
            Submit report
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReviewMock() {
  const reports = [
    { name: "Ravi Singh", task: "Night patrol - Harbor Warehouse", time: "2 min ago", state: "new" },
    { name: "Lena Nguyen", task: "Lobby check-in log - Westfield", time: "18 min ago", state: "new" },
    { name: "James Carter", task: "Gate opening - Downtown Plaza", time: "1 hr ago", state: "approved" },
    { name: "Maria Diaz", task: "Fire exit inspection - Level 2", time: "3 hr ago", state: "flagged" },
  ] as const;
  const badge = {
    new: "bg-brand/15 text-brand-tint",
    approved: "bg-emerald-400/15 text-emerald-300",
    flagged: "bg-amber-300/15 text-amber-200",
  };
  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Incoming reports</p>
        <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium">2 new</span>
      </div>
      <ul className="mt-5 space-y-3">
        {reports.map((r) => (
          <li key={r.name} className="flex items-center gap-3 rounded-2xl border border-line bg-white/3 p-3">
            <Avatar name={r.name} tone="bg-white/10 text-white/80" />
            <div className="min-w-0 flex-1">
              <p className="font-medium">{r.name}</p>
              <p className="truncate text-sm text-white/45">{r.task}</p>
            </div>
            <div className="text-right">
              <span className={`rounded-full px-2.5 py-0.5 text-xs capitalize ${badge[r.state]}`}>{r.state}</span>
              <p className="mt-1 text-xs text-white/35">{r.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-3">
        <div className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-brand text-sm font-medium">
          <Check className="size-4" /> Approve
        </div>
        <div className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 text-sm">
          <X className="size-4" /> Request changes
        </div>
      </div>
    </Card>
  );
}

export function AnalyticsMock() {
  const bars = [62, 78, 70, 88, 84, 94, 91];
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/45">Task completion rate</p>
          <p className="mt-1 text-4xl font-semibold">
            91% <span className="text-base font-medium text-emerald-300">+6%</span>
          </p>
        </div>
        <div className="flex rounded-full border border-line p-1 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1">Week</span>
          <span className="px-3 py-1 text-white/45">Month</span>
          <span className="px-3 py-1 text-white/45">Year</span>
        </div>
      </div>

      <div className="mt-8 flex h-48 items-end gap-3">
        {bars.map((h, i) => (
          <div key={i} className="flex h-full flex-1 flex-col items-center gap-2">
            <div className="flex w-full flex-1 items-end">
              <div
                className={`w-full rounded-t-xl ${
                  i === bars.length - 2 ? "bg-brand" : "bg-linear-to-t from-brand/20 to-brand/50"
                }`}
                style={{ height: `${h}%` }}
              />
            </div>
            <span className="text-xs text-white/35">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
        {[
          ["Reports filed", "412"],
          ["Avg. review time", "14 min"],
          ["Open issues", "3"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-line bg-white/3 p-3">
            <p className="text-white/45">{k}</p>
            <p className="mt-1 text-lg font-semibold">{v}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
