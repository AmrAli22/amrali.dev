# Amr Abd-Elhady Ali — Portfolio

Single-page portfolio site. Astro + TypeScript + Tailwind, GSAP for one
restrained hero animation, Lenis for smooth scroll. Static output, deploys
anywhere — instructions for Vercel below.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Project structure

```
src/
├── pages/index.astro              # composes the six sections
├── layouts/Layout.astro           # html shell, fonts, Lenis init, meta tags
├── components/
│   ├── Hero.astro                 # name, headline, CTAs, GSAP reveal
│   ├── About.astro                # bio
│   ├── Experience.astro           # vertical timeline (data-driven)
│   ├── Projects.astro             # 4 case study cards (data-driven)
│   ├── Skills.astro               # 9 groups w/ Lucide icons (data-driven)
│   ├── Contact.astro              # email copy-on-click + socials
│   └── Nav.astro                  # sticky top nav
├── data/
│   ├── experience.ts              # role list — edit here
│   ├── projects.ts                # project list — edit here
│   └── skills.ts                  # skill groups — edit here
├── scripts/
│   ├── lenis.ts                   # smooth scroll init
│   └── hero-anim.ts               # GSAP timeline for hero
└── styles/global.css              # Tailwind + design tokens
```

## Updating content

| What | Where |
|---|---|
| Hero headline / sub-headline / CTAs | `src/components/Hero.astro` |
| About bio | `src/components/About.astro` |
| Email / LinkedIn / GitHub | `src/components/Contact.astro` (top of frontmatter) |
| Experience timeline rows | `src/data/experience.ts` |
| Project cards | `src/data/projects.ts` |
| Skills groups + items | `src/data/skills.ts` |
| Accent color, fonts, tokens | `tailwind.config.mjs` |

LinkedIn and GitHub URLs are placeholders — search the codebase for `TODO` and
update `linkedinUrl` / `githubUrl` in `Contact.astro`.

## Adding project screenshots

1. Create the project folder under `public/`:

   ```
   public/projects/<slug>/01.png
   public/projects/<slug>/02.png
   ```

   Use the same `slug` as in `src/data/projects.ts` (`bussma`, `asseco`,
   `maqraa`, `medica`).

2. Add a `screenshots` array to the matching project entry:

   ```ts
   {
     slug: 'bussma',
     // …
     screenshots: ['/projects/bussma/01.png', '/projects/bussma/02.png'],
   }
   ```

3. Recommended dimensions: 750×1624 (iPhone 15 Pro portrait) or
   1290×2796 at 2x. Use WebP for smaller bundles, PNG for sharpness.
   Keep each file under ~400 KB.

4. The current screenshot slot in `Projects.astro` is a placeholder box.
   When you wire screenshots in, swap the placeholder block for an `<img>`
   carousel or single image.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Vercel → **Add New… → Project** → import the repo.
3. Framework preset auto-detects **Astro**.
4. Build command: `npm run build` (default).
5. Output directory: `dist` (default).
6. No environment variables required.
7. Click **Deploy**.

Future pushes to `main` ship automatically.

## Design tokens

| Token | Value |
|---|---|
| Accent | `#1E3A8A` (deep blue) |
| Background | `#FAFAF9` |
| Text | `#0A0A0A` |
| Muted text | `#525252` |
| Heading font | Geist Variable (npm) |
| Body font | system stack (`-apple-system`, …) |
| Skills icons | Lucide via `astro-icon` |

## Accessibility & motion

- Semantic landmarks (`<main>`, `<section aria-labelledby>`).
- Visible focus rings on every interactive element (accent color, 2px).
- `prefers-reduced-motion` is honored — Lenis is disabled and the hero
  animation skips straight to the rest state when the user has reduce-motion
  on.

## License

Private — content and code by Amr Abd-Elhady Ali.
