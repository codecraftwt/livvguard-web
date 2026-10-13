import {
  Bell,
  CalendarDays,
  ClipboardList,
  FileText,
  LayoutGrid,
  Search,
  Settings,
  Users,
} from "lucide-react";

const days = ["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16", "Sat 17", "Sun 18"];

type Shift = { time: string; guard: string; status: "done" | "live" | "open" | "planned" };

const sites: { name: string; address: string; shifts: (Shift | null)[] }[] = [
  {
    name: "Downtown Plaza",
    address: "Main gate · 2 posts",
    shifts: [
      { time: "6:00 AM - 2:00 PM", guard: "J. Carter", status: "done" },
      { time: "6:00 AM - 2:00 PM", guard: "J. Carter", status: "live" },
      { time: "6:00 AM - 2:00 PM", guard: "M. Diaz", status: "planned" },
      { time: "6:00 AM - 2:00 PM", guard: "M. Diaz", status: "planned" },
      { time: "6:00 AM - 2:00 PM", guard: "J. Carter", status: "planned" },
      null,
      null,
    ],
  },
  {
    name: "Harbor Warehouse",
    address: "Night patrol · 1 post",
    shifts: [
      { time: "10:00 PM - 6:00 AM", guard: "R. Singh", status: "done" },
      { time: "10:00 PM - 6:00 AM", guard: "R. Singh", status: "live" },
      { time: "10:00 PM - 6:00 AM", guard: "Unassigned", status: "open" },
      { time: "10:00 PM - 6:00 AM", guard: "R. Singh", status: "planned" },
      { time: "10:00 PM - 6:00 AM", guard: "A. Brooks", status: "planned" },
      { time: "10:00 PM - 6:00 AM", guard: "A. Brooks", status: "planned" },
      { time: "10:00 PM - 6:00 AM", guard: "Unassigned", status: "open" },
    ],
  },
  {
    name: "Westfield Campus",
    address: "Lobby · Reception",
    shifts: [
      { time: "2:00 PM - 10:00 PM", guard: "L. Nguyen", status: "done" },
      { time: "2:00 PM - 10:00 PM", guard: "L. Nguyen", status: "planned" },
      { time: "2:00 PM - 10:00 PM", guard: "K. Patel", status: "planned" },
      { time: "2:00 PM - 10:00 PM", guard: "K. Patel", status: "planned" },
      null,
      { time: "8:00 AM - 4:00 PM", guard: "L. Nguyen", status: "planned" },
      { time: "8:00 AM - 4:00 PM", guard: "L. Nguyen", status: "planned" },
    ],
  },
];

const statusStyle: Record<Shift["status"], string> = {
  done: "border-emerald-400/30 bg-emerald-400/10",
  live: "border-brand/60 bg-brand/15 ring-1 ring-brand/40",
  open: "border-dashed border-amber-300/50 bg-amber-300/5",
  planned: "border-white/10 bg-white/[0.04]",
};

const statusLabel: Record<Shift["status"], string> = {
  done: "Report in",
  live: "On duty",
  open: "Needs guard",
  planned: "Scheduled",
};

const stats = [
  { label: "Guards on duty", value: "18" },
  { label: "Tasks assigned", value: "64" },
  { label: "Reports submitted", value: "41" },
  { label: "Awaiting review", value: "6" },
];

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-panel/90 text-left shadow-2xl shadow-black/60 backdrop-blur">
      <div className="flex">
        <aside className="hidden w-14 shrink-0 flex-col items-center gap-5 border-r border-line py-5 text-white/40 md:flex">
          <LayoutGrid className="size-5 text-brand-soft" />
          <CalendarDays className="size-5" />
          <ClipboardList className="size-5" />
          <Users className="size-5" />
          <FileText className="size-5" />
          <Settings className="mt-auto size-5" />
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">Duty schedule</p>
              <p className="mt-1 text-lg font-semibold">Week of Oct 12 - 18</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden h-9 items-center gap-2 rounded-full border border-white/10 px-3 text-sm text-white/40 sm:flex">
                <Search className="size-4" /> Search guards
              </div>
              <div className="relative grid size-9 place-items-center rounded-full border border-white/10">
                <Bell className="size-4 text-white/60" />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-brand" />
              </div>
              <span className="rounded-full bg-brand px-3.5 py-2 text-xs font-medium">+ Assign duty</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-white/3 px-4 py-3">
                <p className="text-xs text-white/45">{s.label}</p>
                <p className="mt-1 text-2xl font-semibold">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
            <div className="min-w-220">
              <div className="grid grid-cols-[180px_repeat(7,1fr)] border-b border-line bg-white/2 text-xs text-white/45">
                <div className="px-4 py-3">Sites · 3</div>
                {days.map((d, i) => (
                  <div
                    key={d}
                    className={`px-3 py-3 ${i === 1 ? "border-b-2 border-brand text-white" : ""}`}
                  >
                    {d}
                    {i === 1 && <span className="ml-1.5 text-[10px] text-brand-soft">TODAY</span>}
                  </div>
                ))}
              </div>
              {sites.map((site) => (
                <div key={site.name} className="grid grid-cols-[180px_repeat(7,1fr)] border-b border-line last:border-0">
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium">{site.name}</p>
                    <p className="text-xs text-white/40">{site.address}</p>
                  </div>
                  {site.shifts.map((shift, i) => (
                    <div key={i} className="p-1.5">
                      {shift && (
                        <div className={`rounded-lg border px-2 py-1.5 ${statusStyle[shift.status]}`}>
                          <p className="text-[10px] font-medium text-white/85">{shift.time}</p>
                          <p className="mt-0.5 truncate text-[11px] text-white/55">{shift.guard}</p>
                          <p className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
                            {statusLabel[shift.status]}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
