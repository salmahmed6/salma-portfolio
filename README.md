# Salma Ahmed — Portfolio

A bilingual (English/Arabic, full RTL support) personal portfolio built with React + Vite.
Light, minimal, technical design — monospace accents, a live status bar, and a persistent
server-side visitor counter.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edits hot-reload instantly.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy — Vercel (free)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. No config needed — just click **Deploy**.
4. Every push to `main` redeploys automatically.

You can also deploy without GitHub using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Add your photo

The hero currently uses `/public/avatar-placeholder.svg` as a placeholder.

1. Drop your photo into `public/` (e.g. `public/salma.jpg`).
2. Open `src/components/Hero.jsx` and change:
   ```jsx
   <img src="/avatar-placeholder.svg" alt="Salma Ahmed" />
   ```
   to:
   ```jsx
   <img src="/salma.jpg" alt="Salma Ahmed" />
   ```
3. For best results, use a square or 4:5 photo — the frame is 84×84px and uses `object-fit: cover`.

## Editing content

English and Arabic translations are split into dedicated files:

```text
src/i18n/en.js
src/i18n/ar.js
src/i18n/LanguageContext.jsx
```

Keep the same translation keys in both language files so the RTL/LTR switch remains complete.

## Visitor counter

The portfolio uses a Vercel Function at `/api/visitor` and persistent Redis storage. A
server-side anonymous cookie identifies a browser for one year, while the total visitor count
is stored centrally instead of in `localStorage`. The popup animates from `000` to the real total,
then disappears; the total remains visible in the bottom status bar.

Before deploying, configure these Vercel environment variables:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Create an Upstash Redis database and copy its REST URL/token into the Vercel project settings.
Redeploy after adding the variables. Never put the Redis token in frontend code or commit it to Git.

## Project structure

```
src/
  components/     One file per section (Hero, About, Experience, Journey, Projects, Skills, Contact...)
  i18n/           en.js + ar.js (all EN/AR text) + LanguageContext.jsx (toggle + RTL logic)
  hooks/          useClock (status bar), useReveal (scroll-in animations)
  index.css       Design tokens (colors, type, spacing) + shared utility classes
public/
  avatar-placeholder.svg   swap for your photo
  favicon.svg              "SA" monogram favicon
```

## Notes

- Language choice persists across visits via `localStorage`.
- All motion respects `prefers-reduced-motion`.
- The GitHub/npm/App Store links in the Projects section are pulled live from your public
  profiles as of when this was built — double check they still resolve before you ship.
- The visitor counter requires a Vercel Function and Upstash Redis environment variables, so the
  production deployment should remain on a host that supports the `/api/visitor` function.
