# Portfolio

William's personal and professional skills site, built with [Astro](https://astro.build) as a static site and intended for deployment on [Render](https://render.com).

All visitor-facing copy lives in one file so you can update the site without touching layout or styles.

## Edit content

Open [`src/data/profile.json`](src/data/profile.json). That file holds:

- Name, headline, short bio, about text, and location
- Skills, grouped by category
- Projects (name, description, URL, language)
- Experience (role, organization, dates, summary)
- Contact email and links

Anything that is not yet known is marked with a `TODO:` prefix (for example, `TODO: add email`). The site renders those values as visible placeholders instead of inventing details. Replace a `TODO:` value with the real text; links and the email address become clickable once they no longer start with `TODO:`.

Skills currently come from the public GitHub bio. Project entries are real public repositories. Do not add jobs, employers, or dates unless they are accurate.

## Run locally

Requires Node.js 22.23.4 or later (even-numbered releases; see the `engines` field in `package.json`).

```sh
npm install
npm run dev
```

The dev server starts at [http://localhost:4321](http://localhost:4321).

Other useful commands:

```sh
npm run build      # Production build to ./dist
npm run preview    # Serve the production build locally
```

## Deploy on Render

This repo includes a [`render.yaml`](render.yaml) Blueprint for a static site named `portfolio`. It does not create the Render service by itself. When you are ready to go live, connect this GitHub repository to Render as a Blueprint (or create a Static Site and point it at the repo).

The Blueprint uses:

| Setting | Value |
| --- | --- |
| Branch | `main` |
| Build command | `npm ci && npm run build` |
| Publish directory | `./dist` |
| Auto-deploy | On each commit to `main` (`autoDeployTrigger: commit`) |

Render installs dependencies from `package-lock.json` via `npm ci`, builds the static output into `dist`, and serves that folder on its CDN. Later commits to `main` deploy automatically.

## Project structure

```text
/
├── public/                 # Favicon and other static assets
├── src/
│   ├── data/
│   │   ├── profile.json    # Editable site content
│   │   └── types.ts        # TypeScript types for that content
│   ├── layouts/            # HTML shell, SEO meta, header, footer
│   ├── lib/                # Helpers (placeholder detection)
│   ├── pages/index.astro   # Single-page sections
│   └── styles/global.css   # Layout and light/dark styles
├── astro.config.mjs
├── render.yaml
└── package.json
```
