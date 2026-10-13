import type { CSSProperties, ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={{ "--reveal-offset": delay / 20 } as CSSProperties}>
      {children}
    </div>
  );
}
