import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "support@example.com";

const githubIssuesUrl = process.env.NEXT_PUBLIC_GITHUB_ISSUES_URL?.trim();

export const metadata: Metadata = {
  title: "Support — Vidly",
  description:
    "Get help with Vidly: installation, permissions, audio capture, and contacting the maintainer.",
  openGraph: {
    title: "Support — Vidly",
    description: "Help and contact for the Vidly Chrome extension.",
  },
};

export default function SupportPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[#7dd3fc] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#041018]"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="px-6 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[640px]">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7dd3fc]">Help</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#e8edf5] sm:text-4xl">Support</h1>
          <p className="mb-10 text-[#e8edf5]/72">
            Questions about installing Vidly, permissions, or live translation? Start here, then reach
            out if you still need help.
          </p>

          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">Common issues</h2>
            <ul className="list-inside list-disc space-y-2 text-sm text-[#e8edf5]/72">
              <li>
                <strong className="text-[#e8edf5]/90">No subtitles:</strong> confirm the tab is playing
                audio, Vidly is started from the extension popup, and your backend is reachable.
              </li>
              <li>
                <strong className="text-[#e8edf5]/90">Permission prompts:</strong> Chrome may ask for
                tab capture — this is required to hear audio from the page.
              </li>
              <li>
                <strong className="text-[#e8edf5]/90">Wrong language:</strong> change source and target
                languages in the extension popup before or during a session.
              </li>
            </ul>
          </section>

          <section className="mb-10 rounded-[18px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">Contact</h2>
            <p className="mb-4 text-sm text-[#e8edf5]/72">
              For bug reports, feature requests, or general questions about Vidly, send an email — we
              aim to reply within a few business days.
            </p>
            <p className="text-sm">
              <a
                href={`mailto:${supportEmail}?subject=Vidly%20support`}
                className="font-semibold text-[#7dd3fc] underline-offset-2 hover:underline"
              >
                {supportEmail}
              </a>
            </p>
            {githubIssuesUrl ? (
              <p className="mt-4 text-sm text-[#e8edf5]/72">
                Or open an issue on{" "}
                <a
                  href={githubIssuesUrl}
                  className="font-medium text-[#7dd3fc] underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            ) : null}
          </section>

          <p className="text-sm text-[#e8edf5]/48">
            <Link href="/" className="text-[#7dd3fc] hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
