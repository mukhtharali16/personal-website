import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const projects = [
  {
    name: "Langgraph",
    description:
      "Experiments with LangGraph — building stateful, multi-step AI agents.",
    href: "https://github.com/mukhtharali16/Langgraph",
  },
  {
    name: "Bootdev-bookbot",
    description:
      "A small Python CLI that analyzes books by word count. Built following the Boot.dev backend course.",
    href: "https://github.com/mukhtharali16/Bootdev-bookbot",
  },
  {
    name: "2026-Exp",
    description: "Scratchpad repo for trying new ideas and tools this year.",
    href: "https://github.com/mukhtharali16/2026-Exp",
  },
  {
    name: "personal-website",
    description:
      "This site. Next.js 14 + Tailwind, file-based markdown blog, deployed on Vercel.",
    href: "https://github.com/mukhtharali16/personal-website",
  },
];

const trivia = [
  "Kochi-grown, TKM-trained — Electrical & Electronics Engineering, now writing software for a living.",
  "QA by title, tinkerer by temperament. Most of my side projects start as \"what if I automated this?\"",
  "Currently nerding out on agentic AI — LangGraph, tool-using agents, and the messy middle of getting them to actually finish a task.",
  "Will happily spend a Saturday debugging a broken build and call it relaxing.",
  "Coffee in the morning, chai by evening. Both non-negotiable.",
  "Movie taste swings from Kurosawa to Nolan to Malayalam classics in the same week.",
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-2xl font-medium mb-6">Mukhthar Ali Ashraf</h1>
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-7">
          <p>
            QA engineer at{" "}
            <a href="https://mitsogo.com" target="_blank" rel="noreferrer">
              Mitsogo
            </a>
            , based in Kochi. Fresh out of TKM College of Engineering with a
            degree in Electrical & Electronics Engineering.
          </p>
          <p>
            I spend my time building apps and learning about agentic AI — the
            kind of software that can plan, use tools, and finish a task on its own.
          </p>
          <p>This is where I write about what I'm learning.</p>
        </div>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          Trivia
        </h2>
        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 leading-7">
          {trivia.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-neutral-400 select-none">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm uppercase tracking-widest text-neutral-500">
            Films
          </h2>
          <Link
            href="/films"
            className="text-xs text-neutral-500 no-underline hover:underline"
          >
            see all ↗
          </Link>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 leading-7">
          A running list of favourite films — Kurosawa, Nolan, a handful of
          Malayalam classics. <Link href="/films">Browse the list</Link>.
        </p>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          Projects
        </h2>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="no-underline block group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium group-hover:underline underline-offset-4">
                    {p.name}
                  </span>
                  <span className="text-xs text-neutral-500">github ↗</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-6">
                  {p.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          Writing
        </h2>
        {posts.length === 0 ? (
          <p className="text-sm text-neutral-500">Nothing published yet.</p>
        ) : (
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="no-underline flex items-baseline justify-between gap-6 group"
                >
                  <span className="group-hover:underline underline-offset-4">
                    {post.title}
                  </span>
                  <span className="text-sm text-neutral-500 whitespace-nowrap tabular-nums">
                    {post.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          Elsewhere
        </h2>
        <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>
            <a href="mailto:fahim@bitsit.in">fahim@bitsit.in</a>
          </li>
          <li>
            <a
              href="https://github.com/mukhtharali16"
              target="_blank"
              rel="noreferrer"
            >
              github.com/mukhtharali16
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
