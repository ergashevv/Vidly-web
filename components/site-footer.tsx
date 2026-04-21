import Link from "next/link";
import { VidlyLogo } from "@/components/vidly-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] px-6 py-10">
      <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#e8edf5]">
          <VidlyLogo size={28} className="shrink-0" />
          Vidly
        </p>
        <nav className="flex flex-wrap gap-4 text-xs text-[#e8edf5]/48">
          <Link href="/support" className="hover:text-[#7dd3fc]">
            Support
          </Link>
          <Link href="/privacy" className="hover:text-[#7dd3fc]">
            Privacy
          </Link>
          <a href="/" className="hover:text-[#7dd3fc]">
            Home
          </a>
        </nav>
        <p className="max-w-md text-xs text-[#e8edf5]/48">
          Product site for the Vidly Chrome extension. Extension source may live in a separate
          repository.
        </p>
      </div>
    </footer>
  );
}
