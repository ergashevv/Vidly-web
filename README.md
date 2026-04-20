# Vidly — product site (Next.js)

Marketing site for the **Vidly** Chrome extension, built with [Next.js](https://nextjs.org/) and Tailwind CSS.

## Setup

```bash
cd vidly-web
npm install
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_CHROME_STORE_URL` when the extension is published.
- `NEXT_PUBLIC_SUPPORT_EMAIL` to the address shown on **`/support`** — in the Chrome Web Store, set **Support service URL** to your deployed support page (e.g. `https://your-domain.com/support`).

```bash
cp .env.example .env.local
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy

Deploy on [Vercel](https://vercel.com) (recommended for Next.js), or any host that supports Node or static export. For static export, add `output: 'export'` to `next.config.ts` if your host only serves static files.

## Branding

- `components/vidly-logo.tsx` — inline SVG (dark tile + sky accent), used in the header and footer.
- `app/icon.svg` — favicon / app icon (same mark, no white background).
