# Richmon & Christal's Wedding — 12.02.26

Richmon C. Lorenzo & Christal Joy L. Pancho Wedding Celebration.
December 2, 2026 at Parish of Immaculate Heart of Mary & Jardin de Miramar, Antipolo City.

Static Vite + React + Tailwind site. No backend, no API keys, no server dependencies.

## Run locally

Prerequisites: Node.js 20+

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This project is Vercel-ready (Vite framework, `dist` output):

1. Push to GitHub / GitLab / Bitbucket
2. Import the repo in Vercel — framework preset: **Vite**, build command `npm run build`, output `dist`
3. No environment variables required
4. Deploy — every push gets a preview deployment

Or via CLI:

```bash
npx vercel
```

## Notes

- RSVP uses an external Google Form link (`src/components/RSVP.tsx`) — no API key needed.
- Google Fonts (Cormorant Garamond / Montserrat / Pinyon Script) load via CDN in `index.html`.
- `metadata.json`, `GEMINI_API_KEY`, and `APP_URL` from Google AI Studio have been removed — they are not used by this site.
