import Link from "next/link";
import { VidlyLogo } from "@/components/vidly-logo";

const CHROME_STORE_URL =
  process.env.NEXT_PUBLIC_CHROME_STORE_URL ??
  "https://chrome.google.com/webstore/detail/vidly/placeholder";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[#7dd3fc] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#041018]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#05080f]/72 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1040px] flex-wrap items-center justify-between gap-4 px-6 py-3.5">
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-[#e8edf5]">
            <VidlyLogo size={40} className="shrink-0 shadow-lg shadow-black/40 ring-1 ring-white/5" />
            <span>Vidly</span>
          </Link>
          <nav className="hidden flex-wrap gap-4 text-sm text-[#e8edf5]/72 sm:flex" aria-label="Primary">
            <a href="#features" className="hover:text-[#7dd3fc]">
              Features
            </a>
            <a href="#how" className="hover:text-[#7dd3fc]">
              How it works
            </a>
            <a href="#get" className="hover:text-[#7dd3fc]">
              Get the extension
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(125,211,252,0.08),transparent_45%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[720px]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#7dd3fc]">
              Chrome extension
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#e8edf5] sm:text-5xl">
              Live subtitles, translated in your tab
            </h1>
            <p className="mb-7 max-w-[52ch] text-lg text-[#e8edf5]/72">
              Vidly listens to the audio from the page you are on and shows translated captions on
              screen — so you can follow talks, streams, and films in the language you want.
            </p>
            <div className="mb-5 flex flex-wrap gap-3">
              <a
                href={CHROME_STORE_URL}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#bae6fd] to-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-[#041018] shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Add to Chrome
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-[#e8edf5] transition hover:-translate-y-0.5"
              >
                See how it works
              </a>
            </div>
            <p className="max-w-[52ch] text-xs text-[#e8edf5]/48">
              You connect a backend you control (for example Azure Speech and Azure OpenAI). Vidly
              does not replace your browser&apos;s security; you choose what runs.
            </p>
          </div>
        </section>

        <section id="features" className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[1040px]">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#e8edf5] sm:text-4xl">
              Built for focus
            </h2>
            <p className="mb-8 max-w-[52ch] text-[#e8edf5]/72">
              A minimal overlay stays out of the way of the video while keeping captions readable.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Tab-aware",
                  body: "Works with the active tab's audio so you stay aligned with what you are watching.",
                },
                {
                  title: "Pause & visibility",
                  body: "Pause updates or hide the overlay when you need a clear view of the page.",
                },
                {
                  title: "Your stack",
                  body: "Designed to work with a server you deploy — wire your own speech and translation endpoints.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-[18px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 shadow-xl shadow-black/20"
                >
                  <h3 className="mb-2 text-[#7dd3fc]">{item.title}</h3>
                  <p className="text-sm text-[#e8edf5]/72">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how" className="border-y border-white/[0.08] bg-[#0c1220]/60 px-6 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[1040px]">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-[#e8edf5] sm:text-4xl">
              How it works
            </h2>
            <ol className="flex max-w-[640px] flex-col gap-6">
              {[
                {
                  step: "1",
                  title: "Install Vidly",
                  body: "Add the extension from the Chrome Web Store and open the popup on a page with audio.",
                },
                {
                  step: "2",
                  title: "Start a session",
                  body: "Grant capture when prompted and start translation. The overlay shows status and captions.",
                },
                {
                  step: "3",
                  title: "Read as you watch",
                  body: "Source and translated lines appear in the overlay; adjust languages from the extension UI.",
                },
              ].map((row) => (
                <li key={row.step} className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-400/25 bg-sky-400/15 text-sm font-bold text-[#7dd3fc]">
                    {row.step}
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-[#e8edf5]">{row.title}</h3>
                    <p className="text-sm text-[#e8edf5]/72">{row.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="get" className="px-6 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[1040px]">
            <div className="rounded-[22px] border border-white/10 bg-gradient-to-b from-sky-400/[0.06] to-transparent px-8 py-12 text-center sm:px-12">
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#e8edf5]">Get Vidly</h2>
              <p className="mx-auto mb-6 max-w-[52ch] text-[#e8edf5]/72">
                Install from the Chrome Web Store when your listing is live. Until then, load the
                extension unpacked in developer mode.
              </p>
              <a
                href={CHROME_STORE_URL}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#bae6fd] to-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#041018] shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5"
              >
                Chrome Web Store
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08] px-6 py-10">
        <div className="mx-auto flex w-full max-w-[1040px] flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#e8edf5]">
            <VidlyLogo size={28} className="shrink-0" />
            Vidly
          </p>
          <p className="max-w-md text-xs text-[#e8edf5]/48">
            Product site for the Vidly Chrome extension. Extension source may live in a separate
            repository.
          </p>
        </div>
      </footer>
    </>
  );
}
