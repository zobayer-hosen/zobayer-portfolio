# Md Zobayer Hosen — Portfolio

Personal portfolio built with **Next.js 16** (App Router, TypeScript) and exported as a static site for GitHub Pages.

Live: https://zobayer-hosen.github.io/zobayer-portfolio/

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export in ./out
npm run lint
npm run typecheck
```

## Editing content

All text lives in typed files under `src/data/`, so updating the site never means touching markup:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, contact links, typed hero roles, interests, About metrics |
| `experience.ts` | Jobs and internships (`start`/`end` as `YYYY-MM`; leave `end` out for a current role) |
| `projects.ts` | Project cards and the filter buttons |
| `research.ts` | Research entries (`status`: `ongoing`, `under-review`, `accepted`, `published`) |
| `education.ts` | Degrees and schools |
| `skills.ts` | Skill groups, engineering practices and the toolbox icons ([devicon](https://devicon.dev) class names) |
| `achievements.ts` | Honours, certificates, languages and references |

Images are in `src/assets/` (imported, so Next.js fingerprints them). The résumé PDF is `public/Md_Zobayer_Hosen_CV.pdf`.

## Structure

```
src/
  app/          layout (metadata, fonts, theme script), page, global styles, favicon, Open Graph image
  components/   Nav, icon sprite, client effects (reveal, particles, back-to-top, count-up)
    sections/   one component per page section
  data/         site content
  lib/          date helpers, basePath helper
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes `out/` on every push to `main`.
In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
The workflow passes the Pages base path (e.g. `/portfolio`) to the build, so the same code works for a
project site or a `<user>.github.io` site.
