import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "edevzime@gmail.com";

/** Default WebSocket host (no path) — matches extension `DEFAULT_BACKEND_WS_URL` when user does not override. */
const defaultBackendHost = "vidly-production-1d79.up.railway.app";

export const metadata: Metadata = {
  title: "Privacy Policy — Vidly",
  description:
    "How Vidly handles audio, transcripts, and settings for the Chrome extension.",
  openGraph: {
    title: "Privacy Policy — Vidly",
    description: "Privacy practices for the Vidly Chrome extension.",
  },
};

export default function PrivacyPage() {
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7dd3fc]">Legal</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#e8edf5] sm:text-4xl">Privacy Policy</h1>
          <p className="mb-10 text-sm text-[#e8edf5]/48">Last updated: April 21, 2026</p>

          <div className="space-y-10 text-sm leading-relaxed text-[#e8edf5]/72">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">Overview</h2>
              <p>
                Vidly is a Chrome extension that shows live captions and translations for audio playing in
                the browser tab you choose. This policy describes what information is involved when you use
                Vidly and how it is handled.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">What we process</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong className="text-[#e8edf5]/90">Tab audio (when you start a session):</strong> After
                  you explicitly start subtitles, audio from the active tab is captured so it can be converted
                  to text and translated. Processing happens in real time over a secure connection to the
                  backend you use (by default, our service on{" "}
                  <span className="text-[#e8edf5]/90">{defaultBackendHost}</span>
                  ; advanced users may configure a different backend URL in the extension).
                </li>
                <li>
                  <strong className="text-[#e8edf5]/90">Transcripts and translations:</strong> Text produced
                  from your audio is sent back to the extension so it can be shown as subtitles. We do not use
                  this content for advertising and we do not sell personal data.
                </li>
                <li>
                  <strong className="text-[#e8edf5]/90">Local settings:</strong> Preferences such as
                  languages or an optional custom backend URL may be stored locally in your browser using
                  Chrome&apos;s extension storage. This stays on your device unless you sync Chrome data in a
                  way that includes extension data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">What we do not do</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Vidly does not run remotely hosted JavaScript from our servers; extension logic ships in the package.</li>
                <li>
                  We do not collect a browsing history list (pages you visited with titles and timestamps) as
                  a product feature.
                </li>
                <li>We do not request your passwords, bank details, or health records for Vidly to work.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">Retention and logs</h2>
              <p>
                Backend providers may keep short-lived operational or security logs (for example connection
                metadata) according to their infrastructure defaults. If you need details for compliance,
                contact us using the email below and we will describe current practices.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">Children</h2>
              <p>
                Vidly is not directed at children under 13. If you believe we have processed a child&apos;s
                information in error, contact us and we will take appropriate steps.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">Changes</h2>
              <p>
                We may update this policy when the extension or backend changes. The &quot;Last updated&quot;
                date at the top will change when we do. Continued use after an update means you accept the
                revised policy.
              </p>
            </section>

            <section className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="mb-3 text-lg font-semibold text-[#e8edf5]">Contact</h2>
              <p className="mb-4">
                Questions about this policy or your data:
              </p>
              <p>
                <a
                  href={`mailto:${supportEmail}?subject=Vidly%20privacy`}
                  className="font-semibold text-[#7dd3fc] underline-offset-2 hover:underline"
                >
                  {supportEmail}
                </a>
              </p>
            </section>
          </div>

          <p className="mt-10 text-sm text-[#e8edf5]/48">
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
