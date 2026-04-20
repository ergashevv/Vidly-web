import Link from "next/link";
import { VidlyLogo } from "@/components/vidly-logo";

const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#get", label: "Get the extension" },
  { href: "/support", label: "Support" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#05080f]/72 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1040px] flex-wrap items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-[#e8edf5]">
          <VidlyLogo size={40} className="shrink-0 shadow-lg shadow-black/40 ring-1 ring-white/5" />
          <span>Vidly</span>
        </Link>
        <nav className="hidden flex-wrap gap-4 text-sm text-[#e8edf5]/72 sm:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#7dd3fc]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
