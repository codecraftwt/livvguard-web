"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";
import {
  CalendarClock,
  ChartNoAxesColumn,
  ClipboardCheck,
  FileSearch,
  ListChecks,
  MonitorCheck,
  ShieldCheck,
  Siren,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

type HubRow = [string, string, number];

type HubModule = {
  icon: LucideIcon;
  title: string;
  sub: string;
  text: string;
  checks: string[];
  rows: HubRow[];
};

const modules: HubModule[] = [
  {
    icon: CalendarClock,
    title: "Duty hours",
    sub: "Every shift, on the record",
    text: "Guards clock in and out from their phone. Hours are tallied as they happen, so payroll and coverage are never a guess.",
    checks: ["Clock-in verified by site location", "Coverage gaps flagged instantly", "Overtime tracked per guard"],
    rows: [
      ["Night shift, Gate A", "22:00 - 06:00", 92],
      ["Day shift, Lobby", "06:00 - 14:00", 78],
      ["Patrol, Parking", "14:00 - 22:00", 64],
    ],
  },
  {
    icon: ListChecks,
    title: "Task assignment",
    sub: "The right guard, the right job",
    text: "Supervisors assign checkpoints and patrols in a few taps. Guards see their tasks the moment they are sent.",
    checks: ["Assign by guard, site or shift", "Guards confirm each task", "Overdue tasks escalate automatically"],
    rows: [
      ["Perimeter patrol", "Assigned", 100],
      ["Fire exit check", "In progress", 55],
      ["Visitor log review", "Pending", 18],
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Guard reports",
    sub: "One shared record",
    text: "Guards submit task reports right after duty. The central dashboard makes sure every report lands in one place, instantly.",
    checks: ["Report filed straight after duty", "Timestamped at submission", "Lands in the central dashboard"],
    rows: [
      ["Gate A patrol report", "Just now", 100],
      ["Lobby handover note", "4 min ago", 100],
      ["Parking check report", "12 min ago", 100],
    ],
  },
  {
    icon: Siren,
    title: "Incident details",
    sub: "Capture it while it is fresh",
    text: "Log what happened with photos, location and severity in under a minute. The right people are notified straight away.",
    checks: ["Photos and notes attached on the spot", "Severity decides who is alerted", "Full timeline kept for every incident"],
    rows: [
      ["Door left unlocked", "Low", 24],
      ["Unknown visitor, Gate B", "Medium", 58],
      ["Alarm triggered, Block C", "High", 90],
    ],
  },
  {
    icon: MonitorCheck,
    title: "Central dashboard",
    sub: "Everything at a glance",
    text: "See guards, reports and incidents across every site in one view. Nothing waits in a drawer or an inbox.",
    checks: ["Live status for every site", "Filter by guard, site or date", "Share a view with one link"],
    rows: [
      ["Sites online", "12 of 12", 100],
      ["Reports today", "148", 82],
      ["Open incidents", "3", 20],
    ],
  },
  {
    icon: ChartNoAxesColumn,
    title: "Performance",
    sub: "See who is doing great work",
    text: "Punctuality, completed tasks and report quality come together in a clear score, so recognition is based on facts.",
    checks: ["Scores update after every shift", "Compare sites and teams", "Spot training needs early"],
    rows: [
      ["On-time arrival", "96%", 96],
      ["Tasks completed", "91%", 91],
      ["Report quality", "84%", 84],
    ],
  },
  {
    icon: FileSearch,
    title: "Report history",
    sub: "Find any report in seconds",
    text: "Every report ever filed is searchable. Look up a date, a guard or a keyword and open the original right away.",
    checks: ["Search across all sites", "Filter by date, guard or type", "Export to PDF or spreadsheet"],
    rows: [
      ["Reports this month", "1,284", 88],
      ['Matched "gate"', "96", 34],
      ["Exported this week", "14", 12],
    ],
  },
  {
    icon: ShieldCheck,
    title: "Audit & compliance",
    sub: "Always ready for inspection",
    text: "Records cannot be edited after submission, and every view is logged. When an audit comes, the evidence is ready.",
    checks: ["Edits are blocked after submission", "Every access is logged", "One-click audit pack"],
    rows: [
      ["Records verified", "100%", 100],
      ["Access reviews", "Up to date", 94],
      ["Retention policy", "Active", 100],
    ],
  },
];

type Layout = {
  mobile: boolean;
  cx: number;
  cy: number;
  pts: { x: number; y: number }[];
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export default function Modules() {
  const [active, setActive] = useState(-1);
  const [count, setCount] = useState(148);
  const [ready, setReady] = useState(false);
  const [layout, setLayout] = useState<Layout | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const packetRefs = useRef<(SVGCircleElement | null)[]>([]);
  const layoutRef = useRef<Layout | null>(null);
  const activeRef = useRef(-1);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let raf = 0;
    const compute = () => {
      const mobile = window.matchMedia("(max-width: 820px)").matches;
      const w = el.clientWidth;
      const h = el.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const rx = w * 0.41;
      const ry = h * 0.385;
      const pts = modules.map((_, i) => {
        const a = -Math.PI / 2 + (i * Math.PI) / 4;
        return { x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) };
      });
      const next: Layout = { mobile, cx, cy, pts };
      layoutRef.current = next;
      setLayout(next);
      setReady(true);
    };
    compute();
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    });
    ro.observe(el);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1 + Math.floor(Math.random() * 3));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;
    el.classList.remove("tick");
    void el.offsetWidth;
    el.classList.add("tick");
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeRef.current > -1) setActive(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (active > -1 && layoutRef.current?.mobile) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [active]);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const loop = (t: number) => {
      const L = layoutRef.current;
      if (L && !L.mobile) {
        for (let i = 0; i < modules.length; i++) {
          const c = packetRefs.current[i];
          if (!c) continue;
          const p = L.pts[i];
          const u = (t / 2800 + i * 0.125) % 1;
          const on = i === activeRef.current;
          c.setAttribute("cx", String(p.x + (L.cx - p.x) * u));
          c.setAttribute("cy", String(p.y + (L.cy - p.y) * u));
          c.setAttribute("opacity", String(Math.sin(Math.PI * u) * (on ? 1 : 0.55)));
          c.setAttribute("r", String(on ? 4.5 : 3));
        }
      }
      if (!still) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleSelect = (i: number) => setActive((prev) => (prev === i ? -1 : i));

  const handleStageClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setActive(-1);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (layoutRef.current?.mobile) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    nodeRefs.current.forEach((n) => {
      if (!n) return;
      const r = n.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy);
      const f = Math.max(0, 1 - d / 260);
      n.style.setProperty("--tx", `${(dx / (d || 1)) * 14 * f}px`);
      n.style.setProperty("--ty", `${(dy / (d || 1)) * 14 * f}px`);
    });
  };

  const resetLean = () => {
    nodeRefs.current.forEach((n) => {
      if (!n) return;
      n.style.setProperty("--tx", "0px");
      n.style.setProperty("--ty", "0px");
    });
  };

  const activeModule = active >= 0 ? modules[active] : null;
  const ActiveIcon = activeModule?.icon;

  return (
    <section id="features" className="hub relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-night via-[#150a10] to-night" />
        <div className="glow absolute left-1/2 top-6 h-72 w-176 max-w-full -translate-x-1/2 opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Essential features" title="Everything your operation needs. One hub.">
          The core features are designed to streamline security operations management - from assigning duty hours to
          verifying every report.
        </SectionHeading>

        <Reveal className="above-glow mt-10">
          <div
            ref={stageRef}
            data-ready={ready ? "true" : undefined}
            className={"hub-stage" + (active >= 0 ? " open" : "")}
            onClick={handleStageClick}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetLean}
          >
            <svg className="hub-links" aria-hidden="true">
              {layout &&
                !layout.mobile &&
                modules.map((m, i) => (
                  <line
                    key={`line-${m.title}`}
                    className={"hub-ln" + (active === i ? " on" : "")}
                    x1={layout.pts[i].x}
                    y1={layout.pts[i].y}
                    x2={layout.cx}
                    y2={layout.cy}
                  />
                ))}
              {layout &&
                !layout.mobile &&
                modules.map((m, i) => (
                  <circle
                    key={`packet-${m.title}`}
                    ref={(el) => {
                      packetRefs.current[i] = el;
                    }}
                    className="hub-pk"
                    r={3}
                  />
                ))}
            </svg>

            <div className="hub-core">
              <i />
              <i />
              <small>Central hub</small>
              <strong ref={countRef}>{count}</strong>
              <small>reports synced today</small>
              <span className="hub-live">
                <b />
                Live
              </span>
            </div>

            {modules.map((m, i) => {
              const Icon = m.icon;
              const p = layout && !layout.mobile ? layout.pts[i] : null;
              return (
                <button
                  key={m.title}
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  type="button"
                  aria-pressed={active === i}
                  onClick={() => handleSelect(i)}
                  className={"hub-node" + (active === i ? " act" : "")}
                  style={{ "--n": i, left: p?.x, top: p?.y } as CSSProperties}
                >
                  <span className="hub-ico">
                    <Icon strokeWidth={1.8} />
                  </span>
                  {m.title}
                </button>
              );
            })}

            <section
              ref={panelRef}
              className="hub-panel"
              role="region"
              aria-live="polite"
              aria-label="Module details"
            >
              {activeModule && ActiveIcon && (
                <div key={active}>
                  <div className="hub-ph hub-r" style={{ "--i": 0 } as CSSProperties}>
                    <span className="hub-ico">
                      <ActiveIcon strokeWidth={1.8} />
                    </span>
                    <div>
                      <h2>{activeModule.title}</h2>
                      <p>{activeModule.sub}</p>
                    </div>
                    <button
                      type="button"
                      className="hub-x"
                      aria-label="Close details"
                      onClick={() => setActive(-1)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        strokeLinecap="round"
                      >
                        <path d="M6 6l12 12M18 6 6 18" />
                      </svg>
                    </button>
                  </div>

                  <p className="hub-desc hub-r" style={{ "--i": 1 } as CSSProperties}>
                    {activeModule.text}
                  </p>

                  <ul className="hub-checks">
                    {activeModule.checks.map((c, ci) => (
                      <li key={c} className="hub-r" style={{ "--i": ci + 2 } as CSSProperties}>
                        <b>
                          <CheckIcon />
                        </b>
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="hub-feed hub-r" style={{ "--i": 5 } as CSSProperties}>
                    {activeModule.rows.map((row, ri) => (
                      <div key={row[0]} className="hub-row">
                        <div className="l">
                          <span>{row[0]}</span>
                          <span>{row[1]}</span>
                        </div>
                        <div className="hub-bar">
                          <div className="hub-fill" style={{ "--p": row[2] / 100, "--k": ri } as CSSProperties} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hub-foot hub-r" style={{ "--i": 6 } as CSSProperties}>
                    <span>Synced to hub, just now</span>
                    <span className="ok">Verified</span>
                  </div>
                </div>
              )}
            </section>
          </div>

          <p className="hub-hint">Click a module to open it. Click it again, or press Esc, to close.</p>
        </Reveal>
      </div>
    </section>
  );
}
