import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing — Mukhthar Ali Ashraf",
  description: "Notes and essays.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div>
      <h1 className="text-2xl font-medium mb-8">Writing</h1>
      {posts.length === 0 ? (
        <p className="text-sm text-neutral-500">Nothing published yet.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="no-underline flex items-baseline justify-between gap-6 group"
              >
                <span className="group-hover:underline underline-offset-4">{post.title}</span>
                <span className="text-sm text-neutral-500 whitespace-nowrap tabular-nums">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
