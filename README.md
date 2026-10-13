# Raghav Bucha Portfolio

A Next.js App Router portfolio built with TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Validate with `npm run lint`, `npm run typecheck`, and `npm run build`.

## Update content

All public content is centralized in `data/site.ts`: personal links, site URL, skills, projects, services, and the optional resume path. Add a resume PDF under `public/` and set `resumePath` (for example, `/raghav-bucha-resume.pdf`) to enable the navigation button.

For a contact form, connect a real provider or API route before adding a form; the site currently uses an honest `mailto:` link.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Keep the default Next.js build settings and deploy.
4. Update `siteConfig.url` with the generated Vercel URL, then redeploy.
5. Later, add a custom domain in Vercel’s Project Settings → Domains and update `siteConfig.url` again.

No environment variables are required for the current site.
