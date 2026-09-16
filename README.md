# Developer Portfolio (React + Vite)

A single-page portfolio site built with React, Vite, and plain CSS (no UI framework) — meant as a resume/GitHub project for junior developer applications.

## Before you deploy — replace these placeholders

- `index.html` — page `<title>` and meta description
- `src/components/Header.jsx` — "Your Name"
- `src/components/Hero.jsx` — headline, intro text, résumé link
- `src/components/Contact.jsx` — email, GitHub, LinkedIn URLs
- `src/data/projects.js` — your real projects, links and tags (the Driftwood landing page from this same portfolio is already filled in as an example)
- `src/components/Footer.jsx` — name / year
- Add your résumé PDF to `public/resume.pdf` so the "Download résumé" button works

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview   # test the production build locally
```

Output goes to `dist/`.

## Deploy to GitHub Pages

1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Install the deploy helper (already in devDependencies): `npm install`
3. Run:
   ```bash
   npm run build
   npm run deploy
   ```
4. In your repo's **Settings → Pages**, set the source to the `gh-pages` branch.
5. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

Alternatively, deploy for free on **Vercel** or **Netlify** by connecting the GitHub repo directly — both auto-detect Vite and need no config changes.

## What this project demonstrates

- Component-based architecture (Header, Hero, Projects, Skills, Contact, Footer)
- `useState` hook for a mobile navigation menu
- Data-driven rendering (`projects.js` mapped into UI, not hardcoded HTML)
- CSS custom properties for theming, including dark-mode support
- Responsive, mobile-first layout
- A real build/deploy pipeline via Vite
