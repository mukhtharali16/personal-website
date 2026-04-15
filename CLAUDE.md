# Personal Website — Claude Instructions

## Deployment policy — auto-push to production

**Every code change that touches this project must be committed and pushed to `origin/main` before the turn ends.** This is pre-authorized — do NOT ask for confirmation each time. The user has already approved auto-deploys to production as the default workflow for this project.

### The flow, every time code changes here

1. Make the edit.
2. Sanity-check locally where feasible:
   - If the change is TypeScript/React, run `npm run build` (or at minimum `npx tsc --noEmit`) and fix type/build errors before committing. Do not push a known-broken build.
   - If there is no build step for the change (e.g., adding a markdown post, a public asset), skip this.
3. `git add` the specific files you changed (never `git add -A` — avoid accidentally staging `.env`, `.vercel/`, or other sensitive/local files).
4. `git commit` with a concise message describing the *why*, not the *what*. Use the Co-Authored-By trailer per the default commit protocol.
5. `git push origin main`.
6. Report the pushed commit SHA and note that Vercel will auto-deploy to production.

### When NOT to auto-push

Even with this standing authorization, pause and confirm with the user first if any of these apply:

- The change involves **secrets, credentials, or environment variables** (`.env*`, keys, tokens).
- The change is **destructive or hard to reverse** at the git level (force-push, history rewrite, deleting the remote branch).
- The change touches `next.config.js`, `package.json` deps, routing, auth, or anything that could break production rendering — in that case, push to a **preview branch** first and share the Vercel preview URL instead of going straight to `main`.
- `npm run build` fails and you cannot fix the failure cleanly.
- The user explicitly says "don't push" or "wait" for this change.

### Vercel wiring (for context)

- The project is linked via `.vercel/project.json` → Vercel project `personal-website`.
- The GitHub repo `github.com/mukhtharali16/personal-website` is connected to Vercel's Git integration, so **pushes to `main` trigger a production deploy automatically**. Pushes to any other branch produce a preview deploy only.

## Project conventions

- **Stack:** Next.js 14 (App Router) + Tailwind CSS + TypeScript, file-based markdown blog under `content/posts/`.
- **Style:** minimalist, single-column `max-w-xl` layout. Keep typography restrained; avoid adding heavy UI libraries.
- **Images:** dropped in `public/`. Use plain `<img>` (not `next/image`) for local assets to avoid having to configure image domains for each third-party source.
- **Commits:** small and focused. One logical change per commit. Messages in imperative mood, lowercase first word is fine, no trailing period.

## Want stronger guarantees?

If you ever want the auto-push behavior enforced by the harness (so Claude physically cannot end a turn without pushing), convert this into a Stop hook in `.claude/settings.json` via the `update-config` skill. Until then, this file is the contract.
