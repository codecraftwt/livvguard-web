import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-white/60">{children}</p>}
    </Reveal>
  );
}
