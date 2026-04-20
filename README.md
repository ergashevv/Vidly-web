# Vidly — product site (Next.js)

Marketing site for the **Vidly** Chrome extension, built with [Next.js](https://nextjs.org/) and Tailwind CSS.

## Setup

```bash
cd vidly-web
npm install
```

## Environment

Copy `.env.example` to `.env.local` and set your store URL when the extension is published:

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

## Assets

- `public/assets/icon-128.png` — extension icon used in the header and favicon.
