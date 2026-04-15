# Personal Website

Next.js 14 (App Router) + Tailwind CSS + markdown blog.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What to edit

- `app/layout.tsx` — site name in header/metadata
- `app/page.tsx` — bio, projects list, contact
- `content/posts/*.md` — blog posts (frontmatter: `title`, `date`, `excerpt`)
- `app/globals.css` — styles
- `public/resume.pdf` — drop your resume here (referenced from the home page)

## Deploy to GitHub + Vercel

### 1. Create the GitHub repo

On https://github.com/new, create an empty repo (e.g. `personal-website`) — no README, no .gitignore.

Then in this folder:

```bash
git remote add origin https://github.com/<your-username>/personal-website.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

Easiest path — via dashboard:

1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed
3. Accept defaults (Framework: Next.js) and click **Deploy**

Or via CLI:

```bash
npm i -g vercel
vercel            # first-time: links project
vercel --prod     # production deploy
```

Vercel auto-deploys every push to `main` once the GitHub integration is set up.
