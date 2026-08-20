# Salma Ahmed — Portfolio

A bilingual (English/Arabic, full RTL support) personal portfolio built with React + Vite.
Light, minimal, technical design — monospace accents, a live Cairo-time status bar, and a
typewriter-style terminal in the hero.

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

Everything text-related — English and Arabic — lives in one file:

```
src/i18n/content.js
```

Each section (hero, about, experience, journey, projects, skills, contact) has an `en` and
`ar` version with the same shape. Edit the strings directly; no other file needs to change
for content updates. Arrays (experience items, project cards, journey log entries) can be
reordered, added to, or trimmed freely.

## Project structure

```
src/
  components/     One file per section (Hero, About, Experience, Journey, Projects, Skills, Contact...)
  i18n/           content.js (all EN/AR text) + LanguageContext.jsx (toggle + RTL logic)
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
- No backend, no build secrets, no environment variables — it's a fully static site, so any
  free static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages), not just Vercel.
