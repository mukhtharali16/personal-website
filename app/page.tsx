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
  "Movie taste swings from Kurosawa to Nolan to Malayalam classics in the same week — see below.",
];

const movies = [
  {
    title: "Top Gun",
    year: 1986,
    poster: "/movies/top-gun.jpg",
    description:
      "Maverick, jets, and the loudest soundtrack of the '80s. Pure cinematic adrenaline.",
  },
  {
    title: "Seven Samurai",
    year: 1954,
    poster: "/movies/seven-samurai.jpg",
    description:
      "Kurosawa's blueprint for every team-assembles-to-defend-the-village story since. Three-plus hours that feel like ninety minutes.",
  },
  {
    title: "Citizen Kane",
    year: 1941,
    poster: "/movies/citizen-kane.jpg",
    description:
      "Orson Welles at 25, reinventing what a movie could do with a camera. Rosebud still hits.",
  },
  {
    title: "Oru Vadakkan Veeragatha",
    year: 1989,
    poster: "/movies/oru-vadakkan-veeragatha.jpg",
    description:
      "Malayalam cinema at its most literary — MT's retelling of the Chandu legend, with Mammootty giving the performance of a career.",
  },
  {
    title: "Dasharatham",
    year: 1989,
    poster: "/movies/dasharatham.jpg",
    description:
      "A quiet, grown-up film about a single man who wants to be a father. Mohanlal in one of his warmest roles.",
  },
  {
    title: "Project Hail Mary",
    year: 2026,
    poster: "/movies/project-hail-mary.jpg",
    description:
      "Andy Weir's problem-solving-in-space novel on the big screen — engineering as heroism, with an alien best friend.",
  },
  {
    title: "Seven Psychopaths",
    year: 2012,
    poster: "/movies/seven-psychopaths.jpg",
    description:
      "Martin McDonagh writing a movie about writing a movie, with a stolen Shih Tzu and a lot of blood.",
  },
  {
    title: "Midsommar",
    year: 2019,
    poster: "/movies/midsommar.jpg",
    description:
      "A horror film set entirely in daylight. Ari Aster turning a breakup into folk-ritual catharsis.",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    poster: "/movies/oppenheimer.jpg",
    description:
      "Three hours of physics, politics, and guilt — Nolan at his most restrained, Cillian Murphy at his most haunted.",
  },
  {
    title: "Fight Club",
    year: 1999,
    poster: "/movies/fight-club.jpg",
    description:
      "We don't talk about it. But the editing, the score, and the third-act reveal still set the bar.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    poster: "/movies/the-dark-knight.jpg",
    description:
      "Heath Ledger's Joker turned a superhero movie into a crime epic. Still the benchmark.",
  },
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
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
          Top 10 Movies
        </h2>
        <p className="text-sm text-neutral-500 mb-6">
          (Eleven, actually. Ten is a lie — there are too many good films.)
        </p>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-8">
          {movies.map((m) => (
            <li key={m.title} className="space-y-3">
              <div className="aspect-[2/3] overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.poster}
                  alt={`${m.title} poster`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-medium leading-tight">{m.title}</span>
                  <span className="text-xs text-neutral-500 tabular-nums">
                    {m.year}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-6">
                  {m.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
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
