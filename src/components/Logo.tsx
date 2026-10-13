import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="LivvGuard home" className={`flex items-center gap-2.5 ${className}`}>
      <Image src="/images/shield.png" alt="" width={111} height={140} className="h-8 w-auto" priority />
      <span className="text-xl font-bold tracking-wide">
        <span className="text-brand">LIVV</span>
        <span className="text-white">GUARD</span>
      </span>
    </Link>
  );
}
