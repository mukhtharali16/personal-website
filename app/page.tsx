import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const projects = [
  {
    title: "Project One",
    description: "Short description of what this project does and why it matters.",
    href: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description: "Short description of what this project does and why it matters.",
    href: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description: "Short description of what this project does and why it matters.",
    href: "https://github.com/your-username/project-three",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="pt-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hi, I'm <span className="text-blue-600">Your Name</span>.
        </h1>
        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          I'm a &lt;role&gt; based in &lt;city&gt;. I build &lt;what you build&gt; and write
          about &lt;topics&gt;. TODO: replace this bio with your own.
        </p>
        <div className="mt-6 flex gap-4 text-sm">
          <a href="mailto:you@example.com" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            Get in touch
          </a>
          <a href="/resume.pdf" className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900">
            Resume
          </a>
        </div>
      </section>

      <section id="projects">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.title} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition">
              <a href={p.href} target="_blank" rel="noreferrer" className="block">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{p.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">Latest writing</h2>
          <Link href="/blog" className="text-sm text-blue-600 hover:underline">All posts →</Link>
        </div>
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex items-baseline justify-between gap-4">
                <span className="group-hover:underline">{post.title}</span>
                <span className="text-sm text-neutral-500 whitespace-nowrap">{post.date}</span>
              </Link>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="text-neutral-500 text-sm">No posts yet — add a markdown file in <code>content/posts/</code>.</li>
          )}
        </ul>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Email me at <a className="text-blue-600 hover:underline" href="mailto:you@example.com">you@example.com</a>, or find me on{" "}
          <a className="text-blue-600 hover:underline" href="https://github.com/your-username">GitHub</a> and{" "}
          <a className="text-blue-600 hover:underline" href="https://linkedin.com/in/your-username">LinkedIn</a>.
        </p>
      </section>
    </div>
  );
}
