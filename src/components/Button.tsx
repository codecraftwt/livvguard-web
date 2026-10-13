import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_10px_28px_-8px_rgba(215,35,35,0.6)] hover:-translate-y-px hover:bg-brand-600 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_14px_34px_-8px_rgba(215,35,35,0.75)]",
  ghost:
    "border border-white/15 bg-ink/40 text-white backdrop-blur-sm hover:-translate-y-px hover:border-white/40 hover:bg-white/5",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: "md" | "lg" }) {
  const sizing = size === "lg" ? "h-14 px-8 text-lg" : "h-11 px-5 text-base";
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,border-color,box-shadow,transform] duration-200 ${sizing} ${styles[variant]} ${className}`}
    />
  );
}
